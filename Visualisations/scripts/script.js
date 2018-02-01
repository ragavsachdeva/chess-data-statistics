//Horizontal scrolling
  var w = window.innerWidth;
  var h = window.innerHeight - document.getElementById('navbar').offsetHeight;

  var body = document.body;
  body.style.height = h+"px";
  body.style.width = w+"px";
  var scrollElements = document.getElementsByClassName("scroll_element");
  var scrollingArea = document.getElementsByClassName("horizontal-scroll-wrapper");

  scrollingArea[0].style.width = h + "px";
  scrollingArea[0].style.height = w + "px";
  scrollingArea[0].style.transform = "rotate(-90deg) translateY(-"+h+"px)";

  for (var i = scrollElements.length - 1; i >= 0; i--) {
      scrollElements[i].style.width = h+"px";
      scrollElements[i].style.height = w+"px";
  }

//MODAL
  
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    console.log(body.offsetHeight + "px");
    modal.style.height = window.offsetHeight + "px";

      modal.style.display = "block";
      comparator();
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

var c1hm = '<div class="row" id="c1heatMapViz"><div class="col-xl-3"><div class="row"><div class="col"><select id="c1heatMapType" onchange="c1changeHeatMap()"><option value="captured_freq">Captured Squares<option value="capturing_freq">Attacking Squares<option value="utilisation_freq">Square Utilisation</option></option></option></select></div></div><div class="row"><div class="col"><div id="c1board1"></div></div></div><div class="row"><div class="col" style="text-align: center"><button type="button" id="c1all" class="btn btn-primary btn-sm HM_buttons">All</button> <button type="button" id="c1wall" class="btn btn-primary btn-sm HM_buttons">White</button> <button type="button" id="c1ball" class="btn btn-primary btn-sm HM_buttons">Black</button></div></div></div><div class="col-xl-8"><div id="c1heatMap"><!-- 8 --><div class="row"><div class="col-xl board_square white_square c1heat_map_square" id="c1a8"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1b8"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1c8"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1d8"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1e8"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1f8"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1g8"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1h8"></div></div><!-- 7 --><div class="row"><div class="col-xl board_square black_square c1heat_map_square" id="c1a7"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1b7"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1c7"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1d7"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1e7"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1f7"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1g7"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1h7"></div></div><!-- 6 --><div class="row"><div class="col-xl board_square white_square c1heat_map_square" id="c1a6"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1b6"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1c6"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1d6"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1e6"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1f6"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1g6"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1h6"></div></div><!-- 5 --><div class="row"><div class="col-xl board_square black_square c1heat_map_square" id="c1a5"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1b5"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1c5"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1d5"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1e5"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1f5"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1g5"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1h5"></div></div><!-- 4 --><div class="row"><div class="col-xl board_square white_square c1heat_map_square" id="c1a4"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1b4"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1c4"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1d4"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1e4"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1f4"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1g4"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1h4"></div></div><!-- 3 --><div class="row"><div class="col-xl board_square black_square c1heat_map_square" id="c1a3"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1b3"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1c3"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1d3"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1e3"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1f3"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1g3"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1h3"></div></div><!-- 2 --><div class="row"><div class="col-xl board_square white_square c1heat_map_square" id="c1a2"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1b2"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1c2"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1d2"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1e2"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1f2"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1g2"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1h2"></div></div><!-- 1 --><div class="row"><div class="col-xl board_square black_square c1heat_map_square" id="c1a1"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1b1"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1c1"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1d1"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1e1"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1f1"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1g1"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1h1"></div></div></div></div></div>';
var c2hm = '<div class="row" id="c2heatMapViz"><div class="col-xl-3"><div class="row"><div class="col"><select id="c2heatMapType" onchange="c2changeHeatMap()"><option value="captured_freq">Captured Squares<option value="capturing_freq">Attacking Squares<option value="utilisation_freq">Square Utilisation</option></option></option></select></div></div><div class="row"><div class="col"><div id="c2board1"></div></div></div><div class="row"><div class="col" style="text-align: center"><button type="button" id="c2all" class="btn btn-primary btn-sm HM_buttons">All</button> <button type="button" id="c2wall" class="btn btn-primary btn-sm HM_buttons">White</button> <button type="button" id="c2ball" class="btn btn-primary btn-sm HM_buttons">Black</button></div></div></div><div class="col-xl-8"><div id="c2heatMap"><!-- 8 --><div class="row"><div class="col-xl board_square white_square c2heat_map_square" id="c2a8"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2b8"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2c8"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2d8"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2e8"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2f8"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2g8"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2h8"></div></div><!-- 7 --><div class="row"><div class="col-xl board_square black_square c2heat_map_square" id="c2a7"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2b7"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2c7"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2d7"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2e7"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2f7"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2g7"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2h7"></div></div><!-- 6 --><div class="row"><div class="col-xl board_square white_square c2heat_map_square" id="c2a6"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2b6"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2c6"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2d6"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2e6"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2f6"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2g6"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2h6"></div></div><!-- 5 --><div class="row"><div class="col-xl board_square black_square c2heat_map_square" id="c2a5"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2b5"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2c5"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2d5"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2e5"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2f5"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2g5"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2h5"></div></div><!-- 4 --><div class="row"><div class="col-xl board_square white_square c2heat_map_square" id="c2a4"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2b4"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2c4"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2d4"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2e4"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2f4"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2g4"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2h4"></div></div><!-- 3 --><div class="row"><div class="col-xl board_square black_square c2heat_map_square" id="c2a3"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2b3"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2c3"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2d3"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2e3"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2f3"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2g3"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2h3"></div></div><!-- 2 --><div class="row"><div class="col-xl board_square white_square c2heat_map_square" id="c2a2"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2b2"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2c2"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2d2"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2e2"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2f2"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2g2"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2h2"></div></div><!-- 1 --><div class="row"><div class="col-xl board_square black_square c2heat_map_square" id="c2a1"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2b1"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2c2"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2d1"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2e1"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2f1"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2g1"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2h1"></div></div></div></div></div>';
var c1jm = '<div class="row" id="c1journeyMapViz"><div class="col-xl-3"><div class="row"><div class="col"><div id="c1board2"></div></div></div><div class="row" style="margin-top: 50px"><div class="col"><div id="c1slidecontainer"><input type="range" min="100" max="350" value="225" class="slider" id="c1myRange"></div></div></div></div><div class="col-xl-6"><div class="col" id="c1journeyMap" style="padding-left: 0px; padding-right: 0px"><div class="cdv-move-paths" id="c1movepaths"></div></div></div></div>';
var c2jm = '<div class="row" id="c2journeyMapViz"><div class="col-xl-3"><div class="row"><div class="col"><div id="c2board2"></div></div></div><div class="row" style="margin-top: 50px"><div class="col"><div id="c2slidecontainer"><input type="range" min="100" max="350" value="225" class="slider" id="c2myRange"></div></div></div></div><div class="col-xl-6"><div class="col" id="c2journeyMap" style="padding-left: 0px; padding-right: 0px"><div class="cdv-move-paths" id="c2movepaths"></div></div></div></div>';

