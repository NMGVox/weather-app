import { setTickerText } from "./ticker";
import placeholder from './../images/placeholder.png';
import { setDate, setLocation, setTemp } from "./setWeatherHelper";
import { makeForecastElement } from "./dailyForecast";
import { computeHours, makeHourlyForecastElement } from "./hourlyForecast";

let request = 'http://api.weatherapi.com/v1/forecast.json?key=1b054972cb384d789c5195202231505&q=';
let req_extra = '&days=5&aqi=no&alerts=no'
let data = {};
let daily_forecast = [];
let hourly_forecast = [];
let fahrenheit = true;

async function fetchWeather(q) {
    try{
        let response = await fetch(request + q + req_extra, {'mode': 'cors'});
        data = await response.json();
        setWeather();
        getDailyForecast()
        getHourlyForecast()
    }
    catch(error) {
        let query = document.querySelector('#search');
        query.setCustomValidity('Cannot find a matching location.');
        query.reportValidity();
        console.log(error);
    }
}

function setWeather() {
    setLocation(data.location.name, data.location.region, data.location.country);
    setTemp((fahrenheit ? `${data.current.temp_f} °F` : `${data.current.temp_c} °C`));
    setDate(data.current.last_updated);
    let ticker = document.querySelector('#ticker');
    if(ticker.firstChild) {
        ticker.firstChild.remove();
    }
    ticker.appendChild(setTickerText(data));
    document.querySelector('.w-icon-small').src = data.current.condition.icon;
}

function switchUnits() {
    fahrenheit = !fahrenheit;
    let temp_ele = document.querySelector('#temperature');
    let feel_ele = document.querySelector('#feel');
    if(fahrenheit) {
        temp_ele.textContent = `${data.current.temp_f} °F`;
        feel_ele.textContent = `Feels like: ${data.current.feelslike_f} °F`;
        return; 
    }
    temp_ele.textContent = `${data.current.temp_c} °C`;
    feel_ele.textContent = `Feels like: ${data.current.feelslike_c} °C`;
    return;
}

function getDailyForecast() {
    daily_forecast = [];
    let forecast_section = document.querySelector('.forecast');
    (data.forecast.forecastday).forEach(day => {
        daily_forecast.push(makeForecastElement(day));
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


function showForecast(e) {
    let forecast_section = document.querySelector('.forecast');
    if(e.target.id === 'show-weekly') {
        daily_forecast.forEach(element => {
            forecast_section.appendChild(element);
        });
    } else {
        hourly_forecast.forEach(element => {
            forecast_section.appendChild(element);
        })
    }
    return;
}

export { fetchWeather, switchUnits, getDailyForecast, getHourlyForecast, showForecast };