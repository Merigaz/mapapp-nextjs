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
  styleTab: {};
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
export interface FormType extends NextApiRequest {
  name: string;
  id: number;
  phone: number;
  address: string;
  neighborhood: string;
  date: Date;
  table: number;
  votingplace: string;
  addressvotingplace: string;
}
