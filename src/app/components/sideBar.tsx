"use client"
import { ConfigProvider } from "antd";
import ButtonCustom from "./buttonCustom";
import theme from "../theme/themeConfig";
import { LogoutOutlined } from "@ant-design/icons";
import { signOut } from "next-auth/react";
import AvatarUSer from "./avatar";



export default function SideBar() {
    const ButtonPropsLogout: ButtonsProps = {
        typeButton: "primary",
        buttonClassName: "btn-primary",
        handleClickButton: () => signOut(),
        textButton: "Cerrar sesión",
        iconButton: <LogoutOutlined />,
        sizeButton: "middle"
    }
    return (
        <aside className="sidebar">
            <ConfigProvider theme={theme}>
                <div className="divlogin">
                <ButtonCustom {...ButtonPropsLogout} />
                <AvatarUSer/>
                </div>
            </ConfigProvider>
        </aside>
    )
}
