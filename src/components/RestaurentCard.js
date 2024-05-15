import React from "react";

const RestaurantCard = (props) => {
  return (
    <div className="res-card rounded-lg shadow-md p-4 bg-gray-100">
      <div className="relative w-full h-[250px] rounded-lg mb-4">
        <img
          className="absolute inset-0 w-full h-full  rounded-lg"
          alt="food"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resData.info.cloudinaryImageId}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{props.resData.info.name}</h3>
      <h4 className="text-sm mb-1">Cuisine: {props.resData.info.cuisines.join(", ")}</h4>
      <div className="flex items-center mb-1">
        <span className="text-sm mr-1 dark">Rating:</span>
        <span className="text-sm font-semibold">{props.resData.info.avgRating}</span>
        <span className="text-sm ml-1">★</span>
      </div>
      <h4 className="text-sm">Location: {props.resData.info.areaName}</h4>
    </div>
  );
}

// higher order component : 

// input Restaurantcard = >> ReztaurantCardOpenClose;

export const WithOpenLable = (RestaurantCard) =>{
  return(props)=>{
    return(
      <div>
        <span className="absolute bg-black m-2 p-2 rounded-sm block text-white z-10">promoted</span>
        <RestaurantCard {...props}/>
      </div>
    )
              
  }
}

export default RestaurantCard;
