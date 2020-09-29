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
    // Tab system
let tabs = document.querySelectorAll('.tabs p'),
    cards = document.querySelectorAll('.portfolio-card');

function removeUnderlineDarkmode() {
    tabs.forEach(tab => {
        tab.classList.remove('underline-tab-dark-mode');
    })

}

function removeUnderline() {
    tabs.forEach(tab => {
        tab.classList.remove('underline-tab');
    })
}

function reset() {

    cards.forEach(card => {
        card.classList.remove('clear');
    })
}

function initial() {
    if (localStorage.getItem('darkmode') === 'enabled') {
        removeUnderlineDarkmode()
        tabs[0].classList.add('underline-tab-dark-mode');
    } else {
        removeUnderline()
        tabs[0].classList.add('underline-tab');
    }
}

function clearCards() {
    cards.forEach(card => {
        card.classList.add('clear');
    })
}
initial();
tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            reset();
            if (localStorage.getItem('darkmode') === "enabled") {
                removeUnderlineDarkmode();
                tab.classList.add('underline-tab-dark-mode');
            }
            removeUnderline();
            tab.classList.add('underline-tab');

            cards.forEach((card, index) => {

                if (tab === tabs[0]) {

                } else {
                    if (tab.innerHTML !== card.children[2].innerHTML) {
                        card.classList.add('clear');
                    } else {
                        console.log(index)
                        card.classList.add('animate');
                    }

                }
            })
        })
    })
    // Showcase System
let overlay = document.querySelector('.overlay'),
    exit = document.querySelector('#exit'),
    overlayPortfolio = document.querySelectorAll('.portfolio-overlay'),
    imageContainer = document.querySelectorAll('.img-container'),
    overlayImage = document.querySelector('.overlay img'),
    arrowLeft = document.querySelector('.arrow-left'),
    arrowRight = document.querySelector('.arrow-right')
exit = document.querySelector('.ti-close');
var current = 0;
console.log(arrowLeft, arrowRight);


cards.forEach((card, index) => {

    card.addEventListener('click', () => {
        overlay.classList.add('expand');
        current = index;
        overlayImage.src = `${cards[current].children[0].children[1].getAttribute('src')}`;
        // overlay.children[0].children[2].children[1].textContent = card.children[1].textContent;
        arrowRight.addEventListener('click', () => {
            if (current === cards.length - 1) {
                current = -1;
            }
            overlayImage.src = `${cards[current+1].children[0].children[1].getAttribute('src')}`;
            current += 1;

        })
        arrowLeft.addEventListener('click', () => {
            if (current === 0) {
                current = cards.length;
            }
            overlayImage.src = `${cards[current-1].children[0].children[1].getAttribute('src')}`;
            current -= 1;

        })
        exit.addEventListener('click', () => {
            overlay.classList.remove('expand');
        })


    })

})


imageContainer.forEach((each, index) => {
    each.addEventListener('mouseover', () => {
        overlayPortfolio[index].classList.add('show-portfolio-overlay');
    })
})
imageContainer.forEach((each, index) => {
        each.addEventListener('mouseout', () => {
            overlayPortfolio[index].classList.remove('show-portfolio-overlay');
        })
    })
    //Pop up
let cta = document.querySelector('.cta'),
    popup = document.querySelector('.contact-overlay');
cta.addEventListener('click', () => {
    popup.classList.add('popup');
})
popup.children[0].children[0].addEventListener('click', () => {
        popup.classList.remove('popup');
    })
    // Night Mode
let lightmode = document.querySelector('.light-mode'),
    darkmode = document.querySelector('.dark-mode'),
    mainbody = document.querySelector('body'),
    activeLink = document.querySelector('.active'),
    header = document.querySelector('.header'),
    line = document.querySelectorAll('.line'),
    bottomHeader = document.querySelector('.bottom-header'),
    navLinks = document.querySelectorAll('nav a'),
    footer = document.querySelector('footer'),
    headerText = document.querySelectorAll('h3'),
    footerLinks = document.querySelectorAll('footer a'),
    portfolioButton = document.querySelector('.portfolio-cards button'),
    underline = document.querySelector('.underline'),
    footerSpan = document.querySelector('footer span');


