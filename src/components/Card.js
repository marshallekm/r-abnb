import React from 'react'
import CardPicture from '../images/katie-zaferes.png'
import Star from '../images/star.png'

export default function Card() {
  return (
    <section className="card">
      <img src={CardPicture} className= "card-pic" alt=""></img>
      <p><img src ={Star} className="star"alt=""></img> 5.0 (6) USA</p>
      <p>Life lessons with Katie Zaferes</p>
      <p><nobr className="price">From $135</nobr>/person</p>
    </section>
  )
}
