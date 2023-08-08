"use strict";

const number = "121.1";

const obj = {
    width : 200,
    height : 400,
    title : "Desk"};

const array2D = [[1,10],
                [2,20],
                [3,30]];

const array10 = [2,5,232,432,76,232,56,232,98,231];

// ---------------------------------------Functions Declaration------------------------------------------
// Takes a number as input and returns the number of digits.
function countingDigits(number){
    if (+number) {
      const numberToString = String(number);
      return numberToString.indexOf(".") === -1 ? numberToString.length : numberToString.length - 1;
    } else {
      return "Not a Number";
    }   
}

// Takes a number as input and returns the sum of digits.
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

// Takes an object as input and multiplies the numeric values by 2.
function multiplyNumeric(obj){
    for(let i in obj){
        if (+obj[i]) {
            obj[i] *= 2;
        }        
    }
    return obj;
}

// Print each member of a 2D array
function printArray(array2D){
    for(let array of array2D){
        for(let item of array){
            console.log(item);
        }
    }
}

// Find the biggest number of a array
function biggestNumberArray(array){
    let biggestNumber = 0;
    for(let i of array){
        if(biggestNumber > i) continue ;
        biggestNumber = i;
    }
    return biggestNumber;    
}

// Implement the reverse method of array
function reverseArray1(array){
    let reverse = [];
    for(let i = array.length-1 ; i >= 0 ; i--){
        reverse.push(array[i]);
    }    
    return reverse;
}

// Implement the reverse method of array, exactly like array.reverse()
function reverseArray2(array){
    const arrayLenght = array.length;
    for(let i = arrayLenght-1 ; i >= 0 ; i--){
        array.push(array[i]); //push new item
        array.splice(i,1); //remove old item
    }
    return array;
}


//-----------an array of numbers and a number as inputs, and then remove every repetition of that number in the array-----------

// Problem: 
// if there is more than 1 number and
// they are next to each other, will miss some numbers
// Because we use for(let i in array) and array.forEach((item,index)
function removeRepetitionArray1(array,repetition){
    for(let i in array){        
        if(array[i] === repetition) array.splice(i,1);
    }
    return array;
}
function removeRepetitionArray2(array,repetition){
    array.forEach((item,index) =>{
        if(item === repetition) array.splice(index,1);
    })
    return array;
}

// This function works correctly
function removeRepetitionArray(array,repetition){
    let i = array.indexOf(repetition);
    while(i != -1){
        array.splice(i,1);
        i = array.indexOf(repetition);
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

console.groupCollapsed("Biggest");
console.warn("Solution 1 : ascending")
array10.sort((a,b) => b-a);
console.log(array10[0]);
console.warn("Solution 2 : function")
console.log(`The Biggest Number of array is = ${biggestNumberArray(array10)}`);
console.warn("Solution 3 : descending")
array10.sort((a,b) => a-b);
console.log(array10[array10.length-1]);
console.warn("Solution 4 : Math.max.apply")
console.log(Math.max.apply(null,array10));
console.groupEnd("Biggest");

console.groupCollapsed("Reverse");
console.warn("Solution 1 : without change source Array")
console.log(array10);
console.log(reverseArray1(array10));
console.log(array10);
console.warn("Solution 2 : exactly like array.reverse()")
console.log(array10);
reverseArray2(array10);
console.log(array10);
console.groupEnd("Reverse");

console.groupCollapsed("Repetition");
console.log(array10);
// removeRepetitionArray1(array10,232);
// removeRepetitionArray2(array10,232);
removeRepetitionArray(array10,232);
console.log(array10);
console.groupEnd("Repetition");