function nightMode() {
    lightmode.style.display = 'flex';
    darkmode.style.display = 'none';
    header.classList.add('header-dark-mode');
    header.classList.add('text-dark-mode');
    burger.classList.add('burger-dark-mode');
    burger.classList.add('burger-dark-mode');
    mainbody.classList.add('body-dark-mode');
    mainbody.classList.add('text-dark-mode');
    footer.classList.add('header-dark-mode');
    footer.classList.add('text-dark-mode');
    bottomHeader.classList.add('body-dark-mode');
    bottomHeader.classList.add('text-dark-mode');
    footerSpan.classList.add('text-dark-mode');
    portfolioButton.classList.add('button-dark-mode');
    underline.classList.add('underline-dark-mode');
    activeLink.classList.add('text-dark-mode');
    line.forEach(each => {
        each.classList.add('burger-line-dark-mode');
    });
    navLinks.forEach(link => {
        link.classList.add('inactive-dark-mode');
    })
    footerLinks.forEach(each => {
        each.classList.add('text-dark-mode');
    })
    headerText.forEach(each => {
        each.classList.add('text-dark-mode');
    })
    localStorage.setItem('darkmode', 'enabled');
}

function lightMode() {
    darkmode.style.display = 'flex';
    lightmode.style.display = 'none';
    header.classList.remove('header-dark-mode');
    header.classList.remove('text-dark-mode');
    burger.classList.remove('burger-dark-mode');
    burger.classList.remove('burger-dark-mode');
    mainbody.classList.remove('body-dark-mode');
    mainbody.classList.remove('text-dark-mode');
    footer.classList.remove('header-dark-mode');
    footer.classList.remove('text-dark-mode');
    bottomHeader.classList.remove('body-dark-mode');
    bottomHeader.classList.remove('text-dark-mode');
    footerSpan.classList.remove('text-dark-mode');
    portfolioButton.classList.remove('button-dark-mode');
    underline.classList.remove('underline-dark-mode');
    activeLink.classList.remove('text-dark-mode');
    line.forEach(each => {
        each.classList.remove('burger-line-dark-mode');
    });
    navLinks.forEach(link => {
        link.classList.remove('inactive-dark-mode');
    })
    footerLinks.forEach(each => {
        each.classList.remove('text-dark-mode');
    })
    headerText.forEach(each => {
        each.classList.remove('text-dark-mode');
    })
    localStorage.setItem('darkmode', 'disabled');
}

if (localStorage.getItem('darkmode') === 'enabled') {
    nightMode();
}
darkmode.addEventListener('click', nightMode);
lightmode.addEventListener('click', lightMode);
console.log(darkmode, lightmode);

// TypeWritter System
let arrTexts = [" Graphics Design.      ", " Label Design.     ", "UI/UX.    "],
    indexText = 0,
    indexLetter = 0,
    currentText = "",
    speed = 0,
    letter = "",
    isDeleting = false,
    mainText = document.querySelector(".type-texts");

function type() {
    if (indexText === arrTexts.length) {
        indexText = 0;
    }
    if (isDeleting === false) {
        currentText = arrTexts[indexText];
        letter = currentText.slice(0, ++indexLetter);
        speed = 100;

    }
    if (letter.length === currentText.length) {
        isDeleting = true;
    }
    if (isDeleting === true) {
        letter = currentText.slice(0, --indexLetter + 1);
        if (letter === "") {
            indexText++;
            indexLetter = 0;
            isDeleting = false;
            console.log(true);
        }
    }
    mainText.textContent = letter;
    setTimeout(type, speed);
}
type()