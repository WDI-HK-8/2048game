$(document).ready(function(){

  var over=null
  var totalScore=0;

  var printScore=function(){
    $('#totalscore').text(totalScore);
  }

  var checkNoZeroes = function(){
    var hasZeroes = false;
    for(i=1; i<=6; i++){
      var GridRow="grid_"+i;
      for (j=1; j<=6; j++){
        var GridCol="column"+j;
        if ($('#'+GridRow).children('#'+GridCol).text()=='0'){
          hasZeroes=true;
        }
      }
    }
    return !hasZeroes;
  }

  var reset = function(){
    for(i=1; i<=6; i++){
      var resetGridRow="grid_"+i;
      for (j=1; j<=6; j++){
        var resetGridCol="column"+j;
        $('#'+resetGridRow).children('#'+resetGridCol).attr('myAttr','canMove');
        $('#'+resetGridRow).children('#'+resetGridCol).attr('combine','canCombine');
      }
    }
  }

  var setColor = function(){
    for(i=1; i<=6; i++){
      var GridRow="grid_"+i;
      for (j=1; j<=6; j++){
        var GridCol="column"+j;
        var elementValue=$('#'+GridRow).children('#'+GridCol);
        var elementValueText=elementValue.text()
        switch(elementValueText){
          case "0":
            elementValue.css('background-color','#CCC0B3');
            elementValue.css('color','#CCC0B3');
            break;
          case "2":
            elementValue.css('background-color','#EEE4DA');
            elementValue.css('color','#776e65');
            break;
          case "4":
            elementValue.css('background-color','#EDE0C8');
            elementValue.css('color','#776e65');
            break;
          case "8":
            elementValue.css('background-color','#F2B179');
            elementValue.css('color','white');
            break;
          case "16":
            elementValue.css('background-color','#F59563');
            elementValue.css('color','white');
            break;
          case "32":
            elementValue.css('background-color','#F67C5F');
            elementValue.css('color','white');
            break;
          case "64":
            elementValue.css('background-color','#F65E3B');
            elementValue.css('color','white');
            break;
          case "128":
            elementValue.css('background-color','#EDCF72');
            elementValue.css('color','white');
            break;
          case "256":
            elementValue.css('background-color','#EDCC61');
            elementValue.css('color','white');
            break;
          case "512":
            elementValue.css('background-color','#EDC850');
            elementValue.css('color','white');
            break;
          case "1024":
            elementValue.css('background-color','#EDC53F');
            elementValue.css('color','white');
            break;
          case "2048":
            elementValue.css('background-color','#EDC22E');
            elementValue.css('color','white');
            break;
          case "4096":
            elementValue.css('background-color','#FFA500');
            elementValue.css('color','white');
            break;
          case "8192":
            elementValue.css('background-color','#98F5FF');
            elementValue.css('color','white');
            break;
          case "16384":
            elementValue.css('background-color','#00C5CD');
            elementValue.css('color','white');
            break;
          case "32768":
            elementValue.css('background-color','#5CACEE');
            elementValue.css('color','white');
            break;
          case "65536":
            elementValue.css('background-color','#32CD32');
            elementValue.css('color','white');
            break;
          case "131072":
            elementValue.css('background-color','#00868B');
            elementValue.css('color','white');
            break;
          case "262144":
            elementValue.css('background-color','#EEAEEE');
            elementValue.css('color','white');
            break;
          case "524288":
            elementValue.css('background-color','#DC143C');
            elementValue.css('color','white');
            break;
          case "1048576":
            elementValue.css('background-color','#CAFF70');
            elementValue.css('color','white');
            break;
          case "2097152":
            elementValue.css('background-color','#68228B');
            elementValue.css('color','white');
            break;
          case "4194304":
            elementValue.css('background-color','#E9967A');
            elementValue.css('color','white');
            break;
          case "8388608":
            elementValue.css('background-color','#8E8E38');
            elementValue.css('color','white');
            break;
          case "16777216":
            elementValue.css('background-color','#8B1A1A');
            elementValue.css('color','white');
            break;
          default:
            elementValue.css('background-color','#FFFF00');
            elementValue.css('color','white');
        }
      }
    }
  }
	
  var randomNumberGeneration = function(){
    var generated=false;
    while (generated==false){
      var colNum=Math.floor(Math.random()*5.99+1);
      var rowNum=Math.floor(Math.random()*5.99+1);
      gridCol="column"+colNum;
      gridRow="grid_"+rowNum;
      if($('#'+gridRow).children('#'+gridCol).text()=="0"){
        $('#'+gridRow).children('#'+gridCol).text("2");
        generated=true;
      }
    }
    setColor();
  }

  printScore();
  randomNumberGeneration();
  randomNumberGeneration();
  randomNumberGeneration();
  randomNumberGeneration();

  $('.btn-default').click(function(){
    for(i=1; i<=6; i++){
      var resetGridRow="grid_"+i;
      for (j=1; j<=6; j++){
        var resetGridCol="column"+j;
        $('#'+resetGridRow).children('#'+resetGridCol).text('0');
        $('#'+resetGridRow).children('#'+resetGridCol).text('0');
      }
    }
    reset();
    totalScore=0;
    printScore();
    randomNumberGeneration();
    randomNumberGeneration();
    randomNumberGeneration();
    randomNumberGeneration();
  })

  var leftMove = function(){
  	var hasMoved=false;
  	for (i=1; i<=6; i++){
  		gridRow="grid_"+i;
  		$('#'+gridRow).children('#column1').attr('myAttr','cantMove');
  		while(($('#'+gridRow).children('#column2').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column3').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column4').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column5').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column6').attr('myAttr')=='canMove')){
  			for (j=2; j<=6; j++){
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
              totalScore += sum;
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
    if ((hasMoved==true)&&(over==null)){
      randomNumberGeneration();
      randomNumberGeneration();
    }
    printScore();
  }

  var rightMove = function(){
    var hasMoved=false;
    for (i=1; i<=6; i++){
      gridRow="grid_"+i;
      $('#'+gridRow).children('#column6').attr('myAttr','cantMove');
      while(($('#'+gridRow).children('#column1').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column2').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column3').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column4').attr('myAttr')=='canMove')||($('#'+gridRow).children('#column5').attr('myAttr')=='canMove')){
        for (j=5; j>=1; j--){
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
              totalScore += sum;
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
    if ((hasMoved==true)&&(over==null)){
      randomNumberGeneration();
      randomNumberGeneration();
    }    
    printScore();
  }

  var upMove = function(){
    var hasMoved=false;
    for (i=1; i<=6; i++){
      gridCol="column"+i;
      $('#grid_1').children().attr('myAttr','cantMove');
      while(($('#grid_2').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_3').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_4').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_5').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_6').children('#'+gridCol).attr('myAttr')=='canMove')){
        for (j=2; j<=6; j++){
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
              totalScore += sum;
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
    if ((hasMoved==true)&&(over==null)){
      randomNumberGeneration();
      randomNumberGeneration();
    }    
    printScore();
  }

  var downMove = function(){
    var hasMoved=false;
    for (i=1; i<=6; i++){
      gridCol="column"+i;
      $('#grid_6').children().attr('myAttr','cantMove');
      while(($('#grid_2').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_3').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_1').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_4').children('#'+gridCol).attr('myAttr')=='canMove')||($('#grid_5').children('#'+gridCol).attr('myAttr')=='canMove')){
        for (j=5; j>=1; j--){
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
              totalScore += sum;
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
    if ((hasMoved==true)&&(over==null)){
      randomNumberGeneration();
      randomNumberGeneration();
    }    
    printScore();
  }

  var checkOver = function(){
    var noZeroes=checkNoZeroes();
    if (noZeroes==true){
      var noSameValue=true;
      for(i=1; i<=6; i++){
        var GridRow="grid_"+i;
        for (j=1; j<=5; j++){
          var GridCol="column"+j;
          var GridColNext="column"+(j+1);
          if ($('#'+GridRow).children('#'+GridCol).text()==$('#'+GridRow).children('#'+GridColNext).text()){
            noSameValue=false;
          }     
        }
      }
      for(i=1; i<=6; i++){
        var GridCol="column"+i;
        for (j=1; j<=5; j++){
          var GridRow="grid_"+j;
          var GridRowNext="grid_"+(j+1);
          if ($('#'+GridRow).children('#'+GridCol).text()==$('#'+GridRowNext).children('#'+GridCol).text()){
            noSameValue=false;
          }     
        }
      }
    }
    if (noSameValue==true){
      over="over";
      console.log("Game over! You got "+totalScore+" points! Good job!")
    } 
  }

	$("body").keydown(function(e) {
	  if((e.keyCode == 37)&&(over==null)) { // left
	    leftMove();
      checkOver();
	  } else if((e.keyCode == 39)&&(over==null)) {
      rightMove();
      checkOver();
    } else if((e.keyCode == 38)&&(over==null)){
      upMove();
      checkOver();
    } else if((e.keyCode == 40)&&(over==null)){
      downMove();
      checkOver();
    }
	});

});
