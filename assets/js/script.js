var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 4,
    
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".mySwiperr", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function openIt(){
    const url ='http://127.0.0.1:5500/assets/second.html'
    window.open(url);
  }


  $(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(''); // will first fade out the loading animation 
    $('#preloader').delay(800).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(1000).css({'overflow':'visible'});
  })