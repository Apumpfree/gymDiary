import React, { Component } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/Navbar";
import Login from "../components/LoginModal/Login";
import Signup from "../components/SignupModal/Signup";
import Footer from "../components/Footer/Footer";
class Home extends Component {

    render() {
        return (
            <div>
                <div>
                    <Header />
                    <Login />
                    <Signup />
                </div>
                <div class="columns">
                    <div class="column is-2">
                        <Navbar />
                    </div>
                    <div class="column">
                        
                        <p>insert components in this div</p>
                    </div>

                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    };
}
export default Home;