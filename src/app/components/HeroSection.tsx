"use client";
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { SplitText } from 'gsap/dist/SplitText'

const HeroSection = () => {

  useEffect(() => {
    const titles = ['UI/UX Designer', 'Web Developer', 'Programmer', 'Graphic Designer', 'Sketch Artist'];
    const tl = gsap.timeline({ repeat: -1 });
    titles.forEach((title, index) => {
      tl.from(`#title-${index}`, {
        opacity: 0,
        delay: 0.25,
        y: -15,
      },"<")
      .to(`#title-${index}`,{
        opacity: 1,
        y: 0,
      },"<1")
      .to(`#title-${index}`,{
        opacity: 0,
        delay: 0.25,
        y: 15,
      },"<2")
    });
  }, []);
  

  return (
    <div className='grid grid-rows-2 grid-cols-4 lg:grid-rows-8 lg:grid-cols-8 gap-5 my-5 text-slate-500 w-full h-screen'>
      <div className='flex flex-col p-6 justify-center font-[Replica-Bold] text-4xl lg:text-7xl text-[#003F30] align-middle col-span-4 row-span-2 row lg:col-span-5 lg:row-span-4 bg-[#EDFAE4] border-all'>
        <h1>Hello!</h1>
        <div className='relative'>
          <span className='relative mr-4 w-full'>I am </span>
            {['UI/UX Designer', 'Web Developer', 'Programmer', 'Graphic Designer', 'Sketch Artist'].map((title, index) => (
              <span className='hidden lg:inline absolute w-fit h-full content-none text-[#B9A0FF] stroke-[#19192C] break-words' key={index} id={`title-${index}`}>{title}<br/></span>
            ))}
            {['UI/UX Designer', 'Web Developer', 'Programmer', 'Graphic Designer', 'Sketch Artist'].map((title, index) => (
              <span className='lg:hidden flex absolute w-fit h-full content-none text-[#B9A0FF] stroke-[#19192C] break-words' key={index} id={`title-${index}`}>{title}<br/></span>
            ))}
        </div>
        <span className='lg:hidden flex text-[#EDFAE4]'>Placeholder<br/>Placeholder</span>
        <h1 className=''>aka Jayesh Wankhede</h1>
      </div>


      <div className='hidden lg:col-span-3 lg:row-span-6 p-6 lg:flex justify-center items-center bg-[#B9A0FF] border-all'>
        compy model
      </div>


      <div className=' font-[ReplicaPro-Light] text-lg text-[#003F30]  p-6 hidden lg:block lg:col-span-4 lg:row-span-4 bg-[#F0D4D2] border-all'>
        <div className='flex flex-col w-full h-full flex-wrap justify-between'>
            <p className='text 2xl lg:text-4xl text-wrap'>B.Tech Computer Science student with a flair for web development, UI/UX design, and programming.Turning ideas into intuitive experiences.</p>
            <a href='#'>Know more About me↗</a>
        </div>
      </div>


      <div className='text-[#B9A0FF] p-4 overflow-y-auto scroll-smooth scrollbar hidden lg:block lg:col-span-1 lg:row-span-2 bg-[#19192C] border-all'>
        <p className='text-center'>Hey there! Compy is monitoring mouse and keyboard activity.</p>
      </div>
      <a className='group preserve-3d cursor-pointer flex flex-col justify-between p-6 col-span-2 row-span-1 lg:col-span-2 lg:row-span-2 font-[ReplicaPro-Light] font-bold text-xl lg:text-3xl text-[#003F30] bg-[#C3FFB2] border-all hover:shadow-[-6px_6px_0px_#000000] hover:translate-x-[6px] hover:translate-y-[-6px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>
        <p>Resume</p>
        <div className='flex justify-end'>
          <button className='border border-[#003F30] px-2 py-1 rounded-[6px]'>
            <p className='group-hover:-rotate-45 transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>→</p>
          </button>
        </div>
      </a>
      <a className='group preserve-3d cursor-pointer flex flex-col justify-between p-6 col-span-2 row-span-1 lg:col-span-2 lg:row-span-2 font-[ReplicaPro-Light] font-bold text-xl lg:text-3xl text-[#C3FFB2] bg-[#003F30] border-all hover:shadow-[-6px_6px_0px_#000000] hover:translate-x-[6px] hover:translate-y-[-6px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>
      <p>Contact</p>
        <div className='flex justify-end'>
          <button className='border border-[#C3FFB2] px-2 py-1 rounded-[6px]'>
            <p className='group-hover:-rotate-45 transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>→</p>
          </button>
        </div>
      </a>
    </div>
  )
}

export default HeroSection
