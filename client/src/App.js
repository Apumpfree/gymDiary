import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Logs from "./Pages/Logs";
import Stats from "./Pages/Stats";
import Videos from "./Pages/Videos";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginModal/Login";
import Signup from "./components/SignupModal/Signup";
import fourOhfour from "./Pages/404";

class App extends Component {
    state = {
        currentPage: "Home"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />;
        } else if (this.state.currentPage === "Courses") {
            return <Courses />;
        } else if (this.state.currentPage === "Stats") {
            return <Stats />;
        } else if (this.state.currentPage === "Logs") {
            return <Logs />;
        }else if (this.state.currentPage === "Videos") {
            return <Videos />;
        }else {
            return <fourOhfour />;
        }
    };
    render() {
        return (
            <div>
                <div>
                    <Header />
                    <Login />
                    <Signup />
                </div>
                <div className="columns">
                    <div className="column is-2">
                        <Navbar
                            currentPage={this.state.currentPage}
                            handlePageChange={this.handlePageChange}
                        />
                    </div>
                    <div>
                        {this.renderPage()}
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    };
}

export default App;
