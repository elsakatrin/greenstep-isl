/* eslint-disable no-undef */
/* global google */
import React from 'react'
import { createRoot } from 'react-dom/client'

// creates custom marker
export default function Marker({
  map,
  children,
  position,
  onClick,
  about,
  animation,
}) {
  const markerRef = React.useRef()
  const rootRef = React.useRef()

  React.useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement('div')
      rootRef.current = createRoot(container)
      markerRef.current = new window.google.maps.Marker({
        position,
        map,
        about,
        animation: google.maps.Animation.DROP,
      })
    }
  }, [])

  React.useEffect(() => {
    rootRef.current.render(children)
    markerRef.current.position = position
    markerRef.current.map = map
    markerRef.current.about = about
    const listener = markerRef.current.addListener('click', onClick)
    return () => listener.remove()
  }, [map, position, children, about])
}
