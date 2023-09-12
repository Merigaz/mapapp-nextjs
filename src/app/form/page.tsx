"use client";
import { TabProps } from "@/types/interface";
import TabsCustom from "../components/tabsCustom";
import FormAddressComponent from "../components/formAddressComponent";
import FormVotingPlaceComponent from "../components/formVotingPlaceComponent";
import { ConfigProvider} from "antd";
import theme from "../theme/themeConfig";

export default function Form() {
  const TabsFormsProps: TabProps = {
    onChange: (key) => {
      console.log(key);
    },
    items: [
      {
        key: "1",
        label: "Direcciones",
        children: <FormAddressComponent />,
      },
      {
        key: "2",
        label: "Lugares de votación",
        children: <FormVotingPlaceComponent />,
      },
    ],
    keyTabs: "1",
    
  };

  return (
    <div className="div-form-page">
      <ConfigProvider theme={theme}>

      <TabsCustom {...TabsFormsProps} />
      </ConfigProvider>
    </div>
  );
}
