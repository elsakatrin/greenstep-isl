import styles from './ListView.module.css'

export default function ListView({ locations }) {
  console.log(locations?.data)
  return (
    <div className={styles.listWrapper}>
      <div className={styles.list}>
        <h2>Locations</h2>
        <ul>
          {locations?.data?.map((location) => (
            <li key={location.id}>
              <h3>{location.name}</h3>
              <span>{location.sites_master.type_name}</span>
              <p>{location.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
