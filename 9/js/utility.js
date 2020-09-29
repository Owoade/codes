// Dropdown System
let dropdown = document.querySelector('.dropdown'),
    burger = document.querySelector('.burger'),
    headerList = document.querySelectorAll('nav li'),
    pushUp = document.querySelector('#close');
console.log(headerList);
burger.addEventListener('click', () => {
    dropdown.classList.add('dropdown-show');
    burger.style.display = 'none';
    pushUp.classList.add('reset-icon');
    console.log(true)
    headerList.forEach((each, index) => {
        if (each.style.animation) {
            each.style.animation = '';
        } else {
            each.style.animation = ` jumpUp .5s forwards ${index/9 +0.3}s`;
        }

    })
});
pushUp.addEventListener('click', () => {
        dropdown.classList.remove('dropdown-show');
        burger.style.display = 'block';
        pushUp.classList.remove('reset-icon');
        headerList.forEach((each, index) => {
            if (each.style.animation) {
                each.style.animation = '';
            } else {
                each.style.animation = ` jumpUp .5s forwards ${index/9 +0.3}s`;
            }

        })
    })
    // Popup System
let cta = document.querySelector('.cta'),
    popup = document.querySelector('.contact-overlay');
cta.addEventListener('click', () => {
    popup.classList.add('popup');
})
popup.children[0].children[0].addEventListener('click', () => {
    popup.classList.remove('popup');
})