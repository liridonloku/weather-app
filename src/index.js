import './style.css';
const content = document.querySelector('.content');
async function getWeather() {
    loadingScreen();
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=a04537d2b453a6d8a3d650771653a893&units=metric');
    const data = await response.json();
    displayWeather(data);
}

const displayWeather = (data) => {
    content.replaceChildren();
    const cityName = document.createElement('h1');
    cityName.textContent = data.name;
    const temperature = document.createElement('p');
    temperature.textContent = data.main.temp;
    content.appendChild(cityName);
    content.appendChild(temperature);
}

const loadingScreen = () => {
    content.replaceChildren();
    content.textContent = 'Loading';
}

getWeather();