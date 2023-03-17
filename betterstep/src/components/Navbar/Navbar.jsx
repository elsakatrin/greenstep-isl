import styles from './Navbar.module.css'
import Link from 'next/link'
import Button from '../Button/Button'
import ListView from '../ListView/ListView'
import React from 'react'

import { useRouter } from 'next/router'

import Image from 'next/image'
import backicon from '../../public/back.svg'
import list from '../../public/list-bullets.svg'
import questionmark from '../../public/questionmark.svg'
import user from '../../public/user.svg'

export default function Navbar({ locations }) {
  const [listView, setListView] = React.useState(false)

  const { asPath } = useRouter()
  console.log(asPath)

  function handleListView() {
    setListView(!listView)
  }

  return (
    <>
      <div className={styles.navbarWrapper}>
        {listView && <ListView locations={locations} />}
        <nav className={styles.navigation}>
          {asPath !== '/mode' && (
            <Link href="/mode">
              <Button>Modes</Button>
            </Link>
          )}
          {asPath !== '/about' && (
            <Link href="/about">
              <Button>About</Button>
            </Link>
          )}
          {asPath !== '/user' && (
            <Link href="/user">
              <Button>User</Button>
            </Link>
          )}
          {locations && <Button onClick={handleListView}>List</Button>}
        </nav>
      </div>
    </>
  )
}
