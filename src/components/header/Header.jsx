import React from "react";
import CenterMenu from "../CenterMenu";
import './header.css';

function Header() {
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]";
  return (
    <div className="header">
      {/* logo */}
      <img
        src={require("../../assets/araliya-beach-logo.png")}
        alt=""
        className="logo"
      />
      {/* side menu */}
      <CenterMenu />
      {/* buttons */}
      <div className="buttons flex">
        <button className={`mr-[35px] hover:bg-[#232A4E] ` + buttonStyle}>
          Log in
        </button>
        <button className={buttonStyle+` bg-[#232A4E]`}>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
