import { MedicalUnits } from '@/types/MedicalUnits.type';

export type FormulaResultItem = {
  label: string;
  value: number;
  unit: MedicalUnits;
};

export type FormulaResult = Record<string, FormulaResultItem>;

export interface FormulaParameter {
  key: string;
  label: string;
  unit: MedicalUnits;
  type: 'number' | 'select' | 'boolean';
  options?: { label: string; value: string | number }[];
}

export interface FormulaConfig {
  id: string;
  label: string;
  parameters: FormulaParameter[];
  calculate: (
    params: Record<string, number | string | boolean>,
    setResult: (result: FormulaResult) => void
  ) => void;
  annotation?: string;
}
