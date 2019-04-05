var Matrix = function(x, y){
  var matrix = [];
    for(var i=0; i<y; i++) {
        matrix[i] = [];
        for(var j=0; j<x; j++) {
            matrix[i][j] = 0;
        }
    }
    return matrix
}

var save = function(){
  var rows = document.getElementById('matrix').rows;

  DATA['cartels'] = [];
  DATA['decors'] = [];
  DATA['walls'] = Matrix(TILE_X, TILE_Y);
  DATA['liquids'] = Matrix(TILE_X, TILE_Y);
  DATA['floors'] = Matrix(TILE_X, TILE_Y);

  for (y=0; y<TILE_Y; y++){
    for (x=0; x<TILE_X; x++){
      row = rows[y];
      td = row.getElementsByTagName('td')[x];
      images = td.getElementsByTagName('img');
      for (i=0; i<images.length; i++){
          type = images[i].className;
          id = parseInt(images[i].name);
          if (type == 'cartels'){
            DATA['cartels'].push([x, y, images[i].getAttribute('text'), id]);
          } else if (type == 'decors'){
            DATA['decors'].push([x, y, id]);
          } else {
            DATA[type][y][x] = id;
            if (type == "walls"){
              DATA['floors'][y][x] = 0;
            } else if(type == "floors"){
              DATA['walls'][y][x] = 0;
            }
          }
      }
    }
  }
  a = JSON.stringify(DATA)
  document.body.innerHTML = a;
  console.log(a);
}
