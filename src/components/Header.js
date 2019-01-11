import React from "react";
import { Menu, MenuItem } from 'react-foundation';
import { DropdownMenu } from 'foundation-sites';


class Header extends React.Component{

  componentDidMount(){
    const $DropdownMenu = new DropdownMenu($('.dropdown'));
  }

  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <a href='/' className='bold secondary'>ReactPress</a>
        </div>
        <div className="top-bar-right">
          <Menu isDropdown>
            <MenuItem>
              <a>One</a>
              <Menu isVertical>
                <MenuItem><a>One</a></MenuItem>
                <MenuItem><a>Two</a></MenuItem>
                <MenuItem><a>Three</a></MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem><a>Two</a></MenuItem>
            <MenuItem><a>Three</a></MenuItem>
          </Menu>
        </div>
      </div>
    )
  }
}

export default Header;
