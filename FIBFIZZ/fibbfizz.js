function $(id)     // gets the element by id
{
	return document.getElementById(id);
}

window.onload = function()     // lets the div containers be buttons upon loading of DOM
{
	$("Fibb").onclick = Fibbonaci;
	
	$("Fizz").onclick = FizzBuzz;
	
	$("Button").onclick = Button;
}

function Fibbonaci()
{
  //1474 is the highest index number for fib on webpage
  var s = "";
  var a = 0, b = 1, sum = 0;
  var fib;
  var num = prompt("Enter a number", 12);     // prompts user for a number
  for(var i = 0; i <= num; i++)     // runs the for loop generating the fib sequence and stores them
    {
      sum = a + b;
      a = b;
      b = sum;
      s = s + "<br />" + sum;
    }
  var ref = $("FibbBox").innerHTML = s;     // outputs the stored fib sequence
}

function FizzBuzz()
{
  var output = "";
  var num = prompt("Enter a number", 12);
  for(var i = 1; i <= num; i++)     // for loop that holds multiple if statements
    {
      if((i%3 == 0) && (i%5 == 0))     // finds any numbers divisble by 3 and 5 to produce Fizz Buzz
      { output += "Fizz Buzz" + "<br />"; }
      else if(i%3 == 0)     // finds any numbers divisble by 3 to produce Fizz
      { output += "Fizz" + "<br />"; }
      else if(i%5 == 0)     // finds any numbers divisble by 5 to produce Buzz
      { output += "Buzz" + "<br />"; }
      else if((i%5 !==0) && (i%3 !== 0))     // displays the regular number
      { output += i + "<br />"; }
    }
  var ref = $("FizzBox").innerHTML = output;
}

function Button()
{
	Fibbonaci();
	FizzBuzz();
}