import { ScaleConfig } from '@/interfaces/Scale.type';
import { GCS_CONFIG } from '@/constants/configs/scales_config/GCS.constant';
import { FOUR_CONFIG } from '@/constants/configs/scales_config/FOUR.constant';
import { RASS_CONFIG } from '@/constants/configs/scales_config/RASS.constant';
import { ALDERTE_CONFIG } from '@/constants/configs/scales_config/ALDERTE.constant';
import { SOFA_CONFIG } from '@/constants/configs/scales_config/SOFA.constant';
import { NIHSS_CONFIG } from '@/constants/configs/scales_config/NIHSS.constant';
import { APACHEII_CONFIG } from '@/constants/configs/scales_config/APACHEII.constant';

export const SCALES_LIST: Record<string, ScaleConfig> = {
  [GCS_CONFIG.id]: GCS_CONFIG,
  [FOUR_CONFIG.id]: FOUR_CONFIG,
  [RASS_CONFIG.id]: RASS_CONFIG,
  [ALDERTE_CONFIG.id]: ALDERTE_CONFIG,
  [SOFA_CONFIG.id]: SOFA_CONFIG,
  [NIHSS_CONFIG.id]: NIHSS_CONFIG,
  [APACHEII_CONFIG.id]: APACHEII_CONFIG,
};
