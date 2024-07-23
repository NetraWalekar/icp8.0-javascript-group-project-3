

function add_cart(num){
    const res = document.getElementById("ac");
    if (res) { // Ensure the element exists
        res.style.visibility = 'visible';
        console.log("Item number " + num + " added to cart."); 
        setTimeout(() => {
        document.getElementById('ac').style.display = 'none';
        }, 2000);
        setTimeout(function(){
          location.reload();
         }, 2000);
       // Example use of num
    } else {
        console.error("Element with id 'ac' not found.");
    }
}

function plusminus(action)
   {
      const quantitytext =document.getElementById("quantity-text")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus1(action)
   {
      const quantitytext =document.getElementById("quantity-text1")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus2(action)
   {
      const quantitytext =document.getElementById("quantity-text2")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus3(action)
   {
      const quantitytext =document.getElementById("quantity-text3")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus4(action)
   {
      const quantitytext =document.getElementById("quantity-text4")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus5(action)
   {
      const quantitytext =document.getElementById("quantity-text5")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus6(action)
   {
      const quantitytext =document.getElementById("quantity-text6")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus7(action)
   {
      const quantitytext =document.getElementById("quantity-text7")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus8(action)
   {
      const quantitytext =document.getElementById("quantity-text8")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus9(action)
   {
      const quantitytext =document.getElementById("quantity-text9")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function textChange(){
      const textElement=document.getElementById("btn")
      textElement.innerText="Added";

    }

function textChange1(){
      const textElement=document.getElementById("btn1")
      textElement.innerText="Added";

    }

function textChange2(){
      const textElement=document.getElementById("btn2")
      textElement.innerText="Added";

    }

function textChange3(){
      const textElement=document.getElementById("btn3")
      textElement.innerText="Added";

    }

function textChange4(){
      const textElement=document.getElementById("btn4")
      textElement.innerText="Added";

    }

function textChange5(){
      const textElement=document.getElementById("btn5")
      textElement.innerText="Added";

    }

function textChange6(){
      const textElement=document.getElementById("btn6")
      textElement.innerText="Added";

    }

function textChange7(){
      const textElement=document.getElementById("btn7")
      textElement.innerText="Added";

    }

function textChange8(){
      const textElement=document.getElementById("btn8")
      textElement.innerText="Added";

    }

function textChange9(){
      const textElement=document.getElementById("btn9")
      textElement.innerText="Added";

    }




function plusminus01(action)
   {
      const quantitytext =document.getElementById("quantity-text")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus02(action)
   {
      const quantitytext =document.getElementById("quantity-text1")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus03(action)
   {
      const quantitytext =document.getElementById("quantity-text2")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus04(action)
   {
      const quantitytext =document.getElementById("quantity-text3")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   function plusminus05(action)
   {
      const quantitytext =document.getElementById("quantity-text4")
      let quantity = parseInt(quantitytext.innerText);
      if(quantity==1 && action=='decrement')
      {
       alert('Quantity cannot be less than 1')
       return
      }
      else if (quantity==5 && action =='increment')
      {
        alert('Quantity cannot be greater then 5')
        return
       }
      
      if (action == 'increment'){
       quantitytext.innerText =++quantity;
      }
      else{
       quantitytext.innerText =--quantity;
      }
      
   }

   
   function textChange01(){
      const textElement=document.getElementById("btn01")
      textElement.innerText="Added";

    }

function textChange02(){
      const textElement=document.getElementById("btn02")
      textElement.innerText="Added";

    }

function textChange03(){
      const textElement=document.getElementById("btn03")
      textElement.innerText="Added";

    }

function textChange04(){
      const textElement=document.getElementById("btn04")
      textElement.innerText="Added";

    }

function textChange05(){
      const textElement=document.getElementById("btn05")
      textElement.innerText="Added";

    }


function add_cart1(num){
   const res = document.getElementById("ac");
   if (res) { // Ensure the element exists
       res.style.visibility = 'visible';
       console.log("Item number " + num + " added to cart."); 
       setTimeout(() => {
       document.getElementById('ac').style.display = 'none';
       }, 2000);
       setTimeout(function(){
         location.reload();
        }, 2000);
      // Example use of num
   } else {
       console.error("Element with id 'ac' not found.");
   }
}