import React from 'react'
import imgStar from '../images/star.png'

export default function Card(props) {

function badgeText() {
 if (props.item.openSpots === 0) {
    return "SOLD OUT"
  } else if (props.item.location === "Online") {
    return "ONLINE"
  }
}
  return (
    <section className="card">
     {badgeText && <div className="sold-out">{badgeText()}</div>}
      <img src={props.item.coverImg} className= "card-pic" alt=""></img>
      <p><img src = {imgStar} className="star"alt=""></img> <span className="grey">{props.item.stats.rating}&nbsp;({props.item.stats.reviewCount}) &nbsp;{props.item.location}</span></p>
      <p>{props.item.title}</p>
      <p><nobr className="price">From {props.item.price}</nobr><span className="grey">/person</span></p>
    </section>
  )
}
