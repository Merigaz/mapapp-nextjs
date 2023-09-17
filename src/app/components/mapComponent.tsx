"use client";
import { ZoomContext } from "@/libs/createContext";
import { GoogleMap } from "@react-google-maps/api";
import { useContext } from "react";

const address = "111 Wellington St, Ottawa, ON K1A 0A9, Canada";

fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=[YOUR_API_KEY]`)
.then((response) => {
    return response.json();
}).then(jsonData => {
    console.log(jsonData.results[0].geometry.location); // {lat: 45.425152, lng: -75.6998028}
})
.catch(error => {
    console.log(error);
})
export default function MapComponent() {
  const {zoom} = useContext(ZoomContext);
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
    ></GoogleMap>
  );
}
