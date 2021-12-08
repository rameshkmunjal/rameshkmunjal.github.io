import { $APC, $CE, $GID, $SET_CLASS, $CREATE_NAV } from "./util.js";
import {
    ccLinksData, 
    hotelsArray, 
    partnerLinksData, 
    socialLinks, 
    categories, 
    rating, 
    facilities
} from './data.js';


/****************************************** 
    createAndAppendHeader has two exporting functions 
        1. createAndAppendLogoDiv
        2. createAndAppendLinks (also used to create footer-links)
*******************************************/
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
/********************************************
 * createAndAppendMain has two exporting functions
     1. createAndAppendSidebar
     2. createAndAppendContentsDiv
  
*********************************************/
export const createAndAppendSidebar=(main)=>{
    let sidebar=$CE('aside');
    $SET_CLASS(sidebar, 'sidebar');
    sidebar=createAndAppendRequestForm(sidebar)
    sidebar=createAndAppendFiltersInLoop(sidebar);
    $APC(main, sidebar);
    return main;
}

function createAndAppendRequestForm(sidebar){
    let div=$CE('div');
    $SET_CLASS(div, 'request-form-div');
    let h2=$CE('h2');
    $SET_CLASS(h2, 'request-form-heading');
    h2.innerText="Search Availability";
    $APC(div, h2);

    let form=$CE('form');
    $SET_CLASS(form, 'request-form');

    let inputDiv=$CE('div');
    $SET_CLASS(inputDiv, 'input-div');
    let label=$CE('label');
    label.innerText="Where you want to go";
    let input=$CE('input');
    $SET_CLASS(input, 'input')
    input.setAttribute('type', 'text');
    $APC(inputDiv, label);
    $APC(inputDiv, input);
    $APC(form, inputDiv);

    let dateInput=$CE('div');
    $SET_CLASS(dateInput, "date-input-div");
    let sd1=$CE('div');
    $SET_CLASS(sd1, "date-input-sub-div");
    let sd1Label=$CE('label');
    sd1Label.innerHTML='<span>From</span><span class="date-icon"><i class="fas fa-calendar-alt"></i></span>';
    let sd1Input=$CE('input');
    sd1Input.setAttribute('type', 'text');
    
    $SET_CLASS(sd1Input, 'date-input-sub-div-input')
    $APC(sd1, sd1Label);
    $APC(sd1, sd1Input);
    $APC(dateInput, sd1);    
    

    let sd2=$CE('div');
    $SET_CLASS(sd2, "date-input-sub-div");
    let sd2Label=$CE('label');
    sd2Label.innerHTML='<span>To</span><span class="date-icon"><i class="fas fa-calendar-alt"></i></span>';
    let sd2Input=$CE('input');
    
    sd2Input.setAttribute('type', 'text');
    $SET_CLASS(sd2Input, 'date-input-sub-div-input')
    $APC(sd2, sd2Label);
    $APC(sd2, sd2Input);
    $APC(dateInput, sd2); 

    $APC(form, dateInput);
    
    let roomInputDiv=$CE('div');
    $SET_CLASS(roomInputDiv, 'room-input-div');
        
    let sd3=$CE('div');
    $SET_CLASS(sd3, 'div-3')
    let sd3Label=$CE('label');
    sd3Label.innerText="Rooms";
    let sd3Btn=$CE('button');
    $SET_CLASS(sd3Btn, "sd-btn");
    sd3Btn.innerText="+ Add Rooms";
    $APC(sd3, sd3Label);
    $APC(sd3, sd3Btn);
    $APC(roomInputDiv, sd3);        
    
    let div4=$CE('div');
    $SET_CLASS(div4, 'div-4');
    let sd4Label=$CE('label');
    sd4Label.innerText="Adults";
    let sd4Input=$CE('input');
    $APC(div4, sd4Label);
    $APC(div4, sd4Input);
    $APC(roomInputDiv, div4);
    let div5=$CE('div');
    $SET_CLASS(div5, 'div-5');
    let sd5Label=$CE('label');
    sd5Label.innerText="Child";
    let sd5Input=$CE('input');
    $APC(div5, sd5Label);
    $APC(div5, sd5Input);       
    $APC(roomInputDiv, div5);
    $APC(form, roomInputDiv);

    let requestFormSubmitBtn=$CE('button');
    $SET_CLASS(requestFormSubmitBtn, 'request-form-submit-button');
    requestFormSubmitBtn.innerText="Submit";
    $APC(form, requestFormSubmitBtn);

    
    $APC(div, form);

    $APC(sidebar, div);
    return sidebar;
}

function createAndAppendFiltersInLoop(sidebar){
    let filterDiv=$CE('div');
    $SET_CLASS(filterDiv, 'filter-div');
    let h2=$CE('h2');
    $SET_CLASS(h2, 'filter-div-heading');
    h2.innerText="Filter By";
    $APC(filterDiv, h2);
    let fd=$CE('div');
    let filterArr =["categories", "rating", "facilites"];
    for(let i=0; i< filterArr.length; i++){
        if(filterArr[i]==="categories"){
            fd=createFilters(categories, "categories");
        } else if(filterArr[i]==="rating"){
            fd=createFilters(rating, "rating");
        }else if(filterArr[i]==="facilites"){
            fd=createFilters(facilities, "facilities");
        }
        $APC(filterDiv, fd);
    }   
    $APC(sidebar, filterDiv);
    return sidebar;
}

function createFilters(arr, heading){
    let div=$CE('div');
    $SET_CLASS(div, 'filter-sub-div');
    let h3=$CE('h3');
    $SET_CLASS(h3, "filter-heading");
    h3.innerText=heading;
    $APC(div, h3);

    let ul=$CE('ul');
    $SET_CLASS(ul, 'filter-ul');
    arr.map(item=>{
        let li=$CE('li');
        let checkBox=$CE('input');
        $SET_CLASS(checkBox, 'checkbox');
        checkBox.setAttribute('type', 'checkbox');
        let span=$CE('span');
        span.innerText=item;

        $APC(li, checkBox);
        $APC(li, span);
        $APC(ul, li);
    })

    $APC(div, ul);
    return div;
}
/********
 * 
 */
export const createAndAppendContentsDiv=(main)=>{
    let contentsDiv=$CE('div');
    $SET_CLASS(contentsDiv, 'contents-div');
    contentsDiv=createAndAppendCards(contentsDiv);
    $APC(main, contentsDiv);
    return main;
}

// following are functions called inside above helper functions
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
/****************************************** 
    helper functions to create subscribe-box 
        1. createAndAppendAddress
        2. createAndAppendCCLinks
        3. createAndAppendPartnerLinks
        4. createAndAppendSubscribeBox
*******************************************/

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
/* 
    functions part of these helper functions 
*/
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
/**************************************************************************
 * createAndAppendFooter has only one exporting function
 * ************createAndAppendLinks *** it is a common function
 * This function is defined in createAndAppendHeader helper functions above
 ***************************************************************************/