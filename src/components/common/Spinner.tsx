import Lottie from 'lottie-react';
import React from 'react';
import styled from 'styled-components';

import spinnerAnimation from '../../../public/spinner.json';
import Portal from './Portal';

interface Props {
  isDimmed?: boolean;
}

const Spinner = ({ isDimmed }: Props) => {
  return isDimmed ? (
    <Portal isShowing={true}>
      <DimmedBackdrop>
        <Lottie animationData={spinnerAnimation} loop={true} style={{ width: '70%' }} />
      </DimmedBackdrop>
    </Portal>
  ) : (
    <Lottie animationData={spinnerAnimation} loop={true} style={{ width: '100px', margin: 'auto' }} />
  );
};

export default Spinner;

const DimmedBackdrop = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  display: grid;
  place-items: center;
`;
