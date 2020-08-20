// Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  initialSlide : 1,
  grabCursor : true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      grabCursor : false,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// Loading
// var $loading = $('#loading');
// var $progress = $('#progress');
// window.onload = () => {
//   // setTimeout(() => {
//   //   $loading.hide();
//   // },5200);
// };

//Go oop button:
// mybutton = document.getElementById("gotopBtn");

// window.onscroll = function() {
//   scrollFunction()
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.opacity = "1";
//   } else {
//     mybutton.style.opacity = "0";
//   }
// }

// Add shadow of navbar
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();

    if (scrollVal >= 72) {
      $("#headerNav").addClass("shadow");
    } else {
      $("#headerNav").removeClass("shadow");
    }
  });
});

// Works tabs
$("#works__tabs #works__nav-tabs a").click(function() {
  var position = $(this).parent().position();
  var width = $(this).parent().width();
  $("#works__tabs .slider").css({"left":+ position.left,"width":width});
});
var actWidth = $("#works__tabs #works__nav-tabs").find(".active").parent("li").width();
var actPosition = $("#works__tabs #works__nav-tabs .active").position();
$("#works__tabs .slider").css({"left":+ actPosition.left,"width": actWidth});

