export type DrugResultItem = {
  label: string;
  value: number;
  unit: string;
};

export type DrugResult = Record<string, DrugResultItem>;

export interface DrugParameter {
  key: string;
  label: string;
  type: 'number';
}

export interface DrugCalculatorConfig {
  label: string;
  parameters: DrugParameter[];
  calculate: (
    params: Record<string, number>,
    setResult: (result: DrugResult) => void
  ) => void;
}
