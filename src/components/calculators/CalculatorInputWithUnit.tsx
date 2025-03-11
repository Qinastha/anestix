import React from 'react';
import { CalculatorInput } from './CalculatorInput';
import { CalculatorSelect } from './CalculatorSelect';
import { FormulaParameter } from '@/interfaces/FormulaCalculator.type';

interface Props {
  param: FormulaParameter;
  formValues: Record<string, number | string | boolean>;
  handleChange: (key: string, value: number | string | boolean) => void;
  tCalc: (key: string) => string;
  tUnit: (key: string) => string;
}

const InputWithUnit = ({
  param,
  formValues,
  handleChange,
  tCalc,
  tUnit,
}: Props) => {
  const numericValueKey = param.key;
  const unitKey = `${param.key}_unit`;

  return (
    <div className="flex flex-row gap-2">
      <span className="basis-2/3">
        <CalculatorInput
          param={{ ...param, key: numericValueKey }}
          formValues={formValues}
          handleChange={handleChange}
          t={tUnit}
        />
      </span>
      <span className="basis-1/3">
        <CalculatorSelect
          param={{ key: unitKey, label: param.label, options: param.options }}
          formValues={formValues}
          handleChange={handleChange}
          t={tCalc}
        />
      </span>
    </div>
  );
};

export const CalculatorInputWithUnit = React.memo(InputWithUnit);
CalculatorInputWithUnit.displayName = 'CalculatorInputWithUnit';
