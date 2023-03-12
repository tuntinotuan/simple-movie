import { useEffect, useState } from "react";

export default function useDebounce(initializaValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initializaValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initializaValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initializaValue]);
  return debounceValue;
}