function comparator()
{
  console.log("r");
  c1();
  c2();
}

function c1()
{
  var viz1 = document.getElementById("c1").value;
  var c1viz = document.getElementById("c1viz");

  if(viz1 == "c1heatmap")
  {
    c1viz.innerHTML = c1hm;
    c1lastClickedHM = $( "#c1all" );
    c1lastClickedHMBG = c1lastClickedHM[0].style.backgroundColor;
    c1lastClickedHM[0].style.backgroundColor = "#C04444";
    c1type = document.getElementById("c1heatMapType").value;
    c1board1 = ChessBoard('c1board1', 'start');
    c1type = document.getElementById("c1heatMapType").value;
    c1generateHeatMap(c1type,c1pieceValForFuncHM.substring(2));
  }
  else if(viz1 == "c1journeymap")
  {
    c1viz.innerHTML = c1jm;
    c1board2 = ChessBoard('c1board2', 'start');
    c1lastClickedJM = $( "#c1board2 .square-g1" );
    c1lastClickedJMBG = c1lastClickedJM[0].style.backgroundColor;
    c1lastClickedJM[0].style.backgroundColor = "#C04444";
    c1slider = document.getElementById("c1myRange")
    c1generateJourneyMap(c1pieceValForFuncJM, c1binSize);
    
  }
}

function c2()
{
  var viz1 = document.getElementById("c2").value;
  var c2viz = document.getElementById("c2viz");

  if(viz1 == "c2heatmap")
  {
    c2viz.innerHTML = c2hm;
    c2lastClickedHM = $( "#c2all" );
    c2lastClickedHMBG = c2lastClickedHM[0].style.backgroundColor;
    c2lastClickedHM[0].style.backgroundColor = "#C04444";
    c2type = document.getElementById("c2heatMapType").value;
    c2board1 = ChessBoard('c2board1', 'start');
    c2type = document.getElementById("c2heatMapType").value;
    c2generateHeatMap(c2type,c2pieceValForFuncHM.substring(2));
  }
  else if(viz1 == "c2journeymap")
  {
    c2viz.innerHTML = c2jm;
    c2board2 = ChessBoard('c2board2', 'start');
    c2lastClickedJM = $( "#c2board2 .square-g1" );
    c2lastClickedJMBG = c2lastClickedJM[0].style.backgroundColor;
    c2lastClickedJM[0].style.backgroundColor = "#C04444";
    c2slider = document.getElementById("c2myRange")
    c2generateJourneyMap(c2pieceValForFuncJM, c2binSize);
    
  }
}

