import React from "react";
import ItemList from "./ItemList";

const RestaurantMenuCategory = ({menuDetail,setShowItem,setShowIndex}) => {

 const handleClick =()=>{
  setShowIndex();
 }


  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
    <div className="flex justify-between" onClick={handleClick}>
      <span className="text-2xl font-bold">
        {menuDetail?.title} (
        {menuDetail?.itemCards.length})
      </span>
      <span>🔽</span>
      </div>
     {setShowItem && <ItemList Items={menuDetail.itemCards}/>}
    </div>
  );
};

export default RestaurantMenuCategory;
