import React from 'react'
import deliver from '../assets/deliver.webp';
import Offer from '../components/offer';
import Title from '../components/title';
 const Contact = () => {
  return (
  <div>
    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text2={'US'}></Title>
     </div> 
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px] ' src={deliver}></img>
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className='text-gray-500'>54709 williams Station<br/>suite 350, Washington ,US</p>
        <p className='text-gray-500'>Tel: 9999999999<br/>Email: meerutpharmacy@gmail.com</p>
        <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
        <p className='text-gray-500'>Learn more about our teams and job openings.</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
      </div>
   
    </div>
    <Offer></Offer>
    </div>
  )
}
export default Contact