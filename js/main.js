let elHomeBtn = document.querySelector('.home-link');
let elAboutBtn = document.querySelector('.about-link');
let elHomeAbout = document.querySelector('.home-btn__link');
let elSkillsBtn = document.querySelector('.skills-link');
let elPortfolioBtn = document.querySelector('.portfolio-link');
let elContactBtn = document.querySelector('.contact-link');

//sections
let elHome = document.querySelector('#home')
let elAbout = document.querySelector('#about')
let elSkills = document.querySelector('#skills')
let elPortfolio = document.querySelector('#portfolio')
let elContact = document.querySelector('#contact')


elHomeBtn.addEventListener('click', function(){
    elHomeBtn.classList.add('border')
    elAboutBtn.classList.remove('border')
    elSkillsBtn.classList.remove('border')
    elPortfolioBtn.classList.remove('border')
    elContactBtn.classList.remove('border')


    elHome.classList.add('show')
    elAbout.classList.remove('show')
    elSkills.classList.remove('show')
    elPortfolio.classList.remove('show')
    elContact.classList.remove('show')
})

elHomeAbout.addEventListener('click', function(){
    elHomeBtn.classList.remove('border')
    elAboutBtn.classList.add('border')
    elSkillsBtn.classList.remove('border')
    elPortfolioBtn.classList.remove('border')
    elContactBtn.classList.remove('border')


    elHome.classList.remove('show')
    elAbout.classList.add('show')
    elSkills.classList.remove('show')
    elPortfolio.classList.remove('show')
    elContact.classList.remove('show')
})
elAboutBtn.addEventListener('click', function(){
    elHomeBtn.classList.remove('border')
    elAboutBtn.classList.add('border')
    elSkillsBtn.classList.remove('border')
    elPortfolioBtn.classList.remove('border')
    elContactBtn.classList.remove('border')


    elHome.classList.remove('show')
    elAbout.classList.add('show')
    elSkills.classList.remove('show')
    elPortfolio.classList.remove('show')
    elContact.classList.remove('show')
})

elSkillsBtn.addEventListener('click', function(){
    elHomeBtn.classList.remove('border')
    elAboutBtn.classList.remove('border')
    elSkillsBtn.classList.add('border')
    elPortfolioBtn.classList.remove('border')
    elContactBtn.classList.remove('border')


    elHome.classList.remove('show')
    elAbout.classList.remove('show')
    elSkills.classList.add('show')
    elPortfolio.classList.remove('show')
    elContact.classList.remove('show')
})

elPortfolioBtn.addEventListener('click', function(){
    elHomeBtn.classList.remove('border')
    elAboutBtn.classList.remove('border')
    elSkillsBtn.classList.remove('border')
    elPortfolioBtn.classList.add('border')
    elContactBtn.classList.remove('border')


    elHome.classList.remove('show')
    elAbout.classList.remove('show')
    elSkills.classList.remove('show')
    elPortfolio.classList.add('show')
    elContact.classList.remove('show')
})

elContactBtn.addEventListener('click', function(){
    elHomeBtn.classList.remove('border')
    elAboutBtn.classList.remove('border')
    elSkillsBtn.classList.remove('border')
    elPortfolioBtn.classList.remove('border')
    elContactBtn.classList.add('border')



    elHome.classList.remove('show')
    elAbout.classList.remove('show')
    elSkills.classList.remove('show')
    elPortfolio.classList.remove('show')
    elContact.classList.add('show')
})

var typed = new Typed(".type", {
    strings: [ "Frontend developer","Backend developer","Freelancer","UI designer"],
    typeSpeed: 160,
    backSpeed: 120,
    loop: true,
});
