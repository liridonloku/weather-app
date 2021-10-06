import './style.css';

const cityName = document.querySelector('.city-name');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temp-value');
const units = document.querySelector('.units');
const form = document.getElementById('city');
const search = document.getElementById('search');
let defaultUnits = 'metric';

search.addEventListener('click', () => {
    const city = form.value;
    getWeather(city);
})

units.addEventListener('click', () => {
    if(units.textContent != '-'){
        if(defaultUnits === 'metric'){
            defaultUnits = 'imperial';
        } else {
            defaultUnits = 'metric';
        }
        getWeather(cityName.textContent);
    }
})


const content = document.querySelector('.content');
async function getWeather(city) {
    loadingScreen();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a04537d2b453a6d8a3d650771653a893&units=${defaultUnits}`);
    const data = await response.json();
    displayWeather(data);
    console.log(data);
}

const displayWeather = (data) => {
    const icon = document.createElement('img');
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.textContent = '';
    weatherIcon.appendChild(icon);
    cityName.textContent = data.name;
    temperature.textContent = data.main.temp;
    if(defaultUnits === 'metric'){
        units.textContent = '°C';
    }else{
        units.textContent = '°F';
    }
}

const loadingScreen = () => {
    cityName.textContent = 'Loading...';
    weatherIcon.textContent = '-';
    temperature.textContent = '-';
    units.textContent = '-';
}