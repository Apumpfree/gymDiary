import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PieMenu from "./components/PieMenu";
import Chart from "./components/chart";

const App = () => (
    <div>
        <Login />
        <Signup />
        {/* <PieMenu /> */}
        <Chart />
    </div>
);

export default App;
