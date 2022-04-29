import { $APC,  $CESC, $SET_CLASS } from "./util.js";
import {  navLinks, socialLinks} from './data.js';



/* function defined to create and append header */
export const addNav=(container)=>{
    console.log(container)
    let nav=$CESC('nav', 'nav');    
    nav=addHomeIcon(nav);
    nav=createAndAppendLinks(nav, navLinks, 'nav-links');
    nav=createAndAppendSMLinks(nav);
    $APC(container, nav);
    return container;
}

function addHomeIcon(nav){
    let span=$CESC('span', 'home-span');
    span.innerHTML='<i class="fas fa-home"></i>';
    $APC(nav, span);
    return nav;
}

function createAndAppendLinks(div, links, navClass){    
    let nav=$CESC('nav', navClass);
    links.forEach(link=>{        
        let a=$CESC('a', 'link');
        if(link==='hot deals'){
            $SET_CLASS(a, 'hot-deals-link');
        }
        a.innerText=link;
        $APC(nav, a);
    });
    $APC(div, nav);
    return div;
}

function createAndAppendSMLinks(nav){
    let smNav=$CESC('div', 'nav-sm-div');

    socialLinks.map(link=>{
        let smSpan=$CESC('span', 'sm-span');
        smSpan.innerHTML=link;
        $APC(smNav, smSpan);
    })   
    $APC(nav, smNav);
    return nav;
}

export const addBannerDiv=(container)=>{
    let div=$CESC('div', 'banner-div');
    let img=$CESC('img', 'banner-img');
    img.src="./images/sofa-collection.jpg";
    $APC(div, img);
    $APC(container, div);
    return container;
}

