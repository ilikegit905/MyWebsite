document.getElementById("button").onclick = function() {myFunction()};

var x=0;
function myFunction() {
  x++;
  document.getElementById("counter").innerHTML = x;
}