let mainNav = document.querySelector(".header-bottom");
let humMenu = document.querySelector(".hamburger-menu-container");
let isHumMenuOpen = false;

humMenu.onclick = () => {
    isHumMenuOpen = !isHumMenuOpen;
    if(isHumMenuOpen) {
        mainNav.style.display = "block";
    }
    
    else {
        mainNav.style.display = "none";
    }
}



//slides

const slide = document.querySelector(".sub-slideshow");
const slides = document.querySelectorAll(".slideshow__slide");
let nextBtn = document.querySelector(".right");
let prevBtn = document.querySelector(".left");

let counter = 0;
let size = slides[0].clientWidth;
window. addEventListener('resize', function(event) {
    size = slides[0].clientWidth;
})


slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//btn listener
let lengthOfSlides = slides.length;
nextBtn.onclick = () => {
    if(counter < lengthOfSlides -1) {
        slide.style.transition = "transform 0.4s ease-in-out";
        counter = counter + 1;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
}
prevBtn.onclick = () => {
    if(counter > 0) {
        slide.style.transition = "transform 0.4s ease-in-out";
        counter = counter - 1;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
}

//expanding hidden information


let expanToggen = document.querySelector(".footer-top");
expanToggen.onclick = (e) => {
    console.log(e.screenX);
        let hiddenInfo = (e.target.parentNode.nextElementSibling);
        if(hiddenInfo.style.display === "block") {
            hiddenInfo.style.display = "none";
        }
        else {
            hiddenInfo.style.display = "block";
        }
}