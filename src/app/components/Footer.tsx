import React from 'react'
import { contact_links, links } from '../lib/data'
import Link from 'next/link'
import Eyes from './Eyes'

const Footer = () => {
  return (
    <div className='mx-10 my-5 h-fit border-all bg-[#EDFAE4] p-4 flex flex-col justify-center items-center '>
        <div className='flex flex-row w-full items-center justify-between mb-3'>
            <img className='size-[40%] md:size-[20%] lg:size-[10%] cursor-pointer' src="https://i.ibb.co/FJ4CQKN/JAYX.png" alt="JAYX"/>
            <div className='border w-fit h-fit cursor-pointer border-[#003F30] bg-[#b9a0ff] px-2 py-1 rounded-[6px] shadow-[-4px_4px_0px_#000000] translate-x-[6px] translate-y-[-6px] hover:shadow-[0px_0px_0px_#000000] hover:translate-x-[0px] hover:translate-y-[0px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>
                <p className='button-arrow text-3xl transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>↑</p>
            </div>
        </div>

        <div className='w-full flex flex-col lg:flex-row '>
            <div className='self-start w-full lg:w-2/6 h-full flex flex-col justify-between items-stretch lg:items-start space-y-3 rounded-lg hover:transition-[0.25s] hover:duration-[ease-in-out]'>
                <div className='flex flex-col w-full h-full space-y-3 items-stretch lg:flex-row lg:space-x-3 lg:space-y-0'>
                    <div className='font-[Replica-Bold] w-full h-full lg:w-2/6 text-xl border-all p-4 text-[#003F30] bg-[#b9a0ff]'>
                        <ul className=' flex flex-col w-full h-full justify-center items-center lg:items-stretch transition-[0.25s] duration-[ease-in-out]'>
                            Links
                            {
                            links.map(link => (
                            <li className=' text-[#19192C] font-[ReplicaPro-Light] text-lg cursor-pointer transition-[0.25s] hover: duration-[ease-in-out]'
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
                    <a  className='button-all flex flex-col w-full justify-between p-4 col-span-2 row-span-1 lg:col-span-2 lg:row-span-2 font-[ReplicaPro-Light] font-bold text-lg lg:text-lg text-[#003F30] bg-[#b9a0ff] border-all hover:shadow-[-6px_6px_0px_#000000] hover:translate-x-[6px] hover:translate-y-[-6px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>
                        <p className='flex justify-start'>Resume</p>
                        <div className='flex justify-end'>
                        <div className='border border-[#003F30] px-2 py-1 rounded-[6px]'>
                            <p className='button-arrow transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>→</p>
                        </div>
                        </div>
                    </a>
                    <a  className='button-all flex flex-col w-full justify-between p-4 col-span-2 row-span-1 lg:col-span-2 lg:row-span-2 font-[ReplicaPro-Light] font-bold text-lg lg:text-lg text-[#003F30] bg-[#b9a0ff] border-all hover:shadow-[-6px_6px_0px_#000000] hover:translate-x-[6px] hover:translate-y-[-6px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>
                        <p className='flex justify-start'>Contact</p>
                        <div className='flex justify-end'>
                        <div className='border border-[#003F30] px-2 py-1 rounded-[6px]'>
                            <p className='button-arrow transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>→</p>
                        </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className='w-full lg:w-2/6 flex flex-col my-3 lg:my-0 lg:mx-3 font-[Replica-Bold] '>
                <div className='text-center text-lg text-[#b9a0ff]'>
                    Thanks for coming this far, I hope you liked my portfolio:)
                </div>
                <Eyes/>

            </div>

            <div className='w-full lg:w-2/6 flex flex-col space-y-6 self-end justify-center items-center lg:justify-start lg:items-start font-[Replica-Bold]'>
                <div className='text-[#b9a0ff] text-3xl text-center lg:text-start lg:items-start'>
                    Connect with me on:
                </div> 
                <div className='flex flex-wrap w-fit h-fit align-baseline items-end'>
                    {
                    contact_links.map(contact_links => (
                        <div className='rounded-full m-2 border-[#19192c] border-[2px] cursor-pointer w-fit h-fit text-xl justify-center items-center p-2 bg-gradient-to-r from-[#d1c0ff] to-[#b9a0ff] hover:bg-[#19192c] shadow-[-4px_4px_0px_#000000] translate-x-[6px] translate-y-[-6px] hover:shadow-[0px_0px_0px_#000000] hover:translate-x-[0px] hover:translate-y-[0px] transition-[cubic-bezier(.31,.5,.86,.67)] duration-[0.25s]'>
                        <a className='transition-[0.25s] duration-[ease-in-out]'
                            href={contact_links.link}>
                            <img className='size-6 md:size-10 lg:size-8 xl:size-12' src={contact_links.img}/>
                        </a>
                        </div>
                        ))
                    }
                </div>
            </div>


        </div>

      <div className='w-fit text-sm font-[ReplicaPro-Light] font-thin'>Made with Love | Jayesh Wankhede</div>
    </div>
  )
}

export default Footer
