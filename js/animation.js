var frameLiquids = 1;
var animateLiquids = function(){
  frameLiquids %= 2;
  frameLiquids++;
  $("img.liquids").each(function (v,i){
    i.setAttribute("src","img/liquids/"+i.name+"."+ frameLiquids + ".png")
  });
}
