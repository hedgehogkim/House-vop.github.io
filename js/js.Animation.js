







function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('_active');
        } else {
            if (!change.target.classList.contains('_anime-no-hide')){
                change.target.classList.remove('_active')
            }
           
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('._anim-items');
for (let elm of elements){
    observer.observe(elm);
}


