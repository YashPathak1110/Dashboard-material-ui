import React from "react";
import { Chart } from "react-google-charts";

const dataOld = [
  ["Name", "Popularity"],
  ["Cesar", 9250],
  ["Rachel", 18200],
  ["Patrick", 2900],
  ["Eric", 10200],
];

const dataNew = [
  ["Name", "Popularity"],
  ["Cesar", 11370],
  ["Rachel", 10600],
  ["Patrick", 8700],
  ["Eric", 6500],
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};

export const options = {
  legend: { position: "top" },
};

export default function Bar() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="320px"
      diffdata={diffdata}
      options={options}
    />
  );
}
