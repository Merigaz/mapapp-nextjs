import { LogoutOutlined } from "@ant-design/icons";
import { signOut } from "next-auth/react";
import ButtonCustom from "./buttonCustom";
import AvatarUSer from "./avatarComponent";
import { ButtonsProps } from "@/types/interface";


export default function LogoutComponent() {
    const ButtonLogoutProps: ButtonsProps = {
        typeButton: "primary",
        handleClickButton: () => signOut(),
        textButton: "Cerrar sesión",
        iconButton: <LogoutOutlined />,
        sizeButton: "middle",
      };
  return (
    <div className="divlogin">
      <ButtonCustom {...ButtonLogoutProps} />
      <AvatarUSer />
    </div>
  );
}
