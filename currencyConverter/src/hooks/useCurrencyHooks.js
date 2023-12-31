
import { useEffect, useState } from "react";


const useCurrencyInfo = (currency) => {
    const [data,setData] = useState("");
    console.log('call');
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res[currency]));
        console.log(data);
    },[currency]);
    return data;
}


export default useCurrencyInfo;