import { useState } from 'react';

export const useImageFallback = (src: string, FALL_BACK_S: string) => {
    const [imgSrc, setImgSrc] = useState<string>(src);

    const handleError = () => {
        setImgSrc(FALL_BACK_S);
    };

    return { imgSrc, handleError };
};


