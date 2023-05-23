function displayLoader() {
    let dimmer = document.createElement('div');
    dimmer.classList.add('dimmer');
    let spinner = document.createElement('div');
    spinner.classList.add('lds-ripple');
    spinner.append(document.createElement('div'),document.createElement('div'));
    dimmer.appendChild(spinner);
    document.querySelector('body').appendChild(dimmer);
}

function removeLoader() {
    let spinner = document.querySelector('.lds-ripple');
    while(spinner.firstChild) {
        spinner.firstChild.remove();
    }
    spinner.remove();
    document.querySelector('.dimmer').remove();
}

export { displayLoader, removeLoader };