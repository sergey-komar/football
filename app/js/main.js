$(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
      
        // appendArrows:'.arr',
        prevArrow: ' <img src="./images/home/arrow (1).png" class="slick-prev-header" alt="">',
	    nextArrow: '<img src="./images/home/arrow.png" class="slick-next-header" alt="">',
       
    })


    $('.camp-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendArrows: '.camp-slider__arrows',
        prevArrow: ' <img src="./images/home/icon/camp-arrow.svg" alt="arrow">',
	    nextArrow: '<img src="./images/home/icon/camp-arroww.svg" alt="arrow">',
        infinite: true,
        dots: true,
    });

    $('.camp-slider__inner').on('afterChange', function(event, slick, currentSlide){
        $("#test").text(currentSlide + 1);
     });
   
// ACCARDION
$('.accardion__btn').on('click', function(){
   $(this).next().slideToggle(500); 
})

// TRAINERS
$('.trainers-slider__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: '.trainers__arrows',
    prevArrow: ' <img src="./images/home/icon/camp-arrow.svg" alt="arrow">',
    nextArrow: '<img src="./images/home/icon/camp-arroww.svg" alt="arrow">',

    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           
    
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]   
});


// SCHOOLL
$('.school-slider__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    appendArrows: '.school__arrows',
    prevArrow: ' <img src="./images/home/icon/camp-arrow.svg" alt="arrow">',
    nextArrow: '<img src="./images/home/icon/camp-arroww.svg" alt="arrow">',

    responsive: [
       
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
           
    
          }
        },
        {
            breakpoint: 550,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
             
      
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
             
      
            }
          }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]   



});

// REVIEWS
$('.reviews-slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: '.reviews__arrows',
    prevArrow: ' <img src="./images/home/icon/camp-arrow.svg" alt="arrow">',
    nextArrow: '<img src="./images/home/icon/camp-arroww.svg" alt="arrow">',
});
$('.reviews-slider__inner').on('afterChange', function(event, slick, currentSlide){
    $("#curent").text(currentSlide + 1);
 });



//  SEASON
$('.season-slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: '.season-slider__arrows',
    prevArrow: '  <img src="./images/winter/season-arrow-left.svg" alt="">',
    nextArrow: ' <img src="./images/winter/season-arrow-right.svg" alt="">',
    infinite: true,
    dots: true,
})
$('.season-slider__inner').on('afterChange', function(event, slick, currentSlide){
    $("#test").text(currentSlide + 1);
 });


//  HOTEL
$('.hotel-slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    appendArrows: '.camp-slider__arrows',
    prevArrow: ' <img src="./images/home/icon/camp-arrow.svg" alt="arrow">',
    nextArrow: '<img src="./images/home/icon/camp-arroww.svg" alt="arrow">',
    infinite: true,
    dots: true,
});

$('.hotel-slider__inner').on('afterChange', function(event, slick, currentSlide){
    $("#test").text(currentSlide + 1);
 });



 // ACCARDION WINTER
$('.questions-accardion__btn').on('click', function(){
    $(this).next().slideToggle(500); 
 })



//  TRAINERS SLIDER
$('.trainer-slider__inner-one').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    appendArrows: '.trainer-slider__arrows-one',
    prevArrow: '  <img src="./images/winter/season-arrow-left.svg" alt="">',
    nextArrow: ' <img src="./images/winter/season-arrow-right.svg" alt="">',
   
    dots: true,
})
$('.trainer-slider__inner-two').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    appendArrows: '.trainer-slider__arrows-two',
    prevArrow: '  <img src="./images/winter/season-arrow-left.svg" alt="">',
    nextArrow: ' <img src="./images/winter/season-arrow-right.svg" alt="">',
   
    dots: true,
})
$('.trainer-slider__inner-three').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    appendArrows: '.trainer-slider__arrows-three',
    prevArrow: '  <img src="./images/winter/season-arrow-left.svg" alt="">',
    nextArrow: ' <img src="./images/winter/season-arrow-right.svg" alt="">',
   
    dots: true,
})
$('.trainer-slider__inner-four').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    appendArrows: '.trainer-slider__arrows-four',
    prevArrow: ' <img src="./images/winter/season-arrow-left.svg" alt="">',
    nextArrow: ' <img src="./images/winter/season-arrow-right.svg" alt="">',
    dots: true,
})

$('.trainer-slider__inner-fife').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    appendArrows: '.trainer-slider__arrows-fife',
    prevArrow: ' <img src="./images/winter/season-arrow-left.svg" alt="">',
    nextArrow: ' <img src="./images/winter/season-arrow-right.svg" alt="">',
    dots: true,
})

$('.trainer-slider__inner-six').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    appendArrows: '.trainer-slider__arrows-six',
    prevArrow: ' <img src="./images/winter/season-arrow-left.svg" alt="">',
    nextArrow: ' <img src="./images/winter/season-arrow-right.svg" alt="">',
    dots: true,
})


// MODAL
const modalCall = $('[data-modal]');
const modalCalllose = $('[data-close]');


	modalCall.on('click', function(e){
		e.preventDefault();

		let $this = $(this);
		let modalid = $this.data('modal');

		$(modalid).addClass('show');
		
		
	});

	modalCalllose.on('click', function(e){
		e.preventDefault();

		let $this = $(this);
		let modalParent = $this.parents('.modal');

		modalParent.removeClass('show');
		
	});



});


// MOBILE BTN
document.querySelector('.nav-icon').addEventListener('click', function(){
  document.querySelector('.nav-icon__middle').classList.toggle('active');
  document.querySelector('.header__content-mobile').classList.toggle('mobile-active')
})