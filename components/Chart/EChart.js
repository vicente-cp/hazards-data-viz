import useDataFetching from '../../pages/api/dataFetching';

import VizWrapper from './VizWrapper';

function EChart({ link, fetchingFunction, title }) {

    const data = useDataFetching(link, fetchingFunction);
    console.log(data)
    return data ? (
        <div className='divViz'>
            <VizWrapper data={data} title={title} />
        </div>
    ) : (
        'Loading...'
    );


};

export default EChart