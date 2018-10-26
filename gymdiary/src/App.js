<<<<<<< HEAD
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
=======
import React, { Component } from "react";
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
                <div class="columns">
                    <div class="column is-2">
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
>>>>>>> 7a70ddb311b82f4e3f6337918d6145e158678379

export default App;
