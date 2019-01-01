import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root"
import Home from "./pages/Home";
import "./css/index.scss";


//react hot reload
hot(Home);

ReactDOM.render(<Home />, document.getElementById('root'));
