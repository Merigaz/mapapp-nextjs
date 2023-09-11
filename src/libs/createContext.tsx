"use client";
import {
  ErrorContextType,
  PropChildren,
  ZoomContextType,
} from "@/types/interface";
import { createContext, useState } from "react";

export const ZoomContext = createContext<ZoomContextType>({
  zoom: 12,
  setZoom: () => {},
});
export const ErrorContext = createContext<ErrorContextType>({
  error: false,
  setError: () => {},
});
const ContextProvider = ({ children }: PropChildren) => {
  const [zoom, setZoom] = useState(12);
  const [error, setError] = useState(false);
  return (
    <ZoomContext.Provider value={{ zoom, setZoom }}>
      <ErrorContext.Provider value={{ error, setError }}>
        {children}
      </ErrorContext.Provider>
    </ZoomContext.Provider>
  );
};
export default ContextProvider;
