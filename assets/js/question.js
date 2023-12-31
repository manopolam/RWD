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

function bookSelect() {
    const ageInput = document.getElementById("ageInput");    
    const age = ageInput.value;
    const bookPrompt = document.getElementById("bookPrompt");
    let result="کتاب مناسب سن شما، یافت نشد";    
    let message;
    if (+age) {
      if (age < 10) {
        result = "شنگول و منگول";
      } else if (age >= 10 && age < 20) {
        result = "چه کسی پنیر مرا دزدید";
      } else if (age >= 20 && age < 30) {
        result = "باشگاه 5 صبح ";
      } else if (age >= 30 && age < 80) {
        result = "معجزه سپاسگزاری";
      }
      age > 80
        ? (message = result)
        : (message = `برای سن ${age} سال ، کتاب ${result} مناسب می باشد`);
      bookPrompt.textContent = message;
    } else {
      ageInput.value = "";
      bookPrompt.textContent =
        "لطفا سن خودتان را به عدد و بدون حروف وارد نمایید";
    }
}

// function bookSelect_ternary(){
//     const ageInput = document.getElementById("ageInput");    
//     const age = ageInput.value;
//     const bookPrompt = document.getElementById("bookPrompt");
//     let bookName ;
//     let isRange = true;    
//     if(+(age)){
//         age < 10 ? bookName="شنگول و منگول":
//             age >= 10 && age < 20  ? bookName="چه کسی پنیر مرا دزدید":
//                 age >= 20 && age < 30  ? bookName="باشگاه 5 صبح ":
//                     age >= 30 && age < 80  ? bookName="معجزه سپاسگزاری":
//                         isRange=false;

//         (isRange) ? bookPrompt.textContent="کتاب ( " + bookName + " ) مناسب شما می باشد" :
//                     bookPrompt.textContent="کتاب مناسبی برای شما در دسترس نمی باشد";
//     }
//     else{
//         bookPrompt.textContent="لطفا سن خودتان را به عدد و بدون حروف وارد نمایید";
//     }
// }
// ------------------------------ Exercise2 --------------------------------------

function isOdd(n){    
    return(!!(n%2))
}

function displayOddNumbers() {
    const result  = document.getElementById("resultOdd");
    const userInput = document.getElementById("userInput");             
    result.textContent = "";
    if (!isOdd(userInput.value)) {        
        result.textContent = "You Must enter odd number, Please try again";
        userInput.value = "" ;        
    } else if(userInput.value > 100) {
        result.textContent = 
            "Your valid range is between 0 to 100, Please try again";
        userInput.value = "" ;
    } else {
        for (let i = 1; i < 100; i++) {
            if (!isOdd(i) || +(userInput.value) === i) continue;
            result.textContent += i + " - ";
        }
    }
}

// ------------------------------ Exercise3 --------------------------------------

function multiplication() {
    //Higher Order Function
    let multiply = function (number1) {
        return function(number2){
            return number2 * number1;
        }
    }
    if(confirm("Are you prefer input one number to multiply by 6?")){
        const result = document.getElementById("Multiplication");
        const multiplyBy6 = multiply(6); //There is a function inside multiplyBy6 
        const num1 = prompt("Enter number to multiply by 6 ?");
        result.textContent = "The multiplyBy6 is equal to: " + multiplyBy6(num1);
    } else {
        const num1 = prompt("Enter First Number?");
        const num2 = prompt("Enter Second Number?");    
        const result = document.getElementById("Multiplication");
        result.textContent = "The multiplication answer is equal to: " + multiply(num1)(num2);
    }
}