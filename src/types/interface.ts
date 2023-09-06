interface ButtonsProps {
  typeButton?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  handleClickButton: React.MouseEventHandler<HTMLElement>;
  buttonClassName: string;
  textButton?: string;
  keyButton?: string;
  iconButton?: React.ReactNode;
  sizeButton?: "large" | "middle" | "small";
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

