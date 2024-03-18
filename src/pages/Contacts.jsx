import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <section>
        <Container>
            <h2 className=' text-[49px] font-dm font-bold text-black pt-[124px]'>Contacts</h2>
            <p className=' text-base font-dm font-normal text-[#444141] '><Link to="/">Home</Link>   /  Contacts</p>

            <div className="">
                <h2 className=' text-[39px] font-dm font-bold text-black pt-[125px]'>Fill up a Form</h2>
            </div>
            <div className="">
                <p className=' text-base font-dm font-bold pt-[48px]'>Name</p>
                <input className= ' border-[#000]  w-[780px] h-[40px]' type="text" placeholder='Your name here' />
                <p className=' text-base font-dm font-bold pt-[48px]'>Email</p>
                <input className=' border-black w-[780px] h-[40px]' type="text" placeholder='Your email here' />
                <p className=' text-base font-dm font-bold pt-[48px]'>Message</p>
                <input className=' border-black w-[780px] h-[150px]' type="comment" placeholder='Your message here' />
            </div>
            <div className=" pt-[46px]">
              <span className=' py-[16px] px-[85px] bg-[#000] text-[#ffff] hover:bg-[#fff] hover:text-black border-[2px] border-[#000] '>Post</span>
            </div>
            <div className=" w-full pt-[140px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49929790344!2d90.25487016620683!3d23.781067241407342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1710580704417!5m2!1sen!2sbd" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </Container>
    </section>
  )
}

export default Contacts