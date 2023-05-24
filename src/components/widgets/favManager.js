let favorites = JSON.parse(localStorage.getItem('favs'));

function setNewFavorite() {
    let query = document.querySelector('.city-state').textContent;
    
    if(favorites.includes(query)) {
        alert('This is already favorited.');
        return;
    }

    favorites.push(query);
    localStorage.setItem('favs', JSON.stringify(favorites));
    console.log(localStorage.getItem('favs'));
    return;
}

//debug
// function clearFavorites() {
//     favorites = [];
//     localStorage.setItem('favs', JSON.stringify(favorites));
//     console.log(localStorage.getItem('favs'));
// }

export { setNewFavorite };