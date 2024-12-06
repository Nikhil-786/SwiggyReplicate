import React, { useEffect, useState } from 'react'
import { RES_MENU_URL } from '../utils/Constants';
import RestaurantMenu from '../components/RestaurantMenu';

const useRestaurantMenu = () => {
  
    const[resMenu,setResMenu] = useState(null);

    useEffect(()=>{
        fetchMenuData();
    },[]);

    const fetchMenuData =async()=>{
        const data = await fetch(RES_MENU_URL);
        const json = await data.json();
        setResMenu(json?.data?.cards);
    }

return (
    <RestaurantMenu resMenu ={resMenu}/>
)

}


export default useRestaurantMenu