//Heat Maps
  var emptyHeatMap = document.getElementById('heatMap').innerHTML;
  var c1emptyHeatMap = '<div id="c1heatMap"><!-- 8 --><div class="row"><div class="col-xl board_square white_square c1heat_map_square" id="c1a8"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1b8"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1c8"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1d8"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1e8"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1f8"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1g8"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1h8"></div></div><!-- 7 --><div class="row"><div class="col-xl board_square black_square c1heat_map_square" id="c1a7"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1b7"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1c7"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1d7"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1e7"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1f7"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1g7"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1h7"></div></div><!-- 6 --><div class="row"><div class="col-xl board_square white_square c1heat_map_square" id="c1a6"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1b6"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1c6"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1d6"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1e6"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1f6"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1g6"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1h6"></div></div><!-- 5 --><div class="row"><div class="col-xl board_square black_square c1heat_map_square" id="c1a5"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1b5"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1c5"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1d5"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1e5"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1f5"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1g5"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1h5"></div></div><!-- 4 --><div class="row"><div class="col-xl board_square white_square c1heat_map_square" id="c1a4"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1b4"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1c4"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1d4"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1e4"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1f4"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1g4"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1h4"></div></div><!-- 3 --><div class="row"><div class="col-xl board_square black_square c1heat_map_square" id="c1a3"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1b3"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1c3"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1d3"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1e3"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1f3"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1g3"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1h3"></div></div><!-- 2 --><div class="row"><div class="col-xl board_square white_square c1heat_map_square" id="c1a2"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1b2"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1c2"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1d2"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1e2"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1f2"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1g2"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1h2"></div></div><!-- 1 --><div class="row"><div class="col-xl board_square black_square c1heat_map_square" id="c1a1"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1b1"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1c1"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1d1"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1e1"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1f1"></div><div class="col-xl board_square black_square c1heat_map_square" id="c1g1"></div><div class="col-xl board_square white_square c1heat_map_square" id="c1h1"></div></div></div>';
  var c2emptyHeatMap = '<div id="c2heatMap"><!-- 8 --><div class="row"><div class="col-xl board_square white_square c2heat_map_square" id="c2a8"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2b8"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2c8"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2d8"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2e8"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2f8"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2g8"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2h8"></div></div><!-- 7 --><div class="row"><div class="col-xl board_square black_square c2heat_map_square" id="c2a7"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2b7"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2c7"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2d7"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2e7"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2f7"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2g7"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2h7"></div></div><!-- 6 --><div class="row"><div class="col-xl board_square white_square c2heat_map_square" id="c2a6"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2b6"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2c6"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2d6"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2e6"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2f6"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2g6"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2h6"></div></div><!-- 5 --><div class="row"><div class="col-xl board_square black_square c2heat_map_square" id="c2a5"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2b5"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2c5"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2d5"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2e5"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2f5"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2g5"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2h5"></div></div><!-- 4 --><div class="row"><div class="col-xl board_square white_square c2heat_map_square" id="c2a4"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2b4"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2c4"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2d4"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2e4"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2f4"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2g4"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2h4"></div></div><!-- 3 --><div class="row"><div class="col-xl board_square black_square c2heat_map_square" id="c2a3"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2b3"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2c3"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2d3"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2e3"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2f3"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2g3"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2h3"></div></div><!-- 2 --><div class="row"><div class="col-xl board_square white_square c2heat_map_square" id="c2a2"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2b2"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2c2"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2d2"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2e2"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2f2"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2g2"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2h2"></div></div><!-- 1 --><div class="row"><div class="col-xl board_square black_square c2heat_map_square" id="c2a1"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2b1"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2c2"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2d1"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2e1"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2f1"></div><div class="col-xl board_square black_square c2heat_map_square" id="c2g1"></div><div class="col-xl board_square white_square c2heat_map_square" id="c2h1"></div></div></div>';

  function calcMax(type,piece)
  {
    var max = 0;
    for(square in heat_map[type][piece])
    {
      if(heat_map[type][piece][square] > max)
        max = heat_map[type][piece][square];
    }

    return max;
  }

  function calcTotal(type,piece)
  {
    var total = 0;
    for(square in heat_map[type][piece])
    {
        total += heat_map[type][piece][square];
    }

    return total;
  }


  var pieceValForFuncHM = "all";
  var c1pieceValForFuncHM = "c1all";
  var c2pieceValForFuncHM = "c2all";
  var type = document.getElementById("heatMapType").value;
  var c1type = "";
  var c2type = "";

  generateHeatMap(type,pieceValForFuncHM);
  c1generateHeatMap(c1type,c1pieceValForFuncHM);
  c2generateHeatMap(c2type,c2pieceValForFuncHM);

  function changeHeatMap() {
    type = document.getElementById("heatMapType").value;
    generateHeatMap(type,pieceValForFuncHM);
  }

  function c1changeHeatMap() {
    c1type = document.getElementById("c1heatMapType").value;
    if(c1pieceValForFuncHM == 'c1all' || c1pieceValForFuncHM == 'c1wall' || c1pieceValForFuncHM == 'c1ball')
      c1generateHeatMap(c1type,c1pieceValForFuncHM.substring(2));
    else
      c1generateHeatMap(c1type,c1pieceValForFuncHM);
  }

  function c2changeHeatMap() {
    c2type = document.getElementById("c2heatMapType").value;
    if(c2pieceValForFuncHM == 'c2all' || c2pieceValForFuncHM == 'c2wall' || c2pieceValForFuncHM == 'c2ball')
      c2generateHeatMap(c2type,c2pieceValForFuncHM.substring(2));
    else
      c2generateHeatMap(c2type,c2pieceValForFuncHM);
  }

  var board1 = ChessBoard('board1', 'start');
  var c1board1;
  var c2board1;

  $( "#board1 .select_board" ).click(function() 
  {
    if($(this)[0].getElementsByTagName('img')[0])
    {
      lastClickedHM[0].style.backgroundColor = lastClickedHMBG;
      lastClickedHM = $(this);
      lastClickedHMBG = lastClickedHM[0].style.backgroundColor;
      lastClickedHM[0].style.backgroundColor = "#C04444";

      var pieceType = $(this)[0].getElementsByTagName('img')[0].getAttribute("data-piece").substring(1,2);
      var pieceSquare = $(this)[0].getAttribute("data-square");


      if(pieceType=='P')
      {
        pieceValForFuncHM = pieceSquare;
      }

      else
      {
        pieceValForFuncHM = pieceType + pieceSquare;
      }  

      generateHeatMap(type,pieceValForFuncHM);
    } 
  });

  $(document).on('click', "#c1board1 .select_board",function() 
  {
    if($(this)[0].getElementsByTagName('img')[0])
    {
      c1lastClickedHM[0].style.backgroundColor = c1lastClickedHMBG;
      c1lastClickedHM = $(this);
      c1lastClickedHMBG = c1lastClickedHM[0].style.backgroundColor;
      c1lastClickedHM[0].style.backgroundColor = "#C04444";

      var c1pieceType = $(this)[0].getElementsByTagName('img')[0].getAttribute("data-piece").substring(1,2);
      var c1pieceSquare = $(this)[0].getAttribute("data-square");

      if(c1pieceType=='P')
      {
        c1pieceValForFuncHM = c1pieceSquare;
      }

      else
      {
        c1pieceValForFuncHM = c1pieceType + c1pieceSquare;
      }  

      c1generateHeatMap(c1type,c1pieceValForFuncHM);
    } 
  });

  $(document).on('click', "#c2board1 .select_board",function() 
  {
    if($(this)[0].getElementsByTagName('img')[0])
    {
      c2lastClickedHM[0].style.backgroundColor = c2lastClickedHMBG;
      c2lastClickedHM = $(this);
      c2lastClickedHMBG = c2lastClickedHM[0].style.backgroundColor;
      c2lastClickedHM[0].style.backgroundColor = "#C04444";

      var c2pieceType = $(this)[0].getElementsByTagName('img')[0].getAttribute("data-piece").substring(1,2);
      var c2pieceSquare = $(this)[0].getAttribute("data-square");

      if(c2pieceType=='P')
      {
        c2pieceValForFuncHM = c2pieceSquare;
      }

      else
      {
        c2pieceValForFuncHM = c2pieceType + c2pieceSquare;
      }  

      c2generateHeatMap(c2type,c2pieceValForFuncHM);
    } 
  });

  $("#heatMapViz .HM_buttons").click(function()
    {
    lastClickedHM[0].style.backgroundColor = lastClickedHMBG;
    lastClickedHM = $(this);
    lastClickedHMBG = lastClickedHM[0].style.backgroundColor;
    lastClickedHM[0].style.backgroundColor = "#C04444";
    pieceValForFuncHM = $(this)[0].id;

    generateHeatMap(type,pieceValForFuncHM); 
  });

  $(document).on('click', "#c1heatMapViz .HM_buttons", function()
  {
    c1lastClickedHM[0].style.backgroundColor = c1lastClickedHMBG;
    c1lastClickedHM = $(this);
    c1lastClickedHMBG = c1lastClickedHM[0].style.backgroundColor;
    c1lastClickedHM[0].style.backgroundColor = "#C04444";
    c1pieceValForFuncHM = $(this)[0].id;

    c1generateHeatMap(c1type,c1pieceValForFuncHM.substring(2)); 
  });

  $(document).on('click', "#c2heatMapViz .HM_buttons", function()
  {
    c2lastClickedHM[0].style.backgroundColor = c2lastClickedHMBG;
    c2lastClickedHM = $(this);
    c2lastClickedHMBG = c2lastClickedHM[0].style.backgroundColor;
    c2lastClickedHM[0].style.backgroundColor = "#C04444";
    c2pieceValForFuncHM = $(this)[0].id;

    c2generateHeatMap(c2type,c2pieceValForFuncHM.substring(2)); 
  });

  //keeps track of last heat map piece that was selected, for styling purposes
  //by default, Ng1
  var lastClickedHM = $( "#all" );
  var lastClickedHMBG = lastClickedHM[0].style.backgroundColor;
  lastClickedHM[0].style.backgroundColor = "#C04444";

  var c1lastClickedHM;
  var c1lastClickedHMBG;

  var c2lastClickedHM;
  var c2lastClickedHMBG;

  //Tooltip for heat squares
  function enableToolTip(){
      $('[data-toggle="tooltip"]').tooltip();   
  };

  //Generates a HeatMap
  function generateHeatMap(type,piece)
  {
    document.getElementById('heatMap').innerHTML = emptyHeatMap;
    var board_squares = document.getElementsByClassName('heat_map_square');
    var max_captures = calcMax(type,piece);
    var total_captures = calcTotal(type,piece);
    for (var i = 0; i <= 63; i++) 
    {
      var square_id = board_squares[i].id;

      var board_square_side = board_squares[0].offsetWidth;

      board_squares[i].style.height = board_square_side + "px";
      
      var heat_square = document.createElement("div");

      heat_square.setAttribute("data-toggle", "tooltip");
      heat_square.setAttribute("title", (heat_map[type][piece][square_id]+"/"+total_captures));
      
      var heat_square_side = (board_square_side * (heat_map[type][piece][square_id]/max_captures));

      var remaining_length = board_square_side - heat_square_side;

      heat_square.style.marginTop = (remaining_length/2) + "px";
      heat_square.style.marginLeft = (remaining_length/2) + "px";
      
      heat_square.style.height = heat_square_side + "px";
      heat_square.style.width = heat_square_side + "px";
      heat_square.style.backgroundColor = "#C04444"; //or #83A7EF
      
      board_squares[i].appendChild(heat_square);
    }

    enableToolTip();
  }

  function c1generateHeatMap(type,piece)
  { 
    if(document.getElementById('c1heatMap')){
    document.getElementById('c1heatMap').innerHTML = c1emptyHeatMap;
    var board_squares = document.getElementsByClassName('c1heat_map_square');
    var max_captures = calcMax(type,piece);
    var total_captures = calcTotal(type,piece);
    for (var i = 0; i <= 63; i++) 
    {
      var square_id = board_squares[i].id;

      var board_square_side = board_squares[0].offsetWidth;

      board_squares[i].style.height = board_square_side + "px";
      
      var heat_square = document.createElement("div");

      heat_square.setAttribute("data-toggle", "tooltip");
      heat_square.setAttribute("title", (heat_map[type][piece][square_id.substring(2)]+"/"+total_captures));
      
      var heat_square_side = (board_square_side * (heat_map[type][piece][square_id.substring(2)]/max_captures));

      var remaining_length = board_square_side - heat_square_side;

      heat_square.style.marginTop = (remaining_length/2) + "px";
      heat_square.style.marginLeft = (remaining_length/2) + "px";
      
      heat_square.style.height = heat_square_side + "px";
      heat_square.style.width = heat_square_side + "px";
      heat_square.style.backgroundColor = "#C04444"; //or #83A7EF
      
      board_squares[i].appendChild(heat_square);
    }

    enableToolTip();
    }
  }

  function c2generateHeatMap(type,piece)
  { 
    if(document.getElementById('c2heatMap')){
    document.getElementById('c2heatMap').innerHTML = c2emptyHeatMap;
    var board_squares = document.getElementsByClassName('c2heat_map_square');
    var max_captures = calcMax(type,piece);
    var total_captures = calcTotal(type,piece);
    for (var i = 0; i <= 63; i++) 
    {
      var square_id = board_squares[i].id;

      var board_square_side = board_squares[0].offsetWidth;

      board_squares[i].style.height = board_square_side + "px";
      
      var heat_square = document.createElement("div");

      heat_square.setAttribute("data-toggle", "tooltip");
      heat_square.setAttribute("title", (heat_map[type][piece][square_id.substring(2)]+"/"+total_captures));
      
      var heat_square_side = (board_square_side * (heat_map[type][piece][square_id.substring(2)]/max_captures));

      var remaining_length = board_square_side - heat_square_side;

      heat_square.style.marginTop = (remaining_length/2) + "px";
      heat_square.style.marginLeft = (remaining_length/2) + "px";
      
      heat_square.style.height = heat_square_side + "px";
      heat_square.style.width = heat_square_side + "px";
      heat_square.style.backgroundColor = "#C04444"; //or #83A7EF
      
      board_squares[i].appendChild(heat_square);
    }

    enableToolTip();
    }
  }

