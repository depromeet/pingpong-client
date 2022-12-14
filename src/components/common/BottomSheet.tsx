import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

import Portal from './Portal';

export interface BottomSheetProps {
  isShowing: boolean;
  children: ReactNode;
  onClose: VoidFunction;
}

export default function BottomSheet({ isShowing, children, onClose }: BottomSheetProps) {
  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget) {
      if (e.target !== e.currentTarget) return;
      onClose();
    }
  };

  return (
    <Portal isShowing={isShowing}>
      <DimmedBackdrop onClick={handleDelete}>
        <ContentWrapper>{children}</ContentWrapper>
      </DimmedBackdrop>
    </Portal>
  );
}

const DimmedBackdrop = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;

// TODO: transition 추가
const ContentWrapper = styled.div`
  position: absolute;
  top: 100%;
  transform: translateY(-100%);
  z-index: 1000;
  width: 100%;

  background-color: white;
  border-radius: 1rem 1rem 0 0;
  overflow-y: auto;
`;

// MEMO: framer에서 사용되던 tranmsition 값
// const defaultEasing = [0.6, -0.05, 0.01, 0.99];

// const bottomSheetVariants = {
//   initial: {
//     y: 0,
//     transition: { duration: 0.6, ease: defaultEasing },
//     willChange: 'transform',
//   },
//   animate: {
//     y: '-100%',
//     transition: { duration: 0.6, ease: defaultEasing },
//     willChange: 'transform',
//   },
//   exit: {
//     y: 0,
//     transition: { duration: 0.6, ease: defaultEasing },
//     willChange: 'transform',
//   },
// };
