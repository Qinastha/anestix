'use client';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import React from 'react';
import { ScaleOption } from '@/interfaces/Scale.type';

interface DesktopScaleCellProps {
  option: ScaleOption;
  isSelected: boolean;
  t: (key: string) => string;
}

export const DesktopScaleCell: React.FC<DesktopScaleCellProps> = ({
  option,
  isSelected,
  t,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-full">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isSelected ? 1.05 : 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
            }}
            className={`flex items-center p-1 justify-center text-center rounded border aspect-[6/5] h-5/6 text-pretty ${
              isSelected
                ? 'bg-primary border-secondary text-buttonText'
                : 'border-primary'
            }`}
          >
            <span className="font-semibold max-w-full text-xs">
              {t(option.description!)}
            </span>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent
          className={isSelected ? 'bg-accent text-foreground' : 'bg-primary'}
        >
          <span>
            {option.label} {t('score')}
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