//Journey Maps
  var pieceValForFuncJM = "Ng1";
  var c1pieceValForFuncJM = "Ng1";
  var c2pieceValForFuncJM = "Ng1";

  var binSize = 225;
  var c1binSize = 225;
  var c2binSize = 225;

  generateJourneyMap(pieceValForFuncJM, binSize);
  c1generateJourneyMap(c1pieceValForFuncJM, c1binSize);
  c2generateJourneyMap(c2pieceValForFuncJM, c2binSize);

  var board2 = ChessBoard('board2', 'start');
  var c1board2;
  var c2board2;


  //Function to generate a new journey map if a different piece is selected
  $( "#board2 .select_board" ).click(function() 
  {
    if($(this)[0].getElementsByTagName('img')[0])
    {
      lastClickedJM[0].style.backgroundColor = lastClickedJMBG;
      lastClickedJM = $(this);
      lastClickedJMBG = lastClickedJM[0].style.backgroundColor;
      lastClickedJM[0].style.backgroundColor = "#C04444";

      var pieceType = $(this)[0].getElementsByTagName('img')[0].getAttribute("data-piece").substring(1,2);
      var pieceSquare = $(this)[0].getAttribute("data-square");


      if(pieceType=='P')
      {
        pieceValForFuncJM = pieceSquare;
      }

      else
      {
        pieceValForFuncJM = pieceType + pieceSquare;
      }  

      generateJourneyMap(pieceValForFuncJM, binSize);    
    }
  });;

  $(document).on('click', "#c1board2 .select_board", function() 
  {
    if($(this)[0].getElementsByTagName('img')[0])
    {
      c1lastClickedJM[0].style.backgroundColor = c1lastClickedJMBG;
      c1lastClickedJM = $(this);
      c1lastClickedJMBG = c1lastClickedJM[0].style.backgroundColor;
      c1lastClickedJM[0].style.backgroundColor = "#C04444";

      var c1pieceType = $(this)[0].getElementsByTagName('img')[0].getAttribute("data-piece").substring(1,2);
      var c1pieceSquare = $(this)[0].getAttribute("data-square");


      if(c1pieceType=='P')
      {
        c1pieceValForFuncJM = c1pieceSquare;
      }

      else
      {
        c1pieceValForFuncJM = c1pieceType + c1pieceSquare;
      }  

      c1generateJourneyMap(c1pieceValForFuncJM, c1binSize);    
    }
  });;

  $(document).on('click', "#c2board2 .select_board", function() 
  {
    if($(this)[0].getElementsByTagName('img')[0])
    {
      c2lastClickedJM[0].style.backgroundColor = c2lastClickedJMBG;
      c2lastClickedJM = $(this);
      c2lastClickedJMBG = c2lastClickedJM[0].style.backgroundColor;
      c2lastClickedJM[0].style.backgroundColor = "#C04444";

      var c2pieceType = $(this)[0].getElementsByTagName('img')[0].getAttribute("data-piece").substring(1,2);
      var c2pieceSquare = $(this)[0].getAttribute("data-square");


      if(c2pieceType=='P')
      {
        c2pieceValForFuncJM = c2pieceSquare;
      }

      else
      {
        c2pieceValForFuncJM = c2pieceType + c2pieceSquare;
      }  

      c2generateJourneyMap(c2pieceValForFuncJM, c2binSize);    
    }
  });;

  //keeps track of last journey map piece that was selected, for styling purposes
  //by default, Ng1
  var lastClickedJM = $( "#board2 .square-g1" );
  var c1lastClickedJM;
  var c2lastClickedJM;
  var lastClickedJMBG = lastClickedJM[0].style.backgroundColor;
  var c1lastClickedJMBG;
  var c2lastClickedJMBG;
  lastClickedJM[0].style.backgroundColor = "#C04444";

  var slider = document.getElementById("myRange");
  var c1slider;
  var c2slider;
  slider.onchange = function() {
    binSize = this.value;
    console.log(binSize);
      generateJourneyMap(pieceValForFuncJM, binSize);
  }

  $(document).on('change', "#c1myRange", function() {
  c1binSize = this.value;
  console.log(c1binSize);
    c1generateJourneyMap(c1pieceValForFuncJM, c1binSize);
  });

  $(document).on('change', "#c2myRange", function() {
  c2binSize = this.value;
  console.log(c2binSize);
    c2generateJourneyMap(c2pieceValForFuncJM, c2binSize);
  });


  //generates Journey Map
  function generateJourneyMap(piece, binSize)
  {
    var reqWidth = document.getElementById('journeyMap').offsetWidth;
    var options = {width: reqWidth, margin: 0, accessor:  piece, binSize: binSize}
    d3.json('https://ebemunk.com/chess-dataviz/data/wrc.json', function(err, data) {
      var movePaths = new ChessDataViz.MovePaths('#movepaths', options, pathData);
    });
  }

  //generates Journey Map
  function c1generateJourneyMap(piece, binSize)
  {
    if(document.getElementById('c1journeyMap')){
    var reqWidth = document.getElementById('c1journeyMap').offsetWidth;
    var options = {width: reqWidth, margin: 0, accessor:  piece, binSize: binSize}
    d3.json('https://ebemunk.com/chess-dataviz/data/wrc.json', function(err, data) {
      var c1movePaths = new ChessDataViz.MovePaths('#c1movepaths', options, pathData);
    });
    }
  }

  function c2generateJourneyMap(piece, binSize)
  {
    if(document.getElementById('c2journeyMap')){
    var reqWidth = document.getElementById('c2journeyMap').offsetWidth;
    var options = {width: reqWidth, margin: 0, accessor:  piece, binSize: binSize}
    d3.json('https://ebemunk.com/chess-dataviz/data/wrc.json', function(err, data) {
      var c2movePaths = new ChessDataViz.MovePaths('#c2movepaths', options, pathData);
    });
    }
  }

