//importing utility functions
import {$GID, $CE, $SET_CLASS, $APC} from './util.js';

export const createLogoDiv=()=>{
    let logoDiv=$CE('div');
    $SET_CLASS(logoDiv, 'logo-div');

    let logo=$CE('img');
    logo.setAttribute('src', "./images/youtube.png");
    $SET_CLASS(logo, 'logo');

    $APC(logoDiv, logo);
    return logoDiv;
}

export const createSearchDiv=()=>{
    let searchDiv=$CE('div');
    $SET_CLASS(searchDiv, 'search-div');
    let searchInputBox=$CE('input');
    $SET_CLASS(searchInputBox, 'search-input-box');
    let searchBtn=$CE('span');
    $SET_CLASS(searchBtn, 'search-btn');
    searchBtn.innerHTML='<i class="fas fa-search"></i>';

    $APC(searchDiv, searchInputBox);
    $APC(searchDiv, searchBtn);

    return searchDiv;
}

export const createRightNav=()=>{
    let rightNav=$CE('div');
    $SET_CLASS(rightNav, 'right-nav');

    let videoSpan=$CE('span');
    $SET_CLASS(videoSpan, 'video-span');
    videoSpan.innerHTML='<i class="fas fa-video"></i>';
    $APC(rightNav, videoSpan);

    let appsIcon=$CE('span');
    $SET_CLASS(appsIcon, 'apps-span');
    appsIcon.innerHTML='<i class="fab fa-app-store"></i>';
    $APC(rightNav, appsIcon);

    let bellBtn=$CE('span');
    $SET_CLASS(bellBtn, 'bell-btn');
    bellBtn.innerHTML='<i class="fas fa-bell"></i>';
    $APC(rightNav, bellBtn);

    let img=$CE('img');
    img.setAttribute('src', './images/rkm.jpg');
    $SET_CLASS(img, 'user-image');
    $APC(rightNav, img);

    return rightNav;
}

//tags
export const findUniqTags=()=>{
    let arr=[];
    let uniqArr=[];
    webData.map(item=>{
        arr=[...arr, ...item.tags];
    })
    console.log(arr);
    arr.map(i=>{
        if(uniqArr.indexOf(i) === -1){
            uniqArr.push(i);
        }
    })
    console.log(uniqArr);
    return uniqArr;
}

//main page
export const appendImage=(card, item)=>{
    let img=$CE('img');
    img.setAttribute('src', item.poster);
    $APC(card, img);
    return card;
}

export const appendContent=(card, item)=>{
    let contentDiv=$CE('div');
    $SET_CLASS(contentDiv, 'content-div');
    let title=$CE('h5');
    $SET_CLASS(title, 'title');
    title.innerText=item.title;
    $APC(contentDiv, title);
    let producer=$CE('span');
    $SET_CLASS(producer, 'producer');
    producer.innerText=item.producer;
    let tickSpan=$CE('span');
    $SET_CLASS(tickSpan, 'tick-span');
    tickSpan.innerHTML='<i class="fas fa-check-circle"></i>';
    $APC(contentDiv, producer);
    $APC(contentDiv, tickSpan);

    let viewDiv=$CE('div');
    let viewSpan=$CE('span');
    $SET_CLASS(viewSpan, 'view-span');
    let views=item.views+" "+"views";
    viewSpan.innerText=views;
    $APC(viewDiv, viewSpan);
    let timeSpan=$CE('span');
    $SET_CLASS(timeSpan, 'time-span');
    let randomNumber=Math.floor(Math.random()*365);
    timeSpan.innerText=`${randomNumber} days ago`;
    $APC(viewDiv, timeSpan);
    $APC(contentDiv, viewDiv);
    $APC(card, contentDiv);
    return card;
}

 /**
* Shuffles array in place. ES6 version
* @param {Array} a items An array containing the items.
*/
export const shuffle=(a)=> {
   for (let i = a.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [a[i], a[j]] = [a[j], a[i]];
   }
   return a;
}