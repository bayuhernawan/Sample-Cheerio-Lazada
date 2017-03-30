var request   = require ('request');
var cheerio   = require ('cheerio');
var mysql     = require ('mysql');
var sequelize = require ('sequelize');

 request('http://www.lazada.co.id/beli-handphone/apple/?itemperpage=120&q=iphone+6&searchredirect=iphone+6', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $     = cheerio.load(html);
    $('span.c-product-card__discount').each(function(i, element){
     var harga = $(this).prev();
     $('div.c-product-card__rating').each(function(i, element){
      var produk = $(this).prev();
      // $('a.c-product-card__img-placeholder-inner').each(function(i,element){
      //   var url = a.attr('href');
     console.log(produk.text());
     console.log(harga.text());
    //  console.log(url.text));
     })
   });
  // });
  }
});
