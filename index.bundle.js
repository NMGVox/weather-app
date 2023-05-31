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








let request = 'http://api.weatherapi.com/v1/forecast.json?key=1b054972cb384d789c5195202231505&q=';
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

let favorites = JSON.parse(localStorage.getItem('favs'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFV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YUFBYSxDQUFDLHNCQUFzQixDQUFDO0VBQ2xFLElBQUksQ0FBQ3lJLGNBQWMsRUFBRTtJQUNqQmQsYUFBYSxDQUFDL0QsS0FBSyxDQUFDUSxNQUFNLEdBQUcsTUFBTTtJQUNuQ3FFLGNBQWMsR0FBRyxJQUFJO0lBQ3JCO0VBQ0o7RUFFQWQsYUFBYSxDQUFDL0QsS0FBSyxDQUFDUSxNQUFNLEdBQUcsR0FBRztFQUNoQ3FFLGNBQWMsR0FBRyxLQUFLO0VBQ3RCO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvY2xlYW5VcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2xvY2FsSGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NldFdlYXRoZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9iYWNrZ3JvdW5kQ29udHJvbC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvZmF2TWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvbG9hZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvd2luU2l6ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvbG9hZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9sb2FkZXIuY3NzPzk1Y2IiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuZnVuY3Rpb24gbWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50KGQpIHtcbiAgICAvL0dpdmVuIGRheSwgcmV0dXJuIGRpdiBjb250YWluaW5nIHdlYXRoZXIgaW5mbyBmb3IgdGhlIGRheSBvZiB0aGUgd2Vla1xuICAgIGxldCBmb3JlY2FzdF9lbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9cbiAgICBmb3JlY2FzdF9lbGUuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZWxlbWVudCcpOyAvL1xuICAgIFxuICAgIGxldCBkYXRlID0gZGF5anMoZC5kYXRlLCAnWVlZWS1NTU1NLUQnKTsgLy9cbiAgICBmb3JlY2FzdF9lbGUuYXBwZW5kQ2hpbGQoc2V0Rm9yZWNhc3RIZWFkZXIoZGF0ZS5mb3JtYXQoJ2RkZGQnKSkpO1xuXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZChzZXRDb25kaXRpb25JbWFnZShkLmRheS5jb25kaXRpb24uaWNvbikpO1xuXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZChzZXRUZW1wZXJhdHVyZURldGFpbChgJHtNYXRoLnJvdW5kKGQuZGF5Lm1pbnRlbXBfZil9wrBGIC8gJHtNYXRoLnJvdW5kKGQuZGF5Lm1heHRlbXBfZil9wrBGYCxcbiAgICAgYCR7TWF0aC5yb3VuZChkLmRheS5taW50ZW1wX2MpfcKwQyAvICR7TWF0aC5yb3VuZChkLmRheS5tYXh0ZW1wX2MpfcKwQ2ApKTtcblxuICAgIHJldHVybiBmb3JlY2FzdF9lbGU7XG59XG5cbmZ1bmN0aW9uIG1ha2VIb3VybHlGb3JlY2FzdEVsZW1lbnQodCkge1xuICAgIGxldCBmb3JlY2FzdF9lbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JlY2FzdF9lbGUuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZWxlbWVudCcpO1xuICAgIFxuICAgIGxldCBob3VyID0gZGF5anModC50aW1lLCAnWVlZWS1NTU1NLUQnKTtcbiAgICBmb3JlY2FzdF9lbGUuYXBwZW5kQ2hpbGQoc2V0Rm9yZWNhc3RIZWFkZXIoaG91ci5mb3JtYXQoJ2RkZGQsIGg6bW0gQScpKSk7XG5cbiAgICBmb3JlY2FzdF9lbGUuYXBwZW5kQ2hpbGQoc2V0Q29uZGl0aW9uSW1hZ2UodC5jb25kaXRpb24uaWNvbikpO1xuXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZENoaWxkKHNldFRlbXBlcmF0dXJlRGV0YWlsKGAke01hdGgucm91bmQodC50ZW1wX2YpfcKwIEZgLCBcbiAgICAgICAgYCR7TWF0aC5yb3VuZCh0LnRlbXBfYyl9wrAgQ2ApKTtcblxuICAgIHJldHVybiBmb3JlY2FzdF9lbGU7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVIb3VycyhkKSB7XG4gICAgbGV0IGN1cnJlbnRfZGF0ZXRpbWUgPSBkLmN1cnJlbnQubGFzdF91cGRhdGVkO1xuICAgIGN1cnJlbnRfZGF0ZXRpbWUgPSBkYXlqcyhjdXJyZW50X2RhdGV0aW1lLCAnWVlZWS1NTU1NLUQnKTtcbiAgICBcbiAgICBsZXQgc3RhcnQgPSBOdW1iZXIoY3VycmVudF9kYXRldGltZS5mb3JtYXQoJ0hIJykpICsgMTtcbiAgICBsZXQgZGF5X2luZHggPSAwO1xuICAgIGxldCBob3VyX2FyciA9IFtdO1xuICAgIFxuICAgIGZvcihsZXQgbGltaXQgPSAyNDsgbGltaXQgPiAwOyBsaW1pdC0tKSB7XG4gICAgICAgIGlmIChzdGFydCA+IDIzKSB7XG4gICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICBkYXlfaW5keCsrO1xuICAgICAgICB9XG4gICAgICAgIGhvdXJfYXJyLnB1c2goZC5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXlfaW5keF0uaG91cltzdGFydF0pO1xuICAgICAgICBzdGFydCsrO1xuICAgIH1cblxuICAgIHJldHVybiBob3VyX2Fycjtcbn1cblxuZnVuY3Rpb24gc2V0Rm9yZWNhc3RIZWFkZXIoaCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1oZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBoO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIHNldENvbmRpdGlvbkltYWdlKGkpIHtcbiAgICBsZXQgY29uZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25kX2ltZy5zcmMgPSBpXG4gICAgY29uZF9pbWcuY2xhc3NMaXN0LmFkZCgnaWNvbi1mb3JlY2FzdCcpO1xuICAgIHJldHVybiBjb25kX2ltZztcbn1cblxuZnVuY3Rpb24gc2V0VGVtcGVyYXR1cmVEZXRhaWwoZiwgYykge1xuICAgIGxldCB0ZW1wX3dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGVtcF93cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWRldGFpbC13cmFwcGVyJyk7XG5cbiAgICBsZXQgZGV0YWlsc19mID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRldGFpbHNfZi5jbGFzc0xpc3QuYWRkKCdmYWhyZW5oZWl0Jyk7XG4gICAgZGV0YWlsc19mLnRleHRDb250ZW50ID0gZjtcblxuICAgIGxldCBkZXRhaWxzX2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGV0YWlsc19jLmNsYXNzTGlzdC5hZGQoJ2NlbHNpdXMnKTtcbiAgICBkZXRhaWxzX2MudGV4dENvbnRlbnQgPSBjO1xuXG4gICAgdGVtcF93cmFwcGVyLmFwcGVuZChkZXRhaWxzX2YsIGRldGFpbHNfYyk7XG4gICAgcmV0dXJuIHRlbXBfd3JhcHBlcjtcbn1cblxuZXhwb3J0IHsgbWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50LCBtYWtlSG91cmx5Rm9yZWNhc3RFbGVtZW50LCBjb21wdXRlSG91cnMgfTsiLCJmdW5jdGlvbiBjbGVhckZvcmVjYXN0Q29udGFpbmVyKCkge1xuICAgIGxldCBmb3JlY2FzdF9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICB3aGlsZShmb3JlY2FzdF9jb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBmb3JlY2FzdF9jb250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBjbGVhckZvcmVjYXN0Q29udGFpbmVyIH07IiwiZnVuY3Rpb24gc2V0Q3VycmVudExvY2FsKHEpIHtcbiAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudCcsIHEpO1xuICAgIH1cbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBzZXRDdXJyZW50TG9jYWwgfTsiLCJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmZ1bmN0aW9uIHNldExvY2F0aW9uIChjLCBzLCBjb3VudHJ5KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktc3RhdGUnKS50ZXh0Q29udGVudCA9IGAke2N9LCAke3N9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyeScpLnRleHRDb250ZW50ID0gYCR7Y291bnRyeX1gO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gc2V0VGVtcCh0KSB7XG4gICAgbGV0IHRlbXBfZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG4gICAgdGVtcF9lbGUudGV4dENvbnRlbnQgPSBgJHt0fWA7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBzZXREYXRlKGQpIHtcbiAgICBsZXQgZGF0ZSA9IGRheWpzKGQsICdZWVlZLU1NTU0tRCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LXVwZGF0ZScpLnRleHRDb250ZW50ID0gYFVwZGF0ZWQ6ICR7ZGF0ZS5mb3JtYXQoJ2RkZGQsIGg6bW0gQScpfWA7XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBzZXRMb2NhdGlvbiwgc2V0VGVtcCwgc2V0RGF0ZSB9OyIsImZ1bmN0aW9uIHNldFRpY2tlclRleHQoZGF0YSkge1xuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoc2V0Q29uZGl0aW9uKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCkpO1xuICAgIHVsLmFwcGVuZENoaWxkKHNldFJlYWxGZWVsKGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZikpO1xuICAgIHVsLmFwcGVuZENoaWxkKHNldEh1bWlkaXR5KGRhdGEuY3VycmVudC5odW1pZGl0eSkpO1xuICAgIHVsLmFwcGVuZENoaWxkKHNldFdpbmRTcGVlZChkYXRhLmN1cnJlbnQud2luZF9rcGgpKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCd0aWNrZXItdGV4dCcpO1xuICAgIHJldHVybiB1bDtcbn1cblxuZnVuY3Rpb24gc2V0Q29uZGl0aW9uKGMpIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLnRleHRDb250ZW50ID0gYENvbmRpdGlvbjogJHtjfWA7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBzZXRIdW1pZGl0eShoKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtofSVgO1xuICAgIHJldHVybiBsaTtcbn1cblxuZnVuY3Rpb24gc2V0V2luZFNwZWVkKHcpIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d30ga20vaGA7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBzZXRSZWFsRmVlbChmKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2Z9IMKwRmA7XG4gICAgbGkuaWQgPSAnZmVlbCc7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5leHBvcnQgeyBzZXRUaWNrZXJUZXh0IH07IiwiaW1wb3J0IHsgc2V0VGlja2VyVGV4dCB9IGZyb20gXCIuL3RpY2tlclwiO1xuaW1wb3J0IHBsYWNlaG9sZGVyIGZyb20gJy4vLi4vaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZyc7XG5pbXBvcnQgeyBzZXREYXRlLCBzZXRMb2NhdGlvbiwgc2V0VGVtcCB9IGZyb20gXCIuL3NldFdlYXRoZXJIZWxwZXJcIjtcbmltcG9ydCB7IGRpc3BsYXlMb2FkZXIsIHJlbW92ZUxvYWRlciB9IGZyb20gXCIuL3dpZGdldHMvbG9hZFwiO1xuaW1wb3J0IHsgbWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50LCBjb21wdXRlSG91cnMsIG1ha2VIb3VybHlGb3JlY2FzdEVsZW1lbnQgIH0gZnJvbSBcIi4vRm9yZWNhc3RcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRMb2NhbCB9IGZyb20gXCIuL2xvY2FsSGFuZGxlclwiO1xuaW1wb3J0IHsgY2xlYXJGb3JlY2FzdENvbnRhaW5lciB9IGZyb20gXCIuL2NsZWFuVXBcIjtcbmltcG9ydCB7IGJhY2tncm91bmRTd2l0Y2ggfSBmcm9tIFwiLi93aWRnZXRzL2JhY2tncm91bmRDb250cm9sXCI7XG5cbmxldCByZXF1ZXN0ID0gJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MWIwNTQ5NzJjYjM4NGQ3ODljNTE5NTIwMjIzMTUwNSZxPSc7XG5sZXQgcmVxX2V4dHJhID0gJyZkYXlzPTUmYXFpPW5vJmFsZXJ0cz1ubydcbmxldCBkYXRhID0ge307XG5sZXQgZGFpbHlfZm9yZWNhc3QgPSBbXTtcbmxldCBob3VybHlfZm9yZWNhc3QgPSBbXTtcbmxldCBmYWhyZW5oZWl0ID0gdHJ1ZTtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKHEpIHtcbiAgICBkaXNwbGF5TG9hZGVyKCk7XG4gICAgbGV0IGVfc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xuICAgIHRyeXtcbiAgICAgICAgLy9Mb2FkaW5nIGNvbXBvbmVudCBzdHVmZiBoZXJlXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QgKyBxICsgcmVxX2V4dHJhLCB7J21vZGUnOiAnY29ycyd9KTtcbiAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0V2VhdGhlcigpO1xuICAgICAgICBiYWNrZ3JvdW5kU3dpdGNoKE51bWJlcihkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGUpKTtcbiAgICAgICAgY2xlYXJGb3JlY2FzdENvbnRhaW5lcigpO1xuICAgICAgICBnZXREYWlseUZvcmVjYXN0KCk7XG4gICAgICAgIGdldEhvdXJseUZvcmVjYXN0KCk7XG4gICAgICAgIHNob3dGb3JlY2FzdCgpO1xuICAgICAgICBzZXRDdXJyZW50TG9jYWwocSk7XG4gICAgICAgIGVfc3Bhbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgICBlX3NwYW4udGV4dENvbnRlbnQgPSAnQ2Fubm90IGZpbmQgYSBtYXRjaGluZyBsb2NhdGlvbi4nO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICAgIHJlbW92ZUxvYWRlcigpO1xufVxuXG5mdW5jdGlvbiBzZXRXZWF0aGVyKCkge1xuICAgIHNldExvY2F0aW9uKGRhdGEubG9jYXRpb24ubmFtZSwgZGF0YS5sb2NhdGlvbi5yZWdpb24sIGRhdGEubG9jYXRpb24uY291bnRyeSk7XG4gICAgc2V0VGVtcCgoZmFocmVuaGVpdCA/IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfZil9IMKwRmAgOiBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wX2MpfSDCsENgKSk7XG4gICAgc2V0RGF0ZShkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkKTtcbiAgICBsZXQgdGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpY2tlcicpO1xuICAgIGlmKHRpY2tlci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRpY2tlci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICB0aWNrZXIuYXBwZW5kQ2hpbGQoc2V0VGlja2VyVGV4dChkYXRhKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnctaWNvbi1zbWFsbCcpLnNyYyA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbn1cblxuXG5mdW5jdGlvbiBnZXREYWlseUZvcmVjYXN0KCkge1xuICAgIGRhaWx5X2ZvcmVjYXN0ID0gW107XG4gICAgbGV0IGZvcmVjYXN0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICAoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheSkuZm9yRWFjaChkYXkgPT4ge1xuICAgICAgICBkYWlseV9mb3JlY2FzdC5wdXNoKG1ha2VEYWlseUZvcmVjYXN0RWxlbWVudChkYXkpKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJseUZvcmVjYXN0KCkge1xuICAgIGhvdXJseV9mb3JlY2FzdCA9IFtdO1xuICAgIGxldCBmb3JlY2FzdF9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG4gICAgbGV0IGhvdXJzID0gY29tcHV0ZUhvdXJzKGRhdGEpO1xuICAgIGhvdXJzLmZvckVhY2godGljayA9PiB7XG4gICAgICAgIGhvdXJseV9mb3JlY2FzdC5wdXNoKG1ha2VIb3VybHlGb3JlY2FzdEVsZW1lbnQodGljaykpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cblxuXG5mdW5jdGlvbiBzaG93Rm9yZWNhc3QoKSB7XG4gICAgbGV0IGZvcmVjYXN0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICBsZXQgaG91cmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctaG91cmx5Jyk7XG4gICAgbGV0IHdlZWtseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXdlZWtseScpO1xuXG4gICAgY2xlYXJGb3JlY2FzdENvbnRhaW5lcigpO1xuXG4gICAgaWYod2Vla2x5LmRpc2FibGVkKSB7XG4gICAgICAgIGZvcmVjYXN0X3NlY3Rpb24uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgICAgICAgZGFpbHlfZm9yZWNhc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGZvcmVjYXN0X3NlY3Rpb24uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZihob3VybHkuZGlzYWJsZWQpIHtcbiAgICAgICAgZm9yZWNhc3Rfc2VjdGlvbi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgaG91cmx5X2ZvcmVjYXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBmb3JlY2FzdF9zZWN0aW9uLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9KVxuICAgIH1lbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGZhaHJlbmhlaXQpIHtcbiAgICAgICAgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbHNpdXMnKSkpLmZvckVhY2goZWxlID0+e1xuICAgICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWhyZW5oZWl0JykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZm9yZWNhc3Rfc2VjdGlvbi5zdHlsZS5oZWlnaHQgPSAnMjV2aCc7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hVbml0cygpIHtcbiAgICBmYWhyZW5oZWl0ID0gIWZhaHJlbmhlaXQ7XG4gICAgbGV0IHRlbXBfZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG4gICAgbGV0IGZlZWxfZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWwnKTtcbiAgICBpZihmYWhyZW5oZWl0KSB7XG4gICAgICAgIHRlbXBfZWxlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcF9mKX0gwrBGYDtcbiAgICAgICAgZmVlbF9lbGUudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZil9IMKwRmA7XG4gICAgICAgIFxuICAgICAgICAvL1RoaXMgaXMgdWdseSwgYnV0IGZvciBjdXJyZW50IGxhY2sgb2YgYSBiZXR0ZXIgc29sdXRpb24sIGl0IHdvcmtzLlxuICAgICAgICAvL0hvcGVmdWxseSB3aXRob3V0IGJyZWFraW5nLiAyMyBNYXksIDIwMjMgMTQ6NTlcbiAgICAgICAgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhaHJlbmhlaXQnKSkpLmZvckVhY2goZWxlID0+e1xuICAgICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbHNpdXMnKSkpLmZvckVhY2goZWxlID0+e1xuICAgICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47IFxuICAgIH1cbiAgICB0ZW1wX2VsZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfYyl9IMKwQ2A7XG4gICAgZmVlbF9lbGUudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyl9IMKwQ2A7XG5cbiAgICAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFocmVuaGVpdCcpKSkuZm9yRWFjaChlbGUgPT57XG4gICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuXG4gICAgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbHNpdXMnKSkpLmZvckVhY2goZWxlID0+e1xuICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IHsgaG91cmx5X2ZvcmVjYXN0LCBmZXRjaFdlYXRoZXIsIHN3aXRjaFVuaXRzLCBnZXREYWlseUZvcmVjYXN0LCBnZXRIb3VybHlGb3JlY2FzdCwgc2hvd0ZvcmVjYXN0IH07IiwiaW1wb3J0IGNsZWFyIGZyb20gJy4uLy4uL2ltYWdlcy9jbGVhci5qcGcnO1xuaW1wb3J0IGRyaXp6bGUgZnJvbSAnLi4vLi4vaW1hZ2VzL2RyaXp6bGUuanBnJztcbmltcG9ydCBjbG91ZHkgZnJvbSAnLi4vLi4vaW1hZ2VzL2Nsb3VkeS5qcGcnO1xuaW1wb3J0IHJhaW4gZnJvbSAnLi4vLi4vaW1hZ2VzL3JhaW4uanBnJztcbmltcG9ydCBzbm93IGZyb20gJy4uLy4uL2ltYWdlcy9zbm93LmpwZyc7XG5pbXBvcnQgdGh1bmRlciBmcm9tICcuLi8uLi9pbWFnZXMvdGh1bmRlci1zdG9ybS5qcGcnO1xuXG5mdW5jdGlvbiBiYWNrZ3JvdW5kU3dpdGNoKGNjKSB7XG4gICAgbGV0IGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGlmKGNjID4gOTk5ICYmIGNjIDw9IDEwMDMpIHtcbiAgICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NsZWFyfWA7XG4gICAgfSBlbHNlIGlmICgoY2MgPiAxMDAzICYmIGNjIDw9IDEwODcpIHx8IChjYyA+IDExMzQgJiYgY2MgPD0gMTE0NykpIHtcbiAgICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2Nsb3VkeX1gO1xuICAgIH0gZWxzZSBpZiAoY2MgPiAxMTQ5ICYmIGNjIDw9IDExNzIpIHtcbiAgICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2RyaXp6bGV9YDtcbiAgICB9IGVsc2UgaWYgKChjYyA+IDExNzkgJiYgY2MgPD0gMTIwNykgfHwgKGNjID4gMTIzOSAmJiBjYyA8PSAxMjY0KSkge1xuICAgICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmFpbn1gO1xuICAgIH0gZWxzZSBpZiAoY2MgPiAxMjA5ICYmIGNjIDw9IDEyMzcpIHtcbiAgICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Nub3d9YDtcbiAgICB9IGVsc2UgaWYgKGNjID4gMTI3MiAmJiBjYyA8PSAxMjgyKSB7XG4gICAgICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aHVuZGVyfWA7XG4gICAgfSBlbHNle1xuICAgICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2xvdWR5fWA7XG4gICAgfVxufVxuXG5leHBvcnQgeyBiYWNrZ3JvdW5kU3dpdGNoIH07IiwiaW1wb3J0IHsgZmV0Y2hXZWF0aGVyIH0gZnJvbSBcIi4uL3dlYXRoZXJcIjtcblxubGV0IGZhdm9yaXRlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZhdnMnKSk7XG5cblxuZnVuY3Rpb24gc2V0TmV3RmF2b3JpdGUoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktc3RhdGUnKS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBpZihmYXZvcml0ZXMuaW5jbHVkZXMocXVlcnkpKSB7XG4gICAgICAgIGFsZXJ0KCdUaGlzIGlzIGFscmVhZHkgZmF2b3JpdGVkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmF2b3JpdGVzLnB1c2gocXVlcnkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZzJywgSlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVzKSk7XG4gICAgXG4gICAgbGV0IG5ld19lbGUgPSBuZXdGYXZFbGVtZW50KHF1ZXJ5KTtcbiAgICBuZXdfZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmF2Q2xpY2tIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LW1lbnUnKS5hcHBlbmRDaGlsZChuZXdfZWxlKTtcbiAgICBcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRmF2b3JpdGVzKCkge1xuICAgIGxldCBmYXZfbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtbWVudScpO1xuICAgIFxuICAgIGZhdm9yaXRlcy5mb3JFYWNoKGZhdiA9PiB7XG4gICAgICAgIGxldCBmYXZfZWxlID0gbmV3RmF2RWxlbWVudChmYXYpXG4gICAgICAgIGZhdl9lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYXZDbGlja0hhbmRsZXIpO1xuICAgICAgICBmYXZfbWVudS5hcHBlbmRDaGlsZChmYXZfZWxlKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm47XG59XG5cblxuZnVuY3Rpb24gbmV3RmF2RWxlbWVudChmYXYpIHtcbiAgICBsZXQgZmF2X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZhdl9kaXYudGV4dENvbnRlbnQgPSBmYXY7XG4gICAgZmF2X2Rpdi5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZScpO1xuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ+KdjCc7XG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWZhdicpO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRmF2RXZlbnRIYW5kbGVyKTtcbiAgICBmYXZfZGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICByZXR1cm4gZmF2X2Rpdjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRmF2RXZlbnRIYW5kbGVyKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGxldCBmYXZfaW5keCA9IGZhdm9yaXRlcy5pbmRleE9mKHBhcmVudC50ZXh0Q29udGVudC5zbGljZSgwLCAtMSkpO1xuXG4gICAgZmF2b3JpdGVzLnNwbGljZShmYXZfaW5keCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZhdnMnLCBKU09OLnN0cmluZ2lmeShmYXZvcml0ZXMpKTtcbiAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUZhdkV2ZW50SGFuZGxlcik7XG4gICAgcGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmF2Q2xpY2tIYW5kbGVyKTtcbiAgICBwYXJlbnQucmVtb3ZlKCk7XG5cbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2cycpKTtcbiAgICByZXR1cm47ICAgXG59XG5cbmZ1bmN0aW9uIGZhdkNsaWNrSGFuZGxlcihlKSB7XG4gICAgZmV0Y2hXZWF0aGVyKGVuY29kZVVSSUNvbXBvbmVudChlLnRhcmdldC50ZXh0Q29udGVudCkpO1xufVxuXG4vL2RlYnVnXG4vLyBmdW5jdGlvbiBjbGVhckZhdm9yaXRlcygpIHtcbi8vICAgICBmYXZvcml0ZXMgPSBbXTtcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2cycsIEpTT04uc3RyaW5naWZ5KGZhdm9yaXRlcykpO1xuLy8gICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZzJykpO1xuLy8gfVxuXG5leHBvcnQgeyBzZXROZXdGYXZvcml0ZSwgcG9wdWxhdGVGYXZvcml0ZXMgfTsiLCJmdW5jdGlvbiBkaXNwbGF5TG9hZGVyKCkge1xuICAgIGxldCBkaW1tZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaW1tZXIuY2xhc3NMaXN0LmFkZCgnZGltbWVyJyk7XG4gICAgbGV0IHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2xkcy1yaXBwbGUnKTtcbiAgICBzcGlubmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgZGltbWVyLmFwcGVuZENoaWxkKHNwaW5uZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChkaW1tZXIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMb2FkZXIoKSB7XG4gICAgbGV0IHNwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGRzLXJpcHBsZScpO1xuICAgIHdoaWxlKHNwaW5uZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBzcGlubmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHNwaW5uZXIucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpbW1lcicpLnJlbW92ZSgpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5TG9hZGVyLCByZW1vdmVMb2FkZXIgfTsiLCJpbXBvcnQgeyBob3VybHlfZm9yZWNhc3QgfSBmcm9tIFwiLi4vd2VhdGhlclwiO1xuXG5sZXQgd2luT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgZm9yKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKCBlbnRyeS50YXJnZXQuY2xpZW50V2lkdGggPCA2MDAgKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYXJlYScpO1xuICAgICAgICAgICAgbGV0IHRhcmdldF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13ZWF0aGVyJyk7IFxuICAgICAgICAgICAgdGFyZ2V0X2Rpdi5wcmVwZW5kKHNlYXJjaF9kaXYpO1xuICAgICAgICAgICAgbGV0IGZvcmVjYXN0X3NlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICAgICAgICAgIHRhcmdldF9kaXYuYXBwZW5kKGZvcmVjYXN0X3NlY3QpO1xuICAgICAgICAgICAgbGV0IGZhdl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLWZhdmVzJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLWZhdmVzJykuY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGZhdl9jb250YWluZXIuc3R5bGUudG9wID0gYDh2aGA7XG4gICAgICAgICAgICBmYXZfY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtlbnRyeS50YXJnZXQuY2xpZW50V2lkdGggLSAyMDB9cHhgO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAyMDBweGA7XG4gICAgICAgIH07XG4gICAgICAgIGlmICggZW50cnkudGFyZ2V0LmNsaWVudFdpZHRoID4gNjAwKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYXJlYScpO1xuICAgICAgICAgICAgbGV0IHRhcmdldF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpOyBcbiAgICAgICAgICAgIHRhcmdldF9kaXYuYXBwZW5kKHNlYXJjaF9kaXYpO1xuICAgICAgICAgICAgbGV0IGZvcmVjYXN0X3NlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmQoZm9yZWNhc3Rfc2VjdCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbGUtZmF2ZXMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbGV0IGZhdl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIH07XG4gICAgICAgIC8vZW50cnkudGFyZ2V0LmNsaWVudFdpZHRoIDwgODAwID8gbW9iaWxlX29uID0gdHJ1ZSA6IG1vYmlsZV9vbiA9IGZhbHNlO1xuICAgIH1cbn0pXG5cbndpbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSk7XG5cbmV4cG9ydCB7d2luT2JzZXJ2ZXJ9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypDcmVkaXRzOiAubGRzLXJpcHBsZSBmcm9tIGh0dHBzOi8vbG9hZGluZy5pby9jc3MvKi9cXG5cXG4uZGltbWVyIHtcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgbWluLXdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuLmxkcy1yaXBwbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDQuOSUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDUlIHtcXG4gICAgICB0b3A6IDM2cHg7XFxuICAgICAgbGVmdDogMzZweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgd2lkdGg6IDcycHg7XFxuICAgICAgaGVpZ2h0OiA3MnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL2xvYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0RBQW9EOztBQUVwRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw4REFBOEQ7RUFDaEU7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0U7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxRQUFRO01BQ1IsU0FBUztNQUNULFdBQVc7TUFDWCxZQUFZO01BQ1osVUFBVTtJQUNaO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypDcmVkaXRzOiAubGRzLXJpcHBsZSBmcm9tIGh0dHBzOi8vbG9hZGluZy5pby9jc3MvKi9cXG5cXG4uZGltbWVyIHtcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgbWluLXdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuLmxkcy1yaXBwbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDQuOSUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDUlIHtcXG4gICAgICB0b3A6IDM2cHg7XFxuICAgICAgbGVmdDogMzZweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgd2lkdGg6IDcycHg7XFxuICAgICAgaGVpZ2h0OiA3MnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMnM7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjQ4Nik7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDJzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5oZWFkaW5nIHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDh2aDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleDpub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MTYpO1xcbn1cXG5cXG4jdW5pdC10b2dnbGUge1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCAyMzEsIDIzMSwgMC40OTMpO1xcblxcdHBhZGRpbmc6IDByZW0gM3JlbTtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc2VhcmNoLWFyZWEge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbiNzZWFyY2gtZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogLjVyZW07XFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbiNzZWFyY2gtZm9ybSBsYWJlbCB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jc2VhcmNoLWljb24ge1xcblxcdGhlaWdodDogMnJlbTtcXG59XFxuXFxuI3NlYXJjaCB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0d2lkdGg6IDI1dnc7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0cGFkZGluZzogLjFyZW0gLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogLjJyZW07XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jc2VhcmNoOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jc2VhcmNoLWJ1dHRvbiB7XFxuXFx0d2lkdGg6IDV2dztcXG59XFxuXFxuI2Vycm9yIHtcXG5cXHRjb2xvcjogcmVkO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAxMCU7XFxuXFx0dG9wOiA5MCU7XFxuXFx0Zm9udC1zaXplOiAuOHJlbTtcXG59XFxuXFxuI21vYmlsZS1mYXZlcyB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGFzcGVjdC1yYXRpbzogMS8xO1xcblxcdGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLm1haW4td2VhdGhlciB7XFxuXFx0ZmxleDogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XFxufVxcblxcbi5kZXRhaWxzLXdyYXBwZXJ7XFxuXFx0aGVpZ2h0OiA0MDBweDtcXG5cXHRhc3BlY3QtcmF0aW86IDEgLyAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCAyMzAsIDI1MCwgMCk7XFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHBhZGRpbmc6IDFyZW0gNTBweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgMTAlO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLXdyYXBwZXIge1xcblxcdGhlaWdodDoxMDAlO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTgsIDIxOCwgMjE4LCAwLjQxMSk7XFxuXFx0cGFkZGluZzogNHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5jaXR5LXN0YXRlIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNvdW50cnkge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxuXFxuLnRlbXAtd3JhcHBlciB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI1NSwgMjU1LCAwLjM5Nyk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udy1pY29uLXNtYWxsIHtcXG5cXHR3aWR0aDo0MHB4O1xcblxcdGFzcGVjdC1yYXRpbzogMSAvMTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6MTBweDtcXG5cXHR0b3A6MTBweDtcXG59XFxuXFxuLmxhc3QtdXBkYXRlIHtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jdGVtcGVyYXR1cmUge1xcblxcdGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuI3RpY2tlciB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjU1LCAyNTUsIDAuMzk3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi50aWNrZXItdGV4dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0YW5pbWF0aW9uOiB0aWNrLXJpZ2h0IDE1cyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXHRcXG59XFxuXFxuLnRpY2tlci10ZXh0IGxpIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4udGlja2VyLXRleHQgbGk6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcblxcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4jZmF2LWljb24ge1xcblxcdHBvc2l0aW9uOmFic29sdXRlO1xcblxcdHRvcDogMyU7XFxuXFx0cmlnaHQ6IDUlO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRwYWRkaW5nOiAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4jZmF2LWljb246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZhdm9yaXRlcy1jb250YWluZXIge1xcblxcdGhlaWdodDo0MDBweDtcXG5cXHR3aWR0aDogNjAwcHg7XFxuXFx0ZmxleC1zaHJpbms6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDIzMCwgMjUwLCAwLjU4OSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZhdm9yaXRlcy1jb250YWluZXI+aDEge1xcblxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdHBhZGRpbmc6IDFyZW0gMXJlbTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mYXYtbWVudSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuXFx0Z3JpZC1hdXRvLXJvd3M6IDc1cHg7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRmbGV4OiBhdXRvO1xcblxcdGdhcDoxcmVtO1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mYXZvcml0ZSB7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODUsIDIyMCwgMjUyLCAwLjYyMyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucmVtb3ZlLWZhdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDclO1xcblxcdHJpZ2h0OjUlO1xcblxcdGZvbnQtc2l6ZTogLjhyZW07XFxuXFx0cGFkZGluZzogMXB4IDRweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRjb2xvcjogZ3JleTtcXG59XFxuXFxuLnJlbW92ZS1mYXY6aG92ZXJ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcblxcdGhlaWdodDogMHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcblxcdGdhcDogNHZ3O1xcblxcdHBhZGRpbmc6IDAgMnJlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMnM7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XFxufVxcblxcbi5mb3JlY2FzdC1lbGVtZW50IHtcXG5cXHR3aWR0aDogMTIlO1xcblxcdGhlaWdodDogOTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAyMzMsIDIzMywgMC42ODUpO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWhlYWRlciB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaWNvbi1mb3JlY2FzdCB7XFxuXFx0ZmxleC1zaHJpbms6IDE7XFxuXFx0aGVpZ2h0OiA0MCU7XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWRldGFpbC13cmFwcGVyIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3MywgMTczLCAxNzMsIDAuNzMzKTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0d2lkdGg6OTAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLm1vYmlsZS1ob3VyLWZvcmVjYXN0IHtcXG5cXHRtaW4taGVpZ2h0OiAyMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMjIwLCAyNTIsIDAuNjIzKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpY2stcmlnaHQge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTI1JSk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjI1JSk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcXG5cXHQuZmF2b3JpdGVzLWNvbnRhaW5lciB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiA0cmVtO1xcblxcdH1cXG5cXHQuZm9yZWNhc3QtZWxlbWVudCB7XFxuXFx0XFx0d2lkdGg6IDE1MHB4O1xcblxcdFxcdHBhZGRpbmc6IDAgMXJlbTtcXG5cXHR9XFxuXFx0I3NlYXJjaC1idXR0b24ge1xcblxcdFxcdHdpZHRoOiAxMDBweDtcXG5cXHR9XFxuXFx0I3NlYXJjaCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcdGJvZHl7XFxuXFx0XFx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG5cXHR9XFxuXFxuXFx0I3NlYXJjaC1pY29uIHtcXG5cXHRcXHRoZWlnaHQ6MS4ycmVtO1xcblxcdH1cXG5cXG5cXHQjc2VhcmNoIHtcXG5cXHRcXHR3aWR0aDogMTI1cHg7XFxuXFx0XFx0Zm9udC1zaXplOiAuOHJlbTs7XFxuXFx0fVxcblxcblxcdCNzZWFyY2gtYnV0dG9uIHtcXG5cXHRcXHR3aWR0aDogNzVweDtcXG5cXHRcXHRoZWlnaHQ6MS41cmVtO1xcblxcdH1cXG5cXG5cXHQubWFpbi13ZWF0aGVyIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogMDtcXG5cXHRcXHRmbGV4OmNvbnRlbnQ7XFxuXFx0XFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG5cXHR9XFxuXFxuXFx0LmRldGFpbHMtd3JhcHBlciB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdHdpZHRoOjkwJTtcXG5cXHR9XFxuXFxuXFx0LmNpdHktc3RhdGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0I3RlbXBlcmF0dXJlIHtcXG5cXHRcXHRmb250LXNpemU6IDNyZW07XFxuXFx0fVxcblxcblxcdC5sYXN0LXVwZGF0ZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAuOHJlbTtcXG5cXHR9XFxuXFxuXFx0LnctaWNvbi1zbWFsbCB7XFxuXFx0XFx0d2lkdGg6IDE1JTtcXG5cXHR9XFxuXFxuXFx0LmZhdm9yaXRlcy1jb250YWluZXIge1xcblxcdFxcdHdpZHRoOjBweDtcXG5cXHRcXHRoZWlnaHQ6IDBweDtcXG5cXHRcXHRvdmVyZmxvdy14OmhpZGRlbjtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMXM7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuXFx0fVxcblxcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdCN0aWNrZXIge1xcblxcdFxcdGhlaWdodDoxMDAlO1xcblxcdFxcdHdpZHRoOiA5MCU7XFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0fVxcblxcblxcdC50aWNrZXItdGV4dCB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbmltYXRpb246IG5vbmU7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xcblxcdFxcdGdhcDowO1xcblxcdH1cXG5cXG5cXHQudGlja2VyLXRleHQgbGkge1xcblxcdFxcdGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAwO1xcblxcdFxcdHBhZGRpbmctdG9wOiAuNHJlbTtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogLjRyZW07XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdFxcdGhlaWdodDogMS41cmVtO1xcblxcdFxcdGRpc3BsYXk6ZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnRpY2tlci10ZXh0IGxpOmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMCU7XFxuXFx0XFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XFxuXFx0XFx0Ym9yZGVyLXRvcDogbm9uZTtcXG5cXHR9XFxuXFxuXFx0I3Nob3ctd2Vla2x5LFxcblxcdCNzaG93LWhvdXJseSB7XFxuXFx0XFx0Zm9udC1zaXplOiAuN3JlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0IHtcXG5cXHRcXHRoZWlnaHQ6IDBweDtcXG5cXHRcXHR3aWR0aDogODAlO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAycztcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3QtZWxlbWVudCB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHR3aWR0aDogOTAlO1xcblxcdFxcdGhlaWdodDogMzUlO1xcblxcdH1cXG5cXG5cXHQuaWNvbi1mb3JlY2FzdCB7XFxuXFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3QtaGVhZGVyIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdC1kZXRhaWwtd3JhcHBlciB7XFxuXFx0XFx0d2lkdGg6IDQwJTtcXG5cXHR9XFxuXFxuXFx0I2Vycm9yIFxcdHtcXG5cXHRcXHR0b3A6IDExMCU7XFxuXFx0XFx0Zm9udC1zaXplOiAuN3JlbTtcXG5cXHR9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLDRDQUE0QztDQUM1QyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLDhCQUE4QjtDQUM5QixTQUFTO0NBQ1Qsc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLDRDQUE0QztDQUM1QyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixTQUFTO0NBQ1QsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsb0JBQW9C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QUFZO0VBQ1osU0FBUztDQUNWOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyxTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztDQUNmOztDQUVBO0VBQ0Msc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixLQUFLO0NBQ047O0NBRUE7RUFDQywyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7O0NBRUE7O0VBRUMsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0NBQ1o7O0NBRUE7RUFDQyxZQUFZO0NBQ2I7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsVUFBVTtDQUNYOztDQUVBO0VBQ0MsU0FBUztFQUNULGdCQUFnQjtDQUNqQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAycztcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNDg2KTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMnM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmhlYWRpbmcge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogOHZoO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmbGV4Om5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYxNik7XFxufVxcblxcbiN1bml0LXRvZ2dsZSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzEsIDIzMSwgMjMxLCAwLjQ5Myk7XFxuXFx0cGFkZGluZzogMHJlbSAzcmVtO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zZWFyY2gtYXJlYSB7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAuNXJlbTtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIGxhYmVsIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNzZWFyY2gtaWNvbiB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jc2VhcmNoIHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHR3aWR0aDogMjV2dztcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRwYWRkaW5nOiAuMXJlbSAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAuMnJlbTtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNzZWFyY2g6Zm9jdXMge1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZWFyY2gtYnV0dG9uIHtcXG5cXHR3aWR0aDogNXZ3O1xcbn1cXG5cXG4jZXJyb3Ige1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDEwJTtcXG5cXHR0b3A6IDkwJTtcXG5cXHRmb250LXNpemU6IC44cmVtO1xcbn1cXG5cXG4jbW9iaWxlLWZhdmVzIHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0ZGlzcGxheTpub25lO1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyIHtcXG5cXHRmbGV4OiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDEwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXG59XFxuXFxuLmRldGFpbHMtd3JhcHBlcntcXG5cXHRoZWlnaHQ6IDQwMHB4O1xcblxcdGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDIzMCwgMjUwLCAwKTtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMXJlbSA1MHB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxMCU7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubG9jYXRpb24td3JhcHBlciB7XFxuXFx0aGVpZ2h0OjEwMCU7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOCwgMjE4LCAyMTgsIDAuNDExKTtcXG5cXHRwYWRkaW5nOiA0cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNpdHktc3RhdGUge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY291bnRyeSB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG5cXG4udGVtcC13cmFwcGVyIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjU1LCAyNTUsIDAuMzk3KTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi53LWljb24tc21hbGwge1xcblxcdHdpZHRoOjQwcHg7XFxuXFx0YXNwZWN0LXJhdGlvOiAxIC8xO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDoxMHB4O1xcblxcdHRvcDoxMHB4O1xcbn1cXG5cXG4ubGFzdC11cGRhdGUge1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiN0ZW1wZXJhdHVyZSB7XFxuXFx0Zm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4jdGlja2VyIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNTUsIDI1NSwgMC4zOTcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLnRpY2tlci10ZXh0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRhbmltYXRpb246IHRpY2stcmlnaHQgMTVzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdFxcbn1cXG5cXG4udGlja2VyLXRleHQgbGkge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi50aWNrZXItdGV4dCBsaTpmaXJzdC1vZi10eXBlIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbiNmYXYtaWNvbiB7XFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxuXFx0dG9wOiAzJTtcXG5cXHRyaWdodDogNSU7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGFzcGVjdC1yYXRpbzogMS8xO1xcblxcdHBhZGRpbmc6IC41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbiNmYXYtaWNvbjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OjQwMHB4O1xcblxcdHdpZHRoOiA2MDBweDtcXG5cXHRmbGV4LXNocmluazogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgMjMwLCAyNTAsIDAuNTg5KTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWNvbnRhaW5lcj5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0cGFkZGluZzogMXJlbSAxcmVtO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZhdi1tZW51IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG5cXHRncmlkLWF1dG8tcm93czogNzVweDtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdGZsZXg6IGF1dG87XFxuXFx0Z2FwOjFyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZhdm9yaXRlIHtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdGhlaWdodDoxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMjIwLCAyNTIsIDAuNjIzKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5yZW1vdmUtZmF2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNyU7XFxuXFx0cmlnaHQ6NSU7XFxuXFx0Zm9udC1zaXplOiAuOHJlbTtcXG5cXHRwYWRkaW5nOiAxcHggNHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGNvbG9yOiBncmV5O1xcbn1cXG5cXG4ucmVtb3ZlLWZhdjpob3ZlcntcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuXFx0aGVpZ2h0OiAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxuXFx0Z2FwOiA0dnc7XFxuXFx0cGFkZGluZzogMCAycmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAycztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXG59XFxuXFxuLmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdHdpZHRoOiAxMiU7XFxuXFx0aGVpZ2h0OiA5MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDIzMywgMjMzLCAwLjY4NSk7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtaGVhZGVyIHtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pY29uLWZvcmVjYXN0IHtcXG5cXHRmbGV4LXNocmluazogMTtcXG5cXHRoZWlnaHQ6IDQwJTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGV0YWlsLXdyYXBwZXIge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTczLCAxNzMsIDE3MywgMC43MzMpO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHR3aWR0aDo5MCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4ubW9iaWxlLWhvdXItZm9yZWNhc3Qge1xcblxcdG1pbi1oZWlnaHQ6IDIwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg1LCAyMjAsIDI1MiwgMC42MjMpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxufVxcblxcbkBrZXlmcmFtZXMgdGljay1yaWdodCB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjUlKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMjUlKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDRyZW07XFxuXFx0fVxcblxcdC5mb3JlY2FzdC1lbGVtZW50IHtcXG5cXHRcXHR3aWR0aDogMTUwcHg7XFxuXFx0XFx0cGFkZGluZzogMCAxcmVtO1xcblxcdH1cXG5cXHQjc2VhcmNoLWJ1dHRvbiB7XFxuXFx0XFx0d2lkdGg6IDEwMHB4O1xcblxcdH1cXG5cXHQjc2VhcmNoIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFx0Ym9keXtcXG5cXHRcXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcblxcdH1cXG5cXG5cXHQjc2VhcmNoLWljb24ge1xcblxcdFxcdGhlaWdodDoxLjJyZW07XFxuXFx0fVxcblxcblxcdCNzZWFyY2gge1xcblxcdFxcdHdpZHRoOiAxMjVweDtcXG5cXHRcXHRmb250LXNpemU6IC44cmVtOztcXG5cXHR9XFxuXFxuXFx0I3NlYXJjaC1idXR0b24ge1xcblxcdFxcdHdpZHRoOiA3NXB4O1xcblxcdFxcdGhlaWdodDoxLjVyZW07XFxuXFx0fVxcblxcblxcdC5tYWluLXdlYXRoZXIge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiAwO1xcblxcdFxcdGZsZXg6Y29udGVudDtcXG5cXHRcXHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdH1cXG5cXG5cXHQuZGV0YWlscy13cmFwcGVyIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG8gYXV0bztcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0XFx0d2lkdGg6OTAlO1xcblxcdH1cXG5cXG5cXHQuY2l0eS1zdGF0ZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQjdGVtcGVyYXR1cmUge1xcblxcdFxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHR9XFxuXFxuXFx0Lmxhc3QtdXBkYXRlIHtcXG5cXHRcXHRmb250LXNpemU6IC44cmVtO1xcblxcdH1cXG5cXG5cXHQudy1pY29uLXNtYWxsIHtcXG5cXHRcXHR3aWR0aDogMTUlO1xcblxcdH1cXG5cXG5cXHQuZmF2b3JpdGVzLWNvbnRhaW5lciB7XFxuXFx0XFx0d2lkdGg6MHB4O1xcblxcdFxcdGhlaWdodDogMHB4O1xcblxcdFxcdG92ZXJmbG93LXg6aGlkZGVuO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAxcztcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5cXHR9XFxuXFxuXFx0LmZhdm9yaXRlcy1jb250YWluZXIgaDEge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0I3RpY2tlciB7XFxuXFx0XFx0aGVpZ2h0OjEwMCU7XFxuXFx0XFx0d2lkdGg6IDkwJTtcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXG5cXHR9XFxuXFxuXFx0LnRpY2tlci10ZXh0IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFuaW1hdGlvbjogbm9uZTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuXFx0XFx0Z2FwOjA7XFxuXFx0fVxcblxcblxcdC50aWNrZXItdGV4dCBsaSB7XFxuXFx0XFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDA7XFxuXFx0XFx0cGFkZGluZy10b3A6IC40cmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAuNHJlbTtcXG5cXHRcXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFx0XFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0XFx0ZGlzcGxheTpmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQudGlja2VyLXRleHQgbGk6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAwJTtcXG5cXHRcXHRib3JkZXItbGVmdDogbm9uZTtcXG5cXHRcXHRib3JkZXItdG9wOiBub25lO1xcblxcdH1cXG5cXG5cXHQjc2hvdy13ZWVrbHksXFxuXFx0I3Nob3ctaG91cmx5IHtcXG5cXHRcXHRmb250LXNpemU6IC43cmVtO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3Qge1xcblxcdFxcdGhlaWdodDogMHB4O1xcblxcdFxcdHdpZHRoOiA4MCU7XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDJzO1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdC1lbGVtZW50IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdHdpZHRoOiA5MCU7XFxuXFx0XFx0aGVpZ2h0OiAzNSU7XFxuXFx0fVxcblxcblxcdC5pY29uLWZvcmVjYXN0IHtcXG5cXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdC1oZWFkZXIge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWRldGFpbC13cmFwcGVyIHtcXG5cXHRcXHR3aWR0aDogNDAlO1xcblxcdH1cXG5cXG5cXHQjZXJyb3IgXFx0e1xcblxcdFxcdHRvcDogMTEwJTtcXG5cXHRcXHRmb250LXNpemU6IC43cmVtO1xcblxcdH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixmPVwibW9udGhcIixoPVwicXVhcnRlclwiLGM9XCJ5ZWFyXCIsZD1cImRhdGVcIixsPVwiSW52YWxpZCBEYXRlXCIsJD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKSxvcmRpbmFsOmZ1bmN0aW9uKHQpe3ZhciBlPVtcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdLG49dCUxMDA7cmV0dXJuXCJbXCIrdCsoZVsobi0yMCklMTBdfHxlW25dfHxlWzBdKStcIl1cIn19LG09ZnVuY3Rpb24odCxlLG4pe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PWU/dDpcIlwiK0FycmF5KGUrMS1yLmxlbmd0aCkuam9pbihuKSt0fSx2PXtzOm0sejpmdW5jdGlvbih0KXt2YXIgZT0tdC51dGNPZmZzZXQoKSxuPU1hdGguYWJzKGUpLHI9TWF0aC5mbG9vcihuLzYwKSxpPW4lNjA7cmV0dXJuKGU8PTA/XCIrXCI6XCItXCIpK20ociwyLFwiMFwiKStcIjpcIittKGksMixcIjBcIil9LG06ZnVuY3Rpb24gdChlLG4pe2lmKGUuZGF0ZSgpPG4uZGF0ZSgpKXJldHVybi10KG4sZSk7dmFyIHI9MTIqKG4ueWVhcigpLWUueWVhcigpKSsobi5tb250aCgpLWUubW9udGgoKSksaT1lLmNsb25lKCkuYWRkKHIsZikscz1uLWk8MCx1PWUuY2xvbmUoKS5hZGQocisocz8tMToxKSxmKTtyZXR1cm4rKC0ocisobi1pKS8ocz9pLXU6dS1pKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24odCl7cmV0dXJue006Zix5OmMsdzpvLGQ6YSxEOmQsaDp1LG06cyxzOmksbXM6cixROmh9W3RdfHxTdHJpbmcodHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSxnPVwiZW5cIixEPXt9O0RbZ109TTt2YXIgcD1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIF99LFM9ZnVuY3Rpb24gdChlLG4scil7dmFyIGk7aWYoIWUpcmV0dXJuIGc7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBzPWUudG9Mb3dlckNhc2UoKTtEW3NdJiYoaT1zKSxuJiYoRFtzXT1uLGk9cyk7dmFyIHU9ZS5zcGxpdChcIi1cIik7aWYoIWkmJnUubGVuZ3RoPjEpcmV0dXJuIHQodVswXSl9ZWxzZXt2YXIgYT1lLm5hbWU7RFthXT1lLGk9YX1yZXR1cm4hciYmaSYmKGc9aSksaXx8IXImJmd9LHc9ZnVuY3Rpb24odCxlKXtpZihwKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgXyhuKX0sTz12O08ubD1TLE8uaT1wLE8udz1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIE0odCl7dGhpcy4kTD1TKHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCl9dmFyIG09TS5wcm90b3R5cGU7cmV0dXJuIG0ucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihPLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goJCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy4keD10Lnh8fHt9LHRoaXMuaW5pdCgpfSxtLmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRNb250aCgpLHRoaXMuJEQ9dC5nZXREYXRlKCksdGhpcy4kVz10LmdldERheSgpLHRoaXMuJEg9dC5nZXRIb3VycygpLHRoaXMuJG09dC5nZXRNaW51dGVzKCksdGhpcy4kcz10LmdldFNlY29uZHMoKSx0aGlzLiRtcz10LmdldE1pbGxpc2Vjb25kcygpfSxtLiR1dGlscz1mdW5jdGlvbigpe3JldHVybiBPfSxtLmlzVmFsaWQ9ZnVuY3Rpb24oKXtyZXR1cm4hKHRoaXMuJGQudG9TdHJpbmcoKT09PWwpfSxtLmlzU2FtZT1mdW5jdGlvbih0LGUpe3ZhciBuPXcodCk7cmV0dXJuIHRoaXMuc3RhcnRPZihlKTw9biYmbjw9dGhpcy5lbmRPZihlKX0sbS5pc0FmdGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHcodCk8dGhpcy5zdGFydE9mKGUpfSxtLmlzQmVmb3JlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZW5kT2YoZSk8dyh0KX0sbS4kZz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIE8udSh0KT90aGlzW2VdOnRoaXMuc2V0KG4sdCl9LG0udW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LG0udmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sbS5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcyxyPSEhTy51KGUpfHxlLGg9Ty5wKHQpLGw9ZnVuY3Rpb24odCxlKXt2YXIgaT1PLncobi4kdT9EYXRlLlVUQyhuLiR5LGUsdCk6bmV3IERhdGUobi4keSxlLHQpLG4pO3JldHVybiByP2k6aS5lbmRPZihhKX0sJD1mdW5jdGlvbih0LGUpe3JldHVybiBPLncobi50b0RhdGUoKVt0XS5hcHBseShuLnRvRGF0ZShcInNcIiksKHI/WzAsMCwwLDBdOlsyMyw1OSw1OSw5OTldKS5zbGljZShlKSksbil9LHk9dGhpcy4kVyxNPXRoaXMuJE0sbT10aGlzLiRELHY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpO3N3aXRjaChoKXtjYXNlIGM6cmV0dXJuIHI/bCgxLDApOmwoMzEsMTEpO2Nhc2UgZjpyZXR1cm4gcj9sKDEsTSk6bCgwLE0rMSk7Y2FzZSBvOnZhciBnPXRoaXMuJGxvY2FsZSgpLndlZWtTdGFydHx8MCxEPSh5PGc/eSs3OnkpLWc7cmV0dXJuIGwocj9tLUQ6bSsoNi1EKSxNKTtjYXNlIGE6Y2FzZSBkOnJldHVybiAkKHYrXCJIb3Vyc1wiLDApO2Nhc2UgdTpyZXR1cm4gJCh2K1wiTWludXRlc1wiLDEpO2Nhc2UgczpyZXR1cm4gJCh2K1wiU2Vjb25kc1wiLDIpO2Nhc2UgaTpyZXR1cm4gJCh2K1wiTWlsbGlzZWNvbmRzXCIsMyk7ZGVmYXVsdDpyZXR1cm4gdGhpcy5jbG9uZSgpfX0sbS5lbmRPZj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zdGFydE9mKHQsITEpfSxtLiRzZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbixvPU8ucCh0KSxoPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKSxsPShuPXt9LG5bYV09aCtcIkRhdGVcIixuW2RdPWgrXCJEYXRlXCIsbltmXT1oK1wiTW9udGhcIixuW2NdPWgrXCJGdWxsWWVhclwiLG5bdV09aCtcIkhvdXJzXCIsbltzXT1oK1wiTWludXRlc1wiLG5baV09aCtcIlNlY29uZHNcIixuW3JdPWgrXCJNaWxsaXNlY29uZHNcIixuKVtvXSwkPW89PT1hP3RoaXMuJEQrKGUtdGhpcy4kVyk6ZTtpZihvPT09Znx8bz09PWMpe3ZhciB5PXRoaXMuY2xvbmUoKS5zZXQoZCwxKTt5LiRkW2xdKCQpLHkuaW5pdCgpLHRoaXMuJGQ9eS5zZXQoZCxNYXRoLm1pbih0aGlzLiRELHkuZGF5c0luTW9udGgoKSkpLiRkfWVsc2UgbCYmdGhpcy4kZFtsXSgkKTtyZXR1cm4gdGhpcy5pbml0KCksdGhpc30sbS5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQodCxlKX0sbS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXNbTy5wKHQpXSgpfSxtLmFkZD1mdW5jdGlvbihyLGgpe3ZhciBkLGw9dGhpcztyPU51bWJlcihyKTt2YXIgJD1PLnAoaCkseT1mdW5jdGlvbih0KXt2YXIgZT13KGwpO3JldHVybiBPLncoZS5kYXRlKGUuZGF0ZSgpK01hdGgucm91bmQodCpyKSksbCl9O2lmKCQ9PT1mKXJldHVybiB0aGlzLnNldChmLHRoaXMuJE0rcik7aWYoJD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4keStyKTtpZigkPT09YSlyZXR1cm4geSgxKTtpZigkPT09bylyZXR1cm4geSg3KTt2YXIgTT0oZD17fSxkW3NdPWUsZFt1XT1uLGRbaV09dCxkKVskXXx8MSxtPXRoaXMuJGQuZ2V0VGltZSgpK3IqTTtyZXR1cm4gTy53KG0sdGhpcyl9LG0uc3VidHJhY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxlKX0sbS5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPXRoaXMuJGxvY2FsZSgpO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gbi5pbnZhbGlkRGF0ZXx8bDt2YXIgcj10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIsaT1PLnoodGhpcykscz10aGlzLiRILHU9dGhpcy4kbSxhPXRoaXMuJE0sbz1uLndlZWtkYXlzLGY9bi5tb250aHMsaD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc2xpY2UoMCxzKX0sYz1mdW5jdGlvbih0KXtyZXR1cm4gTy5zKHMlMTJ8fDEyLHQsXCIwXCIpfSxkPW4ubWVyaWRpZW18fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9LCQ9e1lZOlN0cmluZyh0aGlzLiR5KS5zbGljZSgtMiksWVlZWTp0aGlzLiR5LE06YSsxLE1NOk8ucyhhKzEsMixcIjBcIiksTU1NOmgobi5tb250aHNTaG9ydCxhLGYsMyksTU1NTTpoKGYsYSksRDp0aGlzLiRELEREOk8ucyh0aGlzLiRELDIsXCIwXCIpLGQ6U3RyaW5nKHRoaXMuJFcpLGRkOmgobi53ZWVrZGF5c01pbix0aGlzLiRXLG8sMiksZGRkOmgobi53ZWVrZGF5c1Nob3J0LHRoaXMuJFcsbywzKSxkZGRkOm9bdGhpcy4kV10sSDpTdHJpbmcocyksSEg6Ty5zKHMsMixcIjBcIiksaDpjKDEpLGhoOmMoMiksYTpkKHMsdSwhMCksQTpkKHMsdSwhMSksbTpTdHJpbmcodSksbW06Ty5zKHUsMixcIjBcIiksczpTdHJpbmcodGhpcy4kcyksc3M6Ty5zKHRoaXMuJHMsMixcIjBcIiksU1NTOk8ucyh0aGlzLiRtcywzLFwiMFwiKSxaOml9O3JldHVybiByLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxlKXtyZXR1cm4gZXx8JFt0XXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLGwpe3ZhciAkLHk9Ty5wKGQpLE09dyhyKSxtPShNLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpKmUsdj10aGlzLU0sZz1PLm0odGhpcyxNKTtyZXR1cm4gZz0oJD17fSwkW2NdPWcvMTIsJFtmXT1nLCRbaF09Zy8zLCRbb109KHYtbSkvNjA0OGU1LCRbYV09KHYtbSkvODY0ZTUsJFt1XT12L24sJFtzXT12L2UsJFtpXT12L3QsJClbeV18fHYsbD9nOk8uYShnKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGYpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gRFt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj1TKHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gTy53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxUPV8ucHJvdG90eXBlO3JldHVybiB3LnByb3RvdHlwZT1ULFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsZl0sW1wiJHlcIixjXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtUW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksdy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxfLHcpLHQuJGk9ITApLHd9LHcubG9jYWxlPVMsdy5pc0RheWpzPXAsdy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiB3KDFlMyp0KX0sdy5lbj1EW2ddLHcuTHM9RCx3LnA9e30sd30pKTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3dpZGdldHMvbG9hZGVyLmNzcyc7XG5pbXBvcnQgZmF2X2ljb24gZnJvbSAnLi9pbWFnZXMvZmF2LnN2Zyc7XG5pbXBvcnQgc2VhcmNoX2ljb24gZnJvbSAnLi9pbWFnZXMvc2VhcmNoLnN2Zyc7XG5pbXBvcnQgbW9iaWxlX2ZhdmVzIGZyb20gJy4vaW1hZ2VzL2ZhdmVzLnN2Zyc7XG5pbXBvcnQgeyBmZXRjaFdlYXRoZXIsIGdldERhaWx5Rm9yZWNhc3QsIGdldEhvdXJseUZvcmVjYXN0LCBzaG93Rm9yZWNhc3QsIHN3aXRjaFVuaXRzIH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXInO1xuaW1wb3J0IHsgY2xlYXJGb3JlY2FzdENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jbGVhblVwJztcbmltcG9ydCB7IHdpbk9ic2VydmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3dpZGdldHMvd2luU2l6ZSc7XG5pbXBvcnQgeyBwb3B1bGF0ZUZhdm9yaXRlcywgc2V0TmV3RmF2b3JpdGUgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lkZ2V0cy9mYXZNYW5hZ2VyJztcblxubGV0IGRhaWx5X2ZvcmVjYXN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXdlZWtseScpO1xubGV0IGhvdXJseV9mb3JlY2FzdF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1ob3VybHknKTtcblxubGV0IG1fZmF2ZXNfYWN0aXZlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHByZXBGb3JGZXRjaCgpIHtcbiAgICBsZXQgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG4gICAgbGV0IGVfc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xuICAgIGlmKHF1ZXJ5LnZhbHVlID09PSAnJykge1xuICAgICAgICBlX3NwYW4udGV4dENvbnRlbnQgPSBcIlBsZWFzZSBlbnRlciBhIGxvY2F0aW9uIVwiXG4gICAgICAgIHJldHVybjtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGVfc3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuICAgIGZldGNoV2VhdGhlcihlbmNvZGVVUklDb21wb25lbnQocXVlcnkudmFsdWUpKTtcbiAgICByZXR1cm47XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50ID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF2LWljb24nKS5zcmMgPSBmYXZfaWNvbjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWljb24nKS5zcmMgPSBzZWFyY2hfaWNvbjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLWZhdmVzJykuc3JjID0gbW9iaWxlX2ZhdmVzO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnZmF2cycpKSB7XG4gICAgICAgIHBvcHVsYXRlRmF2b3JpdGVzKCk7XG4gICAgfVxuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudCcpKSB7XG4gICAgICAgIGZldGNoV2VhdGhlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudCcpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmZXRjaFdlYXRoZXIoJ0plcnNleStDaXR5Jyk7XG59KSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0LXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgc3dpdGNoVW5pdHMpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJlcEZvckZldGNoKCk7XG59KSk7XG5cbmRhaWx5X2ZvcmVjYXN0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIChldmVudCk9PiB7XG4gICAgZGFpbHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBpZihob3VybHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkKSB7XG4gICAgICAgIGhvdXJseV9mb3JlY2FzdF9idG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzaG93Rm9yZWNhc3QoZXZlbnQpO1xuICAgIHJldHVybjtcbn0pO1xuXG5ob3VybHlfZm9yZWNhc3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgaG91cmx5X2ZvcmVjYXN0X2J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgaWYoZGFpbHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkKSB7XG4gICAgICAgIGRhaWx5X2ZvcmVjYXN0X2J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNob3dGb3JlY2FzdChldmVudCk7XG4gICAgcmV0dXJuO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXYtaWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgc2V0TmV3RmF2b3JpdGUoKTtcbn0pXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbGUtZmF2ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIChldmVudCkgPT4ge1xuICAgIGxldCBmYXZfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlcy1jb250YWluZXInKTtcbiAgICBpZiAoIW1fZmF2ZXNfYWN0aXZlKSB7XG4gICAgICAgIGZhdl9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzkxdmgnO1xuICAgICAgICBtX2ZhdmVzX2FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmYXZfY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICBtX2ZhdmVzX2FjdGl2ZSA9IGZhbHNlO1xuICAgIHJldHVybjtcbn0pXG5cbiJdLCJuYW1lcyI6WyJkYXlqcyIsIm1ha2VEYWlseUZvcmVjYXN0RWxlbWVudCIsImQiLCJmb3JlY2FzdF9lbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRlIiwiYXBwZW5kQ2hpbGQiLCJzZXRGb3JlY2FzdEhlYWRlciIsImZvcm1hdCIsImFwcGVuZCIsInNldENvbmRpdGlvbkltYWdlIiwiZGF5IiwiY29uZGl0aW9uIiwiaWNvbiIsInNldFRlbXBlcmF0dXJlRGV0YWlsIiwiTWF0aCIsInJvdW5kIiwibWludGVtcF9mIiwibWF4dGVtcF9mIiwibWludGVtcF9jIiwibWF4dGVtcF9jIiwibWFrZUhvdXJseUZvcmVjYXN0RWxlbWVudCIsInQiLCJob3VyIiwidGltZSIsInRlbXBfZiIsInRlbXBfYyIsImNvbXB1dGVIb3VycyIsImN1cnJlbnRfZGF0ZXRpbWUiLCJjdXJyZW50IiwibGFzdF91cGRhdGVkIiwic3RhcnQiLCJOdW1iZXIiLCJkYXlfaW5keCIsImhvdXJfYXJyIiwibGltaXQiLCJwdXNoIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImgiLCJoZWFkZXIiLCJ0ZXh0Q29udGVudCIsImkiLCJjb25kX2ltZyIsInNyYyIsImYiLCJjIiwidGVtcF93cmFwcGVyIiwiZGV0YWlsc19mIiwiZGV0YWlsc19jIiwiY2xlYXJGb3JlY2FzdENvbnRhaW5lciIsImZvcmVjYXN0X2NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwic2V0Q3VycmVudExvY2FsIiwicSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZXRMb2NhdGlvbiIsInMiLCJjb3VudHJ5Iiwic2V0VGVtcCIsInRlbXBfZWxlIiwic2V0RGF0ZSIsInNldFRpY2tlclRleHQiLCJkYXRhIiwidWwiLCJzZXRDb25kaXRpb24iLCJ0ZXh0Iiwic2V0UmVhbEZlZWwiLCJmZWVsc2xpa2VfZiIsInNldEh1bWlkaXR5IiwiaHVtaWRpdHkiLCJzZXRXaW5kU3BlZWQiLCJ3aW5kX2twaCIsImxpIiwidyIsImlkIiwicGxhY2Vob2xkZXIiLCJkaXNwbGF5TG9hZGVyIiwicmVtb3ZlTG9hZGVyIiwiYmFja2dyb3VuZFN3aXRjaCIsInJlcXVlc3QiLCJyZXFfZXh0cmEiLCJkYWlseV9mb3JlY2FzdCIsImhvdXJseV9mb3JlY2FzdCIsImZhaHJlbmhlaXQiLCJmZXRjaFdlYXRoZXIiLCJlX3NwYW4iLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInNldFdlYXRoZXIiLCJjb2RlIiwiZ2V0RGFpbHlGb3JlY2FzdCIsImdldEhvdXJseUZvcmVjYXN0Iiwic2hvd0ZvcmVjYXN0IiwibG9jYXRpb24iLCJuYW1lIiwicmVnaW9uIiwidGlja2VyIiwiZm9yZWNhc3Rfc2VjdGlvbiIsImZvckVhY2giLCJob3VycyIsInRpY2siLCJob3VybHkiLCJ3ZWVrbHkiLCJkaXNhYmxlZCIsInN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJlbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJzd2l0Y2hVbml0cyIsImZlZWxfZWxlIiwiZmVlbHNsaWtlX2MiLCJjbGVhciIsImRyaXp6bGUiLCJjbG91ZHkiLCJyYWluIiwic25vdyIsInRodW5kZXIiLCJjYyIsImJnIiwiYmFja2dyb3VuZEltYWdlIiwiZmF2b3JpdGVzIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsInNldE5ld0Zhdm9yaXRlIiwicXVlcnkiLCJpbmNsdWRlcyIsImFsZXJ0Iiwic3RyaW5naWZ5IiwibmV3X2VsZSIsIm5ld0ZhdkVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmF2Q2xpY2tIYW5kbGVyIiwicG9wdWxhdGVGYXZvcml0ZXMiLCJmYXZfbWVudSIsImZhdiIsImZhdl9lbGUiLCJmYXZfZGl2IiwiY2xvc2UiLCJyZW1vdmVGYXZFdmVudEhhbmRsZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicGFyZW50IiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImZhdl9pbmR4IiwiaW5kZXhPZiIsInNsaWNlIiwic3BsaWNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVuY29kZVVSSUNvbXBvbmVudCIsImRpbW1lciIsInNwaW5uZXIiLCJ3aW5PYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2xpZW50V2lkdGgiLCJzZWFyY2hfZGl2IiwidGFyZ2V0X2RpdiIsInByZXBlbmQiLCJmb3JlY2FzdF9zZWN0IiwiZmF2X2NvbnRhaW5lciIsInBvc2l0aW9uIiwiY2xpZW50VG9wIiwidG9wIiwibGVmdCIsIndpZHRoIiwicmVtb3ZlQXR0cmlidXRlIiwib2JzZXJ2ZSIsImJvZHkiLCJmYXZfaWNvbiIsInNlYXJjaF9pY29uIiwibW9iaWxlX2ZhdmVzIiwiZGFpbHlfZm9yZWNhc3RfYnRuIiwiaG91cmx5X2ZvcmVjYXN0X2J0biIsIm1fZmF2ZXNfYWN0aXZlIiwicHJlcEZvckZldGNoIiwidmFsdWUiLCJ3aW5kb3ciLCJldmVudCIsImhhc093blByb3BlcnR5IiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9