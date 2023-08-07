"use strict";

const number = "121.1";

const obj = {
    width : 200,
    height : 400,
    title : "Desk"};

const array2D = [[1,10],
                [2,20],
                [3,30]];

// use let instead const to implement reverse method of array and modify source array
let array10 = [2,5,232,432,76,232,56,232,98,231];


// ---------------------------------------Functions Declaration------------------------------------------
//Takes a number as input and returns the number of digits.
function countingDigits(number){
    if (+number) {
      const numberToString = String(number);
      return numberToString.indexOf(".") === -1 ? numberToString.length : numberToString.length - 1;
    } else {
      return "Not a Number";
    }   
}

//Takes a number as input and returns the sum of digits.
function sumDigits(number){
    if(+number){
        const numberToString = String(number);
        let sum = 0;
        for (let i=0;i<numberToString.length;i++){            
            if(number[i] === '.') continue;
            sum += +number[i];            
        }
        return sum;
    } else {
        return "Not a Number";
    }
}

//Takes an object as input and multiplies the numeric values by 2.
function multiplyNumeric(obj){
    for(let i in obj){
        if (+obj[i]) {
            obj[i] *= 2;
        }        
    }
    return obj;
}

//Print each member of a 2D array
function printArray(array2D){
    for(let array of array2D){
        for(let item of array){
            console.log(item);
        }
    }
}

//Find the biggest number of a array
function biggestNumberArray(array){
    let biggestNumber = 0;
    for(let i of array){
        if(biggestNumber > i) continue ;
        biggestNumber = i;
    }
    return biggestNumber;    
}

//Implement the reverse method of array
function reverseArray(array){
    let reverse = [];
    for(let i = array.length-1 ; i >= 0 ; i--){
        reverse.push(array[i]);
    }    
    return reverse;
}

//an array of numbers and a number as inputs, and then
//remove every repetition of that number in the array.
function removeRepetitionArray(array,repetition){
    for(let i in array){        
        if(array[i] === repetition) array.splice(i,1);
    }
    return array;
}


// ---------------------------------------Result------------------------------------------

console.groupCollapsed("Digits");
console.log("The number value is = " + number);

console.log("Count = " + countingDigits(number));

console.log("Sum = " + sumDigits(number));
console.groupEnd("Digits");

console.groupCollapsed("multiplies");
console.log("The input Object is = ");
console.log(obj);
console.log("Result after execute the multiplyNumeric(obj) function = ");
console.log(multiplyNumeric(obj));
console.groupEnd("multiplies");

console.groupCollapsed("Show a 2D Array");
console.log(array2D);
printArray(array2D);
console.groupEnd("Show a 2D Array");

//Calculate the biggest number from 4 ways
console.groupCollapsed("Biggest");
console.log("Solution 1 :")
array10.sort((a,b) => b-a);
console.log(array10[0]);
console.log("Solution 2 :")
console.log(`The Biggest Number of array is = ${biggestNumberArray(array10)}`);
console.log("Solution 3 :")
array10.sort((a,b) => a-b);
console.log(array10[array10.length-1]);
console.log("Solution 4 :")
console.log(Math.max.apply(null,array10));
console.groupEnd("Biggest");

console.groupCollapsed("Reverse");
console.log(array10);
array10 = reverseArray(array10);
console.log(array10);
console.groupEnd("Reverse");

console.groupCollapsed("Repetition");
console.log(array10);
removeRepetitionArray(array10,232);
console.log(array10);
console.groupEnd("Repetition");