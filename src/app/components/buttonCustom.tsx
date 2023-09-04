"use client"
import { Button } from "antd";

export default function ButtonCustom ({typeButton,handleClickButton,buttonClassName,textButton,keyButton,iconButton}:ButtonsProps) {

  return ( 
  <>
  <Button type={typeButton} onClick={handleClickButton} icon={iconButton}>{textButton}</Button>
  </>
  
  );
}

