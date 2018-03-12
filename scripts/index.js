const about = document.querySelector('.about');
const landing = document.querySelector('.landing');
const nav = document.querySelector('.navbar');
const navIcon = document.querySelector('navbar-icon')

window.addEventListener('scroll', () =>{
    if (window.scrollY >= landing.scrollHeight - 180) {
        nav.classList.remove('navbar-landing');
        nav.classList.add('navbar-bg');
        navIcon.classList.remove('fa-2x');
    } else {
        nav.classList.add('navbar-landing');    
        nav.classList.remove('navbar-bg');
        navIcon.classList.add('fa-2x');
    }
});


$("#chevron").click(function(){
    var videoHeight = $(".jumbotron").offset().top - 50;
    $("body, html").animate({
      scrollTop: videoHeight
    }, 500);
});