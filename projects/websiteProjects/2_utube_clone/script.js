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
    let nav=document.createElement('section');
    nav.setAttribute('class', 'nav-section');

    let logoDiv=createLogoDiv();    
    nav.appendChild(logoDiv);
    let searchDiv=createSearchDiv();
    nav.appendChild(searchDiv); 
    let rightNav=createRightNav();
    nav.appendChild(rightNav); 

    return nav;
}

function createLogoDiv(){
    let logoDiv=document.createElement('div');
    logoDiv.setAttribute('class', 'logo-div');

    let logo=document.createElement('img');
    logo.setAttribute('src', "./images/youtube.png");
    logo.setAttribute('class', 'logo');

    logoDiv.appendChild(logo);
    return logoDiv;
}

function createSearchDiv(){
    let searchDiv=document.createElement('div');
    searchDiv.setAttribute('class', 'search-div');
    let searchInputBox=document.createElement('input');
    searchInputBox.setAttribute('class', 'search-input-box');
    let searchBtn=document.createElement('span');
    searchBtn.setAttribute('class', 'search-btn');
    searchBtn.innerHTML='<i class="fas fa-search"></i>';

    searchDiv.appendChild(searchInputBox);
    searchDiv.appendChild(searchBtn);

    return searchDiv;
}

function createRightNav(){
    let rightNav=document.createElement('div');
    rightNav.setAttribute('class', 'right-nav');

    let videoSpan=document.createElement('span');
    videoSpan.setAttribute('class', 'video-span');
    videoSpan.innerHTML='<i class="fas fa-video"></i>';
    rightNav.appendChild(videoSpan);

    let appsIcon=document.createElement('span');
    appsIcon.setAttribute('class', 'apps-span');
    appsIcon.innerHTML='<i class="fab fa-app-store"></i>';
    rightNav.appendChild(appsIcon);

    let bellBtn=document.createElement('span');
    bellBtn.setAttribute('class', 'bell-btn');
    bellBtn.innerHTML='<i class="fas fa-bell"></i>';
    rightNav.appendChild(bellBtn);

    let img=document.createElement('img');
    img.setAttribute('src', './images/rkm.jpg');
    img.setAttribute('class', 'user-image');
    rightNav.appendChild(img);

    return rightNav;
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
    let arr=shuffle(webData);
    arr.map(item=>{
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
    let producer=document.createElement('span');
    producer.setAttribute('class', 'producer');
    producer.innerText=item.producer;
    let tickSpan=document.createElement('span');
    tickSpan.setAttribute('class', 'tick-span');
    tickSpan.innerHTML='<i class="fas fa-check-circle"></i>';
    contentDiv.appendChild(producer);
    contentDiv.appendChild(tickSpan);

    let viewDiv=document.createElement('div');
    let viewSpan=document.createElement('span');
    viewSpan.setAttribute('class', 'view-span');
    let views=item.views+" "+"views";
    viewSpan.innerText=views;
    viewDiv.appendChild(viewSpan);
    let timeSpan=document.createElement('span');
    timeSpan.setAttribute('class', 'time-span');
    let randomNumber=Math.floor(Math.random()*365);
    timeSpan.innerText=`${randomNumber} days ago`;
    viewDiv.appendChild(timeSpan);
    contentDiv.appendChild(viewDiv);
    card.appendChild(contentDiv);
    return card;
}

 /**
* Shuffles array in place. ES6 version
* @param {Array} a items An array containing the items.
*/
function shuffle(a) {
   for (let i = a.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [a[i], a[j]] = [a[j], a[i]];
   }
   return a;
}

