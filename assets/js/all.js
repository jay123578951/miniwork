// Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  initialSlide : 1,
  grabCursor : true,
  watchOverflow: true,
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

// blog loadMore
$(document).ready(function () {
  $('.blogCnt:lt(3)').fadeIn();
  var items =  $(".blogCnt").length;;
  var shown =  3;
  console.log(items);
  $('#loadMore').click(function () {
      shown = $('.blogCnt:visible').length + 3;
      if(shown < items) {
        $('.blogCnt:lt('+shown+')').fadeIn();
      } else {
        $('.blogCnt:lt('+items+')').fadeIn();
        $('#loadMore').hide();
      }
  });
});