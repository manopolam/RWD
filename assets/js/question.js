"use strict";
function load(){
    var faq = document.getElementsByClassName("question");
    var i;
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var body = this.nextElementSibling;
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
    if(Number(age)){
        age < 10 ? bkChosen.textContent="کتاب شنگول و منگول":
            age >= 10 && age < 20  ? bkChosen.textContent="چه کسی پنیر مرا دزدید":
                age >= 20 && age < 30  ? bkChosen.textContent="باشگاه 5 صبحی ها ":
                    age >= 30 && age < 80  ? bkChosen.textContent="معجزه سپاسگزاری":
                        bkChosen.textContent="کتابی مناسب شما نمی باشد";
    }
    else{
        bkChosen.textContent="لطفا سن خودتان را به عدد و بدون حروف وارد نمایید";
    }
}