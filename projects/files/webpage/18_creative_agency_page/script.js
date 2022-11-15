let hamburger=document.querySelector('.hamburger-div img');
hamburger.addEventListener('click', showHamburgerUL);
let closeBtn=document.querySelector('.close-btn');
closeBtn.addEventListener('click', hideHamburgerUL);
let leftIconDiv=document.querySelector('.left-icon-div');
leftIconDiv.addEventListener('click', slideBack);
let rightIconDiv=document.querySelector('.right-icon-div');
rightIconDiv.addEventListener('click', slideForward);
let carouselSlide=document.querySelector('.slider-div');
let slides=document.querySelectorAll('.slide');

//function to open nav slider
function showHamburgerUL(){
    let hamburgerUL=document.querySelector('.hamburger-ul');
    if(hamburgerUL.classList.contains('hide')){
        hamburgerUL.classList.remove('hide');
        hamburgerUL.classList.add('show');
    } else {
        return;
    }       
}

//function to close nav slider
function hideHamburgerUL(){
    let hamburgerUL=document.querySelector('.hamburger-ul');
    if(hamburgerUL.classList.contains('show')){
        hamburgerUL.classList.remove('show');
        hamburgerUL.classList.add('hide');
    } else {
        return;
    }
}

let counter=0;//varible to count slides
const size=slides[0].clientWidth; //varible to hold width of slide
console.log(size);

//function to move slide leftward
function slideBack(){
    console.log("slideBack function");
    console.log(size);
    if(counter <= 0) return;
    carouselSlide.style.transition="transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform="translateX("+(-size * counter)+"px)";   
}

//function to move slide rightward
function slideForward(){ 
    console.log("slideForward function");
    console.log(size);
    if(counter >= slides.length-1){
        carouselSlide.style.transition="transform 0.6s ease-in-out";
        counter=0;
        carouselSlide.style.transform="translateX("+(size * counter)+"px)";
    }else{
        carouselSlide.style.transition="transform 0.6s ease-in-out";
        counter++;
        carouselSlide.style.transform="translateX("+(-size * counter)+"px)";
    }    
}

