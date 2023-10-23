import React from "react";
import { BsThreeDots } from "react-icons/bs";
// import wallet1 from "../assets/wallet1.png";
// import wallet2 from "../assets/wallet2.png";
import user from "../assets/user.jpg";
// import { BiUser } from "react-icons/bi";
export default function Wallets() {
  const wallets = [
    {
      name: "25000",
      balance: "Total Employees",
      // USD: "9,241,123.31",
      image: user,
    },
    {
      name: "150",
      balance: "New Employees",
      // USD: "21,112.67",
      image: user,
    },
    {
      name: "1856",
      balance: "Job Applicants",
      // USD: "21,112.67",
      image: user,
    },
    {
      name: "260",
      balance: "Resign Employees",
      // USD: "21,112.67",
      image: user,
    },
  ];
  return (
    <div className="wallets">
      {/* <div className="wallets__info">
        <h4>Wallets</h4>
        <BsThreeDots />
      </div> */}
      <div className="wallets__container">
        {wallets.map((wallet) => {
          return (
            <div className="wallet">
              <img src={wallet.image} alt="" />
              <div className="wallet__info">
                <h3 className="wallet__info__title">{wallet.name}</h3>
                <div className="wallet__info__balance">
                  {/* <h4>Balance</h4> */}
                  <h3 className="employee">{wallet.balance}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
