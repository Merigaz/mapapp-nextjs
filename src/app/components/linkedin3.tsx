import useMediaQuery from "@/libs/useMediaQuery";
import { useState, useEffect } from "react";

export default function App() {
  const matches = useMediaQuery("(min-width: 1040px)");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  //aseguramos que el componente no se pre-renderize
  return isClient ?? matches ? " mayor que 1040px" : "Menos que 1040px";
}
