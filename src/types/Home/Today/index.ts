export interface ITodayCardModalProps extends ITodayCardProps {
  isOpen: boolean;
}

export interface ITodayCardProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

export interface ILookTabItemProps {
  text: string;
  href: string;
}
