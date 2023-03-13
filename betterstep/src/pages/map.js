/* eslint-disable no-undef */
/* global google */
// import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
// import { createRoot } from 'react-dom/client'
import useSWR from 'swr'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import positionConverter from '@/utils/positionConverter'
import Marker from '@/components/Marker/Marker'
import MarkerTooltip from '@/components/MarkerTooltip/MarkerTooltip'
import React from 'react'

const center = {
    lat: 28.133592,
    lng: -15.435924,
}

export default function Map() {
    console.log(process.env.NEXT_PUBLIC_API_KEY)
    return (
        <Wrapper
            apiKey={process.env.NEXT_PUBLIC_API_KEY}
            version="beta"
            libraries={['marker']}
            render={render}
        />
    )
}

const mapOptions = {
    mapId: 'ae9b4eb94be3d8fd',
    center: { lat: 28.133592, lng: -15.435924 },
    zoom: 13,
    disableDefaultUI: true,
}

const render = (status) => {
    switch (status) {
        case Status.LOADING:
            return <h1>Loading spinner</h1>;
        case Status.FAILURE:
            return <h1>Failure message</h1>;
        case Status.SUCCESS:
            return <MyMap />;
    }
};

function MyMap() {
    const [map, setMap] = React.useState()
    const ref = React.useRef()

    React.useEffect(() => {
        setMap(new window.google.maps.Map(ref.current, mapOptions))
    }, [])

    return (
        <>
            <div ref={ref} className="map" />
            {map && <LocationPin map={map} />}
        </>
    )
}

// create markers (should not have been named LocationPin maybe) LocationPin takes an arg of which map
function LocationPin({ map }) {
    const [data, setData] = React.useState(myPins)
    const [highlight, setHighlight] = React.useState()
    const [openedMarker, setOpenedMarker] = React.useState()
    const [quest, setQuest] = React.useState()
    const [activeMarker, setActiveMarker] = React.useState()

    React.useEffect(() => {
        if (!activeMarker) {
            return
        }
        setData(activeMarker)
    }, [activeMarker])

    function handleAccept() {
        setActiveMarker(data[openedMarker])
        setQuest(data[openedMarker])
        setOpenedMarker(null)
    }

    return (
        <>
            {quest && <ActiveQuest quest={quest} close={() => setQuest(null)} />}
            {openedMarker && (
                <MarkerTooltip
                    // pass which marker
                    marker={data[openedMarker]}
                    close={() => setOpenedMarker(null)}
                    accept={() => handleAccept()}
                />
            )}
            {Object.entries(data).map(([key, marker]) => (
                <Marker
                    key={key}
                    map={map}
                    position={marker.position}
                    onClick={() => setOpenedMarker(key)}
                >
                    <div
                        className={`marker ${highlight === key ? 'highlighted' : ''}`}
                        onMouseEnter={() => setHighlight(key)}
                        onMouseLeave={() => setHighlight(null)}
                    >
                        <h2 className="pin-name">{marker.name}</h2>
                        <span>Rating: {marker.rating}</span>
                    </div>
                </Marker>
            ))}
        </>
    )
}


// Dummy data
const myPins = {
    A: {
        name: 'Location 1',
        position: positionConverter(28.135455904357823, -15.437538995216169),
        quest: 'Take picture in front of the painting',
        rating: 4.5,
    },
    B: {
        name: 'Location 2',
        position: positionConverter(28.13281780589826, -15.43693520966055),
        quest: 'Take picture in front of the alter',
        rating: 3.2,
    },
    C: {
        name: 'Location 3',
        position: positionConverter(28.13471652661439, -15.436669506356887),
        quest: 'Take picture together with staff',
        rating: 4.9,
    },
    D: {
        name: 'Location 4',
        position: positionConverter(28.131671872339304, -15.43437819099297),
        quest: 'Take picture with Anna',
        rating: 5.1,
    },
}