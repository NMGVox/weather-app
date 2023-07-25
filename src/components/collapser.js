function collapseForecast(event) {
    let forecast_wrapper = document.querySelector('.forecastwrapper');
    forecast_wrapper.style.height = '0vh';
    let collapser = document.querySelector('.collapser');
    collapser.removeEventListener('pointerdown', collapseForecast);

    document.querySelector('#show-hourly').disabled = false;
    document.querySelector('#show-weekly').disabled = false;
    return;
}

export { collapseForecast };