"use client";

import { ZoomContext } from "@/libs/createContext";
import { ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";
import { ConfigProvider, Menu, MenuProps, Tooltip } from "antd";
import Link from "next/link";
import { useContext, useState } from "react";
import theme from "../theme/themeConfig";
import { StyleMenu } from "@/libs/styles";

export default function MenuComponent() {
  const [key, setKey] = useState("map");
  const { setZoom } = useContext(ZoomContext);

  const items: MenuProps["items"] = [
    {
      label: (
        <Tooltip arrow={true} title={"Aunmentar"}>
          <ZoomInOutlined />
        </Tooltip>
      ),
      key: "ZoomIn",
      onClick: () => {
        setZoom((prevZoom) => prevZoom + 1);
      },
    },
    {
      label: (
        <Tooltip arrow={true} title={"Disminuir"}>
          <ZoomOutOutlined />
        </Tooltip>
      ),
      key: "ZoomOut",
      onClick: () => {
        setZoom((prevZoom) => prevZoom - 1);
      },
    },
    {
      label: <Link href="/">Mapa</Link>,
      key: "map",
      onClick: () => {
        setKey("map");
      },
    },
    {
      label: <Link href="/form">Formulario</Link>,
      key: "form",
      onClick: () => {
        setKey("form");
      },
    },
  ];
  return (
    <ConfigProvider theme={theme}>
      <Menu
        selectedKeys={[key]}
        mode="horizontal"
        items={items}
        style={StyleMenu}
      />
    </ConfigProvider>
  );
}
