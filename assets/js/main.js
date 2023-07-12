let destroy_chk = 0;
let destroy_text = true; 
let elem;
let nElem;
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
        return;        
      }
      else{
        document.location.reload();
      }      
    }    
    elem = document.querySelector("main");
    let elemChild = elem.firstElementChild;        
    elemChild.remove();
    let elemBtn = document.getElementById('angryBtn');
    elemBtn.style="color:red;";
    if(destroy_text){
      nElem = document.createElement('h4');
      nElem.className='h4 white';
      nElem.id='destroyMakeIt';
      destroy_text=false;
    }    
    destroy_chk += 1;
    nElem.textContent = `You Destroyed it , ${destroy_chk} times.`; 
    nParent = document.getElementById('destroySection');  
    nParent.appendChild(nElem) 
  }
}
catch(err){    
  console.log(err);
}
