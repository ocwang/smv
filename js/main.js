$(document).ready(function(){
    var splashHeight = $(window).height() - $('#nav-affix').height();
    $('#splash').css("height", splashHeight);
    $('#nav-affix').affix({
        offset: {
            top: $(window).height()
        }
    });
});