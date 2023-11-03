import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
  ["2018", 1110, 560, 450],
  ["2019", 1010, 650, 500],
  ["2020", 910, 550, 600],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
    colors: ["rgb(50, 135, 145", "rgb(35, 10, 165)", "#178390"]
};

export default function Barcharts() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="290px"
      data={data}
      options={options}
    />
  );
}
