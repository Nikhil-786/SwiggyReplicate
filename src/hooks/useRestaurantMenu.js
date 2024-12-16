import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/Constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();

    setResMenu(json.data);
  };

  return resMenu;
};
export default useRestaurantMenu;
