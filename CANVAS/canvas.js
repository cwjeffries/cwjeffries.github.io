function $(id)
{
	return document.getElementById(id);
}

window.onload = function ()
{
	var canvasL = $("leftCanvas").getContext('2d');     //Gets left canvas
	$("btnL").addEventListener("click", function () {circles()});
	
	var canvasR = $("rightCanvas").getContext('2d');     //Gets right canvas
	$("btnR").addEventListener("click", function () {rectangles()});
	
	$("leftCanvas").addEventListener("click", function () {clearL("inputL",canvasL)});     //Clears the canvas when clicked
	$("rightCanvas").addEventListener("click", function () {clearR("inputR",canvasR)});
}

function circles()     //Function to draw circles on left canvas
{
	var canvasL = $("leftCanvas").getContext("2d");
	var inputL = $("inputL").value;     //Gets value from input box for number of circles to draw
	
	if(inputL > 0 && inputL <= 500)     //Range for min / max circles to be drawn at once
	{
		for(var i=1; i < inputL; i++)
		{
			var x = Math.floor(Math.random()*400);
			var y = Math.floor(Math.random()*400);
			var radian = Math.floor(Math.random()*50);
			
			var r = Math.floor(Math.random()*255);
			var g = Math.floor(Math.random()*255);
			var b = Math.floor(Math.random()*255);
			var o = Math.random();
			var color = r + "," + g + "," + b + "," + o;
			
			canvasL.beginPath();
			canvasL.fillStyle = "rgba(" + color + ")";
			canvasL.arc(x, y, radian, 0, 2*Math.PI);
			canvasL.fill();
			canvasL.stroke();
		}
	}
	else
	{
		alert("ABOVE 0 AND BELOW 500 PAL")
	}
}

function rectangles()     //Function to draw rectangles on right canvas
{
	var canvasR = $("rightCanvas").getContext("2d");
	var inputR = $("inputR").value;     //Gets value from input box for number of rectangles to draw
	
	if(inputR > 0 && inputR <= 500)     //Range for min / max rectangles to be drawn at once
	{
		for(var i=1; i < inputR; i++)
		{
			var width = Math.floor(Math.random()*100);
			var height = Math.floor(Math.random()*100);
			var x = Math.floor(Math.random()*400);
			var y = Math.floor(Math.random()*400);
			
			var r = Math.floor(Math.random()*255);
			var g = Math.floor(Math.random()*255);
			var b = Math.floor(Math.random()*255);
			var o = Math.random();
			var color = r + "," + g + "," + b + "," + o;
			
			canvasR.fillStyle = "rgba(" + color + ")";
			canvasR.fillRect(x, y, width, height);
			canvasR.strokeRect(x, y, width, height);
		}
	}
	else
	{
		alert("BELOW 500 AND ABOVE 0 BUD")
	}
}

function clearL(input, canvas)     //Function to clear the left canvas
{
	$(input).value = 0;
	canvas.clearRect(0, 0, 400, 400);
}

function clearR(input, canvas)     //Function to clear the right canvas
{
	$(input).value = 0;
	canvas.clearRect(0, 0, 400, 400);
}