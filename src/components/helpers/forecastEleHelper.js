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

export{ setForecastHeader, setConditionImage, setTemperatureDetail };