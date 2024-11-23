import React from 'react';
import WeatherWidget from '../components/WeatherWidget';
import NewsFeed from '../components/NewsFeed';

const Home = () => {
  return (
    <main>
      <h2>欢迎来到多功能静态导航网站</h2>
      <WeatherWidget />
      <NewsFeed />
    </main>
  );
};

export default Home;
