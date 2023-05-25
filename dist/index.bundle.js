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
  } catch (error) {
    let query = document.querySelector('#search');
    query.setCustomValidity('Cannot find a matching location.');
    query.reportValidity();
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
function backgroundSwitch(cc) {
  let bg = document.querySelector('body');
  if (cc > 999 && cc <= 1003) {
    bg.style.backgroundColor = 'lightblue';
  } else if (cc > 1003 && cc <= 1087 || cc > 1134 && cc <= 1147) {
    bg.style.backgroundColor = 'lightgrey';
  } else if (cc > 1149 && cc <= 1172) {
    bg.style.backgroundColor = 'grey';
  } else if (cc > 1179 && cc <= 1207 || cc > 1239 && cc <= 1264) {
    bg.style.backgroundColor = 'darkgrey';
  } else if (cc > 1209 && cc <= 1237) {
    bg.style.backgroundColor = 'grey';
  } else if (cc > 1272 && cc <= 1282) {
    bg.style.backgroundColor = 'darkpurple';
  } else {
    bg.style.backgroundColor = 'azure';
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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\nbutton {\n\tborder-radius: 1rem;\n\theight: 2rem;\n\tborder: 2px solid rgba(36, 90, 238, 0.39);\n}\n\nbutton:hover {\n\tcursor: pointer;\n}\n\nbutton:disabled:hover {\n\tcursor: default;\n}\n\n.heading {\n\tdisplay:flex;\n\talign-items: center;\n\theight: 8vh;\n\tjustify-content: space-between;\n\tflex:none;\n}\n\n#unit-toggle {\n\tmargin-left: 1rem;\n\tbackground-color: rgba(7, 30, 94, 0.39);\n\twidth: 5vw;\n}\n\n.search-area {\n\tdisplay:flex;\n\tgap: 1rem;\n\talign-items: center;\n\tmargin-right: 1rem;\n}\n\n#search-form {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: .5rem;\n}\n\n#search-form label {\n\tvertical-align: baseline;\n\tfont-size: 1.5rem;\n}\n\n#search-icon {\n\theight: 2rem;\n}\n\n#search {\n\theight: 1.5rem;\n\twidth: 25vw;\n\tfont-size: 1.2rem;\n\tpadding: .1rem .5rem;\n\tborder-radius: .2rem;\n\tborder-style: none;\n\tborder-bottom: 2px solid black;\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n}\n\n#search:focus {\n\toutline: none;\n}\n\n#search-button {\n\twidth: 5vw;\n}\n\n.main-weather {\n\tflex: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10%;\n}\n\n.details-wrapper{\n\theight: 400px;\n\taspect-ratio: 1 / 1;\n\tbackground-color: azure;\n\tposition:relative;\n\tmargin-left: 200px;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tpadding: 1rem 50px;\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr 10%;\n\tgap: 1rem;\n}\n\n.location-wrapper {\n\theight:100%;\n\twidth: 90%;\n}\n\n.city-state {\n\tfont-size: 1.5rem;\n\tword-wrap: break-word;\n}\n\n.country {\n\tfont-size: 1rem;\n\tpadding-left: .5rem;\n}\n\n\n.temp-wrapper {\n\theight: 100%;\n\twidth:100%;\n\tborder-radius: 1rem;\n\tbackground-color: cadetblue;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tposition:relative;\n\tbox-sizing: border-box;\n\tpadding: 1rem;\n}\n\n.w-icon-small {\n\theight:40px;\n\taspect-ratio: 1 /1;\n\tposition: absolute;\n\tright:10px;\n\ttop:10px;\n}\n\n.last-update {\n\tpadding: 1rem;\n\ttext-align: center;\n\tbox-sizing: border-box;\n}\n\n#temperature {\n\tfont-size: 5rem;\n}\n\n#ticker {\n    height: 1.5rem;\n    width: 100%;\n    border: 1px solid black;\n    border-radius: 4px;\n\toverflow-x: hidden;\n\toverflow-y: hidden;\n}\n\n.ticker-text {\n\tdisplay: flex;\n\tgap: 1rem;\n\talign-items: center;\n\theight: 100%;\n\tanimation: tick-right 15s linear infinite;\n\twhite-space: nowrap;\n}\n\n.ticker-text li {\n\twidth: 100%;\n\tpadding-right: 1rem;\n\tborder-right: 1px solid black;\n}\n\n\n.ticker-text li:first-of-type {\n\tpadding-left: 1rem;\n\tborder-left: 1px solid black;\n}\n\n.button-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n#fav-icon {\n\tposition:absolute;\n\ttop: 3%;\n\tright: 5%;\n\theight: 2rem;\n\taspect-ratio: 1/1;\n\tpadding: .5rem;\n\tborder-radius: 1rem;\n}\n\n#fav-icon:hover {\n\tcursor: pointer;\n}\n\n.favorites-container {\n\theight:400px;\n\twidth: 600px;\n\tflex-shrink: 1;\n\tbackground-color: aliceblue;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.favorites-container>h1 {\n\tfont-size: 2.5rem;\n\tpadding: 1rem 1rem;\n\tborder-bottom: 1px solid black;\n}\n\n.fav-menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-auto-rows: 75px;\n\toverflow-y: auto;\n\tflex: auto;\n\tgap:1rem;\n\tpadding: 1rem;\n}\n\n.favorite {\n\twidth:100%;\n\theight:100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: rgb(158, 207, 250);\n\tborder-radius: 1rem;\n\ttext-align: center;\n\tposition: relative;\n\tuser-select: none;\n}\n\n.remove-fav {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 7%;\n\tright:5%;\n\tfont-size: .8rem;\n\tpadding: 1px 4px;\n\tborder: 1px solid black;\n\tborder-radius: 50%;\n}\n\n.remove-fav:hover{\n\tcursor: pointer;\n}\n\n.forecast {\n\theight: 0vh;\n\tdisplay: flex;\n\talign-items: center;\n\toverflow-x: auto;\n\tgap: 4vw;\n\tpadding: 0 2rem;\n\ttransition: all 2s;\n}\n\n.forecast-element {\n\twidth: 12%;\n\theight: 90%;\n\tbackground-color: rgba(233, 233, 233, 0.685);\n\tflex-shrink: 0;\n\tborder-radius: 1rem;\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.forecast-header {\n\tfont-size: 1.2rem;\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\n.icon-forecast {\n\tflex-shrink: 1;\n\theight: 40%;\n\taspect-ratio: 1/1;\n\tborder-radius: 1rem;\n}\n\n.forecast-detail-wrapper {\n\tborder: 1px solid rgba(173, 173, 173, 0.733);\n\tborder-radius: 4px;\n\twidth:90%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.1rem;\n}\n\n@keyframes tick-right {\n\t0% {\n\t\ttransform: translateX(125%);\n\t}\n\t100% {\n\t\ttransform: translateX(-125%);\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\nbutton {\n\tborder-radius: 1rem;\n\theight: 2rem;\n\tborder: 2px solid rgba(36, 90, 238, 0.39);\n}\n\nbutton:hover {\n\tcursor: pointer;\n}\n\nbutton:disabled:hover {\n\tcursor: default;\n}\n\n.heading {\n\tdisplay:flex;\n\talign-items: center;\n\theight: 8vh;\n\tjustify-content: space-between;\n\tflex:none;\n}\n\n#unit-toggle {\n\tmargin-left: 1rem;\n\tbackground-color: rgba(7, 30, 94, 0.39);\n\twidth: 5vw;\n}\n\n.search-area {\n\tdisplay:flex;\n\tgap: 1rem;\n\talign-items: center;\n\tmargin-right: 1rem;\n}\n\n#search-form {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: .5rem;\n}\n\n#search-form label {\n\tvertical-align: baseline;\n\tfont-size: 1.5rem;\n}\n\n#search-icon {\n\theight: 2rem;\n}\n\n#search {\n\theight: 1.5rem;\n\twidth: 25vw;\n\tfont-size: 1.2rem;\n\tpadding: .1rem .5rem;\n\tborder-radius: .2rem;\n\tborder-style: none;\n\tborder-bottom: 2px solid black;\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n}\n\n#search:focus {\n\toutline: none;\n}\n\n#search-button {\n\twidth: 5vw;\n}\n\n.main-weather {\n\tflex: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10%;\n}\n\n.details-wrapper{\n\theight: 400px;\n\taspect-ratio: 1 / 1;\n\tbackground-color: azure;\n\tposition:relative;\n\tmargin-left: 200px;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tpadding: 1rem 50px;\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr 10%;\n\tgap: 1rem;\n}\n\n.location-wrapper {\n\theight:100%;\n\twidth: 90%;\n}\n\n.city-state {\n\tfont-size: 1.5rem;\n\tword-wrap: break-word;\n}\n\n.country {\n\tfont-size: 1rem;\n\tpadding-left: .5rem;\n}\n\n\n.temp-wrapper {\n\theight: 100%;\n\twidth:100%;\n\tborder-radius: 1rem;\n\tbackground-color: cadetblue;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tposition:relative;\n\tbox-sizing: border-box;\n\tpadding: 1rem;\n}\n\n.w-icon-small {\n\theight:40px;\n\taspect-ratio: 1 /1;\n\tposition: absolute;\n\tright:10px;\n\ttop:10px;\n}\n\n.last-update {\n\tpadding: 1rem;\n\ttext-align: center;\n\tbox-sizing: border-box;\n}\n\n#temperature {\n\tfont-size: 5rem;\n}\n\n#ticker {\n    height: 1.5rem;\n    width: 100%;\n    border: 1px solid black;\n    border-radius: 4px;\n\toverflow-x: hidden;\n\toverflow-y: hidden;\n}\n\n.ticker-text {\n\tdisplay: flex;\n\tgap: 1rem;\n\talign-items: center;\n\theight: 100%;\n\tanimation: tick-right 15s linear infinite;\n\twhite-space: nowrap;\n}\n\n.ticker-text li {\n\twidth: 100%;\n\tpadding-right: 1rem;\n\tborder-right: 1px solid black;\n}\n\n\n.ticker-text li:first-of-type {\n\tpadding-left: 1rem;\n\tborder-left: 1px solid black;\n}\n\n.button-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n#fav-icon {\n\tposition:absolute;\n\ttop: 3%;\n\tright: 5%;\n\theight: 2rem;\n\taspect-ratio: 1/1;\n\tpadding: .5rem;\n\tborder-radius: 1rem;\n}\n\n#fav-icon:hover {\n\tcursor: pointer;\n}\n\n.favorites-container {\n\theight:400px;\n\twidth: 600px;\n\tflex-shrink: 1;\n\tbackground-color: aliceblue;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.favorites-container>h1 {\n\tfont-size: 2.5rem;\n\tpadding: 1rem 1rem;\n\tborder-bottom: 1px solid black;\n}\n\n.fav-menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-auto-rows: 75px;\n\toverflow-y: auto;\n\tflex: auto;\n\tgap:1rem;\n\tpadding: 1rem;\n}\n\n.favorite {\n\twidth:100%;\n\theight:100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: rgb(158, 207, 250);\n\tborder-radius: 1rem;\n\ttext-align: center;\n\tposition: relative;\n\tuser-select: none;\n}\n\n.remove-fav {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 7%;\n\tright:5%;\n\tfont-size: .8rem;\n\tpadding: 1px 4px;\n\tborder: 1px solid black;\n\tborder-radius: 50%;\n}\n\n.remove-fav:hover{\n\tcursor: pointer;\n}\n\n.forecast {\n\theight: 0vh;\n\tdisplay: flex;\n\talign-items: center;\n\toverflow-x: auto;\n\tgap: 4vw;\n\tpadding: 0 2rem;\n\ttransition: all 2s;\n}\n\n.forecast-element {\n\twidth: 12%;\n\theight: 90%;\n\tbackground-color: rgba(233, 233, 233, 0.685);\n\tflex-shrink: 0;\n\tborder-radius: 1rem;\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.forecast-header {\n\tfont-size: 1.2rem;\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\n.icon-forecast {\n\tflex-shrink: 1;\n\theight: 40%;\n\taspect-ratio: 1/1;\n\tborder-radius: 1rem;\n}\n\n.forecast-detail-wrapper {\n\tborder: 1px solid rgba(173, 173, 173, 0.733);\n\tborder-radius: 4px;\n\twidth:90%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.1rem;\n}\n\n@keyframes tick-right {\n\t0% {\n\t\ttransform: translateX(125%);\n\t}\n\t100% {\n\t\ttransform: translateX(-125%);\n\t}\n}"],"sourceRoot":""}]);
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

/***/ "./src/images/fav.svg":
/*!****************************!*\
  !*** ./src/images/fav.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "643b37b944493c01ad1b.svg";

/***/ }),

/***/ "./src/images/placeholder.png":
/*!************************************!*\
  !*** ./src/images/placeholder.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "53c9d24ded60efad3f85.png";

/***/ }),

