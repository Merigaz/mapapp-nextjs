"use client";
import { LogoutOutlined } from "@ant-design/icons";
import { signOut } from "next-auth/react";
import ButtonCustom from "./buttonCustom";
import AvatarUSer from "./avatarComponent";
import { ButtonsProps, logoutProp } from "@/types/interface";

export default function LogoutComponent({ className }: logoutProp) {
  const ButtonLogoutProps: ButtonsProps = {
    typeButton: "primary",
    handleClickButton: () => signOut(),
    textButton: "Cerrar sesión",
    iconButton: <LogoutOutlined />,
    sizeButton: "middle",
    buttonClassName: "bg-[#C3B984]",
  };
  return (
    <div className={className}>
      <ButtonCustom {...ButtonLogoutProps} />
      <AvatarUSer />
    </div>
  );
}