//generates Openings

  var board3 = ChessBoard('board3', 'start');
  var width = body.offsetWidth * (15/24);
  var height =body.offsetHeight * (15/24);
  var radius = Math.min(width, height) / 2;

  // Breadcrumb dimensions: width, height, spacing, width of tip/tail.
  var b = {
    w: 200, h: 100, s: 3, t: 10
  };

  // Mapping of step names to colors.
  var colors = {
    "home": "#5687d1",
    "product": "#7b615c",
    "search": "#de783b",
    "account": "#6ab975",
    "other": "#a173d1",
    "end": "#bbbbbb"
  };

  // Total size of all segments; we set this later, after loading the data.
  var totalSize = 0; 

  var vis = d3.select("#chart").append("svg:svg")
      .attr("width", width)
      .attr("height", height)
      .append("svg:g")
      .attr("id", "container")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var partition = d3.layout.partition()
      .size([2 * Math.PI, radius * radius])
      .value(function(d) { return d.size; });

  var arc = d3.svg.arc()
      .startAngle(function(d) { return d.x; })
      .endAngle(function(d) { return d.x + d.dx; })
      .innerRadius(function(d) { return Math.sqrt(d.y); })
      .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

  // Use d3.csv.parseRows so that we do not need to have a header
  // row, and can receive the csv as an array of arrays.

  //var text = getText();
  //var csv = d3.csv.parseRows(text);
  //var json = buildHierarchy(csv);
  var json = getData();
  createVisualization(json);

  // Main function to draw and set up the visualization, once we have the data.
  function createVisualization(json) {

    // Basic setup of page elements.
    initializeBreadcrumbTrail();
    drawLegend();
    d3.select("#togglelegend").on("click", toggleLegend);

    // Bounding circle underneath the sunburst, to make it easier to detect
    // when the mouse leaves the parent g.
    vis.append("svg:circle")
        .attr("r", radius)
        .style("opacity", 0);

    // For efficiency, filter nodes to keep only those large enough to see.
    var nodes = partition.nodes(json)
        .filter(function(d) {
        return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
        });

    var path = vis.data([json]).selectAll("#chart path")
        .data(nodes)
        .enter().append("svg:path")
        .attr("display", function(d) { return d.depth ? null : "none"; })
        .attr("d", arc)
        .attr("fill-rule", "evenodd")
        .style("fill", function(d) { return colors[d.name]; })
        .style("opacity", 1)
        .on("mouseover", mouseover);

    // Add the mouseleave handler to the bounding circle.
    d3.select("#container").on("mouseleave", mouseleave);

    // Get total size of the tree = value of root node from partition.
    totalSize = path.node().__data__.value;
   };

  // Fade all but the current sequence, and show it in the breadcrumb trail.
  function mouseover(d) {
  board3.start(false);
    var percentage = (100 * d.value / totalSize).toPrecision(3);
    var percentageString = percentage + "%";
    if (percentage < 0.1) {
      percentageString = "< 0.1%";
    }

    d3.select("#percentage")
        .text(percentageString);

    d3.select("#explanation")
        .style("visibility", "");

    var sequenceArray = getAncestors(d);
    for(var x = 0; x < sequenceArray.length; x++)
    {

      board3.move(sequenceArray[x].move);
    }

    updateBreadcrumbs(sequenceArray, percentageString);

    // Fade all the segments.
    d3.selectAll("#chart path")
        .style("opacity", 0.3);

    // Then highlight only those that are an ancestor of the current segment.
    vis.selectAll("#chart path")
        .filter(function(node) {
                  return (sequenceArray.indexOf(node) >= 0);
                })
        .style("opacity", 1);
  }

  // Restore everything to full opacity when moving off the visualization.
  function mouseleave(d) {

    board3.start(false);
    // Hide the breadcrumb trail
    d3.select("#trail")
        .style("visibility", "hidden");

    // Deactivate all segments during transition.
    d3.selectAll("path").on("mouseover", null);

    // Transition each segment to full opacity and then reactivate it.
    d3.selectAll("#chart path")
        .transition()
        .duration(1000)
        .style("opacity", 1)
        .each("end", function() {
                d3.select(this).on("mouseover", mouseover);
              });

    d3.select("#explanation")
        .transition()
        .duration(1000)
        .style("visibility", "hidden");
  }

  // Given a node in a partition layout, return an array of all of its ancestor
  // nodes, highest first, but excluding the root.
  function getAncestors(node) {
    var path = [];
    var current = node;
    while (current.parent) {
      path.unshift(current);
      current = current.parent;
    }
    return path;
  }

  function initializeBreadcrumbTrail() {
    // Add the svg area.
    var trail = d3.select("#sequence").append("svg:svg")
        .attr("width", 2*width)
        .attr("height", 150)
        .attr("id", "trail");
    // Add the label at the end, for the percentage.
    trail.append("svg:text")
      .attr("id", "endlabel")
      .style("fill", "#000");
  }

  // Generate a string that describes the points of a breadcrumb polygon.
  function breadcrumbPoints(d, i) {
    var points = [];
    points.push("0,0");
    points.push(b.w + ",0");
    points.push(b.w + b.t + "," + (b.h / 2));
    points.push(b.w + "," + b.h);
    points.push("0," + b.h);
    if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
      points.push(b.t + "," + (b.h / 2));
    }
    return points.join(" ");
  }

  // Update the breadcrumb trail to show the current sequence and percentage.
  function updateBreadcrumbs(nodeArray, percentageString) {

    // Data join; key function combines name and depth (= position in sequence).
    var g = d3.select("#trail")
        .selectAll("g")
        .data(nodeArray, function(d) { return d.name + d.depth; });

    // Add breadcrumb and label for entering nodes.
    var entering = g.enter().append("svg:g");

    entering.append("svg:polygon")
        .attr("points", breadcrumbPoints)
        .style("fill", function(d) { return colors[d.name]; });

    entering.append("svg:text")
        .attr("x", (b.w + b.t) / 2)
        .attr("y", b.h / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.name; });

    // Set position for entering and updating nodes.
    g.attr("transform", function(d, i) {
      return "translate(" + i * (b.w + b.s) + ", 0)";
    });

    // Remove exiting nodes.
    g.exit().remove();

    // Now move and update the percentage at the end.
    d3.select("#trail").select("#endlabel")
        .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
        .attr("y", b.h / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .text(percentageString);

    // Make the breadcrumb trail visible, if it's hidden.
    d3.select("#trail")
        .style("visibility", "");

  }

  function drawLegend() {

    // Dimensions of legend item: width, height, spacing, radius of rounded rect.
    var li = {
      w: 75, h: 30, s: 3, r: 3
    };

    var legend = d3.select("#legend").append("svg:svg")
        .attr("width", li.w)
        .attr("height", d3.keys(colors).length * (li.h + li.s));

    var g = legend.selectAll("g")
        .data(d3.entries(colors))
        .enter().append("svg:g")
        .attr("transform", function(d, i) {
                return "translate(0," + i * (li.h + li.s) + ")";
             });

    g.append("svg:rect")
        .attr("rx", li.r)
        .attr("ry", li.r)
        .attr("width", li.w)
        .attr("height", li.h)
        .style("fill", function(d) { return d.value; });

    g.append("svg:text")
        .attr("x", li.w / 2)
        .attr("y", li.h / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.key; });
  }

  function toggleLegend() {
    var legend = d3.select("#legend");
    if (legend.style("visibility") == "hidden") {
      legend.style("visibility", "");
    } else {
      legend.style("visibility", "hidden");
    }
  }

  // Take a 2-column CSV and transform it into a hierarchical structure suitable
  // for a partition layout. The first column is a sequence of step names, from
  // root to leaf, separated by hyphens. The second column is a count of how 
  // often that sequence occurred.
  function buildHierarchy(csv) {
    var root = {"name": "root", "children": []};
    for (var i = 0; i < csv.length; i++) {
      var sequence = csv[i][0];
      var size = +csv[i][1];
      if (isNaN(size)) { // e.g. if this is a header row
        continue;
      }
      var parts = sequence.split("-");
      var currentNode = root;
      for (var j = 0; j < parts.length; j++) {
        var children = currentNode["children"];
        var nodeName = parts[j];
        var childNode;
        if (j + 1 < parts.length) {
     // Not yet at the end of the sequence; move down the tree.
    var foundChild = false;
    for (var k = 0; k < children.length; k++) {
      if (children[k]["name"] == nodeName) {
        childNode = children[k];
        foundChild = true;
        break;
      }
    }
    // If we don't already have a child node for this branch, create it.
    if (!foundChild) {
      childNode = {"name": nodeName, "children": []};
      children.push(childNode);
    }
    currentNode = childNode;
        } else {
    // Reached the end of the sequence; create a leaf node.
    childNode = {"name": nodeName, "size": size};
    children.push(childNode);
        }
      }
    }
    return root;
  };

  function getData() {
      return openingsData;
  };

// var lastTriggered = "O";

// $('#scroll_pane').scroll(function(){
//    var scroll = $(this).scrollTop();
//    if(scroll >= 5800 && scroll<=9800 && lastTriggered == "JM")
//    {
//        lastTriggered = "O";
//    }
//    if(scroll >= 10000 && lastTriggered == "O")
//    {
//      generateJourneyMap(pieceValForFuncJM, binSize);
//      lastTriggered = "JM";
//    }
      
// })
