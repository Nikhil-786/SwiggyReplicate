import { useState } from "react";

const useOfflineHook = () => {
  const [offline, setOfflinestate] = useState(true);

  window.addEventListener("offline", () => {
    setOfflinestate(false);
  });

  window.addEventListener("online", () => {
    setOfflinestate(true);
  });

  return offline;
};

export default useOfflineHook;
