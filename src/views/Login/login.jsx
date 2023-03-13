import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header';

const Login = () => {
  return (
    <div>
      <Header />
      <h1>
      login
      </h1>
      <button>
       <Link to = {`/home`}> Home</Link>
      </button>

    </div>
  )
}

export default Login