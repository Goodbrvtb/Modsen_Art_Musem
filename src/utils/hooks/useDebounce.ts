import { useEffect, useRef } from 'react';

import { SomeFunction, Timer } from '@/utils/types';

export function useDebounce<T extends any[]>(
  func: SomeFunction,
  delay: number,
): (...args: T) => void {
  const timeoutCurrent = useRef<Timer | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timeoutCurrent.current) {
        clearTimeout(timeoutCurrent.current);
      }
    };
  }, []);

  const debounceFunction = (...args: T): void => {
    if (timeoutCurrent.current) {
      clearTimeout(timeoutCurrent.current);
    }

    timeoutCurrent.current = setTimeout(() => {
      func(...args);
    }, delay);
  };

  return debounceFunction;
}
