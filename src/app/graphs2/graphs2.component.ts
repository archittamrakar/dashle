import { Component, OnInit } from '@angular/core';
import {ChartModule} from 'primeng/chart';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-graphs2',
  templateUrl: './graphs2.component.html',
  styleUrls: ['./graphs2.component.css']
})
export class Graphs2Component implements OnInit {
  first=false;
  second=false;
  data: any;
  data1:any;
  graph_type:any;

    constructor() {
     
    }

    selectData(event) {

      this.second=true;
   
     if(event.element._datasetIndex===0){
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
     else if(event.element._datasetIndex===1){
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
     }
  
  

  ngOnInit() {
    this.first=true;
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Sales 2018',
              backgroundColor: '#ff5500',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'Projected Sales 2019',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  }
  }

}
