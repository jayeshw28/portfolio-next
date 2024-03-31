import React from 'react'
import { media_links, works, stack } from '../lib/data'
import { fetchWeather } from '../api/weather/weather';
import Time from '../utils/Time';

const about = () => { 

  return (
    <div className='grid grid-rows-16 grid-cols-8 lg:grid-rows-12 lg:grid-cols-12 gap-5 my-5 py-1 w-full lg:h-screen '>
      
      <div className='hidden lg:block col-span-3 row-span-8 border-all overflow-hidden'>
        <img className='size-full' src="https://i.ibb.co/1JdVnzv/Whats-App-Image-2024-02-15-at-22-06-53.jpg"/>
      </div>


      <div className='col-span-8 row-span-5 lg:col-span-6 lg:row-span-5 border-all p-6 bg-[#003F30] text-[#B9A0FF] flex flex-col justify-between lg:overflow-hidden overflow-y-auto scroll-smooth scrollbar'>
        <div className='font-[Replica-Bold] text-5xl'>
          I'm Jayesh!
        </div>
        <p className='font-[ReplicaPro-Light] text-xl'>
          I am Jayesh Wankhede, perusing B.Tech graduate in Computer Science Engineering from Indian Institute of Information Technology, Kota (IIITK) specializing in Frontend Development and UI/UX Design. With a natural flair for creativity and critical thinking, I excel in product design and UI/UX. My expertise lies in creating visually appealing and intuitive interfaces, while my strong web development skills enable me to deliver seamless user experiences.
        </p>
      </div>


      <div className='col-span-8 row-span-3 lg:col-span-3 lg:row-span-3 flex flex-col lg:flex-row font-[Replica-Bold] text-[#19192C] text-5xl font-bold items-center lg:items-start'>
        <p className='hidden lg:block mr-5'>LIN<br/>KS:</p>
        <p className='lg:hidden block w-full'>LINKS:</p>
        <div className='flex flex-wrap justify-between content-between w-full h-full'>
        {
          media_links.map(media_links => (
            <div className=' border-all text-xl justify-center items-center p-2 m-1 ml-0 bg-[#19192C]'>
              <a className=' hover:opacity-50 transition-[0.25s] duration-[ease-in-out]'
                href={media_links.link}>
                <img className='size-14' src={media_links.img}/>
              </a>
              </div>
            ))
        }
        </div>
      </div>


      <div className='col-span-8 lg:col-span-3 lg:row-span-7 border-all bg-[#F0D4D2] text-[#003F30] p-6 font-[ReplicaPro-Light] text-xl overflow-hidden flex flex-col overflow-y-auto scroll-smooth scrollbar'>
        <p className='font-[Replica-Bold] text-5xl'>RECENT<br/>WORKS</p>
        <div>
          {
            works.map(works => (
              <ul className=''>
                <li className='flex flex-row p-2'>
                  <div>
                    <p className='font-[Replica-Bold] text-base'>{works.title}</p>
                    <p className='text-base'>{works.position}</p>
                  </div>
                  <p className='text-sm'>{works.time}</p>
                </li>
              </ul>
            ))
          }
        </div>
      </div>


      <div className='col-span-8 row-span-5 lg:col-span-4 lg:row-span-5 border-all bg-[#B9A0FF] p-6 flex flex-col justify-between'>
        <div className='flex flex-row justify-between font-[Replica-Bold] text-[#003F30] text-5xl'>
          <p>SKILLS</p>
          <p className='font-[ReplicaPro-Light] text-6xl'>↗</p>
        </div>
        <div className='font-[ReplicaPro-Light] text-xl font-bold '>
          <ul>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Programming</li>
            <li>Logo Design</li>
            <li>Sketching</li>
          </ul>
        </div>
      </div>


      <div className='col-span-4 row-span-5 lg:col-span-2 lg:row-span-5 border-all bg-[#19192C] text-[#EDFAE4] flex flex-col justify-between p-6 font-[ReplicaPro-Light] text-sm lg:text-xl'>
          <div className='text-4xl md:text-5xl lg:text-7xl'>
          <Time/>
          </div>
          <p className='opacity-35'>current local time</p>
      </div>


      <div className='hidden col-span-3 row-span-4 border-all bg-[#003F30] text-[#B9A0FF] p-6 font-[ReplicaPro-Light] text-xl lg:block flex-col justify-between overflow-hidden overflow-y-auto scroll-smooth scrollbar'>
        <p className='font-[Replica-Bold] text-5xl'>aka.</p>
        <p>A guy who is passionate artist but also tech geek, and landed to this field, trying to advancing in both ;)</p>
      </div>


      <div className='hidden col-span-7 row-span-2 border-all bg-[#DEECEC] text-[#003F30] p-6 lg:flex justify-between npm install tailwind-scrollbar-hide'>
        <div className='font-[Replica-Bold] text-4xl self-end'>STACK</div>
        <div className='relative flex'>
        <div className='flex p-1 bg-[#19192c46] rounded-xl'>
        <div className='fixed h-full w-20 bg-[#000000]'/>
          {
            stack.map(stack => (
              <ul className='flex justify-center align-middle'>
                <li className='bg-black p-2 m-2 rounded-[4px] flex justify-center'>
                  <img className='' src={stack.img}/>
                </li>
              </ul>
            ))
          }
        </div>
        </div>
      </div>
      <div className='col-span-4 row-span-5 lg:col-span-2 lg:row-span-2 border-all bg-[#C3FFB2] text-[#003F30] p-6 '>09</div>
    </div>
  )
}

export default about
