"use client";
// import React, { useEffect, useState } from 'react'
// import { BsMoon, BsSun } from 'react-icons/bs'

// type Theme = "light" | "dark";

// function ThemeSwitch() {
//   const [theme, setTheme] = useState<Theme>('light');

//   const toggleTheme = () =>{
  
//     if(theme === 'light'){
//       setTheme('dark');
//       window.localStorage.setItem('theme', 'dark');
//     }else{
//       setTheme('light');
//       window.localStorage.setItem('theme', 'light');
//     }
//   }

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem('theme') as Theme | null;
//     if(localTheme){
//       setTheme(localTheme);
//     } else if(window.matchMedia('(prefers-color-scheme: dark)').matches){
//       setTheme('dark');
//     }

//   }, []);

//   return (
//     <button className='flex hover:font-bold font-[ReplicaPro-Light] text-2xl justify-center items-center fixed bottom-8 right-14 p-3 border cursor-pointer border-[#003F30] bg-[#b9a0ff] rounded-[6px] shadow-[-4px_4px_0px_#000000] translate-x-[6px] translate-y-[-6px] hover:shadow-[0px_0px_0px_#000000] hover:translate-x-[0px] hover:translate-y-[0px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'
//     onClick={toggleTheme}
//     >{
//       theme === 'light' ? <BsSun/> : <BsMoon/>
//     }
//     </button>
//   )
// }

// export default ThemeSwitch

import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

type Theme = 'light' | 'dark';

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      document.body.classList.toggle('dark', localTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.body.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    // Update Tailwind's color variables based on the theme
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      className='flex hover:font-bold font-[ReplicaPro-Light] text-2xl justify-center items-center fixed bottom-8 right-14 p-3 border cursor-pointer border-[#003F30] bg-[#b9a0ff] rounded-[6px] dark:shadow-[-4px_4px_0px_#000000] shadow-[-4px_4px_0px_#F9F0D2] translate-x-[6px] translate-y-[-6px] hover:shadow-[0px_0px_0px_#000000] hover:translate-x-[0px] hover:translate-y-[0px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}

export default ThemeSwitch;

