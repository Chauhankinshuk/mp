import React from 'react'
import deliver from '../assets/deliver.webp';
import OurPolicy from '../components/ourPolicy';
import Offer from '../components/offer';
import Title from '../components/title'
 const About = () => {
  return (
   <div>
       <div className="text-center pt-8 text-4xl border-t py-8">
        <Title text1={'ABOUT'} text2={'US'}/>
       </div>
      <div className="flex">
          <div className="py-12 px-14 ">
            <img src={deliver} alt="deliver"  className="w-100 h-200"/>
          </div>
            <div className="py-12">
               <div className=" py-5 px-12 ">
                    <p className="text-base font-bold">Welcome to Meerut Pharmacy!</p>
                    <p>At Meeut Mart, our mission is to bridge the gap between traditional craftsmanship and the digital marketplace. We specialize in showcasing and selling exquisite mitti ke diye (clay lamps) and mitti ke bartan (clay utensils) crafted by skilled artisans and small vendors who embody the rich heritage of traditional Indian pottery.</p>
                </div>
                <div className=" py-5 px-12">
                    <p className="text-base font-bold">Welcome to Meerut Pharmacy!</p>
                    <p>At Meeut Mart, our mission is to bridge the gap between traditional craftsmanship and the digital marketplace. We specialize in showcasing and selling exquisite mitti ke diye (clay lamps) and mitti ke bartan (clay utensils) crafted by skilled artisans and small vendors who embody the rich heritage of traditional Indian pottery.</p>
                </div>
                <div className=" py-5 px-12">
                    <p className="text-base font-bold">Welcome to Meerut Pharmacy!</p>
                    <p>At Meeut Mart, our mission is to bridge the gap between traditional craftsmanship and the digital marketplace. We specialize in showcasing and selling exquisite mitti ke diye (clay lamps) and mitti ke bartan (clay utensils) crafted by skilled artisans and small vendors who embody the rich heritage of traditional Indian pottery.</p>
                </div>
          </div>
       </div>
       <div className="px-14 text-4xl py-10">
       <Title text1={'WHY CHOOSE'} text2={'US'}/>
       </div>
       <div className="px-14 py-10 flex">
          <span className=" border px-10">
          <p className="text-base font-bold">Welcome to Meerut Pharmacy!</p>
          <p>At Meeut Mart, our mission is to bridge the gap between traditional craftsmanship and the digital marketplace. We specialize in showcasing and selling exquisite mitti ke diye (clay lamps) and mitti ke bartan (clay utensils) crafted by skilled artisans and small vendors who embody the rich heritage of traditional Indian pottery.</p>
          </span>
          <span className="border px-10">
          <p className="text-base font-bold">Welcome to Meerut Pharmacy!</p>
          <p>At Meeut Mart, our mission is to bridge the gap between traditional craftsmanship and the digital marketplace. We specialize in showcasing and selling exquisite mitti ke diye (clay lamps) and mitti ke bartan (clay utensils) crafted by skilled artisans and small vendors who embody the rich heritage of traditional Indian pottery.</p>
          </span>
          <span className=" border px-10"> 
          <p className="text-base font-bold">Welcome to Meerut Pharmacy!</p>
          <p>At Meeut Mart, our mission is to bridge the gap between traditional craftsmanship and the digital marketplace. We specialize in showcasing and selling exquisite mitti ke diye (clay lamps) and mitti ke bartan (clay utensils) crafted by skilled artisans and small vendors who embody the rich heritage of traditional Indian pottery.</p>
          </span>
       </div>
       <div className="px-14 text-4xl py-10">
       <Title text1={'JOIN US ON THIS'} text2={'JOURNEY'}/>
          <div className='text-base'>
          <p>Whether you're a vendor looking to expand your reach or a customer seeking beautiful, handcrafted products, FlipZone is here to make a difference. Explore our collection, support local artisans, and be a part of a movement that values tradition and innovation.</p>
          <p>Whether you're a vendor looking to expand your reach or a customer seeking beautiful, handcrafted products, FlipZone is here to make a difference. Explore our collection, support local artisans, and be a part of a movement that values tradition and innovation.</p>
          <p className="py-4 font-bold">The Meerut Pharmacy Team.</p>
          </div>
       </div>
       
       <Offer></Offer>
       <OurPolicy></OurPolicy>
   </div>
  )
}
export default About
