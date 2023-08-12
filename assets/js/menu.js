const menuItem = [
  {id:"web" , href:"index.html" , text:"Home"},
  {id:"web" , href:"question.html" , text:"Question"},
  {id:"web" , href:"board.html" , text:"Board"},
  {id:"jsClass" , href:"devTools.html" , text:"DevTools"},
  {id:"jsClass" , href:"javascriptClass.html" , text:"jsClass"},  
  {id:"jsClass" , href:"search.html" , text:"Search"},
]

function hamburger() {
  const x = document.getElementById("hamburger");    
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function menu(menuItem,id){  
  let menuSelect = menuItem.filter(item => {
            if(item.id === id) return item;
  });
  let menuParent = document.getElementById("menu");    
  for (let index in menuSelect){    
    const menuLi = document.createElement('li');
    const menuA = document.createElement('a');
    menuA.className='link';
    menuA.setAttribute("href",menuSelect[index].href);    
    menuA.textContent = menuSelect[index].text;    
    menuLi.appendChild(menuA);
    menuParent.appendChild(menuLi);
  }
  menuParent = document.getElementById("hamburger");    
  for (let index in menuSelect){    
    const menuLi = document.createElement('li');
    const menuA = document.createElement('a');
    menuA.className='mobile';
    menuA.setAttribute("href",menuSelect[index].href);    
    menuA.textContent = menuSelect[index].text;    
    menuLi.appendChild(menuA);
    menuParent.appendChild(menuLi);
  }  
}

// menu(menuItem,"web");
menu(menuItem,"jsClass");