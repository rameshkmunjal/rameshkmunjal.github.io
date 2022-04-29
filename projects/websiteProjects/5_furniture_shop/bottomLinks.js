import { $APC,  $CE, $CESC, $CREATE_NAV,  $SET_CLASS } from "./util.js";
import {
    servicesLinksData,
    extrasLinksData,
    myaccountLinksData,
    socialLinks
} from './data.js';
import { addressObj } from "./data.js";

/* function defined to create and append bottom-section */
export const createAndAppendBottomSection=(container)=>{
    let bottomSection=$CESC('section', 'bottom-side-links-section');
    bottomSection=createAndAppendServicesLinks(bottomSection);
    bottomSection=createAndAppendExtrasLinks(bottomSection);
    bottomSection=createAndAppendMyaccountLinks(bottomSection);
    bottomSection=createAndAppendAddress(bottomSection, addressObj);    

    $APC(container, bottomSection);
    return container;
}

function createAndAppendServicesLinks(bottomSection){
    let servicesLinks=$CESC('div', 'bottom-links-div');
    servicesLinks=$CREATE_NAV(servicesLinksData.title, servicesLinksData.linksArray);
    $SET_CLASS(servicesLinks, 'bottom-links-nav');
    $APC(bottomSection, servicesLinks);
    return bottomSection;
}
function createAndAppendExtrasLinks(bottomSection){
    let partnerLinks=$CESC('div', 'bottom-links-div');
    partnerLinks=$CREATE_NAV(extrasLinksData.title, extrasLinksData.linksArray);
    $APC(bottomSection, partnerLinks);
    $SET_CLASS(partnerLinks, 'bottom-links-nav');
    return bottomSection;
}
function createAndAppendMyaccountLinks(bottomSection){
    let myaccountLinks=$CESC('div', 'bottom-links-div');
    myaccountLinks=$CREATE_NAV(myaccountLinksData.title, myaccountLinksData.linksArray);
    $APC(bottomSection, myaccountLinks);
    $SET_CLASS(myaccountLinks, 'bottom-links-nav');
    return bottomSection;
}

function createAndAppendAddress(bottomSection, obj){
    let addressBox=$CESC('div', 'address-box');

    let title=$CE('h3');    
    title.innerText=obj.title;
    let hr=$CESC('hr', 'nav-hr');
    let nameP=$CESC('p', 'company-name');
    nameP.innerHTML=`<span><i class="fas fa-location-arrow"></i></span><span>${addressObj.companyName}</span>`;
    let address1=$CE('p');
    address1.innerText=obj.address[0];
    let address2=$CE('p');
    address2.innerText=obj.address[1];
    let phone=$CESC('p');
    phone.innerHTML=`<span><i class="fas fa-phone-volume"></i></span><span>${addressObj.phone}</span>`;
    let email=$CESC('p');
    email.innerHTML=`<span><i class="fas fa-envelope"></i></span><span>${addressObj.email}</span>`;
    $APC(addressBox, title);
    $APC(addressBox, hr);
    $APC(addressBox, nameP);    
    $APC(addressBox, address1);
    $APC(addressBox, address2);
    $APC(addressBox, phone);
    $APC(addressBox, email);

    $APC(bottomSection, addressBox);
    return bottomSection;
}





/*
function createAndAppendSubcribeBox(bottomSection){
    let subscribeBox=$CESC('div', 'subscribe-box');

    subscribeBox=createAndAppendInput(subscribeBox);
    subscribeBox=createAndAppendSocialMediaDiv(subscribeBox);

    $APC(bottomSection, subscribeBox);
    return bottomSection;
}
/* 
    functions part of these helper functions 
*/
/*
function createAndAppendInput(subscribeBox){
    let inputDiv=$CESC('div', 'input-div');
    
    let h3=$CESC('h3', "input-div-title");
    h3.innerText='subscribe to our newletter';
    let inputBox = $CESC('div', 'input-box');
    let input=$CESC('input' , 'email-input');
    input.setAttribute('placeholder', 'Your Email Here');
    let submitBtn=$CE('button');
    submitBtn.innerText="Submit";
    $APC(inputBox, input);
    $APC(inputBox, submitBtn);    
    $APC(inputDiv, h3);
    $APC(inputDiv, inputBox );
    $APC(subscribeBox, inputDiv);  
    return subscribeBox;
}
*/
/*
function createAndAppendSocialMediaDiv(subscribeBox){
    let socialMediaDiv=$CESC('div', 'social-media-div');
    let h3=$CESC('h3', "social-media-div-title");
    h3.innerText="let us socialize";
    $APC(socialMediaDiv, h3);
    socialMediaDiv=createAndAppendSMLinks(socialMediaDiv);
    $APC(subscribeBox, socialMediaDiv);
    return subscribeBox;
}
*/

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