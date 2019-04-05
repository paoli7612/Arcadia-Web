<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Test1</title>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="master.css">
    <script type="text/javascript" src="js/options.js"></script>
    <script type="text/javascript" src="js/loadMap.js"></script>
    <script type="text/javascript" src="js/loadTools.js"></script>
    <script type="text/javascript" src="js/filter.js"></script>
    <script type="text/javascript" src="js/save.js"></script>
    <script type="text/javascript" src="js/load.js"></script>
    <script type="text/javascript" src="js/animation.js"></script>
  </head>
  <body>
    <form method="get">
      <select name="map">
        <option value="spawn">SPAWN</option>
        <option value="desert">DESERT</option>
        <option value="template1">TEMPLATE1</option>
      </select>
      <input type="submit" value="Carica">
    </form>
    <div class="title">
      <h1>Map Editor <?php if (isset($_GET['map'])) echo " - ".$_GET['map'] ?></h1>
    </div>
    <table id="matrix">
    </table>
    <div id="tiles" class="panel">
      <div id="info">
        <span id="tool_id">0</span>
        <span id="tool_type">null</span>
        <img src="img/0.png" id="tool_image">
      </div>
    </div>
    <div id="form" class="panel">
      <input id="formCartel" type="text" placeholder="Text">
    </div>
    <div id="filter" class="panel">
      <label> Decors
        <input type="checkbox" checked="checked" onchange="filter(this.checked, 'decors')">
      </label>
      <label> Cartels
        <input type="checkbox" checked="checked" onchange="filter(this.checked, 'cartels')">
      </label>
      <label> Floors
        <input type="checkbox" checked="checked" onchange="filter(this.checked, 'floors')">
      </label>
    </div>
    <div id="options" class="panel">
      <button onclick="save()">Salva</button>
      <input type="hidden" id="nameMap" value="<?php echo $_GET['map'] ?>">
    </div>
  </body>
  <script type="text/javascript" src="js/sprites.js"></script>
  <script type="text/javascript" src="main.js"></script>
</html>
