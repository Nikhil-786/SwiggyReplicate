import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBomb,
  faPenNib,
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [location, setLocation] = useState();

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
          <img
            className=" w-20 py-4 pl-2 rounded-lg"
            src="https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ"
            alt=""
          />
          <label className=" text-lg font-bold mt-8 ml-4 " htmlFor="Location">
            {location}
          </label>
        </div>
        <div>
        
          <FontAwesomeIcon
            className= "text-orange-600 mt-8 ml-4 text-lg"
            icon={faMagnifyingGlass}
          />
          <label
            className=" text-lg font-bold text-orange-600 mt-8 ml-4"
            htmlFor="Search"
          >
            Search
          </label>
        </div>
        <div>
          <FontAwesomeIcon className=" text-lg font-bold mt-8 ml-4" icon={faBomb} />
          <label className=" text-lg font-bold mt-8 ml-4" htmlFor="Offers">
            Offers
          </label>
        </div>
        <div>
          <FontAwesomeIcon className=" text-lg font-bold mt-8 ml-4" icon={faPenNib} />
          <label className=" text-lg font-bold mt-8 ml-4 " htmlFor="Help">
            Help
          </label>
        </div>
        <div>
          <FontAwesomeIcon className=" text-lg font-bold mt-8 ml-4" icon={faUser} />
          <label className=" text-lg font-bold mt-8 ml-4" htmlFor="SignIn">
            SignIn
          </label>
        </div>
        <div>
          <FontAwesomeIcon className=" text-lg font-bold mt-8 ml-4" icon={faCartShopping} />
          <label className=" text-lg font-bold mt-8 ml-4" htmlFor="Cart">
            Cart
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
