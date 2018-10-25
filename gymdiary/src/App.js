import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chart from "./components/Chart";

const App = () => (
    <div>
        <Header />
        <Navbar />
        <Login />
        <Signup />
        <Chart />
    </div>
);

export default App;
