export type DrugResultItem = {
  label: string;
  value: number;
  unit: string;
};

export type DrugResult = Record<string, DrugResultItem>;

export interface CalculatorParameter {
  key: string;
  label: string;
  type: 'number' | 'text';
}

export interface DrugCalculatorConfig {
  label: string;
  parameters: CalculatorParameter[];
  calculate: (
    params: Record<string, number>,
    setResult: (result: DrugResult) => void
  ) => void;
}
