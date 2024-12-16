import useMovieHooks from "../hooks/useMovieHooks";
import { useSelector } from "react-redux";
import { IMG_BANNER } from "../utils/Constants";
import RestaurantCard from "./RestaurantCards";
import { Link } from "react-router-dom";
import RestaurantShimmer from "./RestaurantShimmer";
import useOfflineHook from "../hooks/useOfflineHook";
import { resDiscounts } from "./RestaurantCards";

const Browse = () => {
  useMovieHooks();

  const bannerDetails = useSelector(
    (store) =>
      store?.movies?.Items[0]?.data?.cards[0]?.card?.card?.gridElements
        ?.infoWithStyle?.info
  );
  const resDetails = useSelector(
    (store) =>
      store?.movies?.Items[0]?.data?.cards[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
  );

   const RestaurantCardDiscounted = resDiscounts(RestaurantCard);
console.log(resDetails);

console.log(resDetails?.length);
  // if (resDetails.length == null) return <RestaurantShimmer />;

  // const handleClick = () => {
  //   useRestaurantMenu(resId);
  // };

  const state = useOfflineHook();

  if(state===false) return <h1>You are offline , Kindly check your internet connection!!!</h1>;

  return resDetails?.length===0 ? (
    <RestaurantShimmer />
  ) : (
    <div>
      <div className="flex">
        {bannerDetails?.map((data) => (
          <img
            className="h-60 mt-20 ml-4 "
            src={IMG_BANNER + data.imageId}
            alt="bannerImg"
          ></img>
        ))}
      </div>
      <div>
        <div
          className="flex flex-wrap "
          // onClick={ handleClick}
        >
          {resDetails?.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.info.id}>
              
          
              {
               Object.keys(restaurant?.info?.aggregatedDiscountInfoV3).length!==0 ?
               <RestaurantCardDiscounted key={restaurant.info.id} resDetails={restaurant}></RestaurantCardDiscounted>
              : <RestaurantCard key={restaurant.info.id}
              resDetails={restaurant}
            ></RestaurantCard>
              }
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
