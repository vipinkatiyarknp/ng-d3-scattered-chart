import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-d3-scattered-chart',
    template: `<div id="chart-container" [style.height.px]="svgHeigth"
                            [style.width.px]="svgHeigth"
                            [style.border]="showBorder?'1px solid #666':'0px'"></div>`,
    styleUrls: ['./d3.scattered.chart.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class D3ScatteredComponent implements OnInit {
    _chartData: any;
    @Input('svgBgColor') svgBgColor: string;
    @Input('svgWidth') svgWidth: number;
    @Input('svgHeigth') svgHeigth: number;
    @Input('groupNames') groupNames: any;
    @Input('circleRadius') circleRadius: number;
    @Input('xAxisLabel') xAxisLabel: string;
    @Input('yAxisLabel') yAxisLabel: string;
    @Input('groupColors') groupColors: any;
    @Input('showBorder') showBorder: boolean;
    @Input('displayYaxis') displayYaxis: boolean;
    @Input('displayXaxis') displayXaxis: boolean;
    @Input('data')
    set data(val: any) {
        this._chartData = val;
        if (this._chartData) {
            this.updateChart(this._chartData);
        }
    }
    get data(): any {
        return this._chartData;
    }
    @Output() bubbleClick = new EventEmitter<any>();
    constructor() {

    }
    ngOnInit() {
    }
    updateChart(data) {
        if (data === undefined || data.length === 0) {
            return;
        }
        const margin = { top: 10, right: 30, bottom: 40, left: 50 },
            width = this.svgWidth - margin.left - margin.right,
            height = this.svgHeigth - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select('#chart-container')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform',
                'translate(' + margin.left + ',' + margin.top + ')');

        // Add the grey background that makes ggplot2 famous
        svg.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('height', height)
            .attr('width', height)
            .style('fill', this.svgBgColor ? this.svgBgColor : '#F5F5F5');

        // Add X axis
        const x = d3.scaleLinear()
            .domain([4 * 0.95, 8 * 1.001])
            .range([0, width]);

        const xAxixTicks = this.displayXaxis ? 10 : 0;
        svg.append('g')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(x).tickSize(-height * 1.3).ticks(xAxixTicks))
            .select('.domain').remove();



        // Add Y axis
        const yAxixTicks = this.displayYaxis ? 10 : 0;
        const y = d3.scaleLinear()
            .domain([-0.001, 9 * 1.01])
            .range([height, 0])
            .nice();
        svg.append('g')
            .call(d3.axisLeft(y).tickSize(-width * 1.3).ticks(yAxixTicks))
            .select('.domain').remove();

        // Customization
        svg.selectAll('.tick line').attr('stroke', 'white');

        // Add X axis label:
        if (this.displayXaxis) {
            svg.append('text')
                .attr('text-anchor', 'end')
                .attr('x', width / 2 + margin.left)
                .attr('y', height + margin.top + 20)
                .text(this.xAxisLabel ? this.xAxisLabel : '');
        }

        // Y axis label:
        if (this.displayYaxis) {
            svg.append('text')
                .attr('text-anchor', 'end')
                .attr('transform', 'rotate(-90)')
                .attr('y', -margin.left + 20)
                .attr('x', -margin.top - height / 2 + 20)
                .text(this.yAxisLabel ? this.yAxisLabel : '');
        }

        // Color scale: give me a specie name, I return a color
        const color = d3.scaleOrdinal()
            .domain(this.groupNames)
            .range(this.groupColors);

        const div = d3.select('body').append('div')
            .attr('class', 'tooltip')
            .style('opacity', 0);

        // Add dots
        svg.append('g')
            .selectAll('dot')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', function (d) { return x(d.Sepal_Length); })
            .attr('cy', function (d) { return y(d.Petal_Length); })
            .attr('r', this.circleRadius ? this.circleRadius : 5)
            .style('fill', function (d) {
                return color(d.Species);
            }).on('click', (d, i) => {
                this.bubbleClick.emit(d);
            }).on('mouseover', (d, i) => {
                div.transition()
                    .duration(200)
                    .style('opacity', .9);
                div.html(d.Species + '<br/>' + d.Petal_Length)
                    .style('left', (d3.event.pageX) + 'px')
                    .style('top', (d3.event.pageY - 28) + 'px');
            }).on('mouseout', (d, i) => {
                div.transition().duration(500).style('opacity', 0);
            });

    }
}
