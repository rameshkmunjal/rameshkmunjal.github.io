
let getCardHeader = (project) =>
{
    let div = cre_ele("div");
    div.setAttribute("class", "card-header");
    let btn = cre_ele("button");
    btn.setAttribute("class", "btn");
    
    let type = cre_txt(project.category);
    console.log(type);
    btn.appendChild(type);
    div.appendChild(btn);
    console.log(div);
    return div;
}

let getCardContentBox = (project) =>{
    let div = cre_ele("div");
    div.setAttribute("class", "content-box");
    let p1 = cre_ele("p");
    p1.setAttribute("class", "project-name");
    let p1txt = cre_txt(project.name);
    p1.appendChild(p1txt);
    let p2 = cre_ele("p");
    p2.setAttribute("class", "tech");
    let p2txt = cre_txt(project.tech);
    p2.appendChild(p2txt);

    div.appendChild(p1);
    div.appendChild(p2);
    console.log(div);
    return div;
}

let getCardFooter = (project) =>{
    let div = cre_ele("div");
    div.setAttribute("class", "card-footer");
    let viewBtn = cre_ele('btn');
    viewBtn.setAttribute("class", "btn");
    let a = cre_ele("a");
    let linktxt = cre_txt("View Page");
    a.appendChild(linktxt);
    a.setAttribute("href", project.url);
    viewBtn.appendChild(a);
    div.appendChild(viewBtn);
    return div;
}

let getProjectDisplayCard = (project) =>{   
    
    let div = cre_ele("div");
    let header = getCardHeader(project);
    let contentBox = getCardContentBox(project);
    let footer = getCardFooter(project);

    div.appendChild(header);
    div.appendChild(contentBox);
    div.appendChild(footer);

    return div;
    
}


let init = () =>{
    
    let contentDiv = document.getElementById("content-div");

    for (let i = 0; i < projects.length; i++){
        let card = getProjectDisplayCard(projects[i]);
        card.setAttribute("class", "card");
        contentDiv.appendChild(card);    
    }
    
    
}

window.onload = init;

