window.onload = function()
{
  $("validate").addEventListener("click", validateFunc);
    $("clear").addEventListener("click", clearFunc);
    $("fill").addEventListener("click", fillFunc);
}
function $(id)
{
    return document.getElementById(id); 
}
function validateFunc()
{
  if($("validation").checkValidity() === false)
  { return; }
  
  $("results").value = "";
  $("rules").value = "";
  
  var fName = $("fName").value;
  var lName  = $("lName").value;
  var telephone = $("telephone").value;
  var zip = $("zip").value;
  var email = $("email").value;
  var ssn = $("ssn").value;
  var yob = $("birth").value;
  var income = parseFloat($("income").value);
  var tax = 0;
  var net = 0;
  
  if(income <= 20000)
    {
      tax = income * 0.1;
      net = income - tax;
    }
  else if(income > 20000 && income <= 50000)
    {
      tax = ((income - 20000) * 0.2) + 2000;
      net = income - tax;
    }
  else if(income > 50000 && income <= 100000)
    {
      tax = ((income - 50000) * 0.25) + 8000;
      net = income - tax;
    }
  else if(income > 100000 && income <= 500000)
    {
      tax = ((income - 100000) * 0.3) + 20500;
      net = income - tax;
    }
  else
    {
      tax = income * 0.01;
      net = income - tax;
    }
  
  var ref = $("results").innerHTML = "First Name: " + fName + "<br />"+ "Last Name: " + lName + "<br />" + "Telephone: " + telephone + "<br />" + "Zip: " + zip + "<br />" + "E-Mail: " + email + "<br />" + "Social Security: " + ssn + "<br />" + "YoB: " + yob + "<br />" + "Income: $" + income.toFixed(2) + "<br />" + "Tax: $" + tax.toFixed(2) + "<br />" + "Net Income: $" + net.toFixed(2);
  
  if(check.checked)
    {
      var ref2 = $("rules").innerHTML = "If Income <= $20,000 <br /> &nbsp &nbsp tax = 10% of income <br /> If $20,000 < income <= $50,000 <br /> &nbsp &nbsp tax = $2,000 and 20% of amount over $20,000 <br /> if $50,000 < income <= $100,000 <br /> &nbsp &nbsp tax = $8,000 and 25% of amount over $50,000 <br /> If $100,000 < income <= $500,000 <br /> &nbsp &nbsp tax = $20,500 and 30% of amount over $100,000 <br /> If $500,000 < income <br /> &nbsp &nbsp tax = 1% of income"
    }
}
function clearFunc()
{
  $("fName").value = "";
  $("lName").value = "";
  $("telephone").value = "";
  $("zip").value = "";
  $("email").value = "";
  $("ssn").value = "";
  $("income").value = "";
  $("check").checked= false;
  $("results").innerHTML = "";
  $("rules").innerHTML = "";
  $("fName").focus();
}
function fillFunc()
{
  $("fName").value = "Betty";
  $("lName").value = "White";
  $("telephone").value = "123-456-7890";
  $("zip").value = "16214";
  $("email").value = "bettyWhite@aol.com";
  $("ssn").value = "888-88-8888";
  $("income").value = "90000";
  $("rules").checked = true;
  
  $("results").innerHTML = "";
  $("rules").innerHTML = "";
}