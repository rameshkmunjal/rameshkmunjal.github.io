//adding click event to each card having class card
let addClickEventToCard = (projectsArr) =>{
   
    document.querySelectorAll('.card').forEach((item, index) =>{
        item.addEventListener('click', function ()
        {
            window.location.href = projectsArr[index].url;
        })
    })
}
//left side box of card
let getLeftBox = (project) =>{
    let div = cre_ele("div");    
    setClass(div, "left-box");
    let p = cre_ele("p");
    
    let type = cre_txt(project.category);
    
    p.appendChild(type);
    div.appendChild(p);
    
    return div;
}
//right side box of card
let getRightBox = (project) =>{
    let div = cre_ele("div");    
    setClass(div, "right-box");
    let p = cre_ele("p");   
    setClass(p, "project-name");
    let ptxt = cre_txt(project.name);
    p.appendChild(ptxt);    

    div.appendChild(p);    
    return div;
}

//creating card and sending back to container

let getProjectDisplayCard = (project) =>{   
    
    let div = cre_ele("div");
    let leftBox = getLeftBox(project);
    let rightBox = getRightBox(project);

    div.appendChild(leftBox);
    div.appendChild(rightBox);
    

    return div;
    
}
//controller function to run entire page

let init = () =>{    
    let container = $id("container");
    const projectsArr= projects.reverse();
    console.log(projectsArr);
    for (let i = 0; i < projectsArr.length; i++){
        console.log
        let card = getProjectDisplayCard(projectsArr[i]);
        
        setClass(card, "card");
        container.appendChild(card);   
    }
    
    addClickEventToCard(projectsArr);
}

//window onload event listener
window.onload = init;

