import styles from './ListView.module.css'

export default function ListView({ locations }) {
  return (
    <div className={styles.listWrapper}>
      <div className={styles.list}>
        <ul>
          <li>
            <p>Item 1</p>
          </li>
          <li>
            <p>Item 2</p>
          </li>
          <li>
            <p>Item 3</p>
          </li>
          <li>
            <p>Item 4</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
