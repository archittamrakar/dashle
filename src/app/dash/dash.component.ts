import { Component, OnInit } from '@angular/core';
// import  * as Plotly  from  'plotly.js';
// import  { Config,  Data,  Layout }  from  'plotly.js';
import * as Plotly from 'plotly.js/dist/plotly.js';
import { Config, Data, Layout } from 'plotly.js/dist/plotly.js';


@Component({
    selector: 'app-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
    first = false;
    second = false;
    option: any;
    a: any;
    data: any;
    data1: any;
    display: boolean = false;
    graph_type: any;
    dataplot: any;


    constructor() {

    }
    // Plotly.newPlot('mydiv',data2);
    showDialog() {
        this.display = true;
    }
    selectData(event) {

        this.second = true;

        if (event.element._datasetIndex === 0) {
            this.graph_type = "line";
            this.data1 = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Quarter 1 2017',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#ff66cc'
                    },
                    {
                        label: 'Quarter2017',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#565656'
                    }
                ]
            }


        }
        else if (event.element._datasetIndex === 1) {
            this.graph_type = "doughnut";

            this.data1 = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: [
                            "#99ff99",
                            "#4da6ff",
                            "#ff66cc",
                            "#ffff66",
                            "cyan",
                            "#ff3333",
                            "#c5f442"
                        ],
                        hoverBackgroundColor: [
                            "#99ff99",
                            "#4da6ff",
                            "#ff66cc",
                            "#ffff66",
                            "cyan",
                            "#ff3333",
                            "#c5f442"
                        ]
                    }]
            };
        }
        else if (event.element._datasetIndex === 2) {
            this.graph_type = "pie";
            this.data1 = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: [
                            "#99ff99",
                            "#4da6ff",
                            "#ff66cc",
                            "#ffff66",
                            "cyan",
                            "#ff3333",
                            "#c5f442"
                        ],
                        hoverBackgroundColor: [
                            "#99ff99",
                            "#4da6ff",
                            "#ff66cc",
                            "#ffff66",
                            "cyan",
                            "#ff3333",
                            "#c5f442"
                        ]
                    }]
            };
        }
        else if (event.element._datasetIndex === 3) {
            this.graph_type = "radar";
            this.data1 = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Quarter 1 2018',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#ff66cc'
                    },
                    {
                        label: 'Quarter 2 2018',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#565656'
                    }
                ]
            }


        }
    }



    ngOnInit() {
        this.first = true;



        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Sales 2016',
                    backgroundColor: 'cyan',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Sales 2017',
                    backgroundColor: '#8000ff',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 82, 27, 90]
                },
                {
                    label: 'Sales 2018',
                    backgroundColor: 'gray',
                    borderColor: '#7CB342',
                    data: [18, 38, 60, 39, 22, 77, 85]
                }, {
                    label: 'Projected Sales 2019',
                    backgroundColor: 'pink',
                    borderColor: '#7CB342',
                    data: [76, 24, 30, 49, 52, 87, 50]
                },

            ]
        }
        this.option = {
            scales: {
                xAxes: [
                    {
                        barPercentage: 0.9,

                    },
                ],

            },
            legend: { display: false }
        }
        var level = 105;

        // Trig to calc meter point
        var degrees = 180 - level,
             radius = .5;
        var radians = degrees * Math.PI / 180;
        var x = radius * Math.cos(radians);
        var y = radius * Math.sin(radians);
        
        // Path: may have to change to create a better triangle
        var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
             pathX = String(x),
             space = ' ',
             pathY = String(y),
             pathEnd = ' Z';
        var path = mainPath.concat(pathX,space,pathY,pathEnd);
        
        var data = [{ type: 'scatter',
           x: [0], y:[0],
            marker: {size: 28, color:'850000'},
            showlegend: false,
            name: 'speed',
            text: level,
            hoverinfo: 'text+name'},
          { values: [50/6, 50/6, 50/6, 50/6, 50/6, 50/6, 50],
          rotation: 90,
          text: ['TOO FAST!', 'Pretty Fast', 'Fast', 'Average',
                    'Slow', 'Super Slow', ''],
          textinfo: 'text',
          textposition:'inside',      
          marker: {colors:['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
                                 'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)',
                                 'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)',
                                 'rgba(255, 255, 255, 0)']},
          labels: ['151-180', '121-150', '91-120', '61-90', '31-60', '0-30', ''],
          hoverinfo: 'label',
          hole: .5,
          type: 'pie',
          showlegend: false
        }];
        
        var layout = {
          shapes:[{
              type: 'path',
              path: path,
              fillcolor: '850000',
              line: {
                color: '850000'
              }
            }],
          title: '<b>Gauge</b> <br> Speed 0-100',
          height: 300,
          width: 300,
          xaxis: {zeroline:false, showticklabels:false,
                     showgrid: false, range: [-1, 1]},
          yaxis: {zeroline:false, showticklabels:false,
                     showgrid: false, range: [-1, 1]}
        };
        
        Plotly.newPlot('myDiv', data, layout, {scrollZoom: true});
    }
}
