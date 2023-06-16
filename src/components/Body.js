import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const arr = useState(resList);
  const [restaurantList, setRestaurantList] = arr;
  console.log(arr);
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
      <div className="res-container">
        {restaurantList.map((res) => {
          return <RestaurantCard key={res.data.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
