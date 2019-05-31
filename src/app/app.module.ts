import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {D3ScatteredComponent} from './d3-scattered-chart/d3.scattered.chart.component';

@NgModule({
  declarations: [
    AppComponent,
    D3ScatteredComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
