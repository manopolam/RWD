try{
  function hamburger() {
      const x = document.getElementById("hamburger");    
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
  }
}
catch(err){  
  console.log(err);
}