import { useRef, useEffect, useState } from 'react';
import { select } from 'd3';
import { viz } from './viz';

const VizWrapper = ({ data, title }) => {
    const ref = useRef();
    const [widthWind, setWidth] = useState(0);
    const [heightWind, setHeight] = useState();



    useEffect(() => {
        const width = window.innerWidth * 0.65;
        const height = window.innerHeight * 0.5;
        setWidth(width);
        setHeight(height);


        viz(select(ref.current), {
            data,
            xValue: (d) => d.year,
            yValue: (d) => d.eqMagnitude,
            width,
            height,
            margin: {
                top: 20,
                right: 40,
                bottom: 40,
                left: 40,
            },
            circleRadius: (d) => d.eqMagnitude,
            title
        });
    }, [data]);

    return (
        <svg className='svg-content-responsive'
            width={widthWind}
            height={heightWind}
            ref={ref}
            preserveAspectRatio="xMinYMin meet"
        />
    );
};

export default VizWrapper