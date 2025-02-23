import { useState } from 'react';

//указать тип возвращаемого значения функции
export const useSkeleton = (src: string) => {
  const [loading, setLoading] = useState<boolean>(true);

  const img = document.createElement('img');
  img.src = src;
  img.onload = function () {
    setLoading(false);
  };
  img.onerror = function () {
    setLoading(false);
  };
  return loading;
};
