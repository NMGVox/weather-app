import './style.css';
import { fetchWeather, switchUnits } from './components/weather';

window.addEventListener('load', (event => {
    fetchWeather('Jersey+City');
    console.log("I fetch weather lolz");
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

document.querySelector('#show-weekly').addEventListener('click', (event) => {
    console.log("Placeholder");
})
