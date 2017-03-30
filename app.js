var request   = require ('request');
var cheerio   = require ('cheerio');
var mysql     = require ('mysql');
var sequelize = require ('sequelize');
var baseUrl = "http://www.lazada.co.id"
 request(baseUrl+'/beli-handphone/apple/?itemperpage=120&q=iphone+6&searchredirect=iphone+6', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $     = cheerio.load(html);
    $('.c-product-list__item').each(function(data){
    	var link = baseUrl+$(this).find('a').attr('href')
    	var title = $(this).find('.c-product-card__description > a').text()
    	
    })
    $('span.c-product-card__discount').each(function(i, element){
     var harga = $(this).prev();
     $('div.c-product-card__rating').each(function(i, element){
        var produk = $(this).prev();
        //console.log(produk.text());
     	//console.log(harga.text());
     })
   });
  // });
  }
});
