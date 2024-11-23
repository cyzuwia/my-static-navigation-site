export const fetchWeather = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
  if (!response.ok) throw new Error('Failed to fetch weather data');
  return response.json();
};

export const fetchNews = async () => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=cn&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
  if (!response.ok) throw new Error('Failed to fetch news data');
  return response.json();
};
