import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/Constants";
import Shimmer from "./Shimmer";
import { MENU_IMG_URL } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dispatch = useDispatch();
  console.log(resId);
  const [resMenu, setResMenu] = useState(null);
  //console.log(resMenu);

  useEffect(() => {
    console.log("Use effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    console.log(json.data);
    setResMenu(json.data);
  };

  if (resMenu == null) return <Shimmer />;

  const { avgRating, cuisines, name, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const category =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (data) => {
        return (
          data?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
      }
    );

  console.log(category);
  const categories = category.map((data) => data?.card?.card);
  console.log(categories);

  const handleClick = (data) => {
    dispatch(addItem(data));
  };

  return (
    <div>
      <h1 className=" text-3xl font-extrabold mt-28  ">{name}</h1>
      <div className="border-solid border-2 border-gray-300 w-64 mx-96 ">
        <p className="text-xl">
          {avgRating} - {costForTwoMessage}
        </p>
        <p className="text-xl">{cuisines}</p>
      </div>

      <div className="">
        {itemCards?.map((data) => {
          return (
            <>
              <ul className="text-left mt-10 mx-64 text-wrap">
                <div className="flex justify-evenly flex-wrap">
                  <img
                    className=" ml-36 w-56 rounded-lg"
                    src={MENU_IMG_URL + data?.card?.info?.imageId}
                    alt="menuImg"
                  />
                  <button
                    className=" absolute border-solid border-4 h-12 my-36 ml-36 w-40 bg-white rounded-lg text-2xl font-bold text-green-700  "
                    onClick={()=>handleClick(data)}
                  >
                    ADD
                  </button>
                </div>
                <li className="text-3xl font-semibold">
                  {data?.card?.info?.name}
                </li>
                <li className="text-xl">{data?.card?.info?.description}</li>
                <li className="text-3xl font-semibold">
                  ₹
                  {data?.card?.info?.defaultPrice
                    ? data?.card?.info?.defaultPrice / 100
                    : data?.card?.info?.price / 100}
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
