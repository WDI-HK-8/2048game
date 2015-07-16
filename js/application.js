$(document).ready(function(){

  var toWin = 2048;
  var max = 4;
  var over = null;
  var winState = null ;
  var totalScore = 0;

  //print the score of the game
  var printScore=function(){
    $('#totalscore').text(totalScore);
  }

  //check if there are any empty spaces left
  var checkNoZeroes = function(){
    var hasZeroes = false;
    for(i=1; i<=max; i++){
      var GridRow="grid_"+i;
      for (j=1; j<=max; j++){
        var GridCol="column"+j;
        if ($('#'+GridRow).children('#'+GridCol).text()=='0'){
          hasZeroes=true;
        }
      }
    }
    return !hasZeroes;
  }

  //reset the attributes of the tiles after moving, so that they can move and combine again on the next move
  var reset = function(){
    $('.grid').children().children().attr('myAttr', 'canMove');
    $('.grid').children().children().attr('combine', 'canCombine');
  }

  //set the color of different numbered tiles
  var setColor = function(){
    for(i=1; i<=max; i++){
      var GridRow="grid_"+i;
      for (j=1; j<=max; j++){
        var GridCol="column"+j;
        var elementValue=$('#'+GridRow).children('#'+GridCol);
        var elementValueText=elementValue.text();
        var cssElements = {
          "0": ['#CCC0B3', '#CCC0B3','none'],
          "2": ['#EEE4DA','#776e65','8px solid #BBADA0'],
          "4": ['#EDE0C8','#776e65','8px solid #BBADA0'],
          "8": ['#F2B179','white','8px solid #BBADA0'],
          "16": ['#F59563','white','8px solid #BBADA0'],
          "32": ['#F67C5F','white','8px solid #BBADA0'],
          "64": ['#F65E3B','white','8px solid #BBADA0'],
          "128": ['#EDCF72','white','8px solid #BBADA0'],
          "256": ['#EDCC61','white','8px solid #BBADA0'],
          "512": ['#EDC850','white','8px solid #BBADA0'],
          "1024": ['#EDC53F','white','8px solid #BBADA0'],
          "2048": ['#EDC22E','white','8px solid #BBADA0'],
          "4096": ['#FFA500','white','8px solid #BBADA0'],
          "8192": ['#98F5FF','white','8px solid #BBADA0'],
          "16384": ['#00C5CD','white','8px solid #BBADA0'],
          "32768": ['#5CACEE','white','8px solid #BBADA0'],
          "65536": ['#32CD32','white','8px solid #BBADA0'],
        };
        elementValue.css('background-color', cssElements[elementValueText][0]);
        elementValue.css('color', cssElements[elementValueText][1]);
        elementValue.css('border', cssElements[elementValueText][2]);
        if (Number(elementValueText) > 65536){
          elementValue.css('background-color','#00868B');
          elementValue.css('color','white');
          elementValue.css('border','8px solid #BBADA0');
        }
      }
    }
  }
	
  //how to randomly generate new tiles
  var randomNumberGeneration = function(){
    var generated = false;
    while (generated == false){
      var colNum = Math.floor(Math.random()*(max-0.01)+1);
      var rowNum = Math.floor(Math.random()*(max-0.01)+1);
      gridCol = "column"+colNum;
      gridRow = "grid_"+rowNum;
      var newElement = $('#'+gridRow).children('#'+gridCol);
      if(newElement.text()=="0"){
        newElement.css("opacity", "0")
        newElement.text("2");
        newElement.animate({
          opacity: 1,
        }, 400)
        generated = true;
      }
    }
    setColor();
  }

  //start the game
  printScore();
  randomNumberGeneration();
  randomNumberGeneration();

  //reset game on new game button click
  $('.btn-default').click(function(){
    for(i = 1; i <= max; i++){
      var resetGridRow = "grid_"+i;
      for (j = 1; j <= max; j++){
        var resetGridCol="column"+j;
        $('#'+resetGridRow).children('#'+resetGridCol).text('0');
        $('#'+resetGridRow).children('#'+resetGridCol).text('0');
      }
    }
    reset();
    totalScore=0;
    winState=null;
    printScore();
    randomNumberGeneration();
    randomNumberGeneration();
    $(".message").children("h1").remove();
    $(".message").children("h2").remove();
  });

  //how a new grid is generated
  var newGrid = function (){
    $('.grid').remove();
    var gridMax = "grid"+max;
    rowText = ('<div class="grid" id="'+gridMax+'">');
    for (i = 1; i <= max; i++){
      rowText += '<div class = "row" id="grid_'+i+'"></div>';
    }
    rowText += '</div>'
    $('.container-fluid').append(rowText);
    for (i = 1; i <= max; i++){
      for (j = 1; j <= max; j++){
        elementText = '<div id="column'+j+'" class="grid-box col-xs-2" myAttr="canMove" combine="canCombine">0</div>';
        $('#grid_'+i).append(elementText);
      }
    }
  }

  //default values when buttons to generate a new grid are clicked
  $('.btn-danger').click(function(){
    winState = null;
    over = null;
    totalScore = 0;
    $(".message").children("h1").remove();
    $(".message").children("h2").remove();
    printScore();
  });

  //generate 4x4 grid on button click
  $('#fourgrid').click(function(){
    toWin = 2048;
    max = 4;
    newGrid();
    $(".title").text("2048");
    $(".game-intro").text("Join the numbers and get to the 2048 tile!");
    randomNumberGeneration();
    randomNumberGeneration();
  });

  //generate 5x5 grid on button click
  $('#fivegrid').click(function(){
    toWin = 65536;
    max = 5;
    newGrid();
    $(".title").text("65536");
    $(".game-intro").text("Join the numbers and get to the 65536 tile!");
    randomNumberGeneration();
    randomNumberGeneration();
  });

  //generate 6x6 grid on button click
  $('#sixgrid').click(function(){
    toWin = 2048;
    max = 6;
    newGrid();
    $(".title").text("2048");
    $(".game-intro").text("Join the numbers and get as high a score as possible!");
    randomNumberGeneration();
    randomNumberGeneration();
    randomNumberGeneration();
    randomNumberGeneration();
  });

  //generate 8x8 grid on button click
  $('#eightgrid').click(function(){
    toWin = 2048;
    max = 8;
    newGrid();
    $(".title").text("2048");
    $(".game-intro").text("Join the numbers and get as high a score as possible!");
    randomNumberGeneration();
    randomNumberGeneration();
    randomNumberGeneration();
    randomNumberGeneration();
  });

  //what happens if a tile moves onto an empty space
   var combineMove = function(x,y){
    var sum=Number(y.text())+Number(x.text());
    y.text(sum);
    totalScore += sum;
    x.text(0);
    x.attr('myAttr','canMove');
    x.attr('combine','canCombine');
    y.attr('combine','cantCombine');
   }

   //what happens if two tiles of the same value combine
   var zeroMove = function(x,y){
    sum=Number(x.text());
    y.text(sum);
    x.text(0);
    x.attr('myAttr','canMove');
    x.attr('combine','canCombine');
    y.attr('combine','canCombine');
   }

  //left move
  var leftMove = function(){
  	var hasMoved = false;
  	for (i = 1; i <= max; i++){
  		gridRow = "grid_"+i;
  		$('#'+gridRow).children('#column1').attr('myAttr','cantMove');
  		while($('#'+gridRow).find("div[myAttr='canMove']").length!=0){
  			for (j = 2; j <= max; j++){
  				gridCol = "column"+j;
  				gridColPrev = "column"+(j-1);
          currentElement = $('#'+gridRow).children('#'+gridCol)
          prevElement = $('#'+gridRow).children('#'+gridColPrev);
  				if(currentElement.text() != "0"){
	  				if (prevElement.text() == '0') {
	  					zeroMove(currentElement, prevElement);
	  					hasMoved=true;
	  				} else if ((currentElement.text()==prevElement.text())&&(prevElement.attr('combine')=='canCombine')&&(currentElement.attr('combine')=='canCombine')) {
						  combineMove(currentElement, prevElement);
	  					hasMoved=true;
	  				} else {
	  					currentElement.attr('myAttr','cantMove');
	  				}
	  			} else {
	  				currentElement.attr('myAttr','cantMove');
	  			}
  			}
  		}
  	}
  	reset();
    if ((hasMoved == true) && (winState == null) && (over == null)){randomNumberGeneration()};
    printScore();
  }
  //right move
  var rightMove = function(){
    var hasMoved = false;
    for (i = 1; i <= max; i++){
      gridRow = "grid_"+i;
      $('#'+gridRow).children('#column'+max).attr('myAttr','cantMove');
      while($('#'+gridRow).find("div[myAttr='canMove']").length!=0){
        for (j = (max-1); j >= 1; j--){
          gridCol = "column"+j;
          gridColPrev = "column"+(j+1);
          currentElement = $('#'+gridRow).children('#'+gridCol)
          prevElement = $('#'+gridRow).children('#'+gridColPrev);
          if(currentElement.text()!="0"){
            if (prevElement.text() == '0') {
              zeroMove(currentElement, prevElement);
              hasMoved=true;
            } else if ((currentElement.text()==prevElement.text())&&(prevElement.attr('combine')=='canCombine')&&(currentElement.attr('combine')=='canCombine')) {
              combineMove(currentElement, prevElement);
              hasMoved=true;
            } else {
              currentElement.attr('myAttr','cantMove');
            }
          } else {
            currentElement.attr('myAttr','cantMove');
          }
        }
      }
    }
    reset();
    if ((hasMoved == true) && (winState == null) && (over == null)){randomNumberGeneration()};
    printScore();
  }
  //up move
  var upMove = function(){
    var hasMoved=false;
    for (i=1; i<=max; i++){
      gridCol="column"+i;
      $('#grid_1').children().attr('myAttr','cantMove');
      while($('#'+gridCol).parents().find("#"+gridCol+"[myAttr='canMove']").length!=0){
        for (j=2; j<=max; j++){
          gridRow="grid_"+j;
          gridRowPrev="grid_"+(j-1);
          currentElement=$('#'+gridRow).children('#'+gridCol);
          prevElement=$('#'+gridRowPrev).children('#'+gridCol);
          if(currentElement.text()!="0"){
            if (prevElement.text()=='0') {
              zeroMove(currentElement, prevElement);
              hasMoved=true;
            } else if ((currentElement.text()==prevElement.text())&&(prevElement.attr('combine')=='canCombine')&&(currentElement.attr('combine')=='canCombine')) {
              combineMove(currentElement, prevElement);
              hasMoved=true;
            } else {
              currentElement.attr('myAttr','cantMove');
            }
          } else {
            currentElement.attr('myAttr','cantMove');
          }
        }
      }
    }
    reset();
    if ((hasMoved == true) && (winState == null) && (over == null)){randomNumberGeneration()};
    printScore();
  }
  //down move
  var downMove = function(){
    var hasMoved=false;
    for (i=1; i<=max; i++){
      gridCol="column"+i;
      $('#grid_'+max).children().attr('myAttr','cantMove');
      while($('#'+gridCol).parents().find("#"+gridCol+"[myAttr='canMove']").length!=0){
        for (j=(max-1); j>=1; j--){
          gridRow="grid_"+j;
          gridRowPrev="grid_"+(j+1);
          currentElement=$('#'+gridRow).children('#'+gridCol);
          prevElement=$('#'+gridRowPrev).children('#'+gridCol);
          if(currentElement.text()!="0"){
            if (prevElement.text()=='0') {
              zeroMove(currentElement, prevElement);
              hasMoved=true;
            } else if ((currentElement.text()==prevElement.text())&&(prevElement.attr('combine')=='canCombine')&&(currentElement.attr('combine')=='canCombine')) {
              combineMove(currentElement, prevElement);
              hasMoved=true;
            } else {
              currentElement.attr('myAttr','cantMove');
            }
          } else {
            currentElement.attr('myAttr','cantMove');
          }
        }
      }
    }
    reset();
    if ((hasMoved == true) && (winState == null) && (over == null)) {randomNumberGeneration()};
    printScore();
  }

  var checkWin = function(){ // checks to see if the game is won
    if (max<=5){
      for(i=1; i<=max; i++){
        var GridRow="grid_"+i;
        for (j=1; j<=max; j++){
          var GridCol="column"+j;
          if ($('#'+GridRow).children('#'+GridCol).text()==toWin){
              winState="win";
              $(".message").append("<h1>You win!</h1>");
          }     
        }
      }
    }
  }

  var checkLose = function(){ // checks to see if the game is lost / over
    if (winState!="win"){
      var noZeroes=checkNoZeroes();
      if (noZeroes==true){
        var noSameValue=true;
        for(i=1; i<=max; i++){
          var GridRow="grid_"+i;
          for (j=1; j<=(max-1); j++){
            var GridCol="column"+j;
            var GridColNext="column"+(j+1);
            if ($('#'+GridRow).children('#'+GridCol).text()==$('#'+GridRow).children('#'+GridColNext).text()){
              noSameValue=false;
            }     
          }
        }
        for(i=1; i<=max; i++){
          var GridCol="column"+i;
          for (j=1; j<=(max-1); j++){
            var GridRow="grid_"+j;
            var GridRowNext="grid_"+(j+1);
            if ($('#'+GridRow).children('#'+GridCol).text()==$('#'+GridRowNext).children('#'+GridCol).text()){
              noSameValue=false;
            }     
          }
        }
      }
      if (noSameValue){
        if (max <= 5) {
          winState="lose";
          $(".message").append("<h1>You lose!</h1>");
        } else {
          over="over";
        $(".message").append("<h2>Game over! You got "+totalScore+" points! Good job!<h2>");
        }
      }
    } 
  }

  //different key presses
	$("body").keydown(function(e) {
	  if((e.keyCode == 37) && (winState == null) && (over == null)) { // left key press
	    leftMove();
      checkWin();
      checkLose();
	  } else if((e.keyCode == 39) && (winState == null) && (over == null)) { // right key press
      rightMove();
      checkWin();
      checkLose();
    } else if((e.keyCode == 38) && (winState == null) && (over == null)) { // up key press
      upMove();
      checkWin();
      checkLose();
    } else if((e.keyCode == 40) && (winState == null) && (over == null)) { // down key press
      downMove();
      checkWin();
      checkLose();
    }
	});

});
