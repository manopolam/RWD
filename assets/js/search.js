"use strict";
let isAscendingSort = true;
const cars = [
    {company : "Toyota"  , model : "Corolla" , color : "Blue"   , capacity : "4" , price : "22000$" , year : "2018" , gear : "Automatic" , fuel : "Gas"},
    {company : "Benz"    , model : "S500"    , color : "Black"  , capacity : "4" , price : "35000$" , year : "2023" , gear : "Automatic" , fuel : "Hybrid"},
    {company : "Ford"    , model : "Mustang" , color : "Silver" , capacity : "2" , price : "45000$" , year : "2002" , gear : "manual"    , fuel : "Gas"},
    {company : "Ferrari" , model : "Enzo"    , color : "Yellow" , capacity : "2" , price : "80000$" , year : "2011" , gear : "Automatic" , fuel : "Gas"},
    {company : "Fiat"    , model : "Panda"   , color : "White"  , capacity : "2" , price : "12000$" , year : "2016" , gear : "Automatic" , fuel : "Gas"},
    {company : "BMW"     , model : "X4"      , color : "Black"  , capacity : "4" , price : "32000$" , year : "2013" , gear : "Automatic" , fuel : "Gas"},
    {company : "Ford"    , model : "Shelby"  , color : "Red"    , capacity : "2" , price : "57000$" , year : "1970" , gear : "Automatic" , fuel : "Gas"},    
    {company : "BMW"     , model : "X6"      , color : "Black"  , capacity : "6" , price : "33000$" , year : "2016" , gear : "Automatic" , fuel : "Gas"},
    {company : "Honda"   , model : "Civic"   , color : "White"  , capacity : "4" , price : "27000$" , year : "2022" , gear : "Automatic" , fuel : "Gas"},
    {company : "BMW"     , model : "760Li"   , color : "Black"  , capacity : "4" , price : "41000$" , year : "2023" , gear : "Automatic" , fuel : "Hybrid"},
]

function showCars(cars){    
  let listParent = document.getElementById("list");    
  let td , tr; // table tags
  for (let car of cars){    
    tr = document.createElement('tr');    
    for(let property in car){
      td = document.createElement('td');
      td.textContent = car[property];
      tr.appendChild(td);
    }
    listParent.appendChild(tr);
  }
}

function search() {
    const searchItem = document.getElementById("searchbar").value.toLowerCase();    
    const tableHeader = document.getElementById("tableHeader"); // keep Header of Table
    const table = document.getElementById("list"); 
    let tableRow , tr ;    
    
    for (let i = 0 ; i < table.rows.length ; i++) {
        tableRow = table.rows[i].textContent.toLowerCase(); // The data of a table row            
        tr = table.rows[i]; // tag of a table row
        if(!tableRow.includes(searchItem)){
          tr.style.display = "none"; // hide a table row           
        } else if (searchItem.length === 0){
          tr.style.display = "table-row"; // show a table row when the search is empty
        } else {
          tr.style.display = "table-row"; // show a table row when it's match
        }
    tableHeader.style.display = "table-row"; // keep Header of Table
    }
  }

  function sortPrice() {
    if(isAscendingSort) isAscendingSort=false;
    else isAscendingSort=true;    

    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("list");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[4];
        y = rows[i + 1].getElementsByTagName("TD")[4];
        //check if the two rows should switch place:
        if(isAscendingSort){    
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;            
                break;
            }
        }
        else {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;            
                break;
            }        
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  showCars(cars);