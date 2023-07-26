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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/arrow-collapse-down.svg */ "./src/images/arrow-collapse-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'futura';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 12%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n:root {\n\t--main-gradient: linear-gradient(180deg, rgba(17, 1, 43, 0.842) 37%, rgba(0, 16, 59, 0.842) 99%);\n\t--svg-filter: invert(99%) sepia(3%) saturate(1%) hue-rotate(117deg) brightness(119%) contrast(100%);\n\t--main-font-color: #f5f3ff;\n\t--secondary-color: #0100031c;\n\t--tertiary-color: #1e073794;\n\t--button-color: #1E0737;\n\t--button-disabled: linear-gradient(94deg, rgba(0,0,0,1) 15%, rgba(66,66,66,1) 89%);\n\t--button-disabled-text: black;\n\t--button-gradient: linear-gradient(133deg, rgba(23,2,51,1) 15%, rgba(68,46,101,1) 89%);\n\n\t--fs-reg: clamp(.6rem, .8vw, 1rem);\n\t--fs-fore: clamp(.5rem, 1vw, 1rem);\n\t--fs-big: clamp(.8rem, 1vw, 1.5rem);\n\t--fs-font-small: clamp(.5rem, .8vw, .9rem);\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-size: cover;\n\ttransition: flex 2s;\n\tbackground: var(--main-gradient), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\tbackground-size: cover;\n\tfont-family: 'futura', Arial, Helvetica, sans-serif;\n}\n\nbutton {\n\tborder:none;\n\tborder-radius: 8px;\n\theight: 2rem;\n\tbackground: var(--button-gradient);\n\tcolor: var(--main-font-color);\n}\n\nbutton:hover {\n\tcursor: pointer;\n}\n\nbutton:disabled:hover {\n\tcursor: default;\n}\n\nbutton:disabled {\n\tbackground: var(--button-disabled);\n\tcolor: rgb(150, 150, 150);\n}\n\n.heading {\n\tdisplay:flex;\n\talign-items: center;\n\theight: 8vh;\n\tjustify-content: space-between;\n\tflex:none;\n}\n\n#unit-toggle {\n\tmargin-left: 1rem;\n\tpadding: 0rem;\n\tfont-size: clamp(.7rem, 1vw, 1.2rem);\n\tfont-weight: bold;\n\twidth: clamp(100px, 12.8vw, 300px);\n\theight: 40px;\n}\n\n.search-area {\n\tdisplay:flex;\n\talign-items: center;\n\tmargin-right: 1rem;\n}\n\n#search-form {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tposition:relative;\n}\n\n#search-form label {\n\tvertical-align: baseline;\n\tfont-size: 1.5rem;\n}\n\n#search-icon {\n\theight: clamp(.9rem, 1.2vw, 2rem);\n\tfilter: var(--svg-filter);\n}\n\n#search {\n\theight: 1.5rem;\n\twidth: 25vw;\n\tfont-size: var(--fs-reg);\n\tpadding: .1rem .5rem;\n\tborder-radius: .2rem;\n\tborder-style: none;\n\tborder-bottom: 2px solid rgba(0, 0, 0, 0.445);\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n\tcolor: var(--main-font-color);\n}\n\n#search::placeholder {\n\tcolor:var(--main-font-color);\n}\n\n#search:focus {\n\toutline: none;\n}\n\n#search-button {\n\twidth: 5vw;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n}\n\n#error {\n\tcolor: red;\n\tposition: absolute;\n\tleft: 10%;\n\ttop: 90%;\n\tfont-size: .8rem;\n}\n\n#mobile-faves {\n\theight: 2rem;\n\taspect-ratio: 1/1;\n\tdisplay:none;\n}\n\n.main-weather {\n\tflex: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 15%;\n}\n\n.details-wrapper{\n\theight: 300px;\n\twidth: 400px;\n\tbackground-color: rgba(207, 230, 250, 0);\n\tposition:relative;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tpadding: 1rem 50px;\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr 10%;\n\tgap: .5rem;\n}\n\n.location-wrapper {\n\theight:100%;\n\twidth: 100%;\n\tbackground-color: rgba(218, 218, 218, 0);\n\tpadding: 4px;\n\tborder-radius: 1rem;\n\tcolor:var(--main-font-color);\n}\n\n.cs-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.city-state {\n\tfont-size: var(--fs-big);\n\tword-wrap: break-word;\n\tfont-weight: 600;\n\tmargin-left: 5%;\n}\n\n.country {\n\tfont-size: var(--fs-reg);\n\tfont-weight: 600;\n\tmargin-top: 4px;\n\tmargin-left: 5%;\n}\n\n\n.temp-wrapper {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 1rem;\n\tbackground-color: #9e788f00;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tposition:relative;\n\tbox-sizing: border-box;\n\tpadding: 1rem;\n\tcolor:var(--main-font-color);\n}\n\n.temp-icon-wrapper {\n\tdisplay:flex;\n\twidth: 100%;\n\talign-items: center;\n}\n\n.w-icon-small {\n\twidth:clamp(2rem, 2vw,  200px);\n\taspect-ratio: 1 /1;\n}\n\n.last-update {\n\tpadding: 1rem 0;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\ttext-decoration: underline;\n\tfont-size: var(--fs-reg);\n}\n\n#temperature {\n\tfont-size: clamp(2rem, 4vw, 5rem);\n}\n\n#ticker {\n    height: 1.5rem;\n    width: 100%;\n    border-radius: 4px;\n\toverflow-x: hidden;\n\toverflow-y: hidden;\n\tcolor:var(--main-font-color);\n}\n\n.ticker-text {\n\tdisplay: flex;\n\tgap: 1rem;\n\talign-items: center;\n\theight: 100%;\n\tanimation: tick-right 15s linear infinite;\n\twhite-space: nowrap;\n\tfont-size: var(--fs-reg);\n}\n\n.ticker-text li {\n\twidth: 100%;\n\tpadding-right: 1rem;\n\tborder-right: 1px solid var(--main-font-color);\n}\n\n\n.ticker-text li:first-of-type {\n\tpadding-left: 1rem;\n\tborder-left: 1px solid var(--main-font-color);\n}\n\n.button-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n#show-weekly,\n#show-hourly {\n\tfont-size: var(--fs-font-small);\n}\n\n#fav-icon {\n\theight: clamp(1rem, 2vw, 5rem);\n\taspect-ratio: 1/1;\n\tfilter: var(--svg-filter);\n}\n\n#fav-icon:hover {\n\tcursor: pointer;\n}\n\n.favorites-container {\n\theight:400px;\n\twidth: 600px;\n\tflex-shrink: 1;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: var(--main-font-color);\n\tbackground-color: var(--secondary-color);\n\tborder: 2px solid var(--secondary-color);\n}\n\n.favorites-container>h1 {\n\tfont-size: clamp(1rem, 2vw, 2.5rem );\n\tpadding: 1rem 1rem;\n\tborder-bottom: 1px solid black;\n}\n\n.fav-menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-auto-rows: 75px;\n\toverflow-y: auto;\n\tflex: auto;\n\tgap:1rem;\n\tpadding: 1rem;\n}\n\n.favorite {\n\twidth:100%;\n\theight:100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: var(--tertiary-color);\n\tborder-radius: 1rem;\n\ttext-align: center;\n\tposition: relative;\n\tuser-select: none;\n\tpadding: 0 .5rem;\n\tbox-sizing: border-box;\n\toverflow-y: hidden;\n\ttext-overflow: ellipsis;\n\ttransition: transform .5s ease-in;\n\tfont-size: var(--fs-reg);\n}\n\n.favorite:hover {\n\ttransform: scale(110%);\n}\n\n.remove-fav {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 7%;\n\tright:5%;\n\tfont-size: .9rem;\n\tpadding: 1px 4px;\n\tcolor: grey;\n}\n\n.remove-fav:hover{\n\tcursor: pointer;\n}\n\n.forecastwrapper {\n\theight:0vh;\n\ttransition: height .5s;\n}\n\n.collapser {\n\theight: 10%;\n\taspect-ratio: 1 / 1;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n\toverflow:hidden;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\tfilter: var(--svg-filter);\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n}\n\n.forecast {\n\theight: 90%;\n\tdisplay: flex;\n\talign-items: center;\n\toverflow-x: auto;\n\tgap: 4vw;\n\tpadding: 0 2rem;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n}\n\n.forecast-element {\n\twidth: 12%;\n\theight: 80%;\n\tbackground-color: #71677c41;\n\tcolor: var(--main-font-color);\n\tflex-shrink: 0;\n\tborder-radius: 1rem;\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.forecast-header {\n\tfont-size: var(--fs-fore);\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\n.icon-forecast {\n\tflex-shrink: 1;\n\theight: 40%;\n\taspect-ratio: 1/1;\n\tborder-radius: 1rem;\n}\n\n.forecast-detail-wrapper {\n\tborder-radius: 4px;\n\twidth:90%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: var(--fs-reg);\n\tfont-weight: bold;\n}\n\n.mobile-hour-forecast {\n\tmin-height: 200px;\n\tbackground-color: rgba(185, 220, 252, 0.623);\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 90%;\n\toverflow-x: auto;\n}\n\n@keyframes tick-right {\n\t0% {\n\t\ttransform: translateX(125%);\n\t}\n\t100% {\n\t\ttransform: translateX(-275%);\n\t}\n}\n\n@media screen and (max-width: 1280px) {\n\t.main-weather {\n\t\tgap: 5%;\n\t}\n\t.details-wrapper {\n\t\theight:250px;\n\t\tgrid-template-rows: auto 40% 10%;\n\t}\n\t.w-icon-small {\n\t\tright:30%;\n\t\ttop:1%;\n\t}\n\t.favorites-container {\n\t\tmargin-right: 4rem;\n\t\theight: 50vh;\n\t}\n\t.forecast-element {\n\t\twidth: 150px;\n\t\tpadding: 0 1rem;\n\t}\n\t#search-button {\n\t\twidth: 100px;\n\t}\n\t#search {\n\t\tfont-size: 1rem;\n\t}\n\t.fav-menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n\t\tgrid-auto-rows: 50px;\n\t}\n\n\t.remove-fav {\n\t\ttop: 5%;\n\t\tright: 3%;\n\t\tfont-size: .7rem;\n\t}\n\n\t.forecast-element {\n\t\theight: 75%;\n\t\twidth:auto;\n\t\taspect-ratio: 1 / 1;\n\t}\n\t\n\t.icon-forecast {\n\t\tflex-shrink: 1;\n\t\theight: 30%;\n\t\taspect-ratio: 1/1;\n\t\tborder-radius: 1rem;\n\t}\n}\n\n@media only screen and (max-width: 600px) {\n\tbody{\n\t\tbackground-attachment: fixed;\n\t}\n\n\t.search-area {\n\t\tmargin-right: 0;\n\t}\n\n\t#search-form {\n\t\tgap: .5rem;\n\t\twidth:100%;\n\t}\n\n\t#search-icon {\n\t\theight:1.2rem;\n\t}\n\n\t#search {\n\t\twidth: 125px;\n\t\tfont-size: .8rem;\n\t}\n\n\t#search-button {\n\t\twidth: 75px;\n\t\theight:1.5rem;\n\t}\n\n\t.main-weather {\n\t\tflex-direction: column;\n\t\tgap: 0;\n\t\tflex:content;\n\t\talign-content: flex-start;\n\t}\n\n\t.details-wrapper {\n\t\tgrid-template-rows: auto 1fr auto auto;\n\t\theight: auto;\n\t\twidth:100%;\n\t}\n\n\t.cs-wrapper {\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t}\n\n\t.temp-wrapper {\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\n\t.temp-icon-wrapper {\n\t\tjustify-content: center;\n\t}\n\n\t.city-state {\n\t\tfont-size: 1rem;\n\t\tmargin-left: 0;\n\t}\n\n\t.country {\n\t\ttext-align: center;\n\t\tmargin-left: 0;\n\t}\n\n\t.w-icon-small {\n\t\twidth: 15%;\n\t}\n\n\t.favorites-container {\n\t\twidth:0px;\n\t\theight: 0px;\n\t\toverflow-x:hidden;\n\t\ttransition: all 1s;\n\t\tborder-radius: 0;\n\t\tborder:none;\n\t\tbackground-color: #010003ea;\n\t}\n\n\t.favorites-container h1 {\n\t\tfont-size: 1rem;\n\t}\n\n\t#ticker {\n\t\theight:100%;\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.ticker-text {\n\t\tflex-direction: column;\n\t\tanimation: none;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twhite-space: normal;\n\t\tgap:0;\n\t}\n\n\t.ticker-text li {\n\t\tborder-top: 1px solid black;\n\t\tpadding-right: 0;\n\t\tpadding-top: .4rem;\n\t\tpadding-bottom: .4rem;\n\t\tborder-right: none;\n\t\theight: 1.5rem;\n\t\tdisplay:flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 1rem;\n\t}\n\n\t.ticker-text li:first-of-type {\n\t\tpadding-left: 0%;\n\t\tborder-left: none;\n\t\tborder-top: none;\n\t}\n\n\t.forecast {\n\t\theight: 0px;\n\t\twidth: 80%;\n\t\ttransition: all 2s;\n\t\tflex-direction: column;\n\t}\n\n\t.forecast-element {\n\t\tflex-direction: row;\n\t\twidth: 90%;\n\t\theight: 35%;\n\t}\n\n\t.icon-forecast {\n\t\theight: 3rem;\n\t}\n\n\t.forecast-header {\n\t\tfont-size: 1rem;\n\t}\n\n\t.forecast-detail-wrapper {\n\t\twidth: 40%;\n\t}\n\n\t#error \t{\n\t\ttop: 110%;\n\t\tfont-size: .7rem;\n\t}\n}\n\n/* ===== Scrollbar CSS ===== */\n  /* Firefox */\n  * {\n    scrollbar-width: thin;\n    scrollbar-color: #856dad #090111;\n  }\n\n  /* Chrome, Edge, and Safari */\n  *::-webkit-scrollbar {\n    width: 4px;\n\theight: 7px;\n  }\n\n  *::-webkit-scrollbar-track {\n    background: #090111;\n  }\n\n  *::-webkit-scrollbar-thumb {\n    background-color: #856dad;\n    border-radius: 10px;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: 'futura';\n\tsrc: url('./fonts/futur.ttf');\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 12%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n:root {\n\t--main-gradient: linear-gradient(180deg, rgba(17, 1, 43, 0.842) 37%, rgba(0, 16, 59, 0.842) 99%);\n\t--svg-filter: invert(99%) sepia(3%) saturate(1%) hue-rotate(117deg) brightness(119%) contrast(100%);\n\t--main-font-color: #f5f3ff;\n\t--secondary-color: #0100031c;\n\t--tertiary-color: #1e073794;\n\t--button-color: #1E0737;\n\t--button-disabled: linear-gradient(94deg, rgba(0,0,0,1) 15%, rgba(66,66,66,1) 89%);\n\t--button-disabled-text: black;\n\t--button-gradient: linear-gradient(133deg, rgba(23,2,51,1) 15%, rgba(68,46,101,1) 89%);\n\n\t--fs-reg: clamp(.6rem, .8vw, 1rem);\n\t--fs-fore: clamp(.5rem, 1vw, 1rem);\n\t--fs-big: clamp(.8rem, 1vw, 1.5rem);\n\t--fs-font-small: clamp(.5rem, .8vw, .9rem);\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-size: cover;\n\ttransition: flex 2s;\n\tbackground: var(--main-gradient), url(./images/mountains.jpg);\n\tbackground-size: cover;\n\tfont-family: 'futura', Arial, Helvetica, sans-serif;\n}\n\nbutton {\n\tborder:none;\n\tborder-radius: 8px;\n\theight: 2rem;\n\tbackground: var(--button-gradient);\n\tcolor: var(--main-font-color);\n}\n\nbutton:hover {\n\tcursor: pointer;\n}\n\nbutton:disabled:hover {\n\tcursor: default;\n}\n\nbutton:disabled {\n\tbackground: var(--button-disabled);\n\tcolor: rgb(150, 150, 150);\n}\n\n.heading {\n\tdisplay:flex;\n\talign-items: center;\n\theight: 8vh;\n\tjustify-content: space-between;\n\tflex:none;\n}\n\n#unit-toggle {\n\tmargin-left: 1rem;\n\tpadding: 0rem;\n\tfont-size: clamp(.7rem, 1vw, 1.2rem);\n\tfont-weight: bold;\n\twidth: clamp(100px, 12.8vw, 300px);\n\theight: 40px;\n}\n\n.search-area {\n\tdisplay:flex;\n\talign-items: center;\n\tmargin-right: 1rem;\n}\n\n#search-form {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tposition:relative;\n}\n\n#search-form label {\n\tvertical-align: baseline;\n\tfont-size: 1.5rem;\n}\n\n#search-icon {\n\theight: clamp(.9rem, 1.2vw, 2rem);\n\tfilter: var(--svg-filter);\n}\n\n#search {\n\theight: 1.5rem;\n\twidth: 25vw;\n\tfont-size: var(--fs-reg);\n\tpadding: .1rem .5rem;\n\tborder-radius: .2rem;\n\tborder-style: none;\n\tborder-bottom: 2px solid rgba(0, 0, 0, 0.445);\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n\tcolor: var(--main-font-color);\n}\n\n#search::placeholder {\n\tcolor:var(--main-font-color);\n}\n\n#search:focus {\n\toutline: none;\n}\n\n#search-button {\n\twidth: 5vw;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n}\n\n#error {\n\tcolor: red;\n\tposition: absolute;\n\tleft: 10%;\n\ttop: 90%;\n\tfont-size: .8rem;\n}\n\n#mobile-faves {\n\theight: 2rem;\n\taspect-ratio: 1/1;\n\tdisplay:none;\n}\n\n.main-weather {\n\tflex: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 15%;\n}\n\n.details-wrapper{\n\theight: 300px;\n\twidth: 400px;\n\tbackground-color: rgba(207, 230, 250, 0);\n\tposition:relative;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tpadding: 1rem 50px;\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr 10%;\n\tgap: .5rem;\n}\n\n.location-wrapper {\n\theight:100%;\n\twidth: 100%;\n\tbackground-color: rgba(218, 218, 218, 0);\n\tpadding: 4px;\n\tborder-radius: 1rem;\n\tcolor:var(--main-font-color);\n}\n\n.cs-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.city-state {\n\tfont-size: var(--fs-big);\n\tword-wrap: break-word;\n\tfont-weight: 600;\n\tmargin-left: 5%;\n}\n\n.country {\n\tfont-size: var(--fs-reg);\n\tfont-weight: 600;\n\tmargin-top: 4px;\n\tmargin-left: 5%;\n}\n\n\n.temp-wrapper {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 1rem;\n\tbackground-color: #9e788f00;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tposition:relative;\n\tbox-sizing: border-box;\n\tpadding: 1rem;\n\tcolor:var(--main-font-color);\n}\n\n.temp-icon-wrapper {\n\tdisplay:flex;\n\twidth: 100%;\n\talign-items: center;\n}\n\n.w-icon-small {\n\twidth:clamp(2rem, 2vw,  200px);\n\taspect-ratio: 1 /1;\n}\n\n.last-update {\n\tpadding: 1rem 0;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\ttext-decoration: underline;\n\tfont-size: var(--fs-reg);\n}\n\n#temperature {\n\tfont-size: clamp(2rem, 4vw, 5rem);\n}\n\n#ticker {\n    height: 1.5rem;\n    width: 100%;\n    border-radius: 4px;\n\toverflow-x: hidden;\n\toverflow-y: hidden;\n\tcolor:var(--main-font-color);\n}\n\n.ticker-text {\n\tdisplay: flex;\n\tgap: 1rem;\n\talign-items: center;\n\theight: 100%;\n\tanimation: tick-right 15s linear infinite;\n\twhite-space: nowrap;\n\tfont-size: var(--fs-reg);\n}\n\n.ticker-text li {\n\twidth: 100%;\n\tpadding-right: 1rem;\n\tborder-right: 1px solid var(--main-font-color);\n}\n\n\n.ticker-text li:first-of-type {\n\tpadding-left: 1rem;\n\tborder-left: 1px solid var(--main-font-color);\n}\n\n.button-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n#show-weekly,\n#show-hourly {\n\tfont-size: var(--fs-font-small);\n}\n\n#fav-icon {\n\theight: clamp(1rem, 2vw, 5rem);\n\taspect-ratio: 1/1;\n\tfilter: var(--svg-filter);\n}\n\n#fav-icon:hover {\n\tcursor: pointer;\n}\n\n.favorites-container {\n\theight:400px;\n\twidth: 600px;\n\tflex-shrink: 1;\n\tborder-radius: 1rem;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: var(--main-font-color);\n\tbackground-color: var(--secondary-color);\n\tborder: 2px solid var(--secondary-color);\n}\n\n.favorites-container>h1 {\n\tfont-size: clamp(1rem, 2vw, 2.5rem );\n\tpadding: 1rem 1rem;\n\tborder-bottom: 1px solid black;\n}\n\n.fav-menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-auto-rows: 75px;\n\toverflow-y: auto;\n\tflex: auto;\n\tgap:1rem;\n\tpadding: 1rem;\n}\n\n.favorite {\n\twidth:100%;\n\theight:100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: var(--tertiary-color);\n\tborder-radius: 1rem;\n\ttext-align: center;\n\tposition: relative;\n\tuser-select: none;\n\tpadding: 0 .5rem;\n\tbox-sizing: border-box;\n\toverflow-y: hidden;\n\ttext-overflow: ellipsis;\n\ttransition: transform .5s ease-in;\n\tfont-size: var(--fs-reg);\n}\n\n.favorite:hover {\n\ttransform: scale(110%);\n}\n\n.remove-fav {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 7%;\n\tright:5%;\n\tfont-size: .9rem;\n\tpadding: 1px 4px;\n\tcolor: grey;\n}\n\n.remove-fav:hover{\n\tcursor: pointer;\n}\n\n.forecastwrapper {\n\theight:0vh;\n\ttransition: height .5s;\n}\n\n.collapser {\n\theight: 10%;\n\taspect-ratio: 1 / 1;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n\toverflow:hidden;\n\tbackground-image: url('./images/arrow-collapse-down.svg');\n\tfilter: var(--svg-filter);\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n}\n\n.forecast {\n\theight: 90%;\n\tdisplay: flex;\n\talign-items: center;\n\toverflow-x: auto;\n\tgap: 4vw;\n\tpadding: 0 2rem;\n\tbackground-color: rgba(0, 0, 0, 0.527);\n}\n\n.forecast-element {\n\twidth: 12%;\n\theight: 80%;\n\tbackground-color: #71677c41;\n\tcolor: var(--main-font-color);\n\tflex-shrink: 0;\n\tborder-radius: 1rem;\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.forecast-header {\n\tfont-size: var(--fs-fore);\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\n.icon-forecast {\n\tflex-shrink: 1;\n\theight: 40%;\n\taspect-ratio: 1/1;\n\tborder-radius: 1rem;\n}\n\n.forecast-detail-wrapper {\n\tborder-radius: 4px;\n\twidth:90%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: var(--fs-reg);\n\tfont-weight: bold;\n}\n\n.mobile-hour-forecast {\n\tmin-height: 200px;\n\tbackground-color: rgba(185, 220, 252, 0.623);\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 90%;\n\toverflow-x: auto;\n}\n\n@keyframes tick-right {\n\t0% {\n\t\ttransform: translateX(125%);\n\t}\n\t100% {\n\t\ttransform: translateX(-275%);\n\t}\n}\n\n@media screen and (max-width: 1280px) {\n\t.main-weather {\n\t\tgap: 5%;\n\t}\n\t.details-wrapper {\n\t\theight:250px;\n\t\tgrid-template-rows: auto 40% 10%;\n\t}\n\t.w-icon-small {\n\t\tright:30%;\n\t\ttop:1%;\n\t}\n\t.favorites-container {\n\t\tmargin-right: 4rem;\n\t\theight: 50vh;\n\t}\n\t.forecast-element {\n\t\twidth: 150px;\n\t\tpadding: 0 1rem;\n\t}\n\t#search-button {\n\t\twidth: 100px;\n\t}\n\t#search {\n\t\tfont-size: 1rem;\n\t}\n\t.fav-menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n\t\tgrid-auto-rows: 50px;\n\t}\n\n\t.remove-fav {\n\t\ttop: 5%;\n\t\tright: 3%;\n\t\tfont-size: .7rem;\n\t}\n\n\t.forecast-element {\n\t\theight: 75%;\n\t\twidth:auto;\n\t\taspect-ratio: 1 / 1;\n\t}\n\t\n\t.icon-forecast {\n\t\tflex-shrink: 1;\n\t\theight: 30%;\n\t\taspect-ratio: 1/1;\n\t\tborder-radius: 1rem;\n\t}\n}\n\n@media only screen and (max-width: 600px) {\n\tbody{\n\t\tbackground-attachment: fixed;\n\t}\n\n\t.search-area {\n\t\tmargin-right: 0;\n\t}\n\n\t#search-form {\n\t\tgap: .5rem;\n\t\twidth:100%;\n\t}\n\n\t#search-icon {\n\t\theight:1.2rem;\n\t}\n\n\t#search {\n\t\twidth: 125px;\n\t\tfont-size: .8rem;\n\t}\n\n\t#search-button {\n\t\twidth: 75px;\n\t\theight:1.5rem;\n\t}\n\n\t.main-weather {\n\t\tflex-direction: column;\n\t\tgap: 0;\n\t\tflex:content;\n\t\talign-content: flex-start;\n\t}\n\n\t.details-wrapper {\n\t\tgrid-template-rows: auto 1fr auto auto;\n\t\theight: auto;\n\t\twidth:100%;\n\t}\n\n\t.cs-wrapper {\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t}\n\n\t.temp-wrapper {\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\n\t.temp-icon-wrapper {\n\t\tjustify-content: center;\n\t}\n\n\t.city-state {\n\t\tfont-size: 1rem;\n\t\tmargin-left: 0;\n\t}\n\n\t.country {\n\t\ttext-align: center;\n\t\tmargin-left: 0;\n\t}\n\n\t.w-icon-small {\n\t\twidth: 15%;\n\t}\n\n\t.favorites-container {\n\t\twidth:0px;\n\t\theight: 0px;\n\t\toverflow-x:hidden;\n\t\ttransition: all 1s;\n\t\tborder-radius: 0;\n\t\tborder:none;\n\t\tbackground-color: #010003ea;\n\t}\n\n\t.favorites-container h1 {\n\t\tfont-size: 1rem;\n\t}\n\n\t#ticker {\n\t\theight:100%;\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.ticker-text {\n\t\tflex-direction: column;\n\t\tanimation: none;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twhite-space: normal;\n\t\tgap:0;\n\t}\n\n\t.ticker-text li {\n\t\tborder-top: 1px solid black;\n\t\tpadding-right: 0;\n\t\tpadding-top: .4rem;\n\t\tpadding-bottom: .4rem;\n\t\tborder-right: none;\n\t\theight: 1.5rem;\n\t\tdisplay:flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 1rem;\n\t}\n\n\t.ticker-text li:first-of-type {\n\t\tpadding-left: 0%;\n\t\tborder-left: none;\n\t\tborder-top: none;\n\t}\n\n\t.forecast {\n\t\theight: 0px;\n\t\twidth: 80%;\n\t\ttransition: all 2s;\n\t\tflex-direction: column;\n\t}\n\n\t.forecast-element {\n\t\tflex-direction: row;\n\t\twidth: 90%;\n\t\theight: 35%;\n\t}\n\n\t.icon-forecast {\n\t\theight: 3rem;\n\t}\n\n\t.forecast-header {\n\t\tfont-size: 1rem;\n\t}\n\n\t.forecast-detail-wrapper {\n\t\twidth: 40%;\n\t}\n\n\t#error \t{\n\t\ttop: 110%;\n\t\tfont-size: .7rem;\n\t}\n}\n\n/* ===== Scrollbar CSS ===== */\n  /* Firefox */\n  * {\n    scrollbar-width: thin;\n    scrollbar-color: #856dad #090111;\n  }\n\n  /* Chrome, Edge, and Safari */\n  *::-webkit-scrollbar {\n    width: 4px;\n\theight: 7px;\n  }\n\n  *::-webkit-scrollbar-track {\n    background: #090111;\n  }\n\n  *::-webkit-scrollbar-thumb {\n    background-color: #856dad;\n    border-radius: 10px;\n  }"],"sourceRoot":""}]);
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

