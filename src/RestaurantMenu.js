import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) { 
    return <Shimmer />;
  }
console.log(resInfo);
  const { name, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      ?.card;
   const category =  (resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(c =>c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )   
   console.log(category);

  return (
    <div className="container text-center">
        <h1 className="font-bold my-5 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(",")}
        </p>
        {/* {this is category Accodion} */}
        {category.map(x=><RestaurantCategory data = {category?.card?.card}/>)}
        

    </div>
  );
};

export default RestaurantMenu;
