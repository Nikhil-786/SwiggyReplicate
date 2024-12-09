import { useSelector } from "react-redux";
import { MENU_IMG_URL } from "../utils/Constants";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);

  // const dispatch = useDispatch();
  console.log(cartItems);
  const handlRemove = (event) => {
    console.log(event);
    console.log(event.target.id);
    const divEle = document.getElementById(event.target.id);
    divEle.remove();
   
    //  const menuItem= document.querySelector(event.target.id);
    //  console.log(menuItem)
    //  menuItem.addEventListener('click',()=>{
    //   const divEle = document.getElementById(event.target.id);
    //   divEle.remove();
    //  })

    // dispatch(removeItem(cartItems[event.target.id]));
  };

  return (
    <div>
      {cartItems?.map((data, index) => {
        return (
          <div id={index}>
            <ul className="text-left mt-10 mx-64 text-wrap">
              <div className="flex justify-evenly flex-wrap">
                <img
                  key={data?.card?.info?.id}
                  className=" ml-36 w-56 rounded-lg"
                  src={MENU_IMG_URL + data?.card?.info?.imageId}
                  alt="menuImg"
                />

                <button
                  id={index}
                  onClick={(e) => handlRemove(e)}
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
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
