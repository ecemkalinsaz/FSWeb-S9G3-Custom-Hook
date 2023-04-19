import useLocalStorage from "./localStorageKullan";

export default function useGeceModuAc() {
  const [geceModuAcik, setGeceModuAcik] = useLocalStorage(
    "geceModuAcik",
    false
  );

  const toggleGeceModu = () => {
    setGeceModuAcik(!geceModuAcik);
  };

  return { geceModuAcik, toggleGeceModu };
}
