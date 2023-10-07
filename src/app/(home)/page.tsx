"use client";
import LoadScriptMap from "@/libs/mapProvider";
import MapComponent from "../components/mapComponent";
export default function Home() {
  return (
    <>
      <LoadScriptMap>
        <MapComponent />
      </LoadScriptMap>
    </>
      
    
  );
}
