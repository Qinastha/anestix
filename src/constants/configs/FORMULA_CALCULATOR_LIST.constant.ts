import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';
import { BMI_CONFIG } from '@/constants/configs/formula_configs/BMI_CONFIG.constant';
import { DAILY_CALORIES_CONFIG } from '@/constants/configs/formula_configs/DAILY_CALORIES_CONFIG.constant';
import { CREATININE_CLEARANCE_CONFIG } from '@/constants/configs/formula_configs/CREATININE_CLEARANCE_CONFIG.constant';
import { ALGOVER_CONFIG } from '@/constants/configs/formula_configs/ALGOVER_CONFIG.constant';
import { WATER_BALANCE_CONFIG } from '@/constants/configs/formula_configs/WATER_BALANCE_CONFIG.constant';
import { DAILY_DIURESIS_CONFIG } from '@/constants/configs/formula_configs/DAILY_DIURESIS_CONFIG.constant';
import { PLASMA_EXCHANGE_CONFIG } from '@/constants/configs/formula_configs/PLASMA_EXCHANGE_CONFIG.constant';
import { PEDIATRIC_INFUSION_RATE_CONFIG } from '@/constants/configs/formula_configs/PEDIATRIC_INFUSION_RATE_CONFIG.constant';
import { SOLUTION_CONCENTRATION_CONFIG } from '@/constants/configs/formula_configs/SOLUTION_CONCENTRATION_CONFIG.constant';
import { IDEAL_BODY_WEIGHT_CONFIG } from '@/constants/configs/formula_configs/IDEAL_BODY_WEIGHT_CONFIG.constant';
import { MAP_CONFIG } from '@/constants/configs/formula_configs/MAP_CONFIG.constant';
import { POTASSIUM_DEFICIT_CONFIG } from '@/constants/configs/formula_configs/POTASSIUM_DEFICIT_CONFIG.constant';

export const FORMULA_CALCULATOR_LIST: Record<string, FormulaConfig> = {
  [BMI_CONFIG.id]: BMI_CONFIG,
  [DAILY_CALORIES_CONFIG.id]: DAILY_CALORIES_CONFIG,
  [CREATININE_CLEARANCE_CONFIG.id]: CREATININE_CLEARANCE_CONFIG,
  [WATER_BALANCE_CONFIG.id]: WATER_BALANCE_CONFIG,
  [ALGOVER_CONFIG.id]: ALGOVER_CONFIG,
  [DAILY_DIURESIS_CONFIG.id]: DAILY_DIURESIS_CONFIG,
  [PLASMA_EXCHANGE_CONFIG.id]: PLASMA_EXCHANGE_CONFIG,
  [PEDIATRIC_INFUSION_RATE_CONFIG.id]: PEDIATRIC_INFUSION_RATE_CONFIG,
  [SOLUTION_CONCENTRATION_CONFIG.id]: SOLUTION_CONCENTRATION_CONFIG,
  [IDEAL_BODY_WEIGHT_CONFIG.id]: IDEAL_BODY_WEIGHT_CONFIG,
  [MAP_CONFIG.id]: MAP_CONFIG,
  [POTASSIUM_DEFICIT_CONFIG.id]: POTASSIUM_DEFICIT_CONFIG,
};
