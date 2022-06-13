//array of images
const focusImgArr=[
    './images/image-product-1.jpg', 
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
];
//product details
const product={
    "id":1234,
    "company":"sneakers",
    "model":"Fall Limited Edition Sneakers",
    "marked_price":250,
    "discount":0.50,
    "offer_price":125
}
//variable declaration
let lightboxIndex=0; 
let cartItemsArr=[];
var currentQuantity=0;

//grabbing elements and adding event handlers to them
//right nav
let rightDiv=document.querySelector('.right-div');
const cartIcon=document.querySelector('.cart-icon');
cartIcon.addEventListener('click', ()=>{toggleCart()});


// product-photo-section
const thumbnailImgBoxes=document.querySelectorAll(".thumbnail-img-box");
const focusImage=document.querySelector('#focus-image-div img');
focusImage.addEventListener('click', ()=> showLightBox());

//product details section
let addToCartBtn=document.querySelector('.add-to-cart-btn');
addToCartBtn.addEventListener('click', addItemToCart);
let minusBtn=document.querySelector('.minus-btn');
minusBtn.addEventListener('click', decreaseQuantity);
let addBtn=document.querySelector('.plus-btn');
addBtn.addEventListener('click', increaseQuantity);

//lightbox
let previousBtn=document.querySelector('.previous-icon');
let nextBtn=document.querySelector('.next-icon');
let thumbnailImages=document.querySelectorAll('.thumbnail-img');
previousBtn.addEventListener('click', showPreviousImage);
nextBtn.addEventListener('click', showNextImage);
let closeBtn=document.querySelector('.close-span');
closeBtn.addEventListener('click', hideLightBox );
showCurrentQuantity(currentQuantity);

//mobile image slider
let leftArrow=document.querySelector('.left-arrow');
let rightArrow=document.querySelector('.right-arrow');
leftArrow.addEventListener('click', goToPreviousImage);
rightArrow.addEventListener('click', goToNextImage);

//mobile nav
const hamburger=document.querySelector('.hamburger');
const closeNavBtn=document.querySelector('.wrap-nav-btn');
closeNavBtn.addEventListener('click', hideMobileNav );
hamburger.addEventListener('click', showMobileNav);

//-----------Desktop devices : product photo section related code ----------------
//thumbnail of main page - add clicking 
thumbnailImgBoxes.forEach((box, index)=>{
    box.addEventListener('click', ()=>{showThumbnailImages(box, thumbnailImgBoxes, index)})
})

function showThumbnailImages(b, arr, i){ 
    console.log(b, arr, i);       
    if(b.classList.contains('active')){ return;}
    else {
        closeOtherActiveClass(arr);
        addActiveClassToClickedDiv(b, i);
    }
 }

function closeOtherActiveClass(arr){
    arr.forEach((item)=>{
        item.classList.remove('active');   
  })
}

function addActiveClassToClickedDiv(b, i){
    b.classList.add('active');
    ChangeImageInFocusDiv(i);
}

function ChangeImageInFocusDiv(index){
    let focusImageDiv=document.getElementById('focus-image-div');
    focusImageDiv.innerHTML=`<img src=${focusImgArr[index]} alt="focus-image" />`;
}

//-----------Desktop devices : product details section related code ----------------
//-------When plus minus icons are clicked in quantity box----------------------------
//-----------------functions--To increase or decrease quantity and show quantity-------
function showCurrentQuantity(cq){
    let currentQuantityBox=document.querySelector('.current-quantity');
    currentQuantityBox.innerText=cq;
}

function increaseQuantity(){
    currentQuantity++;
    showCurrentQuantity(currentQuantity);
}

function decreaseQuantity(){
    currentQuantity--;
    if(currentQuantity <= 0){
        currentQuantity=0;
    }
    showCurrentQuantity(currentQuantity);
}
/*add to cart button functions */

function addItemToCart(){
    product.reqd_quantity=currentQuantity;
    product.cart_items_value=parseInt(product.reqd_quantity) * product.offer_price;
    cartItemsArr.push(product);
    localStorage.setItem('cartItems',JSON.stringify(cartItemsArr));
}

//-------------------cart icon click related code -------------------

function toggleCart(){
    console.log("clicked");    
    if(rightDiv.classList.contains('cart-close')){
        rightDiv.classList.remove('cart-close');
        rightDiv.classList.add('cart-open');        
        createAndPopulateCart();
    } else if(rightDiv.classList.contains('cart-open')){
        rightDiv.classList.add('cart-close');
        rightDiv.classList.remove('cart-open');
        deleteCartDiv();                          
    } else {
        return;
    }    
}
/* function to populate cart - when cart icon is clicked */
function createAndPopulateCart(){    
    let rightDiv=document.querySelector('.right-div');
    let cartDiv=document.createElement('div');
    cartDiv.setAttribute('class', 'cart-items-div cart-show');
    let h5=document.createElement('h5');
    h5.innerText="Cart";
    cartDiv.appendChild(h5);
    rightDiv.appendChild(cartDiv);
    cartDiv=populateCart(cartDiv);
}
/* helper function : createAndPopulateCart */
function populateCart(cd){
    let cartItemsContainer=document.createElement('div');
    cartItemsContainer.setAttribute('class', 'cart-items-container');    
    let cartItems=JSON.parse(localStorage.getItem('cartItems'));        
        
    if(cartItems.length > 0){     
        cartItems.map(item=>{
            let div=document.createElement('div');
            div.setAttribute('class', 'cart-item');            
            div=populatDiv(item, div);              
            cartItemsContainer.appendChild(div);
        })
        let checkoutBtn=document.createElement('button');
        checkoutBtn.setAttribute('class', 'checkout-btn');
        checkoutBtn.innerText="checkout";
        cartItemsContainer.appendChild(checkoutBtn);
        
    } else {
       cartItemsContainer.innerHTML="<p>There is no item in cart</p>";
    }
    cd.appendChild(cartItemsContainer);
    return cd;    
}

