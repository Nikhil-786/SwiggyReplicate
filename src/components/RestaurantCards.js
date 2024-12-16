import { RES_IMG } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resDetails } = props;

  return (
    <div className="m-4 p-4 w-[250px] rounded-2xl">
      <img
        className="h-48 w-72 cursor-pointer"
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

//higher order component

//input =>restaurant card ==> output restaurant card with discounts.

export const resDiscounts = (RestaurantCard) => {
  return (props) => {
    const { resDetails } = props;
    return (
      <div>
       <h1 className=" absolute mt-36 mx-8 text-2xl text-white font-extrabold "> {resDetails?.info?.aggregatedDiscountInfoV3?.header}{resDetails?.info?.aggregatedDiscountInfoV3?.subHeader}</h1>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
