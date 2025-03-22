import React from 'react';

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
      <h4 className="mt-6 text-lg xl:text-xl font-semibold tracking-widest leading-relaxed">
        {t('totalScore')} {totalScore}
      </h4>
      <h5 className="mt-2 text-md lg:text-md xl:text-lg tracking-widest leading-relaxed">
        {t('result')} {t(result)}
      </h5>

      {extraDescription && (
        <section className="mt-6 text-sm lg:text-md xl:text-lg p-6 border border-primary rounded-lg shadow-lg space-y-4 whitespace-pre-wrap text-pretty">
          <p className="leading-relaxed font-light">{t(extraDescription)}</p>
        </section>
      )}
    </>
  );
};
