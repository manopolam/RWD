"use strict";

let a1 = '1-appendChild() return child object but append() return undefined.\n';
    a1 +='2-appendChild() return child object but append() return undefined.\n';
    a1 +='3-appendChild() return child object but append() return undefined.\n';
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
