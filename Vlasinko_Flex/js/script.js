$('.burger-btn').on('click',function(e){
	e.preventDefault();
	$(this).toggleClass('burger-menu_active');
	$('.nav-links').toggleClass('nav-links_active');
	
});

// document.querySelector('.burger-btn').addEventListener('click',function(e){
// 	e.target.classList.toggle('burger-menu_active');
// })





// slider
$('.slider').slick({
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
	asNavFor: '.slider',
	focusOnSelect: true,
	autoplay:true,
	arrows:true
 });

 

 $(document).ready(function(){
	$('.slider-section').slick({
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