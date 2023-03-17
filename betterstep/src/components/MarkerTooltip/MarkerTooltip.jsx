import styles from './MarkerTooltip.module.css'
import Button from '../Button/Button'
import CameraCapture from '../Camera/CameraCapture'
import React from 'react'
import { imageService } from '@/pages/api/imageService'
import useSWR from 'swr'
import Image from 'next/image'
import imagesimport from '../imagesimports'
// custom marker tooltip
export default function MarkerTooltip({ marker, callback }) {
  // callback function for accepting or declining quest (passes state back to map component)
  function handleAccept() {
    callback(null)
  }

  function handleDecline() {
    callback(null)
  }

  return (
    <div className={styles.tooltipWrapper}>
      <div className={styles.tooltip}>
        <h2>{marker.name}</h2>

        <span>{marker.sites_master.type_name}</span>
        <p>{marker.description}</p>

        <Image src={"https://ssbptdtmzjjavisvxdpp.supabase.co/storage/v1/object/public/sites-photos/"+marker.image+"?t=2023-03-16T18%3A19%3A19.631Z"} alt="Go back" width={200} height={150}/>


        <div className="buttonbox">
          <Button onClick={handleAccept}>Accept</Button>
          <Button onClick={handleDecline}>Decline</Button>
        </div>
      </div>
    </div>
  )
}
