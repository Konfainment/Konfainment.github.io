$('.center').slick({
    speed: 0,
    appendArrows: $('.slick-arrow'),
    prevArrow: '<button id="prev" class="btn"></button>',
    nextArrow: '<button id="next" class="btn"></button>',
    accessibility: true,
    centerMode: true,
    centerPadding: '233px',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 999,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 999,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
      });