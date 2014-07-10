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


document.createElement("section"); // Fix bc IE can't render section tag

$(document).ready(function(){
		var $window = $(window);
		if( $window.width() > 768){
			$('section[data-type="background"]').each(function(){
		    var $bgobj = $(this); // assigning the object

		    $(window).scroll(function() {
			  	var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));

		      // Put together our final background position
		      var coords = '50% '+ yPos + 'px';

		      // Move the background
		      $bgobj.css({ backgroundPosition: coords });
		    });
		  })
		}
});