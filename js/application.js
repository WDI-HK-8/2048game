$(document).ready(function(){

  var max = 4;
  var winState=null;
  var totalScore=0;

  var printScore=function(){
    $('#totalscore').text(totalScore);
  }

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

  var reset = function(){
    $('.grid').children().children().attr('myAttr', 'canMove');
    $('.grid').children().children().attr('combine', 'canCombine');
  }

  var setColor = function(){
    for(i=1; i<=max; i++){
      var GridRow="grid_"+i;
      for (j=1; j<=max; j++){
        var GridCol="column"+j;
        var elementValue=$('#'+GridRow).children('#'+GridCol);
        var elementValueText=elementValue.text()
        switch(elementValueText){
          case "0":
            elementValue.css('background-color','#CCC0B3');
            elementValue.css('color','#CCC0B3');
            elementValue.css('border','none');
            break;
          case "2":
            elementValue.css('background-color','#EEE4DA');
            elementValue.css('color','#776e65');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "4":
            elementValue.css('background-color','#EDE0C8');
            elementValue.css('color','#776e65');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "8":
            elementValue.css('background-color','#F2B179');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "16":
            elementValue.css('background-color','#F59563');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "32":
            elementValue.css('background-color','#F67C5F');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "64":
            elementValue.css('background-color','#F65E3B');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "128":
            elementValue.css('background-color','#EDCF72');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "256":
            elementValue.css('background-color','#EDCC61');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "512":
            elementValue.css('background-color','#EDC850');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "1024":
            elementValue.css('background-color','#EDC53F');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "2048":
            elementValue.css('background-color','#EDC22E');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "4096":
            elementValue.css('background-color','#FFA500');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "8192":
            elementValue.css('background-color','#98F5FF');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "16384":
            elementValue.css('background-color','#00C5CD');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "32768":
            elementValue.css('background-color','#5CACEE');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "65536":
            elementValue.css('background-color','#32CD32');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "131072":
            elementValue.css('background-color','#00868B');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "262144":
            elementValue.css('background-color','#EEAEEE');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "524288":
            elementValue.css('background-color','#DC143C');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "1048576":
            elementValue.css('background-color','#CAFF70');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "2097152":
            elementValue.css('background-color','#68228B');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "4194304":
            elementValue.css('background-color','#E9967A');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "8388608":
            elementValue.css('background-color','#8E8E38');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          case "16777216":
            elementValue.css('background-color','#8B1A1A');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
            break;
          default:
            elementValue.css('background-color','#FFFF00');
            elementValue.css('color','white');
            elementValue.css('border','8px solid #BBADA0');
        }
      }
    }
  }
	
  var randomNumberGeneration = function(){
    var generated=false;
    while (generated==false){
      var colNum=Math.floor(Math.random()*(max-0.01)+1);
      var rowNum=Math.floor(Math.random()*(max-0.01)+1);
      gridCol="column"+colNum;
      gridRow="grid_"+rowNum;
      var newElement = $('#'+gridRow).children('#'+gridCol);
      if(newElement.text()=="0"){
        newElement.css("opacity", "0")
        newElement.text("2");
        newElement.animate({
          opacity: 1,
        }, 400)
        generated=true;
      }
    }
    setColor();
  }

  printScore();
  randomNumberGeneration();
  randomNumberGeneration();

  $('.btn-default').click(function(){
    for(i=1; i<=max; i++){
      var resetGridRow="grid_"+i;
      for (j=1; j<=max; j++){
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
  })

  var leftMove = function(){
  	var hasMoved=false;
  	for (i=1; i<=max; i++){
  		gridRow="grid_"+i;
  		$('#'+gridRow).children('#column1').attr('myAttr','cantMove');
  		while($('#'+gridRow).find("div[myAttr='canMove']").length!=0){
  			for (j=2; j<=max; j++){
  				gridCol="column"+j;
  				gridColPrev="column"+(j-1);
          currentElement=$('#'+gridRow).children('#'+gridCol)
          prevElement=$('#'+gridRow).children('#'+gridColPrev);
  				if(currentElement.text()!="0"){
	  				if (prevElement.text()=='0') {
	  					sum=Number(prevElement.text())+Number(currentElement.text());
	  					prevElement.text(sum);
	  					currentElement.text(0);
	  					currentElement.attr('myAttr','canMove');
	  					currentElement.attr('combine','canCombine');
	  					prevElement.attr('combine','canCombine');
	  					var hasMoved=true;
	  				} else if ((currentElement.text()==prevElement.text())&&(prevElement.attr('combine')=='canCombine')&&(currentElement.attr('combine')=='canCombine')) {
						  sum=Number(prevElement.text())+Number(currentElement.text());
              prevElement.text(sum);
              totalScore += sum;
              currentElement.text(0);
              currentElement.attr('myAttr','canMove');
              currentElement.attr('combine','canCombine');
              prevElement.attr('combine','cantCombine');
	  					var hasMoved=true;
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
    if ((hasMoved==true)&&(winState==null)){randomNumberGeneration()};
    printScore();
  }

  var rightMove = function(){
    var hasMoved=false;
    for (i=1; i<=max; i++){
      gridRow="grid_"+i;
      $('#'+gridRow).children('#column'+max).attr('myAttr','cantMove');
      while($('#'+gridRow).find("div[myAttr='canMove']").length!=0){
        for (j=(max-1); j>=1; j--){
          gridCol="column"+j;
          gridColPrev="column"+(j+1);
          currentElement=$('#'+gridRow).children('#'+gridCol)
          prevElement=$('#'+gridRow).children('#'+gridColPrev);
          if(currentElement.text()!="0"){
            if (prevElement.text()=='0') {
              sum=Number(prevElement.text())+Number(currentElement.text());
              prevElement.text(sum);
              currentElement.text(0);
              currentElement.attr('myAttr','canMove');
              currentElement.attr('combine','canCombine');
              prevElement.attr('combine','canCombine');
              var hasMoved=true;
            } else if ((currentElement.text()==prevElement.text())&&(prevElement.attr('combine')=='canCombine')&&(currentElement.attr('combine')=='canCombine')) {
              sum=Number(prevElement.text())+Number(currentElement.text());
              prevElement.text(sum);
              totalScore += sum;
              currentElement.text(0);
              currentElement.attr('myAttr','canMove');
              currentElement.attr('combine','canCombine');
              prevElement.attr('combine','cantCombine');
              var hasMoved=true;
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
    if ((hasMoved==true)&&(winState==null)){randomNumberGeneration()};
    printScore();
  }

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
              sum=Number(prevElement.text())+Number(currentElement.text());
              prevElement.text(sum);
              currentElement.text(0);
              currentElement.attr('myAttr','canMove');
              currentElement.attr('combine','canCombine');
              prevElement.attr('combine','canCombine');
              var hasMoved=true;
            } else if ((currentElement.text()==prevElement.text())&&(prevElement.attr('combine')=='canCombine')&&(currentElement.attr('combine')=='canCombine')) {
              sum=Number(prevElement.text())+Number(currentElement.text());
              prevElement.text(sum);
              totalScore += sum;
              currentElement.text(0);
              currentElement.attr('myAttr','canMove');
              currentElement.attr('combine','canCombine');
              prevElement.attr('combine','cantCombine');
              var hasMoved=true;
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
    if ((hasMoved==true)&&(winState==null)){randomNumberGeneration()};
    printScore();
  }

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
              sum=Number(prevElement.text())+Number(currentElement.text());
              prevElement.text(sum);
              currentElement.text(0);
              currentElement.attr('myAttr','canMove');
              currentElement.attr('combine','canCombine');
              prevElement.attr('combine','canCombine');
              var hasMoved=true;
            } else if ((currentElement.text()==prevElement.text())&&(prevElement.attr('combine')=='canCombine')&&(currentElement.attr('combine')=='canCombine')) {
              sum=Number(prevElement.text())+Number(currentElement.text());
              prevElement.text(sum);
              totalScore += sum;
              currentElement.text(0);
              currentElement.attr('myAttr','canMove');
              currentElement.attr('combine','canCombine');
              prevElement.attr('combine','cantCombine');
              var hasMoved=true;
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
    if ((hasMoved==true)&&(winState==null)){randomNumberGeneration()};
    printScore();
  }

  var checkWin = function(){
    for(i=1; i<=max; i++){
      var GridRow="grid_"+i;
      for (j=1; j<=max; j++){
        var GridCol="column"+j;
        if ($('#'+GridRow).children('#'+GridCol).text()=='2048'){
            winState="win";
            console.log("You win!")
        }     
      }
    }
  }

  var checkLose = function(){
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
        winState="lose";
        console.log("You lose!")
      }
    }  
  }

	$("body").keydown(function(e) {
	  if((e.keyCode == 37)&&(winState==null)) { // left
	    leftMove();
      checkWin();
      checkLose();
	  } else if((e.keyCode == 39)&&(winState==null)) {
      rightMove();
      checkWin();
      checkLose();
    } else if((e.keyCode == 38)&&(winState==null)){
      upMove();
      checkWin();
      checkLose();
    } else if((e.keyCode == 40)&&(winState==null)){
      downMove();
      checkWin();
      checkLose();
    }
	});

});
