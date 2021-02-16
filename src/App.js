import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import "./App.css";
import { useState } from "react";
import { Rnd } from "react-rnd";

function App() {
  const data = [
    { name: "A", val: 100 },
    { name: "B", val: 120 },
    { name: "C", val: 145 },
  ];

  return (
    <Rnd
      className="test"
      default={{
        x: 0,
        y: 0,
        width: 600,
        height: 600,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} className="graph-wrapper">
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="val" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Rnd>
  );
}

export default App;
