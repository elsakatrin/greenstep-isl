import { useState } from "react";
import styles from "./ListView.module.css";
import Image from "next/image";
import { Backdrop } from "./Backdrop/Backdrop";
import Marker from "../Marker/Marker";
import { MyMap } from "../Map/Map";

export default function ListView({ locations }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleCardClick = (location) => {
    setSelectedLocation(location);
  };

  const handleCloseTooltip = () => {
    setSelectedLocation(null);
  };

  return (
    <div className={styles.listWrapper}>
      <Backdrop />
      <h2>Places to explore</h2>
      <div className={styles.list}>
        {locations?.data?.map((location) => (
          <div
            key={location.id}
            className={styles.card}
            onClick={() => handleCardClick(location)}
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
              <p>{location.sites_master.type_name}</p>
              <h3>{location.name}</h3>
            </div>
            {selectedLocation && (
              <MyMap
                center={{
                  lat: selectedLocation.latitude,
                  lng: selectedLocation.longitude,
                }}
                zoom={15}
              >
                <Marker
                  position={{
                    lat: selectedLocation.latitude,
                    lng: selectedLocation.longitude,
                  }}
                  name={selectedLocation.name}
                  type={selectedLocation.sites_master.type_name}
                  onClick={handleCloseTooltip}
                >
                  <div>{selectedLocation.name}</div>
                </Marker>
              </MyMap>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
