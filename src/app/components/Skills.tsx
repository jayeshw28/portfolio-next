import React from 'react'
import { languagesData, skillsData, toolsData } from '../lib/data'

const Skills = () => {
  return (
    <div id='skills' className='w-full h-fit lg:h-screen lg:flex my-5 mb-10'>
        <div className='w-full lg:w-1/2 bg-[#B9A0FF] text-[#003F30] p-10 flex flex-col justify-between font-[ReplicaPro-Light] text-xl'>
            <div>
                <p className='font-[Replica-Bold] text-5xl mb-6'>Skills</p>
                {
                    skillsData.map(skillsData => (
                    <ul>
                        <li className='group flex hover:font-bold cursor-pointer flex-row justify-between'>
                            <p>{skillsData.title} </p>
                            <div className='hidden group-hover:block'>{skillsData.percent}%</div>
                        </li>
                    </ul>
                    ))
                }
            </div>

            <div>
                <p className='font-[Replica-Bold] text-5xl mb-6'>Languages</p>
                {
                    languagesData.map(languagesData => (
                    <ul>
                        <li className='group flex hover:font-bold cursor-pointer flex-row justify-between'>
                            <p>{languagesData.title}</p>
                            <div className='hidden group-hover:block'>{languagesData.percent}%</div>
                        </li>
                    </ul>
                    ))
                }
            </div>
            <p className='font-[Replica-Bold] text-8xl lg:self-start self-end'>*</p>
        </div>

        <div className='w-full lg:w-1/2 bg-[#003F30] text-[#B9A0FF] p-10 font-[ReplicaPro-Light] text-xl'>
            <div className='flex flex-row justify-between font-[Replica-Bold] text-5xl mb-6'>
                <p>Tools</p>
                <p className='font-[ReplicaPro-Light] text-6xl'>↗</p>
            </div>
            {
                toolsData.map(toolsData => (
                    <ul>
                        <li className='group flex hover:font-bold cursor-pointer flex-row justify-between'>
                            <p>{toolsData.title}</p>
                            <div className='hidden group-hover:block'>{toolsData.percent}%</div>
                        </li>
                    </ul>
                ))
            }
        </div>

    </div>
  )
}

export default Skills
