// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-06-JS/sw.js", {
    scope: "/ICS20-Unit5-06-JS/",
  })
}

/**
 * This function calculates if you get free admission
 */
function myButtonClicked() {
  // input
  var firstInteger = document.getElementById("integer-one").value
  var secondInteger = document.getElementById("integer-two").value

  
    // process and output
  let counter = 0
  var answer = 0
  var firstIntegerAsInt = parseInt(firstInteger)
  if ((firstInteger <= 0) || (secondInteger <= 0)) {
    document.getElementById("loop").innerHTML = 'Please input a positive number.'
  } else {
    while (counter < secondInteger) {
      console.log("Once through loop:" + counter)
      answer = answer + firstIntegerAsInt
      counter++
    }
     document.getElementById("loop").innerHTML = "The number is " + (answer)
  }
}
