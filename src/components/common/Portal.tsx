import type { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  isShowing: boolean;
}

export default function Portal({ children, isShowing }: PropsWithChildren<PortalProps>) {
  const [isMounted, setIsMounted] = useState(false);
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const containerDOM = document.getElementById('portal');
    setContainer(containerDOM);
  }, [isMounted]);

  if (!isMounted || !container) return <></>;
  return createPortal(<div>{isShowing && children}</div>, container);
}
