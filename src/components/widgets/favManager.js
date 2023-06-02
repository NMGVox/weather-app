import { fetchWeather } from "../weather";

let favorites = [];
//Check local storage for existing favorites, if they don't exist, set favorites to empty array
if (localStorage.hasOwnProperty('favs')) {
    favorites = JSON.parse(localStorage.getItem('favs'));
}

function setNewFavorite() {
    let query = document.querySelector('.city-state').textContent;
    
    if(favorites.includes(query)) {
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
        let fav_ele = newFavElement(fav)
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
    fetchWeather(encodeURIComponent(e.target.textContent));
}

//debug
// function clearFavorites() {
//     favorites = [];
//     localStorage.setItem('favs', JSON.stringify(favorites));
//     console.log(localStorage.getItem('favs'));
// }

export { setNewFavorite, populateFavorites };