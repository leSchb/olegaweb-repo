import { useCallback, useEffect, useRef } from "react";

export const useHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef<number>(0);

  const onScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (headerRef.current) {
      if (prevScrollY.current > currentScrollY) {
        headerRef.current.classList.remove("header--hidden");
      } else {
        headerRef.current.classList.add("header--hidden");
      }
      prevScrollY.current = currentScrollY;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return { headerRef };
};
