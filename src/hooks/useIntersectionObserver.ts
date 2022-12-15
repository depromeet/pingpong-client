import type { ElementRef } from 'react';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface IntersectionObserverProps {
  callback: () => void;
  options: {
    root: null | Element;
    rootMargin: string;
    threshold: number | number[];
  };
}

const useIntersectionObserver = ({ callback, options }: IntersectionObserverProps) => {
  // MEMO: entry 는 observe 하는 값의 ratio가 업데이트됩니다. CSS에서 값에따라 컬러변경등 사용이 필요할경우 사용
  const [entry, setEntry] = useState<IntersectionObserverEntry | Record<string, unknown>>({});
  const [node, setNode] = useState<Element | null>(null);

  const observer = useRef<null | IntersectionObserver>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    const handleCallback = () => {
      return ([entry]: [IntersectionObserverEntry]) => {
        setEntry(entry);
        callback();
      };
    };

    observer.current = new IntersectionObserver(callback, options);
    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);
    return () => currentObserver.disconnect();
  }, [callback, options, node]);

  return [setNode];
};

export default useIntersectionObserver;
