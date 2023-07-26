/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Forecast.js":
/*!************************************!*\
  !*** ./src/components/Forecast.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeHours: () => (/* binding */ computeHours),
/* harmony export */   makeDailyForecastElement: () => (/* binding */ makeDailyForecastElement),
/* harmony export */   makeHourlyForecastElement: () => (/* binding */ makeHourlyForecastElement)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

function makeDailyForecastElement(d) {
  //Given day, return div containing weather info for the day of the week
  let forecast_ele = document.createElement('div'); //
  forecast_ele.classList.add('forecast-element'); //

  let date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(d.date, 'YYYY-MMMM-D'); //
  forecast_ele.appendChild(setForecastHeader(date.format('dddd')));
  forecast_ele.append(setConditionImage(d.day.condition.icon));
  forecast_ele.append(setTemperatureDetail(`${Math.round(d.day.mintemp_f)}°F / ${Math.round(d.day.maxtemp_f)}°F`, `${Math.round(d.day.mintemp_c)}°C / ${Math.round(d.day.maxtemp_c)}°C`));
  return forecast_ele;
}
function makeHourlyForecastElement(t) {
  let forecast_ele = document.createElement('div');
  forecast_ele.classList.add('forecast-element');
  let hour = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(t.time, 'YYYY-MMMM-D');
  forecast_ele.appendChild(setForecastHeader(hour.format('dddd, h:mm A')));
  forecast_ele.appendChild(setConditionImage(t.condition.icon));
  forecast_ele.appendChild(setTemperatureDetail(`${Math.round(t.temp_f)}° F`, `${Math.round(t.temp_c)}° C`));
  return forecast_ele;
}
function computeHours(d) {
  let current_datetime = d.current.last_updated;
  current_datetime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(current_datetime, 'YYYY-MMMM-D');
  let start = Number(current_datetime.format('HH')) + 1;
  let day_indx = 0;
  let hour_arr = [];
  for (let limit = 24; limit > 0; limit--) {
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
  cond_img.src = i;
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


/***/ }),

/***/ "./src/components/cleanUp.js":
/*!***********************************!*\
  !*** ./src/components/cleanUp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearForecastContainer: () => (/* binding */ clearForecastContainer)
/* harmony export */ });
function clearForecastContainer() {
  let forecast_container = document.querySelector('.forecast');
  while (forecast_container.firstChild) {
    forecast_container.firstChild.remove();
  }
  return;
}


/***/ }),

/***/ "./src/components/collapser.js":
/*!*************************************!*\
  !*** ./src/components/collapser.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collapseForecast: () => (/* binding */ collapseForecast)
/* harmony export */ });
function collapseForecast(event) {
  let forecast_wrapper = document.querySelector('.forecastwrapper');
  forecast_wrapper.style.height = '0vh';
  let collapser = document.querySelector('.collapser');
  collapser.removeEventListener('pointerdown', collapseForecast);
  document.querySelector('#show-hourly').disabled = false;
  document.querySelector('#show-weekly').disabled = false;
  return;
}


/***/ }),

/***/ "./src/components/localHandler.js":
/*!****************************************!*\
  !*** ./src/components/localHandler.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setCurrentLocal: () => (/* binding */ setCurrentLocal)
/* harmony export */ });
function setCurrentLocal(q) {
  try {
    localStorage.setItem('current', q);
  } catch (error) {
    console.log('error');
  }
  return;
}


/***/ }),

/***/ "./src/components/setWeatherHelper.js":
/*!********************************************!*\
  !*** ./src/components/setWeatherHelper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setDate: () => (/* binding */ setDate),
/* harmony export */   setLocation: () => (/* binding */ setLocation),
/* harmony export */   setTemp: () => (/* binding */ setTemp)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

function setLocation(c, s, country) {
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
  let date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(d, 'YYYY-MMMM-D');
  document.querySelector('.last-update').textContent = `Updated: ${date.format('dddd, h:mm A')}`;
  return;
}


/***/ }),

/***/ "./src/components/ticker.js":
/*!**********************************!*\
  !*** ./src/components/ticker.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setTickerText: () => (/* binding */ setTickerText)
/* harmony export */ });
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


/***/ }),

/***/ "./src/components/weather.js":
/*!***********************************!*\
  !*** ./src/components/weather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather),
/* harmony export */   getDailyForecast: () => (/* binding */ getDailyForecast),
/* harmony export */   getHourlyForecast: () => (/* binding */ getHourlyForecast),
/* harmony export */   hourly_forecast: () => (/* binding */ hourly_forecast),
/* harmony export */   showForecast: () => (/* binding */ showForecast),
/* harmony export */   switchUnits: () => (/* binding */ switchUnits)
/* harmony export */ });
/* harmony import */ var _ticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticker */ "./src/components/ticker.js");
/* harmony import */ var _images_placeholder_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../images/placeholder.png */ "./src/images/placeholder.png");
/* harmony import */ var _setWeatherHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setWeatherHelper */ "./src/components/setWeatherHelper.js");
/* harmony import */ var _widgets_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/load */ "./src/components/widgets/load.js");
/* harmony import */ var _Forecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Forecast */ "./src/components/Forecast.js");
/* harmony import */ var _localHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localHandler */ "./src/components/localHandler.js");
/* harmony import */ var _cleanUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cleanUp */ "./src/components/cleanUp.js");
/* harmony import */ var _widgets_backgroundControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/backgroundControl */ "./src/components/widgets/backgroundControl.js");
/* harmony import */ var _collapser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapser */ "./src/components/collapser.js");









let request = 'https://api.weatherapi.com/v1/forecast.json?key=1b054972cb384d789c5195202231505&q=';
let req_extra = '&days=5&aqi=no&alerts=no';
let data = {};
let daily_forecast = [];
let hourly_forecast = [];
let fahrenheit = true;
async function fetchWeather(q) {
  (0,_widgets_load__WEBPACK_IMPORTED_MODULE_3__.displayLoader)();
  let e_span = document.querySelector('#error');
  try {
    //Loading component stuff here
    let response = await fetch(request + q + req_extra, {
      'mode': 'cors'
    });
    data = await response.json();
    setWeather();
    (0,_widgets_backgroundControl__WEBPACK_IMPORTED_MODULE_7__.backgroundSwitch)(Number(data.current.condition.code));
    (0,_cleanUp__WEBPACK_IMPORTED_MODULE_6__.clearForecastContainer)();
    getDailyForecast();
    getHourlyForecast();
    showForecast();
    (0,_localHandler__WEBPACK_IMPORTED_MODULE_5__.setCurrentLocal)(q);
    e_span.textContent = '';
  } catch (error) {
    e_span.textContent = 'Cannot find a matching location.';
    console.log(error);
  }
  (0,_widgets_load__WEBPACK_IMPORTED_MODULE_3__.removeLoader)();
}
function setWeather() {
  (0,_setWeatherHelper__WEBPACK_IMPORTED_MODULE_2__.setLocation)(data.location.name, data.location.region, data.location.country);
  (0,_setWeatherHelper__WEBPACK_IMPORTED_MODULE_2__.setTemp)(fahrenheit ? `${Math.round(data.current.temp_f)} °F` : `${Math.round(data.current.temp_c)} °C`);
  (0,_setWeatherHelper__WEBPACK_IMPORTED_MODULE_2__.setDate)(data.current.last_updated);
  let ticker = document.querySelector('#ticker');
  if (ticker.firstChild) {
    ticker.firstChild.remove();
  }
  ticker.appendChild((0,_ticker__WEBPACK_IMPORTED_MODULE_0__.setTickerText)(data));
  document.querySelector('.w-icon-small').src = data.current.condition.icon;
}
function getDailyForecast() {
  daily_forecast = [];
  let forecast_section = document.querySelector('.forecast');
  data.forecast.forecastday.forEach(day => {
    daily_forecast.push((0,_Forecast__WEBPACK_IMPORTED_MODULE_4__.makeDailyForecastElement)(day));
  });
  return;
}
function getHourlyForecast() {
  hourly_forecast = [];
  let forecast_section = document.querySelector('.forecast');
  let hours = (0,_Forecast__WEBPACK_IMPORTED_MODULE_4__.computeHours)(data);
  hours.forEach(tick => {
    hourly_forecast.push((0,_Forecast__WEBPACK_IMPORTED_MODULE_4__.makeHourlyForecastElement)(tick));
  });
  return;
}
function showForecast() {
  let forecast_wrapper = document.querySelector('.forecastwrapper');
  let forecast_section = document.querySelector('.forecast');
  let hourly = document.querySelector('#show-hourly');
  let weekly = document.querySelector('#show-weekly');
  (0,_cleanUp__WEBPACK_IMPORTED_MODULE_6__.clearForecastContainer)();
  if (weekly.disabled) {
    forecast_section.style.justifyContent = 'center';
    daily_forecast.forEach(element => {
      forecast_section.appendChild(element);
    });
  } else if (hourly.disabled) {
    forecast_section.style.justifyContent = 'flex-start';
    hourly_forecast.forEach(element => {
      forecast_section.appendChild(element);
    });
  } else {
    return;
  }
  if (fahrenheit) {
    Array.from(document.querySelectorAll('.celsius')).forEach(ele => {
      ele.style.display = 'none';
    });
  } else {
    Array.from(document.querySelectorAll('.fahrenheit')).forEach(ele => {
      ele.style.display = 'none';
    });
  }
  forecast_wrapper.style.height = '25vh';
  let collapser = document.querySelector('.collapser');
  collapser.addEventListener('pointerdown', _collapser__WEBPACK_IMPORTED_MODULE_8__.collapseForecast);
  return;
}
function switchUnits() {
  fahrenheit = !fahrenheit;
  let temp_ele = document.querySelector('#temperature');
  let feel_ele = document.querySelector('#feel');
  if (fahrenheit) {
    temp_ele.textContent = `${Math.round(data.current.temp_f)} °F`;
    feel_ele.textContent = `Feels like: ${Math.round(data.current.feelslike_f)} °F`;

    //This is ugly, but for current lack of a better solution, it works
    //Hopefully without breaking. 23 May, 2023 14:59
    Array.from(document.querySelectorAll('.fahrenheit')).forEach(ele => {
      ele.style.display = 'inline-block';
    });
    Array.from(document.querySelectorAll('.celsius')).forEach(ele => {
      ele.style.display = 'none';
    });
    return;
  }
  temp_ele.textContent = `${Math.round(data.current.temp_c)} °C`;
  feel_ele.textContent = `Feels like: ${Math.round(data.current.feelslike_c)} °C`;
  Array.from(document.querySelectorAll('.fahrenheit')).forEach(ele => {
    ele.style.display = 'none';
  });
  Array.from(document.querySelectorAll('.celsius')).forEach(ele => {
    ele.style.display = 'inline-block';
  });
  return;
}


/***/ }),

/***/ "./src/components/widgets/backgroundControl.js":
/*!*****************************************************!*\
  !*** ./src/components/widgets/backgroundControl.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundSwitch: () => (/* binding */ backgroundSwitch)
/* harmony export */ });
/* harmony import */ var _images_clear_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/clear.jpg */ "./src/images/clear.jpg");
/* harmony import */ var _images_drizzle_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/drizzle.jpg */ "./src/images/drizzle.jpg");
/* harmony import */ var _images_cloudy_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/cloudy.jpg */ "./src/images/cloudy.jpg");
/* harmony import */ var _images_rain_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/rain.jpg */ "./src/images/rain.jpg");
/* harmony import */ var _images_snow_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/snow.jpg */ "./src/images/snow.jpg");
/* harmony import */ var _images_thunder_storm_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/thunder-storm.jpg */ "./src/images/thunder-storm.jpg");






function backgroundSwitch(cc) {
  let bg = document.querySelector('body');
  // if(cc > 999 && cc <= 1003) {
  //     bg.style.backgroundImage = `url(${clear}`;
  // } else if ((cc > 1003 && cc <= 1087) || (cc > 1134 && cc <= 1147)) {
  //     bg.style.backgroundImage = `url(${cloudy}`;
  // } else if (cc > 1149 && cc <= 1172) {
  //     bg.style.backgroundImage = `url(${drizzle}`;
  // } else if ((cc > 1179 && cc <= 1207) || (cc > 1239 && cc <= 1264)) {
  //     bg.style.backgroundImage = `url(${rain}`;
  // } else if (cc > 1209 && cc <= 1237) {
  //     bg.style.backgroundImage = `url(${snow}`;
  // } else if (cc > 1272 && cc <= 1282) {
  //     bg.style.backgroundImage = `url(${thunder}`;
  // } else{
  //     bg.style.backgroundImage = `url(${cloudy}`;
  // }
}



/***/ }),

/***/ "./src/components/widgets/favManager.js":
/*!**********************************************!*\
  !*** ./src/components/widgets/favManager.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateFavorites: () => (/* binding */ populateFavorites),
/* harmony export */   setNewFavorite: () => (/* binding */ setNewFavorite)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weather */ "./src/components/weather.js");

let favorites = [];
//Check local storage for existing favorites, if they don't exist, set favorites to empty array
if (localStorage.hasOwnProperty('favs')) {
  favorites = JSON.parse(localStorage.getItem('favs'));
}
function setNewFavorite() {
  let query = document.querySelector('.city-state').textContent;
  if (favorites.includes(query)) {
    alert('This is already favorited.');
    return;
  }
  favorites.push(query);
  localStorage.setItem('favs', JSON.stringify(favorites));
  let new_ele = newFavElement(query);
  new_ele.addEventListener('click', favClickHandler);
  document.querySelector('.fav-menu').appendChild(new_ele);
  return;
}
function populateFavorites() {
  let fav_menu = document.querySelector('.fav-menu');
  favorites.forEach(fav => {
    let fav_ele = newFavElement(fav);
    fav_ele.addEventListener('click', favClickHandler);
    fav_menu.appendChild(fav_ele);
  });
  return;
}
function newFavElement(fav) {
  let fav_div = document.createElement('div');
  fav_div.textContent = fav;
  fav_div.classList.add('favorite');
  let close = document.createElement('div');
  close.textContent = '❌';
  close.classList.add('remove-fav');
  close.addEventListener('click', removeFavEventHandler);
  fav_div.appendChild(close);
  return fav_div;
}
function removeFavEventHandler(e) {
  e.stopPropagation();
  let parent = e.target.parentNode;
  let fav_indx = favorites.indexOf(parent.textContent.slice(0, -1));
  favorites.splice(fav_indx, 1);
  localStorage.setItem('favs', JSON.stringify(favorites));
  e.target.removeEventListener('click', removeFavEventHandler);
  parent.removeEventListener('click', favClickHandler);
  parent.remove();
  console.log(localStorage.getItem('favs'));
  return;
}
function favClickHandler(e) {
  (0,_weather__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(encodeURIComponent(e.target.textContent));
}

//debug
// function clearFavorites() {
//     favorites = [];
//     localStorage.setItem('favs', JSON.stringify(favorites));
//     console.log(localStorage.getItem('favs'));
// }



/***/ }),

/***/ "./src/components/widgets/load.js":
/*!****************************************!*\
  !*** ./src/components/widgets/load.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayLoader: () => (/* binding */ displayLoader),
/* harmony export */   removeLoader: () => (/* binding */ removeLoader)
/* harmony export */ });
function displayLoader() {
  let dimmer = document.createElement('div');
  dimmer.classList.add('dimmer');
  let spinner = document.createElement('div');
  spinner.classList.add('lds-ripple');
  spinner.append(document.createElement('div'), document.createElement('div'));
  dimmer.appendChild(spinner);
  document.querySelector('body').appendChild(dimmer);
}
function removeLoader() {
  let spinner = document.querySelector('.lds-ripple');
  while (spinner.firstChild) {
    spinner.firstChild.remove();
  }
  spinner.remove();
  document.querySelector('.dimmer').remove();
}


/***/ }),

/***/ "./src/components/widgets/winSize.js":
/*!*******************************************!*\
  !*** ./src/components/widgets/winSize.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   winObserver: () => (/* binding */ winObserver)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weather */ "./src/components/weather.js");

let winObserver = new ResizeObserver(entries => {
  for (const entry of entries) {
    if (entry.target.clientWidth < 600) {
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
    }
    ;
    if (entry.target.clientWidth > 600) {
      let search_div = document.querySelector('.search-area');
      let target_div = document.querySelector('.heading');
      target_div.append(search_div);
      let forecast_sect = document.querySelector('.forecast');
      document.querySelector('.forecastwrapper').append(forecast_sect);
      document.querySelector('#mobile-faves').style.display = 'none';
      let fav_container = document.querySelector('.favorites-container');
      fav_container.removeAttribute('style');
    }
    ;
    //entry.target.clientWidth < 800 ? mobile_on = true : mobile_on = false;
  }
});

