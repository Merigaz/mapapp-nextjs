"use client";
import { createContext, useState } from "react";

export const ZoomContext = createContext<ZoomContextType>({
  zoom: 20,
  setZoom: (zoom: number) => {},
});

const ContextProvider = ({ children }: PropChildren) => {
  const [zoom, setZoom] = useState(20);
  return (
    <ZoomContext.Provider value={{ zoom, setZoom, }}>
      {children}
    </ZoomContext.Provider>
  );
};
export default ContextProvider;
