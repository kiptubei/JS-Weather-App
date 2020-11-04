import getDateString from './util';
import toggle from './change_units';

const clearResults = () => {
  const resultsDiv = document.getElementById('search-results');
  resultsDiv.innerHTML = '';
  return resultsDiv;
};

const showLoading = () => {
  const resultsDiv = clearResults();
  const message = document.createElement('p');
  message.textContent = 'Loading...';
  resultsDiv.appendChild(message);
};

const showResults = (data) => {
  const results = clearResults();

  const location = document.createElement('div');
  location.className = 'location';
  location.innerHTML = `
    <span class="loc-name">${data.name}</span>
    <span class="report-time">${getDateString(data.dt, data.timezone)}</span>
  `;

  const weather = document.createElement('div');
  const weatherIconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weather.innerHTML = `
    <figure class="weather-icon">
      <img src=${weatherIconURL} alt="Weather Icon">
      <figcaption class="description">${data.weather[0].description}</figcaption>
    </figure>
  `;

  const tempDiv = document.createElement('div');
  tempDiv.className = 'temperature-section';

  const currentTemp = document.createElement('div');
  currentTemp.className = 'current-temp';
  currentTemp.innerHTML = `
    <span class="current-val temperature">${data.main.temp}</span>
    <span class="unit-temperature">&deg;C</span>
  `;
  const feelsLike = document.createElement('div');
  feelsLike.className = 'feels-like';
  feelsLike.innerHTML = `
    <span class="feels-like-text">Feels like</span>
    <span class="feels-like-val temperature">${data.main.feels_like}</span>
    <span class="unit-temperature">&deg;C</span>
  `;
  const tempRange = document.createElement('div');
  tempRange.className = 'temp-range';
  tempRange.innerHTML = `
    <span class="min-temp temperature">${data.main.temp_min}</span>
    <span class="unit-temperature">&deg;C</span>
    <span>&sol;</span>
    <span class="max-temp temperature">${data.main.temp_max}</span>
    <span class="unit-temperature">&deg;C</span>
  `;
  tempDiv.appendChild(currentTemp);
  tempDiv.appendChild(feelsLike);
  tempDiv.appendChild(tempRange);

  results.appendChild(location);
  const mainInfo = document.createElement('div');
  mainInfo.className = 'main';
  mainInfo.appendChild(weather);
  mainInfo.appendChild(tempDiv);
  results.appendChild(mainInfo);

  const miscData = document.createElement('div');
  miscData.className = 'misc-data';

  miscData.innerHTML += `
    <span class="label">Pressure</span>
    <span class="val">${data.main.pressure}hPa</span>
  `;

  miscData.innerHTML += `
    <span class="label">Humidity</span>
    <span class="val">${data.main.humidity}&percnt;</span>
  `;

  if (data.visibility) {
    miscData.innerHTML += `
      <span class="label">Visibility</span>
      <div>
        <span class="val distance">${data.visibility}</span>
        <span class="unit-distance">meters</span>
      <div>
    `;
  }

  if (data.wind) {
    miscData.innerHTML += `
      <span class="label">Wind Speed</span>
      <div>
        <span class="val speed">${data.wind.speed}</span>
        <span class="unit-speed">meters&sol;sec</span>
      </div>
      <span class="label">Wind Direction</span>
      <span class="val">${data.wind.deg}&deg;</span>
    `;
  }

  if (data.clouds) {
    miscData.innerHTML += `
      <span class="label">Cloudiness</span>
      <span class="val">${data.clouds.all}&percnt;</span>
    `;
  }

  if (data.rain) {
    miscData.innerHTML += `
      <span class="label">Rain (last 1 hour)</span>
      <span class="val">${data.rain['1h']}mm</span>
      <span class="label">Rain (last 3 hours)</span>
      <span class="val">${data.rain['3h']}mm</span>
    `;
  }

  if (data.snow) {
    miscData.innerHTML += `
      <span class="label">Snow (last 1 hour)</span>
      <span class="val">${data.snow['1h']}mm</span>
      <span class="label">Snow (last 3 hours)</span>
      <span class="val">${data.snow['3h']}mm</span>
    `;
  }

  results.appendChild(miscData);

  const jsonData = document.createElement('pre');
  jsonData.className = 'debug-info';
  jsonData.innerHTML = JSON.stringify(data, undefined, 2);
  results.appendChild(jsonData);

  const form = document.getElementById('search-form');
  const changeUnits = document.createElement('span');
  changeUnits.id = 'change-units';
  changeUnits.setAttribute('data-metric', true);
  changeUnits.textContent = 'Imperial';
  changeUnits.addEventListener('click', toggle);
  form.appendChild(changeUnits);

  // const unspKey = 'Jk7uiL9KRyqgPk97RK04K5eWuqInFYFma8sJCKXeMxc';
  const unspKey = 'qbEWi95WrGLB_MBjPIvVAvcWQo58LGfSsGbeRWh3jnc';
  const factor = ` ${data.name} ${data.weather[0].description}`;
  const bgURL = `https://api.unsplash.com/photos/random?client_id=${unspKey}&query=${factor}`;
  fetch(bgURL, { mode: 'cors' })
    .then(response => response.json())
    .then(data => {
      document.body.style.backgroundImage = `url(${data.urls.regular})`;
    });
};

export { showResults as default, showLoading };
