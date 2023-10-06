"use client";
import React, { useContext, useEffect, useState, MouseEvent } from "react";
import { Pie } from "@ant-design/plots";
import { FormType, NeighborhoodCount } from "@/types/interface";
import { AddressDataContext } from "@/libs/createContext";
import { Modal } from "antd";

export default function QuarterPieComponentNeighborhood() {
  const [data, setData] = useState<{ type: string; value: number }[]>([]);
  const { addressData } = useContext(AddressDataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };
  useEffect(() => {
    const neighborhoodCount: NeighborhoodCount = {};
    addressData.forEach((address: FormType) => {
      const neighborhood = address.neighborhood;
      if (neighborhoodCount[neighborhood]) {
        neighborhoodCount[neighborhood]++;
      } else {
        neighborhoodCount[neighborhood] = 1;
      }
    });
    const formattedData = Object.keys(neighborhoodCount).map(
      (neighborhood) => ({
        type: neighborhood,
        value: neighborhoodCount[neighborhood],
      })
    );

    setData(formattedData);
  }, [addressData]);

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    startAngle: Math.PI,
    endAngle: Math.PI * 1.5,
    legend: false as const,
    label: {
      type: "inner",
      offset: "-8%",
      content: "{name}",
      style: {
        fontSize: 18,
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
    pieStyle: {
      lineWidth: 0,
    },
  };

  return (
    <div className="charts" onClick={showModal}>
      <Modal
        title="Barrios"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Pie {...config} />
      </Modal>
      <Pie {...config} />
    </div>
  );
}
