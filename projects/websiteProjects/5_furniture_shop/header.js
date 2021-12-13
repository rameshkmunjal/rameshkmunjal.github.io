import { $APC,  $CESC} from "./util.js";




/* function defined to create and append header */

export const createAndAppendHeader=(container)=>{
    let topDiv=$CESC('div', 'top-div');
    topDiv=addLogoDiv(topDiv);
    topDiv=addCompanyName(topDiv);
    topDiv=addSearchDiv(topDiv);
    topDiv=addCartDiv(topDiv);
    $APC(container, topDiv);
    return container;
}

function addLogoDiv(topDiv){
    let div=$CESC('div', 'logo-div');
    let img=$CESC('img', 'logo');
    img.setAttribute('src', './images/logo.png');
    $APC(div, img);
    $APC(topDiv, div);
    return topDiv;
}

function addCompanyName(topDiv){
    let div=$CESC('div', 'name-div');
    let coName1=$CESC('p', 'co-name-1');
    coName1.innerHTML='<span class="first-span">inder</span><span class="second-span">vilas</span>' ;
    let coName2=$CESC('p', 'co-name-2');
    coName2.innerText="furniture store";
    $APC(div, coName1);
    $APC(div, coName2);
    $APC(topDiv, div);
    return topDiv;
}

function addSearchDiv(topDiv){
    let div=$CESC('div', 'search-div');            
    let input=$CESC('input' , 'search-input');
    input.setAttribute('placeholder', 'Search Here');
    let searchSpan=$CESC('div', 'search-span');
    searchSpan.innerHTML='<i class="fas fa-search"></i>';
    $APC(div, input);
    $APC(div, searchSpan);    
    
    $APC(topDiv, div);    
    return topDiv;
}

function addCartDiv(topDiv){
    let div=$CESC('div', 'cart-div');
    let iconDiv=$CESC('div', 'icon-div');
    let itemsP=$CESC('p', 'items-p');
    let h3=$CESC('h3', 'cart-h3');

    iconDiv.innerHTML='<i class="fas fa-shopping-cart"></i>';
    itemsP.innerText="0 items in cart";
    h3.innerText="my cart";

    $APC(div, iconDiv);
    $APC(div, itemsP);
    $APC(div, h3);

    $APC(topDiv, div);
    return topDiv;
}

