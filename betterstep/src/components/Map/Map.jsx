/* eslint-disable no-undef */
/* global google */
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import React from 'react'
import getCurrentLocation from '@/utils/getCurrentLocation'
import Navbar from '../Navbar/Navbar'
import Spinner from '../Spinner/Spinner'
import IsLocationActive from '../IsLocationActive/IsLocationActive'
import MarkerTooltip from '../MarkerTooltip/MarkerTooltip'
import Marker from '../Marker/Marker'
import styles from './Map.module.css'
import positionConverter from '@/utils/positionConverter'
import watchUserPosition from '@/utils/watchUserPosition'

//To Do List:
// Create API route for getting pins
// Create a function for getting the pins
// Look at the Google Maps API for calculating the distance between two points

export default function Map() {
  // everything is rendered via the render function
  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_API_KEY}
      version="beta"
      libraries={['marker']}
      render={render}
    />
  )
}

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />
    case Status.FAILURE:
      return <h1>Failure message</h1>
    case Status.SUCCESS:
      return (
        <>
          <IsLocationActive />
          <MyMap />
          <Navbar />
        </>
      )
  }
}

function MyMap() {
  const [map, setMap] = React.useState() // map to render and render to
  const [loc, setLoc] = React.useState() // current user location
  const [targetLocation, setTargetLocation] = React.useState() // target location
  const [data, setData] = React.useState(myPins)

  const [selectedMarker, setSelectedMarker] = React.useState(null)
  const [mapOptions, setMapOptions] = React.useState({
    mapId: '1cdc7a504e15f689',
    center: { lat: 0, lng: 0 },
    zoom: 18,
    disableDefaultUI: true,
  }) // map options

  const ref = React.useRef()

  // get users current location
  React.useEffect(() => {
    const myLocation = async () => {
      let newLoc = await getCurrentLocation()
      // setLoc(newLoc)
      setMapOptions({ ...mapOptions, center: newLoc })
    }
    myLocation()
  }, [])
  // If location is found, render map
  React.useEffect(() => {
    loc && setMap(new window.google.maps.Map(ref.current, mapOptions))
  }, [mapOptions])

  const callback = (payload) => {
    setSelectedMarker(payload)
  }

  function handleClick(e) {
    setSelectedMarker(e)
  }

  React.useEffect(() => {
    let watch = async () => {
      let userPos = await watchUserPosition()
      setLoc(userPos)
      console.log('User position', userPos)
    }
    watch()
    return () => {
      console.log('Clear watch')
    }
  }, [])

  return (
    <>
      <div ref={ref} className="map" />
      {map && (
        <Marker
          map={map}
          position={loc}
          icon="https://api.iconify.design/svg-spinners:pulse-rings-multiple.svg"
        />
      )}
      {map &&
        Object.entries(data).map(([key, marker]) => {
          console.log(marker.position, marker.name)
          return (
            <Marker
              key={key}
              id={marker.id}
              map={map}
              icon={marker.icon}
              image={marker.image}
              name={marker.name}
              desc={marker.desc}
              type={marker.type}
              about={marker.about}
              position={marker.position}
              onClick={() => handleClick(marker)}
            />
          )
        })}

      {selectedMarker && (
        <MarkerTooltip marker={selectedMarker} callback={callback} />
      )}
    </>
  )
}

let myPins = {
  A: {
    position: positionConverter(28.129167348312727, -15.435352240473591),
    name: 'Test',
    about: 'cool neighborhood to explore',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/La_plaza_de_la_Feria_02.jpg/760px-Mapcarta.jpg',
    type: 'neighborhood',
    desc: "Visit one of the city's neighborhoods such as Arenales. Climb up to the colorful barrios of San Nicolas and San Juan. Sitting at the top of a cliff, this area was one of the first to be inhabited on the island. The irregularity of house shapes is due to the fact that the vast majority were self-constructed homes. Formerly more disadvantaged neighborhoods, they are now an iconic image of the city. Wander down narrow streets and enjoy panoramic views of the city.",
    id: '1',
    icon: 'https://api.iconify.design/codicon:circle-large-filled.svg',
  },
  B: {
    position: positionConverter(28.129167348313723, -15.435352240473594),
    name: 'Las Arenas',
    about: 'cool neighborhood to explore',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/La_plaza_de_la_Feria_02.jpg/760px-Mapcarta.jpg',
    type: 'neighborhood',
    desc: "Visit one of the city's neighborhoods such as Arenales. Climb up to the colorful barrios of San Nicolas and San Juan. Sitting at the top of a cliff, this area was one of the first to be inhabited on the island. The irregularity of house shapes is due to the fact that the vast majority were self-constructed homes. Formerly more disadvantaged neighborhoods, they are now an iconic image of the city. Wander down narrow streets and enjoy panoramic views of the city.",
    id: '1',
    icon: 'https://api.iconify.design/codicon:circle-large-filled.svg',
  },
  C: {
    position: positionConverter(28.129167348412, -15.435352240473593),
    name: 'Thrid Place',
    about: 'cool neighborhood to explore',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/La_plaza_de_la_Feria_02.jpg/760px-Mapcarta.jpg',
    type: 'neighborhood',
    desc: "Visit one of the city's neighborhoods such as Arenales. Climb up to the colorful barrios of San Nicolas and San Juan. Sitting at the top of a cliff, this area was one of the first to be inhabited on the island. The irregularity of house shapes is due to the fact that the vast majority were self-constructed homes. Formerly more disadvantaged neighborhoods, they are now an iconic image of the city. Wander down narrow streets and enjoy panoramic views of the city.",
    id: '1',
    icon: 'https://api.iconify.design/codicon:circle-large-filled.svg',
  },
}
