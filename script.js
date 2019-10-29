var fizzBuzzArr = [];
  fizzBuzzArr.length = 100;
 


function addCircle(name, list) {
  var container = document.createElement("div");
  container.classList.add("fizzBuzzArr");
  list.appendChild(container);
}

document.addEventListener("DOMContentLoaded", function() {
  var parentDiv = document.getElementById("fizzBuzzArr");
  for (var i = 0; i < fizzBuzzArr.length; i++) {
    addName(fizzBuzzArr[i], parentDiv);
  }
});

for (var i = 0; i < fizzBuzzArr.length; i++) {
  function fizzBuzzResponds(fizzBuzzArr);
  if (fizzBuzzArr[i] % 15 === 0) {
    
  }
}
