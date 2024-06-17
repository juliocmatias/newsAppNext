import { useCallback, useState } from "react";


export const useMainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    handleToggleMenu
  }
};