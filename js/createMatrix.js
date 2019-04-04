var createTable = function(width, height){
  var table = document.getElementById('matrix');
  for (var y=0; y<height; y++){
    var tr = document.createElement('tr');
    for (var x=0; x<width; x++){
      var td = document.createElement('td');
      td.className = "tile";
      var img = document.createElement('img');
      var l = Math.floor(Math.random() * 3);
      l = ["a", "b", "c"][l];
      img.src = "img/"+l+".png";
      td.appendChild(img)
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
