import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../utils/api';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather('Beijing').then(data => setWeather(data));
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <h3>当前天气</h3>
          <p>{weather.name}: {weather.main.temp}°C</p>
        </div>
      ) : (
        <p>加载天气信息中...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
