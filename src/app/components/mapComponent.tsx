"use client";
import { ZoomContext } from "@/libs/createContext";
import { HandlerFormData } from "@/libs/handlers";
import { FormType } from "@/types/interface";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";

export default function MapComponent() {
  const [responseData, setResponseData] = useState<FormType[]>([]);
  useEffect(() => {
    const pollingPlace = async () => {
      try {
        const url = "/address";
        const method = "GET";
        const responseData = await HandlerFormData(url, method);
        setResponseData(responseData.addressData);
      } catch {}
    };
    pollingPlace();
  }, []);
  const { zoom } = useContext(ZoomContext);
  const center = {
    lat: 10.9632,
    lng: -74.7964,
  };
  const bounds = {
    north: 11.061911,
    south: 10.892518,
    east: -74.725747,
    west: -74.886714,
  };
  return (
    <GoogleMap
      mapContainerClassName="mapclassname"
      center={center}
      zoom={zoom}
      options={{
        streetViewControl: true,
        mapTypeControl: true,
        disableDefaultUI: false,
        restriction: {
          latLngBounds: bounds,
        },
      }}
    >
      {responseData
        ? responseData.map((marker: FormType) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.addressname}
            />
          ))
        : null}
    </GoogleMap>
  );
}
