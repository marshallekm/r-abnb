import React from 'react'
import imgHero from '../images/photo-grid.png'

export default function Hero() {
  return (
    <section className= "hero">
      <img src= {imgHero} className="hero-img" alt =""/>
      <h1 className="title">Online Experiences</h1>
      <h2 className="header">
      Join unique interactive activites led
      by one-of-a-kind hosts
      - all without leaving home.
      </h2>
    </section>

  )
}
