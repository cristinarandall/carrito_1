

    var products_array = [];
    
    //function render_products_callback() {};
    
    conekta.setToken("qEGKYXVBucNYlak97cJz");
    
    
    conekta.display.getProducts({}, function(p){    
    for (var i = 0, l = p.length; i < l; ++i) {
    products_array[i] = p[i];
    
    var id = p[i].getAttributes()["id"];
    var price = p[i].getAttributes()["price"];
    var image = p[i].getAttributes()["image"];
    image = image.replace("catalog_main","three_col");
    var title = p[i].getAttributes()["name"];

    var html = '<article class="product span4 first" id="' + id + '">  <div class="view view-thumb"> <img width="600" height="600" src="' + image + '" class="attachment-post-thumbnail wp-post-image" >  <div class="mask"> <p> </p>  <a class="info" href="product.html#product_id=' + id + '">Ver</a>   </div> </div> <h5><span class="amount">' + price +'</span></h5> <p class="product-title"><a href="product.html#product_id=' + id + '"> ' + title +' </a></p>  </article>'
    
    $(".feat .products").append(html);
    
    
    }

    });

