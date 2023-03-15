import React from 'react'

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
    <div className="App">
      <h1>Upload Image</h1>
      <label>
        <div className={styles.uploadBox}>
          <p>Upload Image</p>
        </div>
      </label>
      <input
        type="file"
        accept="capture=camera,image/*"
        onChange={handleChange}
      />

      <p>{image}</p>
      <img ref={ref} src="#" alt="" width="200" />
    </div>
  )
}
