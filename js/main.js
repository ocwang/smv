/*
$(document).ready(function(){
		var splashHeight = $(window).height() - $('#nav-affix').height();
		$('#new-splash').css("height", splashHeight);
		$('#nav-affix').affix({
				offset: {
						top: $(window).height()
				}
		});
});
*/

jQuery.event.add(window, "load", resizeFrame);
jQuery.event.add(window, "resize", resizeFrame);

function resizeFrame()
{
	var h = $(window).height();
	$("#splash").css('height', h);
}

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
	if ($(".navbar").offset().top > 65) {
		$("header").addClass("solid-header");
	} else {
		$("header").removeClass("solid-header");
	}
});