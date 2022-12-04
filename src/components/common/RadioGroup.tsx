import type { ChangeEvent } from 'react';
import { uniqueId } from 'src/lib/utils';
import styled from 'styled-components';

import { colors } from '@/constants/styles';

interface RadioGroupProps {
  currentSelected: string;
  name?: string;
  list: string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({ currentSelected, name = 'radio', list, onChange }: RadioGroupProps) => {
  return (
    <>
      {list.map((label) => (
        <Radio key={uniqueId('radio')}>
          <input
            type="radio"
            id={label}
            name={name}
            value={label}
            checked={currentSelected === label}
            onChange={onChange}
          />
          <label htmlFor={label}>
            <span className="text-b2">{label}</span>
          </label>
        </Radio>
      ))}
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
  }

  span {
    margin-left: 1rem;
  }

  input[type='radio'] {
    position: fixed;
    opacity: 0;

    &:checked ~ label {
      &::before {
        border: 0.1rem solid black;
      }

      &::after {
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
  }
`;
