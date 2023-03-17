import React from 'react'
import styles from './CameraCapture.module.css'

export default function CameraCapture() {
  const [image, setImage] = React.useState(null)

  let ref = React.useRef()

  React.useEffect(() => {
    if (ref.current) {
      ref.current.src = image
    }
    return () => {
      URL.revokeObjectURL(image)
    }
  }, [image])

  function handleChange(e) {
    if (e.target.files && e.target.files[0]) {
      let img = URL.createObjectURL(e.target.files[0])
      setImage(img)
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
      {image && (
        <div className={styles.previewBox}>
          <img ref={ref} alt="" width="200" />
        </div>
      )}
    </div>
  )
}
