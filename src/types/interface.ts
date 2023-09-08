interface ButtonsProps {
  typeButton?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  handleClickButton?: React.MouseEventHandler<HTMLElement>;
  buttonClassName?: string;
  textButton?: string;
  keyButton?: string;
  iconButton?: React.ReactNode;
  sizeButton?: "large" | "middle" | "small";
  styleButton?: {}
  htmlTypeButton?: "submit" 
}

interface PropChildren {
  children: React.ReactNode;
}

interface RequestBody {
  name?: string;
  email: string;
  password: string;
  role?: string;
}

interface ZoomContextType {
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
}
interface FormAdressesType {
  name: string;
  id: number;
  phone: number;
  address: string;
  neighborhood: string;
  date: Date;
  votetable: number;
  placevote: string;
}
