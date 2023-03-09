/* eslint-disable no-undef */
/* global google */
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import React from 'react'
import styles from './Map.module.css'

export default function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 40.7128, lng: -74.006 }}
      mapContainerClassName={styles.mapContainer}
    />
  )
}
