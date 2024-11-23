module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{html,js,css,json,png,jpg}'
  ],
  swDest: 'dist/sw.js',
  runtimeCaching: [{
    urlPattern: ({ url }) => url.origin === 'https://api.openweathermap.org',
    handler: 'NetworkFirst',
    options: {
      cacheName: 'weather-api-cache',
    },
  }, {
    urlPattern: ({ url }) => url.origin === 'https://newsapi.org',
    handler: 'NetworkFirst',
    options: {
      cacheName: 'news-api-cache',
    },
  }],
};
