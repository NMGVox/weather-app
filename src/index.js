import './style.css';
import './components/widgets/loader.css';
import fav_icon from './images/fav.svg';
import search_icon from './images/search.svg';
import mobile_faves from './images/faves.svg';
import { fetchWeather, getDailyForecast, getHourlyForecast, showForecast, switchUnits } from './components/weather';
import { clearForecastContainer } from './components/cleanUp';
import { winObserver } from './components/widgets/winSize';
import { populateFavorites, setNewFavorite } from './components/widgets/favManager';

let daily_forecast_btn = document.querySelector('#show-weekly');
let hourly_forecast_btn = document.querySelector('#show-hourly');

let m_faves_active = false;

function prepForFetch() {
    let query = document.querySelector('#search');
    let e_span = document.querySelector('#error');
    if(query.value === '') {
        e_span.textContent = "Please enter a location!"
        return;
    }else {
        e_span.textContent = "";
    }
    fetchWeather(encodeURIComponent(query.value));
    return;
}

window.addEventListener('load', (event => {
    document.querySelector('#fav-icon').src = fav_icon;
    document.querySelector('#search-icon').src = search_icon;
    document.querySelector('#mobile-faves').src = mobile_faves;
    if(localStorage.hasOwnProperty('favs')) {
        populateFavorites();
    }
    if(localStorage.hasOwnProperty('current')) {
        fetchWeather(localStorage.getItem('current'));
        return;
    }
    fetchWeather('Jersey+City');
}));

document.querySelector('#unit-toggle').addEventListener('pointerdown', switchUnits);

document.querySelector('#search-form').addEventListener('submit', (event => {
    event.preventDefault();
    prepForFetch();
}));

daily_forecast_btn.addEventListener('pointerdown', (event)=> {
    daily_forecast_btn.disabled = true;
    if(hourly_forecast_btn.disabled) {
        hourly_forecast_btn.disabled = false;
    }

    showForecast(event);
    return;
});

hourly_forecast_btn.addEventListener('pointerdown', (event) => {
    hourly_forecast_btn.disabled = true;
    if(daily_forecast_btn.disabled) {
        daily_forecast_btn.disabled = false;
    }

    showForecast(event);
    return;
});

document.querySelector('#fav-icon').addEventListener('pointerdown', (event) => {
    setNewFavorite();
})

document.querySelector('#mobile-faves').addEventListener('pointerdown', (event) => {
    let fav_container = document.querySelector('.favorites-container');
    if (!m_faves_active) {
        fav_container.style.height = '91vh';
        m_faves_active = true;
        return;
    }

    fav_container.style.height = '0';
    m_faves_active = false;
    return;
})

