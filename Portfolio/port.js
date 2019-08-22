var $ = function (id)
{
  return document.getElementById(id);
}

window.onload = function ()
{
  navHeader();
  navFooter();
  $("clicked").onclick = Expand;
}

function navHeader ()
{
  var ref = $("header");
  ref.innerHTML = '<a class="button" href="port1.html">Home Page</a>';
}

function navFooter ()
{
  var ref = $("footer");
  ref.innerHTML = '<a class="button" href="#header"> Top';
}

function Expand ()
{
 document.getElementById('clicked').style.height = '1920px';
}