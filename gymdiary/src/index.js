import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import HeaderSpot from "./Header"
import NavbarSpot from "./NavbarSpot"


ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<HeaderSpot />, document.getElementById("header"));
ReactDOM.render(<NavbarSpot />, document.getElementById("navSideBar"));

