"use strict";
// -------------------------Variable Declaration-------------------
const number = "125,200$";

// ---------------------Functions Declaration--------------------
// Takes a number as input and returns the number of digits.
function countingDigits(number){
  const numberToString = String(number);
  let count = 0;
  for(let i of numberToString){
    if(+i){ // truthy = just numbers
      count++;
    } else {
      if( i==="0" ) count++; //for solve the zero problem
    }  
  }
  return count;
}

// Takes a number as input and returns the sum of digits.
function sumDigits(number){
  const numberToString = String(number);
  let sum = 0;
  for(let i of numberToString){
    if(+i){ // truthy = just numbers
      sum += +i;
    }  
  }
  return sum;
}

// Takes a number as input and returns the number of digits By regEx (Regular expression)
function countingDigitsByRegEx(number){
  return (String(number)).replace(/[^0-9]/g,"").length; // Remove anything but numbers  
}

// Takes a number as input and returns the sum of digits By regEx (Regular expression)
function sumDigitsByRegEx(number){
  const num = (String(number)).replace(/[^0-9]/g,"");
  let sum = 0;
  for(let i of num) sum += +i;      
  return sum;
}


console.log(`countingDigits(${number}) = `,countingDigits(number));
console.log(`sumDigits(${number}) = `,sumDigits(number));
console.log(`countingDigitsByRegEx(${number}) = `,countingDigitsByRegEx(number));
console.log(`sumDigitsByRegEx(${number}) = `,sumDigitsByRegEx(number));