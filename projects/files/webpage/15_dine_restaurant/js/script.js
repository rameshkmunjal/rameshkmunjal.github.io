const eventsArray=[
    {        
        heading:"family gathering",
        para:`
        We love catering for entire families. So please bring everyone along for a special meal with your 
        loved ones. We’ll provide a memorable experience for all.
        `,
        src:`   
                <source srcset="./images/homepage/family-gathering-mobile.jpg"  media="(max-width: 500px)">        
                <source srcset="./images/homepage/family-gathering-tablet.jpg"  media="(max-width: 992px)">        
                <img src="./images/homepage/family-gathering-desktop.jpg" alt="family gathering image">
                `
    },
    {        
        heading:"special events",
        para:`
            Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
            We’ll be sure to mark your special date with an unforgettable meal.
        `,
        src:`
            <source srcset="./images/homepage/social-events-mobile.jpg"  media="(max-width: 500px)">        
            <source srcset="./images/homepage/social-events-tablet.jpg"  media="(max-width: 992px)">        
            <img src="./images/homepage/social-events-desktop.jpg" alt="social-events image">
            `
    },
    {        
        heading:"social events",
        para:`
            Are you looking to have a larger social event? No problem! We’re more than happy to cater for big 
            parties. We’ll work with you to make your event a hit with everyone.
        `,
        src:`
            <source srcset="./images/homepage/special-events-mobile.jpg"  media="(max-width: 500px)">        
            <source srcset="./images/homepage/special-events-tablet.jpg"  media="(max-width: 992px)">        
            <img src="./images/homepage/special-events-desktop.jpg" alt="special-events image">
            `
    },
]

let picture=document.querySelector('.events-img-container picture');
let heading=document.querySelector('.events-div h2');
let para=document.querySelector('.events-div p');


const links=document.querySelectorAll(".events-ul li");
links.forEach(link=>{
    link.addEventListener('click', ()=>changeContents(link));
})

function changeContents(link){
    console.log(link.innerText.toLowerCase()); 
    let term=  link.innerText.toLowerCase();
    for(let event of eventsArray){
        if(event.heading===term){
            picture.innerHTML="";
            picture.innerHTML=event.src;
            heading.innerText=event.heading;
            para.innerText=event.para; 
        }
    } 
}



