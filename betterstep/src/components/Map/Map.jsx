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
import Layout from '../Layout/Layout'
import Icons from '@/public/icons/icons'
import useCheckMobileScreen from '@/utils/useCheckMobileScreen.js'

//To Do List:
// Create API route for getting pins
// Create a function for getting the pins
// Look at the Google Maps API for calculating the distance between two points

export default function Map({ dataPoints }) {
  // everything is rendered via the render function
  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_API_KEY}
      version="beta"
      libraries={['marker']}
      render={(status) => render(status, dataPoints)}
    />
  )
}

const render = (status, dataPoints) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />
    case Status.FAILURE:
      return (
        <Layout>
          <h1>Something Went Wrong</h1>
        </Layout>
      )
    case Status.SUCCESS:
      return (
        <>
          {!useCheckMobileScreen && <IsLocationActive />}
          <MyMap sites={dataPoints} />
          <Navbar locations={dataPoints} />
        </>
      )
  }
}

function MyMap({ sites }) {
  const [map, setMap] = React.useState() // map to render and render to
  const [loc, setLoc] = React.useState() // current user location
  const [targetLocation, setTargetLocation] = React.useState() // target location
  const [data, setData] = React.useState()
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
      setLoc(newLoc)
      setMapOptions({ ...mapOptions, center: newLoc })
    }
    myLocation()
    setData(sites?.data)
  }, [sites])

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

  return (
    <>
      <div ref={ref} className="map" />
      {map && <Marker map={map} position={loc} icon={Icons.Location.src} />}

      {map &&
        data?.map((marker, key) => {
          return (
            <Marker
              key={key}
              id={marker.id}
              map={map}
              icon={Icons.Building.src}
              image={marker.image}
              name={marker.name}
              desc={marker.description}
              type={marker.sites_master.type_name}
              about={marker.about}
              position={{
                lng: marker.sites_locations.lat,
                lat: marker.sites_locations.lng,
              }}
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
      'https://localguidegrancanaria.com/wp-content/uploads/caldera-de-bandama-1.jpg',
    type: 'Nature',
    desc: "Located on the doorstep of the city is a natural wonder called the Caldera de Bandama or the 'Cauldron of Bandama'. This volcanic crater and geological wonder is located towards the outer limits of the city. The city buses don't go out as far as Caldera de Bandama, instead, take a Global bus heading to Santa Brígida. You can then hike down to the bottom of the 200m-deep cauldron.",
    id: '13',
    icon: 'https://api.iconify.design/codicon:circle-large-filled.svg',
  },
  D: {
    position: positionConverter(28.06408575945425, -15.462522917676514),
    name: 'Jardin Botanico Viera y Clavijo',
    about: 'Botanical garden',
    image:
      'https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/PH4014.jpg?itok=M3HaHLTo',
    type: 'Nature',
    desc: "You can take a city bus to within walking distance of Tafira's Jardín Botánico Viera y Clavijo. Gran Canaria's botanic garden is living proof that anything grows on the island. This garden displays both native and imported plants. Wander around exploring the impressive collection of flora including giant cacti as well as small lakes and streams.",
    id: '13',
    icon: 'https://api.iconify.design/codicon:circle-large-filled.svg',
  },
  E: {
    position: positionConverter(28.120882516020984, -15.427550000000002),
    name: 'Pueblo Canario',
    about: 'Traditional village',
    image: 'https://lpavisit.com/images/blog/2016/01/pueblo-canario_Fotor.jpg',
    type: 'District',
    desc: "Las Palmas de Gran Canaria is home to the Pueblo Canario, a facsimile of a traditional Canarian village in the heart of the capital. There are free live performances of Canarian folk music here every Thursday afternoon and Sunday morning which you can watch from the comfort of a table on the outdoor terrace, although you'll need to arrive early to secure a seat. The Pueblo Canario also houses the Museo Néstor, one of the city's art galleries.",
    id: '13',
    icon: 'https://api.iconify.design/codicon:circle-large-filled.svg',
  },
  F: {
    position: positionConverter(28.132071386291905, -15.44024666000249),
    name: 'Polonium 209 on Carretera del rincón',
    about: 'Vintage shops',
    image:
      'https://polonium209.com/wp-content/uploads/2018/08/20180824_174522.jpg',
    type: 'Shopping',
    desc: 'Spend a couple of hours browsing the vintage shops in Las Palmas. Visit Polonium 209 on Carretera del rincón, selling upcycled and pre-owned furniture from the 1940s to 1980s. Admire the items are displayed in a vintage-industrial setting.',
    id: '13',
    icon: 'https://api.iconify.design/codicon:circle-large-filled.svg',
  },
}