winObserver.observe(document.body);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/widgets/loader.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/widgets/loader.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*Credits: .lds-ripple from https://loading.io/css/*/\n\n.dimmer {\n    min-height:100vh;\n    min-width:100vw;\n    background-color: rgba(0, 0, 0, 0.555);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    z-index: 4;\n}\n\n.lds-ripple {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ripple div {\n    position: absolute;\n    border: 4px solid #fff;\n    opacity: 1;\n    border-radius: 50%;\n    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n  .lds-ripple div:nth-child(2) {\n    animation-delay: -0.5s;\n  }\n  @keyframes lds-ripple {\n    0% {\n      top: 36px;\n      left: 36px;\n      width: 0;\n      height: 0;\n      opacity: 0;\n    }\n    4.9% {\n      top: 36px;\n      left: 36px;\n      width: 0;\n      height: 0;\n      opacity: 0;\n    }\n    5% {\n      top: 36px;\n      left: 36px;\n      width: 0;\n      height: 0;\n      opacity: 1;\n    }\n    100% {\n      top: 0px;\n      left: 0px;\n      width: 72px;\n      height: 72px;\n      opacity: 0;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/components/widgets/loader.css"],"names":[],"mappings":"AAAA,oDAAoD;;AAEpD;IACI,gBAAgB;IAChB,eAAe;IACf,sCAAsC;IACtC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,WAAW;IACX,YAAY;EACd;EACA;IACE,kBAAkB;IAClB,sBAAsB;IACtB,UAAU;IACV,kBAAkB;IAClB,8DAA8D;EAChE;EACA;IACE,sBAAsB;EACxB;EACA;IACE;MACE,SAAS;MACT,UAAU;MACV,QAAQ;MACR,SAAS;MACT,UAAU;IACZ;IACA;MACE,SAAS;MACT,UAAU;MACV,QAAQ;MACR,SAAS;MACT,UAAU;IACZ;IACA;MACE,SAAS;MACT,UAAU;MACV,QAAQ;MACR,SAAS;MACT,UAAU;IACZ;IACA;MACE,QAAQ;MACR,SAAS;MACT,WAAW;MACX,YAAY;MACZ,UAAU;IACZ;EACF","sourcesContent":["/*Credits: .lds-ripple from https://loading.io/css/*/\n\n.dimmer {\n    min-height:100vh;\n    min-width:100vw;\n    background-color: rgba(0, 0, 0, 0.555);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    z-index: 4;\n}\n\n.lds-ripple {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ripple div {\n    position: absolute;\n    border: 4px solid #fff;\n    opacity: 1;\n    border-radius: 50%;\n    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n  .lds-ripple div:nth-child(2) {\n    animation-delay: -0.5s;\n  }\n  @keyframes lds-ripple {\n    0% {\n      top: 36px;\n      left: 36px;\n      width: 0;\n      height: 0;\n      opacity: 0;\n    }\n    4.9% {\n      top: 36px;\n      left: 36px;\n      width: 0;\n      height: 0;\n      opacity: 0;\n    }\n    5% {\n      top: 36px;\n      left: 36px;\n      width: 0;\n      height: 0;\n      opacity: 1;\n    }\n    100% {\n      top: 0px;\n      left: 0px;\n      width: 72px;\n      height: 72px;\n      opacity: 0;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/futur.ttf */ "./src/fonts/futur.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mountains.jpg */ "./src/images/mountains.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/double-arrow-down-svgrepo-com.svg */ "./src/images/double-arrow-down-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'futura';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 12%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n:root {\n\t--main-gradient: linear-gradient(180deg, rgba(17, 1, 43, 0.842) 37%, rgba(0, 16, 59, 0.842) 99%);\n\t--svg-filter: invert(99%) sepia(3%) saturate(1%) hue-rotate(117deg) brightness(119%) contrast(100%);\n\t--main-font-color: #f5f3ff;\n\t--secondary-color: #0100031c;\n\t--tertiary-color: #1e073794;\n\t--button-color: #1E0737;\n\t--button-disabled: linear-gradient(94deg, rgba(0,0,0,1) 15%, rgba(66,66,66,1) 89%);\n\t--button-disabled-text: black;\n\t--button-gradient: linear-gradient(133deg, rgba(23,2,51,1) 15%, rgba(68,46,101,1) 89%);\n\n\t--fs-reg: clamp(.6rem, .8vw, 1rem);\n\t--fs-fore: clamp(.5rem, 1vw, 1rem);\n\t--fs-big: clamp(.8rem, 1vw, 1.5rem);\n\t--fs-font-small: clamp(.5rem, .8vw, .9rem);\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-size: cover;\n\ttransition: flex 2s;\n\tbackground: var(--main-gradient), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\tbackground-size: cover;\n\tfont-family: 'futura', Arial, Helvetica, sans-serif;\n}\n\nbutton {\n\tborder:none;\n\tborder-radius: 8px;\n\theight: 2rem;\n\tbackground: var(--button-gradient);\n\tcolor: var(--main-font-color);\n}\n\nbutton:hover {\n\tcursor: pointer;\n}\n\nbutton:disabled:hover {\n\tcursor: default;\n}\n\nbutton:disabled {\n\tbackground: var(--button-disabled);\n\tcolor: rgb(150, 150, 150);\n}\n\n.heading {\n\tdisplay:flex;\n\talign-items: center;\n\theight: 8vh;\n\tjustify-content: space-between;\n\tflex:none;\n}\n\n#unit-toggle {\n\tmargin-left: 1rem;\n\tpadding: 0rem;\n\tfont-size: clamp(.7rem, 1vw, 1.2rem);\n\tfont-weight: bold;\n\twidth: clamp(100px, 12.8vw, 300px);\n\theight: 40px;\n}\n\n.search-area {\n\tdisplay:flex;\n\talign-items: center;\n\tmargin-right: 1rem;\n}\n\n#search-form {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tposition:relative;\n}\n\n#search-form label {\n\tvertical-align: baseline;\n\tfont-size: 1.5rem;\n}\n\n#search-icon {\n\theight: clamp(.9rem, 1.2vw, 2rem);\n\tfilter: var(--svg-filter);\n}\n\n#search {\n\theight: 1.5rem;\n\twidth: 25vw;\n\tfont-size: var(--fs-reg);\n\tpadding: .1rem .5rem;\n\tborder-radius: .2rem;\n\tborder-style: none;\n\tborder-bottom: 2px solid rgba(0, 0, 0, 0.445);\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n\tcolor: var(--main-font-color);\n}\n\n#search::placeholder {\n\tcolor:var(--main-font-color);\n}\n\n#search:focus {\n\toutline: none;\n}\n\n#search-button {\n\twidth: 5vw;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n}\n\n#error {\n\tcolor: red;\n\tposition: absolute;\n\tleft: 10%;\n\ttop: 90%;\n\tfont-size: .8rem;\n}\n\n#mobile-faves {\n\theight: 2rem;\n\taspect-ratio: 1/1;\n\tdisplay:none;\n}\n\n.main-weather {\n\tflex: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 15%;\n}\n\n.details-wrapper{\n\theight: 300px;\n\twidth: 400px;\n\tbackground-color: rgba(207, 230, 250, 0);\n\tposition:relative;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tpadding: 1rem 50px;\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr 10%;\n\tgap: .5rem;\n}\n\n.location-wrapper {\n\theight:100%;\n\twidth: 100%;\n\tbackground-color: rgba(218, 218, 218, 0);\n\tpadding: 4px;\n\tborder-radius: 1rem;\n\tcolor:var(--main-font-color);\n}\n\n.cs-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.city-state {\n\tfont-size: var(--fs-big);\n\tword-wrap: break-word;\n\tfont-weight: 600;\n\tmargin-left: 5%;\n}\n\n.country {\n\tfont-size: var(--fs-reg);\n\tfont-weight: 600;\n\tmargin-top: 4px;\n\tmargin-left: 5%;\n}\n\n\n.temp-wrapper {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 1rem;\n\tbackground-color: #9e788f00;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tposition:relative;\n\tbox-sizing: border-box;\n\tpadding: 1rem;\n\tcolor:var(--main-font-color);\n}\n\n.temp-icon-wrapper {\n\tdisplay:flex;\n\twidth: 100%;\n\talign-items: center;\n}\n\n.w-icon-small {\n\twidth:clamp(2rem, 2vw,  200px);\n\taspect-ratio: 1 /1;\n}\n\n.last-update {\n\tpadding: 1rem 0;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\ttext-decoration: underline;\n\tfont-size: var(--fs-reg);\n}\n\n#temperature {\n\tfont-size: clamp(2rem, 4vw, 5rem);\n}\n\n#ticker {\n    height: 1.5rem;\n    width: 100%;\n    border-radius: 4px;\n\toverflow-x: hidden;\n\toverflow-y: hidden;\n\tcolor:var(--main-font-color);\n}\n\n.ticker-text {\n\tdisplay: flex;\n\tgap: 1rem;\n\talign-items: center;\n\theight: 100%;\n\tanimation: tick-right 15s linear infinite;\n\twhite-space: nowrap;\n\tfont-size: var(--fs-reg);\n}\n\n.ticker-text li {\n\twidth: 100%;\n\tpadding-right: 1rem;\n\tborder-right: 1px solid var(--main-font-color);\n}\n\n\n.ticker-text li:first-of-type {\n\tpadding-left: 1rem;\n\tborder-left: 1px solid var(--main-font-color);\n}\n\n.button-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n#show-weekly,\n#show-hourly {\n\tfont-size: var(--fs-font-small);\n}\n\n#fav-icon {\n\theight: clamp(1rem, 2vw, 5rem);\n\taspect-ratio: 1/1;\n\tfilter: var(--svg-filter);\n}\n\n#fav-icon:hover {\n\tcursor: pointer;\n}\n\n.favorites-container {\n\theight:400px;\n\twidth: 600px;\n\tflex-shrink: 1;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: var(--main-font-color);\n\tbackground-color: var(--secondary-color);\n\tborder: 2px solid var(--secondary-color);\n}\n\n.favorites-container>h1 {\n\tfont-size: clamp(1rem, 2vw, 2.5rem );\n\tpadding: 1rem 1rem;\n\tborder-bottom: 1px solid black;\n}\n\n.fav-menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-auto-rows: 75px;\n\toverflow-y: auto;\n\tflex: auto;\n\tgap:1rem;\n\tpadding: 1rem;\n}\n\n.favorite {\n\twidth:100%;\n\theight:100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: var(--tertiary-color);\n\tborder-radius: 1rem;\n\ttext-align: center;\n\tposition: relative;\n\tuser-select: none;\n\tpadding: 0 .5rem;\n\tbox-sizing: border-box;\n\toverflow-y: hidden;\n\ttext-overflow: ellipsis;\n\ttransition: transform .5s ease-in;\n\tfont-size: var(--fs-reg);\n}\n\n.favorite:hover {\n\ttransform: scale(110%);\n}\n\n.remove-fav {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 7%;\n\tright:5%;\n\tfont-size: .9rem;\n\tpadding: 1px 4px;\n\tcolor: grey;\n}\n\n.remove-fav:hover{\n\tcursor: pointer;\n}\n\n.forecastwrapper {\n\theight:0vh;\n\ttransition: height .5s;\n}\n\n.collapser {\n\theight: 10%;\n\taspect-ratio: 1 / 1;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n\toverflow:hidden;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n}\n\n.forecast {\n\theight: 90%;\n\tdisplay: flex;\n\talign-items: center;\n\toverflow-x: auto;\n\tgap: 4vw;\n\tpadding: 0 2rem;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n}\n\n.forecast-element {\n\twidth: 12%;\n\theight: 80%;\n\tbackground-color: #71677c41;\n\tcolor: var(--main-font-color);\n\tflex-shrink: 0;\n\tborder-radius: 1rem;\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.forecast-header {\n\tfont-size: var(--fs-fore);\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\n.icon-forecast {\n\tflex-shrink: 1;\n\theight: 40%;\n\taspect-ratio: 1/1;\n\tborder-radius: 1rem;\n}\n\n.forecast-detail-wrapper {\n\tborder-radius: 4px;\n\twidth:90%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: var(--fs-reg);\n\tfont-weight: bold;\n}\n\n.mobile-hour-forecast {\n\tmin-height: 200px;\n\tbackground-color: rgba(185, 220, 252, 0.623);\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 90%;\n\toverflow-x: auto;\n}\n\n@keyframes tick-right {\n\t0% {\n\t\ttransform: translateX(125%);\n\t}\n\t100% {\n\t\ttransform: translateX(-275%);\n\t}\n}\n\n@media screen and (max-width: 1280px) {\n\t.main-weather {\n\t\tgap: 5%;\n\t}\n\t.details-wrapper {\n\t\theight:250px;\n\t\tgrid-template-rows: auto 40% 10%;\n\t}\n\t.w-icon-small {\n\t\tright:30%;\n\t\ttop:1%;\n\t}\n\t.favorites-container {\n\t\tmargin-right: 4rem;\n\t\theight: 50vh;\n\t}\n\t.forecast-element {\n\t\twidth: 150px;\n\t\tpadding: 0 1rem;\n\t}\n\t#search-button {\n\t\twidth: 100px;\n\t}\n\t#search {\n\t\tfont-size: 1rem;\n\t}\n\t.fav-menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n\t\tgrid-auto-rows: 50px;\n\t}\n\n\t.remove-fav {\n\t\ttop: 5%;\n\t\tright: 3%;\n\t\tfont-size: .7rem;\n\t}\n\n\t.forecast-element {\n\t\theight: 75%;\n\t\twidth:auto;\n\t\taspect-ratio: 1 / 1;\n\t}\n\t\n\t.icon-forecast {\n\t\tflex-shrink: 1;\n\t\theight: 30%;\n\t\taspect-ratio: 1/1;\n\t\tborder-radius: 1rem;\n\t}\n}\n\n@media only screen and (max-width: 600px) {\n\tbody{\n\t\tbackground-attachment: fixed;\n\t}\n\n\t.search-area {\n\t\tmargin-right: 0;\n\t}\n\n\t#search-form {\n\t\tgap: .5rem;\n\t\twidth:100%;\n\t}\n\n\t#search-icon {\n\t\theight:1.2rem;\n\t}\n\n\t#search {\n\t\twidth: 125px;\n\t\tfont-size: .8rem;\n\t}\n\n\t#search-button {\n\t\twidth: 75px;\n\t\theight:1rem;\n\t\tfont-size: .8rem;\n\t}\n\n\t.main-weather {\n\t\tflex-direction: column;\n\t\tgap: 0;\n\t\tflex:content;\n\t\talign-content: flex-start;\n\t}\n\n\t.details-wrapper {\n\t\tgrid-template-rows: auto 1fr auto auto;\n\t\theight: auto;\n\t\twidth:100%;\n\t}\n\n\t.cs-wrapper {\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t}\n\n\t.temp-wrapper {\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\n\t.temp-icon-wrapper {\n\t\tjustify-content: center;\n\t}\n\n\t.city-state {\n\t\tfont-size: 1rem;\n\t\tmargin-left: 0;\n\t}\n\n\t.country {\n\t\ttext-align: center;\n\t\tmargin-left: 0;\n\t}\n\n\t.w-icon-small {\n\t\twidth: 15%;\n\t}\n\n\t.favorites-container {\n\t\twidth:0px;\n\t\theight: 0px;\n\t\toverflow-x:hidden;\n\t\ttransition: all 1s;\n\t\tborder-radius: 0;\n\t\tborder:none;\n\t\tbackground-color: #010003ea;\n\t}\n\n\t.favorites-container h1 {\n\t\tfont-size: 1rem;\n\t}\n\n\t#ticker {\n\t\theight:100%;\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.ticker-text {\n\t\tflex-direction: column;\n\t\tanimation: none;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twhite-space: normal;\n\t\tgap:0;\n\t}\n\n\t.ticker-text li {\n\t\tborder-top: 1px solid black;\n\t\tpadding-right: 0;\n\t\tpadding-top: .4rem;\n\t\tpadding-bottom: .4rem;\n\t\tborder-right: none;\n\t\theight: 1.5rem;\n\t\tdisplay:flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 1rem;\n\t}\n\n\t.ticker-text li:first-of-type {\n\t\tpadding-left: 0%;\n\t\tborder-left: none;\n\t\tborder-top: none;\n\t}\n\n\t.forecastwrapper {\n\t\twidth: 60%;\n\t}\n\n\t.forecast {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tflex-direction: column;\n\t\tbox-sizing: border-box;\n\t\toverflow-x: hidden;\n\t}\n\n\t.forecast-element {\n\t\tflex-direction: row;\n\t\twidth: 90%;\n\t\theight: 25%;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t}\n\n\t/* .icon-forecast {\n\t\theight: 3rem;\n\t}\n\n\t.forecast-header {\n\t\tfont-size: 1rem;\n\t}\n\n\t.forecast-detail-wrapper {\n\t\twidth: 40%;\n\t} */\n\n\t#error \t{\n\t\ttop: 110%;\n\t\tfont-size: .7rem;\n\t}\n}\n\n/* ===== Scrollbar CSS ===== */\n  /* Firefox */\n  * {\n    scrollbar-width: thin;\n    scrollbar-color: #856dad #090111;\n  }\n\n  /* Chrome, Edge, and Safari */\n  *::-webkit-scrollbar {\n    width: 4px;\n\theight: 7px;\n  }\n\n  *::-webkit-scrollbar-track {\n    background: #090111;\n  }\n\n  *::-webkit-scrollbar-thumb {\n    background-color: #856dad;\n    border-radius: 10px;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: 'futura';\n\tsrc: url('./fonts/futur.ttf');\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 12%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n:root {\n\t--main-gradient: linear-gradient(180deg, rgba(17, 1, 43, 0.842) 37%, rgba(0, 16, 59, 0.842) 99%);\n\t--svg-filter: invert(99%) sepia(3%) saturate(1%) hue-rotate(117deg) brightness(119%) contrast(100%);\n\t--main-font-color: #f5f3ff;\n\t--secondary-color: #0100031c;\n\t--tertiary-color: #1e073794;\n\t--button-color: #1E0737;\n\t--button-disabled: linear-gradient(94deg, rgba(0,0,0,1) 15%, rgba(66,66,66,1) 89%);\n\t--button-disabled-text: black;\n\t--button-gradient: linear-gradient(133deg, rgba(23,2,51,1) 15%, rgba(68,46,101,1) 89%);\n\n\t--fs-reg: clamp(.6rem, .8vw, 1rem);\n\t--fs-fore: clamp(.5rem, 1vw, 1rem);\n\t--fs-big: clamp(.8rem, 1vw, 1.5rem);\n\t--fs-font-small: clamp(.5rem, .8vw, .9rem);\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-size: cover;\n\ttransition: flex 2s;\n\tbackground: var(--main-gradient), url(./images/mountains.jpg);\n\tbackground-size: cover;\n\tfont-family: 'futura', Arial, Helvetica, sans-serif;\n}\n\nbutton {\n\tborder:none;\n\tborder-radius: 8px;\n\theight: 2rem;\n\tbackground: var(--button-gradient);\n\tcolor: var(--main-font-color);\n}\n\nbutton:hover {\n\tcursor: pointer;\n}\n\nbutton:disabled:hover {\n\tcursor: default;\n}\n\nbutton:disabled {\n\tbackground: var(--button-disabled);\n\tcolor: rgb(150, 150, 150);\n}\n\n.heading {\n\tdisplay:flex;\n\talign-items: center;\n\theight: 8vh;\n\tjustify-content: space-between;\n\tflex:none;\n}\n\n#unit-toggle {\n\tmargin-left: 1rem;\n\tpadding: 0rem;\n\tfont-size: clamp(.7rem, 1vw, 1.2rem);\n\tfont-weight: bold;\n\twidth: clamp(100px, 12.8vw, 300px);\n\theight: 40px;\n}\n\n.search-area {\n\tdisplay:flex;\n\talign-items: center;\n\tmargin-right: 1rem;\n}\n\n#search-form {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tposition:relative;\n}\n\n#search-form label {\n\tvertical-align: baseline;\n\tfont-size: 1.5rem;\n}\n\n#search-icon {\n\theight: clamp(.9rem, 1.2vw, 2rem);\n\tfilter: var(--svg-filter);\n}\n\n#search {\n\theight: 1.5rem;\n\twidth: 25vw;\n\tfont-size: var(--fs-reg);\n\tpadding: .1rem .5rem;\n\tborder-radius: .2rem;\n\tborder-style: none;\n\tborder-bottom: 2px solid rgba(0, 0, 0, 0.445);\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n\tcolor: var(--main-font-color);\n}\n\n#search::placeholder {\n\tcolor:var(--main-font-color);\n}\n\n#search:focus {\n\toutline: none;\n}\n\n#search-button {\n\twidth: 5vw;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n}\n\n#error {\n\tcolor: red;\n\tposition: absolute;\n\tleft: 10%;\n\ttop: 90%;\n\tfont-size: .8rem;\n}\n\n#mobile-faves {\n\theight: 2rem;\n\taspect-ratio: 1/1;\n\tdisplay:none;\n}\n\n.main-weather {\n\tflex: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 15%;\n}\n\n.details-wrapper{\n\theight: 300px;\n\twidth: 400px;\n\tbackground-color: rgba(207, 230, 250, 0);\n\tposition:relative;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tpadding: 1rem 50px;\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr 10%;\n\tgap: .5rem;\n}\n\n.location-wrapper {\n\theight:100%;\n\twidth: 100%;\n\tbackground-color: rgba(218, 218, 218, 0);\n\tpadding: 4px;\n\tborder-radius: 1rem;\n\tcolor:var(--main-font-color);\n}\n\n.cs-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.city-state {\n\tfont-size: var(--fs-big);\n\tword-wrap: break-word;\n\tfont-weight: 600;\n\tmargin-left: 5%;\n}\n\n.country {\n\tfont-size: var(--fs-reg);\n\tfont-weight: 600;\n\tmargin-top: 4px;\n\tmargin-left: 5%;\n}\n\n\n.temp-wrapper {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 1rem;\n\tbackground-color: #9e788f00;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tposition:relative;\n\tbox-sizing: border-box;\n\tpadding: 1rem;\n\tcolor:var(--main-font-color);\n}\n\n.temp-icon-wrapper {\n\tdisplay:flex;\n\twidth: 100%;\n\talign-items: center;\n}\n\n.w-icon-small {\n\twidth:clamp(2rem, 2vw,  200px);\n\taspect-ratio: 1 /1;\n}\n\n.last-update {\n\tpadding: 1rem 0;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\ttext-decoration: underline;\n\tfont-size: var(--fs-reg);\n}\n\n#temperature {\n\tfont-size: clamp(2rem, 4vw, 5rem);\n}\n\n#ticker {\n    height: 1.5rem;\n    width: 100%;\n    border-radius: 4px;\n\toverflow-x: hidden;\n\toverflow-y: hidden;\n\tcolor:var(--main-font-color);\n}\n\n.ticker-text {\n\tdisplay: flex;\n\tgap: 1rem;\n\talign-items: center;\n\theight: 100%;\n\tanimation: tick-right 15s linear infinite;\n\twhite-space: nowrap;\n\tfont-size: var(--fs-reg);\n}\n\n.ticker-text li {\n\twidth: 100%;\n\tpadding-right: 1rem;\n\tborder-right: 1px solid var(--main-font-color);\n}\n\n\n.ticker-text li:first-of-type {\n\tpadding-left: 1rem;\n\tborder-left: 1px solid var(--main-font-color);\n}\n\n.button-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n#show-weekly,\n#show-hourly {\n\tfont-size: var(--fs-font-small);\n}\n\n#fav-icon {\n\theight: clamp(1rem, 2vw, 5rem);\n\taspect-ratio: 1/1;\n\tfilter: var(--svg-filter);\n}\n\n#fav-icon:hover {\n\tcursor: pointer;\n}\n\n.favorites-container {\n\theight:400px;\n\twidth: 600px;\n\tflex-shrink: 1;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: var(--main-font-color);\n\tbackground-color: var(--secondary-color);\n\tborder: 2px solid var(--secondary-color);\n}\n\n.favorites-container>h1 {\n\tfont-size: clamp(1rem, 2vw, 2.5rem );\n\tpadding: 1rem 1rem;\n\tborder-bottom: 1px solid black;\n}\n\n.fav-menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-auto-rows: 75px;\n\toverflow-y: auto;\n\tflex: auto;\n\tgap:1rem;\n\tpadding: 1rem;\n}\n\n.favorite {\n\twidth:100%;\n\theight:100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: var(--tertiary-color);\n\tborder-radius: 1rem;\n\ttext-align: center;\n\tposition: relative;\n\tuser-select: none;\n\tpadding: 0 .5rem;\n\tbox-sizing: border-box;\n\toverflow-y: hidden;\n\ttext-overflow: ellipsis;\n\ttransition: transform .5s ease-in;\n\tfont-size: var(--fs-reg);\n}\n\n.favorite:hover {\n\ttransform: scale(110%);\n}\n\n.remove-fav {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 7%;\n\tright:5%;\n\tfont-size: .9rem;\n\tpadding: 1px 4px;\n\tcolor: grey;\n}\n\n.remove-fav:hover{\n\tcursor: pointer;\n}\n\n.forecastwrapper {\n\theight:0vh;\n\ttransition: height .5s;\n}\n\n.collapser {\n\theight: 10%;\n\taspect-ratio: 1 / 1;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n\toverflow:hidden;\n\tbackground-image: url('./images/double-arrow-down-svgrepo-com.svg');\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n}\n\n.forecast {\n\theight: 90%;\n\tdisplay: flex;\n\talign-items: center;\n\toverflow-x: auto;\n\tgap: 4vw;\n\tpadding: 0 2rem;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n}\n\n.forecast-element {\n\twidth: 12%;\n\theight: 80%;\n\tbackground-color: #71677c41;\n\tcolor: var(--main-font-color);\n\tflex-shrink: 0;\n\tborder-radius: 1rem;\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.forecast-header {\n\tfont-size: var(--fs-fore);\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\n.icon-forecast {\n\tflex-shrink: 1;\n\theight: 40%;\n\taspect-ratio: 1/1;\n\tborder-radius: 1rem;\n}\n\n.forecast-detail-wrapper {\n\tborder-radius: 4px;\n\twidth:90%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: var(--fs-reg);\n\tfont-weight: bold;\n}\n\n.mobile-hour-forecast {\n\tmin-height: 200px;\n\tbackground-color: rgba(185, 220, 252, 0.623);\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 90%;\n\toverflow-x: auto;\n}\n\n@keyframes tick-right {\n\t0% {\n\t\ttransform: translateX(125%);\n\t}\n\t100% {\n\t\ttransform: translateX(-275%);\n\t}\n}\n\n@media screen and (max-width: 1280px) {\n\t.main-weather {\n\t\tgap: 5%;\n\t}\n\t.details-wrapper {\n\t\theight:250px;\n\t\tgrid-template-rows: auto 40% 10%;\n\t}\n\t.w-icon-small {\n\t\tright:30%;\n\t\ttop:1%;\n\t}\n\t.favorites-container {\n\t\tmargin-right: 4rem;\n\t\theight: 50vh;\n\t}\n\t.forecast-element {\n\t\twidth: 150px;\n\t\tpadding: 0 1rem;\n\t}\n\t#search-button {\n\t\twidth: 100px;\n\t}\n\t#search {\n\t\tfont-size: 1rem;\n\t}\n\t.fav-menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n\t\tgrid-auto-rows: 50px;\n\t}\n\n\t.remove-fav {\n\t\ttop: 5%;\n\t\tright: 3%;\n\t\tfont-size: .7rem;\n\t}\n\n\t.forecast-element {\n\t\theight: 75%;\n\t\twidth:auto;\n\t\taspect-ratio: 1 / 1;\n\t}\n\t\n\t.icon-forecast {\n\t\tflex-shrink: 1;\n\t\theight: 30%;\n\t\taspect-ratio: 1/1;\n\t\tborder-radius: 1rem;\n\t}\n}\n\n@media only screen and (max-width: 600px) {\n\tbody{\n\t\tbackground-attachment: fixed;\n\t}\n\n\t.search-area {\n\t\tmargin-right: 0;\n\t}\n\n\t#search-form {\n\t\tgap: .5rem;\n\t\twidth:100%;\n\t}\n\n\t#search-icon {\n\t\theight:1.2rem;\n\t}\n\n\t#search {\n\t\twidth: 125px;\n\t\tfont-size: .8rem;\n\t}\n\n\t#search-button {\n\t\twidth: 75px;\n\t\theight:1rem;\n\t\tfont-size: .8rem;\n\t}\n\n\t.main-weather {\n\t\tflex-direction: column;\n\t\tgap: 0;\n\t\tflex:content;\n\t\talign-content: flex-start;\n\t}\n\n\t.details-wrapper {\n\t\tgrid-template-rows: auto 1fr auto auto;\n\t\theight: auto;\n\t\twidth:100%;\n\t}\n\n\t.cs-wrapper {\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t}\n\n\t.temp-wrapper {\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\n\t.temp-icon-wrapper {\n\t\tjustify-content: center;\n\t}\n\n\t.city-state {\n\t\tfont-size: 1rem;\n\t\tmargin-left: 0;\n\t}\n\n\t.country {\n\t\ttext-align: center;\n\t\tmargin-left: 0;\n\t}\n\n\t.w-icon-small {\n\t\twidth: 15%;\n\t}\n\n\t.favorites-container {\n\t\twidth:0px;\n\t\theight: 0px;\n\t\toverflow-x:hidden;\n\t\ttransition: all 1s;\n\t\tborder-radius: 0;\n\t\tborder:none;\n\t\tbackground-color: #010003ea;\n\t}\n\n\t.favorites-container h1 {\n\t\tfont-size: 1rem;\n\t}\n\n\t#ticker {\n\t\theight:100%;\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.ticker-text {\n\t\tflex-direction: column;\n\t\tanimation: none;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twhite-space: normal;\n\t\tgap:0;\n\t}\n\n\t.ticker-text li {\n\t\tborder-top: 1px solid black;\n\t\tpadding-right: 0;\n\t\tpadding-top: .4rem;\n\t\tpadding-bottom: .4rem;\n\t\tborder-right: none;\n\t\theight: 1.5rem;\n\t\tdisplay:flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 1rem;\n\t}\n\n\t.ticker-text li:first-of-type {\n\t\tpadding-left: 0%;\n\t\tborder-left: none;\n\t\tborder-top: none;\n\t}\n\n\t.forecastwrapper {\n\t\twidth: 60%;\n\t}\n\n\t.forecast {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tflex-direction: column;\n\t\tbox-sizing: border-box;\n\t\toverflow-x: hidden;\n\t}\n\n\t.forecast-element {\n\t\tflex-direction: row;\n\t\twidth: 90%;\n\t\theight: 25%;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t}\n\n\t/* .icon-forecast {\n\t\theight: 3rem;\n\t}\n\n\t.forecast-header {\n\t\tfont-size: 1rem;\n\t}\n\n\t.forecast-detail-wrapper {\n\t\twidth: 40%;\n\t} */\n\n\t#error \t{\n\t\ttop: 110%;\n\t\tfont-size: .7rem;\n\t}\n}\n\n/* ===== Scrollbar CSS ===== */\n  /* Firefox */\n  * {\n    scrollbar-width: thin;\n    scrollbar-color: #856dad #090111;\n  }\n\n  /* Chrome, Edge, and Safari */\n  *::-webkit-scrollbar {\n    width: 4px;\n\theight: 7px;\n  }\n\n  *::-webkit-scrollbar-track {\n    background: #090111;\n  }\n\n  *::-webkit-scrollbar-thumb {\n    background-color: #856dad;\n    border-radius: 10px;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./src/components/widgets/loader.css":
/*!*******************************************!*\
  !*** ./src/components/widgets/loader.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./loader.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/widgets/loader.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/futur.ttf":
/*!*****************************!*\
  !*** ./src/fonts/futur.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "71d20cae1da6df8d2a23.ttf";

/***/ }),

