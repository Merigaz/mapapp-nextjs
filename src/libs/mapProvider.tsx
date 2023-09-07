"use client";
import { LoadScript } from "@react-google-maps/api";


const mapProvider = ({children}: PropChildren) => {
return <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_MAP_KEY as string}>{children}</LoadScript>
}
export default mapProvider