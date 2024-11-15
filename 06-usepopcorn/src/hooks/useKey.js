import { useEffect } from "react";

export const useKey = (key, action) => {
  useEffect(() => {
    const callback = ({ code }) => {
      if (code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [action, key]);
};
