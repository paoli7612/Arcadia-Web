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
    for (i=0; i<len; i++){
      img = document.createElement('img');
      img.src="img/"+type+"/"+(i+1)+".png";
      img.setAttribute('onclick', "select("+(i+1)+",'"+type+"')");
      div.appendChild(img);
    }
    tiles.appendChild(div);
  }

  load('decors', 5);
  load('floors', 5);
  load('walls', 16);
  load('cartels', 2)
}

document.onclick = function (e){
  if (tool_id == null || tool_type == null) return;
  e = e.toElement;
  if (e.name == 'walls' || e.name == 'floors'){
    if (tool_type == 'decors' || tool_type == 'cartels'){
      i = document.createElement('img');
      i.src = "img/"+tool_type+"/"+tool_id+".png";
      i.setAttribute('code', tool_id);
      i.name = tool_type;
      i.className = "decor";
      if (tool_type == 'cartels'){
        var text = document.getElementById('formCartel').value;
        i.setAttribute('text', text);
      }
      e.parentElement.appendChild(i);
    } else  {
      e.name = tool_type;
      e.src = "img/"+tool_type+"/"+tool_id+".png"
      e.setAttribute('code', tool_id);
      e.name = tool_type;
    }
  } else if (e.name == 'decors' || e.name == 'cartels'){
    e.remove();
  }
}
