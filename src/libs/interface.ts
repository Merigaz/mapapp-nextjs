

interface ButtonsProps {
    typeButton?: "link" | "text" | "default" | "primary" | "dashed" | undefined
    handleClickButton: React.MouseEventHandler<HTMLElement>
    buttonClassName: string
    textButton?: string
    keyButton?: string
    iconButton?: React.ReactNode
  
  }

  interface PropChildren {
    children: React.ReactNode;
  }