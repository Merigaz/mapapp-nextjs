"use client";
import { ConfigProvider} from "antd";
import theme from "../theme/themeConfig";
import LogoutButton from "./logoutComponent";


export default function sidebarComponent() {
 
  return (
    <ConfigProvider theme={theme}>
      <aside className="sidebar">
       <LogoutButton/>
      </aside>
    </ConfigProvider>
  );
}
