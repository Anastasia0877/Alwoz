// select
$(document).ready(function() {
    $('#lang').niceSelect();
  });

// burger-menu
$('.menu-icon').on('click', function(){
  $('.menu-icon, .menu').toggleClass("active");
  // $('body').toggleClass("overlay");
})

$(document).click(function(e) {
  if (!$(e.target).hasClass("active") &&
      $(e.target).parents(".site-nav").length === 0) {
        $('.menu-icon, .menu').removeClass("active");
        // $('body').removeClass("overlay");
  }
});
$('.menu-item').on('click', function(){
  $('.menu-icon, .menu').removeClass("active");
  // $('body').removeClass("overlay");
})  

// case-slider
  $(document).ready(function(){
    $('.cases-slider').slick({
      slidesToShow: 3,
      centerMode: true,
      centerPadding:"0",
    slidesToScroll: 1,
    appendArrows:".cases-slider__arrow"
    });
  });

//tabs 
  $(function() {
    var tab = $('#tabs .tabs-items > div'); 
    tab.hide().filter(':first').show(); 
    
    // Клики по вкладкам.
    $('#tabs .tabs-nav a').click(function(){
      tab.hide(); 
      tab.filter(this.hash).show(); 
      $('#tabs .tabs-nav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
   
    // Клики по якорным ссылкам.
    $('.tabs-target').click(function(){
      $('#tabs .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
    });
    
    // Отрытие вкладки из хеша URL
    if(window.location.hash){
      $('#tabs-nav a[href=' + window.location.hash + ']').click();
      window.scrollTo(0, $("#" . window.location.hash).offset().top);
    }
  });

  // new-slider
    $(document).ready(function(){
    $('.news-slider').slick({
      dots:false,
      arrows:true,
    appendArrows:".news-slider__arrow"
    });
  });
  // article-slider
  $(document).ready(function(){
    $('.article-slider').slick({
      dots:false,
      arrows:true,
    appendArrows:".article-slider__arrow"
    });
  });
  // youtube-slider
  $(document).ready(function(){
    $('.youtube-slider').slick({
      dots:false,
      arrows:true,
    appendArrows:".youtube-slider__arrow"
    });
  });

  // accordion
  $(function() {
	
    //BEGIN
    $(".accordion__title").on("click", function(e) {
  
      e.preventDefault();
      var $this = $(this);
  
      if (!$this.hasClass("accordion-active")) {
        $(".accordion__content").slideUp(400);
        $(".accordion__title").removeClass("accordion-active");
        $('.accordion__arrow').removeClass('accordion__rotate');
      }
  
      $this.toggleClass("accordion-active");
      $this.next().slideToggle();
      $('.accordion__arrow',this).toggleClass('accordion__rotate');
    });
    //END
    
  });


  // account-tabs
  $(function() {
	var tab = $('#account-tabs .account__tabs-items > div'); 
	tab.hide().filter(':first').show(); 
  $('#account-tabs .account__tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#account-tabs .account__tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#account-tabs .account__tabs-nav a[href=' + $(this).attr('href')+ ']').click();
	});
	
	// Отрытие вкладки из хеша URL
	if(window.location.hash){
		$('#account__tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#" . window.location.hash).offset().top);
	}
});


// loading file
$('.input-file input[type=file]').on('change', function(){
	let file = this.files[0];
	$(this).closest('.input-file').find('.input-file-text').html(file.name);
});