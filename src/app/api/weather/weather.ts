import axios from 'axios';

const API_KEY = '12a3b4228aa531716ecb96b5bb29228f';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(city: string) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        units: 'metric', // Get temperature in Celsius
        appid: API_KEY,
      },
    });
    return {
      temperature: response.data.main.temp,
      weather: response.data.weather[0].main,
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
}