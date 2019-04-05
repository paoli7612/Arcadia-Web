$(function(){
  $.getJSON('maps/spawn.json').done(function (data){
    loadMap(data);
    DATA = data;
    loadTools();
  });
  $('#form').hide();

  setInterval(animateLiquids, 1000);
});
