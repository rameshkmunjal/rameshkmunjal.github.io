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
    let name =document.createTextNode(project.name);    
    p.appendChild(name);
    div.appendChild(p);
    
    return div;
}
//bottom side box of card
let getBottomBox = () =>{
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
    let bottomBox = getBottomBox();
    div.appendChild(upperBox);
    div.appendChild(bottomBox); 

    return div;    
}
/*
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
/*
    


*/
let displayProjects=(projects)=>{
    console.log(projects);
    let container = document.getElementById("container"); 
    container.innerHTML="";   
    console.log(projects);
    projects=projects.reverse();
    
    container = getCardAppendedToContainer(container, projects);   
    addClickEventToCard(projects);
}

let findProjectType=(txt)=>{
    console.log(txt);
    if(txt==='HTML/CSS'){
        displayProjects(cssData);
        console.log("if block reached", txt);
    } else if(txt==='VanillaJs'){
        displayProjects(jsData);
        console.log("if block reached", txt);
    } else if(txt==='Websites'){
        displayProjects(websiteData);
        console.log("if block reached", txt);
    } else {
        console.log("something wrong with nav selection");
    }
}
let removeActiveClass=(items)=>{    
    for(let item of items){
        item.classList.remove('active');
    }
}
let addActiveClass=(item)=>{
    item.classList.add('active');
}
let clickHandler=(e)=>{
    e.preventDefault();
    console.log(e.target.innerText);
    let items=document.querySelectorAll('.li-item');
    removeActiveClass(items);
    let item=e.target;
    addActiveClass(item);
    addClickToLinks();
    let itemTxt=e.target.innerText;
    findProjectType(itemTxt);
}

let addClickToLinks=()=>{
    let items=document.querySelectorAll('.li-item');
    for(let item of items){
        item.addEventListener('click', clickHandler);
    }
}
let findActiveClass=()=>{
    let items=document.querySelectorAll('.li-item');
    console.log(items);
    for(let item of items){
        if(item.classList.contains('active')){
            console.log(item.innerText);
            let itemTxt=item.innerText;
            findProjectType(itemTxt);
        } 
    }
}

let init = () =>{    
    findActiveClass();
    addClickToLinks();
}


//window onload event listener
window.onload = init;

