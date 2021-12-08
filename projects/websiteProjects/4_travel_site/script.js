//importing utility functions
import { $APC, $CE, $GID, $SET_CLASS } from "./util.js";
//importing helper functions
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
//importing data 
import {headerLinks, footerLinks, addressObj} from './data.js';


//by default - home page will load
loadHomePage();

/****************************************************************************
    home page will have four components-
        container element grabbed by id
        header , main , bottom-section , footer
        functions to create and append these components with container called 
*****************************************************************************/
function loadHomePage(){
    let container=$GID('container');
    container=createAndAppendHeader(container);    
    container=createAndAppendMain(container);
    container=createAndAppendBottomSection(container);
    container=createAndAppendFooter(container);    
}

/* function defined to create and append header */
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

/* function defined to create and append main */
function createAndAppendMain(container){
    let main=$CE('main');
    $SET_CLASS(main, 'main');
    main=createAndAppendSidebar(main);    
    main=createAndAppendContentsDiv(main);
    $APC(container, main);
    return container;
}

/* function defined to create and append bottom-section */
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

/* function defined to create and append footer */
function createAndAppendFooter(container){
    let footer=$CE('footer');
    $SET_CLASS(footer, 'footer');
    footer=createAndAppendLinks(footer, footerLinks, 'footer-links');
    $APC(container, footer);
    return container;
}