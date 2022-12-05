import type { ChangeEvent } from 'react';
import { uniqueId } from 'src/lib/utils';
import styled from 'styled-components';

import { colors } from '@/constants/styles';
import { Radio } from '@/hooks/useRadioGroup';

interface RadioGroupProps {
  currentSelected: Radio | null;
  list: Radio[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const RadioGroup = ({ currentSelected, list, onChange, name = 'radio' }: RadioGroupProps) => {
  return (
    <>
      {list.map((item) => {
        const isSelected = currentSelected?.label === item.label;

        return (
          <Radio key={uniqueId('radio')}>
            <label htmlFor={item.key} className={isSelected ? 'selected' : ''}>
              <input type="radio" id={item.key} name={name} value={item.label} onChange={onChange} />
              <span className="text-b2">{item.label}</span>
            </label>
          </Radio>
        );
      })}
    </>
  );
};

export default RadioGroup;

const Radio = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: flex;
    align-items: center;
    position: relative;

    span {
      margin-left: 1rem;
    }

    input[type='radio'] {
      position: fixed;
      opacity: 0;
    }

    &::before {
      box-sizing: border-box;
      display: inline-block;
      content: '';
      width: 2rem;
      height: 2rem;
      border: 0.1rem solid ${colors.gray200};
      border-radius: 50%;
      background-color: white;
    }

    &.selected::before {
      border: 0.1rem solid black;
    }

    &.selected::after {
      z-index: 10;
      position: absolute;
      left: 0.4rem;
      content: '';
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background-color: black;
    }
  }
`;
