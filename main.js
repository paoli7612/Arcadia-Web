$(function(){
  init();
  loadTools();

});


var init = function(){
  $('td').remove();
  nameMap = document.getElementById('nameMap').value;
  $.getJSON('maps/'+nameMap+'.json').done(function (data){
    loadMap(data);
    DATA = data;
  });
  $('#form').hide();
  setInterval(animateLiquids, 1000);
}
