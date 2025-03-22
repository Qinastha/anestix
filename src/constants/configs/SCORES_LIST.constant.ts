import { ScoreConfig } from '@/interfaces/Scores.type';
import { NEWS2_CONFIG } from '@/constants/configs/scores_config/NEWS2_CONFIG.constant';
import { GCS_CONFIG } from '@/constants/configs/scores_config/GCS_CONFIG.constant';
import { FOUR_CONFIG } from '@/constants/configs/scores_config/FOUR_CONFIG.constant';
import { RASS_CONFIG } from '@/constants/configs/scores_config/RASS_CONFIG.constant';
import { ALDRETE_CONFIG } from '@/constants/configs/scores_config/ALDRETE_CONFIG.constant';
import { SOFA_CONFIG } from '@/constants/configs/scores_config/SOFA_CONFIG.constant';
import { NIHSS_CONFIG } from '@/constants/configs/scores_config/NIHSS_CONFIG.constant';
import { APACHEII_CONFIG } from '@/constants/configs/scores_config/APACHEII_CONFIG.constant';
import { WELLS_CONFIG } from '@/constants/configs/scores_config/WELLS_CONFIG.constant';
import { PESI_CONFIG } from '@/constants/configs/scores_config/PESI_CONFIG.constant';
import { LEE_CONFIG } from '@/constants/configs/scores_config/LEE_CONFIG.constant';
import { HASBLED_CONFIG } from '@/constants/configs/scores_config/HASBLED_CONFIG.constant';
import { CAPRINI_CONFIG } from '@/constants/configs/scores_config/CAPRINI_CONFIG.constant';
import { GCS_CHILD_CONFIG } from '@/constants/configs/scores_config/GCS_CHILD_CONFIG.constant';
import { PHOENIX_CONFIG } from '@/constants/configs/scores_config/PHOENIX_CONFIG.constant';
import { APGAR_CONFIG } from '@/constants/configs/scores_config/APGAR_CONFIG.constant';
import { QSOFA_CONFIG } from '@/constants/configs/scores_config/QSOFA_CONFIG.constant';

export const SCORES_LIST: Record<string, ScoreConfig> = {
  [GCS_CONFIG.id]: GCS_CONFIG,
  [FOUR_CONFIG.id]: FOUR_CONFIG,
  [RASS_CONFIG.id]: RASS_CONFIG,
  [ALDRETE_CONFIG.id]: ALDRETE_CONFIG,
  [SOFA_CONFIG.id]: SOFA_CONFIG,
  [NIHSS_CONFIG.id]: NIHSS_CONFIG,
  [APACHEII_CONFIG.id]: APACHEII_CONFIG,
  [WELLS_CONFIG.id]: WELLS_CONFIG,
  [PESI_CONFIG.id]: PESI_CONFIG,
  [LEE_CONFIG.id]: LEE_CONFIG,
  [CAPRINI_CONFIG.id]: CAPRINI_CONFIG,
  [HASBLED_CONFIG.id]: HASBLED_CONFIG,
  [NEWS2_CONFIG.id]: NEWS2_CONFIG,
  [GCS_CHILD_CONFIG.id]: GCS_CHILD_CONFIG,
  [PHOENIX_CONFIG.id]: PHOENIX_CONFIG,
  [APGAR_CONFIG.id]: APGAR_CONFIG,
  [QSOFA_CONFIG.id]: QSOFA_CONFIG,
};
