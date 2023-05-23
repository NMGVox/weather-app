import dayjs from "dayjs";
import { setForecastHeader, setConditionImage, setTemperatureDetail } from "./helpers/forecastEleHelper";

function makeDailyForecastElement(d) {
    //Given day, return div containing weather info for the day of the week
    let forecast_ele = document.createElement('div'); //
    forecast_ele.classList.add('forecast-element'); //
    
    let date = dayjs(d.date, 'YYYY-MMMM-D'); //
    forecast_ele.appendChild(setForecastHeader(date.format('dddd')));

    forecast_ele.append(setConditionImage(d.day.condition.icon));

    forecast_ele.append(setTemperatureDetail(`${d.day.mintemp_f}° / ${d.day.maxtemp_f}°`));

    return forecast_ele;
}

export { makeDailyForecastElement };