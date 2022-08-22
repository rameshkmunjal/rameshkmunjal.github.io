// importing util file - contains utility functions
import { $SC } from "./util.js";

//decalaring variables and grabbing elements by class
const linksArr=document.querySelectorAll(".link");
const hamburger=document.querySelector(".hamburger");
const businessLinks=document.querySelectorAll(".business-ul li");

// assigning click event to links having same class
linksArr.forEach(link=>{
    link.addEventListener('click', ()=>showSubMenu(link));
})

//eventhandler to show or hide submenu - when main menu item clicked
function showSubMenu(link){    
    let img=link.children[1];
    const subUL=link.children[2];
    
    if(subUL.classList.contains('hide-sub-ul')){
        showSubUL(img, subUL);
    } else {
        hideSubUL(img, subUL);
    }
}
//helper functions to above
function showSubUL(img, subUL){
    $SC(img, 'fa-angle-down', 'fa-angle-up' );    
    $SC(subUL, 'hide-sub-ul' , 'show-sub-ul' );
}

function hideSubUL(img, subUL){ 
    $SC(img,  'fa-angle-up', 'fa-angle-down' );    
    $SC(subUL,  'show-sub-ul', 'hide-sub-ul' );
}

//----------------------------------------------------------------------------------

// adding click event to hamburger
hamburger.addEventListener('click', toggleMobileNav);

//event handler to toggle between show and hide of slider nav
function toggleMobileNav(){    
    const mobileUL=document.querySelector('.ul-div');

    if(hamburger.classList.contains('show-bar-div')){        
        $SC(hamburger, 'show-bar-div', 'show-close-btn' )
        hamburger.innerHTML='<div><img src="./images/icon-close.svg" /></div>';
        $SC(mobileUL, 'hide-ul', 'show-ul' )
    } else if(hamburger.classList.contains('show-close-btn')){        
        $SC(hamburger, 'show-close-btn', 'show-bar-div' )
        hamburger.innerHTML='<div class="bar"></div><div class="bar"></div><div class="bar"></div>'; 
        $SC(mobileUL, 'show-ul', 'hide-ul');
    } else {
        return false;
    }    
}

//adding click event to li items of slider nav
// to show sub-menu-items
businessLinks.forEach(link=>{
    link.addEventListener('click', ()=>showMobileSubLInks(link));
})
//event handler to above
function showMobileSubLInks(link){     
    let icon=link.children[1];
    let childUL=link.children[2];
    if(childUL.classList.contains('hide-mobile-sub-ul')){        
        $SC(icon, 'fa-angle-down', 'fa-angle-up');
        $SC(childUL, 'hide-mobile-sub-ul', 'show-mobile-sub-ul');
    } else{        
        $SC(icon,  'fa-angle-up', 'fa-angle-down');
        $SC(childUL, 'show-mobile-sub-ul', 'hide-mobile-sub-ul');
    }
}

