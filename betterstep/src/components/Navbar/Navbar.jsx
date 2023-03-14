import styles from './Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navigation}>
        <Link href="/map">
          <button>Map</button>
        </Link>
        <Link href="/about">
          <button>About</button>
        </Link>
        <Link href="/user">
          <button>User</button>
        </Link>
      </nav>
    </div>
  )
}
