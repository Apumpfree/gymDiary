import React, { Component } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/Navbar";

class Stats extends Component {

    render() {
        return (
            <div>
                <div>
                    <Header />
                    
                </div>
                <div class="columns">
                    <div class="column is-2">
                        <Navbar />
                    </div>
                    <div class="column">
                        <p>insert components in this div</p>
                    </div>

                </div>
            </div>
        );
    };
}
export default Stats;