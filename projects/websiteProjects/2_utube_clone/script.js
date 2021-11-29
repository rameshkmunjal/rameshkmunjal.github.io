//importing utility functions
import {$GID, $CE, $SET_CLASS, $APC} from './util.js';
import {
    createLogoDiv,
    createSearchDiv,
    createRightNav,
    findUniqTags,
    appendImage,
    appendContent,
    shuffle
 } from './helper.js';
//grabbing containe div
let container=$GID("container");

//default function call at start
createHomePage();

//creating home page
function createHomePage(){
    console.log("function : createHomePage");
    let nav=createNavSection();
    let tagsSection=createTagsSection();
    let main=createMainSection();
    $APC(container, nav);
    $APC(container, tagsSection);
    $APC(container, main);
}

//creating nav section - will hold nav
function createNavSection(){
    let nav=$CE('section');
    $SET_CLASS(nav, 'nav-section');

    let logoDiv=createLogoDiv();    
    $APC(nav, logoDiv);
    let searchDiv=createSearchDiv();
    $APC(nav, searchDiv); 
    let rightNav=createRightNav();
    $APC(nav, rightNav); 

    return nav;
}



//creating tags section - II section of page
function createTagsSection(){
    let tagsSection=$CE('section');
    $SET_CLASS(tagsSection, 'tags-section');
    let uniqArr=findUniqTags();
    
    uniqArr.map(tag=>{
        let tagSpan=$CE('span');
        $SET_CLASS(tagSpan, 'tag-span');
        tagSpan.innerText=tag;
        $APC(tagsSection, tagSpan);
    })
    
    return tagsSection;
}



//creating main section of page - will hold all contents
function createMainSection(){
    let div=$CE('div');
    $SET_CLASS(div, 'main');
    let arr=shuffle(webData);
    arr.map(item=>{
        //console.log(item.title);
        let card=$CE('div');
        $SET_CLASS(card, 'card');
        card=appendImage(card, item);
        card=appendContent(card, item);
        
        div.append(card);
    })
    return div;
}



