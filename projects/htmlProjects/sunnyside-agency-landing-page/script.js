//grab hamburger 
const hamburger=document.querySelector('.hamburger');

//adding click to hamburger
hamburger.addEventListener('click', showMobileNav);

//function to show and hide mobile-nav-ul 
//by toggle classes
function showMobileNav(){
    const mobileNavUl=document.querySelector('.mobile-nav-ul');
    if(mobileNavUl.classList.contains('hide-mobile-nav-ul')){
        mobileNavUl.classList.remove('hide-mobile-nav-ul');
        mobileNavUl.classList.add('show-mobile-nav-ul');
    } else if(mobileNavUl.classList.contains('show-mobile-nav-ul')){
        mobileNavUl.classList.remove('show-mobile-nav-ul');
        mobileNavUl.classList.add('hide-mobile-nav-ul');
    } else{
        return;
    }
}