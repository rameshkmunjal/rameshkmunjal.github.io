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
    let div = document.createElement("div");    
    div.setAttribute("class", "left-box");
    let p = document.createElement("p");    
    let type = cre_txt(project.category);    
    p.appendChild(type);
    div.appendChild(p);
    
    return div;
}
//right side box of card
let getRightBox = (project) =>{
    let div = document.createElement("div");    
    div.setAttribute("class", "right-box");
    let p = document.createElement("p");   
    p.setAttribute("class", "project-name");
    let ptxt = cre_txt(project.name);
    p.appendChild(ptxt); 
    div.appendChild(p);    
    return div;
}

//creating card and sending back to container

let getProjectDisplayCard = (project) =>{     
    let div = document.createElement("div");
    let leftBox = getLeftBox(project);
    let rightBox = getRightBox(project);
    div.appendChild(leftBox);
    div.appendChild(rightBox); 

    return div;    
}

let addMonthAndYearOfCreation = (arr) =>{
    for (let i = 0; i < arr.length; i++){
        let item = arr[i];
        let dat = new Date(item.created_on);
        let month = dat.toLocaleString('default', { month: 'short' });
        let year = dat.getFullYear();
        item.month = month;
        item.year = year;

    }
    return arr;
}

let getCurrentMonthProjects = (arr) =>{
    let new_arr=arr.filter((item) =>{
        let today = new Date();
        let m = today.toLocaleString('default', { month: 'short' });
        let y = today.getFullYear();
        return item.month === m && item.year === y;
    })
    return new_arr;
}

let getCardAppendedToContainer = (container, newArr) =>{    
    for (let i = 0; i < newArr.length; i++){
        console.log
        let card = getProjectDisplayCard(newArr[i]);
        
        card.setAttribute("class", "card");
        container.appendChild(card);   
    }
}
//controller function to run entire page

let init = () =>{    
    let container = document.getElementById("container");
    projects = addMonthAndYearOfCreation(projects);
    console.log(projects);
    let newArr = getCurrentMonthProjects(projects);
    console.log(newArr);
    container = getCardAppendedToContainer(container, newArr);   
    addClickEventToCard(newArr);
}

//window onload event listener
window.onload = init;

