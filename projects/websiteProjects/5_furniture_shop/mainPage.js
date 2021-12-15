import { $APC,  $CESC } from "./util.js";
import { itemsArray } from "./data.js";
import { createAndAppendSidebar } from "./sidebar.js";




/* function defined to create and append main */
export const createAndAppendMain=(container)=>{    
    let main=$CESC('main', 'main'); 
    main=createAndAppendSidebar(main);    
    main=createAndAppendContentsDiv(main);
    
    $APC(container, main);
    return container;
}



export const createAndAppendContentsDiv=(main)=>{
    let contentsDiv=$CESC('div', 'contents-div');
    contentsDiv=createAndAppendCards(contentsDiv);
    $APC(main, contentsDiv);
    return main;
}

// following are functions called inside above helper functions
function createAndAppendCards(contentsDiv){
    itemsArray.map(item=>{
        let card=$CESC('div', 'card');
        let imgBox=$CESC('div', 'img-box');
        let img=$CESC('img', 'card-img');
        img.setAttribute('src', item.imgSrc);
        
        $APC(imgBox, img);

        let contentBox=$CESC('div', 'content-box');
        let name=$CESC('p', 'item-name');
        name.innerText=item.brand+"  "+item.name;
        $APC(contentBox, name);

        let price=$CESC('p', 'item-price');
        price.innerText=`Rs. ${item.price}`;
        $APC(contentBox, price);
        

        let rating=$CESC('p', 'rating');
        let stars=addStars(item.rating);
        rating.innerHTML=stars;
        let btnDiv=createAndAppendBtnDiv();
               
        $APC(contentBox, rating);        
        $APC(card, imgBox);
        $APC(card, contentBox);
        $APC(card, btnDiv);
        $APC(contentsDiv, card);

    })
    return contentsDiv;
}

function addStars(num){
    if(num >= 1 && num<2){
        return '<i class="fas fa-star"></i>';
    } else if(num >= 2 && num < 3){
        return '<i class="fas fa-star"></i><i class="fas fa-star"></i>';
    }else if(num >= 3 && num < 4){
        return '<i class="fas fa-star"></i><i class="fas fa-star"></i></i><i class="fas fa-star"></i>';
    }else if(num >= 4 && num < 5){
        return '<i class="fas fa-star"></i><i class="fas fa-star"></i></i><i class="fas fa-star"></i></i><i class="fas fa-star"></i>';
    }else if(num === 5){
        return '<i class="fas fa-star"></i><i class="fas fa-star"></i></i><i class="fas fa-star"></i></i><i class="fas fa-star"></i></i><i class="fas fa-star"></i>';
    }
}

function createAndAppendBtnDiv(main){
    let btnDiv=$CESC('div', 'btn-div');

    let likeDiv=$CESC('div', 'like-div'); 
    likeDiv.innerText="A";   
    
    let addToCartDiv=$CESC('div', 'add-to-cart-div');
    addToCartDiv.innerText="add to cart";

    let likedDiv=$CESC('div', 'liked-div');
    likedDiv.innerHTML='<i class="far fa-heart"></i>';    
    
    $APC(btnDiv, likeDiv);
    $APC(btnDiv, addToCartDiv);
    $APC(btnDiv, likedDiv);
    
    return btnDiv;
}