/***/ "./src/images/clear.jpg":
/*!******************************!*\
  !*** ./src/images/clear.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a0892d222c8dc2c78bf9.jpg";

/***/ }),

/***/ "./src/images/cloudy.jpg":
/*!*******************************!*\
  !*** ./src/images/cloudy.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f490a66cb8d9154b9ded.jpg";

/***/ }),

/***/ "./src/images/double-arrow-down-svgrepo-com.svg":
/*!******************************************************!*\
  !*** ./src/images/double-arrow-down-svgrepo-com.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b681f633be9110bb2549.svg";

/***/ }),

/***/ "./src/images/drizzle.jpg":
/*!********************************!*\
  !*** ./src/images/drizzle.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5344c748acf0adbeeb55.jpg";

/***/ }),

/***/ "./src/images/fav.svg":
/*!****************************!*\
  !*** ./src/images/fav.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "643b37b944493c01ad1b.svg";

/***/ }),

/***/ "./src/images/faves.svg":
/*!******************************!*\
  !*** ./src/images/faves.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "50f533d376f3e4bb0f96.svg";

/***/ }),

/***/ "./src/images/mountains.jpg":
/*!**********************************!*\
  !*** ./src/images/mountains.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f13faf64977d484479a3.jpg";

/***/ }),

/***/ "./src/images/placeholder.png":
/*!************************************!*\
  !*** ./src/images/placeholder.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "53c9d24ded60efad3f85.png";

/***/ }),

