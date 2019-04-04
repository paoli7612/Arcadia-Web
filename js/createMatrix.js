var createMatrix = function(mat){
  var table = document.getElementById('matrix');
  for (var y=0; y<TILE_Y; y++){
    var tr = document.createElement('tr');
    for (var x=0; x<TILE_X; x++){
      var td = document.createElement('td');
      td.className = "tile";
      var img = document.createElement('img');
      console.log(mat);
      if (mat['floors'][y][x]) {
        img.src = "img/floors/"+mat['floors'][y][x]+".png";
      } else {
        img.src = "img/walls/"+mat['walls'][y][x]+".png";
      }
      td.appendChild(img)
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
