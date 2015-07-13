$(document).ready(function(){
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
  	for(i=1; i<=4; i++){
  		var resetGridRow="grid_"+i;
  		for (j=1; j<=4; j++){
  			var resetGridCol="column"+j;
	  			$('#'+resetGridRow).children('#'+resetGridCol).attr('myAttr','canMove');
	  			$('#'+resetGridRow).children('#'+resetGridCol).attr('combine','canCombine');
  		}
  	}
  	if (hasMoved==true){randomNumberGeneration()};
  }

  var rightMove = function(){
    var hasMoved=false;
    for (i=1; i<=4; i++){
      gridRow="grid_"+i;
      $('#'+gridRow).children('#column4').attr('myAttr','cantMove');
      while(($('#'+gridRow).children('#column1').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column2').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column3').attr('myAttr')=='canMove')){
        for (j=3; j<=1; j--){
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
    for(i=1; i<=4; i++){
      var resetGridRow="grid_"+i;
      for (j=1; j<=4; j++){
        var resetGridCol="column"+j;
          $('#'+resetGridRow).children('#'+resetGridCol).attr('myAttr','canMove');
          $('#'+resetGridRow).children('#'+resetGridCol).attr('combine','canCombine');
      }
    }
    if (hasMoved==true){randomNumberGeneration()};
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
    for(i=1; i<=4; i++){
      var resetGridRow="grid_"+i;
      for (j=1; j<=4; j++){
        var resetGridCol="column"+j;
          $('#'+resetGridRow).children('#'+resetGridCol).attr('myAttr','canMove');
          $('#'+resetGridRow).children('#'+resetGridCol).attr('combine','canCombine');
      }
    }
    if (hasMoved==true){randomNumberGeneration()};
  }

  var downMove = function(){
    var hasMoved=false;
    for (i=1; i<=4; i++){
      gridCol="column"+i;
      $('#grid_4').children().attr('myAttr','cantMove');
      while(($('#grid_2').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_3').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_1').children('#'+gridCol).attr('myAttr')=='canMove')){
        for (j=3; j<=1; j++){
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
    for(i=1; i<=4; i++){
      var resetGridRow="grid_"+i;
      for (j=1; j<=4; j++){
        var resetGridCol="column"+j;
          $('#'+resetGridRow).children('#'+resetGridCol).attr('myAttr','canMove');
          $('#'+resetGridRow).children('#'+resetGridCol).attr('combine','canCombine');
      }
    }
    if (hasMoved==true){randomNumberGeneration()};
  }  


	$("body").keydown(function(e) {
	  if(e.keyCode == 37) { // left
	    leftMove();
	  } else if(e.keyCode==39) {
      rightMove();
    } else if(e.keyCode==38){
      upMove();
    } else if(e.keyCode==40){
      downMove();
    }
	});

});
