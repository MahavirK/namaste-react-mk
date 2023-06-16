import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    costForTwo,
    cuisines,
  } = resData?.data;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3> {name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>₹{costForTwo / 100} For two</h4>
    </div>
  );
};

export default RestaurantCard;
