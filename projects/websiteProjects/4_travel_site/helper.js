import { $APC, $CE, $GID, $SET_CLASS, $CREATE_NAV } from "./util.js";
import {ccLinksData, hotelsArray, partnerLinksData, socialLinks} from './data.js';

export const createAndAppendLogoDiv=(header)=>{
    let logoDiv=$CE('div');
    $SET_CLASS(logoDiv, 'logo-div');
    let logo=$CE('p');
    logo.innerText="TNT";    
    $SET_CLASS(logo, 'logo');
    $APC(logoDiv, logo);
    let helpline=$CE('div');
    $SET_CLASS(helpline, 'helpline');
    let iconSpan=$CE('span');
    let numberSpan=$CE('span');
    iconSpan.innerHTML="<i class='fas fa-phone'></i>";
    numberSpan.innerText="1800-200-XXXX";
    $APC(helpline, iconSpan);
    $APC(helpline, numberSpan);
    $APC(logoDiv, helpline);
    $APC(header, logoDiv);
    return header;
}

export const createAndAppendLinks=(div, links, navClass)=>{    
    let nav=$CE('nav');
    $SET_CLASS(nav, navClass);

    links.map(link=>{
        let a=$CE('a');
        $SET_CLASS(a, 'link');
        a.innerText=link;
        $APC(nav, a);
    });
    $APC(div, nav);
    return div;
}



export const createAndAppendAddress=(bottomSection, obj)=>{
    let addressBox=$CE('div');
    $SET_CLASS(addressBox, 'address-box');

    let title=$CE('h3');    
    title.innerText=obj.title;
    let address1=$CE('p');
    address1.innerText=obj.address[0];
    let address2=$CE('p');
    address2.innerText=obj.address[1];

    $APC(addressBox, title);
    $APC(addressBox, address1);
    $APC(addressBox, address2);

    $APC(bottomSection, addressBox);
    return bottomSection;
}
export const createAndAppendCCLinks=(bottomSection)=>{
    let ccLinks=$CE('div');
    $SET_CLASS(ccLinks, 'cc-links-div');
    ccLinks=$CREATE_NAV(ccLinksData.title, ccLinksData.linksArray);
    $SET_CLASS(ccLinks, 'cc-links-nav');
    $APC(bottomSection, ccLinks);
    return bottomSection;
}
export const createAndAppendPartnerLinks=(bottomSection)=>{
    let partnerLinks=$CE('div');
    $SET_CLASS(partnerLinks, 'partner-links-div');
    partnerLinks=$CREATE_NAV(partnerLinksData.title, partnerLinksData.linksArray);
    $APC(bottomSection, partnerLinks);
    $SET_CLASS(partnerLinks, 'partner-links-nav');
    return bottomSection;
}
export const createAndAppendSubcribeBox=(bottomSection)=>{
    let subscribeBox=$CE('div');
    $SET_CLASS(subscribeBox, 'subscribe-box');

    subscribeBox=createAndAppendInput(subscribeBox);
    subscribeBox=createAndAppendSocialMediaDiv(subscribeBox);

    $APC(bottomSection, subscribeBox);
    return bottomSection;
}

function createAndAppendInput(subscribeBox){
    let inputDiv=$CE('div');
    $SET_CLASS(inputDiv, 'input-div');
    
    let h3=$CE('h3');
    $SET_CLASS(h3, "input-div-title");
    h3.innerText='subscribe to our newletter';
    let inputBox = $CE('div');
    $SET_CLASS(inputBox, 'input-box');
    let input=$CE('input');
    $SET_CLASS(input , 'email-input');
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

function createAndAppendSocialMediaDiv(subscribeBox){
    let socialMediaDiv=$CE('div');
    $SET_CLASS(socialMediaDiv, 'social-media-div');
    let h3=$CE('h3');
    $SET_CLASS(h3, "social-media-div-title");
    h3.innerText="let us socialize";
    $APC(socialMediaDiv, h3);
    socialMediaDiv=createAndAppendSMLinks(socialMediaDiv);
    $APC(subscribeBox, socialMediaDiv);
    return subscribeBox;
}

function createAndAppendSMLinks(socialMediaDiv){
    let smNav=$CE('nav');
    $SET_CLASS(smNav, 'sm-nav');

    socialLinks.map(link=>{
        let smSpan=$CE('span');
        $SET_CLASS(smSpan, 'sm-span');
        smSpan.innerHTML=link;
        $APC(smNav, smSpan);
    })   
    $APC(socialMediaDiv, smNav);
    return socialMediaDiv;
}

export const createAndAppendSidebar=(main)=>{
    let sidebar=$CE('aside');
    $SET_CLASS(sidebar, 'sidebar');
    $APC(main, sidebar);
    return main;
}
export const createAndAppendContentsDiv=(main)=>{
    let contentsDiv=$CE('div');
    $SET_CLASS(contentsDiv, 'contents-div');
    contentsDiv=createAndAppendCards(contentsDiv);
    $APC(main, contentsDiv);
    return main;
}

function createAndAppendCards(contentsDiv){
    hotelsArray.map(hotel=>{
        let card=$CE('div');
        $SET_CLASS(card, 'card');
        let imgBox=$CE('div');
        $SET_CLASS(imgBox, 'img-box');
        let img=$CE('img');
        img.setAttribute('src', hotel.imgSrc);
        $SET_CLASS(img, 'card-img');
        $APC(imgBox, img);

        let contentBox=$CE('div');
        $SET_CLASS(contentBox, 'content-box');
        let name=$CE('p');
        $SET_CLASS(name, 'hotel-name');
        name.innerText=hotel.name;
        $APC(contentBox, name);
        let city=$CE('p');
        $SET_CLASS(city, 'city');
        city.innerHTML=`<span><i class="fas fa-location-arrow"></i>
                        </span><span class="city">${hotel.city}</span>
                        <span class="country">${hotel.country}</span>`;
        $APC(contentBox, city);

        let rating=$CE('p');
        $SET_CLASS(rating, 'rating');
        let stars=addStars(hotel.rating);
        rating.innerHTML=stars;
        let btnBox=addBtnBox(hotel.price);        
        $APC(contentBox, rating);
        $APC(contentBox, btnBox);

        

        $APC(card, imgBox);
        $APC(card, contentBox);
        

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

function addBtnBox(price){
    let btnDiv=$CE('div');
    $SET_CLASS(btnDiv, 'btn-div');
    let priceSpan=$CE('span');
    priceSpan.innerText=`Rs. ${price}`;
    $SET_CLASS(priceSpan, 'price-span');
    let detailsSpan=$CE('span');
    $SET_CLASS(detailsSpan, 'details-span');
    detailsSpan.innerText="Details";
    
    $APC(btnDiv, priceSpan);
    $APC(btnDiv, detailsSpan);

    return btnDiv;
}