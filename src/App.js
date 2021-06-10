import logo from './logo.svg'
import './App.css'
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom'
import { App as CapApp } from '@capacitor/app'
import { useEffect } from 'react'

function App () {
  useEffect(() => {
    console.log('Register app listener')
    CapApp.addListener('appUrlOpen', data => {
      console.log('App opened with URL:', data)
    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path='/signout-callback-oidc'>
          <SignOut />
        </Route>
        <Route path='/signin-oidc'>
          <SignIn />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

function Home () {
  let history = useHistory()

  function handleSignInClick () {
    history.push('/signin-oidc')
  }

  function handleSignOutClick () {
    history.push('/signout-callback-oidc')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <button onClick={handleSignInClick}>go to sign in</button>
        <button onClick={handleSignOutClick}>go to sign out</button>
      </header>
    </div>
  )
}

function SignOut () {
  let history = useHistory()

  function handleSignInClick () {
    history.push('/signin-oidc')
  }

  function handleHomeClick () {
    history.push('/home')
  }

  return (
    <>
      <p>sign out</p>
      <button onClick={handleSignInClick}>go to sign in</button>
      <button onClick={handleHomeClick}>go to home</button>
    </>
  )
}

function SignIn () {
  let history = useHistory()

  function handleSignOutClick () {
    history.push('/signout-callback-oidc')
  }

  function handleHomeClick () {
    history.push('/home')
  }

  return (
    <>
      <p>sign in</p>
      <button onClick={handleSignOutClick}>go to sign out</button>
      <button onClick={handleHomeClick}>go to home</button>
    </>
  )
}

export default App
