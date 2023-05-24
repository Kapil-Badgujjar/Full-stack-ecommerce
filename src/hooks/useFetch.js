import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        makeApiCall(endpoint)
    },[endpoint])

    async function makeApiCall(endpoint){
        const res = await fetchDataFromApi(endpoint)
        setData(res)
    }

    return data;
}

export default useFetch;