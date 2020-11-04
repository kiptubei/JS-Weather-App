import showResults from './display';

const search = async (query) => {
  const key = '11ea28189dba04a840bb2d0952b6a58e';
  const units = 'metric';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=${units}`;
  try {
    await fetch(url, { mode: 'cors' })
      .then(response => response.json())
      .then(data => showResults(data));
  } catch (error) {
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = 'Data could not be fetched';
  }
};

export default search;
