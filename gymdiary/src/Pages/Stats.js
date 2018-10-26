import React, { Component } from "react";
import Table from "../components/Table/Table";
class Stats extends Component {

    render() {
        return (
            <div>
                <div class="column">
                    <div class="level">
                        <div class="box column">
                            Bar
                            </div>
                        <div class="box column ">
                            Line
                            </div>
                    </div>
                    <div class="level">
                        <div class="box column">
                            Pie
                            </div>
                        <div class="box column is-two-thirds ">
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
export default Stats;