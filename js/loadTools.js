var tool_id = null;
var tool_type = null;

var select = function (id, type){
  var h1_id = document.getElementById('tool_id')
  var h1_type = document.getElementById('tool_type')
  tool_id = id;
  tool_type = type;
  h1_id.innerHTML = tool_id;
  h1_type.innerHTML = tool_type;
}


var loadTools = function(){
  var tools = document.getElementById('tools');


  var load = function(type, len){
    var div = document.createElement('div');
    for (i=0; i<len; i++){
      img = document.createElement('img');
      img.src="img/"+type+"/"+(i+1)+".png";
      img.setAttribute('onclick', "select("+(i+1)+",'"+type+"')");
      div.appendChild(img);
    }
    tools.appendChild(div);
  }

  load('decors', 5);
  load('floors', 5);
  load('walls', 16);
}

document.onclick = function (e){
  e = e.toElement;
  if (e.name == 'walls' || e.name == 'floors' ) {
    e.name = tool_type;
    e.src = "img/"+tool_type+"/"+tool_id+".png"
  }
}
