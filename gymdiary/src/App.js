import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup"

const App = () => (
    <div>
        <Header />
        <Navbar />
        <Login />
        <Signup />
    </div>
);

export default App;
