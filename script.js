for (var i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    addCircle('FizzBuzz'); 
  } else if (i % 5 === 0) {
    addCircle('Buzz');
  } else if (i % 3 === 0) {
    addCircle('Fizz');
  } else {
    addCircle(i);
  }
}

function addCircle (content){
  // 1-Save new element to variable
  var newElement = document.createElement('div')
  // 2-Customize new element
  newElement.innerText = content;
  newElement.classList.add('circle');
  // 3-Grab future parent element
  var container = document.getElementById('fizzbuzz-container');
  // 4-Append new element to parent
  container.appendChild(newElement);
}


// var fizzBuzzArr = [];
//   fizzBuzzArr.length = 100;
 


// function addCircle(name, list) {
//   var container = document.createElement("div");
//   container.classList.add("fizzBuzzArr");
//   list.appendChild(container);
// }

// document.addEventListener("DOMContentLoaded", function() {
//   var parentDiv = document.getElementById("fizzBuzzArr");
//   for (var i = 0; i < fizzBuzzArr.length; i++) {
//     addName(fizzBuzzArr[i], parentDiv);
//   }
// });

// for (var i = 0; i < fizzBuzzArr.length; i++) {
//   function fizzBuzzResponds(fizzBuzzArr);
//   if (fizzBuzzArr[i] % 15 === 0) {
    
//   }
// }
