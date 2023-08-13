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
    if (isAscendingSort) isAscendingSort=false; //ascending or descending order
    else isAscendingSort=true;    

    let rows,i;
    let isSwapping, isSwapPlaces;
    let price1,price2;
    const table = document.getElementById("list");
    isSwapping = true;    
    while (isSwapping) {       
      isSwapping = false;
      rows = table.rows;      
      for (i = 1; i < (rows.length - 1); i++) { // i=1 to except the table headers        
        isSwapPlaces = false;        
        price1 = rows[i].getElementsByTagName("td")[4];
        price2 = rows[i + 1].getElementsByTagName("td")[4];        
        if(isAscendingSort){
            if (price1.innerHTML.toLowerCase() > price2.innerHTML.toLowerCase()) {                
                isSwapPlaces = true;
                break; // break for loop to swapping price1 and price2                       
            }
        }
        else {
            if (price1.innerHTML.toLowerCase() < price2.innerHTML.toLowerCase()) {                
                isSwapPlaces = true;
                break; // break for loop to swapping price1 and price2
            }        
        }
      }
      if (isSwapPlaces) {        
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        isSwapping = true; 
      }
    }
  }

  showCars(cars);