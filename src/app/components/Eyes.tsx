'use client';

import { useEffect, useState } from 'react';

const Eyes = () => {
  const [eyeRotation, setEyeRotation] = useState<{ x: number; y: number; rotation: number }>({ x: 0, y: 0, rotation: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const radian = Math.atan2(x - window.innerWidth / 2, y - window.innerHeight / 2);
      const rot = (radian * (180 / Math.PI) * -1) + 270;
      setEyeRotation({ x, y, rotation: rot });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='w-full h-full size-3/4 hidden lg:visible lg:flex space-x-3 self-start justify-self-center items-center justify-center'>
        <img className='eye' src="https://i.ibb.co/Rbjgbft/Ellipse-2.png" style={{ transform: `translate(${eyeRotation.x / 16}px, ${eyeRotation.y / 16}px)` }}/>
        <img className='eye' src="https://i.ibb.co/Rbjgbft/Ellipse-2.png" style={{ transform: `translate(${eyeRotation.x / 16}px, ${eyeRotation.y / 16}px)` }}/>
    </div>
  );
}

export default Eyes;



