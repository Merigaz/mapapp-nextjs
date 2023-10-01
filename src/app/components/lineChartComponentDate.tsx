import { AddressDataContext } from "@/libs/createContext";
import { Line } from "@ant-design/plots";
import { useContext, useEffect, useState } from "react";

export default function LineChartComponentDate() {
  const { addressData } = useContext(AddressDataContext);
  const [data, setData] = useState<{ Date: Date; Scales: number }[]>([]);
  useEffect(() => {
    // Agrupa las fechas y cuenta sus ocurrencias
    const dateCounts = addressData.reduce((counts, item) => {
      const date = new Date(item.date);
      const yearMonth = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`;

      if (counts[yearMonth]) {
        counts[yearMonth]++;
      } else {
        counts[yearMonth] = 1;
      }

      return counts;
    }, {});

    // Convierte los datos agrupados en el formato deseado
    const formattedData = Object.keys(dateCounts).map((yearMonth) => {
        const [year, month] = yearMonth.split('-');
        const date = new Date(year, month - 1); // Restamos 1 al mes ya que en JavaScript los meses van de 0 a 11
        const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${year}`;
        
        return {
          Date: formattedDate,
          Scales: dateCounts[yearMonth],
        };
      });

    setData(formattedData);
  }, [addressData]);

  console.log(data, "caca line");
  const config = {
    data,
    xField: "Date",
    yField: "Scales",
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return <Line {...config} />;
}
