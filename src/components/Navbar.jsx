import React from "react";
import { VscArrowSwap } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import avatar from "../assets/avatarImage.png";
import { BsCalendar } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="avatar">
        <div className="dots">
          <img src={avatar} alt="" />
          {/* <span className="dot"></span> */}
        </div>
        <div className="info">
          <h4 className="title">Michael Scott</h4>
          <h6 className="status">HR Manager</h6>
        </div>
      </div>

      <div className="navbar__info">
        {/* <IoMdNotificationsOutline />
        <FiMail /> */}
        <div className="search__bar">
          <input type="text" placeholder="Search" />
          <FaSearch />
        </div>
      </div>

      <div className="quick">
        <div>
          {/* <Bi /> */}
          <AiFillCalendar />
          Monday, 01 July 2023
        </div>
      </div>

    </div>
  );
}
