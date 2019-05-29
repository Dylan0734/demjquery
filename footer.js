$(document).ready(function(){
    minHeight();

    
    $('#search').keyup(function(){
        var text = $(this).val().toLowerCase();
        $("#listItems .card-wrap").each(function(){
            var title = $(this).find("h5").text().toLowerCase();
            var content = $(this).find("p").text().toLowerCase();
            if (!title.includes(text) && !content.includes(text)){
                $(this).hide();
            }
            else{
                $(this).show();
            }
        });
    });
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
