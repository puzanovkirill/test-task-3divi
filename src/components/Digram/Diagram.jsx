import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Diagram = ({ dataToDiagram }) => {
  return (
    <div>
      <BarChart
        width={800}
        height={600}
        data={dataToDiagram}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kid" stackId="a" fill="#8884d8" />
        <Bar dataKey="old" stackId="a" fill="#82ca9d" />
        <Bar dataKey="young" stackId="a" fill="#ffc658" />
        <Bar dataKey="adult" stackId="a" fill="red" />
        <Bar dataKey="undefined" stackId="a" fill="grey" />
      </BarChart>
    </div>
  );
};

export default Diagram;
