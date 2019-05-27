$(document).ready(function(){

    var pageID=decodeURIComponent(window.location.search.trim());

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
        });+
        $("#brandList").append(brand);
    });
});