/***/ "./src/images/rain.jpg":
/*!*****************************!*\
  !*** ./src/images/rain.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4da13acfe0bcecc2ca8f.jpg";

/***/ }),

/***/ "./src/images/search.svg":
/*!*******************************!*\
  !*** ./src/images/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54ff7732bb1a5ff166c6.svg";

/***/ }),

/***/ "./src/images/snow.jpg":
/*!*****************************!*\
  !*** ./src/images/snow.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6d2bcd53c514ed06c240.jpg";

/***/ }),

/***/ "./src/images/thunder-storm.jpg":
/*!**************************************!*\
  !*** ./src/images/thunder-storm.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ee2ae43d74c0507ed822.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_widgets_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/widgets/loader.css */ "./src/components/widgets/loader.css");
/* harmony import */ var _images_fav_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/fav.svg */ "./src/images/fav.svg");
/* harmony import */ var _images_search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/search.svg */ "./src/images/search.svg");
/* harmony import */ var _images_faves_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/faves.svg */ "./src/images/faves.svg");
/* harmony import */ var _components_weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/weather */ "./src/components/weather.js");
/* harmony import */ var _components_cleanUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cleanUp */ "./src/components/cleanUp.js");
/* harmony import */ var _components_widgets_winSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/widgets/winSize */ "./src/components/widgets/winSize.js");
/* harmony import */ var _components_widgets_favManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/widgets/favManager */ "./src/components/widgets/favManager.js");









