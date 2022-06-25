import React from 'react'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'
import data from './data'

export default function App() {
const cards = data.map( item => {
  return (
    <Card
      img= {item.coverImg}
      rating ={item.stats.rating}
      reviewCount = {item.stats.reviewCount}
      location = {item.location}
      title = {item.title}
      price = {item.price}
      />
  )
})
  return (
    <div>
      <Navbar />
      <Hero />
       {cards}
    </div>
  )
}
