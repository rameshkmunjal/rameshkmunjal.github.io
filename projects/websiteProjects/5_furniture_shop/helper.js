//importing utility functions
import { $APC, $CESC, $GID, $SET_CLASS, $CE, $CREATE_NAV } from "./util.js";
import {
    servicesLinksData,
    extrasLinksData,
    myaccountLinksData,
    socialLinks
} from './data.js';
import { categories, facilities, hotelsArray } from "./data.js";



export const createAndAppendLogoDiv=(header)=>{    
    let logoDiv=$CESC('div', 'logo-div');
    let logo=$CESC('p', 'logo');
    logo.innerText="TNT";    
    $APC(logoDiv, logo);

    let helpline=$CESC('div', 'helpline');    
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
    let nav=$CESC('nav', navClass);
    links.map(link=>{        
        let a=$CESC('a', 'link');
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
    let sidebar=$CESC('aside', 'sidebar');
    sidebar=createAndAppendRequestForm(sidebar)
    sidebar=createAndAppendFiltersInLoop(sidebar);
    $APC(main, sidebar);
    return main;
}

function createAndAppendRequestForm(sidebar){    
    let div=$CESC('div', 'request-form-div' )
    let h2=$CESC('h2', 'request-form-heading');
    h2.innerText="Search Availability";
    $APC(div, h2);

    let form=$CESC('form', 'request-form');
    let inputDiv=$CESC('div', 'form-input-div');
    let label=$CE('label');
    label.innerText="Where you want to go";
    let input=$CESC('input', 'input')
    input.setAttribute('type', 'text');
    $APC(inputDiv, label);
    $APC(inputDiv, input);
    $APC(form, inputDiv);

    let dateInput=$CESC('div', "date-input-div");
    let sd1=$CE('div', "date-input-sub-div");
    let sd1Label=$CE('label');
    sd1Label.innerHTML='<span>Check In</span><span class="date-icon"><i class="fas fa-calendar-alt"></i></span>';
    let sd1Input=$CE('input');
    sd1Input.setAttribute('type', 'text');
    
    $SET_CLASS(sd1Input, 'date-input-sub-div-input')
    $APC(sd1, sd1Label);
    $APC(sd1, sd1Input);
    $APC(dateInput, sd1);    
    

    let sd2=$CESC('div', "date-input-sub-div");
    let sd2Label=$CE('label');
    sd2Label.innerHTML='<span>Check Out</span><span class="date-icon"><i class="fas fa-calendar-alt"></i></span>';
    let sd2Input=$CESC('input', 'date-input-sub-div-input')
    sd2Input.setAttribute('type', 'text');
    
    $APC(sd2, sd2Label);
    $APC(sd2, sd2Input);
    $APC(dateInput, sd2); 

    $APC(form, dateInput);
    
    let roomInputDiv=$CESC('div', 'room-input-div');
        
    let sd3=$CESC('div', 'div-3')
    let sd3Label=$CE('label');
    sd3Label.innerText="Rooms";
    let sd3Btn=$CESC('button', "sd-btn");
    sd3Btn.innerText="+ Add Rooms";
    $APC(sd3, sd3Label);
    $APC(sd3, sd3Btn);
    $APC(roomInputDiv, sd3);        
    
    let div4=$CESC('div', 'div-4');
    let sd4Label=$CE('label');
    sd4Label.innerText="Adults";
    let sd4Input=$CE('input');
    sd4Input.setAttribute('placeholder', '2');
    $APC(div4, sd4Label);
    $APC(div4, sd4Input);
    $APC(roomInputDiv, div4);
    let div5=$CESC('div', 'div-5');
    let sd5Label=$CE('label');
    sd5Label.innerText="Child";
    let sd5Input=$CE('input');
    sd5Input.setAttribute('placeholder', '2');
    $APC(div5, sd5Label);
    $APC(div5, sd5Input);       
    $APC(roomInputDiv, div5);
    $APC(form, roomInputDiv);

    let requestFormSubmitBtn=$CESC('button', 'request-form-submit-button');
    requestFormSubmitBtn.innerText="Submit";
    $APC(form, requestFormSubmitBtn);
    $APC(div, form);

    $APC(sidebar, div);
    return sidebar;
}

/********
 * 
 */
 export const createAndAppendContentsDiv=(main)=>{
    let contentsDiv=$CESC('div', 'contents-div');
    contentsDiv=createAndAppendCards(contentsDiv);
    $APC(main, contentsDiv);
    return main;
}

// following are functions called inside above helper functions
function createAndAppendCards(contentsDiv){
    hotelsArray.map(hotel=>{
        let card=$CESC('div', 'card');
        let imgBox=$CESC('div', 'img-box');
        let img=$CESC('img', 'card-img');
        img.setAttribute('src', hotel.imgSrc);
        
        $APC(imgBox, img);

        let contentBox=$CESC('div', 'content-box');
        let name=$CESC('p', 'hotel-name');
        name.innerText=hotel.name;
        $APC(contentBox, name);
        let city=$CESC('p', 'city');
        city.innerHTML=`<span><i class="fas fa-location-arrow"></i>
                        </span><span class="city">${hotel.city}</span>
                        <span class="country">${hotel.country}</span>`;
        $APC(contentBox, city);

        let rating=$CESC('p', 'rating');
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
    let btnDiv=$CESC('div', 'btn-div');
    let priceSpan=$CESC('span', 'price-span');
    priceSpan.innerText=`Rs. ${price}`;
    
    let detailsSpan=$CESC('span', 'details-span');
    detailsSpan.innerText="Details";
    
    $APC(btnDiv, priceSpan);
    $APC(btnDiv, detailsSpan);

    return btnDiv;
}

function createAndAppendFiltersInLoop(sidebar){
    let filterDiv=$CESC('div', 'filter-div');
    let h2=$CESC('h2', 'filter-div-heading');
    h2.innerText="Filter By";
    $APC(filterDiv, h2);
    let fd=$CE('div');
    let filterArr =["categories", "rating", "facilites"];
    for(let i=0; i< filterArr.length; i++){
        if(filterArr[i]==="categories"){
            fd=createFilters(categories, "categories");
        } else if(filterArr[i]==="facilites"){
            fd=createFilters(facilities, "facilities");
        }
        $APC(filterDiv, fd);
    }   
    $APC(sidebar, filterDiv);
    return sidebar;
}

function createFilters(arr, heading){
    let div=$CESC('div', 'filter-sub-div');
    let h3=$CESC('h3', "filter-heading");
    h3.innerText=heading;
    $APC(div, h3);

    let ul=$CESC('ul', 'filter-ul');
    arr.map(item=>{
        let li=$CE('li');
        let checkBox=$CESC('input', 'checkbox');
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
export const createAndAppendAddress=(bottomSection, obj)=>{
    let addressBox=$CESC('div', 'address-box');

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
export const createAndAppendServicesLinks=(bottomSection)=>{
    let ccLinks=$CESC('div', 'cc-links-div');
    ccLinks=$CREATE_NAV(servicesLinksData.title, servicesLinksData.linksArray);
    $SET_CLASS(ccLinks, 'cc-links-nav');
    $APC(bottomSection, ccLinks);
    return bottomSection;
}
export const createAndAppendExtrasLinks=(bottomSection)=>{
    let partnerLinks=$CESC('div', 'partner-links-div');
    partnerLinks=$CREATE_NAV(extrasLinksData.title, extrasLinksData.linksArray);
    $APC(bottomSection, partnerLinks);
    $SET_CLASS(partnerLinks, 'partner-links-nav');
    return bottomSection;
}
export const createAndAppendMyaccountLinks=(bottomSection)=>{
    let myaccountLinks=$CESC('div', 'partner-links-div');
    myaccountLinks=$CREATE_NAV(myaccountLinksData.title, myaccountLinksData.linksArray);
    $APC(bottomSection, myaccountLinks);
    $SET_CLASS(myaccountLinks, 'partner-links-nav');
    return bottomSection;
}
export const createAndAppendSubcribeBox=(bottomSection)=>{
    let subscribeBox=$CESC('div', 'subscribe-box');

    subscribeBox=createAndAppendInput(subscribeBox);
    subscribeBox=createAndAppendSocialMediaDiv(subscribeBox);

    $APC(bottomSection, subscribeBox);
    return bottomSection;
}
/* 
    functions part of these helper functions 
*/
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

function createAndAppendSocialMediaDiv(subscribeBox){
    let socialMediaDiv=$CESC('div', 'social-media-div');
    let h3=$CESC('h3', "social-media-div-title");
    h3.innerText="let us socialize";
    $APC(socialMediaDiv, h3);
    socialMediaDiv=createAndAppendSMLinks(socialMediaDiv);
    $APC(subscribeBox, socialMediaDiv);
    return subscribeBox;
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