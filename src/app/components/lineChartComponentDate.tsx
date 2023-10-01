import { AddressDataContext } from "@/libs/createContext";
import { DateCount } from "@/types/interface";
import { Line } from "@ant-design/plots";
import { useContext, useEffect, useState } from "react";

export default function LineChartComponentDate() {
  const { addressData } = useContext(AddressDataContext);
  const [data, setData] = useState<{ Date: string; Scales: number }[]>([]);

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

  console.log(data, "caca line");
  const config = {
    data,
    xField: "Date",
    yField: "Scales",
    xAxis: {
      type: "timeCat", 
      tickCount: 5,
    },
  };

  return <Line {...config} />;
}
