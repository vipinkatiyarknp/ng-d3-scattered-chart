# ng-d3-scattered-chart

Angular + D3 Reusable Scattered Chart Component


### Demo

   * Application live demo [https://ng-d3-scattered-chart.herokuapp.com/](https://ng-d3-scattered-chart.herokuapp.com/).

#### How to use it in your project
> download it from npm

```bash
npm install ng-d3-scattered-chart --save
```

use the scattered Chart Component in your project, you just need to imports into your module;

```es6
import { D3ScatteredComponent } from 'ng-d3-scattered-chart';
```

Add the data model in the componet code file to add the data 
```es6
import * as chartModel from './d3-scattered-chart/d3.scattered.chart.model';
```

Add it in a html tag in component file, such as:
```
<app-d3-scattered-chart 
    [data]="chartConfig.chartData" 
    [svgBgColor]="chartConfig.svgBgColor"
    [svgWidth]="chartConfig.svgWidth" 
    [svgHeigth]="chartConfig.svgHeigth" 
    [groupNames]="chartConfig.groupNames"
    [groupColors]="chartConfig.groupColors" 
    [xAxisLabel]="chartConfig.xAxisLabel" 
    [yAxisLabel]="chartConfig.yAxisLabel"
    [showBorder]="chartConfig.showBorder" 
    [circleRadius]="chartConfig.circleRadius"
    [displayYaxis]="chartConfig.displayYaxis"
    [displayXaxis]="chartConfig.displayXaxis" 
    (bubbleClick)="onBubbleClick($event)"></app-d3-scattered-chart >

```

Add the config in component code file, such as:
```
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
}

```

#### Properties

| Name             | Default Value                                                         |
|------------------|-----------------------------------------------------------------------|
| `data`           | chart data                                                            |
| `svgBgColor`     | Chart background color                                                |
| `svgWidth`       | Chart block width                                                     |
| `svgHeigth`      | Chart block height                                                    |
| `groupNames`     | Chart group                                                           |
| `groupColors`    | Chart group colors                                                    |
| `xAxisLabel`     | X axis label                                                          |
| `yAxisLabel`     | Y axis label                                                          |
| `showBorder`     | true/false                                                            |
| `circleRadius`   | Radius of dot circle                                                  |
| `displayYaxis`   | true/false                                                            |
| `displayXaxis`   | true/false                                                            |


### method

```
onBubbleClick(data) {
    this.clickedNodedata = `Node group name: ${data.Species}, Node Node Petal Length:${data.Petal_Length}, Node group Spetal Length:${data.Sepal_Length}`;
    console.log(data);
  }
```

it will return the data of the node you clicked !!!



## Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:4200
npm start

### License
MIT
