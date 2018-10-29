import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';
import API from "../../utils/API";

class BarChart extends Component{
    
    
    
    
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Back', 'Chest', 'Legs', 'Core'],
                datasets:[
                    {
                    label: 'Days',
                    data:[
                        7, 4, 6, 5,
                    ],
                    backgroundColor: [
                        '#5BC0EB',
                        '#6CC551',
                        '#FDE74C',
                        '#C3423F'
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
                    title:{
                        display:true, 
                        text:'Weekly Report',
                        fontSize:25
                    },
                    legend:{
                        display:true,
                        position:'right',
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
};

export default BarChart;