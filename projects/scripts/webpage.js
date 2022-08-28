import {totalData} from '../data/data.js';
let projectContainer=document.querySelector('.project-container');
let displaySection=document.createElement('section');
displaySection.classList.add('display-section');
let h2=document.createElement('h2');
h2.innerText="Web Pages";
projectContainer.appendChild(h2);
projectContainer.appendChild(displaySection);
//console.log(htmlData);
const webpageData=totalData.filter(item=>{
    return item.category==='webpage';
})

const webappData=totalData.filter(item=>{
    return item.category==='webapp';
})

webpageData.map(project=>{
    console.log(project);
    let card=document.createElement('div');
    card.classList.add('card');
    let img=document.createElement('img');
    console.log(project.imgSrc);
    img.setAttribute('src', project.imgsrc);
    img.classList.add('project-image');
    let link=document.createElement('a');
    link.setAttribute('href', project.url);
    let title=document.createElement('span');    
    title.innerText=project.name;
    let tech=document.createElement('span');    
    tech.innerText=project.tech;
    link.appendChild(title);
    link.appendChild(tech);

    card.appendChild(img);
    card.appendChild(link);
    displaySection.appendChild(card);
})