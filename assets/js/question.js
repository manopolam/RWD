"use strict";
function load(){    
    let exam = document.getElementsByClassName("question");    
    for (let q of exam){    
        q.addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            let body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        });
    }
}

// ------------------------------ Exercise1 --------------------------------------
function bookSelect_Switch(){
    const ageInput = document.getElementById("ageInput");    
    const age = ageInput.value;
    const bookPrompt = document.getElementById("bookPrompt");
    let bookName ;
    let isRange = true;

    if(+(age)){
        switch(age){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:            
                bookName="شنگول و منگول";
                break;
            case 10:
            case 11:
            case 19:
                bookName="چه کسی پنیر مرا دزدید";
                break;
            case 20:
            case 29:
                bookName="باشگاه 5 صبح ";
                break;
            case 30:
            case 79:
                bookName="معجزه سپاسگزاری";
                break;
            default:
                isRange=false;
        }
        
        if(isRange){
            ageInput.value="";
            bookPrompt.textContent=`برای  ${age} ` +
            `سال، کتاب " ${bookName} " مناسب می باشد` ;
        }
        else{
            bookPrompt.textContent="کتاب مناسب سن شما، یافت نشد";
        }        
    }
    else{
        ageInput.value="";
        bookPrompt.textContent="لطفا سن خودتان را به عدد و بدون حروف وارد نمایید";
    }
}

function bookSelect_IfElse(){
    const ageInput = document.getElementById("ageInput");    
    const age = ageInput.value;
    const bookPrompt = document.getElementById("bookPrompt");
    let bookName ;
    let isRange = true;    
    if(+(age)){
        if(age < 10){
            bookName="شنگول و منگول";
        }
        else if(age >= 10 && age < 20){
            bookName="چه کسی پنیر مرا دزدید";
        }
        else if(age >= 20 && age < 30){
            bookName="باشگاه 5 صبح ";
        }
        else if(age >= 30 && age < 80){
            bookName="معجزه سپاسگزاری";
        }
        else{
            isRange=false;
        }
        if(isRange){
            ageInput.value="";
            bookPrompt.textContent=`برای  ${age} ` +
            `سال، کتاب " ${bookName} " مناسب می باشد` ;
        }
        else{
            bookPrompt.textContent="کتاب مناسب سن شما، یافت نشد";
        }        
    }
    else{
        ageInput.value="";
        bookPrompt.textContent="لطفا سن خودتان را به عدد و بدون حروف وارد نمایید";
    }
}

function bookSelect_ternary(){
    const ageInput = document.getElementById("ageInput");    
    const age = ageInput.value;
    const bookPrompt = document.getElementById("bookPrompt");
    let bookName ;
    let isRange = true;    
    if(+(age)){
        age < 10 ? bookName="شنگول و منگول":
            age >= 10 && age < 20  ? bookName="چه کسی پنیر مرا دزدید":
                age >= 20 && age < 30  ? bookName="باشگاه 5 صبح ":
                    age >= 30 && age < 80  ? bookName="معجزه سپاسگزاری":
                        isRange=false;

        (isRange) ? bookPrompt.textContent="کتاب ( " + bookName + " ) مناسب شما می باشد" :
                    bookPrompt.textContent="کتاب مناسبی برای شما در دسترس نمی باشد";
    }
    else{
        bookPrompt.textContent="لطفا سن خودتان را به عدد و بدون حروف وارد نمایید";
    }
}
// ------------------------------ Exercise2 --------------------------------------

function isOdd(n){    
    return((n%2)==1)
}

function displayOddNumbers(){
    const oddRange  = document.getElementById("oddRange");
    const userInput = document.getElementById("userInput");             
    oddRange.textContent = "";
    if (!isOdd(userInput.value)){        
        oddRange.textContent = "You Must enter odd number, Please try again";
        userInput.value = "" ;
    }
    else if(userInput.value > 100){
        oddRange.textContent = "Your valid range is between 0 to 100, Please try again";
        userInput.value = "" ;
    }
    else{
        for(let i=1;i<100;i++){
            if(isOdd(i)){
                if(userInput.value != i){
                    oddRange.textContent += i + " - ";
                }
            }
        }
    }
}