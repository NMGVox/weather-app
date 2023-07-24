import clear from '../../images/clear.jpg';
import drizzle from '../../images/drizzle.jpg';
import cloudy from '../../images/cloudy.jpg';
import rain from '../../images/rain.jpg';
import snow from '../../images/snow.jpg';
import thunder from '../../images/thunder-storm.jpg';

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

export { backgroundSwitch };