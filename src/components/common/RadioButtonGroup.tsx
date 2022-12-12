import { uniqueId } from 'src/lib/utils';
import styled from 'styled-components';

import { colors } from '@/constants/styles';
import type { Radio } from '@/hooks/useRadioGroup';

export interface RadioUI extends Radio {
  subLabel?: string;
}

export interface RadioButtonGroupProps {
  size?: 'small' | 'medium';
  currentSelected: Radio | null;
  list: RadioUI[];
  onChange: (args: Radio) => void;
  name?: string;
  className?: string;
}

const RadioButtonGroup = ({
  size = 'medium',
  currentSelected,
  list,
  onChange,
  name = 'radio',
  className,
}: RadioButtonGroupProps) => {
  return (
    <RadioButtonContainer size={size} className={className}>
      {list.map((item) => {
        const isSelected = currentSelected?.label === item.label;

        return (
          <RadioButton
            size={size}
            key={uniqueId('radio')}
            onClick={() => onChange({ key: item.key, label: item.label })}
          >
            <label htmlFor={item.key} className={isSelected ? 'selected' : ''}>
              <input type="radio" id={item.key} name={name} value={item.label} />
              <span className="text-b2">{item.label}</span>
              <span className="text-b3 text-gray-300 ml-8">{item.subLabel}</span>
            </label>
          </RadioButton>
        );
      })}
    </RadioButtonContainer>
  );
};

export default RadioButtonGroup;

const RadioButton = styled.div<{ size: 'small' | 'medium' }>`
  ${({ size }: { size: 'small' | 'medium' }) => (size === 'small' ? `flex: 1 0 30%;` : `flex: 1 0 calc(50% - 0.8rem);`)}

  > label {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid ${colors.gray200};
    border-radius: 0.8rem;
    background-color: white;
    padding: 1.25rem;
    text-align: center;
    color: ${colors.gray500};

    &.selected {
      border-color: black;
    }

    input[type='radio'] {
      position: fixed;
      opacity: 0;
    }
  }
`;

const RadioButtonContainer = styled.div<{ size: 'small' | 'medium' }>`
  display: flex;
  ${({ size }: { size: 'small' | 'medium' }) =>
    size === 'small'
      ? `
        ${RadioButton} ~ ${RadioButton} {
        margin-left: 0.8rem;
      }
      `
      : `
      flex-wrap: wrap;
      ${RadioButton}:nth-child(even) {
        margin-left: 0.8rem;
      }
      ${RadioButton}:nth-child(3), ${RadioButton}:nth-child(4) {
        margin-top: 0.8rem;
      }
  `};
`;
