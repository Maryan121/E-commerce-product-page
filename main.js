let nav = document.querySelector('nav');
let menuIcon = document.getElementById('menuIcon');
let closeIcon = document.getElementById('closeIcon');
let cartIcon = document.getElementById('cartIcon');
let basket = document.querySelector('.basket');
let body = document.querySelector('body');



menuIcon.addEventListener('click',openMenu);
closeIcon.addEventListener('click',closeMenu);
cartIcon.addEventListener('click',cart);

function openMenu(){
    nav.style.display = 'block';
    menuIcon.style.display = 'none';
}

function closeMenu(){
    nav.style.display = 'none';
    menuIcon.style.display = 'flex';
}

function cart(){
    if(basket.style.display !== 'none'){
        basket.style.display = 'none';
    }
    else{
        basket.style.display = 'flex';

    }
}


// image slider
let previous = document.querySelector('#previous');
let next = document.getElementById('next');
let heroImg = document.getElementById('heroImg');
    
let images = ['images/image-product-1.jpg','images/image-product-2.jpg','images/image-product-3.jpg','images/image-product-4.jpg'];


let i=0;
next.addEventListener('click',function(){
    if(i<images.length){
      heroImg.src = images[i];
      i++; 
    }
    else if(i>images.length){
        heroImg.src = images[i];
        i++;
    }
   
  
    }) 
        
let x=0;
previous.addEventListener('click',function(){
    if(x<images.length){
        heroImg.src = images[x];
        x++;
    }
    else if(x>images.length){
        heroImg.src = images[x];
        x++;
    }
    
})
   
 
let adToCartBtn = document.getElementById('adToCartBtn');
let price = document.getElementById('price');
let timesAmount = document.getElementById('timesAmount');
let minus = document.getElementById('minus');


let plus = document.getElementById('plus');
// 

// increamenting the amount if plus is clicked and decrementing the amount if minus is clicked
let amount = 0;
plus.addEventListener('click', function(){
    amount++
    timesAmount.innerHTML = amount;
}) 
minus.addEventListener('click',function(){
    if(amount<1){
        amount = 0;
    }
    else{
        amount--
        timesAmount.innerHTML = amount;  
    }
    
})

//inside the basket
let total = document.querySelector('.total');
let times = document.getElementById('times');
let thebaskterI = document.getElementById('thebaskterI');
let emptyBasket = document.querySelector('.empty');
let deleteIcon = document.getElementById('delete');
let checkOutBtn = document.getElementById('checkOutBtn');
let quantity = document.getElementById('quantity');
//if the user click and chose product he will see it inside the basket otherwise his basket will be empty
    function calculations(){
      if(timesAmount.innerHTML == 0){
        emptyBasket.style.display = 'flex';
        emptyBasket.classList.add('centering');
        thebaskterI.style.display = 'none';
      }
      else{
        emptyBasket.style.display = 'none';
        thebaskterI.style.display = 'flex';
        times.innerHTML = timesAmount.innerHTML;
        quantity.style.display = 'flex';
        quantity.innerHTML = timesAmount.innerHTML;
        total.innerHTML = `
        $${Number(price.innerHTML) * Number(timesAmount.innerHTML)}
        `;
      }
    }
adToCartBtn.addEventListener('click',calculations);

// giving the user a choice to make his basket empty if he/she does't need the product by clicking the trash icon
deleteIcon.addEventListener('click',()=>{
    thebaskterI.style.display = 'none';
    emptyBasket.style.display = 'flex';
    emptyBasket.classList.add('centering');
    quantity.innerHTML = 0;
    quantity.style.display = 'none';
})

//making the cart basket disappear when the checkoutbtn is clicked
checkOutBtn.addEventListener('click',function(){
    document.querySelector('.basket').style.display = 'none';
})

    
//desktop section image silding on onmouseover state
let img1 = document.getElementById('image1');
let img2 = document.getElementById('image2');
let img3 = document.getElementById('image3');
let img4 = document.getElementById('image4');

img1.addEventListener('click',function(){
    heroImg.src = 'images/image-product-1.jpg';
    img1.classList.add('current');
    img2.classList.remove('current');
    img3.classList.remove('current');
    img4.classList.remove('current');
})

img2.addEventListener('click',function(){
    heroImg.src = 'images/image-product-2.jpg';
    img1.classList.remove('current');
    img2.classList.add('current');
    img3.classList.remove('current');
    img4.classList.remove('current');
})

img3.addEventListener('click',function(){
    heroImg.src = 'images/image-product-3.jpg';
    img1.classList.remove('current');
    img2.classList.remove('current');
    img3.classList.add('current');
    img4.classList.remove('current');
})

img4.addEventListener('click',function(){
    heroImg.src = 'images/image-product-4.jpg';
    img1.classList.remove('current');
    img2.classList.remove('current');
    img3.classList.remove('current');
    img4.classList.add('current');
})
