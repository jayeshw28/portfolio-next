import React from 'react'
import { works } from '../lib/data'

const Experience = () => {
  return (
    <div className='my-5'>
        <div className='bg-[#19192C] text-[#F3F5F4] font-[Replica-Bold] text-5xl px-10 py-5 mb-6 flex flex-row justify-between content-between'>
            <p>Work & Experience</p>
        </div>
        <div className="mx-10 font-[ReplicaPro-Light] text-xl space-y-5">
            {
                works.map(works => (
                    <ul>
                        <li className='bg-[#003F30] text-[#F0D4D2] border-all p-6 flex flex-wrap lg:justify-between justify-end hover:shadow-[-6px_6px_0px_#000000] hover:translate-x-[6px] hover:translate-y-[-6px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>
                            <div className='flex flex-col flex-wrap justify-between space-y-2'>
                                <p className='font-[Replica-Bold] text-4xl'>{works.title}</p>
                                <p>{works.position}</p>
                                <p>{works.location}</p>
                                <p>{works.time}</p>
                            </div>
                            <button className='font-[ReplicaPro-Light] text-6xl lg:text-8xl self-end justify-self-end hover:text-[#B9A0FF] hover:text-stroke'>↗</button>
                        </li>
                    </ul>
                ))
            }
        </div>
    </div>
  )
}

export default Experience
