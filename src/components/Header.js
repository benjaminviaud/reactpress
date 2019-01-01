import React from "react";
import Menu from "./Menu";

const Header = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <a href='/' className='bold secondary'>ReactPress</a>
    </div>
    <div className="top-bar-right">
      <Menu />
    </div>
  </div>
)

export default Header;
