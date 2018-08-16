import { Component, OnInit } from '@angular/core';
import {ChartModule} from 'primeng/chart';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  first=false;
  second=false;
  a: any;
  data: any;
  data1:any;
  graph_type:any;

    constructor() {
     
    }

    selectData(event) {

      this.second=true;
   
     if(event.element._datasetIndex===0){
       this.graph_type="line";
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
     else if(event.element._datasetIndex===1){
      this.graph_type="doughnut";
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
else if(event.element._datasetIndex===2){
    this.graph_type="pie";
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
else if(event.element._datasetIndex===3){
    this.graph_type="radar";
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
    this.first=true;
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
            backgroundColor: '#ff5500',
            borderColor: '#7CB342',
            data: [28, 48, 40, 19, 66, 27, 70]
        },
        {
            label: 'Projected Sales 2019',
            backgroundColor: '#9CCC65',
            borderColor: '#7CB342',
            data: [28, 48, 40, 19, 76, 27, 80]
        }
      ]
  }
  }

}
