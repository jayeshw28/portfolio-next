'use client'
import React, { useEffect, useState } from 'react';

function Time() {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';

      hours = hours % 12;
      hours = hours ? hours : 12;

      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

      setCurrentTime(`${hours}:${formattedMinutes} \n ${ampm}`);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 30000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className='font-[Replica-Bold]'>
      {currentTime}
    </p>
  );
}

export default Time;
