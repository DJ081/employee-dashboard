import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    Female: 2400,
    Male: 4000,
  },
  {
    Female: 1398,
    Male: 3000,
  },
  {
    Female: 2000,
    Male: 9800,
  },
  {
    Female: 2780,
    Male: 3908,
  },
  {
    Female: 1890,
    Male: 4800,
  },
  {
    Female: 4000,
    Male: 3800,
  },
  {
    Female: 3490,
    Male: 4300,
  },
];

export default function Overview() {
  return (
    <div className="overview">
      <div className="overview__title">
        <h3>Gender By Employees</h3>
        <div className="title__buttons">
          <button>Month</button>
          <button>Year</button>
        </div>
      </div>
      <div className="overview__info">
        <div className="outer">
          <div className="info__out">{/* <h4>Male</h4> */}</div>
          <div className="info__in">
            <h4>Male</h4>
            <h4>17300</h4>
            {/* <h3></h3> */}
          </div>
        </div>
        <div className="outer">
          <div className="info__out">
            {/* <h4>Female</h4> */}
          </div>
          <div className="info__in">
            <h4>Female</h4>
            <h4>7700</h4>
            {/* <h3>14K</h3> */}
          </div>
        </div>
      </div>
      <div className="overview__graph">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
            }}
          >
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#c70f0f" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#ee3b3b11" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Female"
              stroke="#c70f0f"
              fill="url(#colorview)"
            />
            <Area
              type="monotone"
              dataKey="Male"
              stroke="#c70f0f"
              fill="url(#colorview)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/* <div className="overview__insights">
        <div className="insight">
          <h4>Invoices</h4>
          <div>
            <h3>34</h3>
            <h4>Unpaid</h4>
          </div>
        </div>
        <div className="insight">
          <h4>Transactions</h4>
          <div>
            <h3>737</h3>
            <h4>Completed</h4>
          </div>
        </div>
      </div> */}
      <div className="overview__expand">
        <button>Expand Chart</button>
      </div>
    </div>
  );
}
