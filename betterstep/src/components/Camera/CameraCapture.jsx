import React from 'react'
import styles from './CameraCapture.module.css'

export default function CameraCapture() {
  const [image, setImage] = React.useState('')

  let ref = React.useRef()

  function handleChange(e) {
    setImage(e.target.value)
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0]
      console.log(img)
      ref.current.src = URL.createObjectURL(img)
    }
  }

  return (
    <div className={styles.cameraWrapper}>
      <label className={styles.uploadBox}>
        <span>{image ? image : 'Upload'}</span>
        <input
          type="file"
          accept="capture=camera,image/*"
          onChange={handleChange}
        />
      </label>
      <div className={styles.previewBox}>
        <img ref={ref} alt="" width="200" />
      </div>
    </div>
  )
}
