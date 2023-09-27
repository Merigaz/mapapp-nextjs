"use client";
import {
  AddressDataContextType,
  ErrorContextType,
  FormType,
  PropChildren,
  ZoomContextType,
} from "@/types/interface";
import { createContext, useState } from "react";

export const AddressDataContext = createContext<AddressDataContextType>({
  addressData: [],
  setAddressData: () => {},
});
const initialAddressData: FormType[] = [
  {
    name: "",
    id: "",
    phone: "",
    addressname: "",
    neighborhood: "",
    date: new Date(),
    table: "",
    idvotingplace: "",
    votingplace: "",
    addressvotingplace: "",
    lat: 0,
    lng: 0,
  },
];
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
  const [addressData, setAddressData] =
    useState<FormType[]>(initialAddressData);
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
