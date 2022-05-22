let projectContainer=document.querySelector('.project-container');
let displaySection=document.createElement('section');
displaySection.classList.add('display-section');
let h2=document.createElement('h2');
h2.innerText="VanillaJS Projects";
projectContainer.appendChild(h2);
projectContainer.appendChild(displaySection);
console.log(jsData);

jsData.map(project=>{
    let card=document.createElement('div');
    card.classList.add('card');
    let img=document.createElement('img');
    img.setAttribute('src', project.imgsrc);
    img.classList.add('project-image');
    let title=document.createElement('a');
    title.setAttribute('href', project.url);
    title.innerText=project.name;
    card.appendChild(img);
    card.appendChild(title);
    displaySection.appendChild(card);    
})