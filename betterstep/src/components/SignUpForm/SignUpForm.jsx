import React from 'react'
import useSWR from 'swr'

export default function SignUpForm() {
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
    console.log('The link was clicked.')
    const { data, error } = useSWR(url, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  }

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form>
        <input
          type="text"
          name="username"
          value={userdata.username}
          onChange={(event) => {
            handleChange(event)
          }}
        />
        <input
          type="text"
          name="email"
          value={userdata.email}
          onChange={(event) => {
            handleChange(event)
          }}
        />
        <input
          type="text"
          name="password"
          value={userdata.password}
          onChange={(event) => {
            handleChange(event)
          }}
        />
        <input
          type="text"
          name="confirmPassword"
          value={userdata.confirmPassword}
          onChange={(event) => {
            handleChange(event)
          }}
        />
        <button type="submit" onClick={handleClick}>
          Sign Up
        </button>
      </form>
    </div>
  )
}
