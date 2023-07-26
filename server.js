const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.get('/weather', async (req, res) => {
  const city = 'London,us';
  const apiKey = 'b6907d289e10d714a6e88b30761fae22';
  const url = `https://samples.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
