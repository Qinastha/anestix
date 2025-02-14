export type FormulaResultItem = {
  label: string;
  value: number;
  unit: string;
};

export type FormulaResult = Record<string, FormulaResultItem>;

export interface FormulaParameter {
  key: string;
  label: string;
  type: 'number' | 'select';
  options?: { label: string; value: string | number }[];
}

export interface FormulaConfig {
  id: string;
  label: string;
  parameters: FormulaParameter[];
  calculate: (
    params: Record<string, number | string>,
    setResult: (result: FormulaResult) => void
  ) => void;
}
