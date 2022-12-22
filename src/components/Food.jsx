import React from 'react'
import {data} from '../data/data.jsx'

const Food = () => {
    console.log(data);
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600'>Top Rated Menu Items</h1>

        {/*Filter Row*/}
        <div>
            {/*Filter Type*/}
            <div>
                 <p>Filter Type</p>
                 <div>
                     <button>All</button>
                     <button>Burgers</button>
                     <button>Pizzas</button>
                     <button>Salads</button>
                     <button>Pastas</button>
                 </div>
            </div>

            {/*Filter Price*/}
            <div>
                 <p>Filter Price</p>
                 <div>
                     <buttons>$</buttons>
                     <buttons>$$</buttons>
                     <buttons>$$$</buttons>
                     <buttons>$$$$</buttons>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Food