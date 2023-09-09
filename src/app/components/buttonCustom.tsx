"use client"
import { ButtonsProps } from "@/types/interface";
import { Button } from "antd";

export default function ButtonCustom ({typeButton,htmlTypeButton,handleClickButton,buttonClassName,textButton,keyButton,iconButton,sizeButton,styleButton}:ButtonsProps) {

  return ( 
  <>
  <Button className={buttonClassName} style={styleButton} type={typeButton} htmlType={htmlTypeButton} size={sizeButton} onClick={handleClickButton} icon={iconButton} >{textButton}</Button>
  </>
  
  );
}

