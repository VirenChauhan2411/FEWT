import React from "react"

function Product_Card() {
  const products = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 59.99, description: "Noise-cancelling over-ear headphones." },
    { id: 2, name: "Yoga Mat", category: "Fitness", price: 24.99, description: "Non-slip mat for home workouts." },
    { id: 3, name: "Coffee Mug", category: "Kitchen", price: 12.49, description: "Ceramic mug with a comfortable handle." },
    { id: 4, name: "LED Desk Lamp", category: "Home", price: 34.95, description: "Adjustable lamp with warm white lighting." },
    { id: 5, name: "Running Shoes", category: "Sports", price: 79.95, description: "Lightweight shoes with extra cushioning." },
  ]

  return (
  <>
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
  </>
  )
}

export default Product_Card
