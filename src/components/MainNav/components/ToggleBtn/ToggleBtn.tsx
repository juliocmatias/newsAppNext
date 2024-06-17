import { CloseIcon, OpenIcon } from "@/components/Icons";

type ToggleBtnProps = {
  isOpen: boolean;
  handleToggleMenu: () => void;
};

export const ToggleBtn = ({ handleToggleMenu, isOpen }: ToggleBtnProps) => {
  const title = isOpen ? 'Close' : 'Open';

  return (
    <button onClick={handleToggleMenu} title={ title }>
      {isOpen && <CloseIcon size={32}/>}
      {!isOpen && <OpenIcon size={32}/>}
    </button>
  )
};