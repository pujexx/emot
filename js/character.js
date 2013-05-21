var images = {};
var totalResources = 10;
var numResourcesLoaded = 0;
var fps = 30;
var charX = 0;
var charY = 0;
var context;
var kedepo =false;
var eyeOpenTime = 0;
var timeBtwBlinks = 4000;
var blinkUpdateTime = 200;      
var maxEyeHeight = 14;
var curEyeHeight = maxEyeHeight; 
function randomFrom(array) {return array[Math.floor(Math.random() * array.length)];}             
setInterval(function(){
	var func = randomFrom(['kedep','mbingungi']);
	window[func]();
},5000)
function intervalkedep(){setInterval(updatekedep, blinkUpdateTime);}
var tertawa = false;
var countketawa =0;
var matalengkung =false;
var init = false;
var yposisimata =0;
var xposisimata =0;
var meremsuwe  = false;
var bingung = false;
var marah =false;
var xposisibibir=0;
var yposisibibir=0;
var xposisimatapuyengkiri=0;
var xposisimatapuyengkanan=0;
var yposisimatapuyengkiri=0;
var yposisimatapuyengkanan=0;
var mumete = false;
loadImage("matakiri");
loadImage("matakanan");
loadImage("bibirsenyum");
loadImage("matamerem");
loadImage("bibirketawa2");
loadImage("lidah");
loadImage("matakiricekung");
loadImage("matakanancekung");
loadImage("bibirdatar");
loadImage("matakirikuning");
loadImage("matakanankuning");
loadImage("bibirgigi");
loadImage("bibirnekuk");


function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
      resourceLoaded();
  }
  images[name].src = "img/" + name + ".png";
}

function resourceLoaded() {
  init = true;
  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
    setInterval(redraw, 1000 / fps);
  }
}

function redraw() {

  context = document.getElementById('canvas').getContext("2d");

  var x = charX;
  var y = charY;

  canvas.width = canvas.width; // clears the canvas 
  if(kedepo){
  	matamerem(charX+40,charY+125);
    matamerem(charX+118,charY+125);
  }
  else if(matalengkung){
  	context.drawImage(images["matakiricekung"], x + 31, y +90);
  	context.drawImage(images["matakanancekung"], x+109, y +90);
  }
  else if(meremsuwe){
  	matamerem(charX+40,charY+125);
    matamerem(charX+118,charY+125);
  }else if(marah){
  	context.drawImage(images["matakirikuning"], x + 31, y +100);
  	context.drawImage(images["matakanankuning"], x+109, y +100);
  }
  else {
  	context.drawImage(images["matakiri"], x + 31, y +70);
  	context.drawImage(images["matakanan"], x+109, y +70);
  }
  if(tertawa){
  
  	context.drawImage(images["bibirketawa2"],x+40,y+190);
  	context.drawImage(images["lidah"],x+79,y+220);
  }
  else if(meremsuwe){
  	context.drawImage(images["bibirdatar"], x +58, y + 210);
  }else if(marah){
  	context.drawImage(images["bibirgigi"], x +58+xposisibibir, y + 190 +yposisibibir);
  }else if(mumete){
  	context.drawImage(images["bibirnekuk"], x +58+xposisibibir, y + 190 +yposisibibir);
  }
  else{
  	context.drawImage(images["bibirsenyum"], x +30, y + 200);
  }
  if(!kedepo && !meremsuwe){
	mata(8,x+75+xposisimata+xposisimatapuyengkiri,y+120+yposisimata+yposisimatapuyengkanan); 
	mata(9,x+150+xposisimata+xposisimatapuyengkanan,y+120+yposisimata+yposisimatapuyengkanan); 	 	
  }

  
 


  
}


function mata(width , x,y){
	context.beginPath();
	context.arc(x,y,width,0,2*Math.PI);
	context.fillStyle = "black";
	context.fill();
	context.closePath();
}

function updatekedep(){
	eyeOpenTime += blinkUpdateTime;
	
	if(eyeOpenTime >= timeBtwBlinks){
	    kedep();
	}
}

function kedep(){
	curEyeHeight -= 1;
  	if (curEyeHeight <= 0) {
    	eyeOpenTime = 0;
    	curEyeHeight = maxEyeHeight;
    	kedepo = false;
	 } else {
	    setTimeout(kedep, 10);
	    kedepo = true;
	 }
	
}

function matamerem(x,y){
	context.drawImage(images["matamerem"],x,y);
}

function merem(){
	meremsuwe = true;
}
function melek(){
	meremsuwe =false;
}

function mbingungi(){
	var countbingung =0;
	var hae = setInterval(function(){
		if(countbingung %2 ==1){
			xposisimata = 15;
		}else{
			xposisimata = -15;
		}
		countbingung++;
		setTimeout(function(){
			clearInterval(hae);
			xposisimata =0;
		},1500);
	},1000);
}

function mumet(){
	document.body.style.background = '#6d79a0'
	var hae = setInterval(function(){
	xposisimatapuyengkiri = getRandomInt(15,-20);
	xposisimatapuyengkanan = getRandomInt(15,-20);
	yposisimatapuyengkiri = getRandomInt(15,-20);
	yposisimatapuyengkanan = getRandomInt(15,-20);
	mumete = true;
	setTimeout(function(){
		clearInterval(hae);
		xposisimatapuyengkiri = 0;
		xposisimatapuyengkanan = 0;
		yposisimatapuyengkiri = 0;
		yposisimatapuyengkanan = 0;
		document.body.style.background = "#ffb72a";
		mumete = false;
	},2000)
	},300);
}


function muring(){
	document.body.style.background = "#f00";
	marah =true;
	var countmarah = 0;
	var hae = setInterval(function(){
		var nambahduwur = countmarah+4;
		yposisibibir= -nambahduwur;
		if(countmarah%2==1){
			xposisibibir =5;
		}else{
			xposisibibir =-5;
		}
		setTimeout(function(){
			//marah = false;
			clearInterval(hae);
			//xposisibibir =0;
			//yposisibibir =0;
		},700);
		setTimeout(function(){
			marah =false;
			xposisibibir =0;
			yposisibibir =0;
			document.body.style.background = "#ffb72a";
		},3000);
		countmarah++;
	},80);
}

function tawa(){
	matalengkung = true;
	yposisimata = 10;
	if(!tertawa){
		var hae = setInterval(function(){
			if(countketawa%2==1){
				tertawa = true;
			}else{
				tertawa =false;
			}
			countketawa++;
			setTimeout(function(){tertawa=false;clearInterval(hae); init = true; matalengkung=false; yposisimata =0;},2500);
		},200);
		
		console.log(countketawa);
	}
	
	//tertawa = true;
}

function matagerakkanan(){
	xposisimata = 15;
	setTimeout(function(){
			
			xposisimata =0;
		},1500);
}

function matagerakkiri(){
	xposisimata = -15;
	setTimeout(function(){
			
			xposisimata =0;
		},1500);
}
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}