import { RES_IMG } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resDetails } = props;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-500 rounded-2xl hover:bg-blue-400">
      <img className="h-48 w-72"
        src={RES_IMG + resDetails?.info.cloudinaryImageId}
        alt="RestaurantImage"
      />
      <label htmlFor="name">{resDetails?.info.name}</label>
      <label htmlFor="rating">{resDetails?.info.avgRating}</label>
      <label htmlFor="costforTwo">{resDetails?.info.costForTwo}</label>
      <label htmlFor="cusines">{resDetails?.info.cuisines}</label>
    </div>
  );
};

export default RestaurantCard;
