/* eslint-disable no-undef */
/* global google */
import useSWR from 'swr'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import positionConverter from '@/utils/positionConverter'
import Marker from '@/components/Marker/Marker'
import MarkerTooltip from '@/components/MarkerTooltip/MarkerTooltip'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import getCurrentLocation from '@/utils/getCurrentLocation'
import Spinner from '@/components/Spinner/Spinner'


// page this should be split up/ported into explore and quest

export default function Map() {
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
            return <Spinner />;
        case Status.FAILURE:
            return <h1>Failure message</h1>;
        case Status.SUCCESS:
            return (
                <>
                    <MyMap />
                    <Navbar />
                </>);
    }
};

function MyMap() {
    const [map, setMap] = React.useState() // map to render and render to
    const [mapOptions, setMapOptions] = React.useState({
        mapId: '1cdc7a504e15f689',
        center: { lat: 0, lng: 0 },
        zoom: 13,
        disableDefaultUI: true,
    }) // map options
    const [loc, setLoc] = React.useState() // current user location

    const ref = React.useRef()

    React.useEffect(() => {
        const myLocation = async () => {
            let newLoc = await getCurrentLocation()
            setLoc(newLoc)
            setMapOptions({ ...mapOptions, center: newLoc })
        }
        myLocation()
    }, [])


    React.useEffect(() => {
        loc && setMap(new window.google.maps.Map(ref.current, mapOptions))
    }, [mapOptions])

    return (
        <>
            <div ref={ref} className="map" />
            {map && <LocationPin map={map} loc={loc} />}
        </>
    )
}

// create markers (should not have been named LocationPin maybe) LocationPin takes an arg of which map
function LocationPin({ map, loc }) {
    const [data, setData] = React.useState(myPins)
    function handleClick(e) {
        console.log(e)
    }

    return (
        <>
            {/* This is the users own location */}
            {loc && <Marker map={map} position={loc} icon="https://api.iconify.design/svg-spinners:pulse-rings-multiple.svg" />}

            {/* These are the loaded locations pins from data */}
            {Object.entries(data).map(([key, marker]) => {
                // console.log(marker)
                return <Marker
                    key={key}
                    map={map}
                    icon={marker.image}
                    about={marker.about}
                    position={marker.position}
                    onClick={handleClick}
                />
            }
            )}
        </>
    )
}


// Dummy data
let myPins = {
    A: {
        position: { lat: 28.135455904357823, lng: -15.437538995216169 },
        about: "This is something about it",
        image: 'https://api.iconify.design/codicon:circle-large-filled.svg'
    },
    B: {
        position: { lat: 28.13281780589826, lng: -15.43693520966055 },
        about: "This is something about it too",
        image: 'https://api.iconify.design/codicon:circle-large-filled.svg'
    },
    C: {
        position: { lat: 28.13471652661439, lng: -15.436669506356887 },
        about: "This is something about it three?",
        image: 'https://api.iconify.design/codicon:circle-large-filled.svg'
    },
    D: {
        position: positionConverter(28.131671872339304, -15.43437819099297),
        about: "This is something about it four",
        image: 'https://api.iconify.design/codicon:circle-large-filled.svg'
    },
}