import { setTickerText } from "./ticker";
import placeholder from './../images/placeholder.png';
import { setDate, setLocation, setTemp } from "./setWeatherHelper";
import { displayLoader, removeLoader } from "./widgets/load";
import { makeDailyForecastElement, computeHours, makeHourlyForecastElement  } from "./Forecast";
import { setCurrentLocal } from "./localHandler";
import { clearForecastContainer } from "./cleanUp";
import { backgroundSwitch } from "./widgets/backgroundControl";
import { collapseForecast } from "./collapser";


let request = 'https://api.weatherapi.com/v1/forecast.json?key=1b054972cb384d789c5195202231505&q=';
let req_extra = '&days=5&aqi=no&alerts=no'
let data = {};
let daily_forecast = [];
let hourly_forecast = [];
let fahrenheit = true;

async function fetchWeather(q) {
    displayLoader();
    let e_span = document.querySelector('#error');
    try{
        //Loading component stuff here
        let response = await fetch(request + q + req_extra, {'mode': 'cors'});
        data = await response.json();
        setWeather();
        backgroundSwitch(Number(data.current.condition.code));
        clearForecastContainer();
        getDailyForecast();
        getHourlyForecast();
        showForecast();
        setCurrentLocal(q);
        e_span.textContent = '';
    }
    catch(error) {
        e_span.textContent = 'Cannot find a matching location.';
        console.log(error);
    }
    removeLoader();
}

function setWeather() {
    setLocation(data.location.name, data.location.region, data.location.country);
    setTemp((fahrenheit ? `${Math.round(data.current.temp_f)} °F` : `${Math.round(data.current.temp_c)} °C`));
    setDate(data.current.last_updated);
    let ticker = document.querySelector('#ticker');
    if(ticker.firstChild) {
        ticker.firstChild.remove();
    }
    ticker.appendChild(setTickerText(data));
    document.querySelector('.w-icon-small').src = data.current.condition.icon;
}


function getDailyForecast() {
    daily_forecast = [];
    let forecast_section = document.querySelector('.forecast');
    (data.forecast.forecastday).forEach(day => {
        daily_forecast.push(makeDailyForecastElement(day));
    });
    return;
}

function getHourlyForecast() {
    hourly_forecast = [];
    let forecast_section = document.querySelector('.forecast');
    let hours = computeHours(data);
    hours.forEach(tick => {
        hourly_forecast.push(makeHourlyForecastElement(tick));
    });
    return;
}

function showForecast() {
    let forecast_wrapper = document.querySelector('.forecastwrapper');
    let forecast_section = document.querySelector('.forecast');
    let hourly = document.querySelector('#show-hourly');
    let weekly = document.querySelector('#show-weekly');

    clearForecastContainer();

    if(weekly.disabled) {
        forecast_section.style.justifyContent = 'center';
        daily_forecast.forEach(element => {
            forecast_section.appendChild(element);
        });
    } else if(hourly.disabled) {
        forecast_section.style.justifyContent = 'flex-start';
        hourly_forecast.forEach(element => {
            forecast_section.appendChild(element);
        })
    }else {
        return;
    }

    if(fahrenheit) {
        (Array.from(document.querySelectorAll('.celsius'))).forEach(ele =>{
            ele.style.display = 'none';
        });
    } else {
        (Array.from(document.querySelectorAll('.fahrenheit'))).forEach(ele =>{
            ele.style.display = 'none';
        });
    }
    forecast_wrapper.style.height = '25vh';
    let collapser = document.querySelector('.collapser');
    collapser.addEventListener('pointerdown', collapseForecast);
    return;
}

function switchUnits() {
    fahrenheit = !fahrenheit;
    let temp_ele = document.querySelector('#temperature');
    let feel_ele = document.querySelector('#feel');
    if(fahrenheit) {
        temp_ele.textContent = `${Math.round(data.current.temp_f)} °F`;
        feel_ele.textContent = `Feels like: ${Math.round(data.current.feelslike_f)} °F`;
        
        //This is ugly, but for current lack of a better solution, it works
        //Hopefully without breaking. 23 May, 2023 14:59
        (Array.from(document.querySelectorAll('.fahrenheit'))).forEach(ele =>{
            ele.style.display = 'inline-block';
        });

        (Array.from(document.querySelectorAll('.celsius'))).forEach(ele =>{
            ele.style.display = 'none';
        });
        return; 
    }
    temp_ele.textContent = `${Math.round(data.current.temp_c)} °C`;
    feel_ele.textContent = `Feels like: ${Math.round(data.current.feelslike_c)} °C`;

    (Array.from(document.querySelectorAll('.fahrenheit'))).forEach(ele =>{
        ele.style.display = 'none';
    });

    (Array.from(document.querySelectorAll('.celsius'))).forEach(ele =>{
        ele.style.display = 'inline-block';
    });
    return;
}

export { hourly_forecast, fetchWeather, switchUnits, getDailyForecast, getHourlyForecast, showForecast };