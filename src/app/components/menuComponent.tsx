"use client";

import { ZoomContext } from "@/libs/createContext";
import {
  CloudDownloadOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import {ConfigProvider, Menu, MenuProps, Tooltip } from "antd";
import Link from "next/link";
import { useContext, useState } from "react";
import theme from "../theme/themeConfig";
import { StyleMenu } from "@/libs/styles";
import { useSession } from "next-auth/react";

export default function MenuComponent() {
  const [key, setKey] = useState("map");
  const { setZoom } = useContext(ZoomContext);
  const { data: session } = useSession();

  const items: MenuProps["items"] = [
    {
      label: (
        <Tooltip arrow={true} title={"Aunmentar"}>
          <ZoomInOutlined />
        </Tooltip>
      ),
      key: "ZoomIn",
      onClick: () => {
        setZoom((prevZoom: number) => prevZoom + 1);
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
        setZoom((prevZoom: number) => prevZoom - 1);
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
    session?.user?.role === "admin"
      ? {
          label: "Descargar",
          key: "download",
          onClick: () => {},
          icon: <CloudDownloadOutlined />,
        }
      : null,
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
