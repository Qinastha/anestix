import React from 'react';
import { formatParagraphs } from '@/utils/formatParagraphs';

interface ResultScoreProps {
  totalScore: number;
  result: string;
  t: (key: string) => string;
  extraDescription?: string;
}

export const ResultScore: React.FC<ResultScoreProps> = ({
  totalScore,
  result,
  t,
  extraDescription,
}) => {
  return (
    <>
      <div className="mt-6 text-lg xl:text-xl font-semibold tracking-widest leading-relaxed">
        {t('totalScore')} {totalScore}
      </div>
      <div className="mt-2 text-md lg:text-md xl:text-lg tracking-widest leading-relaxed">
        {t('result')} {t(result)}
      </div>

      {extraDescription && (
        <div className="mt-6 text-sm lg:text-md xl:text-lg bg-card p-6 border border-primary rounded-lg shadow-lg space-y-4">
          {formatParagraphs(t(extraDescription)).map(
            (para: string, index: number) => (
              <p key={index} className="leading-relaxed font-light">
                {index !== 0 && <b>{`${index}) `}</b>}
                {''}
                {para}
              </p>
            )
          )}
        </div>
      )}
    </>
  );
};
