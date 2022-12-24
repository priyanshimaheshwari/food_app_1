import React, { useState } from 'react'
import {data} from '../data/data.jsx'

const Food = () => {
    //console.log(data);
    const [foods,setFoods]=useState(data)
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

        {/*Filter Row*/}
        <div>
            {/*Filter Type*/}
            <div>
                 <p className='font-bold text-gray-700'>Filter Type</p>
                 <div>
                     <button className='m-1 border-orange-900 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                     <button className='m-1 border-orange-900 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                     <button className='m-1 border-orange-900 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizzas</button>
                     <button className='m-1 border-orange-900 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                     <button className='m-1 border-orange-900 text-orange-600 hover:bg-orange-600 hover:text-white'>Pastas</button>
                 </div>
            </div>

            {/*Filter Price*/}
            <div>
                 <p className='font-bold text-gray-700'>Filter Price</p>
                 <div className='flex justify-between max-w-[390px] w-full'>
                 <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                     <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                     <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                     <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                 </div>
            </div>
        </div>

        {/*display foods */}
        <div className=''>
            {foods.map((item, index)=>(
               <div key={index}>
                   <img src={item.image} alt={item.name} />
                   <div>
                       <p>{item.name}</p>
                       <p><span>{item.price}</span></p>
                   </div>
               </div>
            ))}

        </div>
    </div>
  )
}

export default Food