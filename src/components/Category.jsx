import React from 'react'
import { categories } from '../data/data'

const Category = () => {
    console.log(categories)
  return (
    <div>
        <h1>Top Rated Menu Items</h1>
        {/* Categories */}
        <div>
            {categories.map((item, index) =>(
                <div key={index}>
                    <h2></h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category