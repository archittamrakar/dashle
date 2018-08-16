import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import { Graphs2Component } from './graphs2/graphs2.component';
import {ButtonModule} from 'primeng/button';
import { LandingComponent } from './landing/landing.component';
import { DashComponent } from './dash/dash.component';
import { PlotgraphComponent } from './plotgraph/plotgraph.component';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { GaugeChartComponent } from 'angular-gauge-chart'
// import { LandingComponent } from './landing/landing.component';
// // import { DataTableComponent } from './landing/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    Graphs2Component,
    LandingComponent,
    DashComponent,
    PlotgraphComponent,
    // GaugeChartComponent,
    
    // LandingComponent,
    // DataTableComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    CardModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
