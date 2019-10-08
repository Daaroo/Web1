
AOS.init();
(function($) {
	"use strict"; // Start of use strict
  
	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		  $('html, body').animate({
			scrollTop: (target.offset().top - 70)
		  }, 1000, "easeInOutExpo");
		  return false;
		}
	  }
	});
  
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function() {
	  $('.navbar-collapse').collapse('hide');
	});
  
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
	  target: '#mainNav',
	  offset: 100
	});
  
	// Collapse Navbar
	var navbarCollapse = function() {
	  if ($("#mainNav").offset().top > 100) {
		$("#mainNav").addClass("navbar-shrink");
	  } else {
		$("#mainNav").removeClass("navbar-shrink");
	  }
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);
  
  })(jQuery); // End of use strict
  
  

  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
	var slides = document.getElementsByClassName("slideShow");
	for (var i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 5000); // Change image every 2 seconds
  }

/* 
  var slideShow = document.getElementById("slideShow");
  var imageSrc = ['baner.jpg' , 'Facebook-512.png' , 'baner.jpg' , 'Facebook-512.png'];

  for(var i = 0; i < imageSrc.length; i++)
  {
	  var image = new Image();
	  image.src = "img/" + imageSrc[i];
	  slideShow.appendChild(image);

  }
slideShow[0].setAttribute("class", "current");
var i = 0;
setInterval(function() {
	slideShow.childNodes[i % imageSrc.length].setAttribute("class", "");
	slideShow.childNodes[i+1 % imageSrc.length].setAttribute("class", "current")
	i++;
}, 1000);

 */
 /*
 var link = "http://www.someurl.com";
 var preview = document.querySelectorAll ("#preview");
 preview[0].setAttribute("data", link);
 */	
/*

window.onload = function ()
{
	function test () {
	for(i = 0; i < images.length + 1  ; i++)
	{

		document.slide.src = images[i];
		if( i = images.length)
		{
			i = 0;
		}
	}

	}
setTimeout(test, 2000);
};
*/