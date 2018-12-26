import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({children}) => (
  <>
    <Header />

    {children}

    <Footer />
  </>
)

export default Layout;
