const celsiusToFarenheit = () => {
  document.querySelectorAll('.temperature').forEach(element => {
    const temperature = Number(element.textContent);
    element.textContent = (((temperature * 9) / 5) + 32).toFixed(2);
  });
  document.querySelectorAll('.unit-temperature').forEach(element => {
    element.innerHTML = '&deg;F';
  });
};

const farenheitToCelsius = () => {
  document.querySelectorAll('.temperature').forEach(element => {
    const temperature = Number(element.textContent);
    element.textContent = (((temperature - 32) * 5) / 9).toFixed(2);
  });
  document.querySelectorAll('.unit-temperature').forEach(element => {
    element.innerHTML = '&deg;C';
  });
};

const metersToMiles = () => {
  document.querySelectorAll('.distance').forEach(element => {
    const distance = Number(element.textContent);
    element.textContent = (distance * 0.000621371).toFixed(2);
  });
  document.querySelectorAll('.unit-distance').forEach(element => {
    element.innerHTML = 'miles';
  });
};

const milesToMeters = () => {
  document.querySelectorAll('.distance').forEach(element => {
    const distance = Number(element.textContent);
    element.textContent = (distance * 1609.34).toFixed(2);
  });
  document.querySelectorAll('.unit-distance').forEach(element => {
    element.innerHTML = 'meters';
  });
};

const metpsToMilph = () => {
  document.querySelectorAll('.speed').forEach(element => {
    const speed = Number(element.textContent);
    element.textContent = (speed * 2.23694).toFixed(2);
  });
  document.querySelectorAll('.unit-speed').forEach(element => {
    element.innerHTML = 'miles&sol;hour';
  });
};

const mphToMetps = () => {
  document.querySelectorAll('.speed').forEach(element => {
    const speed = Number(element.textContent);
    element.textContent = (speed * 0.44704).toFixed(2);
  });
  document.querySelectorAll('.unit-speed').forEach(element => {
    element.innerHTML = 'meters&sol;sec';
  });
};

const toggle = () => {
  const toggleBtn = document.getElementById('change-units');
  if (toggleBtn.dataset.metric === 'true') {
    toggleBtn.textContent = 'Metric';
    toggleBtn.setAttribute('data-metric', false);
    celsiusToFarenheit();
    metersToMiles();
    metpsToMilph();
  } else if (toggleBtn.dataset.metric === 'false') {
    toggleBtn.textContent = 'Imperial';
    toggleBtn.setAttribute('data-metric', true);
    farenheitToCelsius();
    milesToMeters();
    mphToMetps();
  }
};

export default toggle;