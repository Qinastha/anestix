export interface ScoreOption {
  value: number;
  description: string;
}

export interface ScoreCriteria {
  id: string;
  label: string;
  type?: 'select' | 'input' | 'radio';
  options: ScoreOption[];
}

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
