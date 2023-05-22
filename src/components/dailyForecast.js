import dayjs from "dayjs";
import { dayMap } from "./info/daysmap";

function makeForecastElement(d) {
    //Given day, return div containing weather info for the day of the week
    let forecast_ele = document.createElement('div');
    forecast_ele.classList.add('forecast-element');
    let day_of_week = document.createElement('h1');
    let date = dayjs(d.date, 'YYYY-MMMM-D');
    day_of_week.classList.add('forecast-header');
    day_of_week.textContent = date.format('dddd');

    let cond_img = document.createElement('img');
    cond_img.src = d.day.condition.icon;
    cond_img.classList.add('icon-forecast');

    forecast_ele.append(day_of_week, cond_img);

    let temp_wrapper = document.createElement('span');
    temp_wrapper.classList.add('forecast-detail-wrapper');

    let min_max_t = document.createElement('p');
    min_max_t.textContent = `${d.day.mintemp_f}° / ${d.day.maxtemp_f}°`;

    temp_wrapper.append(min_max_t);

    forecast_ele.appendChild(temp_wrapper);

    return forecast_ele;
}

export { makeForecastElement };