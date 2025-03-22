import React from 'react';

interface SkeletonCalcProps {
  numInputs: number;
  variant?: 'default' | 'table';
}

export const SkeletonCalc: React.FC<SkeletonCalcProps> = ({
  numInputs,
  variant = 'default',
}) => {
  if (variant === 'table') {
    return (
      <div className="p-4 w-full bg-card animate-pulse">
        <div className="h-8 bg-accent rounded mb-4 w-1/2 mx-auto"></div>
        <div className="h-6 bg-accent rounded mb-4 w-full mx-auto"></div>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full table-fixed">
            <tbody>
              {Array.from({ length: numInputs }).map((_, idx: number) => (
                <tr key={idx} className="border-b border-border">
                  <td className="px-4 py-2 w-[120px] sm:w-[150px] md:w-[180px]">
                    <div className="h-6 bg-accent rounded"></div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-6 bg-accent rounded"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="h-12 bg-accent rounded-lg mx-auto w-full"></div>
      </div>
    );
  }

  return (
    <div className="p-4 w-full flex flex-col bg-card animate-pulse">
      <div className="h-8 bg-accent rounded mb-6 w-1/2 mx-auto"></div>
      <div className="space-y-4">
        {Array.from({ length: numInputs }).map((_, idx: number) => (
          <div key={idx} className="h-8 bg-accent rounded"></div>
        ))}
      </div>
      <div className="my-6 h-8 bg-accent rounded w-1/2 self-center"></div>
      <div className="h-16 bg-accent rounded-xl mx-auto w-full"></div>
    </div>
  );
};

export default SkeletonCalc;
