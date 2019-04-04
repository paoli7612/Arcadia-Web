var loadMap = function(mat){
  var table = document.getElementById('matrix');
  for (var y=0; y<TILE_Y; y++){
    var tr = document.createElement('tr');
    for (var x=0; x<TILE_X; x++){
      var td = document.createElement('td');
      td.className = "tile";
      var img = document.createElement('img');

      if (mat['floors'][y][x]) {
        img.src = "img/floors/"+mat['floors'][y][x]+".png";
        img.name = "floors";
      } else {
        img.src = "img/walls/"+mat['walls'][y][x]+".png";
        img.name = "walls";
      }
      td.appendChild(img);

      if (mat['decors'][y][x]){
        var img = document.createElement('img');
        img.src = 'img/decors/'+mat['decors'][y][x]+".png";
        img.className = "decor";
        img.name = "decors";
        td.appendChild(img);
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
