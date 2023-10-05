"use client";
import { AddressDataContext } from "@/libs/createContext";
import React, {MouseEvent} from 'react';
import { DateCount } from "@/types/interface";
import { Line } from "@ant-design/plots";
import { Modal } from "antd";
import { useContext, useEffect, useState } from "react";

export default function LineChartComponentDate() {
  const { addressData } = useContext(AddressDataContext);
  const [data, setData] = useState<{ Date: string; Scales: number }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const dateCounts: DateCount = {};
    addressData.forEach((item) => {
      const date = new Date(item.date);
      const yearMonthDay = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

      if (dateCounts[yearMonthDay]) {
        dateCounts[yearMonthDay]++;
      } else {
        dateCounts[yearMonthDay] = 1;
      }
    });

    const formattedData = Object.keys(dateCounts).map((yearMonthDay) => ({
      Date: yearMonthDay,
      Scales: dateCounts[yearMonthDay],
    }));

    setData(formattedData);
  }, [addressData]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (e:MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  const handleCancel = (e:MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };
  const config = {
    data,
    padding: 20,
    xField: "Date",
    yField: "Scales",
    xAxis: {
      tickCount: 5,
    },
  };

  return (
    <div className="charts" onClick={showModal}>
      <Modal
        title="Fecha de ingreso"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Line {...config} />
      </Modal>
      <Line {...config} />
    </div>
  );
}
