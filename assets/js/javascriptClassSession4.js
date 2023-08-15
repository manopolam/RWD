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
  return (String(number)).replace(/\D/g,"").length; // Remove anything but numbers  replace(/[^0-9]/g,"")
}

// Takes a number as input and returns the sum of digits By regEx (Regular expression)
function sumDigitsByRegEx(number){
  const num = (String(number)).replace(/\D/g,"");  // replace(/[^0-9]/g,"")
  let sum = 0;
  for(let i of num) sum += +i;      
  return sum;
}

// Print odd numbers
function printOddNumbers(a,b) {
  let arrayNumber = [];
  for(let i = a; i < b ; i++) arrayNumber[i] = i;
  let odd = arrayNumber.filter(value => (value%2));
  return odd;
}

// Take an array and return just truthy (not falsy)
function truthy1(array){    
  return array.filter(value => value); 
}

// Take an array and return just truthy (not falsy)
function truthy2(array){
  let truthy = [];
  for(let i of array){    
     if(i) truthy.push(i);
  }
  return truthy;
}

// Take an array and return just truthy (not falsy)
function truthy3(array){    
  return array.reduce((accumulator,current) => {    
    if(current){
      return[...accumulator,current];
    } else {return accumulator;}
  },[]);
}

// Take an array and return just truthy (not falsy)
function truthy4(array){
  let truthy = [];
  array.forEach(value => {
    if(value) truthy.push(value);
  });
  return truthy;
}

console.log(`countingDigits(${number}) = `,countingDigits(number));
console.log(`sumDigits(${number}) = `,sumDigits(number));
console.log(`countingDigitsByRegEx(${number}) = `,countingDigitsByRegEx(number));
console.log(`sumDigitsByRegEx(${number}) = `,sumDigitsByRegEx(number));
console.log("Odd Number = ",printOddNumbers(1,100));
const array = ['a',0,-0,0n,null,"",'',``,NaN,false,true,undefined,Infinity,"false","true","0","1",1];
console.log("The Array Source is = ",array);
console.log("The Truthy1 Result is = ",truthy1(array));
console.log("The Truthy2 Result is = ",truthy2(array));
console.log("The Truthy3 Result is = ",truthy3(array));
console.log("The Truthy4 Result is = ",truthy4(array));