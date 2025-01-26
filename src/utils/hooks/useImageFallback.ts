import { useState } from 'react';

export const useImageFallback = (src: string, FALL_BACK_S: string) => {
    const [imgSrc, setImgSrc] = useState<string>(src);


    const img = document.createElement('img');
    img.src = src;

    img.onload = function () {
        setImgSrc(src);

    };

    img.onerror = function () {
        setImgSrc(FALL_BACK_S);

    };


    return { imgSrc };
};


