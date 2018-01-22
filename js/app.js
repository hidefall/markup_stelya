$(document).ready(function(){
	$('.block h3').matchHeight();
	$('.block p+p').matchHeight();
	$('.slider').slick({
		autoplay:true,
		autoplaySpeed:3000,
		arrows: false
	});
	$('#toggle').on('click', function(event){
		event.preventDefault();
		$("nav>ul").toggleClass('hidden-xs, hidden-sm');
		console.log('hey')
	})
});
