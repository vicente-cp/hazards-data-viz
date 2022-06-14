import DataFetching from "./api/dataFetching";
import EChart from "../components/Chart/EChart";
import { tsunamisFetching } from "./api/dataFetching";

const Tsunamis = () => {
    return (

        <EChart link="https://www.ngdc.noaa.gov/hazel/hazard-service/api/v1/tsunamis/events?country=Chile"
            fetchingFunction={tsunamisFetching}
            title="Tsunamis in Chile (Year vs Wave's max height)" />
    );
}

export default Tsunamis;