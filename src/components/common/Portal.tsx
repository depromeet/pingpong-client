import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  isShowing: boolean;
}

export default function Portal({ children, isShowing }: PropsWithChildren<PortalProps>) {
  const container = typeof window !== 'undefined' && document.body;

  return container ? createPortal(<div>{isShowing && children}</div>, container) : <></>;
}
