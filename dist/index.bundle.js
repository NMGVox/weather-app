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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/futur.ttf */ "./src/fonts/futur.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mountains.jpg */ "./src/images/mountains.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'futura';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 12%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n:root {\n\t--main-gradient: linear-gradient(180deg, rgba(17, 1, 43, 0.842) 37%, rgba(0, 16, 59, 0.842) 99%);\n\t--svg-filter: invert(99%) sepia(3%) saturate(1%) hue-rotate(117deg) brightness(119%) contrast(100%);\n\t--main-font-color: #f5f3ff;\n\t--secondary-color: #0100031c;\n\t--tertiary-color: #1e073794;\n\t--button-color: #1E0737;\n\t--button-disabled: linear-gradient(94deg, rgba(0,0,0,1) 15%, rgba(66,66,66,1) 89%);\n\t--button-disabled-text: black;\n\t--button-gradient: linear-gradient(133deg, rgba(23,2,51,1) 15%, rgba(68,46,101,1) 89%);\n\n\t--fs-reg: clamp(.6rem, .8vw, 1rem);\n\t--fs-fore: clamp(.5rem, 1vw, 1rem);\n\t--fs-big: clamp(.8rem, 1vw, 1.5rem);\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-size: cover;\n\ttransition: flex 2s;\n\tbackground: var(--main-gradient), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\tbackground-size: cover;\n\tfont-family: 'futura', Arial, Helvetica, sans-serif;\n}\n\nbutton {\n\tborder:none;\n\tborder-radius: 8px;\n\theight: 2rem;\n\tbackground: var(--button-gradient);\n\tcolor: var(--main-font-color);\n}\n\nbutton:hover {\n\tcursor: pointer;\n}\n\nbutton:disabled:hover {\n\tcursor: default;\n}\n\nbutton:disabled {\n\tbackground: var(--button-disabled);\n\tcolor: rgb(150, 150, 150);\n}\n\n.heading {\n\tdisplay:flex;\n\talign-items: center;\n\theight: 8vh;\n\tjustify-content: space-between;\n\tflex:none;\n}\n\n#unit-toggle {\n\tmargin-left: 1rem;\n\tpadding: 0rem;\n\tfont-size: clamp(.7rem, 1.1rem, 1vw);\n\tfont-weight: bold;\n\twidth: clamp(100px, 150px, 10vw);\n}\n\n.search-area {\n\tdisplay:flex;\n\talign-items: center;\n\tmargin-right: 1rem;\n}\n\n#search-form {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tposition:relative;\n}\n\n#search-form label {\n\tvertical-align: baseline;\n\tfont-size: 1.5rem;\n}\n\n#search-icon {\n\theight: 2rem;\n\tfilter: var(--svg-filter);\n}\n\n#search {\n\theight: 1.5rem;\n\twidth: 25vw;\n\tfont-size: var(--fs-reg);\n\tpadding: .1rem .5rem;\n\tborder-radius: .2rem;\n\tborder-style: none;\n\tborder-bottom: 2px solid rgba(0, 0, 0, 0.445);\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n\tcolor: var(--main-font-color);\n}\n\n#search::placeholder {\n\tcolor:var(--main-font-color);\n}\n\n#search:focus {\n\toutline: none;\n}\n\n#search-button {\n\twidth: 5vw;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n}\n\n#error {\n\tcolor: red;\n\tposition: absolute;\n\tleft: 10%;\n\ttop: 90%;\n\tfont-size: .8rem;\n}\n\n#mobile-faves {\n\theight: 2rem;\n\taspect-ratio: 1/1;\n\tdisplay:none;\n}\n\n.main-weather {\n\tflex: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 15%;\n}\n\n.details-wrapper{\n\theight: 300px;\n\twidth: 400px;\n\tbackground-color: rgba(207, 230, 250, 0);\n\tposition:relative;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tpadding: 1rem 50px;\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr 10%;\n\tgap: .5rem;\n}\n\n.location-wrapper {\n\theight:100%;\n\twidth: 80%;\n\tbackground-color: rgba(218, 218, 218, 0);\n\tpadding: 4px;\n\tborder-radius: 1rem;\n\tcolor:var(--main-font-color);\n}\n\n.city-state {\n\tfont-size: var(--fs-big);\n\tword-wrap: break-word;\n\tfont-weight: 600;\n\tmargin-left: 5%;\n}\n\n.country {\n\tfont-size: var(--fs-reg);\n\tfont-weight: 600;\n\tmargin-top: 4px;\n\tmargin-left: 5%;\n}\n\n\n.temp-wrapper {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 1rem;\n\tbackground-color: #9e788f00;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tposition:relative;\n\tbox-sizing: border-box;\n\tpadding: 1rem;\n\tcolor:var(--main-font-color);\n}\n\n.w-icon-small {\n\twidth:40px;\n\taspect-ratio: 1 /1;\n\tposition: absolute;\n\tright:10px;\n\ttop:10px;\n}\n\n.last-update {\n\tpadding: 1rem 0;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\ttext-decoration: underline;\n\tfont-size: var(--fs-reg);\n}\n\n#temperature {\n\tfont-size: clamp(2rem, 4rem, 4vw );\n}\n\n#ticker {\n    height: 1.5rem;\n    width: 100%;\n    border-radius: 4px;\n\toverflow-x: hidden;\n\toverflow-y: hidden;\n\tcolor:var(--main-font-color);\n}\n\n.ticker-text {\n\tdisplay: flex;\n\tgap: 1rem;\n\talign-items: center;\n\theight: 100%;\n\tanimation: tick-right 15s linear infinite;\n\twhite-space: nowrap;\n\tfont-size: var(--fs-reg);\n}\n\n.ticker-text li {\n\twidth: 100%;\n\tpadding-right: 1rem;\n\tborder-right: 1px solid var(--main-font-color);\n}\n\n\n.ticker-text li:first-of-type {\n\tpadding-left: 1rem;\n\tborder-left: 1px solid var(--main-font-color);\n}\n\n.button-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n#fav-icon {\n\tposition:absolute;\n\ttop: 5%;\n\tright: 85%;\n\theight: clamp(1rem, 2vw, 5rem);\n\taspect-ratio: 1/1;\n\tfilter: var(--svg-filter);\n}\n\n#fav-icon:hover {\n\tcursor: pointer;\n}\n\n.favorites-container {\n\theight:400px;\n\twidth: 600px;\n\tflex-shrink: 1;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: var(--main-font-color);\n\tbackground-color: var(--secondary-color);\n\tborder: 2px solid var(--secondary-color);\n}\n\n.favorites-container>h1 {\n\tfont-size: clamp(1.5rem, 1.5vw, 2.5rem );\n\tpadding: 1rem 1rem;\n\tborder-bottom: 1px solid black;\n}\n\n.fav-menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-auto-rows: 75px;\n\toverflow-y: auto;\n\tflex: auto;\n\tgap:1rem;\n\tpadding: 1rem;\n}\n\n.favorite {\n\twidth:100%;\n\theight:100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: var(--tertiary-color);\n\tborder-radius: 1rem;\n\ttext-align: center;\n\tposition: relative;\n\tuser-select: none;\n\tpadding: 0 .5rem;\n\tbox-sizing: border-box;\n\toverflow-y: hidden;\n\ttext-overflow: ellipsis;\n\ttransition: transform .5s ease-in;\n\tfont-size: var(--fs-reg);\n}\n\n.favorite:hover {\n\ttransform: scale(110%);\n}\n\n.remove-fav {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 7%;\n\tright:5%;\n\tfont-size: .9rem;\n\tpadding: 1px 4px;\n\tcolor: grey;\n}\n\n.remove-fav:hover{\n\tcursor: pointer;\n}\n\n.forecast {\n\theight: 0vh;\n\tdisplay: flex;\n\talign-items: center;\n\toverflow-x: auto;\n\tgap: 4vw;\n\tpadding: 0 2rem;\n\ttransition: all 2s;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n}\n\n.forecast-element {\n\twidth: 12%;\n\theight: 80%;\n\tbackground-color: #71677c41;\n\tcolor: var(--main-font-color);\n\tflex-shrink: 0;\n\tborder-radius: 1rem;\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.forecast-header {\n\tfont-size: var(--fs-fore);\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\n.icon-forecast {\n\tflex-shrink: 1;\n\theight: 40%;\n\taspect-ratio: 1/1;\n\tborder-radius: 1rem;\n}\n\n.forecast-detail-wrapper {\n\tborder-radius: 4px;\n\twidth:90%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: var(--fs-reg);\n\tfont-weight: bold;\n}\n\n.mobile-hour-forecast {\n\tmin-height: 200px;\n\tbackground-color: rgba(185, 220, 252, 0.623);\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 90%;\n\toverflow-x: auto;\n}\n\n@keyframes tick-right {\n\t0% {\n\t\ttransform: translateX(125%);\n\t}\n\t100% {\n\t\ttransform: translateX(-275%);\n\t}\n}\n\n@media screen and (max-width: 1280px) {\n\t.main-weather {\n\t\tgap: 5%;\n\t}\n\t.details-wrapper {\n\t\theight:250px;\n\t\tgrid-template-rows: auto 40% 10%;\n\t}\n\t.w-icon-small {\n\t\tright:30%;\n\t\ttop:1%;\n\t}\n\t.favorites-container {\n\t\tmargin-right: 4rem;\n\t\theight: 50vh;\n\t}\n\t.forecast-element {\n\t\twidth: 150px;\n\t\tpadding: 0 1rem;\n\t}\n\t#search-button {\n\t\twidth: 100px;\n\t}\n\t#search {\n\t\tfont-size: 1rem;\n\t}\n\t.fav-menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n\t\tgrid-auto-rows: 50px;\n\t}\n\n\t/* .favorite {\n\t\tfont-size: .7rem;\n\t} */\n\n\t.remove-fav {\n\t\ttop: 5%;\n\t\tright: 3%;\n\t\tfont-size: .7rem;\n\t}\n\n\t#unit-toggle {\n\t\tfont-size: .7rem;\n\t\theight: 1.2rem;\n\t}\n\n\t.forecast-element {\n\t\theight: 75%;\n\t\twidth:auto;\n\t\taspect-ratio: 1 / 1;\n\t}\n\t\n\t.icon-forecast {\n\t\tflex-shrink: 1;\n\t\theight: 30%;\n\t\taspect-ratio: 1/1;\n\t\tborder-radius: 1rem;\n\t}\n}\n\n@media only screen and (max-width: 600px) {\n\tbody{\n\t\tbackground-attachment: fixed;\n\t}\n\n\t#search-icon {\n\t\theight:1.2rem;\n\t}\n\n\t#search {\n\t\twidth: 125px;\n\t\tfont-size: .8rem;;\n\t}\n\n\t#search-button {\n\t\twidth: 75px;\n\t\theight:1.5rem;\n\t}\n\n\t.main-weather {\n\t\tflex-direction: column;\n\t\tgap: 0;\n\t\tflex:content;\n\t\talign-content: flex-start;\n\t}\n\n\t.details-wrapper {\n\t\tgrid-template-rows: auto 1fr auto auto;\n\t\theight: auto;\n\t\twidth:90%;\n\t}\n\n\t.city-state {\n\t\tfont-size: 1rem;\n\t}\n\n\t#temperature {\n\t\tfont-size: 3rem;\n\t}\n\n\t.last-update {\n\t\tfont-size: .8rem;\n\t}\n\n\t.w-icon-small {\n\t\twidth: 15%;\n\t}\n\n\t.favorites-container {\n\t\twidth:0px;\n\t\theight: 0px;\n\t\toverflow-x:hidden;\n\t\ttransition: all 1s;\n\t\tborder-radius: 0;\n\t\tborder:none;\n\t\tbackground-color: #010003ea;\n\t}\n\n\t.favorites-container h1 {\n\t\tfont-size: 1rem;\n\t}\n\n\t#ticker {\n\t\theight:100%;\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.ticker-text {\n\t\tflex-direction: column;\n\t\tanimation: none;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twhite-space: normal;\n\t\tgap:0;\n\t}\n\n\t.ticker-text li {\n\t\tborder-top: 1px solid black;\n\t\tpadding-right: 0;\n\t\tpadding-top: .4rem;\n\t\tpadding-bottom: .4rem;\n\t\tborder-right: none;\n\t\theight: 1.5rem;\n\t\tdisplay:flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 1rem;\n\t}\n\n\t.ticker-text li:first-of-type {\n\t\tpadding-left: 0%;\n\t\tborder-left: none;\n\t\tborder-top: none;\n\t}\n\n\t#show-weekly,\n\t#show-hourly {\n\t\tfont-size: .7rem;\n\t}\n\n\t.forecast {\n\t\theight: 0px;\n\t\twidth: 80%;\n\t\ttransition: all 2s;\n\t\tflex-direction: column;\n\t}\n\n\t.forecast-element {\n\t\tflex-direction: row;\n\t\twidth: 90%;\n\t\theight: 35%;\n\t}\n\n\t.icon-forecast {\n\t\theight: 3rem;\n\t}\n\n\t.forecast-header {\n\t\tfont-size: 1rem;\n\t}\n\n\t.forecast-detail-wrapper {\n\t\twidth: 40%;\n\t}\n\n\t#error \t{\n\t\ttop: 110%;\n\t\tfont-size: .7rem;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: 'futura';\n\tsrc: url('./fonts/futur.ttf');\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 12%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n:root {\n\t--main-gradient: linear-gradient(180deg, rgba(17, 1, 43, 0.842) 37%, rgba(0, 16, 59, 0.842) 99%);\n\t--svg-filter: invert(99%) sepia(3%) saturate(1%) hue-rotate(117deg) brightness(119%) contrast(100%);\n\t--main-font-color: #f5f3ff;\n\t--secondary-color: #0100031c;\n\t--tertiary-color: #1e073794;\n\t--button-color: #1E0737;\n\t--button-disabled: linear-gradient(94deg, rgba(0,0,0,1) 15%, rgba(66,66,66,1) 89%);\n\t--button-disabled-text: black;\n\t--button-gradient: linear-gradient(133deg, rgba(23,2,51,1) 15%, rgba(68,46,101,1) 89%);\n\n\t--fs-reg: clamp(.6rem, .8vw, 1rem);\n\t--fs-fore: clamp(.5rem, 1vw, 1rem);\n\t--fs-big: clamp(.8rem, 1vw, 1.5rem);\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-size: cover;\n\ttransition: flex 2s;\n\tbackground: var(--main-gradient), url(./images/mountains.jpg);\n\tbackground-size: cover;\n\tfont-family: 'futura', Arial, Helvetica, sans-serif;\n}\n\nbutton {\n\tborder:none;\n\tborder-radius: 8px;\n\theight: 2rem;\n\tbackground: var(--button-gradient);\n\tcolor: var(--main-font-color);\n}\n\nbutton:hover {\n\tcursor: pointer;\n}\n\nbutton:disabled:hover {\n\tcursor: default;\n}\n\nbutton:disabled {\n\tbackground: var(--button-disabled);\n\tcolor: rgb(150, 150, 150);\n}\n\n.heading {\n\tdisplay:flex;\n\talign-items: center;\n\theight: 8vh;\n\tjustify-content: space-between;\n\tflex:none;\n}\n\n#unit-toggle {\n\tmargin-left: 1rem;\n\tpadding: 0rem;\n\tfont-size: clamp(.7rem, 1.1rem, 1vw);\n\tfont-weight: bold;\n\twidth: clamp(100px, 150px, 10vw);\n}\n\n.search-area {\n\tdisplay:flex;\n\talign-items: center;\n\tmargin-right: 1rem;\n}\n\n#search-form {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tposition:relative;\n}\n\n#search-form label {\n\tvertical-align: baseline;\n\tfont-size: 1.5rem;\n}\n\n#search-icon {\n\theight: 2rem;\n\tfilter: var(--svg-filter);\n}\n\n#search {\n\theight: 1.5rem;\n\twidth: 25vw;\n\tfont-size: var(--fs-reg);\n\tpadding: .1rem .5rem;\n\tborder-radius: .2rem;\n\tborder-style: none;\n\tborder-bottom: 2px solid rgba(0, 0, 0, 0.445);\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n\tcolor: var(--main-font-color);\n}\n\n#search::placeholder {\n\tcolor:var(--main-font-color);\n}\n\n#search:focus {\n\toutline: none;\n}\n\n#search-button {\n\twidth: 5vw;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n}\n\n#error {\n\tcolor: red;\n\tposition: absolute;\n\tleft: 10%;\n\ttop: 90%;\n\tfont-size: .8rem;\n}\n\n#mobile-faves {\n\theight: 2rem;\n\taspect-ratio: 1/1;\n\tdisplay:none;\n}\n\n.main-weather {\n\tflex: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 15%;\n}\n\n.details-wrapper{\n\theight: 300px;\n\twidth: 400px;\n\tbackground-color: rgba(207, 230, 250, 0);\n\tposition:relative;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tpadding: 1rem 50px;\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr 10%;\n\tgap: .5rem;\n}\n\n.location-wrapper {\n\theight:100%;\n\twidth: 80%;\n\tbackground-color: rgba(218, 218, 218, 0);\n\tpadding: 4px;\n\tborder-radius: 1rem;\n\tcolor:var(--main-font-color);\n}\n\n.city-state {\n\tfont-size: var(--fs-big);\n\tword-wrap: break-word;\n\tfont-weight: 600;\n\tmargin-left: 5%;\n}\n\n.country {\n\tfont-size: var(--fs-reg);\n\tfont-weight: 600;\n\tmargin-top: 4px;\n\tmargin-left: 5%;\n}\n\n\n.temp-wrapper {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 1rem;\n\tbackground-color: #9e788f00;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tposition:relative;\n\tbox-sizing: border-box;\n\tpadding: 1rem;\n\tcolor:var(--main-font-color);\n}\n\n.w-icon-small {\n\twidth:40px;\n\taspect-ratio: 1 /1;\n\tposition: absolute;\n\tright:10px;\n\ttop:10px;\n}\n\n.last-update {\n\tpadding: 1rem 0;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\ttext-decoration: underline;\n\tfont-size: var(--fs-reg);\n}\n\n#temperature {\n\tfont-size: clamp(2rem, 4rem, 4vw );\n}\n\n#ticker {\n    height: 1.5rem;\n    width: 100%;\n    border-radius: 4px;\n\toverflow-x: hidden;\n\toverflow-y: hidden;\n\tcolor:var(--main-font-color);\n}\n\n.ticker-text {\n\tdisplay: flex;\n\tgap: 1rem;\n\talign-items: center;\n\theight: 100%;\n\tanimation: tick-right 15s linear infinite;\n\twhite-space: nowrap;\n\tfont-size: var(--fs-reg);\n}\n\n.ticker-text li {\n\twidth: 100%;\n\tpadding-right: 1rem;\n\tborder-right: 1px solid var(--main-font-color);\n}\n\n\n.ticker-text li:first-of-type {\n\tpadding-left: 1rem;\n\tborder-left: 1px solid var(--main-font-color);\n}\n\n.button-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n#fav-icon {\n\tposition:absolute;\n\ttop: 5%;\n\tright: 85%;\n\theight: clamp(1rem, 2vw, 5rem);\n\taspect-ratio: 1/1;\n\tfilter: var(--svg-filter);\n}\n\n#fav-icon:hover {\n\tcursor: pointer;\n}\n\n.favorites-container {\n\theight:400px;\n\twidth: 600px;\n\tflex-shrink: 1;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: var(--main-font-color);\n\tbackground-color: var(--secondary-color);\n\tborder: 2px solid var(--secondary-color);\n}\n\n.favorites-container>h1 {\n\tfont-size: clamp(1.5rem, 1.5vw, 2.5rem );\n\tpadding: 1rem 1rem;\n\tborder-bottom: 1px solid black;\n}\n\n.fav-menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-auto-rows: 75px;\n\toverflow-y: auto;\n\tflex: auto;\n\tgap:1rem;\n\tpadding: 1rem;\n}\n\n.favorite {\n\twidth:100%;\n\theight:100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: var(--tertiary-color);\n\tborder-radius: 1rem;\n\ttext-align: center;\n\tposition: relative;\n\tuser-select: none;\n\tpadding: 0 .5rem;\n\tbox-sizing: border-box;\n\toverflow-y: hidden;\n\ttext-overflow: ellipsis;\n\ttransition: transform .5s ease-in;\n\tfont-size: var(--fs-reg);\n}\n\n.favorite:hover {\n\ttransform: scale(110%);\n}\n\n.remove-fav {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 7%;\n\tright:5%;\n\tfont-size: .9rem;\n\tpadding: 1px 4px;\n\tcolor: grey;\n}\n\n.remove-fav:hover{\n\tcursor: pointer;\n}\n\n.forecast {\n\theight: 0vh;\n\tdisplay: flex;\n\talign-items: center;\n\toverflow-x: auto;\n\tgap: 4vw;\n\tpadding: 0 2rem;\n\ttransition: all 2s;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n}\n\n.forecast-element {\n\twidth: 12%;\n\theight: 80%;\n\tbackground-color: #71677c41;\n\tcolor: var(--main-font-color);\n\tflex-shrink: 0;\n\tborder-radius: 1rem;\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.forecast-header {\n\tfont-size: var(--fs-fore);\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\n.icon-forecast {\n\tflex-shrink: 1;\n\theight: 40%;\n\taspect-ratio: 1/1;\n\tborder-radius: 1rem;\n}\n\n.forecast-detail-wrapper {\n\tborder-radius: 4px;\n\twidth:90%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: var(--fs-reg);\n\tfont-weight: bold;\n}\n\n.mobile-hour-forecast {\n\tmin-height: 200px;\n\tbackground-color: rgba(185, 220, 252, 0.623);\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 90%;\n\toverflow-x: auto;\n}\n\n@keyframes tick-right {\n\t0% {\n\t\ttransform: translateX(125%);\n\t}\n\t100% {\n\t\ttransform: translateX(-275%);\n\t}\n}\n\n@media screen and (max-width: 1280px) {\n\t.main-weather {\n\t\tgap: 5%;\n\t}\n\t.details-wrapper {\n\t\theight:250px;\n\t\tgrid-template-rows: auto 40% 10%;\n\t}\n\t.w-icon-small {\n\t\tright:30%;\n\t\ttop:1%;\n\t}\n\t.favorites-container {\n\t\tmargin-right: 4rem;\n\t\theight: 50vh;\n\t}\n\t.forecast-element {\n\t\twidth: 150px;\n\t\tpadding: 0 1rem;\n\t}\n\t#search-button {\n\t\twidth: 100px;\n\t}\n\t#search {\n\t\tfont-size: 1rem;\n\t}\n\t.fav-menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n\t\tgrid-auto-rows: 50px;\n\t}\n\n\t/* .favorite {\n\t\tfont-size: .7rem;\n\t} */\n\n\t.remove-fav {\n\t\ttop: 5%;\n\t\tright: 3%;\n\t\tfont-size: .7rem;\n\t}\n\n\t#unit-toggle {\n\t\tfont-size: .7rem;\n\t\theight: 1.2rem;\n\t}\n\n\t.forecast-element {\n\t\theight: 75%;\n\t\twidth:auto;\n\t\taspect-ratio: 1 / 1;\n\t}\n\t\n\t.icon-forecast {\n\t\tflex-shrink: 1;\n\t\theight: 30%;\n\t\taspect-ratio: 1/1;\n\t\tborder-radius: 1rem;\n\t}\n}\n\n@media only screen and (max-width: 600px) {\n\tbody{\n\t\tbackground-attachment: fixed;\n\t}\n\n\t#search-icon {\n\t\theight:1.2rem;\n\t}\n\n\t#search {\n\t\twidth: 125px;\n\t\tfont-size: .8rem;;\n\t}\n\n\t#search-button {\n\t\twidth: 75px;\n\t\theight:1.5rem;\n\t}\n\n\t.main-weather {\n\t\tflex-direction: column;\n\t\tgap: 0;\n\t\tflex:content;\n\t\talign-content: flex-start;\n\t}\n\n\t.details-wrapper {\n\t\tgrid-template-rows: auto 1fr auto auto;\n\t\theight: auto;\n\t\twidth:90%;\n\t}\n\n\t.city-state {\n\t\tfont-size: 1rem;\n\t}\n\n\t#temperature {\n\t\tfont-size: 3rem;\n\t}\n\n\t.last-update {\n\t\tfont-size: .8rem;\n\t}\n\n\t.w-icon-small {\n\t\twidth: 15%;\n\t}\n\n\t.favorites-container {\n\t\twidth:0px;\n\t\theight: 0px;\n\t\toverflow-x:hidden;\n\t\ttransition: all 1s;\n\t\tborder-radius: 0;\n\t\tborder:none;\n\t\tbackground-color: #010003ea;\n\t}\n\n\t.favorites-container h1 {\n\t\tfont-size: 1rem;\n\t}\n\n\t#ticker {\n\t\theight:100%;\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.ticker-text {\n\t\tflex-direction: column;\n\t\tanimation: none;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twhite-space: normal;\n\t\tgap:0;\n\t}\n\n\t.ticker-text li {\n\t\tborder-top: 1px solid black;\n\t\tpadding-right: 0;\n\t\tpadding-top: .4rem;\n\t\tpadding-bottom: .4rem;\n\t\tborder-right: none;\n\t\theight: 1.5rem;\n\t\tdisplay:flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 1rem;\n\t}\n\n\t.ticker-text li:first-of-type {\n\t\tpadding-left: 0%;\n\t\tborder-left: none;\n\t\tborder-top: none;\n\t}\n\n\t#show-weekly,\n\t#show-hourly {\n\t\tfont-size: .7rem;\n\t}\n\n\t.forecast {\n\t\theight: 0px;\n\t\twidth: 80%;\n\t\ttransition: all 2s;\n\t\tflex-direction: column;\n\t}\n\n\t.forecast-element {\n\t\tflex-direction: row;\n\t\twidth: 90%;\n\t\theight: 35%;\n\t}\n\n\t.icon-forecast {\n\t\theight: 3rem;\n\t}\n\n\t.forecast-header {\n\t\tfont-size: 1rem;\n\t}\n\n\t.forecast-detail-wrapper {\n\t\twidth: 40%;\n\t}\n\n\t#error \t{\n\t\ttop: 110%;\n\t\tfont-size: .7rem;\n\t}\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFL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RUFYLGlFQUFZLENBQUM2RixLQUFLLENBQUM7RUFDbkI7QUFDSixDQUFDLENBQUM7QUFFRmhNLFFBQVEsQ0FBQ21ELGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQzRGLGdCQUFnQixDQUFDLGFBQWEsRUFBR2lELEtBQUssSUFBSztFQUMzRXhELDhFQUFjLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFFRnhJLFFBQVEsQ0FBQ21ELGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQzRGLGdCQUFnQixDQUFDLGFBQWEsRUFBR2lELEtBQUssSUFBSztFQUMvRSxJQUFJbEIsYUFBYSxHQUFHOUssUUFBUSxDQUFDbUQsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0VBQ2xFLElBQUksQ0FBQ3lJLGNBQWMsRUFBRTtJQUNqQmQsYUFBYSxDQUFDL0QsS0FBSyxDQUFDUSxNQUFNLEdBQUcsTUFBTTtJQUNuQ3FFLGNBQWMsR0FBRyxJQUFJO0lBQ3JCO0VBQ0o7RUFFQWQsYUFBYSxDQUFDL0QsS0FBSyxDQUFDUSxNQUFNLEdBQUcsR0FBRztFQUNoQ3FFLGNBQWMsR0FBRyxLQUFLO0VBQ3RCO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvY2xlYW5VcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2xvY2FsSGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NldFdlYXRoZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9iYWNrZ3JvdW5kQ29udHJvbC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvZmF2TWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvbG9hZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvd2luU2l6ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvbG9hZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvbG9hZGVyLmNzcz85NWNiIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmZ1bmN0aW9uIG1ha2VEYWlseUZvcmVjYXN0RWxlbWVudChkKSB7XG4gICAgLy9HaXZlbiBkYXksIHJldHVybiBkaXYgY29udGFpbmluZyB3ZWF0aGVyIGluZm8gZm9yIHRoZSBkYXkgb2YgdGhlIHdlZWtcbiAgICBsZXQgZm9yZWNhc3RfZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vXG4gICAgZm9yZWNhc3RfZWxlLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWVsZW1lbnQnKTsgLy9cbiAgICBcbiAgICBsZXQgZGF0ZSA9IGRheWpzKGQuZGF0ZSwgJ1lZWVktTU1NTS1EJyk7IC8vXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZENoaWxkKHNldEZvcmVjYXN0SGVhZGVyKGRhdGUuZm9ybWF0KCdkZGRkJykpKTtcblxuICAgIGZvcmVjYXN0X2VsZS5hcHBlbmQoc2V0Q29uZGl0aW9uSW1hZ2UoZC5kYXkuY29uZGl0aW9uLmljb24pKTtcblxuICAgIGZvcmVjYXN0X2VsZS5hcHBlbmQoc2V0VGVtcGVyYXR1cmVEZXRhaWwoYCR7TWF0aC5yb3VuZChkLmRheS5taW50ZW1wX2YpfcKwRiAvICR7TWF0aC5yb3VuZChkLmRheS5tYXh0ZW1wX2YpfcKwRmAsXG4gICAgIGAke01hdGgucm91bmQoZC5kYXkubWludGVtcF9jKX3CsEMgLyAke01hdGgucm91bmQoZC5kYXkubWF4dGVtcF9jKX3CsENgKSk7XG5cbiAgICByZXR1cm4gZm9yZWNhc3RfZWxlO1xufVxuXG5mdW5jdGlvbiBtYWtlSG91cmx5Rm9yZWNhc3RFbGVtZW50KHQpIHtcbiAgICBsZXQgZm9yZWNhc3RfZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWNhc3RfZWxlLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWVsZW1lbnQnKTtcbiAgICBcbiAgICBsZXQgaG91ciA9IGRheWpzKHQudGltZSwgJ1lZWVktTU1NTS1EJyk7XG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZENoaWxkKHNldEZvcmVjYXN0SGVhZGVyKGhvdXIuZm9ybWF0KCdkZGRkLCBoOm1tIEEnKSkpO1xuXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZENoaWxkKHNldENvbmRpdGlvbkltYWdlKHQuY29uZGl0aW9uLmljb24pKTtcblxuICAgIGZvcmVjYXN0X2VsZS5hcHBlbmRDaGlsZChzZXRUZW1wZXJhdHVyZURldGFpbChgJHtNYXRoLnJvdW5kKHQudGVtcF9mKX3CsCBGYCwgXG4gICAgICAgIGAke01hdGgucm91bmQodC50ZW1wX2MpfcKwIENgKSk7XG5cbiAgICByZXR1cm4gZm9yZWNhc3RfZWxlO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlSG91cnMoZCkge1xuICAgIGxldCBjdXJyZW50X2RhdGV0aW1lID0gZC5jdXJyZW50Lmxhc3RfdXBkYXRlZDtcbiAgICBjdXJyZW50X2RhdGV0aW1lID0gZGF5anMoY3VycmVudF9kYXRldGltZSwgJ1lZWVktTU1NTS1EJyk7XG4gICAgXG4gICAgbGV0IHN0YXJ0ID0gTnVtYmVyKGN1cnJlbnRfZGF0ZXRpbWUuZm9ybWF0KCdISCcpKSArIDE7XG4gICAgbGV0IGRheV9pbmR4ID0gMDtcbiAgICBsZXQgaG91cl9hcnIgPSBbXTtcbiAgICBcbiAgICBmb3IobGV0IGxpbWl0ID0gMjQ7IGxpbWl0ID4gMDsgbGltaXQtLSkge1xuICAgICAgICBpZiAoc3RhcnQgPiAyMykge1xuICAgICAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICAgICAgZGF5X2luZHgrKztcbiAgICAgICAgfVxuICAgICAgICBob3VyX2Fyci5wdXNoKGQuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5X2luZHhdLmhvdXJbc3RhcnRdKTtcbiAgICAgICAgc3RhcnQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gaG91cl9hcnI7XG59XG5cbmZ1bmN0aW9uIHNldEZvcmVjYXN0SGVhZGVyKGgpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gaDtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBzZXRDb25kaXRpb25JbWFnZShpKSB7XG4gICAgbGV0IGNvbmRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uZF9pbWcuc3JjID0gaVxuICAgIGNvbmRfaW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24tZm9yZWNhc3QnKTtcbiAgICByZXR1cm4gY29uZF9pbWc7XG59XG5cbmZ1bmN0aW9uIHNldFRlbXBlcmF0dXJlRGV0YWlsKGYsIGMpIHtcbiAgICBsZXQgdGVtcF93cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRlbXBfd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1kZXRhaWwtd3JhcHBlcicpO1xuXG4gICAgbGV0IGRldGFpbHNfZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXRhaWxzX2YuY2xhc3NMaXN0LmFkZCgnZmFocmVuaGVpdCcpO1xuICAgIGRldGFpbHNfZi50ZXh0Q29udGVudCA9IGY7XG5cbiAgICBsZXQgZGV0YWlsc19jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRldGFpbHNfYy5jbGFzc0xpc3QuYWRkKCdjZWxzaXVzJyk7XG4gICAgZGV0YWlsc19jLnRleHRDb250ZW50ID0gYztcblxuICAgIHRlbXBfd3JhcHBlci5hcHBlbmQoZGV0YWlsc19mLCBkZXRhaWxzX2MpO1xuICAgIHJldHVybiB0ZW1wX3dyYXBwZXI7XG59XG5cbmV4cG9ydCB7IG1ha2VEYWlseUZvcmVjYXN0RWxlbWVudCwgbWFrZUhvdXJseUZvcmVjYXN0RWxlbWVudCwgY29tcHV0ZUhvdXJzIH07IiwiZnVuY3Rpb24gY2xlYXJGb3JlY2FzdENvbnRhaW5lcigpIHtcbiAgICBsZXQgZm9yZWNhc3RfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG4gICAgd2hpbGUoZm9yZWNhc3RfY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZm9yZWNhc3RfY29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IHsgY2xlYXJGb3JlY2FzdENvbnRhaW5lciB9OyIsImZ1bmN0aW9uIHNldEN1cnJlbnRMb2NhbChxKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnQnLCBxKTtcbiAgICB9XG4gICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IHsgc2V0Q3VycmVudExvY2FsIH07IiwiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuXG5mdW5jdGlvbiBzZXRMb2NhdGlvbiAoYywgcywgY291bnRyeSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LXN0YXRlJykudGV4dENvbnRlbnQgPSBgJHtjfSwgJHtzfWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cnknKS50ZXh0Q29udGVudCA9IGAke2NvdW50cnl9YDtcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIHNldFRlbXAodCkge1xuICAgIGxldCB0ZW1wX2VsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZScpO1xuICAgIHRlbXBfZWxlLnRleHRDb250ZW50ID0gYCR7dH1gO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gc2V0RGF0ZShkKSB7XG4gICAgbGV0IGRhdGUgPSBkYXlqcyhkLCAnWVlZWS1NTU1NLUQnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFzdC11cGRhdGUnKS50ZXh0Q29udGVudCA9IGBVcGRhdGVkOiAke2RhdGUuZm9ybWF0KCdkZGRkLCBoOm1tIEEnKX1gO1xuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IHsgc2V0TG9jYXRpb24sIHNldFRlbXAsIHNldERhdGUgfTsiLCJmdW5jdGlvbiBzZXRUaWNrZXJUZXh0KGRhdGEpIHtcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsLmFwcGVuZENoaWxkKHNldENvbmRpdGlvbihkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpKTtcbiAgICB1bC5hcHBlbmRDaGlsZChzZXRSZWFsRmVlbChkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YpKTtcbiAgICB1bC5hcHBlbmRDaGlsZChzZXRIdW1pZGl0eShkYXRhLmN1cnJlbnQuaHVtaWRpdHkpKTtcbiAgICB1bC5hcHBlbmRDaGlsZChzZXRXaW5kU3BlZWQoZGF0YS5jdXJyZW50LndpbmRfa3BoKSk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgndGlja2VyLXRleHQnKTtcbiAgICByZXR1cm4gdWw7XG59XG5cbmZ1bmN0aW9uIHNldENvbmRpdGlvbihjKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGBDb25kaXRpb246ICR7Y31gO1xuICAgIHJldHVybiBsaTtcbn1cblxuZnVuY3Rpb24gc2V0SHVtaWRpdHkoaCkge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7aH0lYDtcbiAgICByZXR1cm4gbGk7XG59XG5cbmZ1bmN0aW9uIHNldFdpbmRTcGVlZCh3KSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke3d9IGttL2hgO1xuICAgIHJldHVybiBsaTtcbn1cblxuZnVuY3Rpb24gc2V0UmVhbEZlZWwoZikge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtmfSDCsEZgO1xuICAgIGxpLmlkID0gJ2ZlZWwnO1xuICAgIHJldHVybiBsaTtcbn1cblxuZXhwb3J0IHsgc2V0VGlja2VyVGV4dCB9OyIsImltcG9ydCB7IHNldFRpY2tlclRleHQgfSBmcm9tIFwiLi90aWNrZXJcIjtcbmltcG9ydCBwbGFjZWhvbGRlciBmcm9tICcuLy4uL2ltYWdlcy9wbGFjZWhvbGRlci5wbmcnO1xuaW1wb3J0IHsgc2V0RGF0ZSwgc2V0TG9jYXRpb24sIHNldFRlbXAgfSBmcm9tIFwiLi9zZXRXZWF0aGVySGVscGVyXCI7XG5pbXBvcnQgeyBkaXNwbGF5TG9hZGVyLCByZW1vdmVMb2FkZXIgfSBmcm9tIFwiLi93aWRnZXRzL2xvYWRcIjtcbmltcG9ydCB7IG1ha2VEYWlseUZvcmVjYXN0RWxlbWVudCwgY29tcHV0ZUhvdXJzLCBtYWtlSG91cmx5Rm9yZWNhc3RFbGVtZW50ICB9IGZyb20gXCIuL0ZvcmVjYXN0XCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50TG9jYWwgfSBmcm9tIFwiLi9sb2NhbEhhbmRsZXJcIjtcbmltcG9ydCB7IGNsZWFyRm9yZWNhc3RDb250YWluZXIgfSBmcm9tIFwiLi9jbGVhblVwXCI7XG5pbXBvcnQgeyBiYWNrZ3JvdW5kU3dpdGNoIH0gZnJvbSBcIi4vd2lkZ2V0cy9iYWNrZ3JvdW5kQ29udHJvbFwiO1xuXG5sZXQgcmVxdWVzdCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xYjA1NDk3MmNiMzg0ZDc4OWM1MTk1MjAyMjMxNTA1JnE9JztcbmxldCByZXFfZXh0cmEgPSAnJmRheXM9NSZhcWk9bm8mYWxlcnRzPW5vJ1xubGV0IGRhdGEgPSB7fTtcbmxldCBkYWlseV9mb3JlY2FzdCA9IFtdO1xubGV0IGhvdXJseV9mb3JlY2FzdCA9IFtdO1xubGV0IGZhaHJlbmhlaXQgPSB0cnVlO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIocSkge1xuICAgIGRpc3BsYXlMb2FkZXIoKTtcbiAgICBsZXQgZV9zcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJyk7XG4gICAgdHJ5e1xuICAgICAgICAvL0xvYWRpbmcgY29tcG9uZW50IHN0dWZmIGhlcmVcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCArIHEgKyByZXFfZXh0cmEsIHsnbW9kZSc6ICdjb3JzJ30pO1xuICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRXZWF0aGVyKCk7XG4gICAgICAgIGJhY2tncm91bmRTd2l0Y2goTnVtYmVyKGRhdGEuY3VycmVudC5jb25kaXRpb24uY29kZSkpO1xuICAgICAgICBjbGVhckZvcmVjYXN0Q29udGFpbmVyKCk7XG4gICAgICAgIGdldERhaWx5Rm9yZWNhc3QoKTtcbiAgICAgICAgZ2V0SG91cmx5Rm9yZWNhc3QoKTtcbiAgICAgICAgc2hvd0ZvcmVjYXN0KCk7XG4gICAgICAgIHNldEN1cnJlbnRMb2NhbChxKTtcbiAgICAgICAgZV9zcGFuLnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGVfc3Bhbi50ZXh0Q29udGVudCA9ICdDYW5ub3QgZmluZCBhIG1hdGNoaW5nIGxvY2F0aW9uLic7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgcmVtb3ZlTG9hZGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNldFdlYXRoZXIoKSB7XG4gICAgc2V0TG9jYXRpb24oZGF0YS5sb2NhdGlvbi5uYW1lLCBkYXRhLmxvY2F0aW9uLnJlZ2lvbiwgZGF0YS5sb2NhdGlvbi5jb3VudHJ5KTtcbiAgICBzZXRUZW1wKChmYWhyZW5oZWl0ID8gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcF9mKX0gwrBGYCA6IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfYyl9IMKwQ2ApKTtcbiAgICBzZXREYXRlKGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQpO1xuICAgIGxldCB0aWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGlja2VyJyk7XG4gICAgaWYodGlja2VyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGlja2VyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHRpY2tlci5hcHBlbmRDaGlsZChzZXRUaWNrZXJUZXh0KGRhdGEpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudy1pY29uLXNtYWxsJykuc3JjID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xufVxuXG5cbmZ1bmN0aW9uIGdldERhaWx5Rm9yZWNhc3QoKSB7XG4gICAgZGFpbHlfZm9yZWNhc3QgPSBbXTtcbiAgICBsZXQgZm9yZWNhc3Rfc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuICAgIChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5KS5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgIGRhaWx5X2ZvcmVjYXN0LnB1c2gobWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50KGRheSkpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gZ2V0SG91cmx5Rm9yZWNhc3QoKSB7XG4gICAgaG91cmx5X2ZvcmVjYXN0ID0gW107XG4gICAgbGV0IGZvcmVjYXN0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICBsZXQgaG91cnMgPSBjb21wdXRlSG91cnMoZGF0YSk7XG4gICAgaG91cnMuZm9yRWFjaCh0aWNrID0+IHtcbiAgICAgICAgaG91cmx5X2ZvcmVjYXN0LnB1c2gobWFrZUhvdXJseUZvcmVjYXN0RWxlbWVudCh0aWNrKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xufVxuXG5cbmZ1bmN0aW9uIHNob3dGb3JlY2FzdCgpIHtcbiAgICBsZXQgZm9yZWNhc3Rfc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuICAgIGxldCBob3VybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1ob3VybHknKTtcbiAgICBsZXQgd2Vla2x5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctd2Vla2x5Jyk7XG5cbiAgICBjbGVhckZvcmVjYXN0Q29udGFpbmVyKCk7XG5cbiAgICBpZih3ZWVrbHkuZGlzYWJsZWQpIHtcbiAgICAgICAgZm9yZWNhc3Rfc2VjdGlvbi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuICAgICAgICBkYWlseV9mb3JlY2FzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZm9yZWNhc3Rfc2VjdGlvbi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmKGhvdXJseS5kaXNhYmxlZCkge1xuICAgICAgICBmb3JlY2FzdF9zZWN0aW9uLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICBob3VybHlfZm9yZWNhc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGZvcmVjYXN0X3NlY3Rpb24uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0pXG4gICAgfWVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoZmFocmVuaGVpdCkge1xuICAgICAgICAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Vsc2l1cycpKSkuZm9yRWFjaChlbGUgPT57XG4gICAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhaHJlbmhlaXQnKSkpLmZvckVhY2goZWxlID0+e1xuICAgICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmb3JlY2FzdF9zZWN0aW9uLnN0eWxlLmhlaWdodCA9ICcyNXZoJztcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFVuaXRzKCkge1xuICAgIGZhaHJlbmhlaXQgPSAhZmFocmVuaGVpdDtcbiAgICBsZXQgdGVtcF9lbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKTtcbiAgICBsZXQgZmVlbF9lbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbCcpO1xuICAgIGlmKGZhaHJlbmhlaXQpIHtcbiAgICAgICAgdGVtcF9lbGUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wX2YpfSDCsEZgO1xuICAgICAgICBmZWVsX2VsZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mKX0gwrBGYDtcbiAgICAgICAgXG4gICAgICAgIC8vVGhpcyBpcyB1Z2x5LCBidXQgZm9yIGN1cnJlbnQgbGFjayBvZiBhIGJldHRlciBzb2x1dGlvbiwgaXQgd29ya3MuXG4gICAgICAgIC8vSG9wZWZ1bGx5IHdpdGhvdXQgYnJlYWtpbmcuIDIzIE1heSwgMjAyMyAxNDo1OVxuICAgICAgICAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFocmVuaGVpdCcpKSkuZm9yRWFjaChlbGUgPT57XG4gICAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB9KTtcblxuICAgICAgICAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Vsc2l1cycpKSkuZm9yRWFjaChlbGUgPT57XG4gICAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjsgXG4gICAgfVxuICAgIHRlbXBfZWxlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcF9jKX0gwrBDYDtcbiAgICBmZWVsX2VsZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jKX0gwrBDYDtcblxuICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWhyZW5oZWl0JykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Vsc2l1cycpKSkuZm9yRWFjaChlbGUgPT57XG4gICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBob3VybHlfZm9yZWNhc3QsIGZldGNoV2VhdGhlciwgc3dpdGNoVW5pdHMsIGdldERhaWx5Rm9yZWNhc3QsIGdldEhvdXJseUZvcmVjYXN0LCBzaG93Rm9yZWNhc3QgfTsiLCJpbXBvcnQgY2xlYXIgZnJvbSAnLi4vLi4vaW1hZ2VzL2NsZWFyLmpwZyc7XG5pbXBvcnQgZHJpenpsZSBmcm9tICcuLi8uLi9pbWFnZXMvZHJpenpsZS5qcGcnO1xuaW1wb3J0IGNsb3VkeSBmcm9tICcuLi8uLi9pbWFnZXMvY2xvdWR5LmpwZyc7XG5pbXBvcnQgcmFpbiBmcm9tICcuLi8uLi9pbWFnZXMvcmFpbi5qcGcnO1xuaW1wb3J0IHNub3cgZnJvbSAnLi4vLi4vaW1hZ2VzL3Nub3cuanBnJztcbmltcG9ydCB0aHVuZGVyIGZyb20gJy4uLy4uL2ltYWdlcy90aHVuZGVyLXN0b3JtLmpwZyc7XG5cbmZ1bmN0aW9uIGJhY2tncm91bmRTd2l0Y2goY2MpIHtcbiAgICBsZXQgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgLy8gaWYoY2MgPiA5OTkgJiYgY2MgPD0gMTAwMykge1xuICAgIC8vICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2xlYXJ9YDtcbiAgICAvLyB9IGVsc2UgaWYgKChjYyA+IDEwMDMgJiYgY2MgPD0gMTA4NykgfHwgKGNjID4gMTEzNCAmJiBjYyA8PSAxMTQ3KSkge1xuICAgIC8vICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2xvdWR5fWA7XG4gICAgLy8gfSBlbHNlIGlmIChjYyA+IDExNDkgJiYgY2MgPD0gMTE3Mikge1xuICAgIC8vICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZHJpenpsZX1gO1xuICAgIC8vIH0gZWxzZSBpZiAoKGNjID4gMTE3OSAmJiBjYyA8PSAxMjA3KSB8fCAoY2MgPiAxMjM5ICYmIGNjIDw9IDEyNjQpKSB7XG4gICAgLy8gICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyYWlufWA7XG4gICAgLy8gfSBlbHNlIGlmIChjYyA+IDEyMDkgJiYgY2MgPD0gMTIzNykge1xuICAgIC8vICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c25vd31gO1xuICAgIC8vIH0gZWxzZSBpZiAoY2MgPiAxMjcyICYmIGNjIDw9IDEyODIpIHtcbiAgICAvLyAgICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RodW5kZXJ9YDtcbiAgICAvLyB9IGVsc2V7XG4gICAgLy8gICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbG91ZHl9YDtcbiAgICAvLyB9XG59XG5cbmV4cG9ydCB7IGJhY2tncm91bmRTd2l0Y2ggfTsiLCJpbXBvcnQgeyBmZXRjaFdlYXRoZXIgfSBmcm9tIFwiLi4vd2VhdGhlclwiO1xuXG5sZXQgZmF2b3JpdGVzID0gW107XG4vL0NoZWNrIGxvY2FsIHN0b3JhZ2UgZm9yIGV4aXN0aW5nIGZhdm9yaXRlcywgaWYgdGhleSBkb24ndCBleGlzdCwgc2V0IGZhdm9yaXRlcyB0byBlbXB0eSBhcnJheVxuaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnZmF2cycpKSB7XG4gICAgZmF2b3JpdGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2cycpKTtcbn1cblxuZnVuY3Rpb24gc2V0TmV3RmF2b3JpdGUoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktc3RhdGUnKS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBpZihmYXZvcml0ZXMuaW5jbHVkZXMocXVlcnkpKSB7XG4gICAgICAgIGFsZXJ0KCdUaGlzIGlzIGFscmVhZHkgZmF2b3JpdGVkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmF2b3JpdGVzLnB1c2gocXVlcnkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZzJywgSlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVzKSk7XG4gICAgXG4gICAgbGV0IG5ld19lbGUgPSBuZXdGYXZFbGVtZW50KHF1ZXJ5KTtcbiAgICBuZXdfZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmF2Q2xpY2tIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LW1lbnUnKS5hcHBlbmRDaGlsZChuZXdfZWxlKTtcbiAgICBcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRmF2b3JpdGVzKCkge1xuICAgIGxldCBmYXZfbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtbWVudScpO1xuICAgIFxuICAgIGZhdm9yaXRlcy5mb3JFYWNoKGZhdiA9PiB7XG4gICAgICAgIGxldCBmYXZfZWxlID0gbmV3RmF2RWxlbWVudChmYXYpXG4gICAgICAgIGZhdl9lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYXZDbGlja0hhbmRsZXIpO1xuICAgICAgICBmYXZfbWVudS5hcHBlbmRDaGlsZChmYXZfZWxlKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm47XG59XG5cblxuZnVuY3Rpb24gbmV3RmF2RWxlbWVudChmYXYpIHtcbiAgICBsZXQgZmF2X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZhdl9kaXYudGV4dENvbnRlbnQgPSBmYXY7XG4gICAgZmF2X2Rpdi5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZScpO1xuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ+KdjCc7XG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWZhdicpO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRmF2RXZlbnRIYW5kbGVyKTtcbiAgICBmYXZfZGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICByZXR1cm4gZmF2X2Rpdjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRmF2RXZlbnRIYW5kbGVyKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGxldCBmYXZfaW5keCA9IGZhdm9yaXRlcy5pbmRleE9mKHBhcmVudC50ZXh0Q29udGVudC5zbGljZSgwLCAtMSkpO1xuXG4gICAgZmF2b3JpdGVzLnNwbGljZShmYXZfaW5keCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZhdnMnLCBKU09OLnN0cmluZ2lmeShmYXZvcml0ZXMpKTtcbiAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUZhdkV2ZW50SGFuZGxlcik7XG4gICAgcGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmF2Q2xpY2tIYW5kbGVyKTtcbiAgICBwYXJlbnQucmVtb3ZlKCk7XG5cbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2cycpKTtcbiAgICByZXR1cm47ICAgXG59XG5cbmZ1bmN0aW9uIGZhdkNsaWNrSGFuZGxlcihlKSB7XG4gICAgZmV0Y2hXZWF0aGVyKGVuY29kZVVSSUNvbXBvbmVudChlLnRhcmdldC50ZXh0Q29udGVudCkpO1xufVxuXG4vL2RlYnVnXG4vLyBmdW5jdGlvbiBjbGVhckZhdm9yaXRlcygpIHtcbi8vICAgICBmYXZvcml0ZXMgPSBbXTtcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2cycsIEpTT04uc3RyaW5naWZ5KGZhdm9yaXRlcykpO1xuLy8gICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZzJykpO1xuLy8gfVxuXG5leHBvcnQgeyBzZXROZXdGYXZvcml0ZSwgcG9wdWxhdGVGYXZvcml0ZXMgfTsiLCJmdW5jdGlvbiBkaXNwbGF5TG9hZGVyKCkge1xuICAgIGxldCBkaW1tZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaW1tZXIuY2xhc3NMaXN0LmFkZCgnZGltbWVyJyk7XG4gICAgbGV0IHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2xkcy1yaXBwbGUnKTtcbiAgICBzcGlubmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgZGltbWVyLmFwcGVuZENoaWxkKHNwaW5uZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChkaW1tZXIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMb2FkZXIoKSB7XG4gICAgbGV0IHNwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGRzLXJpcHBsZScpO1xuICAgIHdoaWxlKHNwaW5uZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBzcGlubmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHNwaW5uZXIucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpbW1lcicpLnJlbW92ZSgpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5TG9hZGVyLCByZW1vdmVMb2FkZXIgfTsiLCJpbXBvcnQgeyBob3VybHlfZm9yZWNhc3QgfSBmcm9tIFwiLi4vd2VhdGhlclwiO1xuXG5sZXQgd2luT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgZm9yKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKCBlbnRyeS50YXJnZXQuY2xpZW50V2lkdGggPCA2MDAgKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYXJlYScpO1xuICAgICAgICAgICAgbGV0IHRhcmdldF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13ZWF0aGVyJyk7IFxuICAgICAgICAgICAgdGFyZ2V0X2Rpdi5wcmVwZW5kKHNlYXJjaF9kaXYpO1xuICAgICAgICAgICAgbGV0IGZvcmVjYXN0X3NlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICAgICAgICAgIHRhcmdldF9kaXYuYXBwZW5kKGZvcmVjYXN0X3NlY3QpO1xuICAgICAgICAgICAgbGV0IGZhdl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLWZhdmVzJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLWZhdmVzJykuY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGZhdl9jb250YWluZXIuc3R5bGUudG9wID0gYDh2aGA7XG4gICAgICAgICAgICBmYXZfY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtlbnRyeS50YXJnZXQuY2xpZW50V2lkdGggLSAyMDB9cHhgO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAyMDBweGA7XG4gICAgICAgIH07XG4gICAgICAgIGlmICggZW50cnkudGFyZ2V0LmNsaWVudFdpZHRoID4gNjAwKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYXJlYScpO1xuICAgICAgICAgICAgbGV0IHRhcmdldF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpOyBcbiAgICAgICAgICAgIHRhcmdldF9kaXYuYXBwZW5kKHNlYXJjaF9kaXYpO1xuICAgICAgICAgICAgbGV0IGZvcmVjYXN0X3NlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmQoZm9yZWNhc3Rfc2VjdCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbGUtZmF2ZXMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbGV0IGZhdl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIH07XG4gICAgICAgIC8vZW50cnkudGFyZ2V0LmNsaWVudFdpZHRoIDwgODAwID8gbW9iaWxlX29uID0gdHJ1ZSA6IG1vYmlsZV9vbiA9IGZhbHNlO1xuICAgIH1cbn0pXG5cbndpbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSk7XG5cbmV4cG9ydCB7d2luT2JzZXJ2ZXJ9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypDcmVkaXRzOiAubGRzLXJpcHBsZSBmcm9tIGh0dHBzOi8vbG9hZGluZy5pby9jc3MvKi9cXG5cXG4uZGltbWVyIHtcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgbWluLXdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuLmxkcy1yaXBwbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDQuOSUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDUlIHtcXG4gICAgICB0b3A6IDM2cHg7XFxuICAgICAgbGVmdDogMzZweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgd2lkdGg6IDcycHg7XFxuICAgICAgaGVpZ2h0OiA3MnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL2xvYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0RBQW9EOztBQUVwRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw4REFBOEQ7RUFDaEU7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0U7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxRQUFRO01BQ1IsU0FBUztNQUNULFdBQVc7TUFDWCxZQUFZO01BQ1osVUFBVTtJQUNaO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypDcmVkaXRzOiAubGRzLXJpcHBsZSBmcm9tIGh0dHBzOi8vbG9hZGluZy5pby9jc3MvKi9cXG5cXG4uZGltbWVyIHtcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgbWluLXdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuLmxkcy1yaXBwbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDQuOSUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDUlIHtcXG4gICAgICB0b3A6IDM2cHg7XFxuICAgICAgbGVmdDogMzZweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgd2lkdGg6IDcycHg7XFxuICAgICAgaGVpZ2h0OiA3MnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvZnV0dXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbW91bnRhaW5zLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ2Z1dHVyYSc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEyJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuXFx0LS1tYWluLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE3LCAxLCA0MywgMC44NDIpIDM3JSwgcmdiYSgwLCAxNiwgNTksIDAuODQyKSA5OSUpO1xcblxcdC0tc3ZnLWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMyUpIHNhdHVyYXRlKDElKSBodWUtcm90YXRlKDExN2RlZykgYnJpZ2h0bmVzcygxMTklKSBjb250cmFzdCgxMDAlKTtcXG5cXHQtLW1haW4tZm9udC1jb2xvcjogI2Y1ZjNmZjtcXG5cXHQtLXNlY29uZGFyeS1jb2xvcjogIzAxMDAwMzFjO1xcblxcdC0tdGVydGlhcnktY29sb3I6ICMxZTA3Mzc5NDtcXG5cXHQtLWJ1dHRvbi1jb2xvcjogIzFFMDczNztcXG5cXHQtLWJ1dHRvbi1kaXNhYmxlZDogbGluZWFyLWdyYWRpZW50KDk0ZGVnLCByZ2JhKDAsMCwwLDEpIDE1JSwgcmdiYSg2Niw2Niw2NiwxKSA4OSUpO1xcblxcdC0tYnV0dG9uLWRpc2FibGVkLXRleHQ6IGJsYWNrO1xcblxcdC0tYnV0dG9uLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTMzZGVnLCByZ2JhKDIzLDIsNTEsMSkgMTUlLCByZ2JhKDY4LDQ2LDEwMSwxKSA4OSUpO1xcblxcblxcdC0tZnMtcmVnOiBjbGFtcCguNnJlbSwgLjh2dywgMXJlbSk7XFxuXFx0LS1mcy1mb3JlOiBjbGFtcCguNXJlbSwgMXZ3LCAxcmVtKTtcXG5cXHQtLWZzLWJpZzogY2xhbXAoLjhyZW0sIDF2dywgMS41cmVtKTtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHR0cmFuc2l0aW9uOiBmbGV4IDJzO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLW1haW4tZ3JhZGllbnQpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0Zm9udC1mYW1pbHk6ICdmdXR1cmEnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGJvcmRlcjpub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWdyYWRpZW50KTtcXG5cXHRjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XFxuXFx0Y3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1kaXNhYmxlZCk7XFxuXFx0Y29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG59XFxuXFxuLmhlYWRpbmcge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogOHZoO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmbGV4Om5vbmU7XFxufVxcblxcbiN1bml0LXRvZ2dsZSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0cGFkZGluZzogMHJlbTtcXG5cXHRmb250LXNpemU6IGNsYW1wKC43cmVtLCAxLjFyZW0sIDF2dyk7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0d2lkdGg6IGNsYW1wKDEwMHB4LCAxNTBweCwgMTB2dyk7XFxufVxcblxcbi5zZWFyY2gtYXJlYSB7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jc2VhcmNoLWZvcm0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbiNzZWFyY2gtZm9ybSBsYWJlbCB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jc2VhcmNoLWljb24ge1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRmaWx0ZXI6IHZhcigtLXN2Zy1maWx0ZXIpO1xcbn1cXG5cXG4jc2VhcmNoIHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHR3aWR0aDogMjV2dztcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLXJlZyk7XFxuXFx0cGFkZGluZzogLjFyZW0gLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogLjJyZW07XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDQ1KTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4jc2VhcmNoOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6dmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuI3NlYXJjaDpmb2N1cyB7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3NlYXJjaC1idXR0b24ge1xcblxcdHdpZHRoOiA1dnc7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNlcnJvciB7XFxuXFx0Y29sb3I6IHJlZDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMTAlO1xcblxcdHRvcDogOTAlO1xcblxcdGZvbnQtc2l6ZTogLjhyZW07XFxufVxcblxcbiNtb2JpbGUtZmF2ZXMge1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5tYWluLXdlYXRoZXIge1xcblxcdGZsZXg6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMTUlO1xcbn1cXG5cXG4uZGV0YWlscy13cmFwcGVye1xcblxcdGhlaWdodDogMzAwcHg7XFxuXFx0d2lkdGg6IDQwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCAyMzAsIDI1MCwgMCk7XFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHBhZGRpbmc6IDFyZW0gNTBweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgMTAlO1xcblxcdGdhcDogLjVyZW07XFxufVxcblxcbi5sb2NhdGlvbi13cmFwcGVyIHtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHR3aWR0aDogODAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE4LCAyMTgsIDIxOCwgMCk7XFxuXFx0cGFkZGluZzogNHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Y29sb3I6dmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLmNpdHktc3RhdGUge1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtYmlnKTtcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRtYXJnaW4tbGVmdDogNSU7XFxufVxcblxcbi5jb3VudHJ5IHtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLXJlZyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRtYXJnaW4tdG9wOiA0cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG5cXG4udGVtcC13cmFwcGVyIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOWU3ODhmMDA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4udy1pY29uLXNtYWxsIHtcXG5cXHR3aWR0aDo0MHB4O1xcblxcdGFzcGVjdC1yYXRpbzogMSAvMTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6MTBweDtcXG5cXHR0b3A6MTBweDtcXG59XFxuXFxuLmxhc3QtdXBkYXRlIHtcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcbn1cXG5cXG4jdGVtcGVyYXR1cmUge1xcblxcdGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNHJlbSwgNHZ3ICk7XFxufVxcblxcbiN0aWNrZXIge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxuXFx0b3ZlcmZsb3cteTogaGlkZGVuO1xcblxcdGNvbG9yOnZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi50aWNrZXItdGV4dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0YW5pbWF0aW9uOiB0aWNrLXJpZ2h0IDE1cyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLXJlZyk7XFxufVxcblxcbi50aWNrZXItdGV4dCBsaSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG5cXG4udGlja2VyLXRleHQgbGk6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcblxcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbiNmYXYtaWNvbiB7XFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxuXFx0dG9wOiA1JTtcXG5cXHRyaWdodDogODUlO1xcblxcdGhlaWdodDogY2xhbXAoMXJlbSwgMnZ3LCA1cmVtKTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRmaWx0ZXI6IHZhcigtLXN2Zy1maWx0ZXIpO1xcbn1cXG5cXG4jZmF2LWljb246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZhdm9yaXRlcy1jb250YWluZXIge1xcblxcdGhlaWdodDo0MDBweDtcXG5cXHR3aWR0aDogNjAwcHg7XFxuXFx0ZmxleC1zaHJpbms6IDE7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5mYXZvcml0ZXMtY29udGFpbmVyPmgxIHtcXG5cXHRmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMS41dncsIDIuNXJlbSApO1xcblxcdHBhZGRpbmc6IDFyZW0gMXJlbTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mYXYtbWVudSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuXFx0Z3JpZC1hdXRvLXJvd3M6IDc1cHg7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRmbGV4OiBhdXRvO1xcblxcdGdhcDoxcmVtO1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mYXZvcml0ZSB7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRwYWRkaW5nOiAwIC41cmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0b3ZlcmZsb3cteTogaGlkZGVuO1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbjtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLXJlZyk7XFxufVxcblxcbi5mYXZvcml0ZTpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxMTAlKTtcXG59XFxuXFxuLnJlbW92ZS1mYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA3JTtcXG5cXHRyaWdodDo1JTtcXG5cXHRmb250LXNpemU6IC45cmVtO1xcblxcdHBhZGRpbmc6IDFweCA0cHg7XFxuXFx0Y29sb3I6IGdyZXk7XFxufVxcblxcbi5yZW1vdmUtZmF2OmhvdmVye1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG5cXHRoZWlnaHQ6IDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRnYXA6IDR2dztcXG5cXHRwYWRkaW5nOiAwIDJyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDJzO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZWxlbWVudCB7XFxuXFx0d2lkdGg6IDEyJTtcXG5cXHRoZWlnaHQ6IDgwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzE2NzdjNDE7XFxuXFx0Y29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtaGVhZGVyIHtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLWZvcmUpO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmljb24tZm9yZWNhc3Qge1xcblxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdGhlaWdodDogNDAlO1xcblxcdGFzcGVjdC1yYXRpbzogMS8xO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5mb3JlY2FzdC1kZXRhaWwtd3JhcHBlciB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdHdpZHRoOjkwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubW9iaWxlLWhvdXItZm9yZWNhc3Qge1xcblxcdG1pbi1oZWlnaHQ6IDIwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg1LCAyMjAsIDI1MiwgMC42MjMpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxufVxcblxcbkBrZXlmcmFtZXMgdGljay1yaWdodCB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjUlKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNzUlKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xcblxcdC5tYWluLXdlYXRoZXIge1xcblxcdFxcdGdhcDogNSU7XFxuXFx0fVxcblxcdC5kZXRhaWxzLXdyYXBwZXIge1xcblxcdFxcdGhlaWdodDoyNTBweDtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gNDAlIDEwJTtcXG5cXHR9XFxuXFx0LnctaWNvbi1zbWFsbCB7XFxuXFx0XFx0cmlnaHQ6MzAlO1xcblxcdFxcdHRvcDoxJTtcXG5cXHR9XFxuXFx0LmZhdm9yaXRlcy1jb250YWluZXIge1xcblxcdFxcdG1hcmdpbi1yaWdodDogNHJlbTtcXG5cXHRcXHRoZWlnaHQ6IDUwdmg7XFxuXFx0fVxcblxcdC5mb3JlY2FzdC1lbGVtZW50IHtcXG5cXHRcXHR3aWR0aDogMTUwcHg7XFxuXFx0XFx0cGFkZGluZzogMCAxcmVtO1xcblxcdH1cXG5cXHQjc2VhcmNoLWJ1dHRvbiB7XFxuXFx0XFx0d2lkdGg6IDEwMHB4O1xcblxcdH1cXG5cXHQjc2VhcmNoIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcdC5mYXYtbWVudSB7XFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxuXFx0XFx0Z3JpZC1hdXRvLXJvd3M6IDUwcHg7XFxuXFx0fVxcblxcblxcdC8qIC5mYXZvcml0ZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAuN3JlbTtcXG5cXHR9ICovXFxuXFxuXFx0LnJlbW92ZS1mYXYge1xcblxcdFxcdHRvcDogNSU7XFxuXFx0XFx0cmlnaHQ6IDMlO1xcblxcdFxcdGZvbnQtc2l6ZTogLjdyZW07XFxuXFx0fVxcblxcblxcdCN1bml0LXRvZ2dsZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAuN3JlbTtcXG5cXHRcXHRoZWlnaHQ6IDEuMnJlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdFxcdGhlaWdodDogNzUlO1xcblxcdFxcdHdpZHRoOmF1dG87XFxuXFx0XFx0YXNwZWN0LXJhdGlvOiAxIC8gMTtcXG5cXHR9XFxuXFx0XFxuXFx0Lmljb24tZm9yZWNhc3Qge1xcblxcdFxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdFxcdGhlaWdodDogMzAlO1xcblxcdFxcdGFzcGVjdC1yYXRpbzogMS8xO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFx0Ym9keXtcXG5cXHRcXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcblxcdH1cXG5cXG5cXHQjc2VhcmNoLWljb24ge1xcblxcdFxcdGhlaWdodDoxLjJyZW07XFxuXFx0fVxcblxcblxcdCNzZWFyY2gge1xcblxcdFxcdHdpZHRoOiAxMjVweDtcXG5cXHRcXHRmb250LXNpemU6IC44cmVtOztcXG5cXHR9XFxuXFxuXFx0I3NlYXJjaC1idXR0b24ge1xcblxcdFxcdHdpZHRoOiA3NXB4O1xcblxcdFxcdGhlaWdodDoxLjVyZW07XFxuXFx0fVxcblxcblxcdC5tYWluLXdlYXRoZXIge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiAwO1xcblxcdFxcdGZsZXg6Y29udGVudDtcXG5cXHRcXHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdH1cXG5cXG5cXHQuZGV0YWlscy13cmFwcGVyIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG8gYXV0bztcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0XFx0d2lkdGg6OTAlO1xcblxcdH1cXG5cXG5cXHQuY2l0eS1zdGF0ZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQjdGVtcGVyYXR1cmUge1xcblxcdFxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHR9XFxuXFxuXFx0Lmxhc3QtdXBkYXRlIHtcXG5cXHRcXHRmb250LXNpemU6IC44cmVtO1xcblxcdH1cXG5cXG5cXHQudy1pY29uLXNtYWxsIHtcXG5cXHRcXHR3aWR0aDogMTUlO1xcblxcdH1cXG5cXG5cXHQuZmF2b3JpdGVzLWNvbnRhaW5lciB7XFxuXFx0XFx0d2lkdGg6MHB4O1xcblxcdFxcdGhlaWdodDogMHB4O1xcblxcdFxcdG92ZXJmbG93LXg6aGlkZGVuO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAxcztcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdFxcdGJvcmRlcjpub25lO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwMTAwMDNlYTtcXG5cXHR9XFxuXFxuXFx0LmZhdm9yaXRlcy1jb250YWluZXIgaDEge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0I3RpY2tlciB7XFxuXFx0XFx0aGVpZ2h0OjEwMCU7XFxuXFx0XFx0d2lkdGg6IDkwJTtcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXG5cXHR9XFxuXFxuXFx0LnRpY2tlci10ZXh0IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFuaW1hdGlvbjogbm9uZTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuXFx0XFx0Z2FwOjA7XFxuXFx0fVxcblxcblxcdC50aWNrZXItdGV4dCBsaSB7XFxuXFx0XFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDA7XFxuXFx0XFx0cGFkZGluZy10b3A6IC40cmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAuNHJlbTtcXG5cXHRcXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFx0XFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0XFx0ZGlzcGxheTpmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQudGlja2VyLXRleHQgbGk6Zmlyc3Qtb2YtdHlwZSB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAwJTtcXG5cXHRcXHRib3JkZXItbGVmdDogbm9uZTtcXG5cXHRcXHRib3JkZXItdG9wOiBub25lO1xcblxcdH1cXG5cXG5cXHQjc2hvdy13ZWVrbHksXFxuXFx0I3Nob3ctaG91cmx5IHtcXG5cXHRcXHRmb250LXNpemU6IC43cmVtO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3Qge1xcblxcdFxcdGhlaWdodDogMHB4O1xcblxcdFxcdHdpZHRoOiA4MCU7XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDJzO1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdC1lbGVtZW50IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdHdpZHRoOiA5MCU7XFxuXFx0XFx0aGVpZ2h0OiAzNSU7XFxuXFx0fVxcblxcblxcdC5pY29uLWZvcmVjYXN0IHtcXG5cXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdC1oZWFkZXIge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWRldGFpbC13cmFwcGVyIHtcXG5cXHRcXHR3aWR0aDogNDAlO1xcblxcdH1cXG5cXG5cXHQjZXJyb3IgXFx0e1xcblxcdFxcdHRvcDogMTEwJTtcXG5cXHRcXHRmb250LXNpemU6IC43cmVtO1xcblxcdH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHFCQUFxQjtDQUNyQiw0Q0FBNkI7QUFDOUI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxjQUFjO0NBQ2QsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZ0dBQWdHO0NBQ2hHLG1HQUFtRztDQUNuRywwQkFBMEI7Q0FDMUIsNEJBQTRCO0NBQzVCLDJCQUEyQjtDQUMzQix1QkFBdUI7Q0FDdkIsa0ZBQWtGO0NBQ2xGLDZCQUE2QjtDQUM3QixzRkFBc0Y7O0NBRXRGLGtDQUFrQztDQUNsQyxrQ0FBa0M7Q0FDbEMsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIseUVBQTZEO0NBQzdELHNCQUFzQjtDQUN0QixtREFBbUQ7QUFDcEQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixrQ0FBa0M7Q0FDbEMsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQ0FBa0M7Q0FDbEMseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsWUFBWTtD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QUVBO0VBQ0Msc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLFNBQVM7RUFDVCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDJCQUEyQjtDQUM1Qjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsS0FBSztDQUNOOztDQUVBO0VBQ0MsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCOztDQUVBOztFQUVDLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztDQUNaOztDQUVBO0VBQ0MsWUFBWTtDQUNiOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLFNBQVM7RUFDVCxnQkFBZ0I7Q0FDakI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ2Z1dHVyYSc7XFxuXFx0c3JjOiB1cmwoJy4vZm9udHMvZnV0dXIudHRmJyk7XFxufVxcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTIlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG5cXHQtLW1haW4tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTcsIDEsIDQzLCAwLjg0MikgMzclLCByZ2JhKDAsIDE2LCA1OSwgMC44NDIpIDk5JSk7XFxuXFx0LS1zdmctZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgzJSkgc2F0dXJhdGUoMSUpIGh1ZS1yb3RhdGUoMTE3ZGVnKSBicmlnaHRuZXNzKDExOSUpIGNvbnRyYXN0KDEwMCUpO1xcblxcdC0tbWFpbi1mb250LWNvbG9yOiAjZjVmM2ZmO1xcblxcdC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDEwMDAzMWM7XFxuXFx0LS10ZXJ0aWFyeS1jb2xvcjogIzFlMDczNzk0O1xcblxcdC0tYnV0dG9uLWNvbG9yOiAjMUUwNzM3O1xcblxcdC0tYnV0dG9uLWRpc2FibGVkOiBsaW5lYXItZ3JhZGllbnQoOTRkZWcsIHJnYmEoMCwwLDAsMSkgMTUlLCByZ2JhKDY2LDY2LDY2LDEpIDg5JSk7XFxuXFx0LS1idXR0b24tZGlzYWJsZWQtdGV4dDogYmxhY2s7XFxuXFx0LS1idXR0b24tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxMzNkZWcsIHJnYmEoMjMsMiw1MSwxKSAxNSUsIHJnYmEoNjgsNDYsMTAxLDEpIDg5JSk7XFxuXFxuXFx0LS1mcy1yZWc6IGNsYW1wKC42cmVtLCAuOHZ3LCAxcmVtKTtcXG5cXHQtLWZzLWZvcmU6IGNsYW1wKC41cmVtLCAxdncsIDFyZW0pO1xcblxcdC0tZnMtYmlnOiBjbGFtcCguOHJlbSwgMXZ3LCAxLjVyZW0pO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdHRyYW5zaXRpb246IGZsZXggMnM7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tbWFpbi1ncmFkaWVudCksIHVybCguL2ltYWdlcy9tb3VudGFpbnMuanBnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGZvbnQtZmFtaWx5OiAnZnV0dXJhJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRib3JkZXI6bm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ncmFkaWVudCk7XFxuXFx0Y29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tZGlzYWJsZWQpO1xcblxcdGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcblxcbi5oZWFkaW5nIHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDh2aDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleDpub25lO1xcbn1cXG5cXG4jdW5pdC10b2dnbGUge1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdHBhZGRpbmc6IDByZW07XFxuXFx0Zm9udC1zaXplOiBjbGFtcCguN3JlbSwgMS4xcmVtLCAxdncpO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHdpZHRoOiBjbGFtcCgxMDBweCwgMTUwcHgsIDEwdncpO1xcbn1cXG5cXG4uc2VhcmNoLWFyZWEge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4jc2VhcmNoLWZvcm0gbGFiZWwge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI3NlYXJjaC1pY29uIHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0ZmlsdGVyOiB2YXIoLS1zdmctZmlsdGVyKTtcXG59XFxuXFxuI3NlYXJjaCB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0d2lkdGg6IDI1dnc7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcblxcdHBhZGRpbmc6IC4xcmVtIC41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ0NSk7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuI3NlYXJjaDo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOnZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbiNzZWFyY2g6Zm9jdXMge1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZWFyY2gtYnV0dG9uIHtcXG5cXHR3aWR0aDogNXZ3O1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jZXJyb3Ige1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDEwJTtcXG5cXHR0b3A6IDkwJTtcXG5cXHRmb250LXNpemU6IC44cmVtO1xcbn1cXG5cXG4jbW9iaWxlLWZhdmVzIHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0ZGlzcGxheTpub25lO1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyIHtcXG5cXHRmbGV4OiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDE1JTtcXG59XFxuXFxuLmRldGFpbHMtd3JhcHBlcntcXG5cXHRoZWlnaHQ6IDMwMHB4O1xcblxcdHdpZHRoOiA0MDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgMjMwLCAyNTAsIDApO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwYWRkaW5nOiAxcmVtIDUwcHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDEwJTtcXG5cXHRnYXA6IC41cmVtO1xcbn1cXG5cXG4ubG9jYXRpb24td3JhcHBlciB7XFxuXFx0aGVpZ2h0OjEwMCU7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOCwgMjE4LCAyMTgsIDApO1xcblxcdHBhZGRpbmc6IDRweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGNvbG9yOnZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi5jaXR5LXN0YXRlIHtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLWJpZyk7XFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG4uY291bnRyeSB7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bWFyZ2luLXRvcDogNHB4O1xcblxcdG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxuXFxuLnRlbXAtd3JhcHBlciB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzllNzg4ZjAwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Y29sb3I6dmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLnctaWNvbi1zbWFsbCB7XFxuXFx0d2lkdGg6NDBweDtcXG5cXHRhc3BlY3QtcmF0aW86IDEgLzE7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OjEwcHg7XFxuXFx0dG9wOjEwcHg7XFxufVxcblxcbi5sYXN0LXVwZGF0ZSB7XFxuXFx0cGFkZGluZzogMXJlbSAwO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtcmVnKTtcXG59XFxuXFxuI3RlbXBlcmF0dXJlIHtcXG5cXHRmb250LXNpemU6IGNsYW1wKDJyZW0sIDRyZW0sIDR2dyApO1xcbn1cXG5cXG4jdGlja2VyIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdG92ZXJmbG93LXk6IGhpZGRlbjtcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4udGlja2VyLXRleHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGFuaW1hdGlvbjogdGljay1yaWdodCAxNXMgbGluZWFyIGluZmluaXRlO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcbn1cXG5cXG4udGlja2VyLXRleHQgbGkge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuXFxuLnRpY2tlci10ZXh0IGxpOmZpcnN0LW9mLXR5cGUge1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4jZmF2LWljb24ge1xcblxcdHBvc2l0aW9uOmFic29sdXRlO1xcblxcdHRvcDogNSU7XFxuXFx0cmlnaHQ6IDg1JTtcXG5cXHRoZWlnaHQ6IGNsYW1wKDFyZW0sIDJ2dywgNXJlbSk7XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0ZmlsdGVyOiB2YXIoLS1zdmctZmlsdGVyKTtcXG59XFxuXFxuI2Zhdi1pY29uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6NDAwcHg7XFxuXFx0d2lkdGg6IDYwMHB4O1xcblxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Y29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWNvbnRhaW5lcj5oMSB7XFxuXFx0Zm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDEuNXZ3LCAyLjVyZW0gKTtcXG5cXHRwYWRkaW5nOiAxcmVtIDFyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZmF2LW1lbnUge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcblxcdGdyaWQtYXV0by1yb3dzOiA3NXB4O1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0ZmxleDogYXV0bztcXG5cXHRnYXA6MXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZmF2b3JpdGUge1xcblxcdHdpZHRoOjEwMCU7XFxuXFx0aGVpZ2h0OjEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0cGFkZGluZzogMCAuNXJlbTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdG92ZXJmbG93LXk6IGhpZGRlbjtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UtaW47XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcbn1cXG5cXG4uZmF2b3JpdGU6aG92ZXIge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMTEwJSk7XFxufVxcblxcbi5yZW1vdmUtZmF2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNyU7XFxuXFx0cmlnaHQ6NSU7XFxuXFx0Zm9udC1zaXplOiAuOXJlbTtcXG5cXHRwYWRkaW5nOiAxcHggNHB4O1xcblxcdGNvbG9yOiBncmV5O1xcbn1cXG5cXG4ucmVtb3ZlLWZhdjpob3ZlcntcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuXFx0aGVpZ2h0OiAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxuXFx0Z2FwOiA0dnc7XFxuXFx0cGFkZGluZzogMCAycmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAycztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXG59XFxuXFxuLmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdHdpZHRoOiAxMiU7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzcxNjc3YzQxO1xcblxcdGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWhlYWRlciB7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1mb3JlKTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pY29uLWZvcmVjYXN0IHtcXG5cXHRmbGV4LXNocmluazogMTtcXG5cXHRoZWlnaHQ6IDQwJTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGV0YWlsLXdyYXBwZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHR3aWR0aDo5MCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtcmVnKTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vYmlsZS1ob3VyLWZvcmVjYXN0IHtcXG5cXHRtaW4taGVpZ2h0OiAyMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMjIwLCAyNTIsIDAuNjIzKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpY2stcmlnaHQge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTI1JSk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjc1JSk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXG5cXHQubWFpbi13ZWF0aGVyIHtcXG5cXHRcXHRnYXA6IDUlO1xcblxcdH1cXG5cXHQuZGV0YWlscy13cmFwcGVyIHtcXG5cXHRcXHRoZWlnaHQ6MjUwcHg7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDQwJSAxMCU7XFxuXFx0fVxcblxcdC53LWljb24tc21hbGwge1xcblxcdFxcdHJpZ2h0OjMwJTtcXG5cXHRcXHR0b3A6MSU7XFxuXFx0fVxcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDRyZW07XFxuXFx0XFx0aGVpZ2h0OiA1MHZoO1xcblxcdH1cXG5cXHQuZm9yZWNhc3QtZWxlbWVudCB7XFxuXFx0XFx0d2lkdGg6IDE1MHB4O1xcblxcdFxcdHBhZGRpbmc6IDAgMXJlbTtcXG5cXHR9XFxuXFx0I3NlYXJjaC1idXR0b24ge1xcblxcdFxcdHdpZHRoOiAxMDBweDtcXG5cXHR9XFxuXFx0I3NlYXJjaCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXHQuZmF2LW1lbnUge1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcblxcdFxcdGdyaWQtYXV0by1yb3dzOiA1MHB4O1xcblxcdH1cXG5cXG5cXHQvKiAuZmF2b3JpdGUge1xcblxcdFxcdGZvbnQtc2l6ZTogLjdyZW07XFxuXFx0fSAqL1xcblxcblxcdC5yZW1vdmUtZmF2IHtcXG5cXHRcXHR0b3A6IDUlO1xcblxcdFxcdHJpZ2h0OiAzJTtcXG5cXHRcXHRmb250LXNpemU6IC43cmVtO1xcblxcdH1cXG5cXG5cXHQjdW5pdC10b2dnbGUge1xcblxcdFxcdGZvbnQtc2l6ZTogLjdyZW07XFxuXFx0XFx0aGVpZ2h0OiAxLjJyZW07XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdC1lbGVtZW50IHtcXG5cXHRcXHRoZWlnaHQ6IDc1JTtcXG5cXHRcXHR3aWR0aDphdXRvO1xcblxcdFxcdGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuXFx0fVxcblxcdFxcblxcdC5pY29uLWZvcmVjYXN0IHtcXG5cXHRcXHRmbGV4LXNocmluazogMTtcXG5cXHRcXHRoZWlnaHQ6IDMwJTtcXG5cXHRcXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcdGJvZHl7XFxuXFx0XFx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG5cXHR9XFxuXFxuXFx0I3NlYXJjaC1pY29uIHtcXG5cXHRcXHRoZWlnaHQ6MS4ycmVtO1xcblxcdH1cXG5cXG5cXHQjc2VhcmNoIHtcXG5cXHRcXHR3aWR0aDogMTI1cHg7XFxuXFx0XFx0Zm9udC1zaXplOiAuOHJlbTs7XFxuXFx0fVxcblxcblxcdCNzZWFyY2gtYnV0dG9uIHtcXG5cXHRcXHR3aWR0aDogNzVweDtcXG5cXHRcXHRoZWlnaHQ6MS41cmVtO1xcblxcdH1cXG5cXG5cXHQubWFpbi13ZWF0aGVyIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogMDtcXG5cXHRcXHRmbGV4OmNvbnRlbnQ7XFxuXFx0XFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG5cXHR9XFxuXFxuXFx0LmRldGFpbHMtd3JhcHBlciB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdHdpZHRoOjkwJTtcXG5cXHR9XFxuXFxuXFx0LmNpdHktc3RhdGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0I3RlbXBlcmF0dXJlIHtcXG5cXHRcXHRmb250LXNpemU6IDNyZW07XFxuXFx0fVxcblxcblxcdC5sYXN0LXVwZGF0ZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAuOHJlbTtcXG5cXHR9XFxuXFxuXFx0LnctaWNvbi1zbWFsbCB7XFxuXFx0XFx0d2lkdGg6IDE1JTtcXG5cXHR9XFxuXFxuXFx0LmZhdm9yaXRlcy1jb250YWluZXIge1xcblxcdFxcdHdpZHRoOjBweDtcXG5cXHRcXHRoZWlnaHQ6IDBweDtcXG5cXHRcXHRvdmVyZmxvdy14OmhpZGRlbjtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMXM7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRcXHRib3JkZXI6bm9uZTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMDAzZWE7XFxuXFx0fVxcblxcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdCN0aWNrZXIge1xcblxcdFxcdGhlaWdodDoxMDAlO1xcblxcdFxcdHdpZHRoOiA5MCU7XFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0fVxcblxcblxcdC50aWNrZXItdGV4dCB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbmltYXRpb246IG5vbmU7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xcblxcdFxcdGdhcDowO1xcblxcdH1cXG5cXG5cXHQudGlja2VyLXRleHQgbGkge1xcblxcdFxcdGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAwO1xcblxcdFxcdHBhZGRpbmctdG9wOiAuNHJlbTtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogLjRyZW07XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdFxcdGhlaWdodDogMS41cmVtO1xcblxcdFxcdGRpc3BsYXk6ZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnRpY2tlci10ZXh0IGxpOmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMCU7XFxuXFx0XFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XFxuXFx0XFx0Ym9yZGVyLXRvcDogbm9uZTtcXG5cXHR9XFxuXFxuXFx0I3Nob3ctd2Vla2x5LFxcblxcdCNzaG93LWhvdXJseSB7XFxuXFx0XFx0Zm9udC1zaXplOiAuN3JlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0IHtcXG5cXHRcXHRoZWlnaHQ6IDBweDtcXG5cXHRcXHR3aWR0aDogODAlO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAycztcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3QtZWxlbWVudCB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHR3aWR0aDogOTAlO1xcblxcdFxcdGhlaWdodDogMzUlO1xcblxcdH1cXG5cXG5cXHQuaWNvbi1mb3JlY2FzdCB7XFxuXFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3QtaGVhZGVyIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdC1kZXRhaWwtd3JhcHBlciB7XFxuXFx0XFx0d2lkdGg6IDQwJTtcXG5cXHR9XFxuXFxuXFx0I2Vycm9yIFxcdHtcXG5cXHRcXHR0b3A6IDExMCU7XFxuXFx0XFx0Zm9udC1zaXplOiAuN3JlbTtcXG5cXHR9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anM9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PTFlMyxlPTZlNCxuPTM2ZTUscj1cIm1pbGxpc2Vjb25kXCIsaT1cInNlY29uZFwiLHM9XCJtaW51dGVcIix1PVwiaG91clwiLGE9XCJkYXlcIixvPVwid2Vla1wiLGY9XCJtb250aFwiLGg9XCJxdWFydGVyXCIsYz1cInllYXJcIixkPVwiZGF0ZVwiLGw9XCJJbnZhbGlkIERhdGVcIiwkPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW1R0XFxzXSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC8seT0vXFxbKFteXFxdXSspXXxZezEsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csTT17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpLG9yZGluYWw6ZnVuY3Rpb24odCl7dmFyIGU9W1widGhcIixcInN0XCIsXCJuZFwiLFwicmRcIl0sbj10JTEwMDtyZXR1cm5cIltcIit0KyhlWyhuLTIwKSUxMF18fGVbbl18fGVbMF0pK1wiXVwifX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LHY9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixmKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGYpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpmLHk6Yyx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6aH1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LGc9XCJlblwiLEQ9e307RFtnXT1NO3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX30sUz1mdW5jdGlvbiB0KGUsbixyKXt2YXIgaTtpZighZSlyZXR1cm4gZztpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHM9ZS50b0xvd2VyQ2FzZSgpO0Rbc10mJihpPXMpLG4mJihEW3NdPW4saT1zKTt2YXIgdT1lLnNwbGl0KFwiLVwiKTtpZighaSYmdS5sZW5ndGg+MSlyZXR1cm4gdCh1WzBdKX1lbHNle3ZhciBhPWUubmFtZTtEW2FdPWUsaT1hfXJldHVybiFyJiZpJiYoZz1pKSxpfHwhciYmZ30sdz1mdW5jdGlvbih0LGUpe2lmKHAodCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBfKG4pfSxPPXY7Ty5sPVMsTy5pPXAsTy53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHcodCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBfPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTSh0KXt0aGlzLiRMPVModC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KX12YXIgbT1NLnByb3RvdHlwZTtyZXR1cm4gbS5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKE8udShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaCgkKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLiR4PXQueHx8e30sdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIE99LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49dyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTx3KHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gTy51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFPLnUoZSl8fGUsaD1PLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPU8udyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8udyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGgpe2Nhc2UgYzpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBmOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Ty5wKHQpLGg9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1oK1wiRGF0ZVwiLG5bZF09aCtcIkRhdGVcIixuW2ZdPWgrXCJNb250aFwiLG5bY109aCtcIkZ1bGxZZWFyXCIsblt1XT1oK1wiSG91cnNcIixuW3NdPWgrXCJNaW51dGVzXCIsbltpXT1oK1wiU2Vjb25kc1wiLG5bcl09aCtcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1mfHxvPT09Yyl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tPLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsaCl7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPU8ucChoKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPXcobCk7cmV0dXJuIE8udyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWYpcmV0dXJuIHRoaXMuc2V0KGYsdGhpcy4kTStyKTtpZigkPT09YylyZXR1cm4gdGhpcy5zZXQoYyx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBPLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPU8ueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsZj1uLm1vbnRocyxoPWZ1bmN0aW9uKHQsbixpLHMpe3JldHVybiB0JiYodFtuXXx8dChlLHIpKXx8aVtuXS5zbGljZSgwLHMpfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBPLnMocyUxMnx8MTIsdCxcIjBcIil9LGQ9bi5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sJD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Ty5zKGErMSwyLFwiMFwiKSxNTU06aChuLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Ty5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChuLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChuLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpPLnMocywyLFwiMFwiKSxoOmMoMSksaGg6YygyKSxhOmQocyx1LCEwKSxBOmQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpPLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpPLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Ty5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6aX07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LGUpe3JldHVybiBlfHwkW3RdfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsbCl7dmFyICQseT1PLnAoZCksTT13KHIpLG09KE0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSx2PXRoaXMtTSxnPU8ubSh0aGlzLE0pO3JldHVybiBnPSgkPXt9LCRbY109Zy8xMiwkW2ZdPWcsJFtoXT1nLzMsJFtvXT0odi1tKS82MDQ4ZTUsJFthXT0odi1tKS84NjRlNSwkW3VdPXYvbiwkW3NdPXYvZSwkW2ldPXYvdCwkKVt5XXx8dixsP2c6Ty5hKGcpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoZikuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBEW3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPVModCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBPLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLFQ9Xy5wcm90b3R5cGU7cmV0dXJuIHcucHJvdG90eXBlPVQsW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixmXSxbXCIkeVwiLGNdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe1RbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSx3LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sdyksdC4kaT0hMCksd30sdy5sb2NhbGU9Uyx3LmlzRGF5anM9cCx3LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHcoMWUzKnQpfSx3LmVuPURbZ10sdy5Mcz1ELHcucD17fSx3fSkpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3dpZGdldHMvbG9hZGVyLmNzcyc7XG5pbXBvcnQgZmF2X2ljb24gZnJvbSAnLi9pbWFnZXMvZmF2LnN2Zyc7XG5pbXBvcnQgc2VhcmNoX2ljb24gZnJvbSAnLi9pbWFnZXMvc2VhcmNoLnN2Zyc7XG5pbXBvcnQgbW9iaWxlX2ZhdmVzIGZyb20gJy4vaW1hZ2VzL2ZhdmVzLnN2Zyc7XG5pbXBvcnQgeyBmZXRjaFdlYXRoZXIsIGdldERhaWx5Rm9yZWNhc3QsIGdldEhvdXJseUZvcmVjYXN0LCBzaG93Rm9yZWNhc3QsIHN3aXRjaFVuaXRzIH0gZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXInO1xuaW1wb3J0IHsgY2xlYXJGb3JlY2FzdENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jbGVhblVwJztcbmltcG9ydCB7IHdpbk9ic2VydmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3dpZGdldHMvd2luU2l6ZSc7XG5pbXBvcnQgeyBwb3B1bGF0ZUZhdm9yaXRlcywgc2V0TmV3RmF2b3JpdGUgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lkZ2V0cy9mYXZNYW5hZ2VyJztcblxubGV0IGRhaWx5X2ZvcmVjYXN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXdlZWtseScpO1xubGV0IGhvdXJseV9mb3JlY2FzdF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1ob3VybHknKTtcblxubGV0IG1fZmF2ZXNfYWN0aXZlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHByZXBGb3JGZXRjaCgpIHtcbiAgICBsZXQgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG4gICAgbGV0IGVfc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xuICAgIGlmKHF1ZXJ5LnZhbHVlID09PSAnJykge1xuICAgICAgICBlX3NwYW4udGV4dENvbnRlbnQgPSBcIlBsZWFzZSBlbnRlciBhIGxvY2F0aW9uIVwiXG4gICAgICAgIHJldHVybjtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGVfc3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuICAgIGZldGNoV2VhdGhlcihlbmNvZGVVUklDb21wb25lbnQocXVlcnkudmFsdWUpKTtcbiAgICByZXR1cm47XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50ID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF2LWljb24nKS5zcmMgPSBmYXZfaWNvbjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWljb24nKS5zcmMgPSBzZWFyY2hfaWNvbjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLWZhdmVzJykuc3JjID0gbW9iaWxlX2ZhdmVzO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnZmF2cycpKSB7XG4gICAgICAgIHBvcHVsYXRlRmF2b3JpdGVzKCk7XG4gICAgfVxuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudCcpKSB7XG4gICAgICAgIGZldGNoV2VhdGhlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudCcpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmZXRjaFdlYXRoZXIoJ0plcnNleStDaXR5Jyk7XG59KSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0LXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgc3dpdGNoVW5pdHMpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJlcEZvckZldGNoKCk7XG59KSk7XG5cbmRhaWx5X2ZvcmVjYXN0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIChldmVudCk9PiB7XG4gICAgZGFpbHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBpZihob3VybHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkKSB7XG4gICAgICAgIGhvdXJseV9mb3JlY2FzdF9idG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzaG93Rm9yZWNhc3QoZXZlbnQpO1xuICAgIHJldHVybjtcbn0pO1xuXG5ob3VybHlfZm9yZWNhc3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgaG91cmx5X2ZvcmVjYXN0X2J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgaWYoZGFpbHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkKSB7XG4gICAgICAgIGRhaWx5X2ZvcmVjYXN0X2J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNob3dGb3JlY2FzdChldmVudCk7XG4gICAgcmV0dXJuO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXYtaWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgc2V0TmV3RmF2b3JpdGUoKTtcbn0pXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbGUtZmF2ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIChldmVudCkgPT4ge1xuICAgIGxldCBmYXZfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlcy1jb250YWluZXInKTtcbiAgICBpZiAoIW1fZmF2ZXNfYWN0aXZlKSB7XG4gICAgICAgIGZhdl9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzkxdmgnO1xuICAgICAgICBtX2ZhdmVzX2FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmYXZfY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICBtX2ZhdmVzX2FjdGl2ZSA9IGZhbHNlO1xuICAgIHJldHVybjtcbn0pXG5cbiJdLCJuYW1lcyI6WyJkYXlqcyIsIm1ha2VEYWlseUZvcmVjYXN0RWxlbWVudCIsImQiLCJmb3JlY2FzdF9lbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRlIiwiYXBwZW5kQ2hpbGQiLCJzZXRGb3JlY2FzdEhlYWRlciIsImZvcm1hdCIsImFwcGVuZCIsInNldENvbmRpdGlvbkltYWdlIiwiZGF5IiwiY29uZGl0aW9uIiwiaWNvbiIsInNldFRlbXBlcmF0dXJlRGV0YWlsIiwiTWF0aCIsInJvdW5kIiwibWludGVtcF9mIiwibWF4dGVtcF9mIiwibWludGVtcF9jIiwibWF4dGVtcF9jIiwibWFrZUhvdXJseUZvcmVjYXN0RWxlbWVudCIsInQiLCJob3VyIiwidGltZSIsInRlbXBfZiIsInRlbXBfYyIsImNvbXB1dGVIb3VycyIsImN1cnJlbnRfZGF0ZXRpbWUiLCJjdXJyZW50IiwibGFzdF91cGRhdGVkIiwic3RhcnQiLCJOdW1iZXIiLCJkYXlfaW5keCIsImhvdXJfYXJyIiwibGltaXQiLCJwdXNoIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImgiLCJoZWFkZXIiLCJ0ZXh0Q29udGVudCIsImkiLCJjb25kX2ltZyIsInNyYyIsImYiLCJjIiwidGVtcF93cmFwcGVyIiwiZGV0YWlsc19mIiwiZGV0YWlsc19jIiwiY2xlYXJGb3JlY2FzdENvbnRhaW5lciIsImZvcmVjYXN0X2NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwic2V0Q3VycmVudExvY2FsIiwicSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZXRMb2NhdGlvbiIsInMiLCJjb3VudHJ5Iiwic2V0VGVtcCIsInRlbXBfZWxlIiwic2V0RGF0ZSIsInNldFRpY2tlclRleHQiLCJkYXRhIiwidWwiLCJzZXRDb25kaXRpb24iLCJ0ZXh0Iiwic2V0UmVhbEZlZWwiLCJmZWVsc2xpa2VfZiIsInNldEh1bWlkaXR5IiwiaHVtaWRpdHkiLCJzZXRXaW5kU3BlZWQiLCJ3aW5kX2twaCIsImxpIiwidyIsImlkIiwicGxhY2Vob2xkZXIiLCJkaXNwbGF5TG9hZGVyIiwicmVtb3ZlTG9hZGVyIiwiYmFja2dyb3VuZFN3aXRjaCIsInJlcXVlc3QiLCJyZXFfZXh0cmEiLCJkYWlseV9mb3JlY2FzdCIsImhvdXJseV9mb3JlY2FzdCIsImZhaHJlbmhlaXQiLCJmZXRjaFdlYXRoZXIiLCJlX3NwYW4iLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInNldFdlYXRoZXIiLCJjb2RlIiwiZ2V0RGFpbHlGb3JlY2FzdCIsImdldEhvdXJseUZvcmVjYXN0Iiwic2hvd0ZvcmVjYXN0IiwibG9jYXRpb24iLCJuYW1lIiwicmVnaW9uIiwidGlja2VyIiwiZm9yZWNhc3Rfc2VjdGlvbiIsImZvckVhY2giLCJob3VycyIsInRpY2siLCJob3VybHkiLCJ3ZWVrbHkiLCJkaXNhYmxlZCIsInN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJlbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJzd2l0Y2hVbml0cyIsImZlZWxfZWxlIiwiZmVlbHNsaWtlX2MiLCJjbGVhciIsImRyaXp6bGUiLCJjbG91ZHkiLCJyYWluIiwic25vdyIsInRodW5kZXIiLCJjYyIsImJnIiwiZmF2b3JpdGVzIiwiaGFzT3duUHJvcGVydHkiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwic2V0TmV3RmF2b3JpdGUiLCJxdWVyeSIsImluY2x1ZGVzIiwiYWxlcnQiLCJzdHJpbmdpZnkiLCJuZXdfZWxlIiwibmV3RmF2RWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmYXZDbGlja0hhbmRsZXIiLCJwb3B1bGF0ZUZhdm9yaXRlcyIsImZhdl9tZW51IiwiZmF2IiwiZmF2X2VsZSIsImZhdl9kaXYiLCJjbG9zZSIsInJlbW92ZUZhdkV2ZW50SGFuZGxlciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJlbnQiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiZmF2X2luZHgiLCJpbmRleE9mIiwic2xpY2UiLCJzcGxpY2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGltbWVyIiwic3Bpbm5lciIsIndpbk9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjbGllbnRXaWR0aCIsInNlYXJjaF9kaXYiLCJ0YXJnZXRfZGl2IiwicHJlcGVuZCIsImZvcmVjYXN0X3NlY3QiLCJmYXZfY29udGFpbmVyIiwicG9zaXRpb24iLCJjbGllbnRUb3AiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvYnNlcnZlIiwiYm9keSIsImZhdl9pY29uIiwic2VhcmNoX2ljb24iLCJtb2JpbGVfZmF2ZXMiLCJkYWlseV9mb3JlY2FzdF9idG4iLCJob3VybHlfZm9yZWNhc3RfYnRuIiwibV9mYXZlc19hY3RpdmUiLCJwcmVwRm9yRmV0Y2giLCJ2YWx1ZSIsIndpbmRvdyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9