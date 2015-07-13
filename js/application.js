$(document).ready(function(){

  var winState=null;

  var randomNumberGeneration = function(){
  	var generated=false;
  	while (generated==false){
	    var colNum=Math.floor(Math.random()*3.99+1);
	    var rowNum=Math.floor(Math.random()*3.99+1);
	    gridCol="column"+colNum;
	    gridRow="grid_"+rowNum;
	    if($('#'+gridRow).children('#'+gridCol).text()=="0"){
		    $('#'+gridRow).children('#'+gridCol).text("2");
	  		generated=true;
	    }
  	}
  }

  var checkNoZeroes = function(){
    var hasZeroes = false;
    for(i=1; i<=4; i++){
      var GridRow="grid_"+i;
      for (j=1; j<=4; j++){
        var GridCol="column"+j;
        if ($('#'+GridRow).children('#'+GridCol).text()=='0'){
          hasZeroes=true;
        }
      }
    }
    return !hasZeroes;
  }

  var reset = function(){
    for(i=1; i<=4; i++){
      var resetGridRow="grid_"+i;
      for (j=1; j<=4; j++){
        var resetGridCol="column"+j;
        $('#'+resetGridRow).children('#'+resetGridCol).attr('myAttr','canMove');
        $('#'+resetGridRow).children('#'+resetGridCol).attr('combine','canCombine');
      }
    }
  }

  var setColor = function(elementValue){
    switch(elementValue.text()){
      case "2":
        elementValue.css('background-color','#EEE4DA');
      case "4":
        elementValue.css('background-color','#EDE0C8');
      case "8":
        elementValue.css('background-color','#F2B179');
      case "16":
        elementValue.css('background-color','#F59563');
      case "32":
        elementValue.css('background-color','#F67C5F');
      case "64":
        elementValue.css('background-color','#F65E3B');
      case "128":
        elementValue.css('background-color','#EDCF72');
      case "256":
        elementValue.css('background-color','#EDCC61');
      case "512":
        elementValue.css('background-color','#EDC850');
      case "1024":
        elementValue.css('background-color','#EDC53F');
      case "2048":
        elementValue.css('background-color','#EDC22E');
      default
        elementValue.css('background-color','#CCC0B3');
    }
  }
	
  randomNumberGeneration();
  randomNumberGeneration();

  var leftMove = function(){
  	var hasMoved=false;
  	for (i=1; i<=4; i++){
  		gridRow="grid_"+i;
  		$('#'+gridRow).children('#column1').attr('myAttr','cantMove');
  		while(($('#'+gridRow).children('#column2').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column3').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column4').attr('myAttr')=='canMove')){
  			for (j=2; j<=4; j++){
  				gridCol="column"+j;
  				gridColPrev="column"+(j-1);
  				if($('#'+gridRow).children('#'+gridCol).text()!="0"){
	  				if (($('#'+gridRow).children('#'+gridColPrev).text()=='0')) {
	  					sum=Number($('#'+gridRow).children('#'+gridColPrev).text())+Number($('#'+gridRow).children('#'+gridCol).text());
	  					$('#'+gridRow).children('#'+gridColPrev).text(sum);
	  					$('#'+gridRow).children('#'+gridCol).text(0);
	  					$('#'+gridRow).children('#'+gridCol).attr('myAttr','canMove');
	  					$('#'+gridRow).children('#'+gridCol).attr('combine','canCombine');
	  					$('#'+gridRow).children('#'+gridColPrev).attr('combine','canCombine');
	  					var hasMoved=true;
	  				} else if (($('#'+gridRow).children('#'+gridCol).text()==$('#'+gridRow).children('#'+gridColPrev).text())&&($('#'+gridRow).children('#'+gridColPrev).attr('combine')=='canCombine')&&($('#'+gridRow).children('#'+gridCol).attr('combine')=='canCombine')) {
						sum=Number($('#'+gridRow).children('#'+gridColPrev).text())+Number($('#'+gridRow).children('#'+gridCol).text());
	  					$('#'+gridRow).children('#'+gridColPrev).text(sum);
	  					$('#'+gridRow).children('#'+gridCol).text(0);
	  					$('#'+gridRow).children('#'+gridCol).attr('myAttr','canMove');
	  					$('#'+gridRow).children('#'+gridCol).attr('combine','canCombine');
	  					$('#'+gridRow).children('#'+gridColPrev).attr('combine','cantCombine');
	  					var hasMoved=true;
	  				} else {
	  					$('#'+gridRow).children('#'+gridCol).attr('myAttr','cantMove');
	  				}
	  			} else {
	  				$('#'+gridRow).children('#'+gridCol).attr('myAttr','cantMove');
	  			}
  			}
  		}
  	}
  	reset();
    if ((hasMoved==true)&&(winState==null)){randomNumberGeneration()};
  }

  var rightMove = function(){
    var hasMoved=false;
    for (i=1; i<=4; i++){
      gridRow="grid_"+i;
      $('#'+gridRow).children('#column4').attr('myAttr','cantMove');
      while(($('#'+gridRow).children('#column1').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column2').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column3').attr('myAttr')=='canMove')){
        for (j=3; j>=1; j--){
          gridCol="column"+j;
          gridColPrev="column"+(j+1);
          if($('#'+gridRow).children('#'+gridCol).text()!="0"){
            if (($('#'+gridRow).children('#'+gridColPrev).text()=='0')) {
              sum=Number($('#'+gridRow).children('#'+gridColPrev).text())+Number($('#'+gridRow).children('#'+gridCol).text());
              $('#'+gridRow).children('#'+gridColPrev).text(sum);
              $('#'+gridRow).children('#'+gridCol).text(0);
              $('#'+gridRow).children('#'+gridCol).attr('myAttr','canMove');
              $('#'+gridRow).children('#'+gridCol).attr('combine','canCombine');
              $('#'+gridRow).children('#'+gridColPrev).attr('combine','canCombine');
              var hasMoved=true;
            } else if (($('#'+gridRow).children('#'+gridCol).text()==$('#'+gridRow).children('#'+gridColPrev).text())&&($('#'+gridRow).children('#'+gridColPrev).attr('combine')=='canCombine')&&($('#'+gridRow).children('#'+gridCol).attr('combine')=='canCombine')) {
              sum=Number($('#'+gridRow).children('#'+gridColPrev).text())+Number($('#'+gridRow).children('#'+gridCol).text());
              $('#'+gridRow).children('#'+gridColPrev).text(sum);
              $('#'+gridRow).children('#'+gridCol).text(0);
              $('#'+gridRow).children('#'+gridCol).attr('myAttr','canMove');
              $('#'+gridRow).children('#'+gridCol).attr('combine','canCombine');
              $('#'+gridRow).children('#'+gridColPrev).attr('combine','cantCombine');
              var hasMoved=true;
            } else {
              $('#'+gridRow).children('#'+gridCol).attr('myAttr','cantMove');
            }
          } else {
            $('#'+gridRow).children('#'+gridCol).attr('myAttr','cantMove');
          }
        }
      }
    }
    reset();
    if ((hasMoved==true)&&(winState==null)){randomNumberGeneration()};
  }

  var upMove = function(){
    var hasMoved=false;
    for (i=1; i<=4; i++){
      gridCol="column"+i;
      $('#grid_1').children().attr('myAttr','cantMove');
      while(($('#grid_2').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_3').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_4').children('#'+gridCol).attr('myAttr')=='canMove')){
        for (j=2; j<=4; j++){
          gridRow="grid_"+j;
          gridRowPrev="grid_"+(j-1);
          if($('#'+gridRow).children('#'+gridCol).text()!="0"){
            if (($('#'+gridRowPrev).children('#'+gridCol).text()=='0')) {
              sum=Number($('#'+gridRowPrev).children('#'+gridCol).text())+Number($('#'+gridRow).children('#'+gridCol).text());
              $('#'+gridRowPrev).children('#'+gridCol).text(sum);
              $('#'+gridRow).children('#'+gridCol).text(0);
              $('#'+gridRow).children('#'+gridCol).attr('myAttr','canMove');
              $('#'+gridRow).children('#'+gridCol).attr('combine','canCombine');
              $('#'+gridRowPrev).children('#'+gridCol).attr('combine','canCombine');
              var hasMoved=true;
            } else if (($('#'+gridRowPrev).children('#'+gridCol).text()==$('#'+gridRow).children('#'+gridCol).text())&&($('#'+gridRowPrev).children('#'+gridCol).attr('combine')=='canCombine')&&($('#'+gridRow).children('#'+gridCol).attr('combine')=='canCombine')) {
              sum=Number($('#'+gridRowPrev).children('#'+gridCol).text())+Number($('#'+gridRow).children('#'+gridCol).text());
              $('#'+gridRowPrev).children('#'+gridCol).text(sum);
              $('#'+gridRow).children('#'+gridCol).text(0);
              $('#'+gridRow).children('#'+gridCol).attr('myAttr','canMove');
              $('#'+gridRow).children('#'+gridCol).attr('combine','canCombine');
              $('#'+gridRowPrev).children('#'+gridCol).attr('combine','cantCombine');
              var hasMoved=true;
            } else {
              $('#'+gridRow).children('#'+gridCol).attr('myAttr','cantMove');
            }
          } else {
            $('#'+gridRow).children('#'+gridCol).attr('myAttr','cantMove');
          }
        }
      }
    }
    reset();
    if ((hasMoved==true)&&(winState==null)){randomNumberGeneration()};
  }

  var downMove = function(){
    var hasMoved=false;
    for (i=1; i<=4; i++){
      gridCol="column"+i;
      $('#grid_4').children().attr('myAttr','cantMove');
      while(($('#grid_2').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_3').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_1').children('#'+gridCol).attr('myAttr')=='canMove')){
        for (j=3; j>=1; j--){
          gridRow="grid_"+j;
          gridRowPrev="grid_"+(j+1);
          if($('#'+gridRow).children('#'+gridCol).text()!="0"){
            if (($('#'+gridRowPrev).children('#'+gridCol).text()=='0')) {
              sum=Number($('#'+gridRowPrev).children('#'+gridCol).text())+Number($('#'+gridRow).children('#'+gridCol).text());
              $('#'+gridRowPrev).children('#'+gridCol).text(sum);
              $('#'+gridRow).children('#'+gridCol).text(0);
              $('#'+gridRow).children('#'+gridCol).attr('myAttr','canMove');
              $('#'+gridRow).children('#'+gridCol).attr('combine','canCombine');
              $('#'+gridRowPrev).children('#'+gridCol).attr('combine','canCombine');
              var hasMoved=true;
            } else if (($('#'+gridRowPrev).children('#'+gridCol).text()==$('#'+gridRow).children('#'+gridCol).text())&&($('#'+gridRowPrev).children('#'+gridCol).attr('combine')=='canCombine')&&($('#'+gridRow).children('#'+gridCol).attr('combine')=='canCombine')) {
              sum=Number($('#'+gridRowPrev).children('#'+gridCol).text())+Number($('#'+gridRow).children('#'+gridCol).text());
              $('#'+gridRowPrev).children('#'+gridCol).text(sum);
              $('#'+gridRow).children('#'+gridCol).text(0);
              $('#'+gridRow).children('#'+gridCol).attr('myAttr','canMove');
              $('#'+gridRow).children('#'+gridCol).attr('combine','canCombine');
              $('#'+gridRowPrev).children('#'+gridCol).attr('combine','cantCombine');
              var hasMoved=true;
            } else {
              $('#'+gridRow).children('#'+gridCol).attr('myAttr','cantMove');
            }
          } else {
            $('#'+gridRow).children('#'+gridCol).attr('myAttr','cantMove');
          }
        }
      }
    }
    reset();
    if ((hasMoved==true)&&(winState==null)){randomNumberGeneration()};
  }

  var checkWin = function(){
    for(i=1; i<=4; i++){
      var GridRow="grid_"+i;
      for (j=1; j<=4; j++){
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
        for(i=1; i<=4; i++){
          var GridRow="grid_"+i;
          for (j=1; j<=3; j++){
            var GridCol="column"+j;
            var GridColNext="column"+(j+1);
            if ($('#'+GridRow).children('#'+GridCol).text()==$('#'+GridRow).children('#'+GridColNext).text()){
              noSameValue=false;
            }     
          }
        }
        for(i=1; i<=4; i++){
          var GridCol="column"+i;
          for (j=1; j<=3; j++){
            var GridRow="grid_"+j;
            var GridRowNext="grid_"+(j+1);
            if ($('#'+GridRow).children('#'+GridCol).text()==$('#'+GridRowNext).children('#'+GridCol).text()){
              noSameValue=false;
            }     
          }
        }
      }
      if (noSameValue==true){
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
