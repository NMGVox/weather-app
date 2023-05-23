function setCurrentLocal(q) {
    try {
        localStorage.setItem('current', q);
    }
    catch(error) {
        console.log('error');
    }
    return;
}

export { setCurrentLocal };