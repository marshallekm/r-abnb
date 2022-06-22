import React from 'react'
import Star from '../images/star.png'
import "../images/katie-zaferes.png"

export default function Card(props) {
  return (
    <section className="card">
      <img src={props.img} className= "card-pic" alt=""></img>
      <p><img src ={Star} className="star"alt=""></img> <span className="grey">{props.rating}&nbsp;({props.reviewCount}) &nbsp;{props.country}</span></p>
      <p>{props.title}</p>
      <p><nobr className="price">From {props.price}</nobr><span className="grey">/person</span></p>
    </section>
  )
}
