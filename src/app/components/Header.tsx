"use client";

import React from 'react'
import { links } from '../lib/data'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {

    const [open, Setopen] = useState(false)
    const [burger_class, SetBurgerClass] = useState("unclicked")
    const [menu_class, SetMenuClass] = useState("hidden transition-[0.25s] duration-[ease-in-out]")
  
  
    const UpdateMenu = ()=> {
      if(!open){
        SetBurgerClass("hover:bg-red hover:border-none transition-[0.25s] duration-[ease-in-out] bg-[#19192C] transition-[0.25s] duration-[ease-in-out] [&:nth-child(1)]:w-[25px] [&:nth-child(1)]:mb-[-18.5px] [&:nth-child(1)]:-rotate-45 [&:nth-child(1)]:m-0 [&:nth-child(1)]:rounded-tl-[0%] [&:nth-child(2)]:transition-[cubic-bezier(0.23,1,0.320,1)] [&:nth-child(2)]:m-0 [&:nth-child(3)]:w-[25px] [&:nth-child(3)]:mt-[-18.5px] [&:nth-child(3)]:rotate-45 [&:nth-child(3)]:m-0 [&:nth-child(3)]:rounded-bl-[0%]")
        SetMenuClass("visible transition-[cubic-bezier(0.23,1,0.320,1)]")
      }
      else{
        SetBurgerClass("unclicked hover:bg-transparent hover:border hover:border-solid hover:border-[#19192C] transition-[cubic-bezier(0.23,1,0.320,1)]")
        SetMenuClass("hidden transition-[0.25s] duration-[ease-in-out]")
      }
      Setopen(!open)
    }
  return (
    <div>
      <div className='flex flex-col h-fit self-center z-[5] my-5 mx-10 p-4 bg-[#EDFAE4] backdrop-blur-[2px] border-[2px] border-[#19192C] bg-opacity-60 bg-blend-normal rounded-2xl transition-[0.25s] duration-[ease-in-out]'>
        <div className='flex h-full w-full justify-between items-center self-center'>
          <div className='self-center cursor-pointer rounded-lg mx-[5px] hover:stroke-[#19192C] hover:transition-[0.25s] hover:duration-[ease-in-out]'>
          <img className='size-9/12' src="https://i.ibb.co/FJ4CQKN/JAYX.png" alt="JAYX"/>
          </div>
          <div onClick={UpdateMenu} className='w-11 h-11 z-[5] justify-around flex flex-col cursor-pointer'>
            <div className={`${burger_class} w-11 h-2 bg-[#19192C] rotate-0 transition-[0.25s] duration-[ease-in-out] rounded-lg `}></div>
            <div className={`${burger_class} w-11 h-2 bg-[#19192C] rotate-0 transition-[0.25s] duration-[ease-in-out] rounded-lg `}></div>
            <div className={`${burger_class} w-11 h-2 bg-[#19192C] rotate-0 transition-[0.25s] duration-[ease-in-out] rounded-lg `}></div>
          </div>
        </div>

        <ul className={` ${menu_class} flex flex-col justify-center transition-[0.25s] duration-[ease-in-out]`}>
          {
            links.map(link => (
              <li className=' text-[#19192C] font-[ReplicaPro-Light] text-lg text-extrabold hover:font-[Replica-Bold] hover:border-b-2 hover:border-b-[#19192C] cursor-pointer m-[15px] transition-[0.25s] duration-[ease-in-out]'
                key={link.hash}>
                  <Link className=''
                    href={link.hash}>
                    {link.name}
                  </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header