/***/ "./src/images/arrow-collapse-down.svg":
/*!********************************************!*\
  !*** ./src/images/arrow-collapse-down.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eafc0e600c04acefc1aa.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxh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QixDQUFDO0VBQ2xFLElBQUksQ0FBQzZJLGNBQWMsRUFBRTtJQUNqQmQsYUFBYSxDQUFDekgsS0FBSyxDQUFDQyxNQUFNLEdBQUcsTUFBTTtJQUNuQ3NJLGNBQWMsR0FBRyxJQUFJO0lBQ3JCO0VBQ0o7RUFFQWQsYUFBYSxDQUFDekgsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRztFQUNoQ3NJLGNBQWMsR0FBRyxLQUFLO0VBQ3RCO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvY2xlYW5VcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbGxhcHNlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2xvY2FsSGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NldFdlYXRoZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9iYWNrZ3JvdW5kQ29udHJvbC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvZmF2TWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvbG9hZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvd2luU2l6ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvbG9hZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvbG9hZGVyLmNzcz85NWNiIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmZ1bmN0aW9uIG1ha2VEYWlseUZvcmVjYXN0RWxlbWVudChkKSB7XG4gICAgLy9HaXZlbiBkYXksIHJldHVybiBkaXYgY29udGFpbmluZyB3ZWF0aGVyIGluZm8gZm9yIHRoZSBkYXkgb2YgdGhlIHdlZWtcbiAgICBsZXQgZm9yZWNhc3RfZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vXG4gICAgZm9yZWNhc3RfZWxlLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWVsZW1lbnQnKTsgLy9cbiAgICBcbiAgICBsZXQgZGF0ZSA9IGRheWpzKGQuZGF0ZSwgJ1lZWVktTU1NTS1EJyk7IC8vXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZENoaWxkKHNldEZvcmVjYXN0SGVhZGVyKGRhdGUuZm9ybWF0KCdkZGRkJykpKTtcblxuICAgIGZvcmVjYXN0X2VsZS5hcHBlbmQoc2V0Q29uZGl0aW9uSW1hZ2UoZC5kYXkuY29uZGl0aW9uLmljb24pKTtcblxuICAgIGZvcmVjYXN0X2VsZS5hcHBlbmQoc2V0VGVtcGVyYXR1cmVEZXRhaWwoYCR7TWF0aC5yb3VuZChkLmRheS5taW50ZW1wX2YpfcKwRiAvICR7TWF0aC5yb3VuZChkLmRheS5tYXh0ZW1wX2YpfcKwRmAsXG4gICAgIGAke01hdGgucm91bmQoZC5kYXkubWludGVtcF9jKX3CsEMgLyAke01hdGgucm91bmQoZC5kYXkubWF4dGVtcF9jKX3CsENgKSk7XG5cbiAgICByZXR1cm4gZm9yZWNhc3RfZWxlO1xufVxuXG5mdW5jdGlvbiBtYWtlSG91cmx5Rm9yZWNhc3RFbGVtZW50KHQpIHtcbiAgICBsZXQgZm9yZWNhc3RfZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWNhc3RfZWxlLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWVsZW1lbnQnKTtcbiAgICBcbiAgICBsZXQgaG91ciA9IGRheWpzKHQudGltZSwgJ1lZWVktTU1NTS1EJyk7XG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZENoaWxkKHNldEZvcmVjYXN0SGVhZGVyKGhvdXIuZm9ybWF0KCdkZGRkLCBoOm1tIEEnKSkpO1xuXG4gICAgZm9yZWNhc3RfZWxlLmFwcGVuZENoaWxkKHNldENvbmRpdGlvbkltYWdlKHQuY29uZGl0aW9uLmljb24pKTtcblxuICAgIGZvcmVjYXN0X2VsZS5hcHBlbmRDaGlsZChzZXRUZW1wZXJhdHVyZURldGFpbChgJHtNYXRoLnJvdW5kKHQudGVtcF9mKX3CsCBGYCwgXG4gICAgICAgIGAke01hdGgucm91bmQodC50ZW1wX2MpfcKwIENgKSk7XG5cbiAgICByZXR1cm4gZm9yZWNhc3RfZWxlO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlSG91cnMoZCkge1xuICAgIGxldCBjdXJyZW50X2RhdGV0aW1lID0gZC5jdXJyZW50Lmxhc3RfdXBkYXRlZDtcbiAgICBjdXJyZW50X2RhdGV0aW1lID0gZGF5anMoY3VycmVudF9kYXRldGltZSwgJ1lZWVktTU1NTS1EJyk7XG4gICAgXG4gICAgbGV0IHN0YXJ0ID0gTnVtYmVyKGN1cnJlbnRfZGF0ZXRpbWUuZm9ybWF0KCdISCcpKSArIDE7XG4gICAgbGV0IGRheV9pbmR4ID0gMDtcbiAgICBsZXQgaG91cl9hcnIgPSBbXTtcbiAgICBcbiAgICBmb3IobGV0IGxpbWl0ID0gMjQ7IGxpbWl0ID4gMDsgbGltaXQtLSkge1xuICAgICAgICBpZiAoc3RhcnQgPiAyMykge1xuICAgICAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICAgICAgZGF5X2luZHgrKztcbiAgICAgICAgfVxuICAgICAgICBob3VyX2Fyci5wdXNoKGQuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5X2luZHhdLmhvdXJbc3RhcnRdKTtcbiAgICAgICAgc3RhcnQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gaG91cl9hcnI7XG59XG5cbmZ1bmN0aW9uIHNldEZvcmVjYXN0SGVhZGVyKGgpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gaDtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBzZXRDb25kaXRpb25JbWFnZShpKSB7XG4gICAgbGV0IGNvbmRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uZF9pbWcuc3JjID0gaVxuICAgIGNvbmRfaW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24tZm9yZWNhc3QnKTtcbiAgICByZXR1cm4gY29uZF9pbWc7XG59XG5cbmZ1bmN0aW9uIHNldFRlbXBlcmF0dXJlRGV0YWlsKGYsIGMpIHtcbiAgICBsZXQgdGVtcF93cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRlbXBfd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1kZXRhaWwtd3JhcHBlcicpO1xuXG4gICAgbGV0IGRldGFpbHNfZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXRhaWxzX2YuY2xhc3NMaXN0LmFkZCgnZmFocmVuaGVpdCcpO1xuICAgIGRldGFpbHNfZi50ZXh0Q29udGVudCA9IGY7XG5cbiAgICBsZXQgZGV0YWlsc19jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRldGFpbHNfYy5jbGFzc0xpc3QuYWRkKCdjZWxzaXVzJyk7XG4gICAgZGV0YWlsc19jLnRleHRDb250ZW50ID0gYztcblxuICAgIHRlbXBfd3JhcHBlci5hcHBlbmQoZGV0YWlsc19mLCBkZXRhaWxzX2MpO1xuICAgIHJldHVybiB0ZW1wX3dyYXBwZXI7XG59XG5cbmV4cG9ydCB7IG1ha2VEYWlseUZvcmVjYXN0RWxlbWVudCwgbWFrZUhvdXJseUZvcmVjYXN0RWxlbWVudCwgY29tcHV0ZUhvdXJzIH07IiwiZnVuY3Rpb24gY2xlYXJGb3JlY2FzdENvbnRhaW5lcigpIHtcbiAgICBsZXQgZm9yZWNhc3RfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG4gICAgd2hpbGUoZm9yZWNhc3RfY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZm9yZWNhc3RfY29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IHsgY2xlYXJGb3JlY2FzdENvbnRhaW5lciB9OyIsImZ1bmN0aW9uIGNvbGxhcHNlRm9yZWNhc3QoZXZlbnQpIHtcbiAgICBsZXQgZm9yZWNhc3Rfd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdHdyYXBwZXInKTtcbiAgICBmb3JlY2FzdF93cmFwcGVyLnN0eWxlLmhlaWdodCA9ICcwdmgnO1xuICAgIGxldCBjb2xsYXBzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGFwc2VyJyk7XG4gICAgY29sbGFwc2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgY29sbGFwc2VGb3JlY2FzdCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1ob3VybHknKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXdlZWtseScpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBjb2xsYXBzZUZvcmVjYXN0IH07IiwiZnVuY3Rpb24gc2V0Q3VycmVudExvY2FsKHEpIHtcbiAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudCcsIHEpO1xuICAgIH1cbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBzZXRDdXJyZW50TG9jYWwgfTsiLCJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmZ1bmN0aW9uIHNldExvY2F0aW9uIChjLCBzLCBjb3VudHJ5KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktc3RhdGUnKS50ZXh0Q29udGVudCA9IGAke2N9LCAke3N9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyeScpLnRleHRDb250ZW50ID0gYCR7Y291bnRyeX1gO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gc2V0VGVtcCh0KSB7XG4gICAgbGV0IHRlbXBfZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG4gICAgdGVtcF9lbGUudGV4dENvbnRlbnQgPSBgJHt0fWA7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBzZXREYXRlKGQpIHtcbiAgICBsZXQgZGF0ZSA9IGRheWpzKGQsICdZWVlZLU1NTU0tRCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LXVwZGF0ZScpLnRleHRDb250ZW50ID0gYFVwZGF0ZWQ6ICR7ZGF0ZS5mb3JtYXQoJ2RkZGQsIGg6bW0gQScpfWA7XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBzZXRMb2NhdGlvbiwgc2V0VGVtcCwgc2V0RGF0ZSB9OyIsImZ1bmN0aW9uIHNldFRpY2tlclRleHQoZGF0YSkge1xuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoc2V0Q29uZGl0aW9uKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCkpO1xuICAgIHVsLmFwcGVuZENoaWxkKHNldFJlYWxGZWVsKGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZikpO1xuICAgIHVsLmFwcGVuZENoaWxkKHNldEh1bWlkaXR5KGRhdGEuY3VycmVudC5odW1pZGl0eSkpO1xuICAgIHVsLmFwcGVuZENoaWxkKHNldFdpbmRTcGVlZChkYXRhLmN1cnJlbnQud2luZF9rcGgpKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCd0aWNrZXItdGV4dCcpO1xuICAgIHJldHVybiB1bDtcbn1cblxuZnVuY3Rpb24gc2V0Q29uZGl0aW9uKGMpIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLnRleHRDb250ZW50ID0gYENvbmRpdGlvbjogJHtjfWA7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBzZXRIdW1pZGl0eShoKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtofSVgO1xuICAgIHJldHVybiBsaTtcbn1cblxuZnVuY3Rpb24gc2V0V2luZFNwZWVkKHcpIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d30ga20vaGA7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBzZXRSZWFsRmVlbChmKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2Z9IMKwRmA7XG4gICAgbGkuaWQgPSAnZmVlbCc7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5leHBvcnQgeyBzZXRUaWNrZXJUZXh0IH07IiwiaW1wb3J0IHsgc2V0VGlja2VyVGV4dCB9IGZyb20gXCIuL3RpY2tlclwiO1xuaW1wb3J0IHBsYWNlaG9sZGVyIGZyb20gJy4vLi4vaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZyc7XG5pbXBvcnQgeyBzZXREYXRlLCBzZXRMb2NhdGlvbiwgc2V0VGVtcCB9IGZyb20gXCIuL3NldFdlYXRoZXJIZWxwZXJcIjtcbmltcG9ydCB7IGRpc3BsYXlMb2FkZXIsIHJlbW92ZUxvYWRlciB9IGZyb20gXCIuL3dpZGdldHMvbG9hZFwiO1xuaW1wb3J0IHsgbWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50LCBjb21wdXRlSG91cnMsIG1ha2VIb3VybHlGb3JlY2FzdEVsZW1lbnQgIH0gZnJvbSBcIi4vRm9yZWNhc3RcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRMb2NhbCB9IGZyb20gXCIuL2xvY2FsSGFuZGxlclwiO1xuaW1wb3J0IHsgY2xlYXJGb3JlY2FzdENvbnRhaW5lciB9IGZyb20gXCIuL2NsZWFuVXBcIjtcbmltcG9ydCB7IGJhY2tncm91bmRTd2l0Y2ggfSBmcm9tIFwiLi93aWRnZXRzL2JhY2tncm91bmRDb250cm9sXCI7XG5pbXBvcnQgeyBjb2xsYXBzZUZvcmVjYXN0IH0gZnJvbSBcIi4vY29sbGFwc2VyXCI7XG5cblxubGV0IHJlcXVlc3QgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MWIwNTQ5NzJjYjM4NGQ3ODljNTE5NTIwMjIzMTUwNSZxPSc7XG5sZXQgcmVxX2V4dHJhID0gJyZkYXlzPTUmYXFpPW5vJmFsZXJ0cz1ubydcbmxldCBkYXRhID0ge307XG5sZXQgZGFpbHlfZm9yZWNhc3QgPSBbXTtcbmxldCBob3VybHlfZm9yZWNhc3QgPSBbXTtcbmxldCBmYWhyZW5oZWl0ID0gdHJ1ZTtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKHEpIHtcbiAgICBkaXNwbGF5TG9hZGVyKCk7XG4gICAgbGV0IGVfc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xuICAgIHRyeXtcbiAgICAgICAgLy9Mb2FkaW5nIGNvbXBvbmVudCBzdHVmZiBoZXJlXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QgKyBxICsgcmVxX2V4dHJhLCB7J21vZGUnOiAnY29ycyd9KTtcbiAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0V2VhdGhlcigpO1xuICAgICAgICBiYWNrZ3JvdW5kU3dpdGNoKE51bWJlcihkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGUpKTtcbiAgICAgICAgY2xlYXJGb3JlY2FzdENvbnRhaW5lcigpO1xuICAgICAgICBnZXREYWlseUZvcmVjYXN0KCk7XG4gICAgICAgIGdldEhvdXJseUZvcmVjYXN0KCk7XG4gICAgICAgIHNob3dGb3JlY2FzdCgpO1xuICAgICAgICBzZXRDdXJyZW50TG9jYWwocSk7XG4gICAgICAgIGVfc3Bhbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgICBlX3NwYW4udGV4dENvbnRlbnQgPSAnQ2Fubm90IGZpbmQgYSBtYXRjaGluZyBsb2NhdGlvbi4nO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICAgIHJlbW92ZUxvYWRlcigpO1xufVxuXG5mdW5jdGlvbiBzZXRXZWF0aGVyKCkge1xuICAgIHNldExvY2F0aW9uKGRhdGEubG9jYXRpb24ubmFtZSwgZGF0YS5sb2NhdGlvbi5yZWdpb24sIGRhdGEubG9jYXRpb24uY291bnRyeSk7XG4gICAgc2V0VGVtcCgoZmFocmVuaGVpdCA/IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfZil9IMKwRmAgOiBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wX2MpfSDCsENgKSk7XG4gICAgc2V0RGF0ZShkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkKTtcbiAgICBsZXQgdGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpY2tlcicpO1xuICAgIGlmKHRpY2tlci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRpY2tlci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICB0aWNrZXIuYXBwZW5kQ2hpbGQoc2V0VGlja2VyVGV4dChkYXRhKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnctaWNvbi1zbWFsbCcpLnNyYyA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbn1cblxuXG5mdW5jdGlvbiBnZXREYWlseUZvcmVjYXN0KCkge1xuICAgIGRhaWx5X2ZvcmVjYXN0ID0gW107XG4gICAgbGV0IGZvcmVjYXN0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICAoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheSkuZm9yRWFjaChkYXkgPT4ge1xuICAgICAgICBkYWlseV9mb3JlY2FzdC5wdXNoKG1ha2VEYWlseUZvcmVjYXN0RWxlbWVudChkYXkpKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJseUZvcmVjYXN0KCkge1xuICAgIGhvdXJseV9mb3JlY2FzdCA9IFtdO1xuICAgIGxldCBmb3JlY2FzdF9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG4gICAgbGV0IGhvdXJzID0gY29tcHV0ZUhvdXJzKGRhdGEpO1xuICAgIGhvdXJzLmZvckVhY2godGljayA9PiB7XG4gICAgICAgIGhvdXJseV9mb3JlY2FzdC5wdXNoKG1ha2VIb3VybHlGb3JlY2FzdEVsZW1lbnQodGljaykpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gc2hvd0ZvcmVjYXN0KCkge1xuICAgIGxldCBmb3JlY2FzdF93cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0d3JhcHBlcicpO1xuICAgIGxldCBmb3JlY2FzdF9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG4gICAgbGV0IGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LWhvdXJseScpO1xuICAgIGxldCB3ZWVrbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy13ZWVrbHknKTtcblxuICAgIGNsZWFyRm9yZWNhc3RDb250YWluZXIoKTtcblxuICAgIGlmKHdlZWtseS5kaXNhYmxlZCkge1xuICAgICAgICBmb3JlY2FzdF9zZWN0aW9uLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG4gICAgICAgIGRhaWx5X2ZvcmVjYXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBmb3JlY2FzdF9zZWN0aW9uLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYoaG91cmx5LmRpc2FibGVkKSB7XG4gICAgICAgIGZvcmVjYXN0X3NlY3Rpb24uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XG4gICAgICAgIGhvdXJseV9mb3JlY2FzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZm9yZWNhc3Rfc2VjdGlvbi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfSlcbiAgICB9ZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihmYWhyZW5oZWl0KSB7XG4gICAgICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxzaXVzJykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFocmVuaGVpdCcpKSkuZm9yRWFjaChlbGUgPT57XG4gICAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZvcmVjYXN0X3dyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gJzI1dmgnO1xuICAgIGxldCBjb2xsYXBzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGFwc2VyJyk7XG4gICAgY29sbGFwc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgY29sbGFwc2VGb3JlY2FzdCk7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hVbml0cygpIHtcbiAgICBmYWhyZW5oZWl0ID0gIWZhaHJlbmhlaXQ7XG4gICAgbGV0IHRlbXBfZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG4gICAgbGV0IGZlZWxfZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWwnKTtcbiAgICBpZihmYWhyZW5oZWl0KSB7XG4gICAgICAgIHRlbXBfZWxlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcF9mKX0gwrBGYDtcbiAgICAgICAgZmVlbF9lbGUudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZil9IMKwRmA7XG4gICAgICAgIFxuICAgICAgICAvL1RoaXMgaXMgdWdseSwgYnV0IGZvciBjdXJyZW50IGxhY2sgb2YgYSBiZXR0ZXIgc29sdXRpb24sIGl0IHdvcmtzXG4gICAgICAgIC8vSG9wZWZ1bGx5IHdpdGhvdXQgYnJlYWtpbmcuIDIzIE1heSwgMjAyMyAxNDo1OVxuICAgICAgICAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFocmVuaGVpdCcpKSkuZm9yRWFjaChlbGUgPT57XG4gICAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB9KTtcblxuICAgICAgICAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Vsc2l1cycpKSkuZm9yRWFjaChlbGUgPT57XG4gICAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjsgXG4gICAgfVxuICAgIHRlbXBfZWxlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcF9jKX0gwrBDYDtcbiAgICBmZWVsX2VsZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jKX0gwrBDYDtcblxuICAgIChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWhyZW5oZWl0JykpKS5mb3JFYWNoKGVsZSA9PntcbiAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Vsc2l1cycpKSkuZm9yRWFjaChlbGUgPT57XG4gICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBob3VybHlfZm9yZWNhc3QsIGZldGNoV2VhdGhlciwgc3dpdGNoVW5pdHMsIGdldERhaWx5Rm9yZWNhc3QsIGdldEhvdXJseUZvcmVjYXN0LCBzaG93Rm9yZWNhc3QgfTsiLCJpbXBvcnQgY2xlYXIgZnJvbSAnLi4vLi4vaW1hZ2VzL2NsZWFyLmpwZyc7XG5pbXBvcnQgZHJpenpsZSBmcm9tICcuLi8uLi9pbWFnZXMvZHJpenpsZS5qcGcnO1xuaW1wb3J0IGNsb3VkeSBmcm9tICcuLi8uLi9pbWFnZXMvY2xvdWR5LmpwZyc7XG5pbXBvcnQgcmFpbiBmcm9tICcuLi8uLi9pbWFnZXMvcmFpbi5qcGcnO1xuaW1wb3J0IHNub3cgZnJvbSAnLi4vLi4vaW1hZ2VzL3Nub3cuanBnJztcbmltcG9ydCB0aHVuZGVyIGZyb20gJy4uLy4uL2ltYWdlcy90aHVuZGVyLXN0b3JtLmpwZyc7XG5cbmZ1bmN0aW9uIGJhY2tncm91bmRTd2l0Y2goY2MpIHtcbiAgICBsZXQgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgLy8gaWYoY2MgPiA5OTkgJiYgY2MgPD0gMTAwMykge1xuICAgIC8vICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2xlYXJ9YDtcbiAgICAvLyB9IGVsc2UgaWYgKChjYyA+IDEwMDMgJiYgY2MgPD0gMTA4NykgfHwgKGNjID4gMTEzNCAmJiBjYyA8PSAxMTQ3KSkge1xuICAgIC8vICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2xvdWR5fWA7XG4gICAgLy8gfSBlbHNlIGlmIChjYyA+IDExNDkgJiYgY2MgPD0gMTE3Mikge1xuICAgIC8vICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZHJpenpsZX1gO1xuICAgIC8vIH0gZWxzZSBpZiAoKGNjID4gMTE3OSAmJiBjYyA8PSAxMjA3KSB8fCAoY2MgPiAxMjM5ICYmIGNjIDw9IDEyNjQpKSB7XG4gICAgLy8gICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyYWlufWA7XG4gICAgLy8gfSBlbHNlIGlmIChjYyA+IDEyMDkgJiYgY2MgPD0gMTIzNykge1xuICAgIC8vICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c25vd31gO1xuICAgIC8vIH0gZWxzZSBpZiAoY2MgPiAxMjcyICYmIGNjIDw9IDEyODIpIHtcbiAgICAvLyAgICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RodW5kZXJ9YDtcbiAgICAvLyB9IGVsc2V7XG4gICAgLy8gICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbG91ZHl9YDtcbiAgICAvLyB9XG59XG5cbmV4cG9ydCB7IGJhY2tncm91bmRTd2l0Y2ggfTsiLCJpbXBvcnQgeyBmZXRjaFdlYXRoZXIgfSBmcm9tIFwiLi4vd2VhdGhlclwiO1xuXG5sZXQgZmF2b3JpdGVzID0gW107XG4vL0NoZWNrIGxvY2FsIHN0b3JhZ2UgZm9yIGV4aXN0aW5nIGZhdm9yaXRlcywgaWYgdGhleSBkb24ndCBleGlzdCwgc2V0IGZhdm9yaXRlcyB0byBlbXB0eSBhcnJheVxuaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnZmF2cycpKSB7XG4gICAgZmF2b3JpdGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2cycpKTtcbn1cblxuZnVuY3Rpb24gc2V0TmV3RmF2b3JpdGUoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktc3RhdGUnKS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBpZihmYXZvcml0ZXMuaW5jbHVkZXMocXVlcnkpKSB7XG4gICAgICAgIGFsZXJ0KCdUaGlzIGlzIGFscmVhZHkgZmF2b3JpdGVkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmF2b3JpdGVzLnB1c2gocXVlcnkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZzJywgSlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVzKSk7XG4gICAgXG4gICAgbGV0IG5ld19lbGUgPSBuZXdGYXZFbGVtZW50KHF1ZXJ5KTtcbiAgICBuZXdfZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmF2Q2xpY2tIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LW1lbnUnKS5hcHBlbmRDaGlsZChuZXdfZWxlKTtcbiAgICBcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRmF2b3JpdGVzKCkge1xuICAgIGxldCBmYXZfbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtbWVudScpO1xuICAgIFxuICAgIGZhdm9yaXRlcy5mb3JFYWNoKGZhdiA9PiB7XG4gICAgICAgIGxldCBmYXZfZWxlID0gbmV3RmF2RWxlbWVudChmYXYpXG4gICAgICAgIGZhdl9lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYXZDbGlja0hhbmRsZXIpO1xuICAgICAgICBmYXZfbWVudS5hcHBlbmRDaGlsZChmYXZfZWxlKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm47XG59XG5cblxuZnVuY3Rpb24gbmV3RmF2RWxlbWVudChmYXYpIHtcbiAgICBsZXQgZmF2X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZhdl9kaXYudGV4dENvbnRlbnQgPSBmYXY7XG4gICAgZmF2X2Rpdi5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZScpO1xuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ+KdjCc7XG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWZhdicpO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRmF2RXZlbnRIYW5kbGVyKTtcbiAgICBmYXZfZGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICByZXR1cm4gZmF2X2Rpdjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRmF2RXZlbnRIYW5kbGVyKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGxldCBmYXZfaW5keCA9IGZhdm9yaXRlcy5pbmRleE9mKHBhcmVudC50ZXh0Q29udGVudC5zbGljZSgwLCAtMSkpO1xuXG4gICAgZmF2b3JpdGVzLnNwbGljZShmYXZfaW5keCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZhdnMnLCBKU09OLnN0cmluZ2lmeShmYXZvcml0ZXMpKTtcbiAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUZhdkV2ZW50SGFuZGxlcik7XG4gICAgcGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmF2Q2xpY2tIYW5kbGVyKTtcbiAgICBwYXJlbnQucmVtb3ZlKCk7XG5cbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2cycpKTtcbiAgICByZXR1cm47ICAgXG59XG5cbmZ1bmN0aW9uIGZhdkNsaWNrSGFuZGxlcihlKSB7XG4gICAgZmV0Y2hXZWF0aGVyKGVuY29kZVVSSUNvbXBvbmVudChlLnRhcmdldC50ZXh0Q29udGVudCkpO1xufVxuXG4vL2RlYnVnXG4vLyBmdW5jdGlvbiBjbGVhckZhdm9yaXRlcygpIHtcbi8vICAgICBmYXZvcml0ZXMgPSBbXTtcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2cycsIEpTT04uc3RyaW5naWZ5KGZhdm9yaXRlcykpO1xuLy8gICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZzJykpO1xuLy8gfVxuXG5leHBvcnQgeyBzZXROZXdGYXZvcml0ZSwgcG9wdWxhdGVGYXZvcml0ZXMgfTsiLCJmdW5jdGlvbiBkaXNwbGF5TG9hZGVyKCkge1xuICAgIGxldCBkaW1tZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaW1tZXIuY2xhc3NMaXN0LmFkZCgnZGltbWVyJyk7XG4gICAgbGV0IHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2xkcy1yaXBwbGUnKTtcbiAgICBzcGlubmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgZGltbWVyLmFwcGVuZENoaWxkKHNwaW5uZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChkaW1tZXIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMb2FkZXIoKSB7XG4gICAgbGV0IHNwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGRzLXJpcHBsZScpO1xuICAgIHdoaWxlKHNwaW5uZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBzcGlubmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHNwaW5uZXIucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpbW1lcicpLnJlbW92ZSgpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5TG9hZGVyLCByZW1vdmVMb2FkZXIgfTsiLCJpbXBvcnQgeyBob3VybHlfZm9yZWNhc3QgfSBmcm9tIFwiLi4vd2VhdGhlclwiO1xuXG5sZXQgd2luT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgZm9yKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKCBlbnRyeS50YXJnZXQuY2xpZW50V2lkdGggPCA2MDAgKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYXJlYScpO1xuICAgICAgICAgICAgbGV0IHRhcmdldF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13ZWF0aGVyJyk7IFxuICAgICAgICAgICAgdGFyZ2V0X2Rpdi5wcmVwZW5kKHNlYXJjaF9kaXYpO1xuICAgICAgICAgICAgbGV0IGZvcmVjYXN0X3NlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICAgICAgICAgIHRhcmdldF9kaXYuYXBwZW5kKGZvcmVjYXN0X3NlY3QpO1xuICAgICAgICAgICAgbGV0IGZhdl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLWZhdmVzJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLWZhdmVzJykuY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGZhdl9jb250YWluZXIuc3R5bGUudG9wID0gYDh2aGA7XG4gICAgICAgICAgICBmYXZfY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtlbnRyeS50YXJnZXQuY2xpZW50V2lkdGggLSAyMDB9cHhgO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAyMDBweGA7XG4gICAgICAgIH07XG4gICAgICAgIGlmICggZW50cnkudGFyZ2V0LmNsaWVudFdpZHRoID4gNjAwKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYXJlYScpO1xuICAgICAgICAgICAgbGV0IHRhcmdldF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpOyBcbiAgICAgICAgICAgIHRhcmdldF9kaXYuYXBwZW5kKHNlYXJjaF9kaXYpO1xuICAgICAgICAgICAgbGV0IGZvcmVjYXN0X3NlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdHdyYXBwZXInKS5hcHBlbmQoZm9yZWNhc3Rfc2VjdCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbGUtZmF2ZXMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbGV0IGZhdl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZmF2X2NvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIH07XG4gICAgICAgIC8vZW50cnkudGFyZ2V0LmNsaWVudFdpZHRoIDwgODAwID8gbW9iaWxlX29uID0gdHJ1ZSA6IG1vYmlsZV9vbiA9IGZhbHNlO1xuICAgIH1cbn0pXG5cbndpbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSk7XG5cbmV4cG9ydCB7d2luT2JzZXJ2ZXJ9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypDcmVkaXRzOiAubGRzLXJpcHBsZSBmcm9tIGh0dHBzOi8vbG9hZGluZy5pby9jc3MvKi9cXG5cXG4uZGltbWVyIHtcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgbWluLXdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuLmxkcy1yaXBwbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDQuOSUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDUlIHtcXG4gICAgICB0b3A6IDM2cHg7XFxuICAgICAgbGVmdDogMzZweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgd2lkdGg6IDcycHg7XFxuICAgICAgaGVpZ2h0OiA3MnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL2xvYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0RBQW9EOztBQUVwRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw4REFBOEQ7RUFDaEU7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0U7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxRQUFRO01BQ1IsU0FBUztNQUNULFdBQVc7TUFDWCxZQUFZO01BQ1osVUFBVTtJQUNaO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypDcmVkaXRzOiAubGRzLXJpcHBsZSBmcm9tIGh0dHBzOi8vbG9hZGluZy5pby9jc3MvKi9cXG5cXG4uZGltbWVyIHtcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgbWluLXdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuLmxkcy1yaXBwbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gIH1cXG4gIC5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDQuOSUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDUlIHtcXG4gICAgICB0b3A6IDM2cHg7XFxuICAgICAgbGVmdDogMzZweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgd2lkdGg6IDcycHg7XFxuICAgICAgaGVpZ2h0OiA3MnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvZnV0dXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbW91bnRhaW5zLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Fycm93LWNvbGxhcHNlLWRvd24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ2Z1dHVyYSc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEyJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuXFx0LS1tYWluLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE3LCAxLCA0MywgMC44NDIpIDM3JSwgcmdiYSgwLCAxNiwgNTksIDAuODQyKSA5OSUpO1xcblxcdC0tc3ZnLWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMyUpIHNhdHVyYXRlKDElKSBodWUtcm90YXRlKDExN2RlZykgYnJpZ2h0bmVzcygxMTklKSBjb250cmFzdCgxMDAlKTtcXG5cXHQtLW1haW4tZm9udC1jb2xvcjogI2Y1ZjNmZjtcXG5cXHQtLXNlY29uZGFyeS1jb2xvcjogIzAxMDAwMzFjO1xcblxcdC0tdGVydGlhcnktY29sb3I6ICMxZTA3Mzc5NDtcXG5cXHQtLWJ1dHRvbi1jb2xvcjogIzFFMDczNztcXG5cXHQtLWJ1dHRvbi1kaXNhYmxlZDogbGluZWFyLWdyYWRpZW50KDk0ZGVnLCByZ2JhKDAsMCwwLDEpIDE1JSwgcmdiYSg2Niw2Niw2NiwxKSA4OSUpO1xcblxcdC0tYnV0dG9uLWRpc2FibGVkLXRleHQ6IGJsYWNrO1xcblxcdC0tYnV0dG9uLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTMzZGVnLCByZ2JhKDIzLDIsNTEsMSkgMTUlLCByZ2JhKDY4LDQ2LDEwMSwxKSA4OSUpO1xcblxcblxcdC0tZnMtcmVnOiBjbGFtcCguNnJlbSwgLjh2dywgMXJlbSk7XFxuXFx0LS1mcy1mb3JlOiBjbGFtcCguNXJlbSwgMXZ3LCAxcmVtKTtcXG5cXHQtLWZzLWJpZzogY2xhbXAoLjhyZW0sIDF2dywgMS41cmVtKTtcXG5cXHQtLWZzLWZvbnQtc21hbGw6IGNsYW1wKC41cmVtLCAuOHZ3LCAuOXJlbSk7XFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0dHJhbnNpdGlvbjogZmxleCAycztcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWdyYWRpZW50KSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGZvbnQtZmFtaWx5OiAnZnV0dXJhJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRib3JkZXI6bm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ncmFkaWVudCk7XFxuXFx0Y29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tZGlzYWJsZWQpO1xcblxcdGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcblxcbi5oZWFkaW5nIHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDh2aDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleDpub25lO1xcbn1cXG5cXG4jdW5pdC10b2dnbGUge1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdHBhZGRpbmc6IDByZW07XFxuXFx0Zm9udC1zaXplOiBjbGFtcCguN3JlbSwgMXZ3LCAxLjJyZW0pO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHdpZHRoOiBjbGFtcCgxMDBweCwgMTIuOHZ3LCAzMDBweCk7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uc2VhcmNoLWFyZWEge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4jc2VhcmNoLWZvcm0gbGFiZWwge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI3NlYXJjaC1pY29uIHtcXG5cXHRoZWlnaHQ6IGNsYW1wKC45cmVtLCAxLjJ2dywgMnJlbSk7XFxuXFx0ZmlsdGVyOiB2YXIoLS1zdmctZmlsdGVyKTtcXG59XFxuXFxuI3NlYXJjaCB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0d2lkdGg6IDI1dnc7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcblxcdHBhZGRpbmc6IC4xcmVtIC41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ0NSk7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuI3NlYXJjaDo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOnZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbiNzZWFyY2g6Zm9jdXMge1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZWFyY2gtYnV0dG9uIHtcXG5cXHR3aWR0aDogNXZ3O1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jZXJyb3Ige1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDEwJTtcXG5cXHR0b3A6IDkwJTtcXG5cXHRmb250LXNpemU6IC44cmVtO1xcbn1cXG5cXG4jbW9iaWxlLWZhdmVzIHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0ZGlzcGxheTpub25lO1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyIHtcXG5cXHRmbGV4OiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDE1JTtcXG59XFxuXFxuLmRldGFpbHMtd3JhcHBlcntcXG5cXHRoZWlnaHQ6IDMwMHB4O1xcblxcdHdpZHRoOiA0MDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgMjMwLCAyNTAsIDApO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwYWRkaW5nOiAxcmVtIDUwcHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDEwJTtcXG5cXHRnYXA6IC41cmVtO1xcbn1cXG5cXG4ubG9jYXRpb24td3JhcHBlciB7XFxuXFx0aGVpZ2h0OjEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTgsIDIxOCwgMjE4LCAwKTtcXG5cXHRwYWRkaW5nOiA0cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY3Mtd3JhcHBlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLmNpdHktc3RhdGUge1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtYmlnKTtcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRtYXJnaW4tbGVmdDogNSU7XFxufVxcblxcbi5jb3VudHJ5IHtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLXJlZyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRtYXJnaW4tdG9wOiA0cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG5cXG4udGVtcC13cmFwcGVyIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOWU3ODhmMDA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4udGVtcC1pY29uLXdyYXBwZXIge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udy1pY29uLXNtYWxsIHtcXG5cXHR3aWR0aDpjbGFtcCgycmVtLCAydncsICAyMDBweCk7XFxuXFx0YXNwZWN0LXJhdGlvOiAxIC8xO1xcbn1cXG5cXG4ubGFzdC11cGRhdGUge1xcblxcdHBhZGRpbmc6IDFyZW0gMDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLXJlZyk7XFxufVxcblxcbiN0ZW1wZXJhdHVyZSB7XFxuXFx0Zm9udC1zaXplOiBjbGFtcCgycmVtLCA0dncsIDVyZW0pO1xcbn1cXG5cXG4jdGlja2VyIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdG92ZXJmbG93LXk6IGhpZGRlbjtcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4udGlja2VyLXRleHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGFuaW1hdGlvbjogdGljay1yaWdodCAxNXMgbGluZWFyIGluZmluaXRlO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcbn1cXG5cXG4udGlja2VyLXRleHQgbGkge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuXFxuLnRpY2tlci10ZXh0IGxpOmZpcnN0LW9mLXR5cGUge1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4jc2hvdy13ZWVrbHksXFxuI3Nob3ctaG91cmx5IHtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLWZvbnQtc21hbGwpO1xcbn1cXG5cXG4jZmF2LWljb24ge1xcblxcdGhlaWdodDogY2xhbXAoMXJlbSwgMnZ3LCA1cmVtKTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRmaWx0ZXI6IHZhcigtLXN2Zy1maWx0ZXIpO1xcbn1cXG5cXG4jZmF2LWljb246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZhdm9yaXRlcy1jb250YWluZXIge1xcblxcdGhlaWdodDo0MDBweDtcXG5cXHR3aWR0aDogNjAwcHg7XFxuXFx0ZmxleC1zaHJpbms6IDE7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5mYXZvcml0ZXMtY29udGFpbmVyPmgxIHtcXG5cXHRmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMi41cmVtICk7XFxuXFx0cGFkZGluZzogMXJlbSAxcmVtO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZhdi1tZW51IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG5cXHRncmlkLWF1dG8tcm93czogNzVweDtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdGZsZXg6IGF1dG87XFxuXFx0Z2FwOjFyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZhdm9yaXRlIHtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdGhlaWdodDoxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdHBhZGRpbmc6IDAgLjVyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLWluO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtcmVnKTtcXG59XFxuXFxuLmZhdm9yaXRlOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDExMCUpO1xcbn1cXG5cXG4ucmVtb3ZlLWZhdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDclO1xcblxcdHJpZ2h0OjUlO1xcblxcdGZvbnQtc2l6ZTogLjlyZW07XFxuXFx0cGFkZGluZzogMXB4IDRweDtcXG5cXHRjb2xvcjogZ3JleTtcXG59XFxuXFxuLnJlbW92ZS1mYXY6aG92ZXJ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9yZWNhc3R3cmFwcGVyIHtcXG5cXHRoZWlnaHQ6MHZoO1xcblxcdHRyYW5zaXRpb246IGhlaWdodCAuNXM7XFxufVxcblxcbi5jb2xsYXBzZXIge1xcblxcdGhlaWdodDogMTAlO1xcblxcdGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XFxuXFx0b3ZlcmZsb3c6aGlkZGVuO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuXFx0ZmlsdGVyOiB2YXIoLS1zdmctZmlsdGVyKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG5cXHRoZWlnaHQ6IDkwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRnYXA6IDR2dztcXG5cXHRwYWRkaW5nOiAwIDJyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XFxufVxcblxcbi5mb3JlY2FzdC1lbGVtZW50IHtcXG5cXHR3aWR0aDogMTIlO1xcblxcdGhlaWdodDogODAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM3MTY3N2M0MTtcXG5cXHRjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdC1oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtZm9yZSk7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaWNvbi1mb3JlY2FzdCB7XFxuXFx0ZmxleC1zaHJpbms6IDE7XFxuXFx0aGVpZ2h0OiA0MCU7XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWRldGFpbC13cmFwcGVyIHtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0d2lkdGg6OTAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLXJlZyk7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tb2JpbGUtaG91ci1mb3JlY2FzdCB7XFxuXFx0bWluLWhlaWdodDogMjAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODUsIDIyMCwgMjUyLCAwLjYyMyk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG59XFxuXFxuQGtleWZyYW1lcyB0aWNrLXJpZ2h0IHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyNSUpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI3NSUpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XFxuXFx0Lm1haW4td2VhdGhlciB7XFxuXFx0XFx0Z2FwOiA1JTtcXG5cXHR9XFxuXFx0LmRldGFpbHMtd3JhcHBlciB7XFxuXFx0XFx0aGVpZ2h0OjI1MHB4O1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtcm93czogYXV0byA0MCUgMTAlO1xcblxcdH1cXG5cXHQudy1pY29uLXNtYWxsIHtcXG5cXHRcXHRyaWdodDozMCU7XFxuXFx0XFx0dG9wOjElO1xcblxcdH1cXG5cXHQuZmF2b3JpdGVzLWNvbnRhaW5lciB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiA0cmVtO1xcblxcdFxcdGhlaWdodDogNTB2aDtcXG5cXHR9XFxuXFx0LmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdFxcdHdpZHRoOiAxNTBweDtcXG5cXHRcXHRwYWRkaW5nOiAwIDFyZW07XFxuXFx0fVxcblxcdCNzZWFyY2gtYnV0dG9uIHtcXG5cXHRcXHR3aWR0aDogMTAwcHg7XFxuXFx0fVxcblxcdCNzZWFyY2gge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFx0LmZhdi1tZW51IHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXG5cXHRcXHRncmlkLWF1dG8tcm93czogNTBweDtcXG5cXHR9XFxuXFxuXFx0LnJlbW92ZS1mYXYge1xcblxcdFxcdHRvcDogNSU7XFxuXFx0XFx0cmlnaHQ6IDMlO1xcblxcdFxcdGZvbnQtc2l6ZTogLjdyZW07XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdC1lbGVtZW50IHtcXG5cXHRcXHRoZWlnaHQ6IDc1JTtcXG5cXHRcXHR3aWR0aDphdXRvO1xcblxcdFxcdGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuXFx0fVxcblxcdFxcblxcdC5pY29uLWZvcmVjYXN0IHtcXG5cXHRcXHRmbGV4LXNocmluazogMTtcXG5cXHRcXHRoZWlnaHQ6IDMwJTtcXG5cXHRcXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcdGJvZHl7XFxuXFx0XFx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG5cXHR9XFxuXFxuXFx0LnNlYXJjaC1hcmVhIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDA7XFxuXFx0fVxcblxcblxcdCNzZWFyY2gtZm9ybSB7XFxuXFx0XFx0Z2FwOiAuNXJlbTtcXG5cXHRcXHR3aWR0aDoxMDAlO1xcblxcdH1cXG5cXG5cXHQjc2VhcmNoLWljb24ge1xcblxcdFxcdGhlaWdodDoxLjJyZW07XFxuXFx0fVxcblxcblxcdCNzZWFyY2gge1xcblxcdFxcdHdpZHRoOiAxMjVweDtcXG5cXHRcXHRmb250LXNpemU6IC44cmVtO1xcblxcdH1cXG5cXG5cXHQjc2VhcmNoLWJ1dHRvbiB7XFxuXFx0XFx0d2lkdGg6IDc1cHg7XFxuXFx0XFx0aGVpZ2h0OjEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0Lm1haW4td2VhdGhlciB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IDA7XFxuXFx0XFx0ZmxleDpjb250ZW50O1xcblxcdFxcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0fVxcblxcblxcdC5kZXRhaWxzLXdyYXBwZXIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0byBhdXRvO1xcblxcdFxcdGhlaWdodDogYXV0bztcXG5cXHRcXHR3aWR0aDoxMDAlO1xcblxcdH1cXG5cXG5cXHQuY3Mtd3JhcHBlciB7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcblxcblxcdC50ZW1wLXdyYXBwZXIge1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0fVxcblxcblxcdC50ZW1wLWljb24td3JhcHBlciB7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0fVxcblxcblxcdC5jaXR5LXN0YXRlIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcblxcblxcdC5jb3VudHJ5IHtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcblxcblxcdC53LWljb24tc21hbGwge1xcblxcdFxcdHdpZHRoOiAxNSU7XFxuXFx0fVxcblxcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRcXHR3aWR0aDowcHg7XFxuXFx0XFx0aGVpZ2h0OiAwcHg7XFxuXFx0XFx0b3ZlcmZsb3cteDpoaWRkZW47XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDFzO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0XFx0Ym9yZGVyOm5vbmU7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzAxMDAwM2VhO1xcblxcdH1cXG5cXG5cXHQuZmF2b3JpdGVzLWNvbnRhaW5lciBoMSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQjdGlja2VyIHtcXG5cXHRcXHRoZWlnaHQ6MTAwJTtcXG5cXHRcXHR3aWR0aDogOTAlO1xcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcblxcdH1cXG5cXG5cXHQudGlja2VyLXRleHQge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YW5pbWF0aW9uOiBub25lO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcXG5cXHRcXHRnYXA6MDtcXG5cXHR9XFxuXFxuXFx0LnRpY2tlci10ZXh0IGxpIHtcXG5cXHRcXHRib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMDtcXG5cXHRcXHRwYWRkaW5nLXRvcDogLjRyZW07XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IC40cmVtO1xcblxcdFxcdGJvcmRlci1yaWdodDogbm9uZTtcXG5cXHRcXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHRcXHRkaXNwbGF5OmZsZXg7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdC50aWNrZXItdGV4dCBsaTpmaXJzdC1vZi10eXBlIHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDAlO1xcblxcdFxcdGJvcmRlci1sZWZ0OiBub25lO1xcblxcdFxcdGJvcmRlci10b3A6IG5vbmU7XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdCB7XFxuXFx0XFx0aGVpZ2h0OiAwcHg7XFxuXFx0XFx0d2lkdGg6IDgwJTtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMnM7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0d2lkdGg6IDkwJTtcXG5cXHRcXHRoZWlnaHQ6IDM1JTtcXG5cXHR9XFxuXFxuXFx0Lmljb24tZm9yZWNhc3Qge1xcblxcdFxcdGhlaWdodDogM3JlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWhlYWRlciB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3QtZGV0YWlsLXdyYXBwZXIge1xcblxcdFxcdHdpZHRoOiA0MCU7XFxuXFx0fVxcblxcblxcdCNlcnJvciBcXHR7XFxuXFx0XFx0dG9wOiAxMTAlO1xcblxcdFxcdGZvbnQtc2l6ZTogLjdyZW07XFxuXFx0fVxcbn1cXG5cXG4vKiA9PT09PSBTY3JvbGxiYXIgQ1NTID09PT09ICovXFxuICAvKiBGaXJlZm94ICovXFxuICAqIHtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgICBzY3JvbGxiYXItY29sb3I6ICM4NTZkYWQgIzA5MDExMTtcXG4gIH1cXG5cXG4gIC8qIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSAqL1xcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogNHB4O1xcblxcdGhlaWdodDogN3B4O1xcbiAgfVxcblxcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDkwMTExO1xcbiAgfVxcblxcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU2ZGFkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckIsNENBQTZCO0FBQzlCOztBQUVBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsY0FBYztDQUNkLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdHQUFnRztDQUNoRyxtR0FBbUc7Q0FDbkcsMEJBQTBCO0NBQzFCLDRCQUE0QjtDQUM1QiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLGtGQUFrRjtDQUNsRiw2QkFBNkI7Q0FDN0Isc0ZBQXNGOztDQUV0RixrQ0FBa0M7Q0FDbEMsa0NBQWtDO0NBQ2xDLG1DQUFtQztDQUNuQywwQ0FBMEM7QUFDM0M7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix5RUFBNkQ7Q0FDN0Qsc0JBQXNCO0NBQ3RCLG1EQUFtRDtBQUNwRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGtDQUFrQztDQUNsQyw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNo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OztDQUVBO0VBQ0MsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0NBQ1o7O0NBRUE7RUFDQyxZQUFZO0NBQ2I7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsVUFBVTtDQUNYOztDQUVBO0VBQ0MsU0FBUztFQUNULGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBLDhCQUE4QjtFQUM1QixZQUFZO0VBQ1o7SUFDRSxxQkFBcUI7SUFDckIsZ0NBQWdDO0VBQ2xDOztFQUVBLDZCQUE2QjtFQUM3QjtJQUNFLFVBQVU7Q0FDYixXQUFXO0VBQ1Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnZnV0dXJhJztcXG5cXHRzcmM6IHVybCgnLi9mb250cy9mdXR1ci50dGYnKTtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMiU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcblxcdC0tbWFpbi1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNywgMSwgNDMsIDAuODQyKSAzNyUsIHJnYmEoMCwgMTYsIDU5LCAwLjg0MikgOTklKTtcXG5cXHQtLXN2Zy1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDMlKSBzYXR1cmF0ZSgxJSkgaHVlLXJvdGF0ZSgxMTdkZWcpIGJyaWdodG5lc3MoMTE5JSkgY29udHJhc3QoMTAwJSk7XFxuXFx0LS1tYWluLWZvbnQtY29sb3I6ICNmNWYzZmY7XFxuXFx0LS1zZWNvbmRhcnktY29sb3I6ICMwMTAwMDMxYztcXG5cXHQtLXRlcnRpYXJ5LWNvbG9yOiAjMWUwNzM3OTQ7XFxuXFx0LS1idXR0b24tY29sb3I6ICMxRTA3Mzc7XFxuXFx0LS1idXR0b24tZGlzYWJsZWQ6IGxpbmVhci1ncmFkaWVudCg5NGRlZywgcmdiYSgwLDAsMCwxKSAxNSUsIHJnYmEoNjYsNjYsNjYsMSkgODklKTtcXG5cXHQtLWJ1dHRvbi1kaXNhYmxlZC10ZXh0OiBibGFjaztcXG5cXHQtLWJ1dHRvbi1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDEzM2RlZywgcmdiYSgyMywyLDUxLDEpIDE1JSwgcmdiYSg2OCw0NiwxMDEsMSkgODklKTtcXG5cXG5cXHQtLWZzLXJlZzogY2xhbXAoLjZyZW0sIC44dncsIDFyZW0pO1xcblxcdC0tZnMtZm9yZTogY2xhbXAoLjVyZW0sIDF2dywgMXJlbSk7XFxuXFx0LS1mcy1iaWc6IGNsYW1wKC44cmVtLCAxdncsIDEuNXJlbSk7XFxuXFx0LS1mcy1mb250LXNtYWxsOiBjbGFtcCguNXJlbSwgLjh2dywgLjlyZW0pO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdHRyYW5zaXRpb246IGZsZXggMnM7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tbWFpbi1ncmFkaWVudCksIHVybCguL2ltYWdlcy9tb3VudGFpbnMuanBnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGZvbnQtZmFtaWx5OiAnZnV0dXJhJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRib3JkZXI6bm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ncmFkaWVudCk7XFxuXFx0Y29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tZGlzYWJsZWQpO1xcblxcdGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcblxcbi5oZWFkaW5nIHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDh2aDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleDpub25lO1xcbn1cXG5cXG4jdW5pdC10b2dnbGUge1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdHBhZGRpbmc6IDByZW07XFxuXFx0Zm9udC1zaXplOiBjbGFtcCguN3JlbSwgMXZ3LCAxLjJyZW0pO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHdpZHRoOiBjbGFtcCgxMDBweCwgMTIuOHZ3LCAzMDBweCk7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uc2VhcmNoLWFyZWEge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4jc2VhcmNoLWZvcm0gbGFiZWwge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI3NlYXJjaC1pY29uIHtcXG5cXHRoZWlnaHQ6IGNsYW1wKC45cmVtLCAxLjJ2dywgMnJlbSk7XFxuXFx0ZmlsdGVyOiB2YXIoLS1zdmctZmlsdGVyKTtcXG59XFxuXFxuI3NlYXJjaCB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0d2lkdGg6IDI1dnc7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcblxcdHBhZGRpbmc6IC4xcmVtIC41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ0NSk7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuI3NlYXJjaDo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOnZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbiNzZWFyY2g6Zm9jdXMge1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZWFyY2gtYnV0dG9uIHtcXG5cXHR3aWR0aDogNXZ3O1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jZXJyb3Ige1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDEwJTtcXG5cXHR0b3A6IDkwJTtcXG5cXHRmb250LXNpemU6IC44cmVtO1xcbn1cXG5cXG4jbW9iaWxlLWZhdmVzIHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0YXNwZWN0LXJhdGlvOiAxLzE7XFxuXFx0ZGlzcGxheTpub25lO1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyIHtcXG5cXHRmbGV4OiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDE1JTtcXG59XFxuXFxuLmRldGFpbHMtd3JhcHBlcntcXG5cXHRoZWlnaHQ6IDMwMHB4O1xcblxcdHdpZHRoOiA0MDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgMjMwLCAyNTAsIDApO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwYWRkaW5nOiAxcmVtIDUwcHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDEwJTtcXG5cXHRnYXA6IC41cmVtO1xcbn1cXG5cXG4ubG9jYXRpb24td3JhcHBlciB7XFxuXFx0aGVpZ2h0OjEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTgsIDIxOCwgMjE4LCAwKTtcXG5cXHRwYWRkaW5nOiA0cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY3Mtd3JhcHBlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLmNpdHktc3RhdGUge1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtYmlnKTtcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRtYXJnaW4tbGVmdDogNSU7XFxufVxcblxcbi5jb3VudHJ5IHtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLXJlZyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRtYXJnaW4tdG9wOiA0cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG5cXG4udGVtcC13cmFwcGVyIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOWU3ODhmMDA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4udGVtcC1pY29uLXdyYXBwZXIge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udy1pY29uLXNtYWxsIHtcXG5cXHR3aWR0aDpjbGFtcCgycmVtLCAydncsICAyMDBweCk7XFxuXFx0YXNwZWN0LXJhdGlvOiAxIC8xO1xcbn1cXG5cXG4ubGFzdC11cGRhdGUge1xcblxcdHBhZGRpbmc6IDFyZW0gMDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLXJlZyk7XFxufVxcblxcbiN0ZW1wZXJhdHVyZSB7XFxuXFx0Zm9udC1zaXplOiBjbGFtcCgycmVtLCA0dncsIDVyZW0pO1xcbn1cXG5cXG4jdGlja2VyIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdG92ZXJmbG93LXk6IGhpZGRlbjtcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4udGlja2VyLXRleHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGFuaW1hdGlvbjogdGljay1yaWdodCAxNXMgbGluZWFyIGluZmluaXRlO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1yZWcpO1xcbn1cXG5cXG4udGlja2VyLXRleHQgbGkge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuXFxuLnRpY2tlci10ZXh0IGxpOmZpcnN0LW9mLXR5cGUge1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4jc2hvdy13ZWVrbHksXFxuI3Nob3ctaG91cmx5IHtcXG5cXHRmb250LXNpemU6IHZhcigtLWZzLWZvbnQtc21hbGwpO1xcbn1cXG5cXG4jZmF2LWljb24ge1xcblxcdGhlaWdodDogY2xhbXAoMXJlbSwgMnZ3LCA1cmVtKTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRmaWx0ZXI6IHZhcigtLXN2Zy1maWx0ZXIpO1xcbn1cXG5cXG4jZmF2LWljb246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZhdm9yaXRlcy1jb250YWluZXIge1xcblxcdGhlaWdodDo0MDBweDtcXG5cXHR3aWR0aDogNjAwcHg7XFxuXFx0ZmxleC1zaHJpbms6IDE7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5mYXZvcml0ZXMtY29udGFpbmVyPmgxIHtcXG5cXHRmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMi41cmVtICk7XFxuXFx0cGFkZGluZzogMXJlbSAxcmVtO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZhdi1tZW51IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG5cXHRncmlkLWF1dG8tcm93czogNzVweDtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdGZsZXg6IGF1dG87XFxuXFx0Z2FwOjFyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZhdm9yaXRlIHtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdGhlaWdodDoxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdHBhZGRpbmc6IDAgLjVyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLWluO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtcmVnKTtcXG59XFxuXFxuLmZhdm9yaXRlOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDExMCUpO1xcbn1cXG5cXG4ucmVtb3ZlLWZhdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDclO1xcblxcdHJpZ2h0OjUlO1xcblxcdGZvbnQtc2l6ZTogLjlyZW07XFxuXFx0cGFkZGluZzogMXB4IDRweDtcXG5cXHRjb2xvcjogZ3JleTtcXG59XFxuXFxuLnJlbW92ZS1mYXY6aG92ZXJ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9yZWNhc3R3cmFwcGVyIHtcXG5cXHRoZWlnaHQ6MHZoO1xcblxcdHRyYW5zaXRpb246IGhlaWdodCAuNXM7XFxufVxcblxcbi5jb2xsYXBzZXIge1xcblxcdGhlaWdodDogMTAlO1xcblxcdGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XFxuXFx0b3ZlcmZsb3c6aGlkZGVuO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvYXJyb3ctY29sbGFwc2UtZG93bi5zdmcnKTtcXG5cXHRmaWx0ZXI6IHZhcigtLXN2Zy1maWx0ZXIpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcblxcdGhlaWdodDogOTAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcblxcdGdhcDogNHZ3O1xcblxcdHBhZGRpbmc6IDAgMnJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXG59XFxuXFxuLmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdHdpZHRoOiAxMiU7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzcxNjc3YzQxO1xcblxcdGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWhlYWRlciB7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mcy1mb3JlKTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pY29uLWZvcmVjYXN0IHtcXG5cXHRmbGV4LXNocmluazogMTtcXG5cXHRoZWlnaHQ6IDQwJTtcXG5cXHRhc3BlY3QtcmF0aW86IDEvMTtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGV0YWlsLXdyYXBwZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHR3aWR0aDo5MCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZnMtcmVnKTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vYmlsZS1ob3VyLWZvcmVjYXN0IHtcXG5cXHRtaW4taGVpZ2h0OiAyMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMjIwLCAyNTIsIDAuNjIzKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpY2stcmlnaHQge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTI1JSk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjc1JSk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXG5cXHQubWFpbi13ZWF0aGVyIHtcXG5cXHRcXHRnYXA6IDUlO1xcblxcdH1cXG5cXHQuZGV0YWlscy13cmFwcGVyIHtcXG5cXHRcXHRoZWlnaHQ6MjUwcHg7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDQwJSAxMCU7XFxuXFx0fVxcblxcdC53LWljb24tc21hbGwge1xcblxcdFxcdHJpZ2h0OjMwJTtcXG5cXHRcXHR0b3A6MSU7XFxuXFx0fVxcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDRyZW07XFxuXFx0XFx0aGVpZ2h0OiA1MHZoO1xcblxcdH1cXG5cXHQuZm9yZWNhc3QtZWxlbWVudCB7XFxuXFx0XFx0d2lkdGg6IDE1MHB4O1xcblxcdFxcdHBhZGRpbmc6IDAgMXJlbTtcXG5cXHR9XFxuXFx0I3NlYXJjaC1idXR0b24ge1xcblxcdFxcdHdpZHRoOiAxMDBweDtcXG5cXHR9XFxuXFx0I3NlYXJjaCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXHQuZmF2LW1lbnUge1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcblxcdFxcdGdyaWQtYXV0by1yb3dzOiA1MHB4O1xcblxcdH1cXG5cXG5cXHQucmVtb3ZlLWZhdiB7XFxuXFx0XFx0dG9wOiA1JTtcXG5cXHRcXHRyaWdodDogMyU7XFxuXFx0XFx0Zm9udC1zaXplOiAuN3JlbTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0LWVsZW1lbnQge1xcblxcdFxcdGhlaWdodDogNzUlO1xcblxcdFxcdHdpZHRoOmF1dG87XFxuXFx0XFx0YXNwZWN0LXJhdGlvOiAxIC8gMTtcXG5cXHR9XFxuXFx0XFxuXFx0Lmljb24tZm9yZWNhc3Qge1xcblxcdFxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdFxcdGhlaWdodDogMzAlO1xcblxcdFxcdGFzcGVjdC1yYXRpbzogMS8xO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFx0Ym9keXtcXG5cXHRcXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcblxcdH1cXG5cXG5cXHQuc2VhcmNoLWFyZWEge1xcblxcdFxcdG1hcmdpbi1yaWdodDogMDtcXG5cXHR9XFxuXFxuXFx0I3NlYXJjaC1mb3JtIHtcXG5cXHRcXHRnYXA6IC41cmVtO1xcblxcdFxcdHdpZHRoOjEwMCU7XFxuXFx0fVxcblxcblxcdCNzZWFyY2gtaWNvbiB7XFxuXFx0XFx0aGVpZ2h0OjEuMnJlbTtcXG5cXHR9XFxuXFxuXFx0I3NlYXJjaCB7XFxuXFx0XFx0d2lkdGg6IDEyNXB4O1xcblxcdFxcdGZvbnQtc2l6ZTogLjhyZW07XFxuXFx0fVxcblxcblxcdCNzZWFyY2gtYnV0dG9uIHtcXG5cXHRcXHR3aWR0aDogNzVweDtcXG5cXHRcXHRoZWlnaHQ6MS41cmVtO1xcblxcdH1cXG5cXG5cXHQubWFpbi13ZWF0aGVyIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogMDtcXG5cXHRcXHRmbGV4OmNvbnRlbnQ7XFxuXFx0XFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG5cXHR9XFxuXFxuXFx0LmRldGFpbHMtd3JhcHBlciB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdHdpZHRoOjEwMCU7XFxuXFx0fVxcblxcblxcdC5jcy13cmFwcGVyIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFxuXFx0LnRlbXAtd3JhcHBlciB7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0LnRlbXAtaWNvbi13cmFwcGVyIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0LmNpdHktc3RhdGUge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxuXFxuXFx0LmNvdW50cnkge1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxuXFxuXFx0LnctaWNvbi1zbWFsbCB7XFxuXFx0XFx0d2lkdGg6IDE1JTtcXG5cXHR9XFxuXFxuXFx0LmZhdm9yaXRlcy1jb250YWluZXIge1xcblxcdFxcdHdpZHRoOjBweDtcXG5cXHRcXHRoZWlnaHQ6IDBweDtcXG5cXHRcXHRvdmVyZmxvdy14OmhpZGRlbjtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMXM7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRcXHRib3JkZXI6bm9uZTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMDAzZWE7XFxuXFx0fVxcblxcblxcdC5mYXZvcml0ZXMtY29udGFpbmVyIGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdCN0aWNrZXIge1xcblxcdFxcdGhlaWdodDoxMDAlO1xcblxcdFxcdHdpZHRoOiA5MCU7XFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0fVxcblxcblxcdC50aWNrZXItdGV4dCB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbmltYXRpb246IG5vbmU7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xcblxcdFxcdGdhcDowO1xcblxcdH1cXG5cXG5cXHQudGlja2VyLXRleHQgbGkge1xcblxcdFxcdGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAwO1xcblxcdFxcdHBhZGRpbmctdG9wOiAuNHJlbTtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogLjRyZW07XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdFxcdGhlaWdodDogMS41cmVtO1xcblxcdFxcdGRpc3BsYXk6ZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnRpY2tlci10ZXh0IGxpOmZpcnN0LW9mLXR5cGUge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMCU7XFxuXFx0XFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XFxuXFx0XFx0Ym9yZGVyLXRvcDogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LmZvcmVjYXN0IHtcXG5cXHRcXHRoZWlnaHQ6IDBweDtcXG5cXHRcXHR3aWR0aDogODAlO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAycztcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3QtZWxlbWVudCB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHR3aWR0aDogOTAlO1xcblxcdFxcdGhlaWdodDogMzUlO1xcblxcdH1cXG5cXG5cXHQuaWNvbi1mb3JlY2FzdCB7XFxuXFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdH1cXG5cXG5cXHQuZm9yZWNhc3QtaGVhZGVyIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdC5mb3JlY2FzdC1kZXRhaWwtd3JhcHBlciB7XFxuXFx0XFx0d2lkdGg6IDQwJTtcXG5cXHR9XFxuXFxuXFx0I2Vycm9yIFxcdHtcXG5cXHRcXHR0b3A6IDExMCU7XFxuXFx0XFx0Zm9udC1zaXplOiAuN3JlbTtcXG5cXHR9XFxufVxcblxcbi8qID09PT09IFNjcm9sbGJhciBDU1MgPT09PT0gKi9cXG4gIC8qIEZpcmVmb3ggKi9cXG4gICoge1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICAgIHNjcm9sbGJhci1jb2xvcjogIzg1NmRhZCAjMDkwMTExO1xcbiAgfVxcblxcbiAgLyogQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpICovXFxuICAqOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA0cHg7XFxuXFx0aGVpZ2h0OiA3cHg7XFxuICB9XFxuXFxuICAqOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICMwOTAxMTE7XFxuICB9XFxuXFxuICAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTZkYWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqcz1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9MWUzLGU9NmU0LG49MzZlNSxyPVwibWlsbGlzZWNvbmRcIixpPVwic2Vjb25kXCIscz1cIm1pbnV0ZVwiLHU9XCJob3VyXCIsYT1cImRheVwiLG89XCJ3ZWVrXCIsZj1cIm1vbnRoXCIsaD1cInF1YXJ0ZXJcIixjPVwieWVhclwiLGQ9XCJkYXRlXCIsbD1cIkludmFsaWQgRGF0ZVwiLCQ9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbVHRcXHNdKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyx5PS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxNPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIiksb3JkaW5hbDpmdW5jdGlvbih0KXt2YXIgZT1bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXSxuPXQlMTAwO3JldHVyblwiW1wiK3QrKGVbKG4tMjApJTEwXXx8ZVtuXXx8ZVswXSkrXCJdXCJ9fSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sdj17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGYpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksZik7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmYseTpjLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpofVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sZz1cImVuXCIsRD17fTtEW2ddPU07dmFyIHA9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffSxTPWZ1bmN0aW9uIHQoZSxuLHIpe3ZhciBpO2lmKCFlKXJldHVybiBnO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXt2YXIgcz1lLnRvTG93ZXJDYXNlKCk7RFtzXSYmKGk9cyksbiYmKERbc109bixpPXMpO3ZhciB1PWUuc3BsaXQoXCItXCIpO2lmKCFpJiZ1Lmxlbmd0aD4xKXJldHVybiB0KHVbMF0pfWVsc2V7dmFyIGE9ZS5uYW1lO0RbYV09ZSxpPWF9cmV0dXJuIXImJmkmJihnPWkpLGl8fCFyJiZnfSx3PWZ1bmN0aW9uKHQsZSl7aWYocCh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LE89djtPLmw9UyxPLmk9cCxPLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9Uyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoTy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKCQpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gT30sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT1sKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj13KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHcodCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBPLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIU8udShlKXx8ZSxoPU8ucCh0KSxsPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Ty53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LCQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTy53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCx2PVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goaCl7Y2FzZSBjOnJldHVybiByP2woMSwwKTpsKDMxLDExKTtjYXNlIGY6cmV0dXJuIHI/bCgxLE0pOmwoMCxNKzEpO2Nhc2Ugbzp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsRD0oeTxnP3krNzp5KS1nO3JldHVybiBsKHI/bS1EOm0rKDYtRCksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gJCh2K1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuICQoditcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuICQoditcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuICQoditcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1PLnAodCksaD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksbD0obj17fSxuW2FdPWgrXCJEYXRlXCIsbltkXT1oK1wiRGF0ZVwiLG5bZl09aCtcIk1vbnRoXCIsbltjXT1oK1wiRnVsbFllYXJcIixuW3VdPWgrXCJIb3Vyc1wiLG5bc109aCtcIk1pbnV0ZXNcIixuW2ldPWgrXCJTZWNvbmRzXCIsbltyXT1oK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sJD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWZ8fG89PT1jKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFtsXSgkKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlIGwmJnRoaXMuJGRbbF0oJCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW08ucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixoKXt2YXIgZCxsPXRoaXM7cj1OdW1iZXIocik7dmFyICQ9Ty5wKGgpLHk9ZnVuY3Rpb24odCl7dmFyIGU9dyhsKTtyZXR1cm4gTy53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLGwpfTtpZigkPT09ZilyZXR1cm4gdGhpcy5zZXQoZix0aGlzLiRNK3IpO2lmKCQ9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJHkrcik7aWYoJD09PWEpcmV0dXJuIHkoMSk7aWYoJD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbJF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIE8udyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fGw7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Ty56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxmPW4ubW9udGhzLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnNsaWNlKDAscyl9LGM9ZnVuY3Rpb24odCl7cmV0dXJuIE8ucyhzJTEyfHwxMix0LFwiMFwiKX0sZD1uLm1lcmlkaWVtfHxmdW5jdGlvbih0LGUsbil7dmFyIHI9dDwxMj9cIkFNXCI6XCJQTVwiO3JldHVybiBuP3IudG9Mb3dlckNhc2UoKTpyfSwkPXtZWTpTdHJpbmcodGhpcy4keSkuc2xpY2UoLTIpLFlZWVk6dGhpcy4keSxNOmErMSxNTTpPLnMoYSsxLDIsXCIwXCIpLE1NTTpoKG4ubW9udGhzU2hvcnQsYSxmLDMpLE1NTU06aChmLGEpLEQ6dGhpcy4kRCxERDpPLnModGhpcy4kRCwyLFwiMFwiKSxkOlN0cmluZyh0aGlzLiRXKSxkZDpoKG4ud2Vla2RheXNNaW4sdGhpcy4kVyxvLDIpLGRkZDpoKG4ud2Vla2RheXNTaG9ydCx0aGlzLiRXLG8sMyksZGRkZDpvW3RoaXMuJFddLEg6U3RyaW5nKHMpLEhIOk8ucyhzLDIsXCIwXCIpLGg6YygxKSxoaDpjKDIpLGE6ZChzLHUsITApLEE6ZChzLHUsITEpLG06U3RyaW5nKHUpLG1tOk8ucyh1LDIsXCIwXCIpLHM6U3RyaW5nKHRoaXMuJHMpLHNzOk8ucyh0aGlzLiRzLDIsXCIwXCIpLFNTUzpPLnModGhpcy4kbXMsMyxcIjBcIiksWjppfTtyZXR1cm4gci5yZXBsYWNlKHksKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV8fCRbdF18fGkucmVwbGFjZShcIjpcIixcIlwiKX0pKX0sbS51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sbS5kaWZmPWZ1bmN0aW9uKHIsZCxsKXt2YXIgJCx5PU8ucChkKSxNPXcociksbT0oTS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLHY9dGhpcy1NLGc9Ty5tKHRoaXMsTSk7cmV0dXJuIGc9KCQ9e30sJFtjXT1nLzEyLCRbZl09ZywkW2hdPWcvMywkW29dPSh2LW0pLzYwNDhlNSwkW2FdPSh2LW0pLzg2NGU1LCRbdV09di9uLCRbc109di9lLCRbaV09di90LCQpW3ldfHx2LGw/ZzpPLmEoZyl9LG0uZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZihmKS4kRH0sbS4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIERbdGhpcy4kTF19LG0ubG9jYWxlPWZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIG49dGhpcy5jbG9uZSgpLHI9Uyh0LGUsITApO3JldHVybiByJiYobi4kTD1yKSxufSxtLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIE8udyh0aGlzLiRkLHRoaXMpfSxtLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSl9LG0udG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNWYWxpZCgpP3RoaXMudG9JU09TdHJpbmcoKTpudWxsfSxtLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sbS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LE19KCksVD1fLnByb3RvdHlwZTtyZXR1cm4gdy5wcm90b3R5cGU9VCxbW1wiJG1zXCIscl0sW1wiJHNcIixpXSxbXCIkbVwiLHNdLFtcIiRIXCIsdV0sW1wiJFdcIixhXSxbXCIkTVwiLGZdLFtcIiR5XCIsY10sW1wiJERcIixkXV0uZm9yRWFjaCgoZnVuY3Rpb24odCl7VFt0WzFdXT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy4kZyhlLHRbMF0sdFsxXSl9fSkpLHcuZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuJGl8fCh0KGUsXyx3KSx0LiRpPSEwKSx3fSx3LmxvY2FsZT1TLHcuaXNEYXlqcz1wLHcudW5peD1mdW5jdGlvbih0KXtyZXR1cm4gdygxZTMqdCl9LHcuZW49RFtnXSx3LkxzPUQsdy5wPXt9LHd9KSk7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvd2lkZ2V0cy9sb2FkZXIuY3NzJztcbmltcG9ydCBmYXZfaWNvbiBmcm9tICcuL2ltYWdlcy9mYXYuc3ZnJztcbmltcG9ydCBzZWFyY2hfaWNvbiBmcm9tICcuL2ltYWdlcy9zZWFyY2guc3ZnJztcbmltcG9ydCBtb2JpbGVfZmF2ZXMgZnJvbSAnLi9pbWFnZXMvZmF2ZXMuc3ZnJztcbmltcG9ydCB7IGZldGNoV2VhdGhlciwgZ2V0RGFpbHlGb3JlY2FzdCwgZ2V0SG91cmx5Rm9yZWNhc3QsIHNob3dGb3JlY2FzdCwgc3dpdGNoVW5pdHMgfSBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcic7XG5pbXBvcnQgeyBjbGVhckZvcmVjYXN0Q29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NsZWFuVXAnO1xuaW1wb3J0IHsgd2luT2JzZXJ2ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lkZ2V0cy93aW5TaXplJztcbmltcG9ydCB7IHBvcHVsYXRlRmF2b3JpdGVzLCBzZXROZXdGYXZvcml0ZSB9IGZyb20gJy4vY29tcG9uZW50cy93aWRnZXRzL2Zhdk1hbmFnZXInO1xuXG5sZXQgZGFpbHlfZm9yZWNhc3RfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctd2Vla2x5Jyk7XG5sZXQgaG91cmx5X2ZvcmVjYXN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LWhvdXJseScpO1xuXG5sZXQgbV9mYXZlc19hY3RpdmUgPSBmYWxzZTtcblxuZnVuY3Rpb24gcHJlcEZvckZldGNoKCkge1xuICAgIGxldCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcbiAgICBsZXQgZV9zcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJyk7XG4gICAgaWYocXVlcnkudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGVfc3Bhbi50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGVudGVyIGEgbG9jYXRpb24hXCJcbiAgICAgICAgcmV0dXJuO1xuICAgIH1lbHNlIHtcbiAgICAgICAgZV9zcGFuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG4gICAgZmV0Y2hXZWF0aGVyKGVuY29kZVVSSUNvbXBvbmVudChxdWVyeS52YWx1ZSkpO1xuICAgIHJldHVybjtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXYtaWNvbicpLnNyYyA9IGZhdl9pY29uO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaWNvbicpLnNyYyA9IHNlYXJjaF9pY29uO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbGUtZmF2ZXMnKS5zcmMgPSBtb2JpbGVfZmF2ZXM7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdmYXZzJykpIHtcbiAgICAgICAgcG9wdWxhdGVGYXZvcml0ZXMoKTtcbiAgICB9XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdjdXJyZW50JykpIHtcbiAgICAgICAgZmV0Y2hXZWF0aGVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50JykpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZldGNoV2VhdGhlcignSmVyc2V5K0NpdHknKTtcbn0pKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXQtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBzd2l0Y2hVbml0cyk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwcmVwRm9yRmV0Y2goKTtcbn0pKTtcblxuZGFpbHlfZm9yZWNhc3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKGV2ZW50KT0+IHtcbiAgICBkYWlseV9mb3JlY2FzdF9idG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGlmKGhvdXJseV9mb3JlY2FzdF9idG4uZGlzYWJsZWQpIHtcbiAgICAgICAgaG91cmx5X2ZvcmVjYXN0X2J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNob3dGb3JlY2FzdChldmVudCk7XG4gICAgcmV0dXJuO1xufSk7XG5cbmhvdXJseV9mb3JlY2FzdF9idG4uYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBob3VybHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBpZihkYWlseV9mb3JlY2FzdF9idG4uZGlzYWJsZWQpIHtcbiAgICAgICAgZGFpbHlfZm9yZWNhc3RfYnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2hvd0ZvcmVjYXN0KGV2ZW50KTtcbiAgICByZXR1cm47XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zhdi1pY29uJykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBzZXROZXdGYXZvcml0ZSgpO1xufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vYmlsZS1mYXZlcycpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGZhdl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzLWNvbnRhaW5lcicpO1xuICAgIGlmICghbV9mYXZlc19hY3RpdmUpIHtcbiAgICAgICAgZmF2X2NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnOTF2aCc7XG4gICAgICAgIG1fZmF2ZXNfYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZhdl9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgIG1fZmF2ZXNfYWN0aXZlID0gZmFsc2U7XG4gICAgcmV0dXJuO1xufSlcblxuIl0sIm5hbWVzIjpbImRheWpzIiwibWFrZURhaWx5Rm9yZWNhc3RFbGVtZW50IiwiZCIsImZvcmVjYXN0X2VsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGUiLCJhcHBlbmRDaGlsZCIsInNldEZvcmVjYXN0SGVhZGVyIiwiZm9ybWF0IiwiYXBwZW5kIiwic2V0Q29uZGl0aW9uSW1hZ2UiLCJkYXkiLCJjb25kaXRpb24iLCJpY29uIiwic2V0VGVtcGVyYXR1cmVEZXRhaWwiLCJNYXRoIiwicm91bmQiLCJtaW50ZW1wX2YiLCJtYXh0ZW1wX2YiLCJtaW50ZW1wX2MiLCJtYXh0ZW1wX2MiLCJtYWtlSG91cmx5Rm9yZWNhc3RFbGVtZW50IiwidCIsImhvdXIiLCJ0aW1lIiwidGVtcF9mIiwidGVtcF9jIiwiY29tcHV0ZUhvdXJzIiwiY3VycmVudF9kYXRldGltZSIsImN1cnJlbnQiLCJsYXN0X3VwZGF0ZWQiLCJzdGFydCIsIk51bWJlciIsImRheV9pbmR4IiwiaG91cl9hcnIiLCJsaW1pdCIsInB1c2giLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiaCIsImhlYWRlciIsInRleHRDb250ZW50IiwiaSIsImNvbmRfaW1nIiwic3JjIiwiZiIsImMiLCJ0ZW1wX3dyYXBwZXIiLCJkZXRhaWxzX2YiLCJkZXRhaWxzX2MiLCJjbGVhckZvcmVjYXN0Q29udGFpbmVyIiwiZm9yZWNhc3RfY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJjb2xsYXBzZUZvcmVjYXN0IiwiZXZlbnQiLCJmb3JlY2FzdF93cmFwcGVyIiwic3R5bGUiLCJoZWlnaHQiLCJjb2xsYXBzZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGlzYWJsZWQiLCJzZXRDdXJyZW50TG9jYWwiLCJxIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldExvY2F0aW9uIiwicyIsImNvdW50cnkiLCJzZXRUZW1wIiwidGVtcF9lbGUiLCJzZXREYXRlIiwic2V0VGlja2VyVGV4dCIsImRhdGEiLCJ1bCIsInNldENvbmRpdGlvbiIsInRleHQiLCJzZXRSZWFsRmVlbCIsImZlZWxzbGlrZV9mIiwic2V0SHVtaWRpdHkiLCJodW1pZGl0eSIsInNldFdpbmRTcGVlZCIsIndpbmRfa3BoIiwibGkiLCJ3IiwiaWQiLCJwbGFjZWhvbGRlciIsImRpc3BsYXlMb2FkZXIiLCJyZW1vdmVMb2FkZXIiLCJiYWNrZ3JvdW5kU3dpdGNoIiwicmVxdWVzdCIsInJlcV9leHRyYSIsImRhaWx5X2ZvcmVjYXN0IiwiaG91cmx5X2ZvcmVjYXN0IiwiZmFocmVuaGVpdCIsImZldGNoV2VhdGhlciIsImVfc3BhbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwic2V0V2VhdGhlciIsImNvZGUiLCJnZXREYWlseUZvcmVjYXN0IiwiZ2V0SG91cmx5Rm9yZWNhc3QiLCJzaG93Rm9yZWNhc3QiLCJsb2NhdGlvbiIsIm5hbWUiLCJyZWdpb24iLCJ0aWNrZXIiLCJmb3JlY2FzdF9zZWN0aW9uIiwiZm9yRWFjaCIsImhvdXJzIiwidGljayIsImhvdXJseSIsIndlZWtseSIsImp1c3RpZnlDb250ZW50IiwiZWxlbWVudCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGUiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN3aXRjaFVuaXRzIiwiZmVlbF9lbGUiLCJmZWVsc2xpa2VfYyIsImNsZWFyIiwiZHJpenpsZSIsImNsb3VkeSIsInJhaW4iLCJzbm93IiwidGh1bmRlciIsImNjIiwiYmciLCJmYXZvcml0ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJzZXROZXdGYXZvcml0ZSIsInF1ZXJ5IiwiaW5jbHVkZXMiLCJhbGVydCIsInN0cmluZ2lmeSIsIm5ld19lbGUiLCJuZXdGYXZFbGVtZW50IiwiZmF2Q2xpY2tIYW5kbGVyIiwicG9wdWxhdGVGYXZvcml0ZXMiLCJmYXZfbWVudSIsImZhdiIsImZhdl9lbGUiLCJmYXZfZGl2IiwiY2xvc2UiLCJyZW1vdmVGYXZFdmVudEhhbmRsZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicGFyZW50IiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImZhdl9pbmR4IiwiaW5kZXhPZiIsInNsaWNlIiwic3BsaWNlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGltbWVyIiwic3Bpbm5lciIsIndpbk9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjbGllbnRXaWR0aCIsInNlYXJjaF9kaXYiLCJ0YXJnZXRfZGl2IiwicHJlcGVuZCIsImZvcmVjYXN0X3NlY3QiLCJmYXZfY29udGFpbmVyIiwicG9zaXRpb24iLCJjbGllbnRUb3AiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvYnNlcnZlIiwiYm9keSIsImZhdl9pY29uIiwic2VhcmNoX2ljb24iLCJtb2JpbGVfZmF2ZXMiLCJkYWlseV9mb3JlY2FzdF9idG4iLCJob3VybHlfZm9yZWNhc3RfYnRuIiwibV9mYXZlc19hY3RpdmUiLCJwcmVwRm9yRmV0Y2giLCJ2YWx1ZSIsIndpbmRvdyIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==