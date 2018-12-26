import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";

const Header = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <a href='/' className='bold secondary'>ReactPress</a>
    </div>
    <div class="top-bar-right">
      <Nav />
    </div>
  </div>
)

export default Header;
