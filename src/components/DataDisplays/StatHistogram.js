import React, { useEffect } from 'react';
// import './StatHistogram.css';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { withResizeDetector } from 'react-resize-detector';


const StatHistogram = ({ width, data, color, minX, maxX }) => {

  if (maxX - minX < 5) {
    minX--;
    maxX++;
  }

  const chartData = [];

  for (let i = minX; i <= maxX; i++) {
    chartData.push({
      name: i,
      count: data[i] ? data[i] : 0
    });
  }

  return(
    <div>
      <BarChart
        width={width}
        height={160}
        data={chartData}
        margin={{ top: 15, left: -20, right: 10, bottom: 10 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name"  />
        <YAxis dataKey="count" />
        <Tooltip />
        <Bar dataKey="count" fill={color} />
      </BarChart>
    </div>
  );
}

export default withResizeDetector(StatHistogram);