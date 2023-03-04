import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>home</h1>
        <button>
            <Link to={"/products/1"}>Produto</Link>
        </button>
        

    </div>
  )
}

export default Home