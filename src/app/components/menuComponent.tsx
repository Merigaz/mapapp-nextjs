"use client"

import { ZoomContext } from "@/libs/createContext";
import { ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";
import { Menu, MenuProps, Tooltip } from "antd";
import { useContext, useState } from "react";

export default function MenuComponent() {
  const [key, setKey]= useState ("map")
  const {zoom,setZoom} = useContext(ZoomContext);
  

  const handleZoomIn  = () => {
    setZoom((prevZoom) => prevZoom + 1 );
  };
  const handleZoomOut = () => {
    setZoom((prevZoom) => prevZoom - 1);
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <Tooltip arrow={true} title={"Aunmentar"}>
          <ZoomInOutlined />
        </Tooltip>
      ),
      key: "ZoomIn",
      onClick: handleZoomIn,
    },
    {
      label: (
        <Tooltip arrow={true} title={"Disminuir"}>
          <ZoomOutOutlined />
        </Tooltip>
      ),
      key: "ZoomOut",
      onClick: handleZoomOut,
    },
    {
      label: "Mapa",
      key: "map",
    },
  ];
  return (
    <Menu
      selectedKeys={[key]}
      mode="horizontal"
      items={items}
      className="menu"
    />
  );
}
