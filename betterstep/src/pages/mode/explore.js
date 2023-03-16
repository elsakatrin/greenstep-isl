import Layout from "@/components/Layout/Layout";
import Map from "@/components/Map/Map";
import React from "react";
import useSWR from 'swr'
// explore mode view


export default function Explore() {
    const [dataPoints, setDataPoints] = React.useState([])
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data, error, isLoading } = useSWR('/api/hello', fetcher)

    React.useEffect(() => {
        if (error) console.log(error)
        if (isLoading) console.log('Loading...')
        setDataPoints(data)
    }, [isLoading])

    return (
        <>
            <Map dataPoints={dataPoints} />
        </>
    )

}