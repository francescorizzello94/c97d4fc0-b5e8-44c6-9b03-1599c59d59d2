import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) { 
  const [value, setValue] = useState<T>(() => { 
    const JSONValue = localStorage.getItem(key);
    if (JSONValue !== null) return JSON.parse(JSONValue);
    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    } else { 
      return initialValue;
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}