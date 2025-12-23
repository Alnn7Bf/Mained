import { useEffect, useRef, useState } from "react";

function useWaveAnimation(position) {
    const [bgPosition, setBgPosition] = useState(position);
    const frameRef = useRef(null);
    const startRef = useRef(null);
    const phaseRef = useRef(Math.random() * Math.PI * 2);

    useEffect(() => {
        const amplitude = 4;
        const speed = 0.001;

        const animate = (time) => {
            if(!startRef.current) startRef.current = time;

            const elapsed = time - startRef.current;
            const offset = Math.sin(elapsed * speed + phaseRef.current) * amplitude;

            setBgPosition(position + offset);

            frameRef.current = requestAnimationFrame(animate);
        };
        
        frameRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frameRef.current);
    }, [position]);

    return bgPosition;
}

export default useWaveAnimation