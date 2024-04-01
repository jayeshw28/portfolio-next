"use client";

import React, { useEffect } from 'react'
import { useState } from 'react'
import { Bounce, toast } from 'react-toastify';

const Contact = () => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");

  const sendMail = async (e: any) => {
    e.preventDefault();

    const response = await fetch('/api/send',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name, email, message})
    });

    if(response.ok){
      toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    else{
      toast('error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    console.log(await response.json());
  }

  const[submit, Setsubmit] = useState(false);
  const[flap_class, Setflap_class] = useState("");
  const[card_class, Setcard_class] = useState("");
  const[bg_class, Setbg_class] = useState("");

  const UpdateClass = ()=> {

    if(!submit && name.length > 0 && email.length > 0 && message.length > 0){
      Setflap_class("transform-x-180 z-50 transition-[1.25s]")
      Setcard_class("lg:hidden lg:block transition-[1.25s]")
      Setbg_class("h-[60%] w-[68.5%] rounded-lg")
    }
    else{
      Setflap_class("")
      Setcard_class("")
    }
    Setsubmit(!submit)
  }
  return (
    <div className='lg:h-screen h-fit w-full flex flex-col flex-wrap mb-6 lg:justify-center content-center items-center'>
      <div className='lg:relative z-40 lg:h-screen h-fit w-full flex flex-col flex-wrap justify-start lg:justify-end content-center items-center'>
        <div className={`${bg_class} w-[68%] absolute hidden rounded-b-lg lg:flex -z-10 h-[56%] bg-[#b9a0ff]`}/>

        <div className={`${card_class} flex flex-col lg:absolute w-full h-fit lg:w-[60%] lg:h-[85%] m-2 p-5 space-y-4 z-10 justify-center md:justify-start items-center  font-[Replica-Bold] bg-[#EDFAE4] border-all`}>
          <div className='flex flex-row justify-between w-full items-center font-[Replica-Bold] text-[#003F30] text-6xl lg:text-8xl'>
            <p className='text-[#EDFAE4] self-end'>*</p>
            <p className='text-2xl lg:text-4xl'>Contact me!</p>
            <p className='self-end'>*</p>
          </div>
          <form onSubmit={sendMail} className='w-full flex flex-col lg:px-32 space-y-4 font-[ReplicaPro-Light] justify-center items-center'>
            <input 
              className='rounded-lg border-2 border-[#19192c] p-2 w-full bg-[#F0D4D2]'
              minLength={5} 
              placeholder='Name' 
              maxLength={150} 
              type='text' 
              name='name' 
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required/>
            <input 
              className='rounded-lg border-2 border-[#19192c] p-2 w-full  bg-[#F0D4D2]' 
              minLength={5} 
              placeholder='Name@email.com' 
              maxLength={150} 
              type='email' 
              name='email' 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required/>
            <textarea 
              className='rounded-lg border-2 border-[#19192c] p-2 w-full bg-[#F0D4D2] max-h-20' 
              rows={4} 
              placeholder='How can I help you?' 
              minLength={10} 
              maxLength={100} 
              name='message' 
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required/>
            
            <button onClick={UpdateClass} type='submit' className='w-[60%] md:w-[30%] lg:w-[28%]' >
              <a  className='group flex flex-col justify-between p-4 col-span-2 row-span-1 lg:col-span-2 lg:row-span-2 font-[ReplicaPro-Light] font-bold text-lg lg:text-lg text-[#003F30] bg-[#C3FFB2] border-all hover:shadow-[-6px_6px_0px_#000000] hover:translate-x-[6px] hover:translate-y-[-6px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>
                <p className='flex justify-start'>Submit</p>
                <div className='flex justify-end'>
                  <div className='border border-[#003F30] px-2 py-1 rounded-[6px]'>
                    <p className='group-hover:-rotate-45 transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>→</p>
                  </div>
                </div>
              </a>
            </button>
          </form>
        </div>

        <div className={`${flap_class} hidden relative w-full h-[90%] lg:flex flex-col content-center items-center preserve-3d transition-[2s]`}>
          <svg className='absolute backface-hidden clip-polygon-1'/>
          <svg className='absolute rotate-90 transform-x-180 backface-hidden clip-polygon-2 border-[2px] border-[#F0D4D2]'/>
        </div>
        <svg className='absolute hidden lg:flex z-20 clip-contact'/>
      </div>
    </div>
  )
}

export default Contact
