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
    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
      $('.nav-link[href^="#"').each(function () {
        console.log($(this).attr('href')); 
        var refElement = $($(this).attr("href"));
      //   console.log($(this).attr("href")); //log
        if (refElement.length&&refElement.position().top-100 <= scrollPosition) {
        $('.nav-link').removeClass("active");
        $(this).addClass("active");
        }
        else if( $(document).scrollTop() <= 100){
          $('.nav-link').removeClass("active");
          $('.nav-link.home').addClass("active");
        }
        else{
        $(this).removeClass("active"); 
      
        }
      });
    }
    $(document).on("scroll", onScroll);
    $('.navbar-collapse .nav-link').on('click', function () {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    
      return false;
    });
    
    $('.whatweDoCar').owlCarousel({
      autoplay: true,
      loop: true,
      dots:false,
      nav:true,
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

