import React, { Component } from "react";
import { Line } from 'react-chartjs-2';

class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Back', 'Chest', 'Legs', 'Core'],
                datasets: [
                    {
                        label: 'Weekly',
                        data: [7, 3, 5, 3],
                        backgroundColor: [
                            'transparent',
                        ],
                        borderColor: [
                            '#aa74db'
                        ]
                    }
                ]
            }
        }
    }


    render() {
        return (
            <div className="LineChart">
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Weekly Report',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right',
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }}
                />
            </div>
        );
    }
}

export default LineChart;