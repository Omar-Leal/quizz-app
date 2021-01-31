import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

class Header extends React.Component {
  render(){
    return (
      <div className="header__container">
        <Link className="header__link" to="/">
        <h1 className="header__container--title">REACT QUIZ!</h1>
        </Link>
      </div>
    )
  }
}

export default Header;