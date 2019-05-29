$(document).ready(function(){
    minHeight();
});

$(window).resize(function(){
    minHeight();
});

var minHeight = function(){
    var wheight = $(window).height();
    var header = $(".menu").outerHeight();
    var footer = $(".footer").outerHeight();
    var height = wheight - (header+footer);
    $(".container").css("min-height", height);

};
    