let daily_forecast_btn = document.querySelector('#show-weekly');
let hourly_forecast_btn = document.querySelector('#show-hourly');
let m_faves_active = false;
function prepForFetch() {
  let query = document.querySelector('#search');
  let e_span = document.querySelector('#error');
  if (query.value === '') {
    e_span.textContent = "Please enter a location!";
    return;
  } else {
    e_span.textContent = "";
  }
  (0,_components_weather__WEBPACK_IMPORTED_MODULE_5__.fetchWeather)(encodeURIComponent(query.value));
  return;
}
window.addEventListener('load', event => {
  document.querySelector('#fav-icon').src = _images_fav_svg__WEBPACK_IMPORTED_MODULE_2__;
  document.querySelector('#search-icon').src = _images_search_svg__WEBPACK_IMPORTED_MODULE_3__;
  document.querySelector('#mobile-faves').src = _images_faves_svg__WEBPACK_IMPORTED_MODULE_4__;
  if (localStorage.hasOwnProperty('favs')) {
    (0,_components_widgets_favManager__WEBPACK_IMPORTED_MODULE_8__.populateFavorites)();
  }
  if (localStorage.hasOwnProperty('current')) {
    (0,_components_weather__WEBPACK_IMPORTED_MODULE_5__.fetchWeather)(localStorage.getItem('current'));
    return;
  }
  (0,_components_weather__WEBPACK_IMPORTED_MODULE_5__.fetchWeather)('Jersey+City');
});
document.querySelector('#unit-toggle').addEventListener('pointerdown', _components_weather__WEBPACK_IMPORTED_MODULE_5__.switchUnits);
document.querySelector('#search-form').addEventListener('submit', event => {
  event.preventDefault();
  prepForFetch();
});
daily_forecast_btn.addEventListener('pointerdown', event => {
  daily_forecast_btn.disabled = true;
  if (hourly_forecast_btn.disabled) {
    hourly_forecast_btn.disabled = false;
  }
  (0,_components_weather__WEBPACK_IMPORTED_MODULE_5__.showForecast)(event);
  return;
});
hourly_forecast_btn.addEventListener('pointerdown', event => {
  hourly_forecast_btn.disabled = true;
  if (daily_forecast_btn.disabled) {
    daily_forecast_btn.disabled = false;
  }
  (0,_components_weather__WEBPACK_IMPORTED_MODULE_5__.showForecast)(event);
  return;
});
document.querySelector('#fav-icon').addEventListener('pointerdown', event => {
  (0,_components_widgets_favManager__WEBPACK_IMPORTED_MODULE_8__.setNewFavorite)();
});
document.querySelector('#mobile-faves').addEventListener('pointerdown', event => {
  let fav_container = document.querySelector('.favorites-container');
  if (!m_faves_active) {
    fav_container.style.height = '91vh';
    m_faves_active = true;
    return;
  }
  fav_container.style.height = '0';
  m_faves_active = false;
  return;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFL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QUMsYUFBYSxFQUFHdEUsS0FBSyxJQUFLO0VBQy9FLElBQUkySCxhQUFhLEdBQUdsTCxRQUFRLENBQUNtRCxhQUFhLENBQUMsc0JBQXNCLENBQUM7RUFDbEUsSUFBSSxDQUFDNkksY0FBYyxFQUFFO0lBQ2pCZCxhQUFhLENBQUN6SCxLQUFLLENBQUNDLE1BQU0sR0FBRyxNQUFNO0lBQ25Dc0ksY0FBYyxHQUFHLElBQUk7SUFDckI7RUFDSjtFQUVBZCxhQUFhLENBQUN6SCxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHO0VBQ2hDc0ksY0FBYyxHQUFHLEtBQUs7RUFDdEI7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9jbGVhblVwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvY29sbGFwc2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvbG9jYWxIYW5kbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvc2V0V2VhdGhlckhlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3RpY2tlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL2JhY2tncm91bmRDb250cm9sLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9mYXZNYW5hZ2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9sb2FkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy93aW5TaXplLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9sb2FkZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9sb2FkZXIuY3NzPzk1Y2IiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuZnVuY3Rpb24gbWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50KGQpIHtcbiAgICAvL0dpdmVuIGRheSwgcmV0dXJuIGRpdiBjb250YWluaW5nIHdlYXRoZXIgaW5mbyBmb3IgdGhlIGRheSBvZiB0aGUgd2Vla1xuICAgIGxldCBmb3JlY2FzdF9lbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9cbiAgICBmb3JlY2FzdF9lbGUuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZWxlbWVudCcpOyAvL1xuICAgIFxuICAgIGxldCBkYXRlID0gZGF5anMoZC5kYXRlLCAnWVlZWS1NTU1NLUQnKTsgLy9cbiAgICBmb3JlY2FzdF9lbGUuYXBwZW5kQ2hpbGQoc2V0Rm9yZWNhc3RIZWFkZXIoZGF0ZS5mb3JtYXQoJ2RkZGQnKSkpO1xuXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZChzZXRDb25kaXRpb25JbWFnZShkLmRheS5jb25kaXRpb24uaWNvbikpO1xuXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZChzZXRUZW1wZXJhdHVyZURldGFpbChgJHtNYXRoLnJvdW5kKGQuZGF5Lm1pbnRlbXBfZil9wrBGIC8gJHtNYXRoLnJvdW5kKGQuZGF5Lm1heHRlbXBfZil9wrBGYCxcbiAgICAgYCR7TWF0aC5yb3VuZChkLmRheS5taW50ZW1wX2MpfcKwQyAvICR7TWF0aC5yb3VuZChkLmRheS5tYXh0ZW1wX2MpfcKwQ2ApKTtcblxuICAgIHJldHVybiBmb3JlY2FzdF9lbGU7XG59XG5cbmZ1bmN0aW9uIG1ha2VIb3VybHlGb3JlY2FzdEVsZW1lbnQodCkge1xuICAgIGxldCBmb3JlY2FzdF9lbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JlY2FzdF9lbGUuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZWxlbWVudCcpO1xuICAgIFxuICAgIGxldCBob3VyID0gZGF5anModC50aW1lLCAnWVlZWS1NTU1NLUQnKTtcbiAgICBmb3JlY2FzdF9lbGUuYXBwZW5kQ2hpbGQoc2V0Rm9yZWNhc3RIZWFkZXIoaG91ci5mb3JtYXQoJ2RkZGQsIGg6bW0gQScpKSk7XG5cbiAgICBmb3JlY2FzdF9lbGUuYXBwZW5kQ2hpbGQoc2V0Q29uZGl0aW9uSW1hZ2UodC5jb25kaXRpb24uaWNvbikpO1xuXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZENoaWxkKHNldFRlbXBlcmF0dXJlRGV0YWlsKGAke01hdGgucm91bmQodC50ZW1wX2YpfcKwIEZgLCBcbiAgICAgICAgYCR7TWF0aC5yb3VuZCh0LnRlbXBfYyl9wrAgQ2ApKTtcblxuICAgIHJldHVybiBmb3JlY2FzdF9lbGU7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVIb3VycyhkKSB7XG4gICAgbGV0IGN1cnJlbnRfZGF0ZXRpbWUgPSBkLmN1cnJlbnQubGFzdF91cGRhdGVkO1xuICAgIGN1cnJlbnRfZGF0ZXRpbWUgPSBkYXlqcyhjdXJyZW50X2RhdGV0aW1lLCAnWVlZWS1NTU1NLUQnKTtcbiAgICBcbiAgICBsZXQgc3RhcnQgPSBOdW1iZXIoY3VycmVudF9kYXRldGltZS5mb3JtYXQoJ0hIJykpICsgMTtcbiAgICBsZXQgZGF5X2luZHggPSAwO1xuICAgIGxldCBob3VyX2FyciA9IFtdO1xuICAgIFxuICAgIGZvcihsZXQgbGltaXQgPSAyNDsgbGltaXQgPiAwOyBsaW1pdC0tKSB7XG4gICAgICAgIGlmIChzdGFydCA+IDIzKSB7XG4gICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICBkYXlfaW5keCsrO1xuICAgICAgICB9XG4gICAgICAgIGhvdXJfYXJyLnB1c2goZC5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXlfaW5keF0uaG91cltzdGFydF0pO1xuICAgICAgICBzdGFydCsrO1xuICAgIH1cblxuICAgIHJldHVybiBob3VyX2Fycjtcbn1cblxuZnVuY3Rpb24gc2V0Rm9yZWNhc3RIZWFkZXIoaCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1oZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBoO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIHNldENvbmRpdGlvbkltYWdlKGkpIHtcbiAgICBsZXQgY29uZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25kX2ltZy5zcmMgPSBpXG4gICAgY29uZF9pbWcuY2xhc3NMaXN0LmFkZCgnaWNvbi1mb3JlY2FzdCcpO1xuICAgIHJldHVybiBjb25kX2ltZztcbn1cblxuZnVuY3Rpb24gc2V0VGVtcGVyYXR1cmVEZXRhaWwoZiwgYykge1xuICAgIGxldCB0ZW1wX3dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGVtcF93cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWRldGFpbC13cmFwcGVyJyk7XG5cbiAgICBsZXQgZGV0YWlsc19mID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRldGFpbHNfZi5jbGFzc0xpc3QuYWRkKCdmYWhyZW5oZWl0Jyk7XG4gICAgZGV0YWlsc19mLnRleHRDb250ZW50ID0gZjtcblxuICAgIGxldCBkZXRhaWxzX2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGV0YWlsc19jLmNsYXNzTGlzdC5hZGQoJ2NlbHNpdXMnKTtcbiAgICBkZXRhaWxzX2MudGV4dENvbnRlbnQgPSBjO1xuXG4gICAgdGVtcF93cmFwcGVyLmFwcGVuZChkZXRhaWxzX2YsIGRldGFpbHNfYyk7XG4gICAgcmV0dXJuIHRlbXBfd3JhcHBlcjtcbn1cblxuZXhwb3J0IHsgbWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50LCBtYWtlSG91cmx5Rm9yZWNhc3RFbGVtZW50LCBjb21wdXRlSG91cnMgfTsiLCJmdW5jdGlvbiBjbGVhckZvcmVjYXN0Q29udGFpbmVyKCkge1xuICAgIGxldCBmb3JlY2FzdF9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICB3aGlsZShmb3JlY2FzdF9jb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBmb3JlY2FzdF9jb250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBjbGVhckZvcmVjYXN0Q29udGFpbmVyIH07IiwiZnVuY3Rpb24gY29sbGFwc2VGb3JlY2FzdChldmVudCkge1xuICAgIGxldCBmb3JlY2FzdF93cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0d3JhcHBlcicpO1xuICAgIGZvcmVjYXN0X3dyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gJzB2aCc7XG4gICAgbGV0IGNvbGxhcHNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsYXBzZXInKTtcbiAgICBjb2xsYXBzZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBjb2xsYXBzZUZvcmVjYXN0KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LWhvdXJseScpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctd2Vla2x5JykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCB7IGNvbGxhcHNlRm9yZWNhc3QgfTsiLCJmdW5jdGlvbiBzZXRDdXJyZW50TG9jYWwocSkge1xuICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50JywgcSk7XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCB7IHNldEN1cnJlbnRMb2NhbCB9OyIsImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuZnVuY3Rpb24gc2V0TG9jYXRpb24gKGMsIHMsIGNvdW50cnkpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1zdGF0ZScpLnRleHRDb250ZW50ID0gYCR7Y30sICR7c31gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5JykudGV4dENvbnRlbnQgPSBgJHtjb3VudHJ5fWA7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBzZXRUZW1wKHQpIHtcbiAgICBsZXQgdGVtcF9lbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKTtcbiAgICB0ZW1wX2VsZS50ZXh0Q29udGVudCA9IGAke3R9YDtcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIHNldERhdGUoZCkge1xuICAgIGxldCBkYXRlID0gZGF5anMoZCwgJ1lZWVktTU1NTS1EJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhc3QtdXBkYXRlJykudGV4dENvbnRlbnQgPSBgVXBkYXRlZDogJHtkYXRlLmZvcm1hdCgnZGRkZCwgaDptbSBBJyl9YDtcbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCB7IHNldExvY2F0aW9uLCBzZXRUZW1wLCBzZXREYXRlIH07IiwiZnVuY3Rpb24gc2V0VGlja2VyVGV4dChkYXRhKSB7XG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5hcHBlbmRDaGlsZChzZXRDb25kaXRpb24oZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoc2V0UmVhbEZlZWwoZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mKSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoc2V0SHVtaWRpdHkoZGF0YS5jdXJyZW50Lmh1bWlkaXR5KSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoc2V0V2luZFNwZWVkKGRhdGEuY3VycmVudC53aW5kX2twaCkpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ3RpY2tlci10ZXh0Jyk7XG4gICAgcmV0dXJuIHVsO1xufVxuXG5mdW5jdGlvbiBzZXRDb25kaXRpb24oYykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSBgQ29uZGl0aW9uOiAke2N9YDtcbiAgICByZXR1cm4gbGk7XG59XG5cbmZ1bmN0aW9uIHNldEh1bWlkaXR5KGgpIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2h9JWA7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBzZXRXaW5kU3BlZWQodykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3fSBrbS9oYDtcbiAgICByZXR1cm4gbGk7XG59XG5cbmZ1bmN0aW9uIHNldFJlYWxGZWVsKGYpIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7Zn0gwrBGYDtcbiAgICBsaS5pZCA9ICdmZWVsJztcbiAgICByZXR1cm4gbGk7XG59XG5cbmV4cG9ydCB7IHNldFRpY2tlclRleHQgfTsiLCJpbXBvcnQgeyBzZXRUaWNrZXJUZXh0IH0gZnJvbSBcIi4vdGlja2VyXCI7XG5pbXBvcnQgcGxhY2Vob2xkZXIgZnJvbSAnLi8uLi9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJztcbmltcG9ydCB7IHNldERhdGUsIHNldExvY2F0aW9uLCBzZXRUZW1wIH0gZnJvbSBcIi4vc2V0V2VhdGhlckhlbHBlclwiO1xuaW1wb3J0IHsgZGlzcGxheUxvYWRlciwgcmVtb3ZlTG9hZGVyIH0gZnJvbSBcIi4vd2lkZ2V0cy9sb2FkXCI7XG5pbXBvcnQgeyBtYWtlRGFpbHlGb3JlY2FzdEVsZW1lbnQsIGNvbXB1dGVIb3VycywgbWFrZUhvdXJseUZvcmVjYXN0RWxlbWVudCAgfSBmcm9tIFwiLi9Gb3JlY2FzdFwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudExvY2FsIH0gZnJvbSBcIi4vbG9jYWxIYW5kbGVyXCI7XG5pbXBvcnQgeyBjbGVhckZvcmVjYXN0Q29udGFpbmVyIH0gZnJvbSBcIi4vY2xlYW5VcFwiO1xuaW1wb3J0IHsgYmFja2dyb3VuZFN3aXRjaCB9IGZyb20gXCIuL3dpZGdldHMvYmFja2dyb3VuZENvbnRyb2xcIjtcbmltcG9ydCB7IGNvbGxhcHNlRm9yZWNhc3QgfSBmcm9tIFwiLi9jb2xsYXBzZXJcIjtcblxuXG5sZXQgcmVxdWVzdCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xYjA1NDk3MmNiMzg0ZDc4OWM1MTk1MjAyMjMxNTA1JnE9JztcbmxldCByZXFfZXh0cmEgPSAnJmRheXM9NSZhcWk9bm8mYWxlcnRzPW5vJ1xubGV0IGRhdGEgPSB7fTtcbmxldCBkYWlseV9mb3JlY2FzdCA9IFtdO1xubGV0IGhvdXJseV9mb3JlY2FzdCA9IFtdO1xubGV0IGZhaHJlbmhlaXQgPSB0cnVlO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIocSkge1xuICAgIGRpc3BsYXlMb2FkZXIoKTtcbiAgICBsZXQgZV9zcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJyk7XG4gICAgdHJ5e1xuICAgICAgICAvL0xvYWRpbmcgY29tcG9uZW50IHN0dWZmIGhlcmVcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCArIHEgKyByZXFfZXh0cmEsIHsnbW9kZSc6ICdjb3JzJ30pO1xuICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRXZWF0aGVyKCk7XG4gICAgICAgIGJhY2tncm91bmRTd2l0Y2goTnVtYmVyKGRhdGEuY3VycmVudC5jb25kaXRpb24uY29kZSkpO1xuICAgICAgICBjbGVhckZvcmVjYXN0Q29udGFpbmVyKCk7XG4gICAgICAgIGdldERhaWx5Rm9yZWNhc3QoKTtcbiAgICAgICAgZ2V0SG91cmx5Rm9yZWNhc3QoKTtcbiAgICAgICAgc2hvd0ZvcmVjYXN0KCk7XG4gICAgICAgIHNldEN1cnJlbnRMb2NhbChxKTtcbiAgICAgICAgZV9zcGFuLnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGVfc3Bhbi50ZXh0Q29udGVudCA9ICdDYW5ub3QgZmluZCBhIG1hdGNoaW5nIGxvY2F0aW9uLic7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgcmVtb3ZlTG9hZGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNldFdlYXRoZXIoKSB7XG4gICAgc2V0TG9jYXRpb24oZGF0YS5sb2NhdGlvbi5uYW1lLCBkYXRhLmxvY2F0aW9uLnJlZ2lvbiwgZGF0YS5sb2NhdGlvbi5jb3VudHJ5KTtcbiAgICBzZXRUZW1wKChmYWhyZW5oZWl0ID8gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcF9mKX0gwrBGYCA6IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfYyl9IMKwQ2ApKTtcbiAgICBzZXREYXRlKGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQpO1xuICAgIGxldCB0aWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGlja2VyJyk7XG4gICAgaWYodGlja2VyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGlja2VyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHRpY2tlci5hcHBlbmRDaGlsZChzZXRUaWNrZXJUZXh0KGRhdGEpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudy1pY29uLXNtYWxsJykuc3JjID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xufVxuXG5cbmZ1bmN0aW9uIGdldERhaWx5Rm9yZWNhc3QoKSB7XG4gICAgZGFpbHlfZm9yZWNhc3QgPSBbXTtcbiAgICBsZXQgZm9yZWNhc3Rfc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuICAgIChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5KS5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgIGRhaWx5X2ZvcmVjYXN0LnB1c2gobWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50KGRheSkpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gZ2V0SG91cmx5Rm9yZWNhc3QoKSB7XG4gICAgaG91cmx5X2ZvcmVjYXN0ID0gW107XG4gICAgbGV0IGZvcmVjYXN0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICBsZXQgaG91cnMgPSBjb21wdXRlSG91cnMoZGF0YSk7XG4gICAgaG91cnMuZm9yRWFjaCh0aWNrID0+IHtcbiAgICAgICAgaG91cmx5X2ZvcmVjYXN0LnB1c2gobWFrZUhvdXJseUZvcmVjYXN0RWxlbWVudCh0aWNrKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBzaG93Rm9yZWNhc3QoKSB7XG4gICAgbGV0IGZvcmVjYXN0X3dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3R3cmFwcGVyJyk7XG4gICAgbGV0IGZvcmVjYXN0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICBsZXQgaG91cmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctaG91cmx5Jyk7XG4gICAgbGV0IHdlZWtseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXdlZWtseScpO1xuXG4gICAgY2xlYXJGb3JlY2FzdENvbnRhaW5lcigpO1xuXG4gICAgaWYod2Vla2x5LmRpc2FibGVkKSB7XG4gICAgICAgIGZvcmVjYXN0X3NlY3Rpb24uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgICAgICAgZGFpbHlfZm9yZWNhc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGZvcmVjYXN0X3NlY3Rpb24uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZihob3VybHkuZGlzYWJsZWQpIHtcbiAgICAgICAgZm9yZWNhc3Rfc2VjdGlvbi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgaG91cmx5X2ZvcmVjYXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBmb3JlY2FzdF9zZWN0aW9uLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9KVxuICAgIH1lbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGZhaHJlbmhlaXQpIHtcbiAgICAgICAgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbHNpdXMnKSkpLmZvckVhY2goZWxlID0+e1xuICAgICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWhyZW5oZWl0JykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZm9yZWNhc3Rfd3JhcHBlci5zdHlsZS5oZWlnaHQgPSAnMjV2aCc7XG4gICAgbGV0IGNvbGxhcHNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsYXBzZXInKTtcbiAgICBjb2xsYXBzZXIuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBjb2xsYXBzZUZvcmVjYXN0KTtcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFVuaXRzKCkge1xuICAgIGZhaHJlbmhlaXQgPSAhZmFocmVuaGVpdDtcbiAgICBsZXQgdGVtcF9lbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKTtcbiAgICBsZXQgZmVlbF9lbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbCcpO1xuICAgIGlmKGZhaHJlbmhlaXQpIHtcbiAgICAgICAgdGVtcF9lbGUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wX2YpfSDCsEZgO1xuICAgICAgICBmZWVsX2VsZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mKX0gwrBGYDtcbiAgICAgICAgXG4gICAgICAgIC8vVGhpcyBpcyB1Z2x5LCBidXQgZm9yIGN1cnJlbnQgbGFjayBvZiBhIGJldHRlciBzb2x1dGlvbiwgaXQgd29ya3NcbiAgICAgICAgLy9Ib3BlZnVsbHkgd2l0aG91dCBicmVha2luZy4gMjMgTWF5LCAyMDIzIDE0OjU5XG4gICAgICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWhyZW5oZWl0JykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxzaXVzJykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuOyBcbiAgICB9XG4gICAgdGVtcF9lbGUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wX2MpfSDCsENgO1xuICAgIGZlZWxfZWxlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MpfSDCsENgO1xuXG4gICAgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhaHJlbmhlaXQnKSkpLmZvckVhY2goZWxlID0+e1xuICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxzaXVzJykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCB7IGhvdXJseV9mb3JlY2FzdCwgZmV0Y2hXZWF0aGVyLCBzd2l0Y2hVbml0cywgZ2V0RGFpbHlGb3JlY2FzdCwgZ2V0SG91cmx5Rm9yZWNhc3QsIHNob3dGb3JlY2FzdCB9OyIsImltcG9ydCBjbGVhciBmcm9tICcuLi8uLi9pbWFnZXMvY2xlYXIuanBnJztcbmltcG9ydCBkcml6emxlIGZyb20gJy4uLy4uL2ltYWdlcy9kcml6emxlLmpwZyc7XG5pbXBvcnQgY2xvdWR5IGZyb20gJy4uLy4uL2ltYWdlcy9jbG91ZHkuanBnJztcbmltcG9ydCByYWluIGZyb20gJy4uLy4uL2ltYWdlcy9yYWluLmpwZyc7XG5pbXBvcnQgc25vdyBmcm9tICcuLi8uLi9pbWFnZXMvc25vdy5qcGcnO1xuaW1wb3J0IHRodW5kZXIgZnJvbSAnLi4vLi4vaW1hZ2VzL3RodW5kZXItc3Rvcm0uanBnJztcblxuZnVuY3Rpb24gYmFja2dyb3VuZFN3aXRjaChjYykge1xuICAgIGxldCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAvLyBpZihjYyA+IDk5OSAmJiBjYyA8PSAxMDAzKSB7XG4gICAgLy8gICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbGVhcn1gO1xuICAgIC8vIH0gZWxzZSBpZiAoKGNjID4gMTAwMyAmJiBjYyA8PSAxMDg3KSB8fCAoY2MgPiAxMTM0ICYmIGNjIDw9IDExNDcpKSB7XG4gICAgLy8gICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbG91ZHl9YDtcbiAgICAvLyB9IGVsc2UgaWYgKGNjID4gMTE0OSAmJiBjYyA8PSAxMTcyKSB7XG4gICAgLy8gICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkcml6emxlfWA7XG4gICAgLy8gfSBlbHNlIGlmICgoY2MgPiAxMTc5ICYmIGNjIDw9IDEyMDcpIHx8IChjYyA+IDEyMzkgJiYgY2MgPD0gMTI2NCkpIHtcbiAgICAvLyAgICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3JhaW59YDtcbiAgICAvLyB9IGVsc2UgaWYgKGNjID4gMTIwOSAmJiBjYyA8PSAxMjM3KSB7XG4gICAgLy8gICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzbm93fWA7XG4gICAgLy8gfSBlbHNlIGlmIChjYyA+IDEyNzIgJiYgY2MgPD0gMTI4Mikge1xuICAgIC8vICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGh1bmRlcn1gO1xuICAgIC8vIH0gZWxzZXtcbiAgICAvLyAgICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2Nsb3VkeX1gO1xuICAgIC8vIH1cbn1cblxuZXhwb3J0IHsgYmFja2dyb3VuZFN3aXRjaCB9OyIsImltcG9ydCB7IGZldGNoV2VhdGhlciB9IGZyb20gXCIuLi93ZWF0aGVyXCI7XG5cbmxldCBmYXZvcml0ZXMgPSBbXTtcbi8vQ2hlY2sgbG9jYWwgc3RvcmFnZSBmb3IgZXhpc3RpbmcgZmF2b3JpdGVzLCBpZiB0aGV5IGRvbid0IGV4aXN0LCBzZXQgZmF2b3JpdGVzIHRvIGVtcHR5IGFycmF5XG5pZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdmYXZzJykpIHtcbiAgICBmYXZvcml0ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZzJykpO1xufVxuXG5mdW5jdGlvbiBzZXROZXdGYXZvcml0ZSgpIHtcbiAgICBsZXQgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1zdGF0ZScpLnRleHRDb250ZW50O1xuICAgIFxuICAgIGlmKGZhdm9yaXRlcy5pbmNsdWRlcyhxdWVyeSkpIHtcbiAgICAgICAgYWxlcnQoJ1RoaXMgaXMgYWxyZWFkeSBmYXZvcml0ZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmYXZvcml0ZXMucHVzaChxdWVyeSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZhdnMnLCBKU09OLnN0cmluZ2lmeShmYXZvcml0ZXMpKTtcbiAgICBcbiAgICBsZXQgbmV3X2VsZSA9IG5ld0ZhdkVsZW1lbnQocXVlcnkpO1xuICAgIG5ld19lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYXZDbGlja0hhbmRsZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtbWVudScpLmFwcGVuZENoaWxkKG5ld19lbGUpO1xuICAgIFxuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVGYXZvcml0ZXMoKSB7XG4gICAgbGV0IGZhdl9tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1tZW51Jyk7XG4gICAgXG4gICAgZmF2b3JpdGVzLmZvckVhY2goZmF2ID0+IHtcbiAgICAgICAgbGV0IGZhdl9lbGUgPSBuZXdGYXZFbGVtZW50KGZhdilcbiAgICAgICAgZmF2X2VsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZhdkNsaWNrSGFuZGxlcik7XG4gICAgICAgIGZhdl9tZW51LmFwcGVuZENoaWxkKGZhdl9lbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybjtcbn1cblxuXG5mdW5jdGlvbiBuZXdGYXZFbGVtZW50KGZhdikge1xuICAgIGxldCBmYXZfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmF2X2Rpdi50ZXh0Q29udGVudCA9IGZhdjtcbiAgICBmYXZfZGl2LmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlJyk7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xvc2UudGV4dENvbnRlbnQgPSAn4p2MJztcbiAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtZmF2Jyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVGYXZFdmVudEhhbmRsZXIpO1xuICAgIGZhdl9kaXYuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIHJldHVybiBmYXZfZGl2O1xufVxuXG5mdW5jdGlvbiByZW1vdmVGYXZFdmVudEhhbmRsZXIoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgbGV0IGZhdl9pbmR4ID0gZmF2b3JpdGVzLmluZGV4T2YocGFyZW50LnRleHRDb250ZW50LnNsaWNlKDAsIC0xKSk7XG5cbiAgICBmYXZvcml0ZXMuc3BsaWNlKGZhdl9pbmR4LCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2cycsIEpTT04uc3RyaW5naWZ5KGZhdm9yaXRlcykpO1xuICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRmF2RXZlbnRIYW5kbGVyKTtcbiAgICBwYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYXZDbGlja0hhbmRsZXIpO1xuICAgIHBhcmVudC5yZW1vdmUoKTtcblxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZzJykpO1xuICAgIHJldHVybjsgICBcbn1cblxuZnVuY3Rpb24gZmF2Q2xpY2tIYW5kbGVyKGUpIHtcbiAgICBmZXRjaFdlYXRoZXIoZW5jb2RlVVJJQ29tcG9uZW50KGUudGFyZ2V0LnRleHRDb250ZW50KSk7XG59XG5cbi8vZGVidWdcbi8vIGZ1bmN0aW9uIGNsZWFyRmF2b3JpdGVzKCkge1xuLy8gICAgIGZhdm9yaXRlcyA9IFtdO1xuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZzJywgSlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVzKSk7XG4vLyAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZhdnMnKSk7XG4vLyB9XG5cbmV4cG9ydCB7IHNldE5ld0Zhdm9yaXRlLCBwb3B1bGF0ZUZhdm9yaXRlcyB9OyIsImZ1bmN0aW9uIGRpc3BsYXlMb2FkZXIoKSB7XG4gICAgbGV0IGRpbW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpbW1lci5jbGFzc0xpc3QuYWRkKCdkaW1tZXInKTtcbiAgICBsZXQgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnbGRzLXJpcHBsZScpO1xuICAgIHNwaW5uZXIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBkaW1tZXIuYXBwZW5kQ2hpbGQoc3Bpbm5lcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGRpbW1lcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxvYWRlcigpIHtcbiAgICBsZXQgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZHMtcmlwcGxlJyk7XG4gICAgd2hpbGUoc3Bpbm5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHNwaW5uZXIuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgc3Bpbm5lci5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGltbWVyJykucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlMb2FkZXIsIHJlbW92ZUxvYWRlciB9OyIsImltcG9ydCB7IGhvdXJseV9mb3JlY2FzdCB9IGZyb20gXCIuLi93ZWF0aGVyXCI7XG5cbmxldCB3aW5PYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICBmb3IoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICBpZiAoIGVudHJ5LnRhcmdldC5jbGllbnRXaWR0aCA8IDYwMCApIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2hfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdlYXRoZXInKTsgXG4gICAgICAgICAgICB0YXJnZXRfZGl2LnByZXBlbmQoc2VhcmNoX2Rpdik7XG4gICAgICAgICAgICBsZXQgZm9yZWNhc3Rfc2VjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdHdyYXBwZXInKTtcbiAgICAgICAgICAgIHRhcmdldF9kaXYuYXBwZW5kKGZvcmVjYXN0X3NlY3QpO1xuICAgICAgICAgICAgbGV0IGZhdl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLWZhdmVzJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLWZhdmVzJykuY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGZhdl9jb250YWluZXIuc3R5bGUudG9wID0gYDh2aGA7XG4gICAgICAgICAgICBmYXZfY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtlbnRyeS50YXJnZXQuY2xpZW50V2lkdGggLSAyMDB9cHhgO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAyMDBweGA7XG4gICAgICAgIH07XG4gICAgICAgIGlmICggZW50cnkudGFyZ2V0LmNsaWVudFdpZHRoID4gNjAwKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYXJlYScpO1xuICAgICAgICAgICAgbGV0IHRhcmdldF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpOyBcbiAgICAgICAgICAgIHRhcmdldF9kaXYuYXBwZW5kKHNlYXJjaF9kaXYpO1xuICAgICAgICAgICAgbGV0IGZvcmVjYXN0X3NlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdHdyYXBwZXInKS5hcHBlbmQoZm9yZWNhc3Rfc2VjdCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbGUtZmF2ZXMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbGV0IGZhdl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIH07XG4gICAgICAgIC8vZW50cnkudGFyZ2V0LmNsaWVudFdpZHRoIDwgODAwID8gbW9iaWxlX29uID0gdHJ1ZSA6IG1vYmlsZV9vbiA9IGZhbHNlO1xuICAgIH1cbn0pXG5cbndpbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSk7XG5cbmV4cG9ydCB7d2luT2JzZXJ2ZXJ9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypDcmVkaXRzOiAubGRzLXJpcHBsZSBmcm9tIGh0dHBzOi8vbG9hZGluZy5pby9jc3MvKi9cXG5cXG4uZGltbWVyIHtcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgbWluLXdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuLmxkcy1yaXBwbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDQuOSUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDUlIHtcXG4gICAgICB0b3A6IDM2cHg7XFxuICAgICAgbGVmdDogMzZweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgd2lkdGg6IDcycHg7XFxuICAgICAgaGVpZ2h0OiA3MnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL2xvYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0RBQW9EOztBQUVwRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw4REFBOEQ7RUFDaEU7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0U7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxRQUFRO01BQ1IsU0FBUztNQUNULFdBQVc7TUFDWCxZQUFZO01BQ1osVUFBVTtJQUNaO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypDcmVkaXRzOiAubGRzLXJpcHBsZSBmcm9tIGh0dHBzOi8vbG9hZGluZy5pby9jc3MvKi9cXG5cXG4uZGltbWVyIHtcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgbWluLXdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuLmxkcy1yaXBwbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDQuOSUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDUlIHtcXG4gICAgICB0b3A6IDM2cHg7XFxuICAgICAgbGVmdDogMzZweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgd2lkdGg6IDcycHg7XFxuICAgICAgaGVpZ2h0OiA3MnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvZnV0dXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbW91bnRhaW5zLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2RvdWJsZS1hcnJvdy1kb3duLXN2Z3JlcG8tY29tLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdmdXR1cmEnO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMiU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcblxcdC0tbWFpbi1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNywgMSwgNDMsIDAuODQyKSAzNyUsIHJnYmEoMCwgMTYsIDU5LCAwLjg0MikgOTklKTtcXG5cXHQtLXN2Zy1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDMlKSBzYXR1cmF0ZSgxJSkgaHVlLXJvdGF0ZSgxMTdkZWcpIGJyaWdodG5lc3MoMTE5JSkgY29udHJhc3QoMTAwJSk7XFxuXFx0LS1tYWluLWZvbnQtY29sb3I6ICNmNWYzZmY7XFxuXFx0LS1zZWNvbmRhcnktY29sb3I6ICMwMTAwMDMxYztcXG5cXHQtLXRlcnRpYXJ5LWNvbG9yOiAjMWUwNzM3OTQ7XFxuXFx0LS1idXR0b24tY29sb3I6ICMxRTA3Mzc7XFxuXFx0LS1idXR0b24tZGlzYWJsZWQ6IGxpbmVhci1ncmFkaWVudCg5NGRlZywgcmdiYSgwLDAsMCwxKSAxNSUsIHJnYmEoNjYsNjYsNjYsMSkgODklKTtcXG5cXHQtLWJ1dHRvbi1kaXNhYmxlZC10ZXh0OiBibGFjaztcXG5cXHQtLWJ1dHRvbi1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDEzM2RlZywgcmdiYSgyMywyLDUxLDEpIDE1JSwgcmdiYSg2OCw0NiwxMDEsMSkgODklKTtcXG5cXG5cXHQtLWZzLXJlZzogY2xhbXAoLjZyZW0sIC44dncsIDFyZW0pO1xcblxcdC0tZnMtZm9yZTogY2xhbXAoLjVyZW0sIDF2dywgMXJlbSk7XFxuXFx0LS1mcy1iaWc6IGNsYW1wKC44cmVtLCAxdncsIDEuNXJlbSk7XFxuXFx0LS1mcy1mb250LXNtYWxsOiBjbGFtcCguNXJlbSwgLjh2dywgLjlyZW0pO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdHRyYW5zaXRpb246IGZsZXggMnM7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tbWFpbi1ncmFkaWVudCksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRmb250LWZhbWlseTogJ2Z1dHVyYScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Ym9yZGVyOm5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tZ3JhZGllbnQpO1xcblxcdGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWRpc2FibGVkKTtcXG5cXHRjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiA4dmg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXg6bm9uZTtcXG59XFxuXFxuI3VuaXQtdG9nZ2xlIHtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG5cXHRwYWRkaW5nOiAwcmVtO1xcblxcdGZvbnQtc2l6ZTogY2xhbXAoLjdyZW0sIDF2dywgMS4ycmVtKTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR3aWR0aDogY2xhbXAoMTAwcHgsIDEyLjh2dywgMzAwcHgpO1xcblxcdGhlaWdodDogNDBweDtcXG59XFxuXFxuLnNlYXJjaC1hcmVhIHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbiNzZWFyY2gtZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIGxhYmVsIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNzZWFyY2gtaWNvbiB7XFxuXFx0aGVpZ2h0OiBjbGFtcCguOXJlbSwgMS4ydncsIDJyZW0pO1xcblxcdGZpbHRlcjogdmFyKC0tc3ZnLWZpbHRlcik7XFxufVxcblxcbiNzZWFyY2gge1xcblxcdGhlaWdodDogMS41cmVtO1xcblxcdHdpZHRoOiAyNXZ3O1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtcmVnKTtcXG5cXHRwYWRkaW5nOiAuMXJlbSAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAuMnJlbTtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40NDUpO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0Y29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbiNzZWFyY2g6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4jc2VhcmNoOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jc2VhcmNoLWJ1dHRvbiB7XFxuXFx0d2lkdGg6IDV2dztcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Vycm9yIHtcXG5cXHRjb2xvcjogcmVkO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAxMCU7XFxuXFx0dG9wOiA5MCU7XFxuXFx0Zm9udC1zaXplOiAuOHJlbTtcXG59XFxuXFxuI21vYmlsZS1mYXZlcyB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGFzcGVjdC1yYXRpbzogMS8xO1xcblxcdGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLm1haW4td2VhdGhlciB7XFxuXFx0ZmxleDogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxNSU7XFxufVxcblxcbi5kZXRhaWxzLXdyYXBwZXJ7XFxuXFx0aGVpZ2h0OiAzMDBweDtcXG5cXHR3aWR0aDogNDAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDIzMCwgMjUwLCAwKTtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMXJlbSA1MHB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxMCU7XFxuXFx0Z2FwOiAuNXJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLXdyYXBwZXIge1xcblxcdGhlaWdodDoxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE4LCAyMTgsIDIxOCwgMCk7XFxuXFx0cGFkZGluZzogNHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Y29sb3I6dmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLmNzLXdyYXBwZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5jaXR5LXN0YXRlIHtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLWJpZyk7XFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG4uY291bnRyeSB7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bWFyZ2luLXRvcDogNHB4O1xcblxcdG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxuXFxuLnRlbXAtd3JhcHBlciB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzllNzg4ZjAwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Y29sb3I6dmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLnRlbXAtaWNvbi13cmFwcGVyIHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnctaWNvbi1zbWFsbCB7XFxuXFx0d2lkdGg6Y2xhbXAoMnJlbSwgMnZ3LCAgMjAwcHgpO1xcblxcdGFzcGVjdC1yYXRpbzogMSAvMTtcXG59XFxuXFxuLmxhc3QtdXBkYXRlIHtcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcbn1cXG5cXG4jdGVtcGVyYXR1cmUge1xcblxcdGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNHZ3LCA1cmVtKTtcXG59XFxuXFxuI3RpY2tlciB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxuXFx0Y29sb3I6dmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLnRpY2tlci10ZXh0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRhbmltYXRpb246IHRpY2stcmlnaHQgMTVzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtcmVnKTtcXG59XFxuXFxuLnRpY2tlci10ZXh0IGxpIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcblxcbi50aWNrZXItdGV4dCBsaTpmaXJzdC1vZi10eXBlIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuI3Nob3ctd2Vla2x5LFxcbiNzaG93LWhvdXJseSB7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1mb250LXNtYWxsKTtcXG59XFxuXFxuI2Zhdi1pY29uIHtcXG5cXHRoZWlnaHQ6IGNsYW1wKDFyZW0sIDJ2dywgNXJlbSk7XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0ZmlsdGVyOiB2YXIoLS1zdmctZmlsdGVyKTtcXG59XFxuXFxuI2Zhdi1pY29uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6NDAwcHg7XFxuXFx0d2lkdGg6IDYwMHB4O1xcblxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Y29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWNvbnRhaW5lcj5oMSB7XFxuXFx0Zm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDIuNXJlbSApO1xcblxcdHBhZGRpbmc6IDFyZW0gMXJlbTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mYXYtbWVudSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuXFx0Z3JpZC1hdXRvLXJvd3M6IDc1cHg7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRmbGV4OiBhdXRvO1xcblxcdGdhcDoxcmVtO1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mYXZvcml0ZSB7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRwYWRkaW5nOiAwIC41cmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0b3ZlcmZsb3cteTogaGlkZGVuO1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbjtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLXJlZyk7XFxufVxcblxcbi5mYXZvcml0ZTpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxMTAlKTtcXG59XFxuXFxuLnJlbW92ZS1mYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA3JTtcXG5cXHRyaWdodDo1JTtcXG5cXHRmb250LXNpemU6IC45cmVtO1xcblxcdHBhZGRpbmc6IDFweCA0cHg7XFxuXFx0Y29sb3I6IGdyZXk7XFxufVxcblxcbi5yZW1vdmUtZmF2OmhvdmVye1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0d3JhcHBlciB7XFxuXFx0aGVpZ2h0OjB2aDtcXG5cXHR0cmFuc2l0aW9uOiBoZWlnaHQgLjVzO1xcbn1cXG5cXG4uY29sbGFwc2VyIHtcXG5cXHRoZWlnaHQ6IDEwJTtcXG5cXHRhc3BlY3QtcmF0aW86IDEgLyAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xcblxcdG92ZXJmbG93OmhpZGRlbjtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcblxcdGhlaWdodDogOTAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcblxcdGdhcDogNHZ3O1xcblxcdHBhZGRpbmc6IDAgMnJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXG59XFxuXFxuLmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdHdpZHRoOiAxMiU7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzcxNjc3YzQxO1xcblxcdGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWhlYWRlciB7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1mb3JlKTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pY29uLWZvcmVjYXN0IHtcXG5cXHRmbGV4LXNocmluazogMTtcXG5cXHRoZWlnaHQ6IDQwJTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGV0YWlsLXdyYXBwZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHR3aWR0aDo5MCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtcmVnKTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vYmlsZS1ob3VyLWZvcmVjYXN0IHtcXG5cXHRtaW4taGVpZ2h0OiAyMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMjIwLCAyNTIsIDAuNjIzKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpY2stcmlnaHQge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTI1JSk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjc1JSk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXG5cXHQubWFpbi13ZWF0aGVyIHtcXG5cXHRcXHRnYXA6IDUlO1xcblxcdH1cXG5cXHQuZGV0YWlscy13cmFwcGVyIHtcXG5cXHRcXHRoZWlnaHQ6MjUwcHg7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDQwJSAxMCU7XFxuXFx0fVxcblxcdC53LWljb24tc21hbGwge1xcblxcdFxcdHJpZ2h0OjMwJTtcXG5cXHRcXHR0b3A6MSU7XFxuXFx0fVxcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDRyZW07XFxuXFx0XFx0aGVpZ2h0OiA1MHZoO1xcblxcdH1cXG5cXHQuZm9yZWNhc3QtZWxlbWVudCB7XFxuXFx0XFx0d2lkdGg6IDE1MHB4O1xcblxcdFxcdHBhZGRpbmc6IDAgMXJlbTtcXG5cXHR9XFxuXFx0I3NlYXJjaC1idXR0b24ge1xcblxcdFxcdHdpZHRoOiAxMDBweDtcXG5cXHR9XFxuXFx0I3NlYXJjaCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXHQuZmF2LW1lbnUge1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcblxcdFxcdGdyaWQtYXV0by1yb3dzOiA1MHB4O1xcblxcdH1cXG5cXG5cXHQucmVtb3ZlLWZhdiB7XFxuXFx0XFx0dG9wOiA1JTtcXG5cXHRcXHRyaWdodDogMyU7XFxuXFx0XFx0Zm9udC1zaXplOiAuN3JlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdFxcdGhlaWdodDogNzUlO1xcblxcdFxcdHdpZHRoOmF1dG87XFxuXFx0XFx0YXNwZWN0LXJhdGlvOiAxIC8gMTtcXG5cXHR9XFxuXFx0XFxuXFx0Lmljb24tZm9yZWNhc3Qge1xcblxcdFxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdFxcdGhlaWdodDogMzAlO1xcblxcdFxcdGFzcGVjdC1yYXRpbzogMS8xO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFx0Ym9keXtcXG5cXHRcXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcblxcdH1cXG5cXG5cXHQuc2VhcmNoLWFyZWEge1xcblxcdFxcdG1hcmdpbi1yaWdodDogMDtcXG5cXHR9XFxuXFxuXFx0I3NlYXJjaC1mb3JtIHtcXG5cXHRcXHRnYXA6IC41cmVtO1xcblxcdFxcdHdpZHRoOjEwMCU7XFxuXFx0fVxcblxcblxcdCNzZWFyY2gtaWNvbiB7XFxuXFx0XFx0aGVpZ2h0OjEuMnJlbTtcXG5cXHR9XFxuXFxuXFx0I3NlYXJjaCB7XFxuXFx0XFx0d2lkdGg6IDEyNXB4O1xcblxcdFxcdGZvbnQtc2l6ZTogLjhyZW07XFxuXFx0fVxcblxcblxcdCNzZWFyY2gtYnV0dG9uIHtcXG5cXHRcXHR3aWR0aDogNzVweDtcXG5cXHRcXHRoZWlnaHQ6MXJlbTtcXG5cXHRcXHRmb250LXNpemU6IC44cmVtO1xcblxcdH1cXG5cXG5cXHQubWFpbi13ZWF0aGVyIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogMDtcXG5cXHRcXHRmbGV4OmNvbnRlbnQ7XFxuXFx0XFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG5cXHR9XFxuXFxuXFx0LmRldGFpbHMtd3JhcHBlciB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdHdpZHRoOjEwMCU7XFxuXFx0fVxcblxcblxcdC5jcy13cmFwcGVyIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFxuXFx0LnRlbXAtd3JhcHBlciB7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0LnRlbXAtaWNvbi13cmFwcGVyIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0LmNpdHktc3RhdGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxuXFxuXFx0LmNvdW50cnkge1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxuXFxuXFx0LnctaWNvbi1zbWFsbCB7XFxuXFx0XFx0d2lkdGg6IDE1JTtcXG5cXHR9XFxuXFxuXFx0LmZhdm9yaXRlcy1jb250YWluZXIge1xcblxcdFxcdHdpZHRoOjBweDtcXG5cXHRcXHRoZWlnaHQ6IDBweDtcXG5cXHRcXHRvdmVyZmxvdy14OmhpZGRlbjtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMXM7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRcXHRib3JkZXI6bm9uZTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMDAzZWE7XFxuXFx0fVxcblxcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdCN0aWNrZXIge1xcblxcdFxcdGhlaWdodDoxMDAlO1xcblxcdFxcdHdpZHRoOiA5MCU7XFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0fVxcblxcblxcdC50aWNrZXItdGV4dCB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbmltYXRpb246IG5vbmU7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xcblxcdFxcdGdhcDowO1xcblxcdH1cXG5cXG5cXHQudGlja2VyLXRleHQgbGkge1xcblxcdFxcdGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAwO1xcblxcdFxcdHBhZGRpbmctdG9wOiAuNHJlbTtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogLjRyZW07XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdFxcdGhlaWdodDogMS41cmVtO1xcblxcdFxcdGRpc3BsYXk6ZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnRpY2tlci10ZXh0IGxpOmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMCU7XFxuXFx0XFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XFxuXFx0XFx0Ym9yZGVyLXRvcDogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0d3JhcHBlciB7XFxuXFx0XFx0d2lkdGg6IDYwJTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0IHtcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdFxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0d2lkdGg6IDkwJTtcXG5cXHRcXHRoZWlnaHQ6IDI1JTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0LyogLmljb24tZm9yZWNhc3Qge1xcblxcdFxcdGhlaWdodDogM3JlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWhlYWRlciB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3QtZGV0YWlsLXdyYXBwZXIge1xcblxcdFxcdHdpZHRoOiA0MCU7XFxuXFx0fSAqL1xcblxcblxcdCNlcnJvciBcXHR7XFxuXFx0XFx0dG9wOiAxMTAlO1xcblxcdFxcdGZvbnQtc2l6ZTogLjdyZW07XFxuXFx0fVxcbn1cXG5cXG4vKiA9PT09PSBTY3JvbGxiYXIgQ1NTID09PT09ICovXFxuICAvKiBGaXJlZm94ICovXFxuICAqIHtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgICBzY3JvbGxiYXItY29sb3I6ICM4NTZkYWQgIzA5MDExMTtcXG4gIH1cXG5cXG4gIC8qIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSAqL1xcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogNHB4O1xcblxcdGhlaWdodDogN3B4O1xcbiAgfVxcblxcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDkwMTExO1xcbiAgfVxcblxcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU2ZGFkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckIsNENBQTZCO0FBQzlCOztBQUVBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsY0FBYztDQUNkLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdHQUFnRztDQUNoRyxtR0FBbUc7Q0FDbkcsMEJBQTBCO0NBQzFCLDRCQUE0QjtDQUM1QiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLGtGQUFrRjtDQUNsRiw2QkFBNkI7Q0FDN0Isc0ZBQXNGOztDQUV0RixrQ0FBa0M7Q0FDbEMsa0NBQWtDO0NBQ2xDLG1DQUFtQztD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QjtFQUN0QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsS0FBSztDQUNOOztDQUVBO0VBQ0MsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsVUFBVTtDQUNYOztDQUVBO0VBQ0MsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixtQkFBbUI7Q0FDcEI7O0NBRUE7Ozs7Ozs7Ozs7SUFVRzs7Q0FFSDtFQUNDLFNBQVM7RUFDVCxnQkFBZ0I7Q0FDakI7QUFDRDs7QUFFQSw4QkFBOEI7RUFDNUIsWUFBWTtFQUNaO0lBQ0UscUJBQXFCO0lBQ3JCLGdDQUFnQztFQUNsQzs7RUFFQSw2QkFBNkI7RUFDN0I7SUFDRSxVQUFVO0NBQ2IsV0FBVztFQUNWOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ2Z1dHVyYSc7XFxuXFx0c3JjOiB1cmwoJy4vZm9udHMvZnV0dXIudHRmJyk7XFxufVxcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTIlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG5cXHQtLW1haW4tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTcsIDEsIDQzLCAwLjg0MikgMzclLCByZ2JhKDAsIDE2LCA1OSwgMC44NDIpIDk5JSk7XFxuXFx0LS1zdmctZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgzJSkgc2F0dXJhdGUoMSUpIGh1ZS1yb3RhdGUoMTE3ZGVnKSBicmlnaHRuZXNzKDExOSUpIGNvbnRyYXN0KDEwMCUpO1xcblxcdC0tbWFpbi1mb250LWNvbG9yOiAjZjVmM2ZmO1xcblxcdC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDEwMDAzMWM7XFxuXFx0LS10ZXJ0aWFyeS1jb2xvcjogIzFlMDczNzk0O1xcblxcdC0tYnV0dG9uLWNvbG9yOiAjMUUwNzM3O1xcblxcdC0tYnV0dG9uLWRpc2FibGVkOiBsaW5lYXItZ3JhZGllbnQoOTRkZWcsIHJnYmEoMCwwLDAsMSkgMTUlLCByZ2JhKDY2LDY2LDY2LDEpIDg5JSk7XFxuXFx0LS1idXR0b24tZGlzYWJsZWQtdGV4dDogYmxhY2s7XFxuXFx0LS1idXR0b24tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxMzNkZWcsIHJnYmEoMjMsMiw1MSwxKSAxNSUsIHJnYmEoNjgsNDYsMTAxLDEpIDg5JSk7XFxuXFxuXFx0LS1mcy1yZWc6IGNsYW1wKC42cmVtLCAuOHZ3LCAxcmVtKTtcXG5cXHQtLWZzLWZvcmU6IGNsYW1wKC41cmVtLCAxdncsIDFyZW0pO1xcblxcdC0tZnMtYmlnOiBjbGFtcCguOHJlbSwgMXZ3LCAxLjVyZW0pO1xcblxcdC0tZnMtZm9udC1zbWFsbDogY2xhbXAoLjVyZW0sIC44dncsIC45cmVtKTtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHR0cmFuc2l0aW9uOiBmbGV4IDJzO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLW1haW4tZ3JhZGllbnQpLCB1cmwoLi9pbWFnZXMvbW91bnRhaW5zLmpwZyk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRmb250LWZhbWlseTogJ2Z1dHVyYScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Ym9yZGVyOm5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tZ3JhZGllbnQpO1xcblxcdGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWRpc2FibGVkKTtcXG5cXHRjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiA4dmg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXg6bm9uZTtcXG59XFxuXFxuI3VuaXQtdG9nZ2xlIHtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG5cXHRwYWRkaW5nOiAwcmVtO1xcblxcdGZvbnQtc2l6ZTogY2xhbXAoLjdyZW0sIDF2dywgMS4ycmVtKTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR3aWR0aDogY2xhbXAoMTAwcHgsIDEyLjh2dywgMzAwcHgpO1xcblxcdGhlaWdodDogNDBweDtcXG59XFxuXFxuLnNlYXJjaC1hcmVhIHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbiNzZWFyY2gtZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIGxhYmVsIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNzZWFyY2gtaWNvbiB7XFxuXFx0aGVpZ2h0OiBjbGFtcCguOXJlbSwgMS4ydncsIDJyZW0pO1xcblxcdGZpbHRlcjogdmFyKC0tc3ZnLWZpbHRlcik7XFxufVxcblxcbiNzZWFyY2gge1xcblxcdGhlaWdodDogMS41cmVtO1xcblxcdHdpZHRoOiAyNXZ3O1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtcmVnKTtcXG5cXHRwYWRkaW5nOiAuMXJlbSAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAuMnJlbTtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40NDUpO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0Y29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbiNzZWFyY2g6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4jc2VhcmNoOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jc2VhcmNoLWJ1dHRvbiB7XFxuXFx0d2lkdGg6IDV2dztcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Vycm9yIHtcXG5cXHRjb2xvcjogcmVkO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAxMCU7XFxuXFx0dG9wOiA5MCU7XFxuXFx0Zm9udC1zaXplOiAuOHJlbTtcXG59XFxuXFxuI21vYmlsZS1mYXZlcyB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGFzcGVjdC1yYXRpbzogMS8xO1xcblxcdGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLm1haW4td2VhdGhlciB7XFxuXFx0ZmxleDogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxNSU7XFxufVxcblxcbi5kZXRhaWxzLXdyYXBwZXJ7XFxuXFx0aGVpZ2h0OiAzMDBweDtcXG5cXHR3aWR0aDogNDAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDIzMCwgMjUwLCAwKTtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMXJlbSA1MHB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxMCU7XFxuXFx0Z2FwOiAuNXJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLXdyYXBwZXIge1xcblxcdGhlaWdodDoxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE4LCAyMTgsIDIxOCwgMCk7XFxuXFx0cGFkZGluZzogNHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Y29sb3I6dmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLmNzLXdyYXBwZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5jaXR5LXN0YXRlIHtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLWJpZyk7XFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG4uY291bnRyeSB7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bWFyZ2luLXRvcDogNHB4O1xcblxcdG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxuXFxuLnRlbXAtd3JhcHBlciB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzllNzg4ZjAwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Y29sb3I6dmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLnRlbXAtaWNvbi13cmFwcGVyIHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnctaWNvbi1zbWFsbCB7XFxuXFx0d2lkdGg6Y2xhbXAoMnJlbSwgMnZ3LCAgMjAwcHgpO1xcblxcdGFzcGVjdC1yYXRpbzogMSAvMTtcXG59XFxuXFxuLmxhc3QtdXBkYXRlIHtcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcbn1cXG5cXG4jdGVtcGVyYXR1cmUge1xcblxcdGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNHZ3LCA1cmVtKTtcXG59XFxuXFxuI3RpY2tlciB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxuXFx0Y29sb3I6dmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLnRpY2tlci10ZXh0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRhbmltYXRpb246IHRpY2stcmlnaHQgMTVzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtcmVnKTtcXG59XFxuXFxuLnRpY2tlci10ZXh0IGxpIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcblxcbi50aWNrZXItdGV4dCBsaTpmaXJzdC1vZi10eXBlIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuI3Nob3ctd2Vla2x5LFxcbiNzaG93LWhvdXJseSB7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1mb250LXNtYWxsKTtcXG59XFxuXFxuI2Zhdi1pY29uIHtcXG5cXHRoZWlnaHQ6IGNsYW1wKDFyZW0sIDJ2dywgNXJlbSk7XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0ZmlsdGVyOiB2YXIoLS1zdmctZmlsdGVyKTtcXG59XFxuXFxuI2Zhdi1pY29uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6NDAwcHg7XFxuXFx0d2lkdGg6IDYwMHB4O1xcblxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Y29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWNvbnRhaW5lcj5oMSB7XFxuXFx0Zm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDIuNXJlbSApO1xcblxcdHBhZGRpbmc6IDFyZW0gMXJlbTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mYXYtbWVudSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuXFx0Z3JpZC1hdXRvLXJvd3M6IDc1cHg7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRmbGV4OiBhdXRvO1xcblxcdGdhcDoxcmVtO1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mYXZvcml0ZSB7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRwYWRkaW5nOiAwIC41cmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0b3ZlcmZsb3cteTogaGlkZGVuO1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbjtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLXJlZyk7XFxufVxcblxcbi5mYXZvcml0ZTpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxMTAlKTtcXG59XFxuXFxuLnJlbW92ZS1mYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA3JTtcXG5cXHRyaWdodDo1JTtcXG5cXHRmb250LXNpemU6IC45cmVtO1xcblxcdHBhZGRpbmc6IDFweCA0cHg7XFxuXFx0Y29sb3I6IGdyZXk7XFxufVxcblxcbi5yZW1vdmUtZmF2OmhvdmVye1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0d3JhcHBlciB7XFxuXFx0aGVpZ2h0OjB2aDtcXG5cXHR0cmFuc2l0aW9uOiBoZWlnaHQgLjVzO1xcbn1cXG5cXG4uY29sbGFwc2VyIHtcXG5cXHRoZWlnaHQ6IDEwJTtcXG5cXHRhc3BlY3QtcmF0aW86IDEgLyAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xcblxcdG92ZXJmbG93OmhpZGRlbjtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2RvdWJsZS1hcnJvdy1kb3duLXN2Z3JlcG8tY29tLnN2ZycpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcblxcdGhlaWdodDogOTAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcblxcdGdhcDogNHZ3O1xcblxcdHBhZGRpbmc6IDAgMnJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXG59XFxuXFxuLmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdHdpZHRoOiAxMiU7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzcxNjc3YzQxO1xcblxcdGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWhlYWRlciB7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1mb3JlKTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pY29uLWZvcmVjYXN0IHtcXG5cXHRmbGV4LXNocmluazogMTtcXG5cXHRoZWlnaHQ6IDQwJTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGV0YWlsLXdyYXBwZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHR3aWR0aDo5MCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtcmVnKTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vYmlsZS1ob3VyLWZvcmVjYXN0IHtcXG5cXHRtaW4taGVpZ2h0OiAyMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMjIwLCAyNTIsIDAuNjIzKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpY2stcmlnaHQge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTI1JSk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjc1JSk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXG5cXHQubWFpbi13ZWF0aGVyIHtcXG5cXHRcXHRnYXA6IDUlO1xcblxcdH1cXG5cXHQuZGV0YWlscy13cmFwcGVyIHtcXG5cXHRcXHRoZWlnaHQ6MjUwcHg7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDQwJSAxMCU7XFxuXFx0fVxcblxcdC53LWljb24tc21hbGwge1xcblxcdFxcdHJpZ2h0OjMwJTtcXG5cXHRcXHR0b3A6MSU7XFxuXFx0fVxcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDRyZW07XFxuXFx0XFx0aGVpZ2h0OiA1MHZoO1xcblxcdH1cXG5cXHQuZm9yZWNhc3QtZWxlbWVudCB7XFxuXFx0XFx0d2lkdGg6IDE1MHB4O1xcblxcdFxcdHBhZGRpbmc6IDAgMXJlbTtcXG5cXHR9XFxuXFx0I3NlYXJjaC1idXR0b24ge1xcblxcdFxcdHdpZHRoOiAxMDBweDtcXG5cXHR9XFxuXFx0I3NlYXJjaCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXHQuZmF2LW1lbnUge1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcblxcdFxcdGdyaWQtYXV0by1yb3dzOiA1MHB4O1xcblxcdH1cXG5cXG5cXHQucmVtb3ZlLWZhdiB7XFxuXFx0XFx0dG9wOiA1JTtcXG5cXHRcXHRyaWdodDogMyU7XFxuXFx0XFx0Zm9udC1zaXplOiAuN3JlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdFxcdGhlaWdodDogNzUlO1xcblxcdFxcdHdpZHRoOmF1dG87XFxuXFx0XFx0YXNwZWN0LXJhdGlvOiAxIC8gMTtcXG5cXHR9XFxuXFx0XFxuXFx0Lmljb24tZm9yZWNhc3Qge1xcblxcdFxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdFxcdGhlaWdodDogMzAlO1xcblxcdFxcdGFzcGVjdC1yYXRpbzogMS8xO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFx0Ym9keXtcXG5cXHRcXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcblxcdH1cXG5cXG5cXHQuc2VhcmNoLWFyZWEge1xcblxcdFxcdG1hcmdpbi1yaWdodDogMDtcXG5cXHR9XFxuXFxuXFx0I3NlYXJjaC1mb3JtIHtcXG5cXHRcXHRnYXA6IC41cmVtO1xcblxcdFxcdHdpZHRoOjEwMCU7XFxuXFx0fVxcblxcblxcdCNzZWFyY2gtaWNvbiB7XFxuXFx0XFx0aGVpZ2h0OjEuMnJlbTtcXG5cXHR9XFxuXFxuXFx0I3NlYXJjaCB7XFxuXFx0XFx0d2lkdGg6IDEyNXB4O1xcblxcdFxcdGZvbnQtc2l6ZTogLjhyZW07XFxuXFx0fVxcblxcblxcdCNzZWFyY2gtYnV0dG9uIHtcXG5cXHRcXHR3aWR0aDogNzVweDtcXG5cXHRcXHRoZWlnaHQ6MXJlbTtcXG5cXHRcXHRmb250LXNpemU6IC44cmVtO1xcblxcdH1cXG5cXG5cXHQubWFpbi13ZWF0aGVyIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogMDtcXG5cXHRcXHRmbGV4OmNvbnRlbnQ7XFxuXFx0XFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG5cXHR9XFxuXFxuXFx0LmRldGFpbHMtd3JhcHBlciB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdHdpZHRoOjEwMCU7XFxuXFx0fVxcblxcblxcdC5jcy13cmFwcGVyIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFxuXFx0LnRlbXAtd3JhcHBlciB7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0LnRlbXAtaWNvbi13cmFwcGVyIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0LmNpdHktc3RhdGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxuXFxuXFx0LmNvdW50cnkge1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxuXFxuXFx0LnctaWNvbi1zbWFsbCB7XFxuXFx0XFx0d2lkdGg6IDE1JTtcXG5cXHR9XFxuXFxuXFx0LmZhdm9yaXRlcy1jb250YWluZXIge1xcblxcdFxcdHdpZHRoOjBweDtcXG5cXHRcXHRoZWlnaHQ6IDBweDtcXG5cXHRcXHRvdmVyZmxvdy14OmhpZGRlbjtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMXM7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRcXHRib3JkZXI6bm9uZTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMDAzZWE7XFxuXFx0fVxcblxcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdCN0aWNrZXIge1xcblxcdFxcdGhlaWdodDoxMDAlO1xcblxcdFxcdHdpZHRoOiA5MCU7XFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0fVxcblxcblxcdC50aWNrZXItdGV4dCB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbmltYXRpb246IG5vbmU7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xcblxcdFxcdGdhcDowO1xcblxcdH1cXG5cXG5cXHQudGlja2VyLXRleHQgbGkge1xcblxcdFxcdGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAwO1xcblxcdFxcdHBhZGRpbmctdG9wOiAuNHJlbTtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogLjRyZW07XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdFxcdGhlaWdodDogMS41cmVtO1xcblxcdFxcdGRpc3BsYXk6ZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnRpY2tlci10ZXh0IGxpOmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMCU7XFxuXFx0XFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XFxuXFx0XFx0Ym9yZGVyLXRvcDogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0d3JhcHBlciB7XFxuXFx0XFx0d2lkdGg6IDYwJTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0IHtcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdFxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0d2lkdGg6IDkwJTtcXG5cXHRcXHRoZWlnaHQ6IDI1JTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0LyogLmljb24tZm9yZWNhc3Qge1xcblxcdFxcdGhlaWdodDogM3JlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWhlYWRlciB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3QtZGV0YWlsLXdyYXBwZXIge1xcblxcdFxcdHdpZHRoOiA0MCU7XFxuXFx0fSAqL1xcblxcblxcdCNlcnJvciBcXHR7XFxuXFx0XFx0dG9wOiAxMTAlO1xcblxcdFxcdGZvbnQtc2l6ZTogLjdyZW07XFxuXFx0fVxcbn1cXG5cXG4vKiA9PT09PSBTY3JvbGxiYXIgQ1NTID09PT09ICovXFxuICAvKiBGaXJlZm94ICovXFxuICAqIHtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgICBzY3JvbGxiYXItY29sb3I6ICM4NTZkYWQgIzA5MDExMTtcXG4gIH1cXG5cXG4gIC8qIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSAqL1xcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogNHB4O1xcblxcdGhlaWdodDogN3B4O1xcbiAgfVxcblxcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDkwMTExO1xcbiAgfVxcblxcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU2ZGFkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anM9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PTFlMyxlPTZlNCxuPTM2ZTUscj1cIm1pbGxpc2Vjb25kXCIsaT1cInNlY29uZFwiLHM9XCJtaW51dGVcIix1PVwiaG91clwiLGE9XCJkYXlcIixvPVwid2Vla1wiLGY9XCJtb250aFwiLGg9XCJxdWFydGVyXCIsYz1cInllYXJcIixkPVwiZGF0ZVwiLGw9XCJJbnZhbGlkIERhdGVcIiwkPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW1R0XFxzXSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC8seT0vXFxbKFteXFxdXSspXXxZezEsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csTT17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpLG9yZGluYWw6ZnVuY3Rpb24odCl7dmFyIGU9W1widGhcIixcInN0XCIsXCJuZFwiLFwicmRcIl0sbj10JTEwMDtyZXR1cm5cIltcIit0KyhlWyhuLTIwKSUxMF18fGVbbl18fGVbMF0pK1wiXVwifX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LHY9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixmKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGYpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpmLHk6Yyx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6aH1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LGc9XCJlblwiLEQ9e307RFtnXT1NO3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX30sUz1mdW5jdGlvbiB0KGUsbixyKXt2YXIgaTtpZighZSlyZXR1cm4gZztpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHM9ZS50b0xvd2VyQ2FzZSgpO0Rbc10mJihpPXMpLG4mJihEW3NdPW4saT1zKTt2YXIgdT1lLnNwbGl0KFwiLVwiKTtpZighaSYmdS5sZW5ndGg+MSlyZXR1cm4gdCh1WzBdKX1lbHNle3ZhciBhPWUubmFtZTtEW2FdPWUsaT1hfXJldHVybiFyJiZpJiYoZz1pKSxpfHwhciYmZ30sdz1mdW5jdGlvbih0LGUpe2lmKHAodCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBfKG4pfSxPPXY7Ty5sPVMsTy5pPXAsTy53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHcodCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBfPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTSh0KXt0aGlzLiRMPVModC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KX12YXIgbT1NLnByb3RvdHlwZTtyZXR1cm4gbS5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKE8udShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaCgkKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLiR4PXQueHx8e30sdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIE99LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49dyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTx3KHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gTy51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFPLnUoZSl8fGUsaD1PLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPU8udyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8udyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGgpe2Nhc2UgYzpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBmOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Ty5wKHQpLGg9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1oK1wiRGF0ZVwiLG5bZF09aCtcIkRhdGVcIixuW2ZdPWgrXCJNb250aFwiLG5bY109aCtcIkZ1bGxZZWFyXCIsblt1XT1oK1wiSG91cnNcIixuW3NdPWgrXCJNaW51dGVzXCIsbltpXT1oK1wiU2Vjb25kc1wiLG5bcl09aCtcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1mfHxvPT09Yyl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tPLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsaCl7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPU8ucChoKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPXcobCk7cmV0dXJuIE8udyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWYpcmV0dXJuIHRoaXMuc2V0KGYsdGhpcy4kTStyKTtpZigkPT09YylyZXR1cm4gdGhpcy5zZXQoYyx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBPLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPU8ueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsZj1uLm1vbnRocyxoPWZ1bmN0aW9uKHQsbixpLHMpe3JldHVybiB0JiYodFtuXXx8dChlLHIpKXx8aVtuXS5zbGljZSgwLHMpfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBPLnMocyUxMnx8MTIsdCxcIjBcIil9LGQ9bi5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sJD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Ty5zKGErMSwyLFwiMFwiKSxNTU06aChuLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Ty5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChuLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChuLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpPLnMocywyLFwiMFwiKSxoOmMoMSksaGg6YygyKSxhOmQocyx1LCEwKSxBOmQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpPLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpPLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Ty5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6aX07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LGUpe3JldHVybiBlfHwkW3RdfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsbCl7dmFyICQseT1PLnAoZCksTT13KHIpLG09KE0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSx2PXRoaXMtTSxnPU8ubSh0aGlzLE0pO3JldHVybiBnPSgkPXt9LCRbY109Zy8xMiwkW2ZdPWcsJFtoXT1nLzMsJFtvXT0odi1tKS82MDQ4ZTUsJFthXT0odi1tKS84NjRlNSwkW3VdPXYvbiwkW3NdPXYvZSwkW2ldPXYvdCwkKVt5XXx8dixsP2c6Ty5hKGcpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoZikuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBEW3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPVModCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBPLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLFQ9Xy5wcm90b3R5cGU7cmV0dXJuIHcucHJvdG90eXBlPVQsW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixmXSxbXCIkeVwiLGNdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe1RbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSx3LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sdyksdC4kaT0hMCksd30sdy5sb2NhbGU9Uyx3LmlzRGF5anM9cCx3LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHcoMWUzKnQpfSx3LmVuPURbZ10sdy5Mcz1ELHcucD17fSx3fSkpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3dpZGdldHMvbG9hZGVyLmNzcyc7XG5pbXBvcnQgZmF2X2ljb24gZnJvbSAnLi9pbWFnZXMvZmF2LnN2Zyc7XG5pbXBvcnQgc2VhcmNoX2ljb24gZnJvbSAnLi9pbWFnZXMvc2VhcmNoLnN2Zyc7XG5pbXBvcnQgbW9iaWxlX2ZhdmVzIGZyb20gJy4vaW1hZ2VzL2ZhdmVzLnN2Zyc7XG5pbXBvcnQgeyBmZXRjaFdlYXRoZXIsIGdldERhaWx5Rm9yZWNhc3QsIGdldEhvdXJseUZvcmVjYXN0LCBzaG93Rm9yZWNhc3QsIHN3aXRjaFVuaXRzIH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXInO1xuaW1wb3J0IHsgY2xlYXJGb3JlY2FzdENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jbGVhblVwJztcbmltcG9ydCB7IHdpbk9ic2VydmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3dpZGdldHMvd2luU2l6ZSc7XG5pbXBvcnQgeyBwb3B1bGF0ZUZhdm9yaXRlcywgc2V0TmV3RmF2b3JpdGUgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lkZ2V0cy9mYXZNYW5hZ2VyJztcblxubGV0IGRhaWx5X2ZvcmVjYXN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXdlZWtseScpO1xubGV0IGhvdXJseV9mb3JlY2FzdF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1ob3VybHknKTtcblxubGV0IG1fZmF2ZXNfYWN0aXZlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHByZXBGb3JGZXRjaCgpIHtcbiAgICBsZXQgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG4gICAgbGV0IGVfc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xuICAgIGlmKHF1ZXJ5LnZhbHVlID09PSAnJykge1xuICAgICAgICBlX3NwYW4udGV4dENvbnRlbnQgPSBcIlBsZWFzZSBlbnRlciBhIGxvY2F0aW9uIVwiXG4gICAgICAgIHJldHVybjtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGVfc3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuICAgIGZldGNoV2VhdGhlcihlbmNvZGVVUklDb21wb25lbnQocXVlcnkudmFsdWUpKTtcbiAgICByZXR1cm47XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50ID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF2LWljb24nKS5zcmMgPSBmYXZfaWNvbjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWljb24nKS5zcmMgPSBzZWFyY2hfaWNvbjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLWZhdmVzJykuc3JjID0gbW9iaWxlX2ZhdmVzO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnZmF2cycpKSB7XG4gICAgICAgIHBvcHVsYXRlRmF2b3JpdGVzKCk7XG4gICAgfVxuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudCcpKSB7XG4gICAgICAgIGZldGNoV2VhdGhlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudCcpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmZXRjaFdlYXRoZXIoJ0plcnNleStDaXR5Jyk7XG59KSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0LXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgc3dpdGNoVW5pdHMpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJlcEZvckZldGNoKCk7XG59KSk7XG5cbmRhaWx5X2ZvcmVjYXN0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIChldmVudCk9PiB7XG4gICAgZGFpbHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBpZihob3VybHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkKSB7XG4gICAgICAgIGhvdXJseV9mb3JlY2FzdF9idG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzaG93Rm9yZWNhc3QoZXZlbnQpO1xuICAgIHJldHVybjtcbn0pO1xuXG5ob3VybHlfZm9yZWNhc3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgaG91cmx5X2ZvcmVjYXN0X2J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgaWYoZGFpbHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkKSB7XG4gICAgICAgIGRhaWx5X2ZvcmVjYXN0X2J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNob3dGb3JlY2FzdChldmVudCk7XG4gICAgcmV0dXJuO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXYtaWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgc2V0TmV3RmF2b3JpdGUoKTtcbn0pXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbGUtZmF2ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIChldmVudCkgPT4ge1xuICAgIGxldCBmYXZfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlcy1jb250YWluZXInKTtcbiAgICBpZiAoIW1fZmF2ZXNfYWN0aXZlKSB7XG4gICAgICAgIGZhdl9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzkxdmgnO1xuICAgICAgICBtX2ZhdmVzX2FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmYXZfY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICBtX2ZhdmVzX2FjdGl2ZSA9IGZhbHNlO1xuICAgIHJldHVybjtcbn0pXG5cbiJdLCJuYW1lcyI6WyJkYXlqcyIsIm1ha2VEYWlseUZvcmVjYXN0RWxlbWVudCIsImQiLCJmb3JlY2FzdF9lbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRlIiwiYXBwZW5kQ2hpbGQiLCJzZXRGb3JlY2FzdEhlYWRlciIsImZvcm1hdCIsImFwcGVuZCIsInNldENvbmRpdGlvbkltYWdlIiwiZGF5IiwiY29uZGl0aW9uIiwiaWNvbiIsInNldFRlbXBlcmF0dXJlRGV0YWlsIiwiTWF0aCIsInJvdW5kIiwibWludGVtcF9mIiwibWF4dGVtcF9mIiwibWludGVtcF9jIiwibWF4dGVtcF9jIiwibWFrZUhvdXJseUZvcmVjYXN0RWxlbWVudCIsInQiLCJob3VyIiwidGltZSIsInRlbXBfZiIsInRlbXBfYyIsImNvbXB1dGVIb3VycyIsImN1cnJlbnRfZGF0ZXRpbWUiLCJjdXJyZW50IiwibGFzdF91cGRhdGVkIiwic3RhcnQiLCJOdW1iZXIiLCJkYXlfaW5keCIsImhvdXJfYXJyIiwibGltaXQiLCJwdXNoIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImgiLCJoZWFkZXIiLCJ0ZXh0Q29udGVudCIsImkiLCJjb25kX2ltZyIsInNyYyIsImYiLCJjIiwidGVtcF93cmFwcGVyIiwiZGV0YWlsc19mIiwiZGV0YWlsc19jIiwiY2xlYXJGb3JlY2FzdENvbnRhaW5lciIsImZvcmVjYXN0X2NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwiY29sbGFwc2VGb3JlY2FzdCIsImV2ZW50IiwiZm9yZWNhc3Rfd3JhcHBlciIsInN0eWxlIiwiaGVpZ2h0IiwiY29sbGFwc2VyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc2FibGVkIiwic2V0Q3VycmVudExvY2FsIiwicSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZXRMb2NhdGlvbiIsInMiLCJjb3VudHJ5Iiwic2V0VGVtcCIsInRlbXBfZWxlIiwic2V0RGF0ZSIsInNldFRpY2tlclRleHQiLCJkYXRhIiwidWwiLCJzZXRDb25kaXRpb24iLCJ0ZXh0Iiwic2V0UmVhbEZlZWwiLCJmZWVsc2xpa2VfZiIsInNldEh1bWlkaXR5IiwiaHVtaWRpdHkiLCJzZXRXaW5kU3BlZWQiLCJ3aW5kX2twaCIsImxpIiwidyIsImlkIiwicGxhY2Vob2xkZXIiLCJkaXNwbGF5TG9hZGVyIiwicmVtb3ZlTG9hZGVyIiwiYmFja2dyb3VuZFN3aXRjaCIsInJlcXVlc3QiLCJyZXFfZXh0cmEiLCJkYWlseV9mb3JlY2FzdCIsImhvdXJseV9mb3JlY2FzdCIsImZhaHJlbmhlaXQiLCJmZXRjaFdlYXRoZXIiLCJlX3NwYW4iLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInNldFdlYXRoZXIiLCJjb2RlIiwiZ2V0RGFpbHlGb3JlY2FzdCIsImdldEhvdXJseUZvcmVjYXN0Iiwic2hvd0ZvcmVjYXN0IiwibG9jYXRpb24iLCJuYW1lIiwicmVnaW9uIiwidGlja2VyIiwiZm9yZWNhc3Rfc2VjdGlvbiIsImZvckVhY2giLCJob3VycyIsInRpY2siLCJob3VybHkiLCJ3ZWVrbHkiLCJqdXN0aWZ5Q29udGVudCIsImVsZW1lbnQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzd2l0Y2hVbml0cyIsImZlZWxfZWxlIiwiZmVlbHNsaWtlX2MiLCJjbGVhciIsImRyaXp6bGUiLCJjbG91ZHkiLCJyYWluIiwic25vdyIsInRodW5kZXIiLCJjYyIsImJnIiwiZmF2b3JpdGVzIiwiaGFzT3duUHJvcGVydHkiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwic2V0TmV3RmF2b3JpdGUiLCJxdWVyeSIsImluY2x1ZGVzIiwiYWxlcnQiLCJzdHJpbmdpZnkiLCJuZXdfZWxlIiwibmV3RmF2RWxlbWVudCIsImZhdkNsaWNrSGFuZGxlciIsInBvcHVsYXRlRmF2b3JpdGVzIiwiZmF2X21lbnUiLCJmYXYiLCJmYXZfZWxlIiwiZmF2X2RpdiIsImNsb3NlIiwicmVtb3ZlRmF2RXZlbnRIYW5kbGVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInBhcmVudCIsInRhcmdldCIsInBhcmVudE5vZGUiLCJmYXZfaW5keCIsImluZGV4T2YiLCJzbGljZSIsInNwbGljZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImRpbW1lciIsInNwaW5uZXIiLCJ3aW5PYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2xpZW50V2lkdGgiLCJzZWFyY2hfZGl2IiwidGFyZ2V0X2RpdiIsInByZXBlbmQiLCJmb3JlY2FzdF9zZWN0IiwiZmF2X2NvbnRhaW5lciIsInBvc2l0aW9uIiwiY2xpZW50VG9wIiwidG9wIiwibGVmdCIsIndpZHRoIiwicmVtb3ZlQXR0cmlidXRlIiwib2JzZXJ2ZSIsImJvZHkiLCJmYXZfaWNvbiIsInNlYXJjaF9pY29uIiwibW9iaWxlX2ZhdmVzIiwiZGFpbHlfZm9yZWNhc3RfYnRuIiwiaG91cmx5X2ZvcmVjYXN0X2J0biIsIm1fZmF2ZXNfYWN0aXZlIiwicHJlcEZvckZldGNoIiwidmFsdWUiLCJ3aW5kb3ciLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=