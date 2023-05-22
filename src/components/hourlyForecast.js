import dayjs from "dayjs";

function makeHourlyForecastElement(t) {
    let forecast_ele = document.createElement('div');
    forecast_ele.classList.add('forecast-element');
    let header = document.createElement('h1');
    let hour = dayjs(t.time, 'YYYY-MMMM-D');
    header.classList.add('forecast-header');
    header.textContent = hour.format('hh:mm A');

    let cond_img = document.createElement('img');
    cond_img.src = t.condition.icon;
    cond_img.classList.add('icon-forecast');

    forecast_ele.append(header, cond_img);

    let temp_wrapper = document.createElement('span');
    temp_wrapper.classList.add('forecast-detail-wrapper');

    let temp = document.createElement('p');
    temp.textContent = `${t.temp_f}°`;

    temp_wrapper.append(temp);

    forecast_ele.appendChild(temp_wrapper);

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
        }
    }

    return hour_arr;
}

export { makeHourlyForecastElement, computeHours };