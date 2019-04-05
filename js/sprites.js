var matrix = document.getElementById('matrix');

var newImage = function(code, type){
  var img = document.createElement('img');
  img.src = "img/"+type+"/"+code+".png";
  img.name = code;
  img.className = type;
  return img;
}

var getTd = function(x, y){
  return matrix.rows[y].getElementsByTagName('td')[x];
}

var newCartel = function(x, y, text, code){
  var td = getTd(x, y);
  var img = newImage(code, 'cartels');
  img.setAttribute('text', text);
  td.appendChild(img);
}

var newDecor = function(x, y, code){
  var td = getTd(x, y);
  var img = newImage(code, 'decors');
  td.appendChild(img);
}
