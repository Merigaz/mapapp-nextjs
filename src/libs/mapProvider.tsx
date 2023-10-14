"use client";
import LoadingComponent from "@/app/components/loadingComponent";
import { PropChildren } from "@/types/interface";
import { LoadScript } from "@react-google-maps/api";

const mapProvider = ({ children }: PropChildren) => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_API_MAP_KEY as string}
      loadingElement=<LoadingComponent />
    >
      {children}
    </LoadScript>
  );
};
export default mapProvider;
