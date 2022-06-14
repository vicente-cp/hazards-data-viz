import { axisLeft, axisBottom } from 'd3';

export const axes = (
    selection,
    { height, margin, xScale, yScale }
) => {
    const { left, bottom } = margin;

    selection
        .selectAll('g.axis-y')
        .data([null])
        .join('g')
        .attr('class', 'axis axis-y')
        .attr('transform', `translate(${left},0)`)
        .call(axisLeft(yScale));

    selection
        .selectAll('g.axis-x')
        .data([null])
        .join('g')
        .attr('class', 'axis axis-x')
        .attr(
            'transform',
            `translate(0,${height - bottom})`
        )
        .call(axisBottom(xScale));
};