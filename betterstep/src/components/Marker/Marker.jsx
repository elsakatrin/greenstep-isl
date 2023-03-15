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
  name,
  icon,
  id,
}) {
  const markerRef = React.useRef()
  const rootRef = React.useRef()

  React.useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement('div')
      rootRef.current = createRoot(container) // this is maybe redundant without advanced markers
      markerRef.current = new window.google.maps.Marker({
        position,
        map,
        id,
        about,
        icon,
        name,
        onClick,
      })
    }
  }, [])

  React.useEffect(() => {
    rootRef.current.render(children)
    markerRef.current.position = position
    markerRef.current.name = name
    markerRef.current.icon = icon
    markerRef.current.map = map
    markerRef.current.id = id
    markerRef.current.about = about
    const listener = markerRef.current.addListener('click', onClick)
    return () => listener.remove()
  }, [map, position, children])
}
