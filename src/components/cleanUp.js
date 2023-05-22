function clearForecastContainer() {
    let forecast_container = document.querySelector('.forecast');
    while(forecast_container.firstChild) {
        forecast_container.firstChild.remove();
    }
    return;
}

export { clearForecastContainer };