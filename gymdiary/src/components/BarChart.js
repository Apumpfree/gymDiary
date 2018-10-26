import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';

class BarChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Back', 'Chest', 'Legs', 'Core'],
                datasets:[
                    {
                    label: 'Weekly',
                    data:[ 7, 3, 5, 3 ]
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="barChart">
            <Bar
                data={this.state.chartData}
                options={{
                    title:{
                        display:true, 
                        text:'Weekly Report',
                        fontSize:25
                    },
                    legend:{
                        display:true,
                        position:'right',
                    }
                }}
            />
            </div>
        );
    }
};

export default BarChart;