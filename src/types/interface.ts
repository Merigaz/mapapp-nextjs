import type { TabsProps } from "antd";

export interface ButtonsProps {
  typeButton?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  handleClickButton?: React.MouseEventHandler<HTMLElement>;
  buttonClassName?: string;
  textButton?: string;
  keyButton?: string;
  iconButton?: React.ReactNode;
  sizeButton?: "large" | "middle" | "small";
  styleButton?: {};
  htmlTypeButton?: "submit";
}
export interface TabProps {
  keyTabs: string;
  items: TabsProps["items"];
  onChange: (key: string) => void;
  styleTab?: {};
  addressData?: FormType;
}

export interface PropChildren {
  children: React.ReactNode;
}

export interface RequestBody {
  name?: string;
  email: string;
  password: string;
  role?: string;
}

export interface ZoomContextType {
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
}

export interface ErrorContextType {
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface AddressDataContextType {
  addressData: FormType[];
  setAddressData: React.Dispatch<React.SetStateAction<FormType[]>>;
}
export interface FormType {
  name: string;
  id: string;
  phone: string;
  addressname: string;
  neighborhood: string;
  date: Date;
  table: string;
  idvotingplace: string;
  votingplace: string;
  addressvotingplace: string;
  lat: number;
  lng: number;
}

export interface VotingPlace {
  id: string;
  votingplace: string;
  addressvotingplace: string;
  lat: number;
  lng: number;
}

export interface NeighborhoodCount {
  [neighborhood: string]: number;
}
export interface VotingPlaceCount {
  [votingplace: string]: number;
}
export interface DateCount {
  [key: string]: number;
}
export interface logoutProp {
  className: string
}