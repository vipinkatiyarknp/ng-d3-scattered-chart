import { Component } from '@angular/core';
import * as chartModel from './d3-scattered-chart/d3.scattered.chart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickedNodedata = '';
  chartConfig = {
    svgBgColor: 'transparent',
    showBorder: true,
    displayYaxis: true,
    displayXaxis: true,
    svgWidth: 520,
    svgHeigth: 520,
    circleRadius: 5,
    xAxisLabel: 'Spetal Length',
    yAxisLabel: 'Petal Length',
    groupNames: ['setosa', 'versicolor', 'virginica'],
    groupColors: ['#F8766D', '#00BA38', '#619CFF'],
    chartData: chartModel.chartData
  };
  onBubbleClick(data) {
    this.clickedNodedata = `Node group name: ${data.Species}, Node Node Petal Length:${data.Petal_Length}, Node group Spetal Length:${data.Sepal_Length}`;
    console.log(data);
  }
}
