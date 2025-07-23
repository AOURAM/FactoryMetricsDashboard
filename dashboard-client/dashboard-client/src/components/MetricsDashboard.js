import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend
} from 'recharts';

const MetricsDashboard = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/metrics')
      .then(res => res.json())
      .then(data => setMetrics(data))
      .catch(err => console.error('API error:', err));
  }, []);

  if (!metrics) return <p>Loading...</p>;

  const data = [
    {
      name: 'Now',
      temperature: metrics.temperature,
      pressure: metrics.pressure
    }
  ];

  return (
    <div>
      <h2>Factory Metrics</h2>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <Line type="monotone" dataKey="pressure" stroke="#82ca9d" />
      </LineChart>
      <p><strong>Uptime:</strong> {metrics.uptime}</p>
    </div>
  );
};

export default MetricsDashboard;
