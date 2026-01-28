import { useEffect, useState } from "react";
import useScreenWidth from "../hooks/useScreenWidth"

function useRotatingGallery(initialImages, interval) {
    const [images, setImages] = useState(initialImages);
    const [isFading, setIsFading] = useState(false);
    const screenWidth = useScreenWidth();

    const isDesktop = screenWidth >= 768;

    useEffect(() => {
        if (!isDesktop) {
            setImages(initialImages);
            setIsFading(false);
            return;
        }

        const timer = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setImages(prev => {
                    const last = prev[prev.length -1];
                    const rest = prev.slice(0, prev.length - 1);
                    return [last, ...rest];
                });

                setIsFading(false);
            }, 200);
        }, interval);

        return () => clearInterval(timer);
    }, [interval, isDesktop, initialImages]);

    return {images, isFading};
}

export default useRotatingGallery