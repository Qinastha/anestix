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
  type: 'number' | 'select' | 'boolean';
  optional?: boolean;
  minValue?: number;
  maxValue?: number;
  defaultValue?: number;
  maxDosage?: number;
  options?: { label: string; value: string | number }[];
}

export interface DrugCalculatorConfig {
  id: string;
  label: string;
  parameters: DrugParameter[];
  calculate: (
    params: Record<string, number | string>,
    setResult: (result: DrugResult) => void
  ) => void;
  annotation?: string;
}
