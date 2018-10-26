import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";

const App = () => (
    <div>
        <Header />
        <Navbar />
        <Login />
        <Signup />
        <BarChart />
        <PieChart />
    </div>
);

export default App;
