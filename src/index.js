import './style.css';
import { fetchWeather, whatsthedata } from './components/weather';

window.addEventListener('load', (event => {
    fetchWeather();
    console.log("I fetch weather lolz");
}));
