"use client";
import {
  AddressDataContextType,
  ErrorContextType,
  FormType,
  PropChildren,
  ZoomContextType,
} from "@/types/interface";
import { createContext, useEffect, useState } from "react";
import { HandlerFormData } from "./handlers";

export const AddressDataContext = createContext<AddressDataContextType>({
  addressData: [],
  setAddressData: () => {},
});
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
  const [addressData, setAddressData] = useState<FormType[]>([]);
  useEffect(() => {
    async function fetchAddressData() {
      try {
        const url = "/address";
        const method = "GET";
        const addressRequest = await HandlerFormData(url, method);
        setAddressData(addressRequest.addressData);
      } catch {
        setError(true);
      }
    }
    fetchAddressData();
  }, []);

  return (
    <ZoomContext.Provider value={{ zoom, setZoom }}>
      <ErrorContext.Provider value={{ error, setError }}>
        <AddressDataContext.Provider value={{ addressData, setAddressData }}>  
            {children}     
        </AddressDataContext.Provider>
      </ErrorContext.Provider>
    </ZoomContext.Provider>
  );
};
export default ContextProvider;
