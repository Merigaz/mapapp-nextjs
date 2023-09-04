"use client"
import { ConfigProvider } from "antd";
import ButtonCustom from "./buttonCustom";
import theme from "../theme/themeConfig";
import { LogoutOutlined } from "@ant-design/icons";
import { signOut } from "next-auth/react";



export default function SideBar() {
    const ButtonPropsLogout: ButtonsProps = {
        typeButton: "primary",
        buttonClassName: "btn-primary",
        handleClickButton: () => signOut(),
        textButton: "Cerrar sesión",
        iconButton: <LogoutOutlined />
    }
    return (
        <aside className="border-solid border-2 border-sky-500 min-h-screen w-60 flex flex-col justify-center">
            <ConfigProvider theme={theme}>
                <ButtonCustom {...ButtonPropsLogout} />
            </ConfigProvider>
        </aside>
    )
}
