import React from 'react'
import { createRoot } from 'react-dom/client'

// creates custom marker
export default function Marker({ map, children, position, onClick }) {
  const markerRef = React.useRef()
  const rootRef = React.useRef()

  React.useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement('div')
      rootRef.current = createRoot(container)
      markerRef.current = new google.maps.marker.AdvancedMarkerView({
        position,
        content: container,
      })
    }
  }, [])

  React.useEffect(() => {
    rootRef.current.render(children)
    markerRef.current.position = position
    markerRef.current.map = map
    const listener = markerRef.current.addListener('click', onClick)
    return () => listener.remove()
  }, [map, position, children])
}
