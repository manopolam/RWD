"use strict";

let a1 = '1-appendChild() return child object but append() return undefined.\n';
    a1 +='2-append() allows you to also append string objects but appendChild() only accepts Node objects.\n';
    a1 +='3-appendChild() can append several nodes and strings but appendChild() can only append one node.\n';
let elementChosen;
function showAnswer(str,element,time){    
    elementChosen = document.getElementById(element);
    let i=-1;
    elementChosen.innerHTML="";    
    (function charBychar(){
        if(++i < str.length){
            elementChosen.innerHTML=elementChosen.innerHTML + str.charAt(i);
            setTimeout(charBychar,time);
        }
    })();
}
