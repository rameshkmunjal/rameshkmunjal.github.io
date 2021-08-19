let getProjectDisplayCard = (project) =>{
    let div = document.createElement("div");

    let imgBox = document.createElement("div");
    imgBox.setAttribute("class", "img-box");
    
    let h2 = document.createElement("h2");
    let h2txt = document.createTextNode(project.name);
    h2.appendChild(h2txt);
    imgBox.appendChild(h2);

    let contentBox = document.createElement("div");
    contentBox.setAttribute("class", "content-box");
    
    let btn = document.createElement("button");
    btn.setAttribute("class", "view-btn");
    let a = document.createElement("a");
    let linktxt = document.createTextNode("View Page");
    a.appendChild(linktxt);
    a.setAttribute("href", project.url);
    btn.appendChild(a);
    contentBox.appendChild(btn);

    div.appendChild(imgBox);
    div.appendChild(contentBox);
    return div;
    
}


let init = () =>{
    //console.log(projects);
    let contentDiv = document.getElementById("content-div");

    for (let i = 0; i < projects.length; i++){
        let card = getProjectDisplayCard(projects[i]);
        card.setAttribute("class", "card");
        contentDiv.appendChild(card);    
    }
    
    
}

window.onload = init;

