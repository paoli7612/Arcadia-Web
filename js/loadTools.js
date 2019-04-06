var tool_id = null;
var tool_type = null;

var select = function (id, type){
  var h1_id = document.getElementById('tool_id')
  var h1_type = document.getElementById('tool_type')
  var img = document.getElementById('tool_image');
  tool_id = id;
  tool_type = type;
  h1_id.innerHTML = tool_id;
  h1_type.innerHTML = tool_type;
  img.src = "img/"+type+"/"+id+".png";
  if (type == 'cartels'){
    $("#form").show();
  } else {
    $("#form").hide();
  }
}

var loadTools = function(){
  var tiles = document.getElementById('tiles');

  var load = function(type, len){
    var div = document.createElement('div');
    for (id=1; id<=len; id++){
      var img = newImage(id, type);
      img.className = "tool";
      img.setAttribute('onclick', "select("+id+",'"+type+"')");
      div.appendChild(img);
    }
    tiles.appendChild(div);
  }

  load('decors', 5);
  load('floors', 81);
  load('walls', 16);
  load('cartels', 2);
  load('liquids', 3);

}

document.onclick = function (e){
  change(e.toElement)
}

var scroll = false;
document.onmousemove = function(e){
  if (scroll)
    change(e.path[0]);
}
document.onkeypress = function(e){
  if (e.key == 'q')
    scroll = !scroll;
}


var change = function(e){
  if (tool_id == null || tool_type == null) {}
  else {
    if (e.className == 'walls' || e.className == 'floors' || e.className == 'liquids'){
      if (tool_type == 'decors'){
        var img = newImage(tool_id, tool_type);
        e.parentElement.appendChild(img)
      } else if (tool_type == 'cartels'){
        var img = newImage(tool_id, tool_type)
        var text = document.getElementById('formCartel').value;
        img.setAttribute('text', text);
        e.parentElement.appendChild(img);
      } else {
        var img = newImage(tool_id, tool_type)
        var p = e.parentElement;
        e.remove();
        p.appendChild(img);
      }
    } else if (e.className == 'decors' || e.className == 'cartels'){
      e.remove();
    }
  }
}
