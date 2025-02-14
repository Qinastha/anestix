import { MedicalUnits } from '@/types/MedicalUnits.type';

export type DrugResultItem = {
  label: string;
  value: number;
  unit: MedicalUnits;
};

export type DrugResult = Record<string, DrugResultItem>;

export interface DrugParameter {
  key: string;
  label: string;
  unit: MedicalUnits;
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
