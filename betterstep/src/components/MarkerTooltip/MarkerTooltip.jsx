import styles from "./MarkerTooltip.module.css";
import Button from "../Button/Button";
import CameraCapture from "../Camera/CameraCapture";
import React from "react";
import Image from "next/image";

// custom marker tooltip
export default function MarkerTooltip({ marker, callback }) {
  const [mode, setMode] = React.useState(true); // boolean

  // callback function for accepting or declining quest (passes state back to map component)
  function handleAccept() {
    setMode(false);
  }

  function handleDecline() {
    callback(null);
  }

  function handleBack() {
    setMode(true);
  }

  return (
    <div className={styles.tooltipWrapper}>
      <div className={styles.tooltip}>
        <h2>{marker.name}</h2>
        {mode && (
          <>
            <span>{marker.sites_master.type_name}</span>
            <p>{marker.description}</p>
            <Image
              src={
                "https://ssbptdtmzjjavisvxdpp.supabase.co/storage/v1/object/public/sites-photos/" +
                marker.image +
                "?t=2023-03-16T18%3A19%3A19.631Z"
              }
              alt="Go back"
              width={200}
              height={150}
            />
            <div className="buttonbox">
              <Button onClick={handleAccept}>See Quest</Button>
              <Button onClick={handleDecline}>Back</Button>
            </div>
          </>
        )}
        {!mode && (
          <>
            <div className={styles.questBox}>
              <h3>Quest</h3>
              <span> Take picture at location</span>
            </div>
            <CameraCapture />
            <Button onClick={handleDecline}>Complete</Button>
            <Button onClick={handleBack}>Back</Button>
          </>
        )}
      </div>
    </div>
  );
}
