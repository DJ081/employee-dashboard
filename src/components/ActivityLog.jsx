import React from "react";

import { BsThreeDots } from "react-icons/bs";

export default function ActivityLog() {
  const data = [
    {
      day: "Today",
      date: "7:11am",
      name: "Interviews",
      status: "Done",
    },
    {
      day: "Today",
      date: "1:11pm",
      name: "Feedback Session",
      status: "Pending",
    },
    {
      day: "Tomorrow",
      date: "12:00pm",
      name: "Performance Review",
      status: "Pending",
    },
    {
      day: "Tomorrow",
      date: "3:00pm",
      name: "Onboarding and Workshops",
      status: "Pending",
    },
  ];
  return (
    <div className="activity">
      <div className="activity__info">
        <h4>Schedule</h4>
        <BsThreeDots />
      </div>
      <div className="activity__container">
        {data.map((transaction) => {
          return (
            <div className="transaction">
              <div className="timestamp">
                <h5>{transaction.day}</h5>
                <h6>{transaction.date}</h6>
              </div>
              <div className="dot"></div>
              <div className="details">
                <h5>{transaction.name}</h5>
                <h5>{transaction.status}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
