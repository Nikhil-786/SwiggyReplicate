import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBomb,
  faPenNib,
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [location, setLocation] = useState();
const cartItems = useSelector((store)=>store.cart.items);
console.log(cartItems);
  useEffect(() => {
    Location();
  }, []);

  const Location = async () => {
    const data = await fetch("http://ip-api.com/json/");
    const json = await data.json();
    setLocation(json.city);
  };


  return (
    <div className=" bg-white shadow-lg">
      <div className="flex  justify-evenly ">
        <div className="flex">
         <Link to={'/'}><img
            className=" w-20 py-4 pl-2 rounded-lg"
            src="https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ"
            alt=""
          /></Link> 
          <label className=" text-lg font-bold mt-8 ml-4 " htmlFor="Location">
            {location}
          </label>
        </div>
        <div>
          <FontAwesomeIcon
            className="text-orange-600 mt-8 ml-4 text-lg"
            icon={faMagnifyingGlass}
          />
          <Link to={"/Search"}>
            <label
              className=" text-lg font-bold text-orange-600 mt-8 ml-4"
              htmlFor="Search"
            >
              Search
            </label>
          </Link>
        </div>
        <div>
          <FontAwesomeIcon
            className=" text-lg font-bold mt-8 ml-4"
            icon={faBomb}
          />
          <Link to={"/Offers"}>
            <label className=" text-lg font-bold mt-8 ml-4" htmlFor="Offers">
              Offers
            </label>
          </Link>
        </div>
        <div>
          <FontAwesomeIcon
            className=" text-lg font-bold mt-8 ml-4"
            icon={faPenNib}
          />
          <Link to={"/Help"}>
            
            <label className=" text-lg font-bold mt-8 ml-4 " htmlFor="Help">
              Help
            </label>
          </Link>
        </div>
        <div>
          <FontAwesomeIcon
            className=" text-lg font-bold mt-8 ml-4"
            icon={faUser}
          />
         <Link to={'/SignIn'}><label className=" text-lg font-bold mt-8 ml-4" htmlFor="SignIn">
            SignIn
          </label></Link> 
        </div>
        <div>
          <FontAwesomeIcon
            className=" text-lg font-bold mt-8 ml-4"
            icon={faCartShopping}
          />
       <Link to={'/Cart'}><label className=" text-lg font-bold mt-8 ml-4" htmlFor="Cart" >
            Cart {cartItems.length}
          </label></Link>   
        </div>
      </div>
    </div>
  );
};

export default Header;
