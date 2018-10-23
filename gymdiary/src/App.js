import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PieMenu from "./components/PieMenu";

const App = () => (
    <div>
        <Navbar />
        <Login />
        <Signup />
        <PieMenu />
    </div>
);

export default App;
