"use client";

import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weather/weather'; // Assuming this file is in the same directory as your component

function Weather() {
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<{ temperature: any; weather: any; } | null>(null);
  const defaultCity = 'Delhi';

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      setError(null);
      try {
        const data = await fetchWeather(defaultCity);
        if (data) {
          setWeatherData(data);
        } else {
          setError('No weather data found for the default city.');
        }
      } catch (error) {
        setError('Error fetching weather data. Please try again.');
      }
    };

    fetchDefaultWeather();
  }, []);

  return (
    <div>
      
      {error && <p>{error}</p>}
      
      {weatherData && (
        <div className='flex h-full w-fit text-wrap flex-col justify-between'>
            <div className='flex md:flex-row flex-col'>
                <p className='font-[Replica-Bold] text-3xl md:text-5xl lg:text-4xl'>{weatherData.temperature}</p>
                <p className='font-[Replica-Bold] text-3xl md:text-5xl lg:text-4xl'>°C</p>
            </div>

          <p className=''>{weatherData.weather}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
