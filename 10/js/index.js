let slides = document.querySelectorAll('.hero-bg'),
    circles = document.querySelectorAll('.circle');
var current = 0;
circles.forEach((circle, index) => {

    circle.addEventListener('click', () => {
        current = index;
        removeActive();
        clearBg();
        circle.classList.add('active-circle');
        slides[current].style.display = 'block';

    })
});

function removeActive() {
    circles.forEach(each => {
        each.classList.remove('active-circle');
    })
}

function clearBg() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    })
}

function initial() {
    removeActive();
    clearBg();
    circles[0].classList.add('active-circle');
    slides[0].style.display = 'block';
}
initial();
// Automatic Slider

let slideIndex = 0;

function automaticSlide() {
    if (slideIndex === slides.length) {
        slideIndex = 0
    }
    removeActive();
    clearBg();

    slides[slideIndex].style.display = 'block';
    circles[slideIndex].classList.add('active-circle');
    slideIndex += 1;
    setTimeout(automaticSlide, 5000);


}
automaticSlide();

// Carousel Section
let arrowLeft = document.querySelector('.arrow-left'),
    arrowRight = document.querySelector('.arrow-right'),
    cards = document.querySelectorAll('.card');
var clicked = false;
arrowRight.addEventListener('click', () => {
    cards.forEach(card => {
        card.style.animation = 'hide-left 0.5s forwards';
    })
    cards[0].style.width = '100px';
    cards[2].style.width = '250px';
    clicked = true;
})
arrowLeft.addEventListener('click', () => {
    if (clicked === true) {
        cards.forEach(card => {
            card.style.animation = 'hide-right 0.5s forwards';
        })
        cards[0].style.width = '250px';
        cards[2].style.width = '100px';
        clicked = false;
    }

})