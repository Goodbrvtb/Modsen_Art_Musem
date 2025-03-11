import { useEffect, useState } from 'react';

import { ImageFallback } from '../types';

export const useImageFallback = (
  src: string,
  FALL_BACK_S: string,
): ImageFallback => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    const handleLoad = () => {
      setImgSrc(src);
    };

    const handleError = () => {
      setImgSrc(FALL_BACK_S);
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src, FALL_BACK_S]);

  return { imgSrc };
};
