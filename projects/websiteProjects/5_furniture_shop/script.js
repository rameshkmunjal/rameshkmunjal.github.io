//importing utility functions
import { $APC, $CESC, $GID, $SET_CLASS, $CREATE_NAV } from "./util.js";
import {    
    createAndAppendLinks,
    createAndAppendSidebar,
    createAndAppendContentsDiv,
    createAndAppendAddress,
    createAndAppendServicesLinks,
    createAndAppendExtrasLinks,
    createAndAppendMyaccountLinks,
    createAndAppendSubcribeBox
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
    let header=$CESC('header', 'header'); 
    header=createAndAppendLinks(header, headerLinks, 'header-links');
    $APC(container, header);
    console.log(container);
    return container;
}

/* function defined to create and append main */
function createAndAppendMain(container){    
    let main=$CESC('main', 'main'); 
    main=createAndAppendSidebar(main);    
    main=createAndAppendContentsDiv(main);
    $APC(container, main);
    return container;
}

/* function defined to create and append bottom-section */
function createAndAppendBottomSection(container){
    let bottomSection=$CESC('section', 'bottom-side-links-section');
    bottomSection=createAndAppendServicesLinks(bottomSection);
    bottomSection=createAndAppendExtrasLinks(bottomSection);
    bottomSection=createAndAppendMyaccountLinks(bottomSection);
    bottomSection=createAndAppendAddress(bottomSection, addressObj);    

    $APC(container, bottomSection);
    return container;
}

/* function defined to create and append footer */
function createAndAppendFooter(container){
    let footer=$CESC('footer', 'footer');
    footer=createAndAppendLinks(footer, footerLinks, 'footer-links');
    $APC(container, footer);
    return container;
}