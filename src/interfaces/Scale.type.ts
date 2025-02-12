export interface ScaleOption {
  value: number;
  label: string;
  description?: string;
}

export interface ScaleCriteria {
  id: string;
  label: string;
  options?: ScaleOption[];
}

export interface ScaleResult {
  total: number;
  summaryText: string;
}

export interface ScaleResultThreshold {
  min: number;
  max: number;
  summaryText: string;
}

export interface ScaleConfig {
  id: string;
  name: string;
  description: string;
  options: ScaleOption[];
  criteria: ScaleCriteria[];
  result?: ScaleResult;
  resultThresholds: ScaleResultThreshold[];
  extraDescription?: string;
}
