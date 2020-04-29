
let deci=false;
function calc10(){
    deci=1;
   
}
function calc5(){
    deci=2;
   
}



function amountCalculate(){
   
  if(deci==1){
   document.getElementById("amount").innerHTML=document.getElementById("quantity").value*document.getElementById("btn-10kg").value;
   
   document.getElementById("quantity").value=0;
  }
  else if(deci==2){
    document.getElementById("amount").innerHTML=document.getElementById("quantity").value*document.getElementById("btn-5kg").value;
    
    document.getElementById("quantity").value=0;
   }
  
}