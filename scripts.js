/*
    * utility functions


*/
import { $SET_CLASS, $GID, $CE, $APC } from './util.js';

import {
    projectTypes, 
    skillsTypes, 
    jsData,
    wdData,
    wsData,
    cbData,
    jqData, 
    gamesData
} from './CONSTANTS.js';


loadHomePage();

function loadHomePage (){
    let main=$GID('main-section');
    main.innerHTML="";
    let projectContainer=createProjectContainer();
    let skillsContainer=createSkillsContainer();
   
   main=$APC(main, projectContainer); 
   main=$APC(main, skillsContainer);  
}

function createProjectContainer(){
    let projectContainer=$CE('project-container'); 
   $SET_CLASS(projectContainer, 'project-container');

   let h1=$CE('H1');
   h1.innerText="Projects";
   let projectGallery=createProjectGallery();

   $APC(projectContainer, h1);
   $APC(projectContainer, projectGallery);
   return projectContainer;
}

function createProjectGallery(){
    let projectGallery=$CE('div');
    $SET_CLASS(projectGallery, 'project-gallery');

    projectTypes.forEach(project=>{
        let btn=$CE('div');
        $SET_CLASS(btn, 'btn');        
        btn.innerText=project;
        project=project.toLowerCase();
        btn.addEventListener("click", ()=>displayProjects(project));
        
        $APC(projectGallery, btn);                
    })

    return projectGallery;
}

function createSkillsContainer(){
    let skillsContainer=$CE('skills-container'); 
   $SET_CLASS(skillsContainer, 'skills-container');

   let h1=$CE('H1');
   h1.innerText="Skills";
   let skillsGallery=createSkillsGallery();

   $APC(skillsContainer, h1);
   $APC(skillsContainer, skillsGallery);
   return skillsContainer;
}

function createSkillsGallery(){
    let skillsGallery=$CE('div');
    $SET_CLASS(skillsGallery, 'skills-gallery');

    skillsTypes.forEach(skill=>{
        let box=$CE('div');
        $SET_CLASS(box, 'box');

        let innerBox=$CE('div');
        $SET_CLASS(innerBox, 'inner-box');

        let img=$CE('img');
        img.setAttribute('src', skill.url);
        img.setAttribute('alt', 'skill-image');
        $APC(innerBox, img);

        let captionDiv=$CE('div');
        $SET_CLASS(captionDiv, 'caption-div');
        captionDiv.innerText=skill.name;

        $APC(box, innerBox);
        $APC(box, captionDiv);

        $APC(skillsGallery, box);                
    })

    return skillsGallery;

}

function displayProjects(catchWord){
    console.log(catchWord);
    switch(catchWord){
        case "vanillajs": {
            createProjectLinks(jsData);
            break;
        }
        case "websites": {
            createProjectLinks(wsData);
            break;
        }
        case "web design":{
            createProjectLinks(wdData);
            break;
        }
        case "css battles":{
            createProjectLinks(cbData);
            break;
        }
        case "jquery":{
            createProjectLinks(jqData);
            break;
        }
        case "games":{
            createProjectLinks(gamesData);
            break;
        }
        default:
            console.log("unknown catchword");
            return false;
    }
}

function createProjectLinks(arr){
    console.log(arr);
    let main=$GID('main-section');
    main.innerHTML="";
    let navbar=$CE('div');
    $SET_CLASS(navbar, 'navbar');

    let backBtn=$CE('button');
    $SET_CLASS(backBtn, 'back-btn');
    backBtn.innerText="Back";
    backBtn.addEventListener('click', ()=>goBackToHome())
    $APC(navbar, backBtn);

    let projectContainer=$CE('div');
    $SET_CLASS(projectContainer, 'project-container');
    let projectGallery=$CE('div');
    $SET_CLASS(projectGallery, 'project-gallery');

    
    if(arr.length === 0){        
        let h1=$CE('h1');
        h1.style.marginTop="50px";
        h1.style.textAlign="center";
        h1.innerText="Sorry ! Currently No Project to display.";
        $APC(main, navbar);
        $APC(main, h1);
        
        return ;
    } 

    arr.forEach((project, index)=>{
        let box=$CE('div');
        $SET_CLASS(box, 'box');
        box.addEventListener('click', ()=> displayPage(project));

        let innerBox=$CE('div');
        $SET_CLASS(innerBox, 'inner-box');
        let img=$CE('img');
        img.setAttribute('src', project.imgsrc);
        $APC(innerBox, img);

        let captionDiv=$CE('div');
        $SET_CLASS(captionDiv, 'caption-div');
        captionDiv.innerText=project.name;

        $APC(box, innerBox);
        $APC(box, captionDiv);

        $APC(projectGallery, box);
    })
    $APC(projectContainer, navbar);
    $APC(projectContainer, projectGallery);
    $APC(main, projectContainer);
}

function goBackToHome(){
    loadHomePage();
}