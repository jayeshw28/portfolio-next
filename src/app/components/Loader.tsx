import React from 'react';

const Loader = () => {
    return (
        <div className='loader bg-[#EDFAE4] bg-blend-overlay fixed z-[50] font-[ReplicaPro-Light] text-2xl text-[#19192C] w-full h-full flex flex-col justify-center items-center pointer-events-none left-0 top-0'>
            <img className=' w-fit h-1/2' src='compy.gif' alt="loader" />
            Loading...
        </div>
    )
}

export default Loader
