  // Night Mode
  let
  //   General Variables
      lightmode = document.querySelector('.light-mode'),
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
      underline = document.querySelector('.underline'),
      footerSpan = document.querySelector('footer span'),

      //   Profile Variables
      profileTextArea = document.querySelector('.profile-area-text'),
      profileHeader = document.querySelectorAll('.profile-area-header p'),
      profileParagraphs = document.querySelectorAll('.profile-area-text p');
  console.log(profileParagraphs);





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
      underline.classList.add('underline-dark-mode');
      activeLink.classList.add('text-dark-mode');
      profileTextArea.classList.add('header-dark-mode');

      profileParagraphs.forEach(each => {
          each.classList.add('text-dark-mode');
      })
      profileHeader.forEach(each => {
          each.classList.add('text-dark-mode');
      })

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
      underline.classList.remove('underline-dark-mode');
      activeLink.classList.remove('text-dark-mode');
      profileTextArea.classList.remove('header-dark-mode');

      profileParagraphs.forEach(each => {
          each.classList.remove('text-dark-mode');
      })
      profileHeader.forEach(each => {
          each.classList.remove('text-dark-mode');
      })
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