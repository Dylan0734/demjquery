$(document).ready(function(){

    //variabile per localizzazione dell'id a fine URL
    var pageID=window.location.search.trim();

    //variabile per ottenere info dal server
    var itemSettings = {
        "async":true,
        "crossDomain":true,
        "url":"https://my-json-server.typicode.com/Dylan0734/jsonserver/singlevault"+pageID,
        "method":"GET",
        "dataType":"json"
    }

    //funzione per riempire i div singleItem e singleBrand
    $.ajax(itemSettings).done(function(response){
        var item="";
        var brand="";
        $.each(response, function(i, obj) {
            item+='<div class="card">';
            item+='<img src="'+obj.img+'" class="card-img-top" alt="">';
            item+='<div class="card-body">';
            item+='<h5 class="card-title">'+obj.title+'</h5>';
            item+='<p class="card-text">'+obj.desc+'</p>';
            item+='</div>';
            item+='<div class="card-footer text-muted">'+obj.brand+'</div>';
            item+='</div>';
            brand+='<button type="button" class="list-group-item list-group-item-action active">'+obj.brand+'</button>';
        });
        $("#singleItem").append(item);
        $("#singleBrand").append(brand);

    });
});
