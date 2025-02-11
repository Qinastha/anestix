import { ScaleConfig } from '@/types/Scale.type';
import { GCS_CONFIG } from '@/constants/scales/GCS.constant';
import { FOUR_CONFIG } from '@/constants/scales/FOUR.constant';
import { RASS_CONFIG } from '@/constants/scales/RASS.constant';
import { ALDERTE_CONFIG } from '@/constants/scales/ALDERTE.constant';
import { SOFA_CONFIG } from '@/constants/scales/SOFA.constant';
import { NIHSS_CONFIG } from '@/constants/scales/NIHSS.constant';
import { APACHEII_CONFIG } from '@/constants/scales/APACHEII.constant';

export const SCALE_CONFIG: Record<string, ScaleConfig> = {
  [GCS_CONFIG.id]: GCS_CONFIG,
  [FOUR_CONFIG.id]: FOUR_CONFIG,
  [RASS_CONFIG.id]: RASS_CONFIG,
  [ALDERTE_CONFIG.id]: ALDERTE_CONFIG,
  [SOFA_CONFIG.id]: SOFA_CONFIG,
  [NIHSS_CONFIG.id]: NIHSS_CONFIG,
  [APACHEII_CONFIG.id]: APACHEII_CONFIG,
};
