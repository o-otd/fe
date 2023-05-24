export interface ITodayCardModalProps extends ITodayCardProps {
  isOpen: boolean;
  //setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITodayCardProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ILookTabItemProps {
  text: string;
  href: string;
}

export interface IMainProps {
  categories: ILookCategory[];
  baseUrl: 'tpo' | 'activity' | 'temperatures';
}

export interface ILookCategory {
  name: string;
  type: string;
  id: number;
}
