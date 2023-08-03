import { useEffect, MutableRefObject } from 'react';

const useOutsideClick = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  callback: () => void,
): void => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useOutsideClick;
