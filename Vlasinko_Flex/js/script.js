$('.burger-btn').on('click',function(e){
	e.preventDefault();
	$(this).toggleClass('burger-menu_active');
	$('.nav-links').toggleClass('nav-links_active');
	
});

// document.querySelector('.burger-btn').addEventListener('click',function(e){
// 	e.target.classList.toggle('burger-menu_active');
// })


// slider
$('.slider-1').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-sm',
	autoplay:true
 });
 $('.slider-sm').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-1',
	focusOnSelect: true,
	autoplay:true,
	arrows:true
 });

 
// slider-section
 $(document).ready(function(){
	$('.slider-section').slick({
		autoplay:true,
		arrows:true,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows:false
				}
			 },
			 
		]
	});
 });

//  reviews-wrap_sl
$(document).ready(function(){
	$('.reviews-sl').slick({
		autoplay:true,
		arrows:true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
				  slidesToShow: 2
				}
			 },
			 {
				breakpoint: 576,
				settings: {
				  slidesToShow: 1,
				  arrows:false
				}
			 },
		]
	});
 });


//  фиксированная шапка
 var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 100){
        $(".nav").css({"background": "black"})
    }
    if(100 > scrolled){
        $(".nav").css({"background": "transparent"})         
    }

}