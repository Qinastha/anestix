import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';
import { ACTILYSE_CONFIG } from '@/constants/configs/drug_configs/ACTILYSE_CONFIG.constant';
import { ATRACURIUM_CONFIG } from '@/constants/configs/drug_configs/ATRACURIUM_CONFIG.constant';
import { DEXON_CONFIG } from '@/constants/configs/drug_configs/DEXON_CONFIG.constant';
import { DITILIN_CONFIG } from '@/constants/configs/drug_configs/DITILIN_CONFIG.constant';
import { DOPAMINE_CONFIG } from '@/constants/configs/drug_configs/DOPAMINE_CONFIG.constant';
import { FENTANYL_CONFIG } from '@/constants/configs/drug_configs/FENTANYL_CONFIG.constant';
import { GOMH_CONFIG } from '@/constants/configs/drug_configs/GOMH_CONFIG.constant';
import { KETAMINE_CONFIG } from '@/constants/configs/drug_configs/KETAMINE_CONFIG.constant';
import { NALOXONE_CONFIG } from '@/constants/configs/drug_configs/NALOXONE_CONFIG.constant';
import { NITROGLYCERIN_CONFIG } from '@/constants/configs/drug_configs/NITROGLYCERIN_CONFIG.constant';
import { NORADRENALINE_CONFIG } from '@/constants/configs/drug_configs/NORADRENALINE_CONFIG.constant';
import { PROPOFOL_CONFIG } from '@/constants/configs/drug_configs/PROPOFOL_CONFIG.constant';
import { THIOPENTAIL_CONFIG } from '@/constants/configs/drug_configs/THIOPENTAIL_CONFIG.constant';

export const DRUG_CALCULATOR_LIST: Record<string, DrugCalculatorConfig> = {
  [ACTILYSE_CONFIG.id]: ACTILYSE_CONFIG,
  [ATRACURIUM_CONFIG.id]: ATRACURIUM_CONFIG,
  [DEXON_CONFIG.id]: DEXON_CONFIG,
  [DITILIN_CONFIG.id]: DITILIN_CONFIG,
  [DOPAMINE_CONFIG.id]: DOPAMINE_CONFIG,
  [FENTANYL_CONFIG.id]: FENTANYL_CONFIG,
  [GOMH_CONFIG.id]: GOMH_CONFIG,
  [KETAMINE_CONFIG.id]: KETAMINE_CONFIG,
  [NALOXONE_CONFIG.id]: NALOXONE_CONFIG,
  [NITROGLYCERIN_CONFIG.id]: NITROGLYCERIN_CONFIG,
  [NORADRENALINE_CONFIG.id]: NORADRENALINE_CONFIG,
  [PROPOFOL_CONFIG.id]: PROPOFOL_CONFIG,
  [THIOPENTAIL_CONFIG.id]: THIOPENTAIL_CONFIG,
};
