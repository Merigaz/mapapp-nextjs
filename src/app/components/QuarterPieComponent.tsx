"use client";
import React, { useContext, useEffect, useState } from "react";
import { Pie } from "@ant-design/plots";
import { NeighborhoodCount } from "@/types/interface";
import { HandlerFormData } from "@/libs/handlers";
import { ErrorContext } from "@/libs/createContext";

export default function DemoPie() {
  const { setError } = useContext(ErrorContext);
  const [data, setData] = useState<{ type: string; value: number }[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "/address";
        const method = "GET";
        const responseData = await HandlerFormData(url, method);

        const neighborhoodCount: NeighborhoodCount = {};
        responseData.addressData.forEach((address: NeighborhoodCount) => {
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
      } catch (Error) {
        setError(true);
      }
    };

    fetchData();
  }, []);
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
