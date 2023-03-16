import styles from './MarkerTooltip.module.css'
import Button from '../Button/Button'
// custom marker tooltip
export default function MarkerTooltip({ marker, callback }) {
  // callback function for accepting or declining quest (passes state back to map component)
  function handleAccept() {
    callback(null)
  }

  function handleDecline() {
    callback(null)
  }
  return (
    <div className={styles.tooltipWrapper}>
      <div className={styles.tooltip}>
        <h2>{marker.name}</h2>
        <span>{marker.type}</span>
        <p>{marker.desc}</p>
        <img
          src={marker.image}
          onError={(e) =>
            (e.target.src = 'https://via.placeholder.com/1000x200')
          }
          alt={marker.about}
          className={styles.img}
        />

        <div className="buttonbox">
          <Button onClick={handleAccept}>Accept</Button>
          <Button onClick={handleDecline}>Decline</Button>
        </div>
      </div>
    </div>
  )
}
