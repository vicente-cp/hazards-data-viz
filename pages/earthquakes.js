import DataFetching from "./api/dataFetching";
import EChart from "../components/Chart/EChart";
import { earthquakeFetching } from "./api/dataFetching";

const Earthquake = () => {
    return (

        <EChart
            link="https://www.ngdc.noaa.gov/hazel/hazard-service/api/v1/earthquakes?country=Chile"
            fetchingFunction={earthquakeFetching}
            title="Earthquakes in Chile (Year vs Magnitude)"
        />
    );
}

export default Earthquake;