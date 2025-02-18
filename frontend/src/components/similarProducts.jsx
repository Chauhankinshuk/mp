import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './title';
import ProductItem from './productItem';

const similarProducts = ({category,subCategory}) => {
   const {products}=useContext(ShopContext);
   const [similarProducts ,setsimilarproducts]=useState([]);
   useEffect(()=>{
       if(products.length>0){
        let productsCopy=products.slice();
        productsCopy=productsCopy.filter((item)=> category===item.category);
        productsCopy=productsCopy.filter((item)=> subCategory===item.subCategory);
        setsimilarproducts(productsCopy.slice(0,5));
       }
   },[products])

  return (
    <div className='my-24'>
          <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}></Title>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {
                 similarProducts.map((item,index)=>(
                    <ProductItem 
                    key={index}
                    id={item._id}
                    images={item.images}
                    name={item.name}
                    price={item.price}
                    />
                 ))
              }
          </div>
    </div>
  )
}

export default similarProducts