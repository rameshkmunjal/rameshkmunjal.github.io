let projectContainer=document.querySelector('.project-container');
let displaySection=document.createElement('section');
displaySection.classList.add('display-section');
let h2=document.createElement('h2');
h2.innerText="Website Projects";
projectContainer.appendChild(h2);
projectContainer.appendChild(displaySection);
console.log(wsData);

wsData.map(project=>{
    let card=document.createElement('div');
    card.classList.add('card');
    let img=document.createElement('img');
    img.setAttribute('src', project.imgsrc);
    img.classList.add('project-image');
    let title=document.createElement('h3');
    title.innerText=project.name;
    card.appendChild(img);
    card.appendChild(title);
    displaySection.appendChild(card);
})