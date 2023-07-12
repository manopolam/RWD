let destroy_chk = 0;
let destroy_text = true; 
let elem;
let nElem;
let elemText;
try{
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
        document.location.reload();
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
}
catch(err){    
  console.log(err);
}