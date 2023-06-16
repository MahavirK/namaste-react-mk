import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const searchRestaurants = (serachText) => {
  return resList.filter((res) =>
    res.data.name.toLowerCase().includes(serachText.toLowerCase())
  );
};

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const [serachText, setSerachText] = useState("");
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setRestaurantList(filteredList);
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
            setRestaurantList(searchResult);
          }}
        >
          Search Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((res) => {
          return <RestaurantCard key={res.data.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
