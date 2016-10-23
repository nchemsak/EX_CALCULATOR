// put an event listener on each of the buttons.
document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
var output = document.getElementById("output")

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add() {
  document.getElementById("num1");
  var add = (parseFloat(num1.value) + parseFloat(num2.value) );
  output.innerHTML = add;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract() {
 var subtract = (parseFloat(num1.value) - parseFloat(num2.value) );
 output.innerHTML = subtract;
}

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
 function multiply() {
 var multiply = (parseFloat(num1.value) * parseFloat(num2.value) );
 output.innerHTML = multiply;
 }

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide() {
 var divide = (parseFloat(num1.value) / parseFloat(num2.value) );
 output.innerHTML = divide;
}



//************************************************//
//                 MouseOver Events
//************************************************//


var outputEl = document.getElementById("symbol")
var adds = document.getElementsByClassName("adds");
var times = document.getElementsByClassName("times");
var sub = document.getElementsByClassName("sub");
var divides = document.getElementsByClassName("divides");

//******* Add *********//
function handleSectionClick1(MouseOverEvent) {
  var elementText = MouseOverEvent.target.innerHTML;
  outputEl.innerHTML = "+";
}
for (var i = 0; i < adds.length; i++) {
  adds.item(i).addEventListener("mouseover", handleSectionClick1);
}

//******* Subtract *********//
function handleSectionClick2(MouseOverEvent) {
  var elementText = MouseOverEvent.target.innerHTML;
  outputEl.innerHTML = "-";
}
for (var i = 0; i < sub.length; i++) {
  sub.item(i).addEventListener("mouseover", handleSectionClick2);
}

//******* Multiply *********//
function handleSectionClick3(MouseOverEvent) {
  var elementText = MouseOverEvent.target.innerHTML;
  outputEl.innerHTML = "×";
}
for (var i = 0; i < times.length; i++) {
  times.item(i).addEventListener("mouseover", handleSectionClick3);
}

//******* Divide *********//
function handleSectionClick4(MouseOverEvent) {
  var elementText = MouseOverEvent.target.innerHTML;
  outputEl.innerHTML = "÷";
}
for (var i = 0; i < divides.length; i++) {
  divides.item(i).addEventListener("mouseover", handleSectionClick4);
}
