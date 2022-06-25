import React from 'react'
import imgPhoto from '../images/airbnb-logo.png'

export default function Navbar() {
  return(
    <nav className="navbar">
    <img src={imgPhoto} className="logo" alt=""/>
    </nav>
  )
}
