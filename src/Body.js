import React, { useState, useEffect } from "react";
import RestaurantCard from "./components/RestaurentCard.js";
import { Link } from "react-router-dom";
import Shimmer from "./components/Shimmer.js";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import useResData from "./utils/useResData.js";

const Body = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterResData, setFilterResData] = useState([]);
  const onlineStatus = useOnlineStatus();
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const info =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantsData(info);
      setFilterResData(info);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const searchResult = restaurantsData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterResData(searchResult);
  };

  const handleFilterTopRated = () => {
    const filteredResObj = restaurantsData.filter(
      (res) => res.info.avgRating >= 4
    );
    setFilterResData(filteredResObj);
  };

  return (
    <>
      {!onlineStatus && <h1>You Are Offline!!</h1>}
      {restaurantsData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="filter">
            <div className="search flex items-center">
              <input
                className="search-box border rounded py-1 px-2 mr-2"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search..."
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <button
              className="filter-btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleFilterTopRated}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterResData.map((el) => (
              <Link to={"/restaurants/" + el.info.id} key={el.info.id}>
                <RestaurantCard resData={el} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
