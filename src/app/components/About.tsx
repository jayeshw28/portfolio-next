import React from 'react'
import { media_links } from '../lib/data'

const about = () => {
  return (
    <div className='grid grid-rows-12 grid-cols-12 gap-5 my-5 py-1 w-full h-screen '>
      <div className='col-span-3 row-span-8 border-all overflow-hidden'>
        <img className='size-full' src="https://i.ibb.co/1JdVnzv/Whats-App-Image-2024-02-15-at-22-06-53.jpg" alt="Whats-App-Image-2024-02-15-at-22-06-53"/>
      </div>
      <div className='col-span-6 row-span-5 border-all bg-[#003F30]'>02</div>
      <div className='col-span-3 row-span-3 flex flex-wrap'>
        <p>LINKS:</p>
        {
          media_links.map(media_links => (
            <div className=''>
              <a className=''
                href={media_links.link}>
                {media_links.name}
              </a>
              </div>
            ))
        }
      </div>
      <div className='col-span-3 row-span-7 border-all bg-[#F0D4D2]'>04</div>
      <div className='col-span-4 row-span-5 border-all bg-[#B9A0FF]'>05</div>
      <div className='col-span-2 row-span-5 border-all bg-[#19192C]'>06</div>
      <div className='col-span-3 row-span-4 border-all bg-[#003F30]'>07</div>
      <div className='col-span-7 row-span-2 border-all bg-[#C3FFB2] flex justify-center item-center overflow-hidden'>
      </div>
      <div className='col-span-2 row-span-2 border-all bg-[#F0D4D2]'>
      </div>
    </div>
  )
}

export default about
