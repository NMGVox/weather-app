import { hourly_forecast } from "../weather";

let winObserver = new ResizeObserver(entries => {
    for(const entry of entries) {
        if ( entry.target.clientWidth < 600 ) {
            let search_div = document.querySelector('.search-area');
            let target_div = document.querySelector('.main-weather'); 
            target_div.prepend(search_div);
            let forecast_sect = document.querySelector('.forecastwrapper');
            target_div.append(forecast_sect);
            let fav_container = document.querySelector('.favorites-container');
            fav_container.style.position = 'absolute';
            document.querySelector('#mobile-faves').style.display = 'block';
            console.log(document.querySelector('#mobile-faves').clientTop);
            fav_container.style.top = `8vh`;
            fav_container.style.left = `${entry.target.clientWidth - 200}px`;
            fav_container.style.width = `200px`;
        };
        if ( entry.target.clientWidth > 600) {
            let search_div = document.querySelector('.search-area');
            let target_div = document.querySelector('.heading'); 
            target_div.append(search_div);
            let forecast_sect = document.querySelector('.forecast');
            document.querySelector('.forecastwrapper').append(forecast_sect);

            document.querySelector('#mobile-faves').style.display = 'none';
            let fav_container = document.querySelector('.favorites-container');
            fav_container.removeAttribute('style');
        };
        //entry.target.clientWidth < 800 ? mobile_on = true : mobile_on = false;
    }
})

winObserver.observe(document.body);

export {winObserver};