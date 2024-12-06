import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
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


  return (
    <div>
      <h1>{name}</h1>
      <p>
        {avgRating} - {costForTwoMessage}
      </p>
      <p>{cuisines}</p>
      <div>
        {itemCards?.map((data) => {
          return (
            <>
              <li>{data?.card?.info?.name}</li>
              <li>{data?.card?.info?.description}</li>
              <li>
                ₹{" "}
                {data?.card?.info?.defaultPrice
                  ? data?.card?.info?.defaultPrice / 100
                  : data?.card?.info?.price / 100}
              </li>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
