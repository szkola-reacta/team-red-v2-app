import { useEffect, useState } from "react";

export const useStorage = (key) => {
  const [value, setValue] = useState(() => sessionStorage.getItem(key));
  useEffect(() => {
    sessionStorage.setItem(key, value);
  });
  return [value, setValue];
};
