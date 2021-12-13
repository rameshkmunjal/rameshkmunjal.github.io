import { $APC,  $CE, $CESC, $CREATE_NAV,  $SET_CLASS } from "./util.js";
import {
    servicesLinksData,
    extrasLinksData,
    myaccountLinksData,
    socialLinks
} from './data.js';
import { addressObj } from "./data.js";


/* function defined to create and append footer */
export const createAndAppendFooter=(container)=>{
    let footer=$CESC('footer', 'footer');
    footer=addAppDiv(footer);
    footer=addSMDiv(footer);    
    $APC(container, footer);
    return container;
}

function addAppDiv(footer){
    let div=$CESC('div', 'app-div');
    let h4=$CE('h4');
    h4.innerText="Download Our App ";
    $APC(div, h4);
    let imgBox=$CESC('img-box');    
    let googleAppImg=$CESC('img', 'app-img');
    googleAppImg.setAttribute('src', './images/google-app.png');
    let appleAppImg=$CESC('img', 'app-img');
    appleAppImg.setAttribute('src', './images/apple-app.png');
    $APC(imgBox, googleAppImg);
    $APC(imgBox, appleAppImg);
    $APC(div, imgBox);
    $APC(footer, div);
    return footer;
}


function addSMDiv(footer){
    let smBox=$CESC('div', 'sm-box');
    let h4=$CESC('h4', 'sm-box-h4');
    h4.innerText="follow us";
    let div=$CESC('div', 'sm-div');
    div=createAndAppendSMLinks(div);
    $APC(smBox, h4);
    $APC(smBox, div);
    $APC(footer, smBox);
    return footer;
}


function createAndAppendSMLinks(socialMediaDiv){
    let smNav=$CESC('nav', 'sm-nav');

    socialLinks.map(link=>{
        let smSpan=$CESC('span', 'sm-span');
        smSpan.innerHTML=link;
        $APC(smNav, smSpan);
    })   
    $APC(socialMediaDiv, smNav);
    return socialMediaDiv;
}


    