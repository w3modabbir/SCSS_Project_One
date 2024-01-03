$(function(){
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        
      });

    $('.testi_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      });

      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

  // classes 
  var containerEl = document.querySelector('.class_main');
  var mixer = mixitup(containerEl);
  // breand 
  $('.breand_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:'.left',
    nextArrow:'.right',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });

})