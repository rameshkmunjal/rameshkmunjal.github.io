import {totalData} from '../data/data.js';
import { $APC, $CE } from './util.js';

const templatesData=totalData.filter(item=>{
    return item.category==='templates';
})
const heading="Templates";
if(templatesData.length > 0){
    showTemplatesProjects();
} else {
    showMessage();
}


function showTemplatesProjects(){
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
    console.log(templatesData);
    templatesData.reverse().map(project=>{
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


function showMessage(){
    let projectContainer=document.querySelector('.project-container');
    let displaySection=$CE('section');
    displaySection.classList.add('display-section');
    projectContainer=addHeading(projectContainer);
    appendMessage(projectContainer);
}

function appendMessage(projectContainer){
    let h2=$CE('h2');
    h2.innerText="No Project to display as of now";
    $APC(projectContainer, h2);
}