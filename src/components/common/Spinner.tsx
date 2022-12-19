import { useLottie } from 'lottie-react';
import React from 'react';
import styled from 'styled-components';

import spinnerAnimation from '../../../public/spinner.json';
import Portal from './Portal';

const Spinner = ({ isShowing }: { isShowing: boolean }) => {
  const options = {
    animationData: spinnerAnimation,
    loop: true,
  };

  const style = {
    height: 200,
  };

  const { View } = useLottie(options, style);

  return (
    <Portal isShowing={isShowing}>
      <DimmedBackdrop>
        <SpinnerWrapper>{View}</SpinnerWrapper>
      </DimmedBackdrop>
    </Portal>
  );
};

export default Spinner;

const DimmedBackdrop = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerWrapper = styled.div`
  padding: 0;
`;
