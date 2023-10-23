import React from "react";
import { SiGoogleanalytics } from "react-icons/si";
import { BiNews, BiRocket } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { AiFillSetting, AiFillAppstore } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
export default function Sidebar() {
  const links = [
    {
      title: "Dashboard",
      icon: SiGoogleanalytics,
    },
    {
      title: "Employees",
      icon: AiFillAppstore,
    },
    {
      title: "Projects",
      icon: BiRocket,
    },

    {
      title: "Tickets",
      icon: BiNews,
    },
    {
      title: "Attendance",
      icon: BsCashStack,
    },

    {
      title: "Payroll",
      icon: FaWallet,
    },
    {
      title: "Leaves",
      icon: MdAccountCircle,
    },
    {
      title: "Settings",
      icon: AiFillSetting,
    },
  ];
  return (
    <div className="sidebar">
      <div className="brand">
        <h2>
          <span>airtel</span>
        </h2>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li>
              <a href="#">
                {<link.icon />}
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
