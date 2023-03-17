import React from 'react'
import useSWR from 'swr'
import styles from './Form.module.css'
import Button from '../Button/Button'
import Link from 'next/link'
import Logos from '@/public/logo/logo'
import Image from 'next/image'

export default function LoginView() {
  const [mode, setMode] = React.useState('login') // login | signup

  return (
    <>
      <div className={styles.formWrapper}>
        <Image src={Logos.TextLogo} alt="Greenstep Logo" />
        <LoginForm />
      </div>
    </>
  )
}

function LoginForm() {
  function handleClick(e) {
    e.preventDefault()
  }
  return (
    <div className={styles.form}>
      <h2 className={styles.h2}>Login</h2>
      <form className={styles.inputform}>
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className={styles.input}
          type="text"
          name="password"
          placeholder="Password"
        />
        {/* <Button className={styles.loginbtn} type="submit">Login</Button> */}
        <Button onClick={handleClick}>
          <Link href="/onboarding">Login</Link>
        </Button>
      </form>
    </div>
  )
}

function SignUpForm() {
  const [userdata, setUserdata] = React.useState({
    username: 'Mikkel?',
    email: 'miguel@gmail.com',
    password: '***',
    confirmPassword: '***',
  })

  const url = 'http://localhost:3000/api/signup'

  function handleChange(e) {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    })
  }

  function handleClick(e) {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    e.preventDefault()

    const { data, error } = useSWR(url, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  }

  return (
    <div className={styles.form}>
      <h2>Sign Up</h2>
      <form>
        <input
          className={input}
          type="text"
          name="username"
          value={userdata.username}
          onChange={(event) => {
            handleChange(event)
          }}
        />
        <input
          className={input}
          type="text"
          name="email"
          value={userdata.email}
          onChange={(event) => {
            handleChange(event)
          }}
        />
        <input
          className={input}
          type="text"
          name="password"
          value={userdata.password}
          onChange={(event) => {
            handleChange(event)
          }}
        />
        <input
          className={input}
          type="text"
          name="confirmPassword"
          value={userdata.confirmPassword}
          onChange={(event) => {
            handleChange(event)
          }}
        />
        <Button className={signup} type="submit" onClick={handleClick}>
          Sign Up
        </Button>
      </form>
    </div>
  )
}
