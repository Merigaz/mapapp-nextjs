"use client";
import { ConfigProvider} from "antd";
import theme from "../theme/themeConfig";
import LogoutButton from "./logout";


export default function SideBar() {
 
  return (
    <ConfigProvider theme={theme}>
      <aside className="sidebar">
       <LogoutButton/>
      </aside>
    </ConfigProvider>
  );
}
