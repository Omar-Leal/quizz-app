import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Styles 
import '../styles/main.css'


function Home () {
  return (
     <div className="start__container">
       <Link className="start__button" to="/questions">
        <button>Start</button>     
       </Link>
     </div>
  )
}

export default Home;