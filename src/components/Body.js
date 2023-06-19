import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [serachText, setSerachText] = useState("");

  const searchRestaurants = (serachText) => {
    return restaurantList.filter((res) =>
      res.data.name.toLowerCase().includes(serachText.toLowerCase())
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(data);
    const json = await data.json();
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a restaurant"
          value={serachText}
          onChange={(e) => {
            setSerachText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const searchResult = searchRestaurants(serachText);
            setFilteredRestaurants(searchResult);
          }}
        >
          Search Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res) => {
          return <RestaurantCard key={res.data.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
