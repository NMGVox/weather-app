import './style.css';
import './components/widgets/loader.css';
import fav_icon from './images/fav.svg';
import { fetchWeather, getDailyForecast, getHourlyForecast, showForecast, switchUnits } from './components/weather';
import { clearForecastContainer } from './components/cleanUp';
import { populateFavorites, setNewFavorite } from './components/widgets/favManager';

let daily_forecast_btn = document.querySelector('#show-weekly');
let hourly_forecast_btn = document.querySelector('#show-hourly');

function prepForFetch() {
    let query = document.querySelector('#search');
    if(query.value === '') {
        query.setCustomValidity('Please enter a location.');
        query.reportValidity();
        return;
    }else {
        query.setCustomValidity('');
    }
    fetchWeather(encodeURIComponent(query.value));
    return;
}

window.addEventListener('load', (event => {
    document.querySelector('#fav-icon').src = fav_icon;
    populateFavorites();
    if(localStorage.getItem('current')) {
        fetchWeather(localStorage.getItem('current'));
        return;
    }
    fetchWeather('Jersey+City');
}));

document.querySelector('#unit-toggle').addEventListener('click', switchUnits);

document.querySelector('#search-form').addEventListener('submit', (event => {
    event.preventDefault();
    prepForFetch();
}));

daily_forecast_btn.addEventListener('click', (event)=> {
    daily_forecast_btn.disabled = true;
    if(hourly_forecast_btn.disabled) {
        hourly_forecast_btn.disabled = false;
    }

    showForecast(event);
    return;
});

hourly_forecast_btn.addEventListener('click', (event) => {
    hourly_forecast_btn.disabled = true;
    if(daily_forecast_btn.disabled) {
        daily_forecast_btn.disabled = false;
    }

    showForecast(event);
    return;
});

document.querySelector('#fav-icon').addEventListener('click', (event) => {
    setNewFavorite();
})
