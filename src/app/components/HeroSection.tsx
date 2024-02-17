import React from 'react'

const HeroSection = () => {
  return (
    <div className='grid grid-rows-4 grid-cols-4 lg:grid-rows-8 lg:grid-cols-8 gap-5 my-5 text-slate-500 w-full h-screen'>
      <div className='flex flex-col p-6 font-[Replica-Bold] text-4xl lg:text-7xl text-[#003F30] justify-center align-middle col-span-4 row-span-2 lg:col-span-5 lg:row-span-4 bg-[#EDFAE4] border-all'>
        <h1>Hello!</h1>
        <h1>I am</h1>
        <h1>aka Jayesh Wankhede</h1>
      </div>
      <div className='hidden lg:block lg:col-span-3 lg:row-span-6 bg-[#B9A0FF] border-all'>
        compy model
      </div>
      <div className=' font-[ReplicaPro-Light] text-lg text-[#003F30]  p-6 hidden lg:block lg:col-span-4 lg:row-span-4 bg-[#F0D4D2] border-all'>
        <div className='flex flex-col w-full h-full flex-wrap place-content-between'>
          <div className='flex flex-col w-full space-y-2.5 justify-start mt-5 self-start'>
            <p>try to type something and see what compy replies↗</p>
            <input className='border-all p-2 w-3/4 bg-[#C3FFB2]' name='enter prompt'/>
          </div>
          <p className='text-4xl text-wrap overflow-hidden'>B.Tech Computer Science student with a flair for web development, UI/UX design, and programming.
          <br/>Turning ideas into intuitive experiences.
        </p>
        </div>
      </div>
      <div className='text-[#B9A0FF] p-6 overflow-y-auto scroll-smooth scrollbar hidden lg:block lg:col-span-1 lg:row-span-2 bg-[#19192C] border-all'>
        <p>Hey there, I'm Compy! Just so you know, I've got my eyes on your mouse moves and keyboard taps for security reasons</p>
      </div>
      <a className='button-all flex flex-col justify-between p-6 col-span-2 row-span-1 lg:col-span-2 lg:row-span-2 font-[ReplicaPro-Light] font-bold text-3xl text-[#003F30] bg-[#C3FFB2] border-all hover:shadow-[-6px_6px_0px_#000000] hover:translate-x-[6px] hover:translate-y-[-6px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>
        <p>Resume</p>
        <div className='flex justify-end'>
          <button className='border border-[#003F30] px-2 py-1 rounded-[6px]'>
            <p className='button-arrow transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>→</p>
          </button>
        </div>
      </a>
      <a className='button-all flex flex-col justify-between p-6 col-span-2 row-span-1 lg:col-span-2 lg:row-span-2 font-[ReplicaPro-Light] font-bold text-3xl text-[#C3FFB2] bg-[#003F30] border-all border-[#C3FFB2 !important] hover:shadow-[-6px_6px_0px_#000000] hover:translate-x-[6px] hover:translate-y-[-6px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>
      <p>Contact</p>
        <div className='flex justify-end'>
          <button className='border border-[#C3FFB2] px-2 py-1 rounded-[6px]'>
            <p className='button-arrow transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>→</p>
          </button>
        </div>
      </a>
    </div>
  )
}

export default HeroSection
