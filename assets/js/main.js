"use strict";
let destroy_chk = 0; //checking the number of click on Destroy item of Navigation Menu.
let destroy_text = true; //Change to False after click on Destroy item of Navigation Menu.
let elem;   //Contain of All Element of main tag.
let nElem;  //New Element add to HTML DOM after click on Destroy item of Navigation Menu.
let elemText; //The Exist Element that modify it after click on Destroy item of Navigation Menu.

function hamburger() {
    const x = document.getElementById("hamburger");    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
function destroy(){   
  if(destroy_chk > 2){
    if(confirm('you want more?')){
      elem.remove()
      console.log("everything gooooooooone!!!!");        
      nElem.textContent = "You Destroyed body Section.";        
      elemText.textContent = "You Destroyed body Section.";    
      return;        
    }
    else{
      document.location.reload();  //Refresh Page
    }      
  }    
  elem = document.querySelector("main");
  let elemChild = elem.firstElementChild;        
  elemChild.remove();
  let elemBtn1 = document.getElementById('angryBtn1');
  let elemBtn2 = document.getElementById('angryBtn2');
  elemText = document.getElementById('destroyText');
  elemBtn1.style="color:red;";
  elemBtn2.style="color:red;";
  elemText.style="color:red;";
  if(destroy_text){
    nElem = document.createElement('h4');
    nElem.className='h4';
    nElem.style="color:red;font-size:48px;";
    nElem.id='destroyMakeIt';
    destroy_text=false;
  }    
  destroy_chk += 1;
  nElem.textContent = `You Destroyed it , ${destroy_chk} times.`; 
  elemText.textContent = `You Destroyed it , ${destroy_chk} times.`; 
  nParent = document.getElementById('destroySection');  
  nParent.appendChild(nElem) 
}
