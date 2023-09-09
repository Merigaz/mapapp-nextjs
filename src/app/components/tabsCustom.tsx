"use client"
import { TabProps } from "@/types/interface";
import { Tabs } from "antd";

export default function TabsCustom({keyTabs, items, onChange,styleTab} :TabProps) {
  return (<Tabs defaultActiveKey={keyTabs} items={items} onChange={onChange} style={styleTab}></Tabs>);
}
