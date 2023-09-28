"use client";
import {  AddressDataContext, ZoomContext } from "@/libs/createContext";
import { FormType } from "@/types/interface";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useContext } from "react";

export default function MapComponent() {
  const { addressData } = useContext(AddressDataContext);
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
      {addressData
        ? addressData.map((marker: FormType) => (
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
