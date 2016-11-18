
$(function () {
	$(window).on('load', function (){
		$('#js__pageTop').hide();
	});
	$(window).on('scroll', function () {
		if($(this).scrollTop() > 150) {
			$('#js__pageTop').stop().fadeIn();
		} else {
			$('#js__pageTop').stop().fadeOut();
		}
	});
	
	$('a[href^=#]').click(function () {
		var href = $(this).attr("href"),
			target = $(href === "#" || href === "" ? 'html' : href);
		target.velocity("scroll", { duration: 1200, easing: "ease" });
		return false;
	});
});
