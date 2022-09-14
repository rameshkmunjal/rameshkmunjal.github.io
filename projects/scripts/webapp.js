import {totalData} from '../data/data.js';
import { $APC, $CE } from './util.js';

const webappData=totalData.filter(item=>{
    return item.category==='webapp';
})
const heading="Web Apps";
showWebAppProjects();

function showWebAppProjects(){
    let projectContainer=document.querySelector('.project-container');
    let displaySection=$CE('section');
    displaySection.classList.add('display-section');
    projectContainer=addHeading(projectContainer);
    displaySection=appendData(displaySection);
    console.log(displaySection);
    $APC(projectContainer, displaySection);
}

function addHeading(projectContainer){   
    let h2=$CE('h2');
    h2.innerText=heading;
    $APC(projectContainer, h2);    
    return projectContainer;
}

function appendData(displaySection){
    console.log(webappData);
    webappData.reverse().map(project=>{
        console.log(project);
        let card=$CE('div');
        card.classList.add('card');
        let img=$CE('img');
        console.log(project.imgsrc);
        img.setAttribute('src', project.imgsrc);
        img.classList.add('project-image');
        let link=$CE('a');
        link.setAttribute('href', project.url);
        let title=$CE('span');    
        title.innerText=project.name;
        let tech=$CE('span');    
        tech.innerText=project.tech;    
        $APC(link, title);
        $APC(link, tech);
        
        $APC(card, img);
        $APC(card, link);
        displaySection.appendChild(card);
    })
    return displaySection;
}
