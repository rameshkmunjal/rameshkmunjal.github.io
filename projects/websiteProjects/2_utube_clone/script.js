let container=document.getElementById("container");

createHomePage();

function createHomePage(){
    console.log("function : createHomePage");
    let nav=createNavSection();
    let tagsSection=createTagsSection();
    let main=createMainSection();
    container.appendChild(nav);
    container.appendChild(tagsSection);
    container.appendChild(main);
}

function createNavSection(){
    let nav=document.createElement('nav');
    nav.setAttribute('class', 'nav');
    nav.innerText="This is nav";
    return nav;
}

function createTagsSection(){
    let tagsSection=document.createElement('section');
    tagsSection.setAttribute('class', 'tags-section');
    let uniqArr=findUniqTags();
    
    uniqArr.map(tag=>{
        let tagSpan=document.createElement('span');
        tagSpan.setAttribute('class', 'tag-span');
        tagSpan.innerText=tag;
        tagsSection.appendChild(tagSpan);
    })
    
    return tagsSection;
}

function findUniqTags(){
    let arr=[];
    let uniqArr=[];
    webData.map(item=>{
        arr=[...arr, ...item.tags];
    })
    console.log(arr);
    arr.map(i=>{
        if(uniqArr.indexOf(i) === -1){
            uniqArr.push(i);
        }
    })
    console.log(uniqArr);
    return uniqArr;
}

function createMainSection(){
    let div=document.createElement('div');
    div.setAttribute('class', 'main');
    webData.map(item=>{
        //console.log(item.title);
        let card=document.createElement('div');
        card.setAttribute('class', 'card');
        card=appendImage(card, item);
        card=appendContent(card, item);
        
        div.append(card);
    })
    return div;
}

function appendImage(card, item){
    let img=document.createElement('img');
    img.setAttribute('src', item.poster);
    card.appendChild(img);
    return card;
}

function appendContent(card, item){
    let contentDiv=document.createElement('div');
    contentDiv.setAttribute('class', 'content-div');
    let title=document.createElement('h5');
    title.setAttribute('class', 'title');
    title.innerText=item.title;
    contentDiv.appendChild(title);
    let producer=document.createElement('p');
    producer.setAttribute('class', 'producer');
    producer.innerText=item.producer;
    contentDiv.appendChild(producer);

    let viewDiv=document.createElement('div');
    let viewSpan=document.createElement('span');
    viewSpan.setAttribute('class', 'view-span');
    let views=item.views+" "+"views";
    viewSpan.innerText=views;
    viewDiv.appendChild(viewSpan);
    let timeSpan=document.createElement('span');
    timeSpan.setAttribute('class', 'time-span');
    timeSpan.innerText="3 days ago";
    viewDiv.appendChild(timeSpan);
    contentDiv.appendChild(viewDiv);
    card.appendChild(contentDiv);
    return card;
}