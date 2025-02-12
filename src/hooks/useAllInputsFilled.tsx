import { useMemo } from 'react';

interface Parameter {
  key: string;
}

export function useAllInputsFilled(
  parameters: Parameter[],
  formValues: Record<string, number>
): boolean {
  return useMemo(
    () =>
      parameters.every(
        (param) =>
          formValues[param.key] !== undefined && !isNaN(formValues[param.key])
      ),
    [parameters, formValues]
  );
}
