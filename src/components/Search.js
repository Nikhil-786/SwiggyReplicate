import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCards";

const Search = () => {
  const [filteredRetaurant, setFilteredRestaurant] = useState([]);

  console.log(filteredRetaurant);

  const resDetails = useSelector(
    (store) =>
      store?.movies?.Items[0]?.data?.cards[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
  );
  console.log(resDetails);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="mt-32 w-1/3 h-20 border-gray-600 border-solid border-2 rounded-xl text-2xl"
        value={search}
        onChange={(e) => {
          handleChange(e);
        }}
        type="text"
      />
      <button
        className="m-2 w-48 h-20 bg-green-400 rounded-xl "
        onClick={() => {
          const filteredRes = resDetails.filter((data) =>
            data.info.name.includes(search)
          );
          console.log(filteredRes);
          setFilteredRestaurant(filteredRes);
        }}
      >
        Search
      </button>
      {filteredRetaurant?.map((restaurant) => (
        <Link to={"/restaurant/" + restaurant.info.id}>
          <RestaurantCard
            key={restaurant.info.id}
            resDetails={restaurant}
          ></RestaurantCard>
        </Link>
      ))}
    </div>
  );
};

export default Search;
