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
      <div className="p-6 w-full bg-card animate-pulse">
        <div className="h-8 bg-secondary rounded-md mb-4 w-1/2 mx-auto"></div>
        <div className="h-6 bg-secondary rounded-md mb-4 w-full mx-auto"></div>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full table-fixed">
            <tbody>
              {Array.from({ length: numInputs }).map((_, idx: number) => (
                <tr key={idx} className="border-b border-border">
                  <td className="px-4 py-2 w-[120px] sm:w-[150px] md:w-[180px]">
                    <div className="h-6 bg-secondary rounded-md"></div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-6 bg-secondary rounded-md"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="h-12 bg-secondary rounded-lg mx-auto w-full"></div>
      </div>
    );
  }

  return (
    <div className="p-6 w-full flex flex-col bg-card animate-pulse">
      <div className="h-10 bg-secondary rounded-md mb-6 w-1/2 mx-auto"></div>
      <div className="space-y-4">
        {Array.from({ length: numInputs }).map((_, idx: number) => (
          <div key={idx} className="h-8 bg-secondary rounded-md"></div>
        ))}
      </div>
      <div className="my-6 h-8 bg-secondary rounded-md w-1/2 self-center"></div>
      <div className="h-14 bg-secondary rounded-xl mx-auto w-full"></div>
    </div>
  );
};

export default SkeletonCalc;
