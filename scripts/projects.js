// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
const navbar = document.getElementById("nav");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky - navbar.clientHeight) {
    navbar.classList.add("nav-sticky");
    console.log('+');
  } else {
    navbar.classList.remove("nav-sticky");
    console.log('-');
  }
}




$("#bio-btn").click(function(){
  let elHeight = $("#biology").offset().top - ($('.field-title').height() + 100);
  $("body, html").animate({
    scrollTop: elHeight
  }, 500);
});

$("#comp-btn").click(function(){
  console.log($('.field-title').height());
  let elHeight = $("#comp-sci").offset().top - $('.field-title').height() - 100;
  $("body, html").animate({
    scrollTop: elHeight
  }, 500);
});

$("#eng-btn").click(function(){
  console.log($('.field-title').height());
  let elHeight = $("#eng").offset().top - $('.field-title').height() - 100;
  $("body, html").animate({
    scrollTop: elHeight
  }, 500);
});

$("#comp-btn").click(function(){
  console.log($('.field-title').height());
  let elHeight = $("#comp-sci").offset().top - $('.field-title').height() - 100;
  $("body, html").animate({
    scrollTop: elHeight
  }, 500);
});