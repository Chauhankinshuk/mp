import React from 'react'
import {Link} from 'react-router-dom'
import  {ShopContext} from '../context/shopContext'
import { useContext } from 'react'
const productItem = ({id,name,images,price}) => {
    const {currency}=useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={images[0]}></img>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium '>{currency}{price}</p>
        </div>
    </Link>
  )
}

export default productItem