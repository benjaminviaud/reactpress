import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { DropdownMenu } from 'foundation-sites';

class Nav extends React.Component{

  componentDidMount(){
    const $DropdownMenu = new DropdownMenu($('.dropdown'));
  }

  render(){

    return(
      <Router >
        <>
          <ul className='dropdown menu' data-dropdown-menu>
            <li>
              <a href="#">One</a>
              <ul className="menu vertical">
                <li><a href="#">One</a></li>
                <li><a href="#">Two</a></li>
                <li><a href="#">Three</a></li>
              </ul>
            </li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
          </ul>
        </>
      </Router>
    )
  }

}

export default Nav;
