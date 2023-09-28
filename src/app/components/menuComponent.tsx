"use client";
import * as XLSX from "xlsx";
import { AddressDataContext, ZoomContext } from "@/libs/createContext";
import {
  CloudDownloadOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Menu, MenuProps, Tooltip } from "antd";
import Link from "next/link";
import { useContext, useState } from "react";
import theme from "../theme/themeConfig";
import { StyleMenu } from "@/libs/styles";
import { useSession } from "next-auth/react";
import { FormType } from "@/types/interface";
import ModalError from "./modalError";

export default function MenuComponent() {
  const [key, setKey] = useState("map");
  const { setZoom } = useContext(ZoomContext);
  const { data: session } = useSession();
  const { addressData } = useContext(AddressDataContext);

  const handleDownload = () => {
    const dataToExport = addressData.map(
      ({
        name,
        id,
        phone,
        addressname,
        neighborhood,
        date,
        table,
        votingplace,
        addressvotingplace,
      }: FormType) => ({
        Nombre: name,
        Cédula: id,
        Teléfono: phone,
        Dirección: addressname,
        Barrio: neighborhood,
        "Mesa de votación": table,
        "Lugar de votación": votingplace,
        "Dirección lugar de votación": addressvotingplace,
        Fecha: date,
      })
    );
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const formattedDate = new Date()
      .toLocaleString("en-US", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(/\/|,|:|\s/g, "-");
    XLSX.utils.book_append_sheet(wb, ws, "Direcciones");
    XLSX.writeFile(wb, `Direcciones - ${formattedDate}.xlsx`);
  };
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
          onClick: handleDownload,
          icon: <CloudDownloadOutlined />,
        }
      : null,
  ];

  return (
    <ConfigProvider theme={theme}>
      <ModalError />
      <Menu
        selectedKeys={[key]}
        mode="horizontal"
        items={items}
        style={StyleMenu}
      />
    </ConfigProvider>
  );
}
