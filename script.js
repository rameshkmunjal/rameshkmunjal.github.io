//https://hashnode.com/bootcamp/rkm

//adding click event to each card having class card
let addClickEventToCard = (projectsArr) =>{   
    document.querySelectorAll('.card').forEach((item, index) =>{
        item.addEventListener('click', function ()
        {
            window.location.href = projectsArr[index].url;
        })
    })
}
//upper side box of card
let getUpperBox = (project) =>{
    let div = document.createElement("div");    
    div.setAttribute("class","upper-box");
    let p = document.createElement("p");    
    let name = cre_txt(project.name);    
    p.appendChild(name);
    div.appendChild(p);
    
    return div;
}
//bottom side box of card
let getBottomBox = (project) =>{
    let div = document.createElement("div");    
    div.setAttribute("class", "bottom-box");
    let btn = document.createElement("button");   
    btn.setAttribute("class", "view-btn");
    let btnText=document.createTextNode("view");
    btn.appendChild(btnText);
     
    div.appendChild(btn);    
    return div;
}

//creating card and sending back to container

let getProjectDisplayCard = (project) =>{     
    let div = document.createElement("div");
    let upperBox = getUpperBox(project);
    let bottomBox = getBottomBox(project);
    div.appendChild(upperBox);
    div.appendChild(bottomBox); 

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
/*
let getCurrentMonthProjects = (arr) =>{
    let new_arr=arr.filter((item) =>{
        let today = new Date();
        let m = today.toLocaleString('default', { month: 'short' });
        let y = today.getFullYear();
        return item.month === m && item.year === y;
    })
    return new_arr;
}
*/
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
    projects=projects.reverse();
    
    container = getCardAppendedToContainer(container, projects);   
    addClickEventToCard(projects);
}

//window onload event listener
window.onload = init;

