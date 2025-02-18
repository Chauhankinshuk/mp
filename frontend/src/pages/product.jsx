import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import SimilarProducts from '../components/similarProducts';
import OurPolicy from '../components/ourPolicy';
import Offer from '../components/offer';

const product = () => {
    const {productId}=useParams();
    const {products,currency,addToCart} =useContext(ShopContext);
    const [productData, setProductData]=useState(false);
    const [image,setImage]=useState('');
    const [size, setSize]=useState('');
    const fetchProductData =async()=>{
        products.map((item)=>{
            if(item._id===productId){
                setProductData(item)
                setImage(item.images[0])
                return null;
            }
        })

    }
    useEffect(()=>
        {
            fetchProductData();
        },[productId,products])
  return productData ?  (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full' >
                    {
                        productData.images.map((item,index)=>(
                            <img  onClick={ ()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'></img>
                        ))
                    }

                </div>
                <div className='w-full sm:w-[80%]'>
                    <img className='w-full h-auto' src={image} alt="" />

                </div>

            </div>

            <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <div className='flex items-center gap-1 mt-2'>
                    <FontAwesomeIcon icon={faStar}  className="w-3 5" /> 
                    <FontAwesomeIcon icon={faStar}  className="w-3 5" />
                    <FontAwesomeIcon icon={faStar}  className="w-3 5" />
                    <FontAwesomeIcon icon={faStar}  className="w-3 5" />
                    <FontAwesomeIcon icon={faStarHalfStroke}  className="w-3 5" />
                    <p className='pl-2'>(122)</p>
                </div>
                <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}  </p>
                <p className='mt-5 text-gary-500 w-4/5'> {productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                  <p>Select Size</p>
                  <div className='flex gap-2'>
                    {productData.sizes.map((item,index)=>(
                        <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size ? 'border-orange-500' : ''} `} key={index}>{item}</button>
                    ))}
                  </div>
                </div>
                <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 '>ADD TO CART</button>
                <hr className='mt-8 sm:w-4/5'></hr>
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% Orignal product</p>
                    <p>Cash on delivery is available on this product</p>
                    <p>Easy return and exchange policy within 7 days.</p>
                </div>
             </div>
          </div>
          <div className='mt-20'>
              <div className='flex '>
                <b className='border px-5 py-3 text-sm'>Description</b>
                <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
              </div>
              <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis facilis delectus aspernatur ea impedit vitae veritatis praesentium nesciunt pariatur accusantium. Expedita quas est nulla error temporibus facere laudantium at porro?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, veniam accusantium vel assumenda tempora doloremque commodi debitis provident. Totam quidem explicabo, illum nam corrupti aspernatur quibusdam incidunt et iste a!</p>
              </div>
          </div>

          <SimilarProducts category={productData.category} subCategory={productData.subCategory}></SimilarProducts>
          <OurPolicy></OurPolicy>
          <Offer></Offer>
    </div>
  ) : <div className='opacity-0'></div>
}

export default product
