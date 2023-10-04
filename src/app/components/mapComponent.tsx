"use client";
import { AddressDataContext, ZoomContext } from "@/libs/createContext";
import { FormType } from "@/types/interface";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Card, Checkbox, Divider } from "antd";
import { useContext, useState } from "react";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

export default function MapComponent() {
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
  const CheckboxGroup = Checkbox.Group;

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
  console.log(checkedList, "caca checkedlist");

  const filteredMarkers = addressData.filter((marker) => {
    return checkedList.includes(marker.neighborhood);
  });
  console.log(filteredMarkers, "Caca filtered markers");

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
            Check all
          </Checkbox>
          <Divider></Divider>
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </Card>
      </div>

      {filteredMarkers.length == 0
        ? addressData.map((marker: FormType) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.addressname}
            />
          ))
        : filteredMarkers.map((marker: FormType) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.addressname}
            />
          ))}
    </GoogleMap>
  );
}
