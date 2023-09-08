"use client";
import { createContext, useState } from "react";

export const ZoomContext = createContext<ZoomContextType>({
  zoom: 12,
  setZoom: () => {},
});

const ContextProvider = ({ children }: PropChildren) => {
  const [zoom, setZoom] = useState(12);
  return (
    <ZoomContext.Provider value={{ zoom, setZoom, }}>
      {children}
    </ZoomContext.Provider>
  );
};
export default ContextProvider;
