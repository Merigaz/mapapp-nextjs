"use client";
import { AddressDataContext, ZoomContext } from "@/libs/createContext";
import { FormType, VotingPlace } from "@/types/interface";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Card, Checkbox, Divider } from "antd";
import { useContext, useEffect, useState } from "react";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { HandlerFormData } from "@/libs/handlers";

export default function MapComponent() {
  const [responseData, setResponseData] = useState<VotingPlace[]>([]);
  useEffect(() => {
    const pollingPlace = async () => {
      try {
        const url = "/vote";
        const method = "GET";
        const responseData = await HandlerFormData(url, method);
        setResponseData(responseData.votingPlace);
      } catch {}
    };
    pollingPlace();
  }, []);
  console.log(responseData)
  const CheckboxGroup = Checkbox.Group;

  const { addressData } = useContext(AddressDataContext);
  const plainOptions = Array.from(
    new Set(addressData.map((data) => data.neighborhood))
  );
  const { zoom } = useContext(ZoomContext);
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(plainOptions);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
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

  const filteredMarkers = addressData.filter((marker) => {
    return checkedList.includes(marker.neighborhood);
  });
  const iconVote = {
    url: `/MarkerVote.png`,
    scaledSize: new window.google.maps.Size(36, 36),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(15, 15),
    labelOrigin: new google.maps.Point(28, 68),
  }
  const iconAddress = {
    url: `/MarkerAddress.png`,
    scaledSize: new window.google.maps.Size(36, 36),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(15, 15),
    labelOrigin: new google.maps.Point(28, 68),
  }
  return (
    <GoogleMap
      mapContainerClassName="mapclassname"
      center={center}
      zoom={zoom}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        disableDefaultUI: true,
        restriction: {
          latLngBounds: bounds,
        },
      }}
    >
      <div className="div-checkbox">
        <Card>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Marcar todos
          </Checkbox>
          <Divider></Divider>
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </Card>
      </div>
      {responseData
        ? responseData.map((marker: VotingPlace) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.addressvotingplace}
              icon={iconVote}
            />
          ))
        : null}
      {filteredMarkers.length == 0
        ? addressData.map((marker: FormType) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.addressname}
              icon={iconAddress}
            />
          ))
        : filteredMarkers.map((marker: FormType) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.addressname}
              icon={iconAddress}
            />
          ))}
    </GoogleMap>
  );
}
