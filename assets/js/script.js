$(document).ready(function() {
    $('#lang').niceSelect();
  });

  

  $(document).ready(function(){
    $('.cases-slider').slick({
      slidesToShow: 3,
      centerMode: true,
      centerPadding:"0",
    slidesToScroll: 1,
    appendArrows:".cases-slider__arrow"
    });
  });