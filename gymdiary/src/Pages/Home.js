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
                        <div class="level">
                            <div class="box column is-one-third">
                                    box 1
                            </div>
                            <div class="box column is-one-third">
                                box 2
                            </div>
                            <div class="box column is-one-third">
                                box 3
                            </div>
                        </div>

                        <section class="hero is-medium is-primary is-bold">
                            <div class="hero-body">
                                <div class="container">
                                    <h1 class="title">
                                        Primary bold title
                                    </h1>
                                    <h2 class="subtitle">
                                        Primary bold subtitle
                                    </h2>
                                </div>
                            </div>
                        </section>
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