/***/ "./src/images/search.svg":
/*!*******************************!*\
  !*** ./src/images/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54ff7732bb1a5ff166c6.svg";

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
/* harmony import */ var _components_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/weather */ "./src/components/weather.js");
/* harmony import */ var _components_cleanUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cleanUp */ "./src/components/cleanUp.js");
/* harmony import */ var _components_widgets_favManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/widgets/favManager */ "./src/components/widgets/favManager.js");







let daily_forecast_btn = document.querySelector('#show-weekly');
let hourly_forecast_btn = document.querySelector('#show-hourly');
function prepForFetch() {
  let query = document.querySelector('#search');
  if (query.value === '') {
    query.setCustomValidity('Please enter a location.');
    query.reportValidity();
    return;
  } else {
    query.setCustomValidity('');
  }
  (0,_components_weather__WEBPACK_IMPORTED_MODULE_4__.fetchWeather)(encodeURIComponent(query.value));
  return;
}
window.addEventListener('load', event => {
  document.querySelector('#fav-icon').src = _images_fav_svg__WEBPACK_IMPORTED_MODULE_2__;
  document.querySelector('#search-icon').src = _images_search_svg__WEBPACK_IMPORTED_MODULE_3__;
  (0,_components_widgets_favManager__WEBPACK_IMPORTED_MODULE_6__.populateFavorites)();
  if (localStorage.getItem('current')) {
    (0,_components_weather__WEBPACK_IMPORTED_MODULE_4__.fetchWeather)(localStorage.getItem('current'));
    return;
  }
  (0,_components_weather__WEBPACK_IMPORTED_MODULE_4__.fetchWeather)('Jersey+City');
});
document.querySelector('#unit-toggle').addEventListener('click', _components_weather__WEBPACK_IMPORTED_MODULE_4__.switchUnits);
document.querySelector('#search-form').addEventListener('submit', event => {
  event.preventDefault();
  prepForFetch();
});
daily_forecast_btn.addEventListener('click', event => {
  daily_forecast_btn.disabled = true;
  if (hourly_forecast_btn.disabled) {
    hourly_forecast_btn.disabled = false;
  }
  (0,_components_weather__WEBPACK_IMPORTED_MODULE_4__.showForecast)(event);
  return;
});
hourly_forecast_btn.addEventListener('click', event => {
  hourly_forecast_btn.disabled = true;
  if (daily_forecast_btn.disabled) {
    daily_forecast_btn.disabled = false;
  }
  (0,_components_weather__WEBPACK_IMPORTED_MODULE_4__.showForecast)(event);
  return;
});
document.querySelector('#fav-icon').addEventListener('click', event => {
  (0,_components_widgets_favManager__WEBPACK_IMPORTED_MODULE_6__.setNewFavorite)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4RUEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN0QkosWUFBWSxDQUFDLENBQUM7QUFDbEIsQ0FBRSxDQUFDO0FBRUhGLGtCQUFrQixDQUFDeEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFHNkIsS0FBSyxJQUFJO0VBQ25ETCxrQkFBa0IsQ0FBQ2xELFFBQVEsR0FBRyxJQUFJO0VBQ2xDLElBQUdtRCxtQkFBbUIsQ0FBQ25ELFFBQVEsRUFBRTtJQUM3Qm1ELG1CQUFtQixDQUFDbkQsUUFBUSxHQUFHLEtBQUs7RUFDeEM7RUFFQWQsaUVBQVksQ0FBQ3FFLEtBQUssQ0FBQztFQUNuQjtBQUNKLENBQUMsQ0FBQztBQUVGSixtQkFBbUIsQ0FBQ3pCLGdCQUFnQixDQUFDLE9BQU8sRUFBRzZCLEtBQUssSUFBSztFQUNyREosbUJBQW1CLENBQUNuRCxRQUFRLEdBQUcsSUFBSTtFQUNuQyxJQUFHa0Qsa0JBQWtCLENBQUNsRCxRQUFRLEVBQUU7SUFDNUJrRCxrQkFBa0IsQ0FBQ2xELFFBQVEsR0FBRyxLQUFLO0VBQ3ZDO0VBRUFkLGlFQUFZLENBQUNxRSxLQUFLLENBQUM7RUFDbkI7QUFDSixDQUFDLENBQUM7QUFFRnZLLFFBQVEsQ0FBQ21ELGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ3VGLGdCQUFnQixDQUFDLE9BQU8sRUFBRzZCLEtBQUssSUFBSztFQUNyRW5DLDhFQUFjLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9jbGVhblVwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvbG9jYWxIYW5kbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvc2V0V2VhdGhlckhlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3RpY2tlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL2JhY2tncm91bmRDb250cm9sLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9mYXZNYW5hZ2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9sb2FkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9sb2FkZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL2xvYWRlci5jc3M/OTVjYiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuXG5mdW5jdGlvbiBtYWtlRGFpbHlGb3JlY2FzdEVsZW1lbnQoZCkge1xuICAgIC8vR2l2ZW4gZGF5LCByZXR1cm4gZGl2IGNvbnRhaW5pbmcgd2VhdGhlciBpbmZvIGZvciB0aGUgZGF5IG9mIHRoZSB3ZWVrXG4gICAgbGV0IGZvcmVjYXN0X2VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL1xuICAgIGZvcmVjYXN0X2VsZS5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1lbGVtZW50Jyk7IC8vXG4gICAgXG4gICAgbGV0IGRhdGUgPSBkYXlqcyhkLmRhdGUsICdZWVlZLU1NTU0tRCcpOyAvL1xuICAgIGZvcmVjYXN0X2VsZS5hcHBlbmRDaGlsZChzZXRGb3JlY2FzdEhlYWRlcihkYXRlLmZvcm1hdCgnZGRkZCcpKSk7XG5cbiAgICBmb3JlY2FzdF9lbGUuYXBwZW5kKHNldENvbmRpdGlvbkltYWdlKGQuZGF5LmNvbmRpdGlvbi5pY29uKSk7XG5cbiAgICBmb3JlY2FzdF9lbGUuYXBwZW5kKHNldFRlbXBlcmF0dXJlRGV0YWlsKGAke01hdGgucm91bmQoZC5kYXkubWludGVtcF9mKX3CsEYgLyAke01hdGgucm91bmQoZC5kYXkubWF4dGVtcF9mKX3CsEZgLFxuICAgICBgJHtNYXRoLnJvdW5kKGQuZGF5Lm1pbnRlbXBfYyl9wrBDIC8gJHtNYXRoLnJvdW5kKGQuZGF5Lm1heHRlbXBfYyl9wrBDYCkpO1xuXG4gICAgcmV0dXJuIGZvcmVjYXN0X2VsZTtcbn1cblxuZnVuY3Rpb24gbWFrZUhvdXJseUZvcmVjYXN0RWxlbWVudCh0KSB7XG4gICAgbGV0IGZvcmVjYXN0X2VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcmVjYXN0X2VsZS5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1lbGVtZW50Jyk7XG4gICAgXG4gICAgbGV0IGhvdXIgPSBkYXlqcyh0LnRpbWUsICdZWVlZLU1NTU0tRCcpO1xuICAgIGZvcmVjYXN0X2VsZS5hcHBlbmRDaGlsZChzZXRGb3JlY2FzdEhlYWRlcihob3VyLmZvcm1hdCgnZGRkZCwgaDptbSBBJykpKTtcblxuICAgIGZvcmVjYXN0X2VsZS5hcHBlbmRDaGlsZChzZXRDb25kaXRpb25JbWFnZSh0LmNvbmRpdGlvbi5pY29uKSk7XG5cbiAgICBmb3JlY2FzdF9lbGUuYXBwZW5kQ2hpbGQoc2V0VGVtcGVyYXR1cmVEZXRhaWwoYCR7TWF0aC5yb3VuZCh0LnRlbXBfZil9wrAgRmAsIFxuICAgICAgICBgJHtNYXRoLnJvdW5kKHQudGVtcF9jKX3CsCBDYCkpO1xuXG4gICAgcmV0dXJuIGZvcmVjYXN0X2VsZTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUhvdXJzKGQpIHtcbiAgICBsZXQgY3VycmVudF9kYXRldGltZSA9IGQuY3VycmVudC5sYXN0X3VwZGF0ZWQ7XG4gICAgY3VycmVudF9kYXRldGltZSA9IGRheWpzKGN1cnJlbnRfZGF0ZXRpbWUsICdZWVlZLU1NTU0tRCcpO1xuICAgIFxuICAgIGxldCBzdGFydCA9IE51bWJlcihjdXJyZW50X2RhdGV0aW1lLmZvcm1hdCgnSEgnKSkgKyAxO1xuICAgIGxldCBkYXlfaW5keCA9IDA7XG4gICAgbGV0IGhvdXJfYXJyID0gW107XG4gICAgXG4gICAgZm9yKGxldCBsaW1pdCA9IDI0OyBsaW1pdCA+IDA7IGxpbWl0LS0pIHtcbiAgICAgICAgaWYgKHN0YXJ0ID4gMjMpIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgICAgIGRheV9pbmR4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaG91cl9hcnIucHVzaChkLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV9pbmR4XS5ob3VyW3N0YXJ0XSk7XG4gICAgICAgIHN0YXJ0Kys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvdXJfYXJyO1xufVxuXG5mdW5jdGlvbiBzZXRGb3JlY2FzdEhlYWRlcihoKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWhlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGg7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gc2V0Q29uZGl0aW9uSW1hZ2UoaSkge1xuICAgIGxldCBjb25kX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbmRfaW1nLnNyYyA9IGlcbiAgICBjb25kX2ltZy5jbGFzc0xpc3QuYWRkKCdpY29uLWZvcmVjYXN0Jyk7XG4gICAgcmV0dXJuIGNvbmRfaW1nO1xufVxuXG5mdW5jdGlvbiBzZXRUZW1wZXJhdHVyZURldGFpbChmLCBjKSB7XG4gICAgbGV0IHRlbXBfd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0ZW1wX3dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZGV0YWlsLXdyYXBwZXInKTtcblxuICAgIGxldCBkZXRhaWxzX2YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGV0YWlsc19mLmNsYXNzTGlzdC5hZGQoJ2ZhaHJlbmhlaXQnKTtcbiAgICBkZXRhaWxzX2YudGV4dENvbnRlbnQgPSBmO1xuXG4gICAgbGV0IGRldGFpbHNfYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXRhaWxzX2MuY2xhc3NMaXN0LmFkZCgnY2Vsc2l1cycpO1xuICAgIGRldGFpbHNfYy50ZXh0Q29udGVudCA9IGM7XG5cbiAgICB0ZW1wX3dyYXBwZXIuYXBwZW5kKGRldGFpbHNfZiwgZGV0YWlsc19jKTtcbiAgICByZXR1cm4gdGVtcF93cmFwcGVyO1xufVxuXG5leHBvcnQgeyBtYWtlRGFpbHlGb3JlY2FzdEVsZW1lbnQsIG1ha2VIb3VybHlGb3JlY2FzdEVsZW1lbnQsIGNvbXB1dGVIb3VycyB9OyIsImZ1bmN0aW9uIGNsZWFyRm9yZWNhc3RDb250YWluZXIoKSB7XG4gICAgbGV0IGZvcmVjYXN0X2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuICAgIHdoaWxlKGZvcmVjYXN0X2NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIGZvcmVjYXN0X2NvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCB7IGNsZWFyRm9yZWNhc3RDb250YWluZXIgfTsiLCJmdW5jdGlvbiBzZXRDdXJyZW50TG9jYWwocSkge1xuICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50JywgcSk7XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCB7IHNldEN1cnJlbnRMb2NhbCB9OyIsImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuZnVuY3Rpb24gc2V0TG9jYXRpb24gKGMsIHMsIGNvdW50cnkpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1zdGF0ZScpLnRleHRDb250ZW50ID0gYCR7Y30sICR7c31gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5JykudGV4dENvbnRlbnQgPSBgJHtjb3VudHJ5fWA7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBzZXRUZW1wKHQpIHtcbiAgICBsZXQgdGVtcF9lbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKTtcbiAgICB0ZW1wX2VsZS50ZXh0Q29udGVudCA9IGAke3R9YDtcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIHNldERhdGUoZCkge1xuICAgIGxldCBkYXRlID0gZGF5anMoZCwgJ1lZWVktTU1NTS1EJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhc3QtdXBkYXRlJykudGV4dENvbnRlbnQgPSBgVXBkYXRlZDogJHtkYXRlLmZvcm1hdCgnZGRkZCwgaDptbSBBJyl9YDtcbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCB7IHNldExvY2F0aW9uLCBzZXRUZW1wLCBzZXREYXRlIH07IiwiZnVuY3Rpb24gc2V0VGlja2VyVGV4dChkYXRhKSB7XG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5hcHBlbmRDaGlsZChzZXRDb25kaXRpb24oZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoc2V0UmVhbEZlZWwoZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mKSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoc2V0SHVtaWRpdHkoZGF0YS5jdXJyZW50Lmh1bWlkaXR5KSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoc2V0V2luZFNwZWVkKGRhdGEuY3VycmVudC53aW5kX2twaCkpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ3RpY2tlci10ZXh0Jyk7XG4gICAgcmV0dXJuIHVsO1xufVxuXG5mdW5jdGlvbiBzZXRDb25kaXRpb24oYykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSBgQ29uZGl0aW9uOiAke2N9YDtcbiAgICByZXR1cm4gbGk7XG59XG5cbmZ1bmN0aW9uIHNldEh1bWlkaXR5KGgpIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2h9JWA7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBzZXRXaW5kU3BlZWQodykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3fSBrbS9oYDtcbiAgICByZXR1cm4gbGk7XG59XG5cbmZ1bmN0aW9uIHNldFJlYWxGZWVsKGYpIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7Zn0gwrBGYDtcbiAgICBsaS5pZCA9ICdmZWVsJztcbiAgICByZXR1cm4gbGk7XG59XG5cbmV4cG9ydCB7IHNldFRpY2tlclRleHQgfTsiLCJpbXBvcnQgeyBzZXRUaWNrZXJUZXh0IH0gZnJvbSBcIi4vdGlja2VyXCI7XG5pbXBvcnQgcGxhY2Vob2xkZXIgZnJvbSAnLi8uLi9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJztcbmltcG9ydCB7IHNldERhdGUsIHNldExvY2F0aW9uLCBzZXRUZW1wIH0gZnJvbSBcIi4vc2V0V2VhdGhlckhlbHBlclwiO1xuaW1wb3J0IHsgZGlzcGxheUxvYWRlciwgcmVtb3ZlTG9hZGVyIH0gZnJvbSBcIi4vd2lkZ2V0cy9sb2FkXCI7XG5pbXBvcnQgeyBtYWtlRGFpbHlGb3JlY2FzdEVsZW1lbnQsIGNvbXB1dGVIb3VycywgbWFrZUhvdXJseUZvcmVjYXN0RWxlbWVudCAgfSBmcm9tIFwiLi9Gb3JlY2FzdFwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudExvY2FsIH0gZnJvbSBcIi4vbG9jYWxIYW5kbGVyXCI7XG5pbXBvcnQgeyBjbGVhckZvcmVjYXN0Q29udGFpbmVyIH0gZnJvbSBcIi4vY2xlYW5VcFwiO1xuaW1wb3J0IHsgYmFja2dyb3VuZFN3aXRjaCB9IGZyb20gXCIuL3dpZGdldHMvYmFja2dyb3VuZENvbnRyb2xcIjtcblxubGV0IHJlcXVlc3QgPSAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xYjA1NDk3MmNiMzg0ZDc4OWM1MTk1MjAyMjMxNTA1JnE9JztcbmxldCByZXFfZXh0cmEgPSAnJmRheXM9NSZhcWk9bm8mYWxlcnRzPW5vJ1xubGV0IGRhdGEgPSB7fTtcbmxldCBkYWlseV9mb3JlY2FzdCA9IFtdO1xubGV0IGhvdXJseV9mb3JlY2FzdCA9IFtdO1xubGV0IGZhaHJlbmhlaXQgPSB0cnVlO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIocSkge1xuICAgIGRpc3BsYXlMb2FkZXIoKTtcbiAgICB0cnl7XG4gICAgICAgIC8vTG9hZGluZyBjb21wb25lbnQgc3R1ZmYgaGVyZVxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0ICsgcSArIHJlcV9leHRyYSwgeydtb2RlJzogJ2NvcnMnfSk7XG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldFdlYXRoZXIoKTtcbiAgICAgICAgYmFja2dyb3VuZFN3aXRjaChOdW1iZXIoZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5jb2RlKSk7XG4gICAgICAgIGNsZWFyRm9yZWNhc3RDb250YWluZXIoKTtcbiAgICAgICAgZ2V0RGFpbHlGb3JlY2FzdCgpO1xuICAgICAgICBnZXRIb3VybHlGb3JlY2FzdCgpO1xuICAgICAgICBzaG93Rm9yZWNhc3QoKTtcbiAgICAgICAgc2V0Q3VycmVudExvY2FsKHEpO1xuICAgIH1cbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgICBsZXQgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG4gICAgICAgIHF1ZXJ5LnNldEN1c3RvbVZhbGlkaXR5KCdDYW5ub3QgZmluZCBhIG1hdGNoaW5nIGxvY2F0aW9uLicpO1xuICAgICAgICBxdWVyeS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICAgIHJlbW92ZUxvYWRlcigpO1xufVxuXG5mdW5jdGlvbiBzZXRXZWF0aGVyKCkge1xuICAgIHNldExvY2F0aW9uKGRhdGEubG9jYXRpb24ubmFtZSwgZGF0YS5sb2NhdGlvbi5yZWdpb24sIGRhdGEubG9jYXRpb24uY291bnRyeSk7XG4gICAgc2V0VGVtcCgoZmFocmVuaGVpdCA/IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfZil9IMKwRmAgOiBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wX2MpfSDCsENgKSk7XG4gICAgc2V0RGF0ZShkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkKTtcbiAgICBsZXQgdGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpY2tlcicpO1xuICAgIGlmKHRpY2tlci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRpY2tlci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICB0aWNrZXIuYXBwZW5kQ2hpbGQoc2V0VGlja2VyVGV4dChkYXRhKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnctaWNvbi1zbWFsbCcpLnNyYyA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbn1cblxuXG5mdW5jdGlvbiBnZXREYWlseUZvcmVjYXN0KCkge1xuICAgIGRhaWx5X2ZvcmVjYXN0ID0gW107XG4gICAgbGV0IGZvcmVjYXN0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICAoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheSkuZm9yRWFjaChkYXkgPT4ge1xuICAgICAgICBkYWlseV9mb3JlY2FzdC5wdXNoKG1ha2VEYWlseUZvcmVjYXN0RWxlbWVudChkYXkpKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJseUZvcmVjYXN0KCkge1xuICAgIGhvdXJseV9mb3JlY2FzdCA9IFtdO1xuICAgIGxldCBmb3JlY2FzdF9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG4gICAgbGV0IGhvdXJzID0gY29tcHV0ZUhvdXJzKGRhdGEpO1xuICAgIGhvdXJzLmZvckVhY2godGljayA9PiB7XG4gICAgICAgIGhvdXJseV9mb3JlY2FzdC5wdXNoKG1ha2VIb3VybHlGb3JlY2FzdEVsZW1lbnQodGljaykpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cblxuXG5mdW5jdGlvbiBzaG93Rm9yZWNhc3QoKSB7XG4gICAgbGV0IGZvcmVjYXN0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICBsZXQgaG91cmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctaG91cmx5Jyk7XG4gICAgbGV0IHdlZWtseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXdlZWtseScpO1xuXG4gICAgY2xlYXJGb3JlY2FzdENvbnRhaW5lcigpO1xuXG4gICAgaWYod2Vla2x5LmRpc2FibGVkKSB7XG4gICAgICAgIGZvcmVjYXN0X3NlY3Rpb24uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgICAgICAgZGFpbHlfZm9yZWNhc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGZvcmVjYXN0X3NlY3Rpb24uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZihob3VybHkuZGlzYWJsZWQpIHtcbiAgICAgICAgZm9yZWNhc3Rfc2VjdGlvbi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgaG91cmx5X2ZvcmVjYXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBmb3JlY2FzdF9zZWN0aW9uLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9KVxuICAgIH1lbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGZhaHJlbmhlaXQpIHtcbiAgICAgICAgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbHNpdXMnKSkpLmZvckVhY2goZWxlID0+e1xuICAgICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWhyZW5oZWl0JykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZm9yZWNhc3Rfc2VjdGlvbi5zdHlsZS5oZWlnaHQgPSAnMjV2aCc7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hVbml0cygpIHtcbiAgICBmYWhyZW5oZWl0ID0gIWZhaHJlbmhlaXQ7XG4gICAgbGV0IHRlbXBfZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG4gICAgbGV0IGZlZWxfZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWwnKTtcbiAgICBpZihmYWhyZW5oZWl0KSB7XG4gICAgICAgIHRlbXBfZWxlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcF9mKX0gwrBGYDtcbiAgICAgICAgZmVlbF9lbGUudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZil9IMKwRmA7XG4gICAgICAgIFxuICAgICAgICAvL1RoaXMgaXMgdWdseSwgYnV0IGZvciBjdXJyZW50IGxhY2sgb2YgYSBiZXR0ZXIgc29sdXRpb24sIGl0IHdvcmtzLlxuICAgICAgICAvL0hvcGVmdWxseSB3aXRob3V0IGJyZWFraW5nLiAyMyBNYXksIDIwMjMgMTQ6NTlcbiAgICAgICAgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhaHJlbmhlaXQnKSkpLmZvckVhY2goZWxlID0+e1xuICAgICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbHNpdXMnKSkpLmZvckVhY2goZWxlID0+e1xuICAgICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47IFxuICAgIH1cbiAgICB0ZW1wX2VsZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfYyl9IMKwQ2A7XG4gICAgZmVlbF9lbGUudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyl9IMKwQ2A7XG5cbiAgICAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFocmVuaGVpdCcpKSkuZm9yRWFjaChlbGUgPT57XG4gICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuXG4gICAgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbHNpdXMnKSkpLmZvckVhY2goZWxlID0+e1xuICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IHsgZmV0Y2hXZWF0aGVyLCBzd2l0Y2hVbml0cywgZ2V0RGFpbHlGb3JlY2FzdCwgZ2V0SG91cmx5Rm9yZWNhc3QsIHNob3dGb3JlY2FzdCB9OyIsImZ1bmN0aW9uIGJhY2tncm91bmRTd2l0Y2goY2MpIHtcbiAgICBsZXQgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgaWYoY2MgPiA5OTkgJiYgY2MgPD0gMTAwMykge1xuICAgICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRibHVlJztcbiAgICB9IGVsc2UgaWYgKChjYyA+IDEwMDMgJiYgY2MgPD0gMTA4NykgfHwgKGNjID4gMTEzNCAmJiBjYyA8PSAxMTQ3KSkge1xuICAgICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmV5JztcbiAgICB9IGVsc2UgaWYgKGNjID4gMTE0OSAmJiBjYyA8PSAxMTcyKSB7XG4gICAgICAgIGJnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmV5JztcbiAgICB9IGVsc2UgaWYgKChjYyA+IDExNzkgJiYgY2MgPD0gMTIwNykgfHwgKGNjID4gMTIzOSAmJiBjYyA8PSAxMjY0KSkge1xuICAgICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZGFya2dyZXknO1xuICAgIH0gZWxzZSBpZiAoY2MgPiAxMjA5ICYmIGNjIDw9IDEyMzcpIHtcbiAgICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknO1xuICAgIH0gZWxzZSBpZiAoY2MgPiAxMjcyICYmIGNjIDw9IDEyODIpIHtcbiAgICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2RhcmtwdXJwbGUnO1xuICAgIH0gZWxzZXtcbiAgICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2F6dXJlJztcbiAgICB9XG59XG5cbmV4cG9ydCB7IGJhY2tncm91bmRTd2l0Y2ggfTsiLCJpbXBvcnQgeyBmZXRjaFdlYXRoZXIgfSBmcm9tIFwiLi4vd2VhdGhlclwiO1xuXG5sZXQgZmF2b3JpdGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2cycpKTtcblxuXG5mdW5jdGlvbiBzZXROZXdGYXZvcml0ZSgpIHtcbiAgICBsZXQgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1zdGF0ZScpLnRleHRDb250ZW50O1xuICAgIFxuICAgIGlmKGZhdm9yaXRlcy5pbmNsdWRlcyhxdWVyeSkpIHtcbiAgICAgICAgYWxlcnQoJ1RoaXMgaXMgYWxyZWFkeSBmYXZvcml0ZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmYXZvcml0ZXMucHVzaChxdWVyeSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZhdnMnLCBKU09OLnN0cmluZ2lmeShmYXZvcml0ZXMpKTtcbiAgICBcbiAgICBsZXQgbmV3X2VsZSA9IG5ld0ZhdkVsZW1lbnQocXVlcnkpO1xuICAgIG5ld19lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYXZDbGlja0hhbmRsZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtbWVudScpLmFwcGVuZENoaWxkKG5ld19lbGUpO1xuICAgIFxuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVGYXZvcml0ZXMoKSB7XG4gICAgbGV0IGZhdl9tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1tZW51Jyk7XG4gICAgXG4gICAgZmF2b3JpdGVzLmZvckVhY2goZmF2ID0+IHtcbiAgICAgICAgbGV0IGZhdl9lbGUgPSBuZXdGYXZFbGVtZW50KGZhdilcbiAgICAgICAgZmF2X2VsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZhdkNsaWNrSGFuZGxlcik7XG4gICAgICAgIGZhdl9tZW51LmFwcGVuZENoaWxkKGZhdl9lbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybjtcbn1cblxuXG5mdW5jdGlvbiBuZXdGYXZFbGVtZW50KGZhdikge1xuICAgIGxldCBmYXZfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmF2X2Rpdi50ZXh0Q29udGVudCA9IGZhdjtcbiAgICBmYXZfZGl2LmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlJyk7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xvc2UudGV4dENvbnRlbnQgPSAn4p2MJztcbiAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtZmF2Jyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVGYXZFdmVudEhhbmRsZXIpO1xuICAgIGZhdl9kaXYuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIHJldHVybiBmYXZfZGl2O1xufVxuXG5mdW5jdGlvbiByZW1vdmVGYXZFdmVudEhhbmRsZXIoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgbGV0IGZhdl9pbmR4ID0gZmF2b3JpdGVzLmluZGV4T2YocGFyZW50LnRleHRDb250ZW50LnNsaWNlKDAsIC0xKSk7XG5cbiAgICBmYXZvcml0ZXMuc3BsaWNlKGZhdl9pbmR4LCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2cycsIEpTT04uc3RyaW5naWZ5KGZhdm9yaXRlcykpO1xuICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRmF2RXZlbnRIYW5kbGVyKTtcbiAgICBwYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYXZDbGlja0hhbmRsZXIpO1xuICAgIHBhcmVudC5yZW1vdmUoKTtcblxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZzJykpO1xuICAgIHJldHVybjsgICBcbn1cblxuZnVuY3Rpb24gZmF2Q2xpY2tIYW5kbGVyKGUpIHtcbiAgICBmZXRjaFdlYXRoZXIoZW5jb2RlVVJJQ29tcG9uZW50KGUudGFyZ2V0LnRleHRDb250ZW50KSk7XG59XG5cbi8vZGVidWdcbi8vIGZ1bmN0aW9uIGNsZWFyRmF2b3JpdGVzKCkge1xuLy8gICAgIGZhdm9yaXRlcyA9IFtdO1xuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZzJywgSlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVzKSk7XG4vLyAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZhdnMnKSk7XG4vLyB9XG5cbmV4cG9ydCB7IHNldE5ld0Zhdm9yaXRlLCBwb3B1bGF0ZUZhdm9yaXRlcyB9OyIsImZ1bmN0aW9uIGRpc3BsYXlMb2FkZXIoKSB7XG4gICAgbGV0IGRpbW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpbW1lci5jbGFzc0xpc3QuYWRkKCdkaW1tZXInKTtcbiAgICBsZXQgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnbGRzLXJpcHBsZScpO1xuICAgIHNwaW5uZXIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBkaW1tZXIuYXBwZW5kQ2hpbGQoc3Bpbm5lcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGRpbW1lcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxvYWRlcigpIHtcbiAgICBsZXQgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZHMtcmlwcGxlJyk7XG4gICAgd2hpbGUoc3Bpbm5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHNwaW5uZXIuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgc3Bpbm5lci5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGltbWVyJykucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlMb2FkZXIsIHJlbW92ZUxvYWRlciB9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypDcmVkaXRzOiAubGRzLXJpcHBsZSBmcm9tIGh0dHBzOi8vbG9hZGluZy5pby9jc3MvKi9cXG5cXG4uZGltbWVyIHtcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgbWluLXdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuLmxkcy1yaXBwbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDQuOSUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDUlIHtcXG4gICAgICB0b3A6IDM2cHg7XFxuICAgICAgbGVmdDogMzZweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgd2lkdGg6IDcycHg7XFxuICAgICAgaGVpZ2h0OiA3MnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL2xvYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0RBQW9EOztBQUVwRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw4REFBOEQ7RUFDaEU7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0U7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxRQUFRO01BQ1IsU0FBUztNQUNULFdBQVc7TUFDWCxZQUFZO01BQ1osVUFBVTtJQUNaO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypDcmVkaXRzOiAubGRzLXJpcHBsZSBmcm9tIGh0dHBzOi8vbG9hZGluZy5pby9jc3MvKi9cXG5cXG4uZGltbWVyIHtcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgbWluLXdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuLmxkcy1yaXBwbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDQuOSUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDUlIHtcXG4gICAgICB0b3A6IDM2cHg7XFxuICAgICAgbGVmdDogMzZweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgd2lkdGg6IDcycHg7XFxuICAgICAgaGVpZ2h0OiA3MnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgzNiwgOTAsIDIzOCwgMC4zOSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmhlYWRpbmcge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogOHZoO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmbGV4Om5vbmU7XFxufVxcblxcbiN1bml0LXRvZ2dsZSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCAzMCwgOTQsIDAuMzkpO1xcblxcdHdpZHRoOiA1dnc7XFxufVxcblxcbi5zZWFyY2gtYXJlYSB7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAuNXJlbTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIGxhYmVsIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNzZWFyY2gtaWNvbiB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jc2VhcmNoIHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHR3aWR0aDogMjV2dztcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRwYWRkaW5nOiAuMXJlbSAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAuMnJlbTtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNzZWFyY2g6Zm9jdXMge1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZWFyY2gtYnV0dG9uIHtcXG5cXHR3aWR0aDogNXZ3O1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyIHtcXG5cXHRmbGV4OiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDEwJTtcXG59XFxuXFxuLmRldGFpbHMtd3JhcHBlcntcXG5cXHRoZWlnaHQ6IDQwMHB4O1xcblxcdGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxuXFx0bWFyZ2luLWxlZnQ6IDIwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwYWRkaW5nOiAxcmVtIDUwcHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDEwJTtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5sb2NhdGlvbi13cmFwcGVyIHtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHR3aWR0aDogOTAlO1xcbn1cXG5cXG4uY2l0eS1zdGF0ZSB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uY291bnRyeSB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdHBhZGRpbmctbGVmdDogLjVyZW07XFxufVxcblxcblxcbi50ZW1wLXdyYXBwZXIge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnctaWNvbi1zbWFsbCB7XFxuXFx0aGVpZ2h0OjQwcHg7XFxuXFx0YXNwZWN0LXJhdGlvOiAxIC8xO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDoxMHB4O1xcblxcdHRvcDoxMHB4O1xcbn1cXG5cXG4ubGFzdC11cGRhdGUge1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiN0ZW1wZXJhdHVyZSB7XFxuXFx0Zm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4jdGlja2VyIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi50aWNrZXItdGV4dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0YW5pbWF0aW9uOiB0aWNrLXJpZ2h0IDE1cyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRpY2tlci10ZXh0IGxpIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4udGlja2VyLXRleHQgbGk6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcblxcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4jZmF2LWljb24ge1xcblxcdHBvc2l0aW9uOmFic29sdXRlO1xcblxcdHRvcDogMyU7XFxuXFx0cmlnaHQ6IDUlO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRwYWRkaW5nOiAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4jZmF2LWljb246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZhdm9yaXRlcy1jb250YWluZXIge1xcblxcdGhlaWdodDo0MDBweDtcXG5cXHR3aWR0aDogNjAwcHg7XFxuXFx0ZmxleC1zaHJpbms6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mYXZvcml0ZXMtY29udGFpbmVyPmgxIHtcXG5cXHRmb250LXNpemU6IDIuNXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtIDFyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZmF2LW1lbnUge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcblxcdGdyaWQtYXV0by1yb3dzOiA3NXB4O1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0ZmxleDogYXV0bztcXG5cXHRnYXA6MXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZmF2b3JpdGUge1xcblxcdHdpZHRoOjEwMCU7XFxuXFx0aGVpZ2h0OjEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDIwNywgMjUwKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5yZW1vdmUtZmF2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNyU7XFxuXFx0cmlnaHQ6NSU7XFxuXFx0Zm9udC1zaXplOiAuOHJlbTtcXG5cXHRwYWRkaW5nOiAxcHggNHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnJlbW92ZS1mYXY6aG92ZXJ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcblxcdGhlaWdodDogMHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcblxcdGdhcDogNHZ3O1xcblxcdHBhZGRpbmc6IDAgMnJlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMnM7XFxufVxcblxcbi5mb3JlY2FzdC1lbGVtZW50IHtcXG5cXHR3aWR0aDogMTIlO1xcblxcdGhlaWdodDogOTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAyMzMsIDIzMywgMC42ODUpO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWhlYWRlciB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaWNvbi1mb3JlY2FzdCB7XFxuXFx0ZmxleC1zaHJpbms6IDE7XFxuXFx0aGVpZ2h0OiA0MCU7XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWRldGFpbC13cmFwcGVyIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3MywgMTczLCAxNzMsIDAuNzMzKTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0d2lkdGg6OTAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuQGtleWZyYW1lcyB0aWNrLXJpZ2h0IHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyNSUpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNSUpO1xcblxcdH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsOEJBQThCO0NBQzlCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQix1Q0FBdUM7Q0FDdkMsVUFBVTtBQUNYOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFNBQVM7Q0FDVCxtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIs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bkIsWUFBWTtDQUNaLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyw0Q0FBNEM7Q0FDNUMsa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQztFQUNDLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMzYsIDkwLCAyMzgsIDAuMzkpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5oZWFkaW5nIHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDh2aDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleDpub25lO1xcbn1cXG5cXG4jdW5pdC10b2dnbGUge1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgMzAsIDk0LCAwLjM5KTtcXG5cXHR3aWR0aDogNXZ3O1xcbn1cXG5cXG4uc2VhcmNoLWFyZWEge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbiNzZWFyY2gtZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogLjVyZW07XFxufVxcblxcbiNzZWFyY2gtZm9ybSBsYWJlbCB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jc2VhcmNoLWljb24ge1xcblxcdGhlaWdodDogMnJlbTtcXG59XFxuXFxuI3NlYXJjaCB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0d2lkdGg6IDI1dnc7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0cGFkZGluZzogLjFyZW0gLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogLjJyZW07XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jc2VhcmNoOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jc2VhcmNoLWJ1dHRvbiB7XFxuXFx0d2lkdGg6IDV2dztcXG59XFxuXFxuLm1haW4td2VhdGhlciB7XFxuXFx0ZmxleDogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxMCU7XFxufVxcblxcbi5kZXRhaWxzLXdyYXBwZXJ7XFxuXFx0aGVpZ2h0OiA0MDBweDtcXG5cXHRhc3BlY3QtcmF0aW86IDEgLyAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdG1hcmdpbi1sZWZ0OiAyMDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMXJlbSA1MHB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxMCU7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubG9jYXRpb24td3JhcHBlciB7XFxuXFx0aGVpZ2h0OjEwMCU7XFxuXFx0d2lkdGg6IDkwJTtcXG59XFxuXFxuLmNpdHktc3RhdGUge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmNvdW50cnkge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRwYWRkaW5nLWxlZnQ6IC41cmVtO1xcbn1cXG5cXG5cXG4udGVtcC13cmFwcGVyIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi53LWljb24tc21hbGwge1xcblxcdGhlaWdodDo0MHB4O1xcblxcdGFzcGVjdC1yYXRpbzogMSAvMTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6MTBweDtcXG5cXHR0b3A6MTBweDtcXG59XFxuXFxuLmxhc3QtdXBkYXRlIHtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jdGVtcGVyYXR1cmUge1xcblxcdGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuI3RpY2tlciB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxuXFx0b3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4udGlja2VyLXRleHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGFuaW1hdGlvbjogdGljay1yaWdodCAxNXMgbGluZWFyIGluZmluaXRlO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50aWNrZXItdGV4dCBsaSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLnRpY2tlci10ZXh0IGxpOmZpcnN0LW9mLXR5cGUge1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuI2Zhdi1pY29uIHtcXG5cXHRwb3NpdGlvbjphYnNvbHV0ZTtcXG5cXHR0b3A6IDMlO1xcblxcdHJpZ2h0OiA1JTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0cGFkZGluZzogLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuI2Zhdi1pY29uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6NDAwcHg7XFxuXFx0d2lkdGg6IDYwMHB4O1xcblxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWNvbnRhaW5lcj5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0cGFkZGluZzogMXJlbSAxcmVtO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZhdi1tZW51IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG5cXHRncmlkLWF1dG8tcm93czogNzVweDtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdGZsZXg6IGF1dG87XFxuXFx0Z2FwOjFyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZhdm9yaXRlIHtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdGhlaWdodDoxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAyMDcsIDI1MCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucmVtb3ZlLWZhdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDclO1xcblxcdHJpZ2h0OjUlO1xcblxcdGZvbnQtc2l6ZTogLjhyZW07XFxuXFx0cGFkZGluZzogMXB4IDRweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5yZW1vdmUtZmF2OmhvdmVye1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG5cXHRoZWlnaHQ6IDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRnYXA6IDR2dztcXG5cXHRwYWRkaW5nOiAwIDJyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDJzO1xcbn1cXG5cXG4uZm9yZWNhc3QtZWxlbWVudCB7XFxuXFx0d2lkdGg6IDEyJTtcXG5cXHRoZWlnaHQ6IDkwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMjMzLCAyMzMsIDAuNjg1KTtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdC1oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmljb24tZm9yZWNhc3Qge1xcblxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdGhlaWdodDogNDAlO1xcblxcdGFzcGVjdC1yYXRpbzogMS8xO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5mb3JlY2FzdC1kZXRhaWwtd3JhcHBlciB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgxNzMsIDE3MywgMTczLCAwLjczMyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdHdpZHRoOjkwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgdGljay1yaWdodCB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjUlKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjUlKTtcXG5cXHR9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqcz1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9MWUzLGU9NmU0LG49MzZlNSxyPVwibWlsbGlzZWNvbmRcIixpPVwic2Vjb25kXCIscz1cIm1pbnV0ZVwiLHU9XCJob3VyXCIsYT1cImRheVwiLG89XCJ3ZWVrXCIsZj1cIm1vbnRoXCIsaD1cInF1YXJ0ZXJcIixjPVwieWVhclwiLGQ9XCJkYXRlXCIsbD1cIkludmFsaWQgRGF0ZVwiLCQ9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbVHRcXHNdKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyx5PS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxNPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIiksb3JkaW5hbDpmdW5jdGlvbih0KXt2YXIgZT1bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXSxuPXQlMTAwO3JldHVyblwiW1wiK3QrKGVbKG4tMjApJTEwXXx8ZVtuXXx8ZVswXSkrXCJdXCJ9fSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sdj17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGYpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksZik7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmYseTpjLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpofVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sZz1cImVuXCIsRD17fTtEW2ddPU07dmFyIHA9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffSxTPWZ1bmN0aW9uIHQoZSxuLHIpe3ZhciBpO2lmKCFlKXJldHVybiBnO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXt2YXIgcz1lLnRvTG93ZXJDYXNlKCk7RFtzXSYmKGk9cyksbiYmKERbc109bixpPXMpO3ZhciB1PWUuc3BsaXQoXCItXCIpO2lmKCFpJiZ1Lmxlbmd0aD4xKXJldHVybiB0KHVbMF0pfWVsc2V7dmFyIGE9ZS5uYW1lO0RbYV09ZSxpPWF9cmV0dXJuIXImJmkmJihnPWkpLGl8fCFyJiZnfSx3PWZ1bmN0aW9uKHQsZSl7aWYocCh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LE89djtPLmw9UyxPLmk9cCxPLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9Uyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoTy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKCQpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gT30sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT1sKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj13KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHcodCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBPLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIU8udShlKXx8ZSxoPU8ucCh0KSxsPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Ty53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LCQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTy53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCx2PVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goaCl7Y2FzZSBjOnJldHVybiByP2woMSwwKTpsKDMxLDExKTtjYXNlIGY6cmV0dXJuIHI/bCgxLE0pOmwoMCxNKzEpO2Nhc2Ugbzp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsRD0oeTxnP3krNzp5KS1nO3JldHVybiBsKHI/bS1EOm0rKDYtRCksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gJCh2K1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuICQoditcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuICQoditcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuICQoditcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1PLnAodCksaD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksbD0obj17fSxuW2FdPWgrXCJEYXRlXCIsbltkXT1oK1wiRGF0ZVwiLG5bZl09aCtcIk1vbnRoXCIsbltjXT1oK1wiRnVsbFllYXJcIixuW3VdPWgrXCJIb3Vyc1wiLG5bc109aCtcIk1pbnV0ZXNcIixuW2ldPWgrXCJTZWNvbmRzXCIsbltyXT1oK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sJD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWZ8fG89PT1jKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFtsXSgkKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlIGwmJnRoaXMuJGRbbF0oJCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW08ucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixoKXt2YXIgZCxsPXRoaXM7cj1OdW1iZXIocik7dmFyICQ9Ty5wKGgpLHk9ZnVuY3Rpb24odCl7dmFyIGU9dyhsKTtyZXR1cm4gTy53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLGwpfTtpZigkPT09ZilyZXR1cm4gdGhpcy5zZXQoZix0aGlzLiRNK3IpO2lmKCQ9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJHkrcik7aWYoJD09PWEpcmV0dXJuIHkoMSk7aWYoJD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbJF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIE8udyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fGw7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Ty56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxmPW4ubW9udGhzLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnNsaWNlKDAscyl9LGM9ZnVuY3Rpb24odCl7cmV0dXJuIE8ucyhzJTEyfHwxMix0LFwiMFwiKX0sZD1uLm1lcmlkaWVtfHxmdW5jdGlvbih0LGUsbil7dmFyIHI9dDwxMj9cIkFNXCI6XCJQTVwiO3JldHVybiBuP3IudG9Mb3dlckNhc2UoKTpyfSwkPXtZWTpTdHJpbmcodGhpcy4keSkuc2xpY2UoLTIpLFlZWVk6dGhpcy4keSxNOmErMSxNTTpPLnMoYSsxLDIsXCIwXCIpLE1NTTpoKG4ubW9udGhzU2hvcnQsYSxmLDMpLE1NTU06aChmLGEpLEQ6dGhpcy4kRCxERDpPLnModGhpcy4kRCwyLFwiMFwiKSxkOlN0cmluZyh0aGlzLiRXKSxkZDpoKG4ud2Vla2RheXNNaW4sdGhpcy4kVyxvLDIpLGRkZDpoKG4ud2Vla2RheXNTaG9ydCx0aGlzLiRXLG8sMyksZGRkZDpvW3RoaXMuJFddLEg6U3RyaW5nKHMpLEhIOk8ucyhzLDIsXCIwXCIpLGg6YygxKSxoaDpjKDIpLGE6ZChzLHUsITApLEE6ZChzLHUsITEpLG06U3RyaW5nKHUpLG1tOk8ucyh1LDIsXCIwXCIpLHM6U3RyaW5nKHRoaXMuJHMpLHNzOk8ucyh0aGlzLiRzLDIsXCIwXCIpLFNTUzpPLnModGhpcy4kbXMsMyxcIjBcIiksWjppfTtyZXR1cm4gci5yZXBsYWNlKHksKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV8fCRbdF18fGkucmVwbGFjZShcIjpcIixcIlwiKX0pKX0sbS51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sbS5kaWZmPWZ1bmN0aW9uKHIsZCxsKXt2YXIgJCx5PU8ucChkKSxNPXcociksbT0oTS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLHY9dGhpcy1NLGc9Ty5tKHRoaXMsTSk7cmV0dXJuIGc9KCQ9e30sJFtjXT1nLzEyLCRbZl09ZywkW2hdPWcvMywkW29dPSh2LW0pLzYwNDhlNSwkW2FdPSh2LW0pLzg2NGU1LCRbdV09di9uLCRbc109di9lLCRbaV09di90LCQpW3ldfHx2LGw/ZzpPLmEoZyl9LG0uZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZihmKS4kRH0sbS4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIERbdGhpcy4kTF19LG0ubG9jYWxlPWZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIG49dGhpcy5jbG9uZSgpLHI9Uyh0LGUsITApO3JldHVybiByJiYobi4kTD1yKSxufSxtLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIE8udyh0aGlzLiRkLHRoaXMpfSxtLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSl9LG0udG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNWYWxpZCgpP3RoaXMudG9JU09TdHJpbmcoKTpudWxsfSxtLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sbS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LE19KCksVD1fLnByb3RvdHlwZTtyZXR1cm4gdy5wcm90b3R5cGU9VCxbW1wiJG1zXCIscl0sW1wiJHNcIixpXSxbXCIkbVwiLHNdLFtcIiRIXCIsdV0sW1wiJFdcIixhXSxbXCIkTVwiLGZdLFtcIiR5XCIsY10sW1wiJERcIixkXV0uZm9yRWFjaCgoZnVuY3Rpb24odCl7VFt0WzFdXT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy4kZyhlLHRbMF0sdFsxXSl9fSkpLHcuZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuJGl8fCh0KGUsXyx3KSx0LiRpPSEwKSx3fSx3LmxvY2FsZT1TLHcuaXNEYXlqcz1wLHcudW5peD1mdW5jdGlvbih0KXtyZXR1cm4gdygxZTMqdCl9LHcuZW49RFtnXSx3LkxzPUQsdy5wPXt9LHd9KSk7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy93aWRnZXRzL2xvYWRlci5jc3MnO1xuaW1wb3J0IGZhdl9pY29uIGZyb20gJy4vaW1hZ2VzL2Zhdi5zdmcnO1xuaW1wb3J0IHNlYXJjaF9pY29uIGZyb20gJy4vaW1hZ2VzL3NlYXJjaC5zdmcnO1xuaW1wb3J0IHsgZmV0Y2hXZWF0aGVyLCBnZXREYWlseUZvcmVjYXN0LCBnZXRIb3VybHlGb3JlY2FzdCwgc2hvd0ZvcmVjYXN0LCBzd2l0Y2hVbml0cyB9IGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyJztcbmltcG9ydCB7IGNsZWFyRm9yZWNhc3RDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY2xlYW5VcCc7XG5pbXBvcnQgeyBwb3B1bGF0ZUZhdm9yaXRlcywgc2V0TmV3RmF2b3JpdGUgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lkZ2V0cy9mYXZNYW5hZ2VyJztcblxubGV0IGRhaWx5X2ZvcmVjYXN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXdlZWtseScpO1xubGV0IGhvdXJseV9mb3JlY2FzdF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1ob3VybHknKTtcblxuZnVuY3Rpb24gcHJlcEZvckZldGNoKCkge1xuICAgIGxldCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcbiAgICBpZihxdWVyeS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcXVlcnkuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIGxvY2F0aW9uLicpO1xuICAgICAgICBxdWVyeS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfWVsc2Uge1xuICAgICAgICBxdWVyeS5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgfVxuICAgIGZldGNoV2VhdGhlcihlbmNvZGVVUklDb21wb25lbnQocXVlcnkudmFsdWUpKTtcbiAgICByZXR1cm47XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50ID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF2LWljb24nKS5zcmMgPSBmYXZfaWNvbjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWljb24nKS5zcmMgPSBzZWFyY2hfaWNvbjtcbiAgICBwb3B1bGF0ZUZhdm9yaXRlcygpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50JykpIHtcbiAgICAgICAgZmV0Y2hXZWF0aGVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50JykpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZldGNoV2VhdGhlcignSmVyc2V5K0NpdHknKTtcbn0pKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXQtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hVbml0cyk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwcmVwRm9yRmV0Y2goKTtcbn0pKTtcblxuZGFpbHlfZm9yZWNhc3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICBkYWlseV9mb3JlY2FzdF9idG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGlmKGhvdXJseV9mb3JlY2FzdF9idG4uZGlzYWJsZWQpIHtcbiAgICAgICAgaG91cmx5X2ZvcmVjYXN0X2J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNob3dGb3JlY2FzdChldmVudCk7XG4gICAgcmV0dXJuO1xufSk7XG5cbmhvdXJseV9mb3JlY2FzdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBob3VybHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBpZihkYWlseV9mb3JlY2FzdF9idG4uZGlzYWJsZWQpIHtcbiAgICAgICAgZGFpbHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2hvd0ZvcmVjYXN0KGV2ZW50KTtcbiAgICByZXR1cm47XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zhdi1pY29uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBzZXROZXdGYXZvcml0ZSgpO1xufSlcbiJdLCJuYW1lcyI6WyJkYXlqcyIsIm1ha2VEYWlseUZvcmVjYXN0RWxlbWVudCIsImQiLCJmb3JlY2FzdF9lbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRlIiwiYXBwZW5kQ2hpbGQiLCJzZXRGb3JlY2FzdEhlYWRlciIsImZvcm1hdCIsImFwcGVuZCIsInNldENvbmRpdGlvbkltYWdlIiwiZGF5IiwiY29uZGl0aW9uIiwiaWNvbiIsInNldFRlbXBlcmF0dXJlRGV0YWlsIiwiTWF0aCIsInJvdW5kIiwibWludGVtcF9mIiwibWF4dGVtcF9mIiwibWludGVtcF9jIiwibWF4dGVtcF9jIiwibWFrZUhvdXJseUZvcmVjYXN0RWxlbWVudCIsInQiLCJob3VyIiwidGltZSIsInRlbXBfZiIsInRlbXBfYyIsImNvbXB1dGVIb3VycyIsImN1cnJlbnRfZGF0ZXRpbWUiLCJjdXJyZW50IiwibGFzdF91cGRhdGVkIiwic3RhcnQiLCJOdW1iZXIiLCJkYXlfaW5keCIsImhvdXJfYXJyIiwibGltaXQiLCJwdXNoIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImgiLCJoZWFkZXIiLCJ0ZXh0Q29udGVudCIsImkiLCJjb25kX2ltZyIsInNyYyIsImYiLCJjIiwidGVtcF93cmFwcGVyIiwiZGV0YWlsc19mIiwiZGV0YWlsc19jIiwiY2xlYXJGb3JlY2FzdENvbnRhaW5lciIsImZvcmVjYXN0X2NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwic2V0Q3VycmVudExvY2FsIiwicSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZXRMb2NhdGlvbiIsInMiLCJjb3VudHJ5Iiwic2V0VGVtcCIsInRlbXBfZWxlIiwic2V0RGF0ZSIsInNldFRpY2tlclRleHQiLCJkYXRhIiwidWwiLCJzZXRDb25kaXRpb24iLCJ0ZXh0Iiwic2V0UmVhbEZlZWwiLCJmZWVsc2xpa2VfZiIsInNldEh1bWlkaXR5IiwiaHVtaWRpdHkiLCJzZXRXaW5kU3BlZWQiLCJ3aW5kX2twaCIsImxpIiwidyIsImlkIiwicGxhY2Vob2xkZXIiLCJkaXNwbGF5TG9hZGVyIiwicmVtb3ZlTG9hZGVyIiwiYmFja2dyb3VuZFN3aXRjaCIsInJlcXVlc3QiLCJyZXFfZXh0cmEiLCJkYWlseV9mb3JlY2FzdCIsImhvdXJseV9mb3JlY2FzdCIsImZhaHJlbmhlaXQiLCJmZXRjaFdlYXRoZXIiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInNldFdlYXRoZXIiLCJjb2RlIiwiZ2V0RGFpbHlGb3JlY2FzdCIsImdldEhvdXJseUZvcmVjYXN0Iiwic2hvd0ZvcmVjYXN0IiwicXVlcnkiLCJzZXRDdXN0b21WYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwibG9jYXRpb24iLCJuYW1lIiwicmVnaW9uIiwidGlja2VyIiwiZm9yZWNhc3Rfc2VjdGlvbiIsImZvckVhY2giLCJob3VycyIsInRpY2siLCJob3VybHkiLCJ3ZWVrbHkiLCJkaXNhYmxlZCIsInN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJlbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJzd2l0Y2hVbml0cyIsImZlZWxfZWxlIiwiZmVlbHNsaWtlX2MiLCJjYyIsImJnIiwiYmFja2dyb3VuZENvbG9yIiwiZmF2b3JpdGVzIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsInNldE5ld0Zhdm9yaXRlIiwiaW5jbHVkZXMiLCJhbGVydCIsInN0cmluZ2lmeSIsIm5ld19lbGUiLCJuZXdGYXZFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZhdkNsaWNrSGFuZGxlciIsInBvcHVsYXRlRmF2b3JpdGVzIiwiZmF2X21lbnUiLCJmYXYiLCJmYXZfZWxlIiwiZmF2X2RpdiIsImNsb3NlIiwicmVtb3ZlRmF2RXZlbnRIYW5kbGVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInBhcmVudCIsInRhcmdldCIsInBhcmVudE5vZGUiLCJmYXZfaW5keCIsImluZGV4T2YiLCJzbGljZSIsInNwbGljZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaW1tZXIiLCJzcGlubmVyIiwiZmF2X2ljb24iLCJzZWFyY2hfaWNvbiIsImRhaWx5X2ZvcmVjYXN0X2J0biIsImhvdXJseV9mb3JlY2FzdF9idG4iLCJwcmVwRm9yRmV0Y2giLCJ2YWx1ZSIsIndpbmRvdyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9