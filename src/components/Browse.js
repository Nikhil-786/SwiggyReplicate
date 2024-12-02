

import useMovieHooks from '../hooks/useMovieHooks';
import { useSelector } from 'react-redux';
import { IMG_BANNER } from '../utils/Constants';
import RestaurantCard from './RestaurantCards'

const Browse = () => {
  
  useMovieHooks();

  const bannerDetails = useSelector(store=>store?.movies?.Items[0]?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
  const resDetails = useSelector(store=>store?.movies?.Items[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  console.log(bannerDetails);
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
      <div className="flex flex-wrap ">
        {resDetails?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            resDetails={restaurant}
          ></RestaurantCard>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Browse
