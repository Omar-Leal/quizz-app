import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Styles 
import '../styles/main.css'


function Home () {
  return (
     <div>
       <Link className="button__start" to="/questions">
        <button>Start</button>     
       </Link>
     </div>
  )
}

export default Home;