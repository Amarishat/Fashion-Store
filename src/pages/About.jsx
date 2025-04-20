import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>

        <div className='text-2xl text-center pt-8 border-t'>
           <Title text1={'ABOUT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
               <p>At Forever Fashion, we believe style is a way of life — and everyone deserves to look and feel amazing, every day. Born from a passion for fashion and creativity, we bring you the latest trends, timeless classics, and everything in between. Whether you're dressing up for a special occasion or curating your everyday wardrobe, Forever Fashion is here to make you stand out. We don’t just follow trends — we create them.</p>
               <p>Forever Fashion is a contemporary fashion destination committed to redefining style with elegance, comfort, and quality. Since our inception, we've focused on delivering thoughtfully crafted pieces that empower self-expression and confidence. Our collections are inspired by modern lifestyles, global trends, and the unique individuality of our customers. At Forever Fashion, fashion is more than clothing — it’s a statement of who you are.</p>
               <b className='text-gray-800'>Our Mission</b>
               <p>Our mission is to empower individuals to express themselves through fashion that’s bold, fresh, and always on-trend. We aim to deliver stylish, high-quality pieces that make you feel confident, fearless, and ready to take on the world.
               </p>
          </div>
        </div>
               
        <div className='text-3xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>We never compromise on quality—only the best for you.</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>Fashion made easy—anytime, anywhere.</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Dedicated to delivering exceptional service, every time.</p>
           </div>
        </div>

        <NewsletterBox/>

    </div>
  )
}

export default About