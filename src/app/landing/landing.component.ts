
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash'


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('chart')el:ElementRef;
  movielist: any[] = [];
  display = false;
  resultv: any = [];
  arr=[1,2,3,4];
  a:any[]=[];
  Plotly:any;
   title:any;
   constructor() { }
  result = [
    {
     
    
      "header": "doughnut",
      "charttype": "doughnut",
      "data": {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }]

      }
    },
  ]




  ngOnInit() {
    this.resultv = this.result;
    this.basicChart();
  }
  basicChart(){
    const element=this.el.nativeElement
    const data=[{
      x:[1,2,3,4,5],
      y:[1,2,4,6,78]
    }]
    const style={
      margin:{t:0}
    }
    this.Plotly.plot(element,data,style)
  }
  displayTable() {
    this.display = ((this.display === false) ? true : false);

  }
  
  close(i) {
    this.a.push(i);
    this.resultv.splice(i, 1);
    console.log(this.a);
    console.log(this.title);
    

  }
  add(){
    let x=this.a[0];
    this.resultv.splice(0,0,this.result[x]);
    x++;
     
      
  }


}
