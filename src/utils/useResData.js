import { useState,useEffect } from "react";

const useResData = ()=>{
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)
        setResInfo(json);
        
    }

    return resInfo;
}

export default useResData;