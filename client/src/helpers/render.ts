import * as d3 from "d3";
import { LineChartData, PieChartData, AreaChartData } from "./../types";

export function _generatePieChart(svg, data: PieChartData) {
  const svgEnter = svg
    .enter()
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .append("g")
    .attr("transform", "translate(200,200)");

  const pie = d3.pie<{ label: string; value: number }>().value((d) => d.value);
  const data_ready = pie(data);

  const arc = d3
    .arc<d3.PieArcDatum<{ value: number }>>()
    .innerRadius(0)
    .outerRadius(150);

  svgEnter
    .selectAll("path")
    .data(data_ready)
    .join("path")
    .attr("d", arc)
    .attr("fill", (d, i) => d3.schemeCategory10[i % 10])
    .attr("stroke", "white")
    .style("stroke-width", "2px");
}

export function _generateAreaChart(svg, data: AreaChartData) {
  const svgEnter = svg.enter().append("svg");
  svgEnter
    .merge(svg as any)
    .attr("width", 500)
    .attr("height", 300);

  const x = d3.scaleLinear().domain([1, 5]).range([0, 480]);
  const y = d3
    .scaleLinear()
    .domain([0, Number(d3.max(data, (d: any) => d.y))])
    .range([280, 0]);

  const area = d3
    .area()
    .x((d: any) => x(d.x))
    .y0(280)
    .y1((d: any) => y(d.y));

  svgEnter
    .selectAll("path")
    .data([data])
    .join("path")
    .attr("d", area)
    .attr("fill", "#2196F3")
    .attr("stroke", "none");
}

export function _generateLineChart(svg, data: LineChartData) {
  const svgEnter = svg.enter().append("svg");
  svgEnter
    .merge(svg as any)
    .attr("width", 500)
    .attr("height", 300);

  const x = d3.scaleLinear().domain([1, data.length]).range([0, 480]);

  const y = d3
    .scaleLinear()
    .domain([0, Number(d3.max(data))])
    .range([280, 0]);

  const line = d3
    .line()
    .x((d, i) => x(i + 1))
    .y((d: any) => y(d));

  svgEnter
    .selectAll("path")
    .data([data])
    .join("path")
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);
}
