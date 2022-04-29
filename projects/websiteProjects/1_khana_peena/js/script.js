import { recipeData } from "./data.js";
import { $ACP, $CE, $GID, $setClass, $setId } from "./util.js";
import {
    createHeader, 
    createSidebarUL, 
    createRecipesList,
    emptyContainer
} from './helper.js';

createHomePage();
let links=document.querySelectorAll(".nav-link");

links.forEach(link=>{
    link.addEventListener('click', ()=>catchLinkText(link.innerText));
});

function catchLinkText(catchWord){         
    console.log(catchWord);       
    if(catchWord=="Home"){        
        createHomePage();
    } else if(catchWord=="Tags"){
        console.log(catchWord);
        createTagsPage();
    } else if(catchWord=="About"){ 
        console.log(catchWord);       
        createAboutPage();
    }else if(catchWord=="Recipes"){
        console.log(catchWord);
        createRecipesPage();
    }else {
        console.log("There is some error");
    }
}
 
function createHomePage(){ 
    let container=emptyContainer();
    let header=createHeader();

    let recipesContainer=$CE('div');
    $setClass(recipesContainer, 'recipes-container');

    let sidebar=$CE('div');
    $setClass(sidebar, 'tags-container');    
    sidebar=createSidebarUL(sidebar, recipeData);
    
    
    let recipesList=createRecipesList(recipeData.length);
    //console.log(recipesList);

    $ACP(container, header);
    $ACP(recipesContainer, sidebar);
    $ACP(recipesContainer, recipesList);

    $ACP(container, recipesContainer);
}

function createAboutPage(){
    console.log("createAboutPage funciton invoked");
    let container=emptyContainer();

    console.log(container);
    let aboutContainer=$CE('div');
    $setClass(aboutContainer, 'about-page');
    let aboutTextDiv=$CE('article');
   

    let aboutH2=$CE('h2');
    aboutH2.innerText=`I'm baby coloring book poke taxidermy`;    
    let p1=$CE('p');
    p1.innerText="Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia. ";
    let p2=$CE('p');
    p2.innerText="Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.";
    let a=$CE('a');
    a.innerText="Contact";
    $setClass(a, 'btn');

    $ACP(aboutTextDiv, aboutH2);
    $ACP(aboutTextDiv, p1);
    $ACP(aboutTextDiv, p2);
    $ACP(aboutTextDiv, a);
    console.log(aboutTextDiv);

    let aboutImage=$CE('img');
    $setClass(aboutImage, "img about-img");
    aboutImage.setAttribute("src", "./assets/about.jpeg");
    aboutImage.setAttribute('alt', "about image");
    

    $ACP(aboutContainer, aboutTextDiv);
    $ACP(aboutContainer, aboutImage);
    console.log(aboutContainer);

    let recipeDiv=$CE('div');
    let h5=$CE('h5');
    h5.innerText="Look for this awesomesouce!";
    $setClass(h5, "featured-title");
    /*
    let data=recipeData;
    data.length=3;
    */
    let recipeList=createRecipesList(3);
    
    $ACP(recipeDiv, h5);
    $ACP(recipeDiv, recipeList);    

    $ACP(container, aboutContainer);
    $ACP(container, recipeDiv);
}

function createTagsPage(){
    let container=emptyContainer();
    container.innerText="This is Tags Page";
}

function createRecipesPage(){
    let container=emptyContainer();    

    let recipesContainer=$CE('div');
    $setClass(recipesContainer, 'recipes-container');

    let sidebar=$CE('div');
    $setClass(sidebar, 'tags-container'); 
       
    sidebar=createSidebarUL(sidebar, recipeData);
    
    console.log(recipeData);    
    let recipesList=createRecipesList(recipeData.length);
        
    $ACP(recipesContainer, sidebar);
    $ACP(recipesContainer, recipesList);

    $ACP(container, recipesContainer);
}
 



