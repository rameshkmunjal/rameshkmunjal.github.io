/* Getting / Grabbing elements for DOM manipulation */
const carouselSlide=document.querySelector('.carousel-slide');
const slides=document.getElementsByClassName('slide');
const hamburger=document.getElementById('hamburger');
const mobileNavUL=document.querySelector('.mobile-nav-ul');
const closeIcon=document.querySelector('.close-icon');
const prevBtn=document.querySelector("#prevBtn");
const nextBtn=document.querySelector("#nextBtn");


let counter=0;//varible to count slides
const size=slides[0].clientWidth; //varible to hold width of slide

//function to move slide leftward
const slideBack=()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform="translateX("+(-size * counter)+"px)";   
}

//function to move slide rightward
const slideForward=()=>{ 
    if(counter >= slides.length-1){
        carouselSlide.style.transition="transform 0.4s ease-in-out";
        counter=0;
        carouselSlide.style.transform="translateX("+(size * counter)+"px)";
    }else{
        carouselSlide.style.transition="transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform="translateX("+(-size * counter)+"px)";
    }    
}

//function to move slides using arrow keys : left and right
const moveSlide=(e)=>{
    if(e.keyCode===37){
        slideBack();
    } else if(e.keyCode===39){
        slideForward();
    } else {
        return false;
    }
}

//add eventlisteners
nextBtn.addEventListener('click', slideForward);
prevBtn.addEventListener('click', slideBack);
window.addEventListener('keydown', (e)=>{moveSlide(e)});

//adding eventlistener to hamburger icon
hamburger.addEventListener('click', ()=>{
    if(mobileNavUL.classList.contains('hide-ul')){
        mobileNavUL.classList.remove('hide-ul');
        mobileNavUL.classList.add('show-ul');
    } else{
        return false;        
    }   
})

//adding eventlistener to close icon
closeIcon.addEventListener('click', ()=>{    
    if(mobileNavUL.classList.contains('show-ul')){       
        mobileNavUL.classList.add('hide-ul');
        mobileNavUL.classList.remove('show-ul');
    } else {
        return false;
    }   
})