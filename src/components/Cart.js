import React from 'react'
import { useSelector } from 'react-redux'
import { MENU_IMG_URL } from '../utils/Constants';

const Cart = () => {
  const cartItems = useSelector(store=>store?.cart?.items);
  console.log(cartItems);
  return (
    <div>
   {cartItems?.map((data) => {
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
                
                  >
                    Remove
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
  )
}

export default Cart
