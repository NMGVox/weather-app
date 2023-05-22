import './style.css';
import { fetchWeather, getDailyForecast, getHourlyForecast, switchUnits } from './components/weather';
import { clearForecastContainer } from './components/cleanUp';

let daily_forecast_btn = document.querySelector('#show-weekly');
let hourly_forecast_btn = document.querySelector('#show-hourly');

window.addEventListener('load', (event => {
    fetchWeather('Jersey+City');
}));

document.querySelector('#unit-toggle').addEventListener('click', switchUnits);

document.querySelector('#search-form').addEventListener('submit', (event => {
    event.preventDefault();
    let query = document.querySelector('#search');
    if(query.value === '') {
        query.setCustomValidity('Please enter a location.');
        query.reportValidity();
        return;
    }else {
        query.setCustomValidity('');
    }
    fetchWeather(encodeURIComponent(query.value));
}));

daily_forecast_btn.addEventListener('click', (event)=> {
    clearForecastContainer();
    getDailyForecast();
    daily_forecast_btn.disabled = true;
    if(hourly_forecast_btn.disabled) {
        hourly_forecast_btn.disabled = false;
    }
    return;
});

hourly_forecast_btn.addEventListener('click', (event) => {
    clearForecastContainer();
    getHourlyForecast();
    hourly_forecast_btn.disabled = true;
    if(daily_forecast_btn.disabled) {
        daily_forecast_btn.disabled = false;
    }
    return;
});
