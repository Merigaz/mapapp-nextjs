"use client";
import QuarterPieComponentNeighborhood from "./quarterPieComponentNeighborhood";
import { ConfigProvider } from "antd";
import theme from "../theme/themeConfig";
import LogoutButton from "./logoutComponent";

export default function sidebarComponent() {
  return (
    <ConfigProvider theme={theme}>
      <aside className="sidebar">
        <div className="div-quarterpie-container">
          <QuarterPieComponentNeighborhood />
        </div>
        <LogoutButton />
      </aside>
    </ConfigProvider>
  );
}
