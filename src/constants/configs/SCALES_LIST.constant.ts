import { ScaleConfig } from '@/interfaces/Scale.type';
import { GCS_CONFIG } from '@/constants/configs/scales_config/GCS.constant';
import { FOUR_CONFIG } from '@/constants/configs/scales_config/FOUR.constant';
import { RASS_CONFIG } from '@/constants/configs/scales_config/RASS.constant';
import { ALDERTE_CONFIG } from '@/constants/configs/scales_config/ALDERTE.constant';
import { SOFA_CONFIG } from '@/constants/configs/scales_config/SOFA.constant';
import { NIHSS_CONFIG } from '@/constants/configs/scales_config/NIHSS.constant';
import { APACHEII_CONFIG } from '@/constants/configs/scales_config/APACHEII.constant';
import { WELLS_CONFIG } from '@/constants/configs/scales_config/WELLS.constant';
import { PESI_CONFIG } from '@/constants/configs/scales_config/PESI_CONFIG.constant';
import { LEE_CONFIG } from '@/constants/configs/scales_config/LEE_CONFIG.constant';
import { CAPRINI_CONFIG } from '@/constants/configs/scales_config/CAPRINI_CONFIG.constant';
import { HASBLED_CONFIG } from '@/constants/configs/scales_config/HASBLED_CONFIG.constant';

export const SCALES_LIST: Record<string, ScaleConfig> = {
  [GCS_CONFIG.id]: GCS_CONFIG,
  [FOUR_CONFIG.id]: FOUR_CONFIG,
  [RASS_CONFIG.id]: RASS_CONFIG,
  [ALDERTE_CONFIG.id]: ALDERTE_CONFIG,
  [SOFA_CONFIG.id]: SOFA_CONFIG,
  [NIHSS_CONFIG.id]: NIHSS_CONFIG,
  [APACHEII_CONFIG.id]: APACHEII_CONFIG,
  [WELLS_CONFIG.id]: WELLS_CONFIG,
  [PESI_CONFIG.id]: PESI_CONFIG,
  [LEE_CONFIG.id]: LEE_CONFIG,
  [CAPRINI_CONFIG.id]: CAPRINI_CONFIG,
  [HASBLED_CONFIG.id]: HASBLED_CONFIG,
};
