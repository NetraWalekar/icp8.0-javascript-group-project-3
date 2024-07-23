function handleQuantityChange(action)
{
   const quantityElement =document.getElementById("quantity-text")
   let quantity = parseInt(quantityElement.innerText);
   if(quantity==1 && action=='dec')
   {
    alert('Quantity cannot be less than 1')
    return
   }
   else if (quantity==5 && action =='inc')
   {
     alert('Quantity cannot be greater then 5')
     return
    }
        
        if (action == 'inc'){
       quantityElement.innerText =++quantity;
       
        const priceElement=49
       const price=document.getElementById("p1")
       let newprice=priceElement*quantity
       price.innerText=parseInt(newprice)
       
       console.log(newprice)
     }
      else{
       quantityElement.innerText =--quantity;
       const priceElement=49
       const price=document.getElementById("p1")
       let newprice=priceElement*quantity
       price.innerText=parseInt(newprice)
       
       console.log(newprice)
     }

      }


function handleQuantityChange1(action)
{
   const quantityElement =document.getElementById("quantity-text1")
   let quantity = parseInt(quantityElement.innerText);
   if(quantity==1 && action=='dec')
   {
    alert('Quantity cannot be less than 1')
    return
   }
   else if (quantity==5 && action =='inc')
   {
     alert('Quantity cannot be greater then 5')
     return
    }
    if (action == 'inc'){
      quantityElement.innerText =++quantity;
      
       const priceElement=47
      const price=document.getElementById("p2")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
    }
     else{
      quantityElement.innerText =--quantity;
      const priceElement=47
      const price=document.getElementById("p2")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
    
     }
}

function handleQuantityChange2(action)
{
   const quantityElement =document.getElementById("quantity-text2")
   let quantity = parseInt(quantityElement.innerText);
   if(quantity==1 && action=='dec')
   {
    alert('Quantity cannot be less than 1')
    return
   }
   else if (quantity==5 && action =='inc')
   {
     alert('Quantity cannot be greater then 5')
     return
    }
    if (action == 'inc'){
      quantityElement.innerText =++quantity;
      
       const priceElement=49
      const price=document.getElementById("p3")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
    }
     else{
      quantityElement.innerText =--quantity;
      const priceElement=49
      const price=document.getElementById("p1")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      
      console.log(newprice)
    
     }
}

function handleQuantityChange3(action)
{
   const quantityElement =document.getElementById("quantity-text3")
   let quantity = parseInt(quantityElement.innerText);
   if(quantity==1 && action=='dec')
   {
    alert('Quantity cannot be less than 1')
    return
   }
   else if (quantity==5 && action =='inc')
   {
     alert('Quantity cannot be greater then 5')
     return
    }
    if (action == 'inc'){
      quantityElement.innerText =++quantity;
      
       const priceElement=20
      const price=document.getElementById("p4")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
    }
     else{
      quantityElement.innerText =--quantity;
      const priceElement=20
      const price=document.getElementById("p4")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
      
    
     }
}

function handleQuantityChange4(action)
{
   const quantityElement =document.getElementById("quantity-text4")
   let quantity = parseInt(quantityElement.innerText);
   if(quantity==1 && action=='dec')
   {
    alert('Quantity cannot be less than 1')
    return
   }
   else if (quantity==5 && action =='inc')
   {
     alert('Quantity cannot be greater then 5')
     return
    }
    if (action == 'inc'){
      quantityElement.innerText =++quantity;
      
       const priceElement=159
      const price=document.getElementById("p5")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
    }
     else{
      quantityElement.innerText =--quantity;
      const priceElement=159
      const price=document.getElementById("p5")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
    
     }
}
function handleQuantityChange5(action)
{
   const quantityElement =document.getElementById("quantity-text5")
   let quantity = parseInt(quantityElement.innerText);
   if(quantity==1 && action=='dec')
   {
    alert('Quantity cannot be less than 1')
    return
   }
   else if (quantity==5 && action =='inc')
   {
     alert('Quantity cannot be greater then 5')
     return
    }
    if (action == 'inc'){
      quantityElement.innerText =++quantity;
      
       const priceElement=105
      const price=document.getElementById("p6")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
    }
     else{
      quantityElement.innerText =--quantity;
      const priceElement=105
      const price=document.getElementById("p6")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
      
    
     }
}

function handleQuantityChange6(action)
{
   const quantityElement =document.getElementById("quantity-text6")
   let quantity = parseInt(quantityElement.innerText);
   if(quantity==1 && action=='dec')
   {
    alert('Quantity cannot be less than 1')
    return
   }
   else if (quantity==5 && action =='inc')
   {
     alert('Quantity cannot be greater then 5')
     return
    }
    if (action == 'inc'){
      quantityElement.innerText =++quantity;
      
       const priceElement=43
      const price=document.getElementById("p7")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
    }
     else{
      quantityElement.innerText =--quantity;
      const priceElement=43
      const price=document.getElementById("p7")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
     }
}

function handleQuantityChange7(action)
{
   const quantityElement =document.getElementById("quantity-text7")
   let quantity = parseInt(quantityElement.innerText);
   if(quantity==1 && action=='dec')
   {
    alert('Quantity cannot be less than 1')
    return
   }
   else if (quantity==5 && action =='inc')
   {
     alert('Quantity cannot be greater then 5')
     return
    }
    if (action == 'inc'){
      quantityElement.innerText =++quantity;
      
       const priceElement=99
      const price=document.getElementById("p8")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
    }
     else{
      quantityElement.innerText =--quantity;
      const priceElement=99
      const price=document.getElementById("p8")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
     }
}

function handleQuantityChange8(action)
{
   const quantityElement =document.getElementById("quantity-text8")
   let quantity = parseInt(quantityElement.innerText);
   if(quantity==1 && action=='dec')
   {
    alert('Quantity cannot be less than 1')
    return
   }
   else if (quantity==5 && action =='inc')
   {
     alert('Quantity cannot be greater then 5')
     return
    }
    if (action == 'inc'){
      quantityElement.innerText =++quantity;
      
       const priceElement=47
      const price=document.getElementById("p9")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
    }
     else{
      quantityElement.innerText =--quantity;
      const priceElement=47
      const price=document.getElementById("p9")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
     }
}

function handleQuantityChange9(action)
{
   const quantityElement =document.getElementById("quantity-text9")
   let quantity = parseInt(quantityElement.innerText);
   if(quantity==1 && action=='dec')
   {
    alert('Quantity cannot be less than 1')
    return
   }
   else if (quantity==5 && action =='inc')
   {
     alert('Quantity cannot be greater then 5')
     return
    }
    if (action == 'inc'){
      quantityElement.innerText =++quantity;
      
       const priceElement=107
      const price=document.getElementById("p10")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
    }
     else{
      quantityElement.innerText =--quantity;
      const priceElement=107
      const price=document.getElementById("p10")
      let newprice=priceElement*quantity
      price.innerText=parseInt(newprice)
      console.log(newprice)
     }
}

//function for changing text on button
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

function add_cart(num){
 const res = document.getElementById("display-msg");
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



    