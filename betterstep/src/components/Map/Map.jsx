/* eslint-disable no-undef */
/* global google */
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import { Wrapper } from '@googlemaps/react-wrapper'
import React from 'react'
import styles from './Map.module.css'

const center = {
  lat: 28.133592,
  lng: -15.435924,
}

export default function Map() {
  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_API_KEY}
      version="bate"
      libraries={['marker']}
    >
      <MyMap />
    </Wrapper>
  )
}

const mapOptions = {
  mapId: '1cdc7a504e15f689',
  center: { lat: 57.04725502007307, lng: 9.919605340180764 },
  zoom: 10,
  disableDefaultUI: true,
}

function MyMap() {
  const [map, setMap] = React.useState(null)
  const ref = React.useRef()

  React.useEffect(() => {
    setMap(new google.maps.Map(ref.current, mapOptions))
  }, [])

  return <div ref={ref} id="map"></div>
}

// <GoogleMap
//   zoom={15}
//   mapId="1cdc7a504e15f689"
//   center={center}
//   mapContainerClassName={styles.mapContainer}
// >
//   <MarkerF position={center} />
// </GoogleMap>
