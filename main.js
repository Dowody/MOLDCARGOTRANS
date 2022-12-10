// HAMB MENU DISSAPEAR ON SCROLL
window.addEventListener("scroll", () => {
    document.getElementById("side-menu").checked = false;
});

// HAMB MENU DISSAPEAR ON X BUTTON
const xbutton = document.querySelector(".xbutton");

xbutton.addEventListener("click", () => {
    document.getElementById("side-menu").checked = false;
})


// IMAGE MANUALPLAY
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
}

// IMAGE AUTOPLAY
var myIndex = 0;

// carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}  
  x[myIndex-1].style.display = "block";  

  setTimeout(carousel, 10000);  
    
}

// RESULT NUMBER COUNTER UP
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }

});

// HOME BUTTON APPEAR
$window = $(window);
$(window).scroll(function() {
  // var results = $('.results').offset().top;
  // var features = $('.features').offset().top;
  if($window.scrollTop() > 800)
  {
    $('.home-btn').addClass("active");
  }

  
});

// ELEMENTS REAVEAl ON SCROLL
window.addEventListener('scroll', reveal);

function reveal()
{
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++)
    {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealTop < windowheight - revealpoint)
        {
            reveals[i].classList.add("active");
        }
        else
        {
            reveals[i].classList.remove("active");
        }
    }
}


// TESTIMONIALS CHANGE 
var slideIndex = 1;
showTesti(slideIndex);

function plusTestimonial(n) {
  showTesti(slideIndex += n);
}

function currentTesti(n) {
  showTesti(slideIndex = n);
}

function showTesti(n) {
  var i;
  var x = document.getElementsByClassName("testimonial-slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
}

// AUTOPLAY TESTIMONIALS
var myIndex = 0;

carouselTesti();

function carouselTesti() {
  var i;
  var x = document.getElementsByClassName("testimonial-slides");
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}  
  x[myIndex-1].style.display = "block";  

  setTimeout(carouselTesti, 8000);  
    
}


// FAQ
$(document).ready(function() {

  $('.faq_question').click(function() {

      if ($(this).parent().is('.open')) {
          $(this).closest('.faq').find('.faq_answer_container').slideUp();
          $(this).closest('.faq').removeClass('open');
      } else {
          $('.faq_answer_container').slideUp();
          $('.faq').removeClass('open');
          $(this).closest('.faq').find('.faq_answer_container').slideDown();
          $(this).closest('.faq').addClass('open');
      }

  });
});

// PRELOAD
setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 600);