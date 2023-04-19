import { useState } from "react";

export default function useLocalStorage(key, baslangicDegeri) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : baslangicDegeri;
  });

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}

//2. Yöntem:

// import { useState } from "react";

// export default function useLocalStorage(key, baslangicDegeri) {
//   const [value, setValue] = useState(() => {
//     const storedValue = localStorage.getItem(key);
//     return storedValue !== null ? JSON.parse(storedValue) : baslangicDegeri;
//   });

//   const setStoredValue = (newValue) => {
//     setValue(newValue);
//     localStorage.setItem(key, JSON.stringify(newValue));
//   };

//   return [value, setStoredValue];
// }

