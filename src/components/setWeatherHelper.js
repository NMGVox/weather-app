import dayjs from "dayjs";

function setLocation (c, s, country) {
    document.querySelector('.city-state').textContent = `${c}, ${s}`;
    document.querySelector('.country').textContent = `${country}`;
    return;
}

function setTemp(t) {
    let temp_ele = document.querySelector('#temperature');
    temp_ele.textContent = `${t}`;
    return;
}

function setDate(d) {
    let date = dayjs(d, 'YYYY-MMMM-D');
    document.querySelector('.last-update').textContent = `As of: ${date.toDate()}`;
    return;
}

export { setLocation, setTemp, setDate };