import { useCallback, useEffect, useRef } from "react";

const SPEED = 80;

export const useScreensCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const animationID = useRef<number>(0);
  const animateRef = useRef<(time: number) => void>(null);
  const isStopped = useRef<boolean>(false);

  const lastTimeRef = useRef<number>(0);

  const startAnimation = useCallback(() => {
    isStopped.current = false;
  }, []);

  const stopAnimation = useCallback(() => {
    isStopped.current = true;
  }, []);

  useEffect(() => {
    animateRef.current = (time: number) => {
      const container = containerRef.current;

      if (!container) return;

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isStopped.current) {
        container.scrollLeft += (SPEED * delta) / 1000;

        const maxScroll = container.scrollWidth / 2;

        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }

      animationID.current = requestAnimationFrame(animateRef.current!);
    };

    animationID.current = requestAnimationFrame((time) => {
      lastTimeRef.current = time;
      animateRef.current?.(time);
    });

    return () => {
      cancelAnimationFrame(animationID.current);
    };
  }, []);

  return {
    containerRef,
    startAnimation,
    stopAnimation,
  };
};
