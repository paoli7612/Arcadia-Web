var save = function(){

  var rows = document.getElementById('matrix').rows;

  for (y=0; y<TILE_Y; y++){
    for (x=0; x<TILE_X; x++){
      row = rows[y];
      td = row.getElementsByTagName('td')[x];
      images = td.getElementsByTagName('img');
      for (i=0; i<images.length; i++){
          type = images[i].name;
          id = parseInt(images[i].getAttribute('code'));
          console.log(x, y);
          DATA[type][y][x] = id;
          if (type == "walls"){
            DATA['floors'][y][x] = 0;
          } else if(type == "floors"){
            DATA['walls'][y][x] = 0;
          }
      }
    }
  }
  a = JSON.stringify(DATA)

  console.log(a);
}
