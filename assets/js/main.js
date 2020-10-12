jQuery(function ($) {



    $(window).scroll(function () {
      
        scrollTop = $(window).scrollTop();

        if (scrollTop > $('header').height()) {
            $('header').addClass('scrollNav');
        }

        else {
            $('header').removeClass('scrollNav');
        }    
    });   
    $('.whatweDoCar').owlCarousel({
      autoplay: true,
      loop: true,
      dots:false,
      nav:true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

      margin: 15,
      responsive: {
        0: {
          items: 1,
          margin:0,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    });
    $('.CausesSlider').owlCarousel({
      autoplay: true,
      loop: true,
      nav:true,
      dots:false,
      margin: 15,
      responsive: {
        0: {
          items: 1,
          margin:0,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    });
    $('.LatestCar').owlCarousel({
      autoplay: true,
      loop: true,
      nav:true,
      dots:false,
      margin: 15,
      responsive: {
        0: {
          items: 1,
     
          margin:0,
        },
        760: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1150:{
          items: 4,
        }
      }
    });
    $('.VolunteerCar').owlCarousel({
      autoplay: false,
      loop: true,
      nav:true,
      dots:false,
      margin: 110,
      responsive: {
        0: {
          items: 1,
     
          margin:0,
        },
        760: {
          items: 2,
          margin:0,
        },
        1150:{
          items: 3,
          
        }
      }
    });
    
    $('.BlogSlider').owlCarousel({
      autoplay: true,
      loop: true,
      nav:true,
      dots:false,
      margin: 15,
      responsive: {
        0: {
          items: 1,
          margin:0,

        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        }
      }
    });
});

