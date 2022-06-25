import React from 'react'


export default function Card(props) {

function badgeText() {
 if (props.openSpots === 0) {
    return "SOLD OUT"
  } else if (props.location === "Online") {
    return "ONLINE"
  } else {
   return;
  }
}
  return (
    <section className="card">
      <div className="sold-out">{badgeText()}</div>
      <img src={props.img} className= "card-pic" alt=""></img>
      <p><img src ='images/star.png' className="star"alt=""></img> <span className="grey">{props.rating}&nbsp;({props.reviewCount}) &nbsp;{props.location}</span></p>
      <p>{props.title}</p>
      <p><nobr className="price">From {props.price}</nobr><span className="grey">/person</span></p>
    </section>
  )
}
