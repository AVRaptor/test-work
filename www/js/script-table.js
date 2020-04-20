$(document).ready(function() {
  var array = [];
  $('table tr').each(function(){
    var title = $(this).find('td:eq(0)').text();
    var price = $(this).find('td:eq(1)').text();
    array.push({'name' : title , 'price' : price});
  });
  
  var fullInfo = array.filter(title => (title.name != '' && title.price != ''));
  var priceSumm = 0;
  var titles = [];
  for (let i = 0; i < fullInfo.length; i++ ) {
    numPrice = Number(fullInfo[i].price.replace(/\$/g, ''));
    priceSumm += numPrice;
    titles.push(fullInfo[i].name);
  }
  console.table(titles);
  console.log("Общая стоимость - " + priceSumm + " $");

  $('body').append('<p> Таблица выборки названий c ценой </p>');
    for (let i = 0; i < titles.length; i++ ) {
      $('body').append('<tr class="new-tr"><td>' + titles[i] + '</td></tr>');
    }
    $('.new-tr').wrapAll('<table class="table-new">');
  $('body').append('<div>Общая стоимость отфильтрованных фильмов - ' + priceSumm + ' $ </div>');
  
});