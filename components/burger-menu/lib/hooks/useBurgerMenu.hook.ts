import { useEffect } from "react";

export const useBurgerMenu = ({ isOpened }: { isOpened: boolean }) => {
  useEffect(() => {
    if (isOpened) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpened]);
};
