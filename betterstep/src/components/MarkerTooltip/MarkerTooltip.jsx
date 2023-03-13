// custom marker tooltip
export default function MarkerTooltip({ marker, close, accept }) {
  return (
    <div className="opened-marker">
      <h2>{marker.name}</h2>
      <p>{marker.quest}</p>
      <div className="buttonbox">
        <button onClick={() => accept()}>Accept Quest</button>
        <button onClick={() => close()}>Decline Quest</button>
      </div>
    </div>
  )
}
