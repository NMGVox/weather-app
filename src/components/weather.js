let request = 'http://api.weatherapi.com/v1/forecast.json?key=1b054972cb384d789c5195202231505&q=Jersey+City';
let data = {};
let fahrenheit = true;

async function fetchWeather() {
    let response = await fetch(request, {'mode': 'cors'});
    data = await response.json();
}


export { fetchWeather };