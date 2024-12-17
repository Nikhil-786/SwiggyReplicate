import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex,setShowIndex] = useState(0);

  const resMenu = useRestaurantMenu(resId);

  if (resMenu == null) return <Shimmer />;

  const { avgRating, cuisines, name, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;

  const category =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (data) => {
        return (
          data?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log(category);

  return (
    <div>
      <h1 className=" text-3xl font-extrabold mt-28  ">{name}</h1>
      <div className="border-solid border-2 border-gray-300 w-64 mx-96 ">
        <p className="text-xl">
          {avgRating} - {costForTwoMessage}
        </p>
        <p className="text-xl">{cuisines}</p>
      </div>
      {/* controlled component */}
      {category.map((data, index) => (
        <RestaurantMenuCategory
          menuDetail={data?.card?.card}
          setShowItem={index === showIndex && true}
          setShowIndex ={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
