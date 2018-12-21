const React = require ("react");
const ReactDOM = require ("react-dom");
const Header = require("../components/Header");
const Footer = require("../components/Footer");

const Layout = ({children}) => (
  <>
    <Header />

    {children}

    <Footer />
  </>
)

module.exports = Layout;
