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
  forecast_section.style.height = '25vh';
  return;
}
function switchUnits() {
  fahrenheit = !fahrenheit;
  let temp_ele = document.querySelector('#temperature');
  let feel_ele = document.querySelector('#feel');
  if (fahrenheit) {
    temp_ele.textContent = `${Math.round(data.current.temp_f)} °F`;
    feel_ele.textContent = `Feels like: ${Math.round(data.current.feelslike_f)} °F`;

    //This is ugly, but for current lack of a better solution, it works.
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
  if (cc > 999 && cc <= 1003) {
    bg.style.backgroundImage = `url(${_images_clear_jpg__WEBPACK_IMPORTED_MODULE_0__}`;
  } else if (cc > 1003 && cc <= 1087 || cc > 1134 && cc <= 1147) {
    bg.style.backgroundImage = `url(${_images_cloudy_jpg__WEBPACK_IMPORTED_MODULE_2__}`;
  } else if (cc > 1149 && cc <= 1172) {
    bg.style.backgroundImage = `url(${_images_drizzle_jpg__WEBPACK_IMPORTED_MODULE_1__}`;
  } else if (cc > 1179 && cc <= 1207 || cc > 1239 && cc <= 1264) {
    bg.style.backgroundImage = `url(${_images_rain_jpg__WEBPACK_IMPORTED_MODULE_3__}`;
  } else if (cc > 1209 && cc <= 1237) {
    bg.style.backgroundImage = `url(${_images_snow_jpg__WEBPACK_IMPORTED_MODULE_4__}`;
  } else if (cc > 1272 && cc <= 1282) {
    bg.style.backgroundImage = `url(${_images_thunder_storm_jpg__WEBPACK_IMPORTED_MODULE_5__}`;
  } else {
    bg.style.backgroundImage = `url(${_images_cloudy_jpg__WEBPACK_IMPORTED_MODULE_2__}`;
  }
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
      let forecast_sect = document.querySelector('.forecast');
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
      document.querySelector('body').append(forecast_sect);
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-size: cover;\n\ttransition: all 2s;\n}\n\nbutton {\n\tborder-radius: 1rem;\n\theight: 2rem;\n\tborder: 2px solid rgba(192, 192, 192, 0.486);\n\ttransition: all 2s;\n}\n\nbutton:hover {\n\tcursor: pointer;\n}\n\nbutton:disabled:hover {\n\tcursor: default;\n}\n\n.heading {\n\tdisplay:flex;\n\talign-items: center;\n\theight: 8vh;\n\tjustify-content: space-between;\n\tflex:none;\n\tbackground-color: rgba(0, 0, 0, 0.616);\n}\n\n#unit-toggle {\n\tmargin-left: 1rem;\n\tbackground-color: rgba(231, 231, 231, 0.493);\n\tpadding: 0rem 3rem;\n\tfont-size: 1.1rem;\n\tfont-weight: 500;\n}\n\n.search-area {\n\tdisplay:flex;\n\tgap: 1rem;\n\talign-items: center;\n\tmargin-right: 1rem;\n}\n\n#search-form {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: .5rem;\n\tposition:relative;\n}\n\n#search-form label {\n\tvertical-align: baseline;\n\tfont-size: 1.5rem;\n}\n\n#search-icon {\n\theight: 2rem;\n}\n\n#search {\n\theight: 1.5rem;\n\twidth: 25vw;\n\tfont-size: 1.2rem;\n\tpadding: .1rem .5rem;\n\tborder-radius: .2rem;\n\tborder-style: none;\n\tborder-bottom: 2px solid black;\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n}\n\n#search:focus {\n\toutline: none;\n}\n\n#search-button {\n\twidth: 5vw;\n}\n\n#error {\n\tcolor: red;\n\tposition: absolute;\n\tleft: 10%;\n\ttop: 90%;\n\tfont-size: .8rem;\n}\n\n#mobile-faves {\n\theight: 2rem;\n\taspect-ratio: 1/1;\n\tdisplay:none;\n}\n\n.main-weather {\n\tflex: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 10%;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n}\n\n.details-wrapper{\n\theight: 400px;\n\taspect-ratio: 1 / 1;\n\tbackground-color: rgba(207, 230, 250, 0);\n\tposition:relative;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tpadding: 1rem 50px;\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr 10%;\n\tgap: 1rem;\n}\n\n.location-wrapper {\n\theight:100%;\n\twidth: 90%;\n\tbackground-color: rgba(218, 218, 218, 0.411);\n\tpadding: 4px;\n\tborder-radius: 1rem;\n}\n\n.city-state {\n\tfont-size: 1.5rem;\n\tword-wrap: break-word;\n\tfont-weight: 600;\n}\n\n.country {\n\tfont-size: 1rem;\n\tfont-weight: 600;\n\tmargin-top: 4px;\n}\n\n\n.temp-wrapper {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 1rem;\n\tbackground-color: rgba(240, 255, 255, 0.397);\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tposition:relative;\n\tbox-sizing: border-box;\n\tpadding: 1rem;\n}\n\n.w-icon-small {\n\twidth:40px;\n\taspect-ratio: 1 /1;\n\tposition: absolute;\n\tright:10px;\n\ttop:10px;\n}\n\n.last-update {\n\tpadding: 1rem;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\ttext-decoration: underline;\n}\n\n#temperature {\n\tfont-size: 5rem;\n}\n\n#ticker {\n    height: 1.5rem;\n    width: 100%;\n\tbackground-color: rgba(240, 255, 255, 0.397);\n    border-radius: 4px;\n\toverflow-x: hidden;\n\toverflow-y: hidden;\n}\n\n.ticker-text {\n\tdisplay: flex;\n\tgap: 1rem;\n\talign-items: center;\n\theight: 100%;\n\tanimation: tick-right 15s linear infinite;\n\twhite-space: nowrap;\n\t\n}\n\n.ticker-text li {\n\twidth: 100%;\n\tpadding-right: 1rem;\n\tborder-right: 1px solid black;\n}\n\n\n.ticker-text li:first-of-type {\n\tpadding-left: 1rem;\n\tborder-left: 1px solid black;\n}\n\n.button-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n#fav-icon {\n\tposition:absolute;\n\ttop: 3%;\n\tright: 5%;\n\theight: 2rem;\n\taspect-ratio: 1/1;\n\tpadding: .5rem;\n\tborder-radius: 1rem;\n}\n\n#fav-icon:hover {\n\tcursor: pointer;\n}\n\n.favorites-container {\n\theight:400px;\n\twidth: 600px;\n\tflex-shrink: 1;\n\tbackground-color: rgba(207, 230, 250, 0.589);\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.favorites-container>h1 {\n\tfont-size: 2.5rem;\n\tpadding: 1rem 1rem;\n\tborder-bottom: 1px solid black;\n}\n\n.fav-menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-auto-rows: 75px;\n\toverflow-y: auto;\n\tflex: auto;\n\tgap:1rem;\n\tpadding: 1rem;\n}\n\n.favorite {\n\twidth:100%;\n\theight:100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: rgba(185, 220, 252, 0.623);\n\tborder-radius: 1rem;\n\ttext-align: center;\n\tposition: relative;\n\tuser-select: none;\n}\n\n.remove-fav {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 7%;\n\tright:5%;\n\tfont-size: .8rem;\n\tpadding: 1px 4px;\n\tborder: 1px solid grey;\n\tborder-radius: 50%;\n\tcolor: grey;\n}\n\n.remove-fav:hover{\n\tcursor: pointer;\n}\n\n.forecast {\n\theight: 0vh;\n\tdisplay: flex;\n\talign-items: center;\n\toverflow-x: auto;\n\tgap: 4vw;\n\tpadding: 0 2rem;\n\ttransition: all 2s;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n}\n\n.forecast-element {\n\twidth: 12%;\n\theight: 90%;\n\tbackground-color: rgba(233, 233, 233, 0.685);\n\tflex-shrink: 0;\n\tborder-radius: 1rem;\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.forecast-header {\n\tfont-size: 1.2rem;\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\n.icon-forecast {\n\tflex-shrink: 1;\n\theight: 40%;\n\taspect-ratio: 1/1;\n\tborder-radius: 1rem;\n}\n\n.forecast-detail-wrapper {\n\tborder: 1px solid rgba(173, 173, 173, 0.733);\n\tborder-radius: 4px;\n\twidth:90%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.1rem;\n}\n\n.mobile-hour-forecast {\n\tmin-height: 200px;\n\tbackground-color: rgba(185, 220, 252, 0.623);\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 90%;\n\toverflow-x: auto;\n}\n\n@keyframes tick-right {\n\t0% {\n\t\ttransform: translateX(125%);\n\t}\n\t100% {\n\t\ttransform: translateX(-225%);\n\t}\n}\n\n@media only screen and (max-width: 900px) and (min-width: 601px) {\n\t.favorites-container {\n\t\tmargin-right: 4rem;\n\t}\n\t.forecast-element {\n\t\twidth: 150px;\n\t\tpadding: 0 1rem;\n\t}\n\t#search-button {\n\t\twidth: 100px;\n\t}\n\t#search {\n\t\tfont-size: 1rem;\n\t}\n}\n\n@media only screen and (max-width: 600px) {\n\tbody{\n\t\tbackground-attachment: fixed;\n\t}\n\n\t#search-icon {\n\t\theight:1.2rem;\n\t}\n\n\t#search {\n\t\twidth: 125px;\n\t\tfont-size: .8rem;;\n\t}\n\n\t#search-button {\n\t\twidth: 75px;\n\t\theight:1.5rem;\n\t}\n\n\t.main-weather {\n\t\tflex-direction: column;\n\t\tgap: 0;\n\t\tflex:content;\n\t\talign-content: flex-start;\n\t}\n\n\t.details-wrapper {\n\t\tgrid-template-rows: auto 1fr auto auto;\n\t\theight: auto;\n\t\twidth:90%;\n\t}\n\n\t.city-state {\n\t\tfont-size: 1rem;\n\t}\n\n\t#temperature {\n\t\tfont-size: 3rem;\n\t}\n\n\t.last-update {\n\t\tfont-size: .8rem;\n\t}\n\n\t.w-icon-small {\n\t\twidth: 15%;\n\t}\n\n\t.favorites-container {\n\t\twidth:0px;\n\t\theight: 0px;\n\t\toverflow-x:hidden;\n\t\ttransition: all 1s;\n\t\tbackground-color: azure;\n\t}\n\n\t.favorites-container h1 {\n\t\tfont-size: 1rem;\n\t}\n\n\t#ticker {\n\t\theight:100%;\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.ticker-text {\n\t\tflex-direction: column;\n\t\tanimation: none;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twhite-space: normal;\n\t\tgap:0;\n\t}\n\n\t.ticker-text li {\n\t\tborder-top: 1px solid black;\n\t\tpadding-right: 0;\n\t\tpadding-top: .4rem;\n\t\tpadding-bottom: .4rem;\n\t\tborder-right: none;\n\t\theight: 1.5rem;\n\t\tdisplay:flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 1rem;\n\t}\n\n\t.ticker-text li:first-of-type {\n\t\tpadding-left: 0%;\n\t\tborder-left: none;\n\t\tborder-top: none;\n\t}\n\n\t#show-weekly,\n\t#show-hourly {\n\t\tfont-size: .7rem;\n\t}\n\n\t.forecast {\n\t\theight: 0px;\n\t\twidth: 80%;\n\t\ttransition: all 2s;\n\t\tflex-direction: column;\n\t}\n\n\t.forecast-element {\n\t\tflex-direction: row;\n\t\twidth: 90%;\n\t\theight: 35%;\n\t}\n\n\t.icon-forecast {\n\t\theight: 3rem;\n\t}\n\n\t.forecast-header {\n\t\tfont-size: 1rem;\n\t}\n\n\t.forecast-detail-wrapper {\n\t\twidth: 40%;\n\t}\n\n\t#error \t{\n\t\ttop: 110%;\n\t\tfont-size: .7rem;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-size: cover;\n\ttransition: all 2s;\n}\n\nbutton {\n\tborder-radius: 1rem;\n\theight: 2rem;\n\tborder: 2px solid rgba(192, 192, 192, 0.486);\n\ttransition: all 2s;\n}\n\nbutton:hover {\n\tcursor: pointer;\n}\n\nbutton:disabled:hover {\n\tcursor: default;\n}\n\n.heading {\n\tdisplay:flex;\n\talign-items: center;\n\theight: 8vh;\n\tjustify-content: space-between;\n\tflex:none;\n\tbackground-color: rgba(0, 0, 0, 0.616);\n}\n\n#unit-toggle {\n\tmargin-left: 1rem;\n\tbackground-color: rgba(231, 231, 231, 0.493);\n\tpadding: 0rem 3rem;\n\tfont-size: 1.1rem;\n\tfont-weight: 500;\n}\n\n.search-area {\n\tdisplay:flex;\n\tgap: 1rem;\n\talign-items: center;\n\tmargin-right: 1rem;\n}\n\n#search-form {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: .5rem;\n\tposition:relative;\n}\n\n#search-form label {\n\tvertical-align: baseline;\n\tfont-size: 1.5rem;\n}\n\n#search-icon {\n\theight: 2rem;\n}\n\n#search {\n\theight: 1.5rem;\n\twidth: 25vw;\n\tfont-size: 1.2rem;\n\tpadding: .1rem .5rem;\n\tborder-radius: .2rem;\n\tborder-style: none;\n\tborder-bottom: 2px solid black;\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n}\n\n#search:focus {\n\toutline: none;\n}\n\n#search-button {\n\twidth: 5vw;\n}\n\n#error {\n\tcolor: red;\n\tposition: absolute;\n\tleft: 10%;\n\ttop: 90%;\n\tfont-size: .8rem;\n}\n\n#mobile-faves {\n\theight: 2rem;\n\taspect-ratio: 1/1;\n\tdisplay:none;\n}\n\n.main-weather {\n\tflex: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 10%;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n}\n\n.details-wrapper{\n\theight: 400px;\n\taspect-ratio: 1 / 1;\n\tbackground-color: rgba(207, 230, 250, 0);\n\tposition:relative;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tpadding: 1rem 50px;\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr 10%;\n\tgap: 1rem;\n}\n\n.location-wrapper {\n\theight:100%;\n\twidth: 90%;\n\tbackground-color: rgba(218, 218, 218, 0.411);\n\tpadding: 4px;\n\tborder-radius: 1rem;\n}\n\n.city-state {\n\tfont-size: 1.5rem;\n\tword-wrap: break-word;\n\tfont-weight: 600;\n}\n\n.country {\n\tfont-size: 1rem;\n\tfont-weight: 600;\n\tmargin-top: 4px;\n}\n\n\n.temp-wrapper {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 1rem;\n\tbackground-color: rgba(240, 255, 255, 0.397);\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tposition:relative;\n\tbox-sizing: border-box;\n\tpadding: 1rem;\n}\n\n.w-icon-small {\n\twidth:40px;\n\taspect-ratio: 1 /1;\n\tposition: absolute;\n\tright:10px;\n\ttop:10px;\n}\n\n.last-update {\n\tpadding: 1rem;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\ttext-decoration: underline;\n}\n\n#temperature {\n\tfont-size: 5rem;\n}\n\n#ticker {\n    height: 1.5rem;\n    width: 100%;\n\tbackground-color: rgba(240, 255, 255, 0.397);\n    border-radius: 4px;\n\toverflow-x: hidden;\n\toverflow-y: hidden;\n}\n\n.ticker-text {\n\tdisplay: flex;\n\tgap: 1rem;\n\talign-items: center;\n\theight: 100%;\n\tanimation: tick-right 15s linear infinite;\n\twhite-space: nowrap;\n\t\n}\n\n.ticker-text li {\n\twidth: 100%;\n\tpadding-right: 1rem;\n\tborder-right: 1px solid black;\n}\n\n\n.ticker-text li:first-of-type {\n\tpadding-left: 1rem;\n\tborder-left: 1px solid black;\n}\n\n.button-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n#fav-icon {\n\tposition:absolute;\n\ttop: 3%;\n\tright: 5%;\n\theight: 2rem;\n\taspect-ratio: 1/1;\n\tpadding: .5rem;\n\tborder-radius: 1rem;\n}\n\n#fav-icon:hover {\n\tcursor: pointer;\n}\n\n.favorites-container {\n\theight:400px;\n\twidth: 600px;\n\tflex-shrink: 1;\n\tbackground-color: rgba(207, 230, 250, 0.589);\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.favorites-container>h1 {\n\tfont-size: 2.5rem;\n\tpadding: 1rem 1rem;\n\tborder-bottom: 1px solid black;\n}\n\n.fav-menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-auto-rows: 75px;\n\toverflow-y: auto;\n\tflex: auto;\n\tgap:1rem;\n\tpadding: 1rem;\n}\n\n.favorite {\n\twidth:100%;\n\theight:100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: rgba(185, 220, 252, 0.623);\n\tborder-radius: 1rem;\n\ttext-align: center;\n\tposition: relative;\n\tuser-select: none;\n}\n\n.remove-fav {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 7%;\n\tright:5%;\n\tfont-size: .8rem;\n\tpadding: 1px 4px;\n\tborder: 1px solid grey;\n\tborder-radius: 50%;\n\tcolor: grey;\n}\n\n.remove-fav:hover{\n\tcursor: pointer;\n}\n\n.forecast {\n\theight: 0vh;\n\tdisplay: flex;\n\talign-items: center;\n\toverflow-x: auto;\n\tgap: 4vw;\n\tpadding: 0 2rem;\n\ttransition: all 2s;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n}\n\n.forecast-element {\n\twidth: 12%;\n\theight: 90%;\n\tbackground-color: rgba(233, 233, 233, 0.685);\n\tflex-shrink: 0;\n\tborder-radius: 1rem;\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.forecast-header {\n\tfont-size: 1.2rem;\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\n.icon-forecast {\n\tflex-shrink: 1;\n\theight: 40%;\n\taspect-ratio: 1/1;\n\tborder-radius: 1rem;\n}\n\n.forecast-detail-wrapper {\n\tborder: 1px solid rgba(173, 173, 173, 0.733);\n\tborder-radius: 4px;\n\twidth:90%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.1rem;\n}\n\n.mobile-hour-forecast {\n\tmin-height: 200px;\n\tbackground-color: rgba(185, 220, 252, 0.623);\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 90%;\n\toverflow-x: auto;\n}\n\n@keyframes tick-right {\n\t0% {\n\t\ttransform: translateX(125%);\n\t}\n\t100% {\n\t\ttransform: translateX(-225%);\n\t}\n}\n\n@media only screen and (max-width: 900px) and (min-width: 601px) {\n\t.favorites-container {\n\t\tmargin-right: 4rem;\n\t}\n\t.forecast-element {\n\t\twidth: 150px;\n\t\tpadding: 0 1rem;\n\t}\n\t#search-button {\n\t\twidth: 100px;\n\t}\n\t#search {\n\t\tfont-size: 1rem;\n\t}\n}\n\n@media only screen and (max-width: 600px) {\n\tbody{\n\t\tbackground-attachment: fixed;\n\t}\n\n\t#search-icon {\n\t\theight:1.2rem;\n\t}\n\n\t#search {\n\t\twidth: 125px;\n\t\tfont-size: .8rem;;\n\t}\n\n\t#search-button {\n\t\twidth: 75px;\n\t\theight:1.5rem;\n\t}\n\n\t.main-weather {\n\t\tflex-direction: column;\n\t\tgap: 0;\n\t\tflex:content;\n\t\talign-content: flex-start;\n\t}\n\n\t.details-wrapper {\n\t\tgrid-template-rows: auto 1fr auto auto;\n\t\theight: auto;\n\t\twidth:90%;\n\t}\n\n\t.city-state {\n\t\tfont-size: 1rem;\n\t}\n\n\t#temperature {\n\t\tfont-size: 3rem;\n\t}\n\n\t.last-update {\n\t\tfont-size: .8rem;\n\t}\n\n\t.w-icon-small {\n\t\twidth: 15%;\n\t}\n\n\t.favorites-container {\n\t\twidth:0px;\n\t\theight: 0px;\n\t\toverflow-x:hidden;\n\t\ttransition: all 1s;\n\t\tbackground-color: azure;\n\t}\n\n\t.favorites-container h1 {\n\t\tfont-size: 1rem;\n\t}\n\n\t#ticker {\n\t\theight:100%;\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.ticker-text {\n\t\tflex-direction: column;\n\t\tanimation: none;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twhite-space: normal;\n\t\tgap:0;\n\t}\n\n\t.ticker-text li {\n\t\tborder-top: 1px solid black;\n\t\tpadding-right: 0;\n\t\tpadding-top: .4rem;\n\t\tpadding-bottom: .4rem;\n\t\tborder-right: none;\n\t\theight: 1.5rem;\n\t\tdisplay:flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 1rem;\n\t}\n\n\t.ticker-text li:first-of-type {\n\t\tpadding-left: 0%;\n\t\tborder-left: none;\n\t\tborder-top: none;\n\t}\n\n\t#show-weekly,\n\t#show-hourly {\n\t\tfont-size: .7rem;\n\t}\n\n\t.forecast {\n\t\theight: 0px;\n\t\twidth: 80%;\n\t\ttransition: all 2s;\n\t\tflex-direction: column;\n\t}\n\n\t.forecast-element {\n\t\tflex-direction: row;\n\t\twidth: 90%;\n\t\theight: 35%;\n\t}\n\n\t.icon-forecast {\n\t\theight: 3rem;\n\t}\n\n\t.forecast-header {\n\t\tfont-size: 1rem;\n\t}\n\n\t.forecast-detail-wrapper {\n\t\twidth: 40%;\n\t}\n\n\t#error \t{\n\t\ttop: 110%;\n\t\tfont-size: .7rem;\n\t}\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssZ0NBQWdDLGlCQUFpQixLQUFLLGdCQUFnQixnQkFBZ0IsdUJBQXVCLEtBQUssR0FBRyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlB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QUMsQ0FBQzZGLGdCQUFnQixDQUFDLGFBQWEsRUFBR2lELEtBQUssSUFBSztFQUMvRSxJQUFJbEIsYUFBYSxHQUFHL0ssUUFBUSxDQUFDbUQsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0VBQ2xFLElBQUksQ0FBQzBJLGNBQWMsRUFBRTtJQUNqQmQsYUFBYSxDQUFDaEUsS0FBSyxDQUFDUSxNQUFNLEdBQUcsTUFBTTtJQUNuQ3NFLGNBQWMsR0FBRyxJQUFJO0lBQ3JCO0VBQ0o7RUFFQWQsYUFBYSxDQUFDaEUsS0FBSyxDQUFDUSxNQUFNLEdBQUcsR0FBRztFQUNoQ3NFLGNBQWMsR0FBRyxLQUFLO0VBQ3RCO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvY2xlYW5VcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2xvY2FsSGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NldFdlYXRoZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9iYWNrZ3JvdW5kQ29udHJvbC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvZmF2TWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvbG9hZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvd2luU2l6ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvbG9hZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9sb2FkZXIuY3NzPzk1Y2IiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuZnVuY3Rpb24gbWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50KGQpIHtcbiAgICAvL0dpdmVuIGRheSwgcmV0dXJuIGRpdiBjb250YWluaW5nIHdlYXRoZXIgaW5mbyBmb3IgdGhlIGRheSBvZiB0aGUgd2Vla1xuICAgIGxldCBmb3JlY2FzdF9lbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9cbiAgICBmb3JlY2FzdF9lbGUuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZWxlbWVudCcpOyAvL1xuICAgIFxuICAgIGxldCBkYXRlID0gZGF5anMoZC5kYXRlLCAnWVlZWS1NTU1NLUQnKTsgLy9cbiAgICBmb3JlY2FzdF9lbGUuYXBwZW5kQ2hpbGQoc2V0Rm9yZWNhc3RIZWFkZXIoZGF0ZS5mb3JtYXQoJ2RkZGQnKSkpO1xuXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZChzZXRDb25kaXRpb25JbWFnZShkLmRheS5jb25kaXRpb24uaWNvbikpO1xuXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZChzZXRUZW1wZXJhdHVyZURldGFpbChgJHtNYXRoLnJvdW5kKGQuZGF5Lm1pbnRlbXBfZil9wrBGIC8gJHtNYXRoLnJvdW5kKGQuZGF5Lm1heHRlbXBfZil9wrBGYCxcbiAgICAgYCR7TWF0aC5yb3VuZChkLmRheS5taW50ZW1wX2MpfcKwQyAvICR7TWF0aC5yb3VuZChkLmRheS5tYXh0ZW1wX2MpfcKwQ2ApKTtcblxuICAgIHJldHVybiBmb3JlY2FzdF9lbGU7XG59XG5cbmZ1bmN0aW9uIG1ha2VIb3VybHlGb3JlY2FzdEVsZW1lbnQodCkge1xuICAgIGxldCBmb3JlY2FzdF9lbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JlY2FzdF9lbGUuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZWxlbWVudCcpO1xuICAgIFxuICAgIGxldCBob3VyID0gZGF5anModC50aW1lLCAnWVlZWS1NTU1NLUQnKTtcbiAgICBmb3JlY2FzdF9lbGUuYXBwZW5kQ2hpbGQoc2V0Rm9yZWNhc3RIZWFkZXIoaG91ci5mb3JtYXQoJ2RkZGQsIGg6bW0gQScpKSk7XG5cbiAgICBmb3JlY2FzdF9lbGUuYXBwZW5kQ2hpbGQoc2V0Q29uZGl0aW9uSW1hZ2UodC5jb25kaXRpb24uaWNvbikpO1xuXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZENoaWxkKHNldFRlbXBlcmF0dXJlRGV0YWlsKGAke01hdGgucm91bmQodC50ZW1wX2YpfcKwIEZgLCBcbiAgICAgICAgYCR7TWF0aC5yb3VuZCh0LnRlbXBfYyl9wrAgQ2ApKTtcblxuICAgIHJldHVybiBmb3JlY2FzdF9lbGU7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVIb3VycyhkKSB7XG4gICAgbGV0IGN1cnJlbnRfZGF0ZXRpbWUgPSBkLmN1cnJlbnQubGFzdF91cGRhdGVkO1xuICAgIGN1cnJlbnRfZGF0ZXRpbWUgPSBkYXlqcyhjdXJyZW50X2RhdGV0aW1lLCAnWVlZWS1NTU1NLUQnKTtcbiAgICBcbiAgICBsZXQgc3RhcnQgPSBOdW1iZXIoY3VycmVudF9kYXRldGltZS5mb3JtYXQoJ0hIJykpICsgMTtcbiAgICBsZXQgZGF5X2luZHggPSAwO1xuICAgIGxldCBob3VyX2FyciA9IFtdO1xuICAgIFxuICAgIGZvcihsZXQgbGltaXQgPSAyNDsgbGltaXQgPiAwOyBsaW1pdC0tKSB7XG4gICAgICAgIGlmIChzdGFydCA+IDIzKSB7XG4gICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICBkYXlfaW5keCsrO1xuICAgICAgICB9XG4gICAgICAgIGhvdXJfYXJyLnB1c2goZC5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXlfaW5keF0uaG91cltzdGFydF0pO1xuICAgICAgICBzdGFydCsrO1xuICAgIH1cblxuICAgIHJldHVybiBob3VyX2Fycjtcbn1cblxuZnVuY3Rpb24gc2V0Rm9yZWNhc3RIZWFkZXIoaCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1oZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBoO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIHNldENvbmRpdGlvbkltYWdlKGkpIHtcbiAgICBsZXQgY29uZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25kX2ltZy5zcmMgPSBpXG4gICAgY29uZF9pbWcuY2xhc3NMaXN0LmFkZCgnaWNvbi1mb3JlY2FzdCcpO1xuICAgIHJldHVybiBjb25kX2ltZztcbn1cblxuZnVuY3Rpb24gc2V0VGVtcGVyYXR1cmVEZXRhaWwoZiwgYykge1xuICAgIGxldCB0ZW1wX3dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGVtcF93cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWRldGFpbC13cmFwcGVyJyk7XG5cbiAgICBsZXQgZGV0YWlsc19mID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRldGFpbHNfZi5jbGFzc0xpc3QuYWRkKCdmYWhyZW5oZWl0Jyk7XG4gICAgZGV0YWlsc19mLnRleHRDb250ZW50ID0gZjtcblxuICAgIGxldCBkZXRhaWxzX2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGV0YWlsc19jLmNsYXNzTGlzdC5hZGQoJ2NlbHNpdXMnKTtcbiAgICBkZXRhaWxzX2MudGV4dENvbnRlbnQgPSBjO1xuXG4gICAgdGVtcF93cmFwcGVyLmFwcGVuZChkZXRhaWxzX2YsIGRldGFpbHNfYyk7XG4gICAgcmV0dXJuIHRlbXBfd3JhcHBlcjtcbn1cblxuZXhwb3J0IHsgbWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50LCBtYWtlSG91cmx5Rm9yZWNhc3RFbGVtZW50LCBjb21wdXRlSG91cnMgfTsiLCJmdW5jdGlvbiBjbGVhckZvcmVjYXN0Q29udGFpbmVyKCkge1xuICAgIGxldCBmb3JlY2FzdF9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICB3aGlsZShmb3JlY2FzdF9jb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBmb3JlY2FzdF9jb250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBjbGVhckZvcmVjYXN0Q29udGFpbmVyIH07IiwiZnVuY3Rpb24gc2V0Q3VycmVudExvY2FsKHEpIHtcbiAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudCcsIHEpO1xuICAgIH1cbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBzZXRDdXJyZW50TG9jYWwgfTsiLCJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmZ1bmN0aW9uIHNldExvY2F0aW9uIChjLCBzLCBjb3VudHJ5KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktc3RhdGUnKS50ZXh0Q29udGVudCA9IGAke2N9LCAke3N9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyeScpLnRleHRDb250ZW50ID0gYCR7Y291bnRyeX1gO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gc2V0VGVtcCh0KSB7XG4gICAgbGV0IHRlbXBfZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG4gICAgdGVtcF9lbGUudGV4dENvbnRlbnQgPSBgJHt0fWA7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBzZXREYXRlKGQpIHtcbiAgICBsZXQgZGF0ZSA9IGRheWpzKGQsICdZWVlZLU1NTU0tRCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LXVwZGF0ZScpLnRleHRDb250ZW50ID0gYFVwZGF0ZWQ6ICR7ZGF0ZS5mb3JtYXQoJ2RkZGQsIGg6bW0gQScpfWA7XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBzZXRMb2NhdGlvbiwgc2V0VGVtcCwgc2V0RGF0ZSB9OyIsImZ1bmN0aW9uIHNldFRpY2tlclRleHQoZGF0YSkge1xuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoc2V0Q29uZGl0aW9uKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCkpO1xuICAgIHVsLmFwcGVuZENoaWxkKHNldFJlYWxGZWVsKGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZikpO1xuICAgIHVsLmFwcGVuZENoaWxkKHNldEh1bWlkaXR5KGRhdGEuY3VycmVudC5odW1pZGl0eSkpO1xuICAgIHVsLmFwcGVuZENoaWxkKHNldFdpbmRTcGVlZChkYXRhLmN1cnJlbnQud2luZF9rcGgpKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCd0aWNrZXItdGV4dCcpO1xuICAgIHJldHVybiB1bDtcbn1cblxuZnVuY3Rpb24gc2V0Q29uZGl0aW9uKGMpIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLnRleHRDb250ZW50ID0gYENvbmRpdGlvbjogJHtjfWA7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBzZXRIdW1pZGl0eShoKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtofSVgO1xuICAgIHJldHVybiBsaTtcbn1cblxuZnVuY3Rpb24gc2V0V2luZFNwZWVkKHcpIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d30ga20vaGA7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBzZXRSZWFsRmVlbChmKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2Z9IMKwRmA7XG4gICAgbGkuaWQgPSAnZmVlbCc7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5leHBvcnQgeyBzZXRUaWNrZXJUZXh0IH07IiwiaW1wb3J0IHsgc2V0VGlja2VyVGV4dCB9IGZyb20gXCIuL3RpY2tlclwiO1xuaW1wb3J0IHBsYWNlaG9sZGVyIGZyb20gJy4vLi4vaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZyc7XG5pbXBvcnQgeyBzZXREYXRlLCBzZXRMb2NhdGlvbiwgc2V0VGVtcCB9IGZyb20gXCIuL3NldFdlYXRoZXJIZWxwZXJcIjtcbmltcG9ydCB7IGRpc3BsYXlMb2FkZXIsIHJlbW92ZUxvYWRlciB9IGZyb20gXCIuL3dpZGdldHMvbG9hZFwiO1xuaW1wb3J0IHsgbWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50LCBjb21wdXRlSG91cnMsIG1ha2VIb3VybHlGb3JlY2FzdEVsZW1lbnQgIH0gZnJvbSBcIi4vRm9yZWNhc3RcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRMb2NhbCB9IGZyb20gXCIuL2xvY2FsSGFuZGxlclwiO1xuaW1wb3J0IHsgY2xlYXJGb3JlY2FzdENvbnRhaW5lciB9IGZyb20gXCIuL2NsZWFuVXBcIjtcbmltcG9ydCB7IGJhY2tncm91bmRTd2l0Y2ggfSBmcm9tIFwiLi93aWRnZXRzL2JhY2tncm91bmRDb250cm9sXCI7XG5cbmxldCByZXF1ZXN0ID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTFiMDU0OTcyY2IzODRkNzg5YzUxOTUyMDIyMzE1MDUmcT0nO1xubGV0IHJlcV9leHRyYSA9ICcmZGF5cz01JmFxaT1ubyZhbGVydHM9bm8nXG5sZXQgZGF0YSA9IHt9O1xubGV0IGRhaWx5X2ZvcmVjYXN0ID0gW107XG5sZXQgaG91cmx5X2ZvcmVjYXN0ID0gW107XG5sZXQgZmFocmVuaGVpdCA9IHRydWU7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihxKSB7XG4gICAgZGlzcGxheUxvYWRlcigpO1xuICAgIGxldCBlX3NwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3InKTtcbiAgICB0cnl7XG4gICAgICAgIC8vTG9hZGluZyBjb21wb25lbnQgc3R1ZmYgaGVyZVxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0ICsgcSArIHJlcV9leHRyYSwgeydtb2RlJzogJ2NvcnMnfSk7XG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldFdlYXRoZXIoKTtcbiAgICAgICAgYmFja2dyb3VuZFN3aXRjaChOdW1iZXIoZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5jb2RlKSk7XG4gICAgICAgIGNsZWFyRm9yZWNhc3RDb250YWluZXIoKTtcbiAgICAgICAgZ2V0RGFpbHlGb3JlY2FzdCgpO1xuICAgICAgICBnZXRIb3VybHlGb3JlY2FzdCgpO1xuICAgICAgICBzaG93Rm9yZWNhc3QoKTtcbiAgICAgICAgc2V0Q3VycmVudExvY2FsKHEpO1xuICAgICAgICBlX3NwYW4udGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgZV9zcGFuLnRleHRDb250ZW50ID0gJ0Nhbm5vdCBmaW5kIGEgbWF0Y2hpbmcgbG9jYXRpb24uJztcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICByZW1vdmVMb2FkZXIoKTtcbn1cblxuZnVuY3Rpb24gc2V0V2VhdGhlcigpIHtcbiAgICBzZXRMb2NhdGlvbihkYXRhLmxvY2F0aW9uLm5hbWUsIGRhdGEubG9jYXRpb24ucmVnaW9uLCBkYXRhLmxvY2F0aW9uLmNvdW50cnkpO1xuICAgIHNldFRlbXAoKGZhaHJlbmhlaXQgPyBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wX2YpfSDCsEZgIDogYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcF9jKX0gwrBDYCkpO1xuICAgIHNldERhdGUoZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZCk7XG4gICAgbGV0IHRpY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aWNrZXInKTtcbiAgICBpZih0aWNrZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aWNrZXIuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgdGlja2VyLmFwcGVuZENoaWxkKHNldFRpY2tlclRleHQoZGF0YSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53LWljb24tc21hbGwnKS5zcmMgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG59XG5cblxuZnVuY3Rpb24gZ2V0RGFpbHlGb3JlY2FzdCgpIHtcbiAgICBkYWlseV9mb3JlY2FzdCA9IFtdO1xuICAgIGxldCBmb3JlY2FzdF9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG4gICAgKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkpLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgZGFpbHlfZm9yZWNhc3QucHVzaChtYWtlRGFpbHlGb3JlY2FzdEVsZW1lbnQoZGF5KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBnZXRIb3VybHlGb3JlY2FzdCgpIHtcbiAgICBob3VybHlfZm9yZWNhc3QgPSBbXTtcbiAgICBsZXQgZm9yZWNhc3Rfc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuICAgIGxldCBob3VycyA9IGNvbXB1dGVIb3VycyhkYXRhKTtcbiAgICBob3Vycy5mb3JFYWNoKHRpY2sgPT4ge1xuICAgICAgICBob3VybHlfZm9yZWNhc3QucHVzaChtYWtlSG91cmx5Rm9yZWNhc3RFbGVtZW50KHRpY2spKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5cblxuZnVuY3Rpb24gc2hvd0ZvcmVjYXN0KCkge1xuICAgIGxldCBmb3JlY2FzdF9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG4gICAgbGV0IGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LWhvdXJseScpO1xuICAgIGxldCB3ZWVrbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy13ZWVrbHknKTtcblxuICAgIGNsZWFyRm9yZWNhc3RDb250YWluZXIoKTtcblxuICAgIGlmKHdlZWtseS5kaXNhYmxlZCkge1xuICAgICAgICBmb3JlY2FzdF9zZWN0aW9uLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG4gICAgICAgIGRhaWx5X2ZvcmVjYXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBmb3JlY2FzdF9zZWN0aW9uLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYoaG91cmx5LmRpc2FibGVkKSB7XG4gICAgICAgIGZvcmVjYXN0X3NlY3Rpb24uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XG4gICAgICAgIGhvdXJseV9mb3JlY2FzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZm9yZWNhc3Rfc2VjdGlvbi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfSlcbiAgICB9ZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihmYWhyZW5oZWl0KSB7XG4gICAgICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxzaXVzJykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFocmVuaGVpdCcpKSkuZm9yRWFjaChlbGUgPT57XG4gICAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZvcmVjYXN0X3NlY3Rpb24uc3R5bGUuaGVpZ2h0ID0gJzI1dmgnO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVW5pdHMoKSB7XG4gICAgZmFocmVuaGVpdCA9ICFmYWhyZW5oZWl0O1xuICAgIGxldCB0ZW1wX2VsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZScpO1xuICAgIGxldCBmZWVsX2VsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVsJyk7XG4gICAgaWYoZmFocmVuaGVpdCkge1xuICAgICAgICB0ZW1wX2VsZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfZil9IMKwRmA7XG4gICAgICAgIGZlZWxfZWxlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YpfSDCsEZgO1xuICAgICAgICBcbiAgICAgICAgLy9UaGlzIGlzIHVnbHksIGJ1dCBmb3IgY3VycmVudCBsYWNrIG9mIGEgYmV0dGVyIHNvbHV0aW9uLCBpdCB3b3Jrcy5cbiAgICAgICAgLy9Ib3BlZnVsbHkgd2l0aG91dCBicmVha2luZy4gMjMgTWF5LCAyMDIzIDE0OjU5XG4gICAgICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWhyZW5oZWl0JykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxzaXVzJykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuOyBcbiAgICB9XG4gICAgdGVtcF9lbGUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wX2MpfSDCsENgO1xuICAgIGZlZWxfZWxlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MpfSDCsENgO1xuXG4gICAgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhaHJlbmhlaXQnKSkpLmZvckVhY2goZWxlID0+e1xuICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxzaXVzJykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCB7IGhvdXJseV9mb3JlY2FzdCwgZmV0Y2hXZWF0aGVyLCBzd2l0Y2hVbml0cywgZ2V0RGFpbHlGb3JlY2FzdCwgZ2V0SG91cmx5Rm9yZWNhc3QsIHNob3dGb3JlY2FzdCB9OyIsImltcG9ydCBjbGVhciBmcm9tICcuLi8uLi9pbWFnZXMvY2xlYXIuanBnJztcbmltcG9ydCBkcml6emxlIGZyb20gJy4uLy4uL2ltYWdlcy9kcml6emxlLmpwZyc7XG5pbXBvcnQgY2xvdWR5IGZyb20gJy4uLy4uL2ltYWdlcy9jbG91ZHkuanBnJztcbmltcG9ydCByYWluIGZyb20gJy4uLy4uL2ltYWdlcy9yYWluLmpwZyc7XG5pbXBvcnQgc25vdyBmcm9tICcuLi8uLi9pbWFnZXMvc25vdy5qcGcnO1xuaW1wb3J0IHRodW5kZXIgZnJvbSAnLi4vLi4vaW1hZ2VzL3RodW5kZXItc3Rvcm0uanBnJztcblxuZnVuY3Rpb24gYmFja2dyb3VuZFN3aXRjaChjYykge1xuICAgIGxldCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBpZihjYyA+IDk5OSAmJiBjYyA8PSAxMDAzKSB7XG4gICAgICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbGVhcn1gO1xuICAgIH0gZWxzZSBpZiAoKGNjID4gMTAwMyAmJiBjYyA8PSAxMDg3KSB8fCAoY2MgPiAxMTM0ICYmIGNjIDw9IDExNDcpKSB7XG4gICAgICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbG91ZHl9YDtcbiAgICB9IGVsc2UgaWYgKGNjID4gMTE0OSAmJiBjYyA8PSAxMTcyKSB7XG4gICAgICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkcml6emxlfWA7XG4gICAgfSBlbHNlIGlmICgoY2MgPiAxMTc5ICYmIGNjIDw9IDEyMDcpIHx8IChjYyA+IDEyMzkgJiYgY2MgPD0gMTI2NCkpIHtcbiAgICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3JhaW59YDtcbiAgICB9IGVsc2UgaWYgKGNjID4gMTIwOSAmJiBjYyA8PSAxMjM3KSB7XG4gICAgICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzbm93fWA7XG4gICAgfSBlbHNlIGlmIChjYyA+IDEyNzIgJiYgY2MgPD0gMTI4Mikge1xuICAgICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGh1bmRlcn1gO1xuICAgIH0gZWxzZXtcbiAgICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2Nsb3VkeX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgYmFja2dyb3VuZFN3aXRjaCB9OyIsImltcG9ydCB7IGZldGNoV2VhdGhlciB9IGZyb20gXCIuLi93ZWF0aGVyXCI7XG5cbmxldCBmYXZvcml0ZXMgPSBbXTtcbi8vQ2hlY2sgbG9jYWwgc3RvcmFnZSBmb3IgZXhpc3RpbmcgZmF2b3JpdGVzLCBpZiB0aGV5IGRvbid0IGV4aXN0LCBzZXQgZmF2b3JpdGVzIHRvIGVtcHR5IGFycmF5XG5pZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdmYXZzJykpIHtcbiAgICBmYXZvcml0ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZzJykpO1xufVxuXG5mdW5jdGlvbiBzZXROZXdGYXZvcml0ZSgpIHtcbiAgICBsZXQgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1zdGF0ZScpLnRleHRDb250ZW50O1xuICAgIFxuICAgIGlmKGZhdm9yaXRlcy5pbmNsdWRlcyhxdWVyeSkpIHtcbiAgICAgICAgYWxlcnQoJ1RoaXMgaXMgYWxyZWFkeSBmYXZvcml0ZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmYXZvcml0ZXMucHVzaChxdWVyeSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZhdnMnLCBKU09OLnN0cmluZ2lmeShmYXZvcml0ZXMpKTtcbiAgICBcbiAgICBsZXQgbmV3X2VsZSA9IG5ld0ZhdkVsZW1lbnQocXVlcnkpO1xuICAgIG5ld19lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYXZDbGlja0hhbmRsZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtbWVudScpLmFwcGVuZENoaWxkKG5ld19lbGUpO1xuICAgIFxuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVGYXZvcml0ZXMoKSB7XG4gICAgbGV0IGZhdl9tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1tZW51Jyk7XG4gICAgXG4gICAgZmF2b3JpdGVzLmZvckVhY2goZmF2ID0+IHtcbiAgICAgICAgbGV0IGZhdl9lbGUgPSBuZXdGYXZFbGVtZW50KGZhdilcbiAgICAgICAgZmF2X2VsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZhdkNsaWNrSGFuZGxlcik7XG4gICAgICAgIGZhdl9tZW51LmFwcGVuZENoaWxkKGZhdl9lbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybjtcbn1cblxuXG5mdW5jdGlvbiBuZXdGYXZFbGVtZW50KGZhdikge1xuICAgIGxldCBmYXZfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmF2X2Rpdi50ZXh0Q29udGVudCA9IGZhdjtcbiAgICBmYXZfZGl2LmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlJyk7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xvc2UudGV4dENvbnRlbnQgPSAn4p2MJztcbiAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtZmF2Jyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVGYXZFdmVudEhhbmRsZXIpO1xuICAgIGZhdl9kaXYuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIHJldHVybiBmYXZfZGl2O1xufVxuXG5mdW5jdGlvbiByZW1vdmVGYXZFdmVudEhhbmRsZXIoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgbGV0IGZhdl9pbmR4ID0gZmF2b3JpdGVzLmluZGV4T2YocGFyZW50LnRleHRDb250ZW50LnNsaWNlKDAsIC0xKSk7XG5cbiAgICBmYXZvcml0ZXMuc3BsaWNlKGZhdl9pbmR4LCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2cycsIEpTT04uc3RyaW5naWZ5KGZhdm9yaXRlcykpO1xuICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRmF2RXZlbnRIYW5kbGVyKTtcbiAgICBwYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYXZDbGlja0hhbmRsZXIpO1xuICAgIHBhcmVudC5yZW1vdmUoKTtcblxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZzJykpO1xuICAgIHJldHVybjsgICBcbn1cblxuZnVuY3Rpb24gZmF2Q2xpY2tIYW5kbGVyKGUpIHtcbiAgICBmZXRjaFdlYXRoZXIoZW5jb2RlVVJJQ29tcG9uZW50KGUudGFyZ2V0LnRleHRDb250ZW50KSk7XG59XG5cbi8vZGVidWdcbi8vIGZ1bmN0aW9uIGNsZWFyRmF2b3JpdGVzKCkge1xuLy8gICAgIGZhdm9yaXRlcyA9IFtdO1xuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZzJywgSlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVzKSk7XG4vLyAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZhdnMnKSk7XG4vLyB9XG5cbmV4cG9ydCB7IHNldE5ld0Zhdm9yaXRlLCBwb3B1bGF0ZUZhdm9yaXRlcyB9OyIsImZ1bmN0aW9uIGRpc3BsYXlMb2FkZXIoKSB7XG4gICAgbGV0IGRpbW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpbW1lci5jbGFzc0xpc3QuYWRkKCdkaW1tZXInKTtcbiAgICBsZXQgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnbGRzLXJpcHBsZScpO1xuICAgIHNwaW5uZXIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBkaW1tZXIuYXBwZW5kQ2hpbGQoc3Bpbm5lcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGRpbW1lcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxvYWRlcigpIHtcbiAgICBsZXQgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZHMtcmlwcGxlJyk7XG4gICAgd2hpbGUoc3Bpbm5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHNwaW5uZXIuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgc3Bpbm5lci5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGltbWVyJykucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlMb2FkZXIsIHJlbW92ZUxvYWRlciB9OyIsImltcG9ydCB7IGhvdXJseV9mb3JlY2FzdCB9IGZyb20gXCIuLi93ZWF0aGVyXCI7XG5cbmxldCB3aW5PYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICBmb3IoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICBpZiAoIGVudHJ5LnRhcmdldC5jbGllbnRXaWR0aCA8IDYwMCApIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2hfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdlYXRoZXInKTsgXG4gICAgICAgICAgICB0YXJnZXRfZGl2LnByZXBlbmQoc2VhcmNoX2Rpdik7XG4gICAgICAgICAgICBsZXQgZm9yZWNhc3Rfc2VjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuICAgICAgICAgICAgdGFyZ2V0X2Rpdi5hcHBlbmQoZm9yZWNhc3Rfc2VjdCk7XG4gICAgICAgICAgICBsZXQgZmF2X2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZXMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBmYXZfY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbGUtZmF2ZXMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbGUtZmF2ZXMnKS5jbGllbnRUb3ApO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5zdHlsZS50b3AgPSBgOHZoYDtcbiAgICAgICAgICAgIGZhdl9jb250YWluZXIuc3R5bGUubGVmdCA9IGAke2VudHJ5LnRhcmdldC5jbGllbnRXaWR0aCAtIDIwMH1weGA7XG4gICAgICAgICAgICBmYXZfY29udGFpbmVyLnN0eWxlLndpZHRoID0gYDIwMHB4YDtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCBlbnRyeS50YXJnZXQuY2xpZW50V2lkdGggPiA2MDApIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2hfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkaW5nJyk7IFxuICAgICAgICAgICAgdGFyZ2V0X2Rpdi5hcHBlbmQoc2VhcmNoX2Rpdik7XG4gICAgICAgICAgICBsZXQgZm9yZWNhc3Rfc2VjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChmb3JlY2FzdF9zZWN0KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vYmlsZS1mYXZlcycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBsZXQgZmF2X2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZXMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBmYXZfY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy9lbnRyeS50YXJnZXQuY2xpZW50V2lkdGggPCA4MDAgPyBtb2JpbGVfb24gPSB0cnVlIDogbW9iaWxlX29uID0gZmFsc2U7XG4gICAgfVxufSlcblxud2luT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5KTtcblxuZXhwb3J0IHt3aW5PYnNlcnZlcn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKkNyZWRpdHM6IC5sZHMtcmlwcGxlIGZyb20gaHR0cHM6Ly9sb2FkaW5nLmlvL2Nzcy8qL1xcblxcbi5kaW1tZXIge1xcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xcbiAgICBtaW4td2lkdGg6MTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NTUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiA0O1xcbn1cXG5cXG4ubGRzLXJpcHBsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgfVxcbiAgLmxkcy1yaXBwbGUgZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGFuaW1hdGlvbjogbGRzLXJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xcbiAgfVxcbiAgLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xcbiAgICAwJSB7XFxuICAgICAgdG9wOiAzNnB4O1xcbiAgICAgIGxlZnQ6IDM2cHg7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNC45JSB7XFxuICAgICAgdG9wOiAzNnB4O1xcbiAgICAgIGxlZnQ6IDM2cHg7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNSUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHRvcDogMHB4O1xcbiAgICAgIGxlZnQ6IDBweDtcXG4gICAgICB3aWR0aDogNzJweDtcXG4gICAgICBoZWlnaHQ6IDcycHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvbG9hZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvREFBb0Q7O0FBRXBEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDhEQUE4RDtFQUNoRTtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRTtNQUNFLFNBQVM7TUFDVCxVQUFVO01BQ1YsUUFBUTtNQUNSLFNBQVM7TUFDVCxVQUFVO0lBQ1o7SUFDQTtNQUNFLFNBQVM7TUFDVCxVQUFVO01BQ1YsUUFBUTtNQUNSLFNBQVM7TUFDVCxVQUFVO0lBQ1o7SUFDQTtNQUNFLFNBQVM7TUFDVCxVQUFVO01BQ1YsUUFBUTtNQUNSLFNBQVM7TUFDVCxVQUFVO0lBQ1o7SUFDQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWixVQUFVO0lBQ1o7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKkNyZWRpdHM6IC5sZHMtcmlwcGxlIGZyb20gaHR0cHM6Ly9sb2FkaW5nLmlvL2Nzcy8qL1xcblxcbi5kaW1tZXIge1xcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xcbiAgICBtaW4td2lkdGg6MTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NTUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiA0O1xcbn1cXG5cXG4ubGRzLXJpcHBsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgfVxcbiAgLmxkcy1yaXBwbGUgZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGFuaW1hdGlvbjogbGRzLXJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xcbiAgfVxcbiAgLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xcbiAgICAwJSB7XFxuICAgICAgdG9wOiAzNnB4O1xcbiAgICAgIGxlZnQ6IDM2cHg7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNC45JSB7XFxuICAgICAgdG9wOiAzNnB4O1xcbiAgICAgIGxlZnQ6IDM2cHg7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNSUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHRvcDogMHB4O1xcbiAgICAgIGxlZnQ6IDBweDtcXG4gICAgICB3aWR0aDogNzJweDtcXG4gICAgICBoZWlnaHQ6IDcycHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAycztcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNDg2KTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMnM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmhlYWRpbmcge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogOHZoO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmbGV4Om5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYxNik7XFxufVxcblxcbiN1bml0LXRvZ2dsZSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzEsIDIzMSwgMjMxLCAwLjQ5Myk7XFxuXFx0cGFkZGluZzogMHJlbSAzcmVtO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zZWFyY2gtYXJlYSB7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAuNXJlbTtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIGxhYmVsIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNzZWFyY2gtaWNvbiB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jc2VhcmNoIHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHR3aWR0aDogMjV2dztcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRwYWRkaW5nOiAuMXJlbSAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAuMnJlbTtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNzZWFyY2g6Zm9jdXMge1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZWFyY2gtYnV0dG9uIHtcXG5cXHR3aWR0aDogNXZ3O1xcbn1cXG5cXG4jZXJyb3Ige1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDEwJTtcXG5cXHR0b3A6IDkwJTtcXG5cXHRmb250LXNpemU6IC44cmVtO1xcbn1cXG5cXG4jbW9iaWxlLWZhdmVzIHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0ZGlzcGxheTpub25lO1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyIHtcXG5cXHRmbGV4OiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDEwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXG59XFxuXFxuLmRldGFpbHMtd3JhcHBlcntcXG5cXHRoZWlnaHQ6IDQwMHB4O1xcblxcdGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDIzMCwgMjUwLCAwKTtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMXJlbSA1MHB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxMCU7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubG9jYXRpb24td3JhcHBlciB7XFxuXFx0aGVpZ2h0OjEwMCU7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOCwgMjE4LCAyMTgsIDAuNDExKTtcXG5cXHRwYWRkaW5nOiA0cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNpdHktc3RhdGUge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY291bnRyeSB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG5cXG4udGVtcC13cmFwcGVyIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjU1LCAyNTUsIDAuMzk3KTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi53LWljb24tc21hbGwge1xcblxcdHdpZHRoOjQwcHg7XFxuXFx0YXNwZWN0LXJhdGlvOiAxIC8xO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDoxMHB4O1xcblxcdHRvcDoxMHB4O1xcbn1cXG5cXG4ubGFzdC11cGRhdGUge1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiN0ZW1wZXJhdHVyZSB7XFxuXFx0Zm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4jdGlja2VyIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNTUsIDI1NSwgMC4zOTcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLnRpY2tlci10ZXh0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRhbmltYXRpb246IHRpY2stcmlnaHQgMTVzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdFxcbn1cXG5cXG4udGlja2VyLXRleHQgbGkge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi50aWNrZXItdGV4dCBsaTpmaXJzdC1vZi10eXBlIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbiNmYXYtaWNvbiB7XFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxuXFx0dG9wOiAzJTtcXG5cXHRyaWdodDogNSU7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGFzcGVjdC1yYXRpbzogMS8xO1xcblxcdHBhZGRpbmc6IC41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbiNmYXYtaWNvbjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OjQwMHB4O1xcblxcdHdpZHRoOiA2MDBweDtcXG5cXHRmbGV4LXNocmluazogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgMjMwLCAyNTAsIDAuNTg5KTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWNvbnRhaW5lcj5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0cGFkZGluZzogMXJlbSAxcmVtO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZhdi1tZW51IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG5cXHRncmlkLWF1dG8tcm93czogNzVweDtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdGZsZXg6IGF1dG87XFxuXFx0Z2FwOjFyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZhdm9yaXRlIHtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdGhlaWdodDoxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMjIwLCAyNTIsIDAuNjIzKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5yZW1vdmUtZmF2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNyU7XFxuXFx0cmlnaHQ6NSU7XFxuXFx0Zm9udC1zaXplOiAuOHJlbTtcXG5cXHRwYWRkaW5nOiAxcHggNHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGNvbG9yOiBncmV5O1xcbn1cXG5cXG4ucmVtb3ZlLWZhdjpob3ZlcntcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuXFx0aGVpZ2h0OiAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxuXFx0Z2FwOiA0dnc7XFxuXFx0cGFkZGluZzogMCAycmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAycztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXG59XFxuXFxuLmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdHdpZHRoOiAxMiU7XFxuXFx0aGVpZ2h0OiA5MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDIzMywgMjMzLCAwLjY4NSk7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtaGVhZGVyIHtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pY29uLWZvcmVjYXN0IHtcXG5cXHRmbGV4LXNocmluazogMTtcXG5cXHRoZWlnaHQ6IDQwJTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGV0YWlsLXdyYXBwZXIge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTczLCAxNzMsIDE3MywgMC43MzMpO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHR3aWR0aDo5MCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4ubW9iaWxlLWhvdXItZm9yZWNhc3Qge1xcblxcdG1pbi1oZWlnaHQ6IDIwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg1LCAyMjAsIDI1MiwgMC42MjMpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxufVxcblxcbkBrZXlmcmFtZXMgdGljay1yaWdodCB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjUlKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMjUlKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDRyZW07XFxuXFx0fVxcblxcdC5mb3JlY2FzdC1lbGVtZW50IHtcXG5cXHRcXHR3aWR0aDogMTUwcHg7XFxuXFx0XFx0cGFkZGluZzogMCAxcmVtO1xcblxcdH1cXG5cXHQjc2VhcmNoLWJ1dHRvbiB7XFxuXFx0XFx0d2lkdGg6IDEwMHB4O1xcblxcdH1cXG5cXHQjc2VhcmNoIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFx0Ym9keXtcXG5cXHRcXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcblxcdH1cXG5cXG5cXHQjc2VhcmNoLWljb24ge1xcblxcdFxcdGhlaWdodDoxLjJyZW07XFxuXFx0fVxcblxcblxcdCNzZWFyY2gge1xcblxcdFxcdHdpZHRoOiAxMjVweDtcXG5cXHRcXHRmb250LXNpemU6IC44cmVtOztcXG5cXHR9XFxuXFxuXFx0I3NlYXJjaC1idXR0b24ge1xcblxcdFxcdHdpZHRoOiA3NXB4O1xcblxcdFxcdGhlaWdodDoxLjVyZW07XFxuXFx0fVxcblxcblxcdC5tYWluLXdlYXRoZXIge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiAwO1xcblxcdFxcdGZsZXg6Y29udGVudDtcXG5cXHRcXHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdH1cXG5cXG5cXHQuZGV0YWlscy13cmFwcGVyIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG8gYXV0bztcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0XFx0d2lkdGg6OTAlO1xcblxcdH1cXG5cXG5cXHQuY2l0eS1zdGF0ZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQjdGVtcGVyYXR1cmUge1xcblxcdFxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHR9XFxuXFxuXFx0Lmxhc3QtdXBkYXRlIHtcXG5cXHRcXHRmb250LXNpemU6IC44cmVtO1xcblxcdH1cXG5cXG5cXHQudy1pY29uLXNtYWxsIHtcXG5cXHRcXHR3aWR0aDogMTUlO1xcblxcdH1cXG5cXG5cXHQuZmF2b3JpdGVzLWNvbnRhaW5lciB7XFxuXFx0XFx0d2lkdGg6MHB4O1xcblxcdFxcdGhlaWdodDogMHB4O1xcblxcdFxcdG92ZXJmbG93LXg6aGlkZGVuO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAxcztcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5cXHR9XFxuXFxuXFx0LmZhdm9yaXRlcy1jb250YWluZXIgaDEge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0I3RpY2tlciB7XFxuXFx0XFx0aGVpZ2h0OjEwMCU7XFxuXFx0XFx0d2lkdGg6IDkwJTtcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXG5cXHR9XFxuXFxuXFx0LnRpY2tlci10ZXh0IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFuaW1hdGlvbjogbm9uZTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuXFx0XFx0Z2FwOjA7XFxuXFx0fVxcblxcblxcdC50aWNrZXItdGV4dCBsaSB7XFxuXFx0XFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDA7XFxuXFx0XFx0cGFkZGluZy10b3A6IC40cmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAuNHJlbTtcXG5cXHRcXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFx0XFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0XFx0ZGlzcGxheTpmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQudGlja2VyLXRleHQgbGk6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAwJTtcXG5cXHRcXHRib3JkZXItbGVmdDogbm9uZTtcXG5cXHRcXHRib3JkZXItdG9wOiBub25lO1xcblxcdH1cXG5cXG5cXHQjc2hvdy13ZWVrbHksXFxuXFx0I3Nob3ctaG91cmx5IHtcXG5cXHRcXHRmb250LXNpemU6IC43cmVtO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3Qge1xcblxcdFxcdGhlaWdodDogMHB4O1xcblxcdFxcdHdpZHRoOiA4MCU7XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDJzO1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdC1lbGVtZW50IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdHdpZHRoOiA5MCU7XFxuXFx0XFx0aGVpZ2h0OiAzNSU7XFxuXFx0fVxcblxcblxcdC5pY29uLWZvcmVjYXN0IHtcXG5cXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdC1oZWFkZXIge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWRldGFpbC13cmFwcGVyIHtcXG5cXHRcXHR3aWR0aDogNDAlO1xcblxcdH1cXG5cXG5cXHQjZXJyb3IgXFx0e1xcblxcdFxcdHRvcDogMTEwJTtcXG5cXHRcXHRmb250LXNpemU6IC43cmVtO1xcblxcdH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osNENBQTRDO0NBQzVDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsOEJBQThCO0NBQzlCLFNBQVM7Q0FDVCxzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsNENBQTRDO0NBQzVDLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZ0JB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Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyxTQUFTO0VBQ1QsZ0JBQWdCO0NBQ2pCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDJzO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTkyLCAxOTIsIDE5MiwgMC40ODYpO1xcblxcdHRyYW5zaXRpb246IGFsbCAycztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XFxuXFx0Y3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiA4dmg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXg6bm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjE2KTtcXG59XFxuXFxuI3VuaXQtdG9nZ2xlIHtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSwgMjMxLCAyMzEsIDAuNDkzKTtcXG5cXHRwYWRkaW5nOiAwcmVtIDNyZW07XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNlYXJjaC1hcmVhIHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jc2VhcmNoLWZvcm0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IC41cmVtO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4jc2VhcmNoLWZvcm0gbGFiZWwge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI3NlYXJjaC1pY29uIHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxufVxcblxcbiNzZWFyY2gge1xcblxcdGhlaWdodDogMS41cmVtO1xcblxcdHdpZHRoOiAyNXZ3O1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdHBhZGRpbmc6IC4xcmVtIC41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuI3NlYXJjaDpmb2N1cyB7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3NlYXJjaC1idXR0b24ge1xcblxcdHdpZHRoOiA1dnc7XFxufVxcblxcbiNlcnJvciB7XFxuXFx0Y29sb3I6IHJlZDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMTAlO1xcblxcdHRvcDogOTAlO1xcblxcdGZvbnQtc2l6ZTogLjhyZW07XFxufVxcblxcbiNtb2JpbGUtZmF2ZXMge1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5tYWluLXdlYXRoZXIge1xcblxcdGZsZXg6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xcbn1cXG5cXG4uZGV0YWlscy13cmFwcGVye1xcblxcdGhlaWdodDogNDAwcHg7XFxuXFx0YXNwZWN0LXJhdGlvOiAxIC8gMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgMjMwLCAyNTAsIDApO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwYWRkaW5nOiAxcmVtIDUwcHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDEwJTtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5sb2NhdGlvbi13cmFwcGVyIHtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHR3aWR0aDogOTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE4LCAyMTgsIDIxOCwgMC40MTEpO1xcblxcdHBhZGRpbmc6IDRweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uY2l0eS1zdGF0ZSB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jb3VudHJ5IHtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRtYXJnaW4tdG9wOiA0cHg7XFxufVxcblxcblxcbi50ZW1wLXdyYXBwZXIge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNTUsIDI1NSwgMC4zOTcpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnctaWNvbi1zbWFsbCB7XFxuXFx0d2lkdGg6NDBweDtcXG5cXHRhc3BlY3QtcmF0aW86IDEgLzE7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OjEwcHg7XFxuXFx0dG9wOjEwcHg7XFxufVxcblxcbi5sYXN0LXVwZGF0ZSB7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI3RlbXBlcmF0dXJlIHtcXG5cXHRmb250LXNpemU6IDVyZW07XFxufVxcblxcbiN0aWNrZXIge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI1NSwgMjU1LCAwLjM5Nyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxuXFx0b3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4udGlja2VyLXRleHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGFuaW1hdGlvbjogdGljay1yaWdodCAxNXMgbGluZWFyIGluZmluaXRlO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0XFxufVxcblxcbi50aWNrZXItdGV4dCBsaSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLnRpY2tlci10ZXh0IGxpOmZpcnN0LW9mLXR5cGUge1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuI2Zhdi1pY29uIHtcXG5cXHRwb3NpdGlvbjphYnNvbHV0ZTtcXG5cXHR0b3A6IDMlO1xcblxcdHJpZ2h0OiA1JTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0cGFkZGluZzogLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuI2Zhdi1pY29uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6NDAwcHg7XFxuXFx0d2lkdGg6IDYwMHB4O1xcblxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCAyMzAsIDI1MCwgMC41ODkpO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mYXZvcml0ZXMtY29udGFpbmVyPmgxIHtcXG5cXHRmb250LXNpemU6IDIuNXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtIDFyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZmF2LW1lbnUge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcblxcdGdyaWQtYXV0by1yb3dzOiA3NXB4O1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0ZmxleDogYXV0bztcXG5cXHRnYXA6MXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZmF2b3JpdGUge1xcblxcdHdpZHRoOjEwMCU7XFxuXFx0aGVpZ2h0OjEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg1LCAyMjAsIDI1MiwgMC42MjMpO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnJlbW92ZS1mYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA3JTtcXG5cXHRyaWdodDo1JTtcXG5cXHRmb250LXNpemU6IC44cmVtO1xcblxcdHBhZGRpbmc6IDFweCA0cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0Y29sb3I6IGdyZXk7XFxufVxcblxcbi5yZW1vdmUtZmF2OmhvdmVye1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG5cXHRoZWlnaHQ6IDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRnYXA6IDR2dztcXG5cXHRwYWRkaW5nOiAwIDJyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDJzO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZWxlbWVudCB7XFxuXFx0d2lkdGg6IDEyJTtcXG5cXHRoZWlnaHQ6IDkwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMjMzLCAyMzMsIDAuNjg1KTtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdC1oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmljb24tZm9yZWNhc3Qge1xcblxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdGhlaWdodDogNDAlO1xcblxcdGFzcGVjdC1yYXRpbzogMS8xO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5mb3JlY2FzdC1kZXRhaWwtd3JhcHBlciB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgxNzMsIDE3MywgMTczLCAwLjczMyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdHdpZHRoOjkwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5tb2JpbGUtaG91ci1mb3JlY2FzdCB7XFxuXFx0bWluLWhlaWdodDogMjAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODUsIDIyMCwgMjUyLCAwLjYyMyk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG59XFxuXFxuQGtleWZyYW1lcyB0aWNrLXJpZ2h0IHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyNSUpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIyNSUpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkgYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XFxuXFx0LmZhdm9yaXRlcy1jb250YWluZXIge1xcblxcdFxcdG1hcmdpbi1yaWdodDogNHJlbTtcXG5cXHR9XFxuXFx0LmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdFxcdHdpZHRoOiAxNTBweDtcXG5cXHRcXHRwYWRkaW5nOiAwIDFyZW07XFxuXFx0fVxcblxcdCNzZWFyY2gtYnV0dG9uIHtcXG5cXHRcXHR3aWR0aDogMTAwcHg7XFxuXFx0fVxcblxcdCNzZWFyY2gge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG5cXHRib2R5e1xcblxcdFxcdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuXFx0fVxcblxcblxcdCNzZWFyY2gtaWNvbiB7XFxuXFx0XFx0aGVpZ2h0OjEuMnJlbTtcXG5cXHR9XFxuXFxuXFx0I3NlYXJjaCB7XFxuXFx0XFx0d2lkdGg6IDEyNXB4O1xcblxcdFxcdGZvbnQtc2l6ZTogLjhyZW07O1xcblxcdH1cXG5cXG5cXHQjc2VhcmNoLWJ1dHRvbiB7XFxuXFx0XFx0d2lkdGg6IDc1cHg7XFxuXFx0XFx0aGVpZ2h0OjEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0Lm1haW4td2VhdGhlciB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IDA7XFxuXFx0XFx0ZmxleDpjb250ZW50O1xcblxcdFxcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0fVxcblxcblxcdC5kZXRhaWxzLXdyYXBwZXIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0byBhdXRvO1xcblxcdFxcdGhlaWdodDogYXV0bztcXG5cXHRcXHR3aWR0aDo5MCU7XFxuXFx0fVxcblxcblxcdC5jaXR5LXN0YXRlIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdCN0ZW1wZXJhdHVyZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdH1cXG5cXG5cXHQubGFzdC11cGRhdGUge1xcblxcdFxcdGZvbnQtc2l6ZTogLjhyZW07XFxuXFx0fVxcblxcblxcdC53LWljb24tc21hbGwge1xcblxcdFxcdHdpZHRoOiAxNSU7XFxuXFx0fVxcblxcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRcXHR3aWR0aDowcHg7XFxuXFx0XFx0aGVpZ2h0OiAwcHg7XFxuXFx0XFx0b3ZlcmZsb3cteDpoaWRkZW47XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDFzO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcblxcdH1cXG5cXG5cXHQuZmF2b3JpdGVzLWNvbnRhaW5lciBoMSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQjdGlja2VyIHtcXG5cXHRcXHRoZWlnaHQ6MTAwJTtcXG5cXHRcXHR3aWR0aDogOTAlO1xcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcblxcdH1cXG5cXG5cXHQudGlja2VyLXRleHQge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YW5pbWF0aW9uOiBub25lO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcXG5cXHRcXHRnYXA6MDtcXG5cXHR9XFxuXFxuXFx0LnRpY2tlci10ZXh0IGxpIHtcXG5cXHRcXHRib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMDtcXG5cXHRcXHRwYWRkaW5nLXRvcDogLjRyZW07XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IC40cmVtO1xcblxcdFxcdGJvcmRlci1yaWdodDogbm9uZTtcXG5cXHRcXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHRcXHRkaXNwbGF5OmZsZXg7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdC50aWNrZXItdGV4dCBsaTpmaXJzdC1vZi10eXBlIHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDAlO1xcblxcdFxcdGJvcmRlci1sZWZ0OiBub25lO1xcblxcdFxcdGJvcmRlci10b3A6IG5vbmU7XFxuXFx0fVxcblxcblxcdCNzaG93LXdlZWtseSxcXG5cXHQjc2hvdy1ob3VybHkge1xcblxcdFxcdGZvbnQtc2l6ZTogLjdyZW07XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdCB7XFxuXFx0XFx0aGVpZ2h0OiAwcHg7XFxuXFx0XFx0d2lkdGg6IDgwJTtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMnM7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0d2lkdGg6IDkwJTtcXG5cXHRcXHRoZWlnaHQ6IDM1JTtcXG5cXHR9XFxuXFxuXFx0Lmljb24tZm9yZWNhc3Qge1xcblxcdFxcdGhlaWdodDogM3JlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWhlYWRlciB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3QtZGV0YWlsLXdyYXBwZXIge1xcblxcdFxcdHdpZHRoOiA0MCU7XFxuXFx0fVxcblxcblxcdCNlcnJvciBcXHR7XFxuXFx0XFx0dG9wOiAxMTAlO1xcblxcdFxcdGZvbnQtc2l6ZTogLjdyZW07XFxuXFx0fVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anM9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PTFlMyxlPTZlNCxuPTM2ZTUscj1cIm1pbGxpc2Vjb25kXCIsaT1cInNlY29uZFwiLHM9XCJtaW51dGVcIix1PVwiaG91clwiLGE9XCJkYXlcIixvPVwid2Vla1wiLGY9XCJtb250aFwiLGg9XCJxdWFydGVyXCIsYz1cInllYXJcIixkPVwiZGF0ZVwiLGw9XCJJbnZhbGlkIERhdGVcIiwkPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW1R0XFxzXSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC8seT0vXFxbKFteXFxdXSspXXxZezEsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csTT17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpLG9yZGluYWw6ZnVuY3Rpb24odCl7dmFyIGU9W1widGhcIixcInN0XCIsXCJuZFwiLFwicmRcIl0sbj10JTEwMDtyZXR1cm5cIltcIit0KyhlWyhuLTIwKSUxMF18fGVbbl18fGVbMF0pK1wiXVwifX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LHY9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixmKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGYpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpmLHk6Yyx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6aH1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LGc9XCJlblwiLEQ9e307RFtnXT1NO3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX30sUz1mdW5jdGlvbiB0KGUsbixyKXt2YXIgaTtpZighZSlyZXR1cm4gZztpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHM9ZS50b0xvd2VyQ2FzZSgpO0Rbc10mJihpPXMpLG4mJihEW3NdPW4saT1zKTt2YXIgdT1lLnNwbGl0KFwiLVwiKTtpZighaSYmdS5sZW5ndGg+MSlyZXR1cm4gdCh1WzBdKX1lbHNle3ZhciBhPWUubmFtZTtEW2FdPWUsaT1hfXJldHVybiFyJiZpJiYoZz1pKSxpfHwhciYmZ30sdz1mdW5jdGlvbih0LGUpe2lmKHAodCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBfKG4pfSxPPXY7Ty5sPVMsTy5pPXAsTy53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHcodCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBfPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTSh0KXt0aGlzLiRMPVModC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KX12YXIgbT1NLnByb3RvdHlwZTtyZXR1cm4gbS5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKE8udShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaCgkKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLiR4PXQueHx8e30sdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIE99LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49dyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTx3KHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gTy51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFPLnUoZSl8fGUsaD1PLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPU8udyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8udyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGgpe2Nhc2UgYzpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBmOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Ty5wKHQpLGg9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1oK1wiRGF0ZVwiLG5bZF09aCtcIkRhdGVcIixuW2ZdPWgrXCJNb250aFwiLG5bY109aCtcIkZ1bGxZZWFyXCIsblt1XT1oK1wiSG91cnNcIixuW3NdPWgrXCJNaW51dGVzXCIsbltpXT1oK1wiU2Vjb25kc1wiLG5bcl09aCtcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1mfHxvPT09Yyl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tPLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsaCl7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPU8ucChoKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPXcobCk7cmV0dXJuIE8udyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWYpcmV0dXJuIHRoaXMuc2V0KGYsdGhpcy4kTStyKTtpZigkPT09YylyZXR1cm4gdGhpcy5zZXQoYyx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBPLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPU8ueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsZj1uLm1vbnRocyxoPWZ1bmN0aW9uKHQsbixpLHMpe3JldHVybiB0JiYodFtuXXx8dChlLHIpKXx8aVtuXS5zbGljZSgwLHMpfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBPLnMocyUxMnx8MTIsdCxcIjBcIil9LGQ9bi5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sJD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Ty5zKGErMSwyLFwiMFwiKSxNTU06aChuLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Ty5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChuLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChuLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpPLnMocywyLFwiMFwiKSxoOmMoMSksaGg6YygyKSxhOmQocyx1LCEwKSxBOmQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpPLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpPLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Ty5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6aX07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LGUpe3JldHVybiBlfHwkW3RdfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsbCl7dmFyICQseT1PLnAoZCksTT13KHIpLG09KE0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSx2PXRoaXMtTSxnPU8ubSh0aGlzLE0pO3JldHVybiBnPSgkPXt9LCRbY109Zy8xMiwkW2ZdPWcsJFtoXT1nLzMsJFtvXT0odi1tKS82MDQ4ZTUsJFthXT0odi1tKS84NjRlNSwkW3VdPXYvbiwkW3NdPXYvZSwkW2ldPXYvdCwkKVt5XXx8dixsP2c6Ty5hKGcpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoZikuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBEW3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPVModCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBPLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLFQ9Xy5wcm90b3R5cGU7cmV0dXJuIHcucHJvdG90eXBlPVQsW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixmXSxbXCIkeVwiLGNdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe1RbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSx3LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sdyksdC4kaT0hMCksd30sdy5sb2NhbGU9Uyx3LmlzRGF5anM9cCx3LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHcoMWUzKnQpfSx3LmVuPURbZ10sdy5Mcz1ELHcucD17fSx3fSkpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvd2lkZ2V0cy9sb2FkZXIuY3NzJztcbmltcG9ydCBmYXZfaWNvbiBmcm9tICcuL2ltYWdlcy9mYXYuc3ZnJztcbmltcG9ydCBzZWFyY2hfaWNvbiBmcm9tICcuL2ltYWdlcy9zZWFyY2guc3ZnJztcbmltcG9ydCBtb2JpbGVfZmF2ZXMgZnJvbSAnLi9pbWFnZXMvZmF2ZXMuc3ZnJztcbmltcG9ydCB7IGZldGNoV2VhdGhlciwgZ2V0RGFpbHlGb3JlY2FzdCwgZ2V0SG91cmx5Rm9yZWNhc3QsIHNob3dGb3JlY2FzdCwgc3dpdGNoVW5pdHMgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcic7XG5pbXBvcnQgeyBjbGVhckZvcmVjYXN0Q29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NsZWFuVXAnO1xuaW1wb3J0IHsgd2luT2JzZXJ2ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lkZ2V0cy93aW5TaXplJztcbmltcG9ydCB7IHBvcHVsYXRlRmF2b3JpdGVzLCBzZXROZXdGYXZvcml0ZSB9IGZyb20gJy4vY29tcG9uZW50cy93aWRnZXRzL2Zhdk1hbmFnZXInO1xuXG5sZXQgZGFpbHlfZm9yZWNhc3RfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctd2Vla2x5Jyk7XG5sZXQgaG91cmx5X2ZvcmVjYXN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LWhvdXJseScpO1xuXG5sZXQgbV9mYXZlc19hY3RpdmUgPSBmYWxzZTtcblxuZnVuY3Rpb24gcHJlcEZvckZldGNoKCkge1xuICAgIGxldCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcbiAgICBsZXQgZV9zcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJyk7XG4gICAgaWYocXVlcnkudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGVfc3Bhbi50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGVudGVyIGEgbG9jYXRpb24hXCJcbiAgICAgICAgcmV0dXJuO1xuICAgIH1lbHNlIHtcbiAgICAgICAgZV9zcGFuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG4gICAgZmV0Y2hXZWF0aGVyKGVuY29kZVVSSUNvbXBvbmVudChxdWVyeS52YWx1ZSkpO1xuICAgIHJldHVybjtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXYtaWNvbicpLnNyYyA9IGZhdl9pY29uO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaWNvbicpLnNyYyA9IHNlYXJjaF9pY29uO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbGUtZmF2ZXMnKS5zcmMgPSBtb2JpbGVfZmF2ZXM7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdmYXZzJykpIHtcbiAgICAgICAgcG9wdWxhdGVGYXZvcml0ZXMoKTtcbiAgICB9XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdjdXJyZW50JykpIHtcbiAgICAgICAgZmV0Y2hXZWF0aGVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50JykpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZldGNoV2VhdGhlcignSmVyc2V5K0NpdHknKTtcbn0pKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXQtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBzd2l0Y2hVbml0cyk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwcmVwRm9yRmV0Y2goKTtcbn0pKTtcblxuZGFpbHlfZm9yZWNhc3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKGV2ZW50KT0+IHtcbiAgICBkYWlseV9mb3JlY2FzdF9idG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGlmKGhvdXJseV9mb3JlY2FzdF9idG4uZGlzYWJsZWQpIHtcbiAgICAgICAgaG91cmx5X2ZvcmVjYXN0X2J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNob3dGb3JlY2FzdChldmVudCk7XG4gICAgcmV0dXJuO1xufSk7XG5cbmhvdXJseV9mb3JlY2FzdF9idG4uYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBob3VybHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBpZihkYWlseV9mb3JlY2FzdF9idG4uZGlzYWJsZWQpIHtcbiAgICAgICAgZGFpbHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2hvd0ZvcmVjYXN0KGV2ZW50KTtcbiAgICByZXR1cm47XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zhdi1pY29uJykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBzZXROZXdGYXZvcml0ZSgpO1xufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vYmlsZS1mYXZlcycpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGZhdl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzLWNvbnRhaW5lcicpO1xuICAgIGlmICghbV9mYXZlc19hY3RpdmUpIHtcbiAgICAgICAgZmF2X2NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnOTF2aCc7XG4gICAgICAgIG1fZmF2ZXNfYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZhdl9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgIG1fZmF2ZXNfYWN0aXZlID0gZmFsc2U7XG4gICAgcmV0dXJuO1xufSlcblxuIl0sIm5hbWVzIjpbImRheWpzIiwibWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50IiwiZCIsImZvcmVjYXN0X2VsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGUiLCJhcHBlbmRDaGlsZCIsInNldEZvcmVjYXN0SGVhZGVyIiwiZm9ybWF0IiwiYXBwZW5kIiwic2V0Q29uZGl0aW9uSW1hZ2UiLCJkYXkiLCJjb25kaXRpb24iLCJpY29uIiwic2V0VGVtcGVyYXR1cmVEZXRhaWwiLCJNYXRoIiwicm91bmQiLCJtaW50ZW1wX2YiLCJtYXh0ZW1wX2YiLCJtaW50ZW1wX2MiLCJtYXh0ZW1wX2MiLCJtYWtlSG91cmx5Rm9yZWNhc3RFbGVtZW50IiwidCIsImhvdXIiLCJ0aW1lIiwidGVtcF9mIiwidGVtcF9jIiwiY29tcHV0ZUhvdXJzIiwiY3VycmVudF9kYXRldGltZSIsImN1cnJlbnQiLCJsYXN0X3VwZGF0ZWQiLCJzdGFydCIsIk51bWJlciIsImRheV9pbmR4IiwiaG91cl9hcnIiLCJsaW1pdCIsInB1c2giLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiaCIsImhlYWRlciIsInRleHRDb250ZW50IiwiaSIsImNvbmRfaW1nIiwic3JjIiwiZiIsImMiLCJ0ZW1wX3dyYXBwZXIiLCJkZXRhaWxzX2YiLCJkZXRhaWxzX2MiLCJjbGVhckZvcmVjYXN0Q29udGFpbmVyIiwiZm9yZWNhc3RfY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJzZXRDdXJyZW50TG9jYWwiLCJxIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldExvY2F0aW9uIiwicyIsImNvdW50cnkiLCJzZXRUZW1wIiwidGVtcF9lbGUiLCJzZXREYXRlIiwic2V0VGlja2VyVGV4dCIsImRhdGEiLCJ1bCIsInNldENvbmRpdGlvbiIsInRleHQiLCJzZXRSZWFsRmVlbCIsImZlZWxzbGlrZV9mIiwic2V0SHVtaWRpdHkiLCJodW1pZGl0eSIsInNldFdpbmRTcGVlZCIsIndpbmRfa3BoIiwibGkiLCJ3IiwiaWQiLCJwbGFjZWhvbGRlciIsImRpc3BsYXlMb2FkZXIiLCJyZW1vdmVMb2FkZXIiLCJiYWNrZ3JvdW5kU3dpdGNoIiwicmVxdWVzdCIsInJlcV9leHRyYSIsImRhaWx5X2ZvcmVjYXN0IiwiaG91cmx5X2ZvcmVjYXN0IiwiZmFocmVuaGVpdCIsImZldGNoV2VhdGhlciIsImVfc3BhbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwic2V0V2VhdGhlciIsImNvZGUiLCJnZXREYWlseUZvcmVjYXN0IiwiZ2V0SG91cmx5Rm9yZWNhc3QiLCJzaG93Rm9yZWNhc3QiLCJsb2NhdGlvbiIsIm5hbWUiLCJyZWdpb24iLCJ0aWNrZXIiLCJmb3JlY2FzdF9zZWN0aW9uIiwiZm9yRWFjaCIsImhvdXJzIiwidGljayIsImhvdXJseSIsIndlZWtseSIsImRpc2FibGVkIiwic3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsImVsZW1lbnQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlIiwiZGlzcGxheSIsImhlaWdodCIsInN3aXRjaFVuaXRzIiwiZmVlbF9lbGUiLCJmZWVsc2xpa2VfYyIsImNsZWFyIiwiZHJpenpsZSIsImNsb3VkeSIsInJhaW4iLCJzbm93IiwidGh1bmRlciIsImNjIiwiYmciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmYXZvcml0ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJzZXROZXdGYXZvcml0ZSIsInF1ZXJ5IiwiaW5jbHVkZXMiLCJhbGVydCIsInN0cmluZ2lmeSIsIm5ld19lbGUiLCJuZXdGYXZFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZhdkNsaWNrSGFuZGxlciIsInBvcHVsYXRlRmF2b3JpdGVzIiwiZmF2X21lbnUiLCJmYXYiLCJmYXZfZWxlIiwiZmF2X2RpdiIsImNsb3NlIiwicmVtb3ZlRmF2RXZlbnRIYW5kbGVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInBhcmVudCIsInRhcmdldCIsInBhcmVudE5vZGUiLCJmYXZfaW5keCIsImluZGV4T2YiLCJzbGljZSIsInNwbGljZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaW1tZXIiLCJzcGlubmVyIiwid2luT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNsaWVudFdpZHRoIiwic2VhcmNoX2RpdiIsInRhcmdldF9kaXYiLCJwcmVwZW5kIiwiZm9yZWNhc3Rfc2VjdCIsImZhdl9jb250YWluZXIiLCJwb3NpdGlvbiIsImNsaWVudFRvcCIsInRvcCIsImxlZnQiLCJ3aWR0aCIsInJlbW92ZUF0dHJpYnV0ZSIsIm9ic2VydmUiLCJib2R5IiwiZmF2X2ljb24iLCJzZWFyY2hfaWNvbiIsIm1vYmlsZV9mYXZlcyIsImRhaWx5X2ZvcmVjYXN0X2J0biIsImhvdXJseV9mb3JlY2FzdF9idG4iLCJtX2ZhdmVzX2FjdGl2ZSIsInByZXBGb3JGZXRjaCIsInZhbHVlIiwid2luZG93IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=