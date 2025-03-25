'use client';
import { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslations } from 'use-intl';

type CalculatorFormValues<T extends Param[]> = {
  [P in T[number] as P['key']]: P['type'] extends 'number'
    ? number
    : P['type'] extends 'select'
      ? string
      : P['type'] extends 'boolean'
        ? boolean
        : string | number;
};

interface Param {
  key: string;
  label: string;
  type: 'number' | 'select' | 'boolean' | 'numberInUnits';
  optional?: boolean;
  minValue?: number;
  maxValue?: number;
  defaultValue?: number | string | boolean;
  maxDosage?: number;
  unit?: string;
  options?: { label: string; value: string | number }[];
}

interface UseCalculatorFormArgs<TParam extends Param, TResult> {
  parameters: TParam[];
  calculate: (
    formValues: CalculatorFormValues<TParam[]>,
    setResult: (result: TResult) => void
  ) => void;
}

export function useCalculatorForm<TParam extends Param, TResult>({
  parameters,
  calculate,
}: UseCalculatorFormArgs<TParam, TResult>) {
  const tToasts = useTranslations('Toasts');
  const tUnits = useTranslations('Units');
  const tCalc = useTranslations('CalculatorsPage');
  //Initiate a form values with default params from config or ""
  const initialFormValues = useMemo(() => {
    const initial: Record<string, number | string | boolean> = {};
    parameters.forEach((param) => {
      if (param.type === 'numberInUnits') {
        if (param.defaultValue !== undefined) {
          initial[param.key] = param.defaultValue;
        }
        initial[`${param.key}_unit`] = param.options?.[0]?.value || '';
      }
      if (param.type === 'select') {
        if (param.defaultValue !== undefined) {
          initial[param.key] = String(param.defaultValue);
        } else if (param.options && param.options.length > 0) {
          initial[param.key] = String(param.options[0].value);
        }
      }
      if (param.type === 'number') {
        if (param.defaultValue !== undefined) {
          initial[param.key] = param.defaultValue;
        }
      }
      if (param.type === 'boolean') {
        initial[param.key] = param.defaultValue ?? false;
      }
    });
    return initial;
  }, [parameters]);

  const [formValues, setFormValues] =
    useState<Record<string, number | string | boolean>>(initialFormValues);
  const [result, setResult] = useState<TResult | null>(null);

  const handleChange = useCallback(
    (key: string, value: string | number | boolean) => {
      setFormValues((prev) => {
        if (typeof value === 'string' && value.trim() === '') {
          const updated = { ...prev };
          delete updated[key];
          return updated;
        }

        const param = parameters.find((p) => p.key === key);
        const parsedValue =
          param?.type === 'number' || param?.type === 'numberInUnits'
            ? Number(value)
            : value;
        return {
          ...prev,
          [key]: parsedValue,
        };
      });
    },
    [parameters]
  );

  const { invalidParams, overDosageParams } = useMemo(() => {
    const invalid: Param[] = [];
    const overDosage: Param[] = [];
    parameters.forEach((param) => {
      if (param.type === 'number' || param.type === 'numberInUnits') {
        const value = formValues[param.key];
        if (typeof value !== 'number') return;
        if (
          (param.minValue !== undefined && value <= param.minValue) ||
          (param.maxValue !== undefined && value >= param.maxValue + 0.1)
        ) {
          invalid.push(param);
        }
        if (param.maxDosage !== undefined && value > param.maxDosage) {
          overDosage.push(param);
        }
      }
    });
    return { invalidParams: invalid, overDosageParams: overDosage };
  }, [parameters, formValues]);

  const handleCalculate = useCallback(() => {
    if (invalidParams.length) {
      invalidParams.forEach((invalidParam) => {
        let translationKey = '';
        // Determine the proper message key based on provided constraints.
        if (
          invalidParam.minValue !== undefined &&
          invalidParam.maxValue !== undefined
        ) {
          translationKey = 'invalidRangeBoth';
        } else if (invalidParam.minValue !== undefined) {
          translationKey = 'invalidRangeMin';
        } else if (invalidParam.maxValue !== undefined) {
          translationKey = 'invalidRangeMax';
        }

        toast.error(
          tToasts(translationKey, {
            paramName: tCalc(invalidParam.label),
            min: invalidParam.minValue ?? 0,
            max: invalidParam.maxValue ?? 0,
            unit: invalidParam.unit ? tUnits(invalidParam.unit) : '',
          }),
          {
            position: 'top-right',
            autoClose: 2000,
            theme: 'colored',
          }
        );
      });
      return;
    }

    if (overDosageParams.length) {
      overDosageParams.forEach((overDosageParam) => {
        toast.info(
          tToasts('overDosage', {
            paramName: tCalc(overDosageParam.label),
            maxValue: overDosageParam.maxDosage ?? 0,
            unit: overDosageParam.unit ? tUnits(overDosageParam.unit) : '',
          }),
          {
            position: 'top-right',
            autoClose: 2000,
          }
        );
      });
    }
    calculate(formValues as CalculatorFormValues<TParam[]>, setResult);
  }, [calculate, formValues, parameters]);

  const allInputsFilled: boolean = useMemo(() => {
    return parameters.every((param) => {
      if (param.type === 'boolean' || param.optional) {
        return true;
      }
      const value = formValues[param.key];
      return value !== undefined && value !== '';
    });
  }, [parameters, formValues]);

  return {
    handleChange,
    handleCalculate,
    allInputsFilled,
    result,
    formValues,
  };
}
