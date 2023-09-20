import type { FormProps, TabsProps } from "antd";
import { NextApiRequest } from "next";

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
}
