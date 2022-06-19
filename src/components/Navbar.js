import React from 'react'
import LogoPicture from "../images/airbnb-logo.png";

export default function Navbar() {
  return(
    <nav className="navbar">
    <img src={LogoPicture} className="logo" alt=""/>
    </nav>
  )
}
