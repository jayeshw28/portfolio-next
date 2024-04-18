'use client';
import React from 'react'

function ScrolltoTop() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  return (
    <div onClick={scrollToTop} className='border w-fit h-fit cursor-pointer border-[#003F30] bg-[#b9a0ff] px-2 py-1 rounded-[6px] shadow-[-4px_4px_0px_#000000] translate-x-[6px] translate-y-[-6px] hover:shadow-[0px_0px_0px_#000000] hover:translate-x-[0px] hover:translate-y-[0px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>
        <p className='button-arrow text-3xl transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>↑</p>
    </div>
  )
}

export default ScrolltoTop
