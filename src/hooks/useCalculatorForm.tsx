import { useCallback, useMemo, useState } from 'react';

type ExtractFormValues<T extends { key: string; type?: 'number' | 'select' }> =
  T extends { type: 'number' }
    ? Record<string, number>
    : Record<string, number | string>;

interface UseCalculatorFormArgs<
  TParam extends { key: string; type?: 'number' | 'select' },
  TResult,
> {
  parameters: TParam[];
  calculate: (
    formValues: ExtractFormValues<TParam>,
    setResult: (result: TResult) => void
  ) => void;
}

export function useCalculatorForm<
  TParam extends { key: string; type: 'number' | 'select' },
  TResult,
>({ parameters, calculate }: UseCalculatorFormArgs<TParam, TResult>) {
  const [formValues, setFormValues] = useState<Record<string, number | string>>(
    {}
  );
  const [result, setResult] = useState<TResult | null>(null);

  const handleChange = useCallback(
    (key: string, value: string) => {
      setFormValues((prev) => {
        if (value.trim() === '') {
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
    return parameters.every(
      (param) =>
        formValues[param.key] !== undefined && formValues[param.key] !== ''
    );
  }, [parameters, formValues]);

  return {
    handleChange,
    handleCalculate,
    allInputsFilled,
    result,
    formValues,
  };
}
