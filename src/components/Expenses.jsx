import React from "react";
import { BsThreeDots } from "react-icons/bs";
import expenseLogo1 from "../assets/logo1.jpg";
import expenseLogo2 from "../assets/logo2.jpg";
import expenseLogo3 from "../assets/logo3.jpg";
import expenseLogo4 from "../assets/logo4.jpg";
import expenseLogo5 from "../assets/logo5.jpg";
import expenseLogo6 from "../assets/logo6.jpg";
import expenseLogo7 from "../assets/logo7.jpg";

export default function Expenses() {
  const data = [
    {
      logo: expenseLogo1,
      name: "Olivia",
      price: "95%",
    },
    {
      logo: expenseLogo2,
      name: "Mark Wood",
      price: "85%",
    },
    {
      logo: expenseLogo3,
      name: "Michael",
      price: "80%",
    },
    {
      logo: expenseLogo4,
      name: "Dwight",
      price: "80%",
    },
    {
      logo: expenseLogo5,
      name: "Charles",
      price: "70%",
    },
    {
      logo: expenseLogo6,
      name: "Albert",
      price: "69%",
    },
    {
      logo: expenseLogo7,
      name: "George",
      price: "62%",
    },
  ];
  return (
    <div className="expenses">
      <div className="expenses__info">
        <h4>Top Performance Employees</h4>
        <BsThreeDots />
      </div>
      <div className="expenses__container">
        {data.map((expense) => {
          return (
            <div className="expense">
              <img src={expense.logo} alt="" />
              <h4 className="expense__title">{expense.name}</h4>
              <h6 className="expense__price">{expense.price}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
