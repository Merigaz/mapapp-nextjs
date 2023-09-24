
import { ConfigProvider } from "antd";
import theme from "../theme/themeConfig";
import LogoutButton from "./logoutComponent";
import DemoPie from "./QuarterPieComponent";

export default function sidebarComponent() {
  return (
    <ConfigProvider theme={theme}>
      <aside className="sidebar">
        <DemoPie />
        <LogoutButton />
      </aside>
    </ConfigProvider>
  );
}
