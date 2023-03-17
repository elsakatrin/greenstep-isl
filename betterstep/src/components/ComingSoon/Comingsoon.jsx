import styles from './ComingSoon.module.css'

export default function ComingSoon({ heading, children }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{heading}</h1>
      {children}
    </div>
  )
}
