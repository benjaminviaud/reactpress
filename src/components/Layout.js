import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Foundation from 'foundation-sites';
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $(document).foundation();
  }

  render(){
    return (
      <>
        <Header />

        {this.props.children}

        <Footer />
      </>
    )
  }
}

export default Layout;
