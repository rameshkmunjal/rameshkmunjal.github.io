import {  $GID} from './util.js';
import {createAndAppendHeader} from './header.js';
import {addNav} from './navComponent.js';
import { addBannerDiv } from './banner.js';
import {createAndAppendMain} from './mainPage.js';
import {createAndAppendBottomSection} from './bottomLinks.js';
import {createAndAppendFooter} from './footer.js';
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
    container=addNav(container);
    container=addBannerDiv(container);
    container=createAndAppendMain(container);
    container=createAndAppendBottomSection(container);
    container=createAndAppendFooter(container); 
}

