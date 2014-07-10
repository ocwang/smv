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
    $("#new-splash").css('height', h);
    // $("#new-splash").css('height',(h < 768 || w < 1024) ? 500 : 400);
}