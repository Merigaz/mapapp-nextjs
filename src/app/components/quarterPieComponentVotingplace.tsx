"use client";
import React, { useContext, useEffect, useState } from "react";
import { Pie } from "@ant-design/plots";
import { FormType, VotingPlaceCount } from "@/types/interface";
import { AddressDataContext } from "@/libs/createContext";

export default function QuarterPieComponentVotingplace() {
  const [data, setData] = useState<{ type: string; value: number }[]>([]);
  const { addressData } = useContext(AddressDataContext);

  useEffect(() => {
    const votingplaceCount: VotingPlaceCount = {};
    addressData.forEach((address: FormType) => {
      const votingplace = address.votingplace;
      if (votingplaceCount[votingplace]) {
        votingplaceCount[votingplace]++;
      } else {
        votingplaceCount[votingplace] = 1;
      }
    });
    const formattedData = Object.keys(votingplaceCount).map(
      (votingplace) => ({
        type: votingplace,
        value: votingplaceCount[votingplace],
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
    <div className="charts">
      <Pie {...config} />
    </div>
  );
}