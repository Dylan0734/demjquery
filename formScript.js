$(document).ready(function(){
    $("#send").on('click', function(e){
        e.preventDefault();
        
        var name,mail, text;
        name=$("#name").val();
        mail=$("#mail").val();
        text=encodeURIComponent($("#mex").val());

        window.location.href="mailto:andrea.botta2001@gmail.com?subject="+mail+"&body="+text;

    });
});