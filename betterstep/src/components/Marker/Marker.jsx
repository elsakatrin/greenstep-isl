/* eslint-disable no-undef */
/* global google */
import React from "react";
import { createRoot } from "react-dom/client";
import Icons from "@/public/icons/icons";

// creates custom marker
export default function Marker({
  map,
  children,
  position,
  onClick,
  about,
  type,
  name,
  icon,
  id,
}) {
  const markerRef = React.useRef();
  const rootRef = React.useRef();

  React.useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement("div");
      rootRef.current = createRoot(container); // this is maybe redundant without advanced markers
      markerRef.current = new window.google.maps.Marker({
        position,
        map,
        id,
        about,
        icon,
        name,
        type,
        onClick,
      });
    }
  }, []);

  React.useEffect(() => {
    rootRef.current.render(children);
    let myIcon;
    switch (type) {
      case "Neighborhood":
      case "Square":
      case "Museum":
      case "Castle":
      case "Chathedral":
      case "District":
        myIcon = Icons.Building.src;
        break;
      case "Restaurant":
        myIcon = Icons.Food.src;
        break;
      case "Shopping":
        myIcon = Icons.Shopping.src;
        break;
      case "Nature":
        myIcon = Icons.Nature.src;
        break;
      case "Beach":
        myIcon = Icons.Beach.src;
        break;
      case "Views":
        myIcon = Icons.Views.src;
        break;
      case "House":
        myIcon = Icons.House.src;
        break;
      case "Church":
        myIcon = Icons.Church.src;
        break;
      case "Coffee":
        myIcon = Icons.Coffee.src;
        break;
      case "Bar":
        myIcon = Icons.Bar.src;
        break;
      default:
        myIcon = Icons.LocationPoint.src;
        break;
    }

    markerRef.current.position = position;
    markerRef.current.name = name;
    markerRef.current.icon = type ? myIcon : Icons.Location.src;
    markerRef.current.type = type;
    markerRef.current.map = map;
    markerRef.current.id = id;
    markerRef.current.about = about;
    const listener = markerRef.current.addListener("click", onClick);
    return () => listener.remove();
  }, [map, position, children]);
}
