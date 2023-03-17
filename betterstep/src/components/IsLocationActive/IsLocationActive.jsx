import React from 'react'
import styles from './IsLocationActive.module.css'
import useCheckMobileScreen from '@/utils/useCheckMobileScreen.js'

export default function IsLocationActive() {
  const [isLocationActive, setIsLocationActive] = React.useState(true)

  console.log(useCheckMobileScreen())

  React.useEffect(() => {
    navigator.permissions
      .query({ name: 'geolocation' })
      .then(function (result) {
        if (result.state === 'granted') {
          setIsLocationActive(true)
        } else if (result.state === 'prompt') {
          setIsLocationActive(false)
        } else if (result.state === 'denied') {
          setIsLocationActive(false)
        }
      })
  }, [])

  function ActivatePopUp() {
    return (
      <div className={styles.popup}>
        <h1>Activate Geolocation</h1>
        <p>
          In order to use GreenStep, please go to your device settings and
          activate geolocation.
        </p>
      </div>
    )
  }

  return <>{isLocationActive ? null : <ActivatePopUp />}</>
}
