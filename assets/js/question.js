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
function bookChosen(){
    let age = document.getElementById("inpAge");
    age = age.value;
    let bkChosen = document.getElementById("bookChosen");
    let bkTxt ;
    let isRange = true;        
    if(Number(age)){
        age < 10 ? bkTxt="شنگول و منگول":
            age >= 10 && age < 20  ? bkTxt="چه کسی پنیر مرا دزدید":
                age >= 20 && age < 30  ? bkTxt="باشگاه 5 صبحی ها ":
                    age >= 30 && age < 80  ? bkTxt="معجزه سپاسگزاری":
                        isRange=false;

        (isRange) ? bkChosen.textContent="کتاب ( " + bkTxt + " ) مناسب شما می باشد" :
                    bkChosen.textContent="کتاب مناسبی برای شما در دسترس نمی باشد";
    }
    else{
        bkChosen.textContent="لطفا سن خودتان را به عدد و بدون حروف وارد نمایید";
    }
}