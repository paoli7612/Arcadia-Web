var loadMap = function(mat){
  var table = document.getElementById('matrix');
  for (var y=0; y<TILE_Y; y++){
    var tr = document.createElement('tr');
    for (var x=0; x<TILE_X; x++){
      var td = document.createElement('td');
      td.className = "tile";
      var img = document.createElement('img');


      var f = mat['floors'][y][x];
      if (f) {
        img.src = "img/floors/"+f+".png";
        img.name = "floors";
        img.setAttribute('code', f);
      } else {
        var w = mat['walls'][y][x];
        img.src = "img/walls/"+w+".png";
        img.name = "walls";
        img.setAttribute('code', w);
      }
      td.appendChild(img);

      var d = mat['decors'][y][x];
      if (d){
        var img = document.createElement('img');
        img.src = 'img/decors/'+d+".png";
        img.className = "decor";
        img.name = "decors";
        img.setAttribute('code', d);
        td.appendChild(img);
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
