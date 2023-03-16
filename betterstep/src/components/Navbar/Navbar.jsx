import styles from './Navbar.module.css'
import Link from 'next/link'
import Button from '../Button/Button'
import ListView from '../ListView/ListView'
import React from 'react'
import Image from 'next/image'
import backicon from "../../public/back.svg"
import list from "../../public/list-bullets.svg"
import questionmark from "../../public/questionmark.svg"
import user from "../../public/user.svg"


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
            <Button>
            <Image src={backicon} alt="Back" width={50} height={35}/>
            </Button>
          </Link>

          <Button onClick={handleListView}>
          <Image src={list} alt="List of locations" width={50} height={35}/>
          </Button>

          <Link href="/about">
            <Button>
            <Image src={questionmark} alt="Explaination" width={50} height={35}/>
            </Button>
          </Link>

          <Link href="/user">
            <Button>
            <Image src={user} alt="User profile" width={50} height={35}/>
            </Button>
          </Link>
          
        </nav>
      </div>
    </>
  )
}
