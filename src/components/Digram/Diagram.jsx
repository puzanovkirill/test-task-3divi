import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
        barCategoryGap={10}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kid" stackId="a" fill="#59981b" />
        <Bar dataKey="old" stackId="a" fill="#dc471c" />
        <Bar dataKey="young" stackId="a" fill="#3398ff" />
        <Bar dataKey="adult" stackId="a" fill="#3366cc" />
        <Bar dataKey="undefined" stackId="a" fill="#999999" />
      </BarChart>
    </div>
  );
};

export default Diagram;
