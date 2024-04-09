import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      ?.card;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <p className="text-lg mb-4">Cuisine: {cuisines.join(", ")}</p>
      <h2 className="text-2xl font-semibold mb-2">Menu</h2>
      <ul className="list-disc pl-6">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="text-lg mb-2">
            {item.card.info.name} - ${item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
