import React from 'react'
import useSWR from 'swr'

export default function Fetchy({ url }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(url, fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <>
      <div>{data.message}</div>
    </>
  )
}
