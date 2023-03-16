import styles from './Navbar.module.css'
import Link from 'next/link'
import Button from '../Button/Button'
import ListView from '../ListView/ListView'
import React from 'react'

export default function Navbar() {
  const [listView, setListView] = React.useState(false)

  function handleListView() {
    setListView(!listView)
  }
  // React.useEffect(() => {
  // }, [listView])

  return (
    <>
      <div className={styles.navbarWrapper}>
        {listView && <ListView />}
        <nav className={styles.navigation}>
          <Link href="/mode">
            <Button>Modes</Button>
          </Link>
          <Link href="/about">
            <Button>About</Button>
          </Link>

          <Link href="/user">
            <Button>User</Button>
          </Link>
          <Button onClick={handleListView}>List</Button>
        </nav>
      </div>
    </>
  )
}
