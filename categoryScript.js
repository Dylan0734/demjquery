$(document).ready(function(){

    //variabile per ottenere valore passato tramite URL, esegunedo la decodifica dell'URL
    var pageID=decodeURIComponent(window.location.search.trim());

    //variabili server
    var itemSettings = {
        "async":true,
        "crossDomain":true,
        "url":"https://my-json-server.typicode.com/Dylan0734/jsonserver/vaults",
        "method":"GET",
        "dataType":"json"
    }

    var brandSettings = {
        "async":true,
        "crossDomain":true,
        "url":"https://my-json-server.typicode.com/Dylan0734/jsonserver/brands",
        "method":"GET",
        "dataType":"json"
    }

    //metodo per riempire il div listItems solo se il valore presente nell'URL corrisponde al brand dell'oggetto attualmente ciclato
    $.ajax(itemSettings).done(function(response){
        var item="";
        $.each(response, function(i, obj) {
            if("?id="+obj.brand == pageID){
                item+='<div class="col-lg-4">';
                item+='<div class="card '+obj.id+'" id="'+obj.id+'">';
                item+='<a href="Card.html?id='+obj.id+'">';
                item+='<img src="'+obj.img+'" class="card-img-top" alt="" width=700px height=150px>';
                item+='<div class="card-body" style="overflow:hidden; height:130px;">';
                item+='<h5 class="card-title">'+obj.title+'</h5>';
                item+='<p class="card-text">'+obj.desc+'</p>';
                item+='</div>';
                item+='<div class="card-footer text-muted">'+obj.brand+'</div>';
                item+='</a>';
                item+='</div>';
                item+='</div>';
            }
            
        });
        $("#listItems").append(item);

    });

    //metodo per settare come active sulla lista brandList il brand corrispondente agli oggetti mostrati
    $.ajax(brandSettings).done(function(response){
        var brand="";
        var act;
        $.each(response, function(i, obj){
            if("?id="+obj.brand == pageID){
                act=" active";
            }
            else
                act="";
            brand+='<a class="list-group-item list-group-item-action'+act+'"  href="category.html?id='+obj.brand+'">'+obj.brand+'</a>';
            $(document).prop("title", "Parkour - "+pageID.substring(4,pageID.length));
        });+
        $("#brandList").append(brand);
        
    });
});
