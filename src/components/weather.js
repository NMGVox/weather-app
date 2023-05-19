import { setTickerText } from "./ticker";

let request = 'http://api.weatherapi.com/v1/forecast.json?key=1b054972cb384d789c5195202231505&q=Jersey+City';
let data = {};
let fahrenheit = true;

async function fetchWeather() {
    try{
        let response = await fetch(request, {'mode': 'cors'});
        data = await response.json();
        setWeather();
    }
    catch(error) {
        console.log(error);
    }
}

function setWeather() {
    document.querySelector('.city-state').textContent = `${data.location.name}, ${data.location.region}`;
    document.querySelector('.country').textContent = `${data.location.country}`;
    let temp_ele = document.querySelector('#temperature');
    fahrenheit ? 
        temp_ele.textContent = `${data.current.temp_f} °F` : 
        temp_ele.textContent = `${data.current.temp_c} °C`;
    document.querySelector('.last-update').textContent = `as of: ${data.current.last_updated}`;

    document.querySelector('#ticker').appendChild(setTickerText(data));
}

export { fetchWeather };