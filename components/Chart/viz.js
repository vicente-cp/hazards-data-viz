import { scaleLinear, extent, event } from 'd3';
import { axes } from './axes';

export const viz = (
    selection,
    {
        data,
        xValue,
        yValue,
        width,
        height,
        margin,
        circleRadius,
        title
    }
) => {


    const { top, right, bottom, left } = margin;

    const xScale = scaleLinear()
        .domain(extent(data, xValue))
        .range([left, width - right]);

    const yScale = scaleLinear()
        .domain(extent(data, yValue))
        .range([height - bottom, top]);



    selection
        .selectAll('circle')
        .data(data)
        .join('circle')
        .attr('r', circleRadius)
        .attr('fill-opacity', 0.6)
        .attr('cx', (d) => xScale(xValue(d)))
        .attr('cy', (d) => yScale(yValue(d)))
        ;








    axes(selection, {
        height,
        margin,
        xScale,
        yScale,
    });

    selection.append("text")
        .attr("x", width / 4)
        .attr("y", margin.top)
        .text(title)
        .style('fill', 'rgba(63, 69, 97, 0.5)')
        .attr("stroke", "none")
        .attr("font-size", "1.5em")
        .attr("text-align", "center");






};
