import { LogoutOutlined } from "@ant-design/icons";
import { signOut } from "next-auth/react";
import ButtonCustom from "./buttonCustom";
import AvatarUSer from "./avatar";

export default function LogoutButton() {
    const ButtonPropsLogout: ButtonsProps = {
        typeButton: "primary",
        buttonClassName: "btn-primary",
        handleClickButton: () => signOut(),
        textButton: "Cerrar sesión",
        iconButton: <LogoutOutlined />,
        sizeButton: "middle",
      };
  return (
    <div className="divlogin">
      <ButtonCustom {...ButtonPropsLogout} />
      <AvatarUSer />
    </div>
  );
}
