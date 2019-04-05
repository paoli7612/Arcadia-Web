var loadMap = function(mat){
  var table = document.getElementById('matrix');
  for (var y=0; y<TILE_Y; y++){
    var tr = document.createElement('tr');
    for (var x=0; x<TILE_X; x++){
      var td = document.createElement('td');
      td.className = "tile";
      var f = mat['floors'][y][x];
      var w = mat['walls'][y][x];
      var l = mat['liquids'][y][x];
      if (f) {
        img = newImage(f, 'floors');
      } else if (w){
        img = newImage(w, 'walls');
      } else if (l){
        img = newImage(l, 'liquids');
      }
      td.appendChild(img);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  var cartels = mat["cartels"];
  for (var i=0; i<cartels.length; i++){
    c = cartels[i];
    newCartel(c[0],c[1],c[2],c[3])
  }

  var decors = mat["decors"];
  for (var i=0; i<decors.length; i++){
    c = decors[i];
    newDecor(c[0],c[1],c[2])
  }
}
