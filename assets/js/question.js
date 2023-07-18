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
function bookSelect(){
    const ageInput = document.getElementById("ageInput");    
    const age = ageInput.value;
    const bookPrompt = document.getElementById("bookPrompt");
    let bookName ;
    let isRange = true;    
    if(+(age)){
        age < 10 ? bookName="شنگول و منگول":
            age >= 10 && age < 20  ? bookName="چه کسی پنیر مرا دزدید":
                age >= 20 && age < 30  ? bookName="باشگاه 5 صبحی ها ":
                    age >= 30 && age < 80  ? bookName="معجزه سپاسگزاری":
                        isRange=false;

        (isRange) ? bookPrompt.textContent="کتاب ( " + bookName + " ) مناسب شما می باشد" :
                    bookPrompt.textContent="کتاب مناسبی برای شما در دسترس نمی باشد";
    }
    else{
        bookPrompt.textContent="لطفا سن خودتان را به عدد و بدون حروف وارد نمایید";
    }
}