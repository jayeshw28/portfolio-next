"use client";

import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const[submit, Setsubmit] = useState(false);
  const[flap_class, Setflap_class] = useState("");
  const[card_class, Setcard_class] = useState("");
  const[bg_class, Setbg_class] = useState("")

  const UpdateClass = ()=> {
    if(!submit){
      Setflap_class("transform-x-180 z-50 transition-[0.25s]")
      Setcard_class("hidden block transition-[0.25s]")
      Setbg_class("h-[58%] rounded-lg")
    }
    else{
      Setflap_class("")
      Setcard_class("")
    }
    Setsubmit(!submit)
  }
  return (
    <div className='h-screen w-full flex flex-col flex-wrap mb-6 justify-center content-center items-center'>
      <div className='relative z-40 h-screen w-full flex flex-col flex-wrap justify-end content-center items-center'>
        <div className={`${bg_class} w-[68%] absolute -z-10 h-[56%] bg-[#b9a0ff]`}/>
        <div className={`${card_class} flex flex-col absolute bottom-20 pb-[100px] w-[50%] z-10 justify-center items-center m-2 p-5 space-y-4 font-[Replica-Bold] bg-[#EDFAE4] border-all`}>
          <div className='flex flex-row justify-between w-full items-center text-6xl'>
            <p className='text-[#EDFAE4] font-[Replica-Bold] text-8xl self-end'>*</p>
            <p>Contact me!</p>
            <p className='font-[Replica-Bold] text-8xl self-end'>*</p>
          </div>
          <input className='w-[55%] bg-[#F0D4D2] border-all'></input>
          <input className='w-[55%] bg-[#F0D4D2] border-all'></input>
          <a onClick={UpdateClass} className='button-all flex flex-col w-[30%] justify-between p-6 col-span-2 row-span-1 lg:col-span-2 lg:row-span-2 font-[ReplicaPro-Light] font-bold text-xl lg:text-3xl text-[#003F30] bg-[#C3FFB2] border-all hover:shadow-[-6px_6px_0px_#000000] hover:translate-x-[6px] hover:translate-y-[-6px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>
            <p>Submit</p>
            <div className='flex justify-end'>
              <button className='border border-[#003F30] px-2 py-1 rounded-[6px]'>
                <p className='button-arrow transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>→</p>
              </button>
            </div>
          </a>
        </div>
        <div className={`${flap_class} relative w-full h-[90%] flex flex-col content-center items-center preserve-3d transition-[0.25s]`}>
          <svg className='absolute backface-hidden clip-polygon-1'/>
          <svg className='absolute rotate-90 transform-x-180 backface-hidden clip-polygon-2 border-[2px] border-[#F0D4D2]'/>
        </div>
        <svg className='absolute z-20 clip-contact'/>
      </div>
    </div>
  )
}

export default Contact
