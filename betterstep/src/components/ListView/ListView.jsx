import styles from './ListView.module.css'
import Button from '../Button/Button'
import Image from 'next/image'

export default function ListView({ locations }) {
  return (
    <div className={styles.listWrapper}>
      <div className={styles.list}>
        <h2>Locations</h2>
        <ul>
          {locations?.data?.map((location) => (
            <li key={location.id}>
              <div>
                <Image
                  src={
                    'https://ssbptdtmzjjavisvxdpp.supabase.co/storage/v1/object/public/sites-photos/' +
                    location.image +
                    '?t=2023-03-16T18%3A19%3A19.631Z'
                  }
                  alt="Go back"
                  width={200}
                  height={150}
                />
              </div>
              <div className={styles.listInfo}>
                <h3>{location.name}</h3>
                <span>{location.sites_master.type_name}</span>
                <p>{location.description}</p>
                <div>
                  <Button>View Location</Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
