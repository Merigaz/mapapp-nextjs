"use client"
import { Button } from "antd";

export default function ButtonCustom ({typeButton,handleClickButton,buttonClassName,textButton,keyButton,iconButton,sizeButton}:ButtonsProps) {

  return ( 
  <>
  <Button className={buttonClassName}type={typeButton} size={sizeButton} onClick={handleClickButton} icon={iconButton} >{textButton}</Button>
  </>
  
  );
}

