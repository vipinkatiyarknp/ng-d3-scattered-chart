# ng-d3-scattered-chart

Angular + D3 Reusable Scattered Chart Component


### Demo

   * Application live demo [https://ng-d3-scattered-chart.herokuapp.com/](https://ng-d3-scattered-chart.herokuapp.com/).

#### How to use it in your project
> download it from npm

```bash
npm install ng-d3-scattered-chart --save
```

use the scattered Chart module in your project, at any module, you just need to imports into your module:
```es6
import { D3ScatteredComponent } from 'ng-d3-scattered-chart'
```

easy to use the directive, just add it in a html tag, such as:
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
    (bubbleClick)="onBubbleClick($event)">
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
bubbleClick(data)
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
