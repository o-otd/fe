export interface ITodayCardModalProps extends ITodayCardProps {
  isOpen: boolean;
  //setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITodayCardProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
