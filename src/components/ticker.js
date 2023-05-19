function setTickerText(data) {
    let ul = document.createElement('ul');
    ul.appendChild(setCondition(data.current.condition.text));
    ul.appendChild(setRealFeel(data.current.feelslike_f));
    ul.appendChild(setHumidity(data.current.humidity));
    ul.appendChild(setWindSpeed(data.current.wind_kph));
    ul.classList.add('ticker-text');
    return ul;
}

function setCondition(c) {
    let li = document.createElement('li');
    li.textContent = `Condition: ${c}`;
    return li;
}

function setHumidity(h) {
    let li = document.createElement('li');
    li.textContent = `Humidity: ${h}%`;
    return li;
}

function setWindSpeed(w) {
    let li = document.createElement('li');
    li.textContent = `Wind Speed: ${w} km/h`;
    return li;
}

function setRealFeel(f) {
    let li = document.createElement('li');
    li.textContent = `Feels like: ${f} °F`;
    li.id = 'feel';
    return li;
}

export { setTickerText };