import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const earthquakeFetching = quakeData => quakeData.filter(quake => quake.eqMagnitude && quake.year && quake.year > 1950)
export const tsunamisFetching = tsunamiData => tsunamiData.filter(tsunami => tsunami.maxWaterHeight && tsunami.year && tsunami.year > 1950)

function useDataFetching(hazard_link, fetchingFunction) {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetchData();


        function fetchData() {
            axios.get(hazard_link)
                .then(res => {
                    setPosts(
                        fetchingFunction(res.data.items)
                    )

                })
                .catch(
                    err => {
                        console.log("posts")
                        console.log(err)
                    }
                )
        }

    }, [])
    return posts;
}

export default useDataFetching;
