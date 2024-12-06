import useMovieHooks from "../hooks/useMovieHooks";
import { useSelector } from "react-redux";
import { IMG_BANNER } from "../utils/Constants";
import RestaurantCard from "./RestaurantCards";
import { Link } from "react-router-dom";

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
  console.log(resDetails);

  // const handleClick = () => {
  //   useRestaurantMenu(resId);
  // };

  return (
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
            <Link to={'/restaurant/'+restaurant.info.id}>
              <RestaurantCard
                key={restaurant.info.id}
                resDetails={restaurant}
              ></RestaurantCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
