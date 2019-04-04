$(function(){
  $.getJSON('maps/spawn.json').done(function (data){
    createMatrix(data);
  })
});
