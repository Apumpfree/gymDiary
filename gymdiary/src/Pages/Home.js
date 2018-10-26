import React, { Component } from "react";

class Home extends Component {

    render() {
        return (
            <div>
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

                );
            };
        }
export default Home;