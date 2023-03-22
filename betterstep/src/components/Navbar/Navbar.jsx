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
import globe from '../../public/globe-west.svg'
import user from '../../public/user.svg'

export default function Navbar({ locations }) {
  const [listView, setListView] = React.useState(false)

  const { asPath } = useRouter()
  console.log(asPath)

  function handleListView() {
    setListView(!listView)
  }

  if (asPath === '/onboarding') {
    return
  }
  
  return (
    <>
      <div className={styles.navbarWrapper}>
        {listView && <ListView locations={locations} />}
        <nav className={styles.navigation}>
          {asPath && (
            <Link href="/mode">
              <Button onClick="window.location.reload();">
                <Image
                  src={globe}
                  alt="backgroundMap"
                  width={50}
                  height={35}
                  priority
                  />
              </Button>
            </Link>
          )}
                  {locations && (
                    <Button onClick={handleListView}>
                      {' '}
                      <Image
                        src={list}
                        alt="List of locations"
                        width={50}
                        height={35}
                      />
                    </Button>
                  )}
          {asPath !== '/about' && (
            <Link href="/about">
              <Button>
                <Image
                  src={questionmark}
                  alt="Explaination"
                  width={50}
                  height={35}
                />
              </Button>
            </Link>
          )}
          {asPath !== '/user' && (
            <Link href="/user">
              <Button>
                <Image src={user} alt="User profile" width={50} height={35} />
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </>
  )
}
