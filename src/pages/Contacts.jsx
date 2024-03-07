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
                <input className=' border-black w-[780px] h-[40px]' type="text" placeholder='Your name here' />
                <p className=' text-base font-dm font-bold pt-[48px]'>Email</p>
                <input className=' border-black w-[780px] h-[40px]' type="text" placeholder='Your email here' />
                <p className=' text-base font-dm font-bold pt-[48px]'>Message</p>
                <input className=' border-black w-[780px] h-[80px]' type="comment" placeholder='Your message here' />
            </div>
        </Container>
    </section>
  )
}

export default Contacts