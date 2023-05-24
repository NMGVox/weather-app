import dayjs from "dayjs";

function makeDailyForecastElement(d) {
    //Given day, return div containing weather info for the day of the week
    let forecast_ele = document.createElement('div'); //
    forecast_ele.classList.add('forecast-element'); //
    
    let date = dayjs(d.date, 'YYYY-MMMM-D'); //
    forecast_ele.appendChild(setForecastHeader(date.format('dddd')));

    forecast_ele.append(setConditionImage(d.day.condition.icon));

    forecast_ele.append(setTemperatureDetail(`${Math.round(d.day.mintemp_f)}°F / ${Math.round(d.day.maxtemp_f)}°F`,
     `${Math.round(d.day.mintemp_c)}°C / ${Math.round(d.day.maxtemp_c)}°C`));

    return forecast_ele;
}

function makeHourlyForecastElement(t) {
    let forecast_ele = document.createElement('div');
    forecast_ele.classList.add('forecast-element');
    
    let hour = dayjs(t.time, 'YYYY-MMMM-D');
    forecast_ele.appendChild(setForecastHeader(hour.format('dddd, h:mm A')));

    forecast_ele.appendChild(setConditionImage(t.condition.icon));

    forecast_ele.appendChild(setTemperatureDetail(`${Math.round(t.temp_f)}° F`, 
        `${Math.round(t.temp_c)}° C`));

    return forecast_ele;
}

function computeHours(d) {
    let current_datetime = d.current.last_updated;
    current_datetime = dayjs(current_datetime, 'YYYY-MMMM-D');
    
    let start = Number(current_datetime.format('HH')) + 1;
    let day_indx = 0;
    let hour_arr = [];
    
    for(let limit = 24; limit > 0; limit--) {
        if (start > 23) {
            start = 0;
            day_indx++;
        }
        hour_arr.push(d.forecast.forecastday[day_indx].hour[start]);
        start++;
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

function setTemperatureDetail(f, c) {
    let temp_wrapper = document.createElement('span');
    temp_wrapper.classList.add('forecast-detail-wrapper');

    let details_f = document.createElement('p');
    details_f.classList.add('fahrenheit');
    details_f.textContent = f;

    let details_c = document.createElement('p');
    details_c.classList.add('celsius');
    details_c.textContent = c;

    temp_wrapper.append(details_f, details_c);
    return temp_wrapper;
}

export { makeDailyForecastElement, makeHourlyForecastElement, computeHours };