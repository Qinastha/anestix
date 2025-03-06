'use client';
import { useCallback, useMemo, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

type CalculatorFormValues<T extends Param[]> = {
  [P in T[number] as P['key']]: P['type'] extends 'number'
    ? number
    : P['type'] extends 'select'
      ? string
      : P['type'] extends 'boolean'
        ? boolean
        : never;
};

interface Param {
  key: string;
  type: 'number' | 'select' | 'boolean';
  optional?: boolean;
  minValue?: number;
  maxValue?: number;
  defaultValue?: number | string | boolean;
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
  const { t } = useTranslation();
  //Initiate a form values with default params from config or ""
  const initialFormValues = useMemo(() => {
    const initial: Record<string, number | string | boolean> = {};
    parameters.forEach((param) => {
      if (param.type === 'select') {
        if (param.defaultValue !== undefined) {
          initial[param.key] = String(param.defaultValue);
        } else if (param.options && param.options.length > 0) {
          initial[param.key] = String(param.options[0].value);
        }
      } else if (param.type === 'number') {
        if (param.defaultValue !== undefined) {
          initial[param.key] = param.defaultValue;
        }
      } else if (param.type === 'boolean') {
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
        const parsedValue = param?.type === 'number' ? Number(value) : value;

        return {
          ...prev,
          [key]: parsedValue,
        };
      });
    },
    [parameters]
  );

  const handleCalculate = useCallback(() => {
    const hasInvalidNumber = parameters.some((param) => {
      if (param.type !== 'number') return false;
      const value = formValues[param.key];
      if (typeof value !== 'number') return false;
      return (
        (param.minValue !== undefined && value < param.minValue) ||
        (param.maxValue !== undefined && value > param.maxValue)
      );
    });

    if (hasInvalidNumber) {
      toast.error(t('toasts.invalidRange'), {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        transition: Bounce,
      });
      return;
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
