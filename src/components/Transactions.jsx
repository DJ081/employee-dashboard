import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    "On Time": 2000,
    "Absent": 2400,
    "Late In": 3000,
  },
  {
    "On Time": 4200,
    "Absent": 1398,
    "Late In": 7000,
  },
  {
    "On Time": 2000,
    "Absent": 12800,
    "Late In": 3500,
  },
  {
    "On Time": 3000,
    "Absent": 3908,
    "Late In": 6500,
  },
  {
    "On Time": 2800,
    "Absent": 4800,
    "Late In": 3800,
  },
  {
    "On Time": 2000,
    "Absent": 3800,
    "Late In": 7500,
  },
  {
    "On Time": 3490,
    "Absent": 4300,
    "Late In": 3700,
  },
];

export default function Transactions() {
  return (
    <div className="transactions">
      <div className="transactions__info">
        <h3>Attendance Overview</h3>
        <div className="transactions__info__detailed">
          <div>
            <span class="dot-1"></span>
            <h4>Absent</h4>
          </div>
          <div>
            <span class="dot-2"></span>
            <h4>Late In</h4>
          </div>
          <div>
            <span class="dot-3"></span>
            <h4>On Time</h4>
          </div>
        </div>
      </div>
      <div className="transactions__details">
        <div>
          <button class="year-button">
            <span>2023</span>
          </button>
        </div>
        <div>
          <button>Year</button>
          <button>Month</button>
        </div>
      </div>
      <div className="transactions__graph">
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
              <linearGradient id="colorview2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="20%" stopColor="#f1c232" stopOpacity={0.4} />
                <stop offset="85%" stopColor="#f1c232" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="colorview1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#c70f0f" stopOpacity={0.4} />
                <stop offset="85%" stopColor="#c70f0f" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="colorview3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="100%" stopColor="#008000" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#008000" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip cursor={false} />
            <Area
              type="monotone"
              dataKey="On Time"
              stroke="#008000"
              fill="url(#colorview3)"
            />
            <Area
              type="monotone"
              dataKey="Absent"
              stroke="#c70f0f"
              fill="url(#colorview1)"
            />
            <Area
              type="monotone"
              dataKey="Late In"
              stroke="#f1c232"
              fill="url(#colorview2)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
