"use client";
import QuarterPieComponentNeighborhood from "./quarterPieComponentNeighborhood";
import { ConfigProvider } from "antd";
import theme from "../theme/themeConfig";
import LogoutButton from "./logoutComponent";
import TabsCustom from "./tabsCustom";
import { TabProps } from "@/types/interface";
import QuarterPieComponentVotingplace from "./quarterPieComponentVotingplace";
import LineChartComponentDate from "./lineChartComponentDate";

export default function sidebarComponent() {
  const TabsFormsProps: TabProps = {
    onChange: (key) => {
      console.log(key);
    },
    items: [
      {
        key: "1",
        label: "Barrios",
        children: <QuarterPieComponentNeighborhood />,
      },
      {
        key: "2",
        label: "Lugares de votación",
        children: <QuarterPieComponentVotingplace />,
      },
    ],
    keyTabs: "1",
  };

  return (
    <ConfigProvider theme={theme}>
      <aside className="sidebar">
        <div className="div-charts-container">
          <TabsCustom {...TabsFormsProps} />
          <LineChartComponentDate />
        </div>
        <LogoutButton />
      </aside>
    </ConfigProvider>
  );
}
