import { useEffect, useState } from "react";

const useRestaurantMenu = (resId)=>{
    const [resInfo,setRestInfo] = useState(null);
      useEffect(()=>{
          fetchData();
      },[]);

      const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId="+resId);
        const json = await data.json();
        setRestInfo(json);
    

      }

    return resInfo;
}

export default useRestaurantMenu;