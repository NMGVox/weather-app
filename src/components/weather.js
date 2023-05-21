import { setTickerText } from "./ticker";
import placeholder from '../images/placeholder.png';
import { setDate, setLocation, setTemp } from "./setWeatherHelper";

let request = 'http://api.weatherapi.com/v1/forecast.json?key=1b054972cb384d789c5195202231505&q=';
let data = {};
let fahrenheit = true;

async function fetchWeather(q) {
    try{
        let response = await fetch(request + q, {'mode': 'cors'});
        data = await response.json();
        setWeather();
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

export { fetchWeather, switchUnits };