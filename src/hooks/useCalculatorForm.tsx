import { useCallback, useMemo, useState } from 'react';

type ExtractFormValues<
  T extends { key: string; type?: 'number' | 'select' | 'boolean' },
> = T extends { type: 'number' }
  ? Record<string, number>
  : Record<string, number | string | boolean>;

interface Param {
  key: string;
  type: 'number' | 'select' | 'boolean';
  optional?: boolean;
}

interface UseCalculatorFormArgs<TParam extends Param, TResult> {
  parameters: TParam[];
  calculate: (
    formValues: ExtractFormValues<TParam>,
    setResult: (result: TResult) => void
  ) => void;
}

export function useCalculatorForm<TParam extends Param, TResult>({
  parameters,
  calculate,
}: UseCalculatorFormArgs<TParam, TResult>) {
  const [formValues, setFormValues] = useState<
    Record<string, number | string | boolean>
  >({});
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
    calculate(formValues as ExtractFormValues<TParam>, setResult);
  }, [calculate, formValues]);

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
