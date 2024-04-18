import React from 'react';

const Loader = () => {
    return (
        <div className='loader fixed z-[2] bg-[white] max-w-[400px] max-h-[300px] w-full h-full flex justify-center items-center pointer-events-none left-0 top-0'>
            <img className='max-w-[400px] max-h-[300px] w-full h-full' src='eyes.gif' alt="loader" />
        </div>
    )
}

export default Loader
