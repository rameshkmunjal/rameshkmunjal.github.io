let navUL=document.querySelector('.nav-bars-div');
navUL.addEventListener('click', showMobileUL);

function showMobileUL(){
    let mobileUL=document.querySelector('.mobile-nav-ul');
    if(mobileUL.classList.contains('inactive-ul')){
        mobileUL.classList.remove('inactive-ul');
        mobileUL.classList.add('active-mobile-ul');
    }else{
        mobileUL.classList.add('inactive-ul');
        mobileUL.classList.remove('active-mobile-ul');
    }
    
}