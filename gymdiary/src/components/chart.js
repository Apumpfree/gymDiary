import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Back', 'Chest', 'Legs', 'Core'],
                datasets:[
                    {
                    label: 'Weekly',
                    data:[
                        7,
                        3,
                        5,
                        3
                    ]
                        
                    
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
                    maintainAspectRatio: false
                }}
            />
            </div>
        );
    }
}

export default Chart;