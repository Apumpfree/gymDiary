import React, { Component } from "react";
import Table from "../components/Table/Table";
import PieChart from "../components/PieChart/PieChart";
import LineChart from "../components/LineChart/LineChart";
import BarChart from "../components/BarChart/BarChart";
class Stats extends Component {

    

    render() {
        return (
            <div>
                <div className="column">
                    <div className="level">
                        <div id='boxFix' className="box column">
                            <BarChart />
                        </div>
                        <div className="box column ">
                            <LineChart />
                        </div>
                    </div>
                    <div id='boxFix' className="level">
                        <div className="box column">
                            <PieChart />
                        </div>
                        <div id='boxFix' className="box column is-two-thirds ">
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
export default Stats;