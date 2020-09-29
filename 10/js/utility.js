let nav = document.querySelector('nav'),
    navLinks = document.querySelectorAll('nav li'),
    burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-show');
    navLinks.forEach((each, index) => {
        if (each.style.animation) {
            each.style.animation = "";
        } else {
            each.style.animation = `slideIn 0.5s ease forwards ${index/9 + 0.3}s`;
        }
    })
});
console.log(navLinks);