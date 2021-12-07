import { $APC, $CE, $GID, $SET_CLASS } from "./util.js";
import {
    createAndAppendLinks,
    createAndAppendLogoDiv,
    createAndAppendAddress,
    createAndAppendPartnerLinks,
    createAndAppendCCLinks,
    createAndAppendSubcribeBox,
    createAndAppendSidebar,
    createAndAppendContentsDiv
} from './helper.js';
import {headerLinks, footerLinks, addressObj} from './data.js';



loadHomePage();

function loadHomePage(){
    let container=$GID('container');
    container=createAndAppendHeader(container);    
    container=createAndAppendMain(container);
    container=createAndAppendBottomSection(container);
    container=createAndAppendFooter(container);    
}

function createAndAppendHeader(container){
    console.log(container)
    let header=$CE('header');
    $SET_CLASS(header, 'header');
    header=createAndAppendLogoDiv(header);
    header=createAndAppendLinks(header, headerLinks, 'header-links');
    $APC(container, header);
    console.log(container);
    return container;
}


function createAndAppendMain(container){
    let main=$CE('main');
    $SET_CLASS(main, 'main');
    main=createAndAppendSidebar(main);
    
    main=createAndAppendContentsDiv(main);
    $APC(container, main);
    return container;
}
function createAndAppendBottomSection(container){
    let bottomSection=$CE('section');
    $SET_CLASS(bottomSection, 'bottom-side-links-section');

    bottomSection=createAndAppendAddress(bottomSection, addressObj);
    bottomSection=createAndAppendCCLinks(bottomSection);
    bottomSection=createAndAppendPartnerLinks(bottomSection);
    bottomSection=createAndAppendSubcribeBox(bottomSection);

    $APC(container, bottomSection);
    return container;
}
function createAndAppendFooter(container){
    let footer=$CE('footer');
    $SET_CLASS(footer, 'footer');
    footer=createAndAppendLinks(footer, footerLinks, 'footer-links');
    $APC(container, footer);
    return container;
}