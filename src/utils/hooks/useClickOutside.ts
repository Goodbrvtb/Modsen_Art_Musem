import { useEffect } from 'react';

type Callback = () => void;
export const useClickOutside = (
  menuRef: React.RefObject<HTMLDivElement | null>,
  callback: Callback,
) => {
  const handleClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};
