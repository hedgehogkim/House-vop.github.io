let nav_toggler = document.querySelector(".header__nav-toggler");
let mobileWrap = document.querySelector(".mobile-wrap");


nav_toggler.addEventListener("click", mobileMenu);

function mobileMenu(){
    nav_toggler.classList.toggle("mobile-wrap_show");
    mobileWrap.classList.toggle("mobile-wrap_show");
}

const navLink = document.querySelectorAll(".header__nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    nav_toggler.classList.remove("mobile-wrap_show");
    mobileWrap.classList.remove("mobile-wrap_show");
}


const headerNav = document.querySelector(".header__nav");
const header = document.querySelector(".header");
const headerNavHeight = headerNav.offsetHeight;
console.log(headerNavHeight)
const headerHeight = header.offsetHeight;
console.log(headerHeight)

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    console.log(scrollDistance)

    if(scrollDistance >= 450){
        headerNav.classList.add('header--nav');
        header.style.marginTop = '${headerNavHeight}px'
    }
    else{
        headerNav.classList.remove('header--nav');
        header.style.marginTop = null;
    }
})


