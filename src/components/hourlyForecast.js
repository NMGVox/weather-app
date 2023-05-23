import dayjs from "dayjs";
import { setForecastHeader, setConditionImage, setTemperatureDetail } from "./helpers/forecastEleHelper";

function makeHourlyForecastElement(t) {
    let forecast_ele = document.createElement('div');
    forecast_ele.classList.add('forecast-element');
    
    let hour = dayjs(t.time, 'YYYY-MMMM-D');
    forecast_ele.appendChild(setForecastHeader(hour.format('dddd, h:mm A')));

    forecast_ele.appendChild(setConditionImage(t.condition.icon));

    forecast_ele.appendChild(setTemperatureDetail(`${t.temp_f}°`));

    return forecast_ele;
}

function computeHours(d) {
    let current_datetime = d.current.last_updated;
    current_datetime = dayjs(current_datetime, 'YYYY-MMMM-D');
    
    let start = Number(current_datetime.format('HH')) + 1;
    let day_indx = 0;
    let hour_arr = [];
    
    for(let limit = 24; limit > 0; limit--) {
        hour_arr.push(d.forecast.forecastday[day_indx].hour[start]);
        start++;
        if (start > 23) {
            start = 0;
            day_indx++;
        }
    }

    return hour_arr;
}

export { makeHourlyForecastElement, computeHours };