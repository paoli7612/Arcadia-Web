var filter = function(checked, type){
  var decors = $("img."+type);
  if (checked){ decors.show(); }
  else { decors.hide(); }
}
