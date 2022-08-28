//to getting hold of all links of desktop nav having link class 
let links=document.querySelectorAll('.link');
//to getting hold of all links of mobile nav having link class 
let mobileNavLinks=document.querySelectorAll('.mobile-nav-div .link');

//to get hold of hamburger and adding click event to it
let hamburger=document.querySelector('.hamburger');
hamburger.addEventListener('click', openNavSlider);
//to get hold of closeBtn and adding click event to it
let closeBtn=document.querySelector('.close-btn');
closeBtn.addEventListener('click', closeNavSlider);

//to loop through links to toggle inactive and active class
links.forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        if(link.classList.contains('inactive-link')){ 
            closeOtherActiveLinks();                     
            activateLink(link);            
        } else if (link.classList.contains('active-link')){
            closeActiveLink(link);
        } else {
            return;
        }
    })
})

//function to close all active links other than clicked link
function closeOtherActiveLinks(){
    links.forEach(link=>{
        if(link.classList.contains('active-link')){
            link.classList.remove('active-link');
            link.classList.add('inactive-link');
            let icon=link.children[1];
            icon.classList.remove('fa-angle-up');
            icon.classList.add('fa-angle-down'); 
        }
    })
}

//function to close active link if clicked 
function closeActiveLink(link){    
    link.classList.remove('active-link');
    link.classList.add('inactive-link');            
    let icon=link.children[1];
    icon.classList.remove('fa-angle-up');
    icon.classList.add('fa-angle-down');   
}

//function to remove inactive-link class and adding active-link class
function activateLink(link){
    link.classList.remove('inactive-link');
    link.classList.add('active-link');            
    let icon=link.children[1];
    icon.classList.remove('fa-angle-down');
    icon.classList.add('fa-angle-up'); 
}

/*--------------------------------------------------------*/
//function to open nav slider
function openNavSlider(){
    //console.log("hamburger clicked");
    let mobileNav=document.querySelector('.mobile-nav-div');
    //console.log(mobileNav);
    if(mobileNav.classList.contains('hide-nav')){
        mobileNav.classList.remove('hide-nav');
        mobileNav.classList.add('show-nav');
    } else {
       return;
    }
}
//function to close nav slider
function closeNavSlider(){
    let mobileNav=document.querySelector('.mobile-nav-div');
    //console.log(mobileNav);
    if(mobileNav.classList.contains('show-nav')){
        mobileNav.classList.remove('show-nav');
        mobileNav.classList.add('hide-nav');
    } else {
       return;
    }
}

/*------------------------------------------------------------*/
//looping thorugh mobile link and adding click to them and 
//toggle their classes
mobileNavLinks.forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        if(link.classList.contains('collapse-link')){ 
            closeOtherExpandLinks();                     
            expandLink(link);            
        } else if (link.classList.contains('expand-link')){
            closeExpandLink(link);
        } else {
            return;
        }
    })
})

//function to close expanded links other than clicked
function closeOtherExpandLinks(){
    links.forEach(link=>{
        if(link.classList.contains('expand-link')){
            link.classList.remove('expand-link');
            link.classList.add('collapse-link');
        }
    })
}
//function to close expanded link if clicked
function closeExpandLink(link){    
    link.classList.remove('expand-link');
    link.classList.add('collapse-link');            
    let icon=link.children[1];
    icon.classList.remove('fa-angle-up');
    icon.classList.add('fa-angle-down');   
}

//to expand a link upon clicked
function expandLink(link){
    link.classList.remove('collapse-link');
    link.classList.add('expand-link');            
    let icon=link.children[1];
    icon.classList.remove('fa-angle-down');
    icon.classList.add('fa-angle-up'); 
}