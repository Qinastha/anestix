export interface ScoreOption {
  value: number;
  description: string;
}

interface ScoreCriteriaBase {
  id: string;
  label: string;
  type: 'base' | 'input' | 'radio';
}

// Type-specific definitions
export interface ScoreCriteriaInput extends ScoreCriteriaBase {
  type: 'input';
  factor: number;
  factorType: 'multiply' | 'subtract';
  maxValue: number;
  minValue: number;
}

export interface ScoreCriteriaSelect extends ScoreCriteriaBase {
  type: 'base';
  options: ScoreOption[];
}

export interface ScoreCriteriaRadio extends ScoreCriteriaBase {
  type: 'radio';
  options: ScoreOption[];
}

// Discriminated union
export type ScoreCriteria =
  | ScoreCriteriaInput
  | ScoreCriteriaSelect
  | ScoreCriteriaRadio;

export interface ScoreResult {
  total: number;
  summaryText: string;
}

export interface ScoreResultThreshold {
  min: number;
  max: number;
  summaryText: string;
}

export interface ScoreConfig {
  id: string;
  name: string;
  description: string;
  criteria: ScoreCriteria[];
  result?: ScoreResult;
  resultThresholds: ScoreResultThreshold[];
  extraDescription?: string;
}
