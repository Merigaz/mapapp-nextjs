"use client";
import React, { useContext, useEffect, useState } from "react";
import { Pie } from "@ant-design/plots";
import { FormType, NeighborhoodCount } from "@/types/interface";
import { AddressDataContext } from "@/libs/createContext";

export default function DemoPie() {
  const [data, setData] = useState<{ type: string; value: number }[]>([]);
  const { addressData } = useContext(AddressDataContext);
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
    <div className="m-auto w-full bg-white border-solid">
      {data ? <Pie {...config} /> : null}
    </div>
  );
}
