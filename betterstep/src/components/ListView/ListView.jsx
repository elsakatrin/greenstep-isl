import { useState } from "react";
import styles from "./ListView.module.css";
import Image from "next/image";
import { Backdrop } from "./Backdrop/Backdrop";
import { useEffect } from "react";

export default function ListView({ locations, handleListView, setCenter }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleCardClick = (location, event) => {
    const latLng = {
      lat: location.sites_locations.lng, // it's reversed in the database
      lng: location.sites_locations.lat,
    };
    setCenter(latLng);
    if (window.google && window.google.map) {
      window.google.map.setCenter(latLng);
    }
    setSelectedLocation(location, latLng);
    handleListView();
  };

  useEffect(() => {
    const handleClickOutsideMarker = (event) => {
      if (selectedLocation && !event.target.closest(".marker")) {
        setSelectedLocation(null);
      }
    };

    document.addEventListener("click", handleClickOutsideMarker);

    return () => {
      document.removeEventListener("click", handleClickOutsideMarker);
    };
  }, [selectedLocation]);

  return (
    <div className={styles.listWrapper}>
      <Backdrop />
      <h2>Places to explore</h2>
      <div className={styles.list}>
        {locations?.data?.map((location) => (
          <div
            key={location.id}
            className={styles.card}
            onClick={(event) => handleCardClick(location, event)}
          >
            <div className={styles.image}>
              <Image
                src={
                  "https://ssbptdtmzjjavisvxdpp.supabase.co/storage/v1/object/public/sites-photos/" +
                  location.image +
                  "?t=2023-03-16T18%3A19%3A19.631Z"
                }
                alt={location.name}
                width={323}
                height={160}
              />
            </div>
            <div className={styles.listInfo}>
              <p className={styles.type}>{location.sites_master.type_name}</p>
              <h3>{location.name}</h3>
              {location.description
                .split(". ")
                .slice(0, 1)
                .map((sentence, index) => (
                  <p className={styles.description} key={index}>
                    {sentence}.
                  </p>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
