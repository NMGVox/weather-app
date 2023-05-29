let winObserver = new ResizeObserver(entries => {
    for(const entry of entries) {
        if ( entry.target.clientWidth < 800 ) {
            let search_div = document.querySelector('.search-area');
            let target_div = document.querySelector('.main-weather'); 
            target_div.prepend(search_div);
        };
        if ( entry.target.clientWidth > 800 ) {
            let search_div = document.querySelector('.search-area');
            let target_div = document.querySelector('.heading'); 
            target_div.append(search_div);
        };
    }
})

winObserver.observe(document.body);

export {winObserver};