/* helper function : createAndPopulateCart > populateCart */
function populatDiv(item, div){
    div.innerHTML=`
    <img  class="cart-image" src=${focusImgArr[0]} alt="product-image" />                      
    <div class="cart-product-details"><p> ${item.model}</p><p>$ ${item.offer_price} X  ${item.reqd_quantity}  =$  <b>${item.cart_items_value}</b></p></div>
    <div class="del-btn-div">
       <img 
           class="delete-btn" 
           src="./images/icon-delete.svg" 
           alt="delete-icon" 
           onclick=deleteProduct(${item.id})    
       />
    </div>    
   `;
   return div;
}

function deleteCartDiv(){
    let cartDiv=document.querySelector('.cart-items-div');
    cartDiv.parentElement.removeChild(cartDiv); 
}

function deleteProduct(id){
    console.log(id);    
    let newArr=cartItemsArr.filter(i=>i.id !== id);
    console.log(newArr);
    localStorage.setItem('cartItems',JSON.stringify(newArr));
    cartItemsArr=JSON.parse(localStorage.getItem('cartItems'));
    createAndPopulateCart(); 
    if(cartItemsArr.length === 0){
        deleteCartDiv();
    }
}
//-------------------------------------------------------------------
/* lightbox showing : when focus image is clicked in desktop device*/
function showLightBox(){
    const lightboxSection=document.querySelector('.lightbox-section');
    lightboxSection.classList.remove('lightbox-section-hide');
    lightboxSection.classList.add('lightbox-section-show');
}
//----------lighbox appears when focus image is clicked----------------
//-----------------lightbox related functions---------------------------

function showPreviousImage(){    
    let i= lightboxIndex <= 0 ? lightboxIndex=0 : --lightboxIndex ;    
    changeImageInLightbox(i);
    setActiveClassOfThumbnailImg(i);    
}


function showNextImage(){        
    let i= lightboxIndex >= focusImgArr.length-1 ? lightboxIndex=0 : ++lightboxIndex ;    
    changeImageInLightbox(i);
    setActiveClassOfThumbnailImg(i);
}

function changeImageInLightbox(index){
    let lightboxDiv =document.getElementById('lightbox-image-div');
    lightboxDiv.innerHTML=`<img src=${focusImgArr[index]} alt="focus-image" />`;
}

function setActiveClassOfThumbnailImg(i){     
    thumbnailImages.forEach((img, index)=>{
        if(img.classList.contains('active')){
            return;
        } else {
            closeAllThumbnailActiveClass();
            setActiveClass(i);
        }
    })
}

function closeAllThumbnailActiveClass(){
    thumbnailImages.forEach(box=>{
        box.classList.remove('active');   
    })
}

function setActiveClass( i){
    let b=thumbnailImages[i];
    b.classList.add('active');    
}


thumbnailImages.forEach((box, index)=>{
    box.addEventListener('click', function(){        
       if(box.classList.contains('active')){ return;}
       else {
            closeAllThumbnailActiveClass();
            setActiveClass(index);
            changeImageInLightbox(index);
       }
    })
})
/* ----------------lightbox--close btn code-----------------*/
function hideLightBox(){
    const lightboxSection=document.querySelector('.lightbox-section');
    lightboxSection.classList.remove('lightbox-section-show');
    lightboxSection.classList.add('lightbox-section-hide');
}
/* ----------------mobile devices related code ----------------------*/
//--------------left-right movement of images in mobile devices----------------
function goToPreviousImage(){    
    let i= lightboxIndex <= 1 ? lightboxIndex=1 : --lightboxIndex ;     
    changeImageInImageDiv(i);
}

function goToNextImage(){    
    let i= lightboxIndex >= focusImgArr.length-1 ? lightboxIndex=focusImgArr.length : ++lightboxIndex ;        
    changeImageInImageDiv(i);
}
function changeImageInImageDiv(i){
    let imgSrc=`./images/image-product-${i}.jpg`
    let imgDiv=document.querySelector('.mobile-img-box');
    imgDiv.innerHTML=`<img class="product-image" src=${imgSrc} alt="img" />`;
}

/*mobile nav : hide and show code*/
function showMobileNav(){  
    const mobileNav=document.querySelector('.mobile-nav-ul');  
    mobileNav.classList.remove('mobile-nav-ul-hide');
    mobileNav.classList.add('mobile-nav-ul-show');
}

function hideMobileNav(){
    const mobileNav=document.querySelector('.mobile-nav-ul');
    mobileNav.classList.remove('mobile-nav-ul-show');
    mobileNav.classList.add('mobile-nav-ul-hide');
}