import dayjs from "dayjs";
//import { setForecastHeader, setConditionImage, setTemperatureDetail } from "./helpers/forecastEleHelper";

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

function setForecastHeader(h) {
    let header = document.createElement('h1');
    header.classList.add('forecast-header');
    header.textContent = h;
    return header;
}

function setConditionImage(i) {
    let cond_img = document.createElement('img');
    cond_img.src = i
    cond_img.classList.add('icon-forecast');
    return cond_img;
}

function setTemperatureDetail(d) {
    let temp_wrapper = document.createElement('span');
    temp_wrapper.classList.add('forecast-detail-wrapper');

    let details = document.createElement('p');
    details.textContent = d;

    temp_wrapper.append(details);
    return temp_wrapper;
}

export { makeDailyForecastElement, makeHourlyForecastElement, computeHours };