import { instructionsData, ingredientsData, toolsData, recipeData } from "./data.js";
import {$GID, $ACP, $CE, $setClass } from "./util.js";


    
export const createHeader=()=>{
        let hero=$CE('div');       
        $setClass(hero, 'hero');
        
        let heroContainer=$CE('div');
        heroContainer.setAttribute('class',  "hero-container");
        
        let heroTextDiv=$CE('div');
        heroTextDiv.setAttribute('class', "hero-text");
        let h1=$CE('h1');        
        h1.innerText="KHANA-PEENA";
        heroTextDiv.appendChild(h1);
        let h4=$CE('h4');
        h4.innerText="Naal Kujh Nahin Jaana";
        
        $ACP(heroTextDiv, h4);        
        $ACP(heroContainer, heroTextDiv);
        $ACP(hero, heroContainer);

        return hero;
}

export const createSidebarUL=(sidebar, recipeData)=>{
        let h4=$CE('h4');
        h4.innerText="Receipes";
        $ACP(sidebar, h4);

        let tagsList=$CE('div');
        $setClass(tagsList, 'tags-list');

        for(let i=0; i<recipeData.length; i++){
                let a=$CE('a');
                a.innerText=recipeData[i].name;
                $ACP(tagsList, a);
        }
        $ACP(sidebar, tagsList);

        return sidebar;
}

export const createRecipesList=(limit)=>{ 
        let recipesList=$CE('div');
        $setClass(recipesList, 'recipes-list');               
        
        for(let i=0; i<limit; i++){
                let a = $CE('a');
                $setClass(a, 'recipe');
                let img=$CE('img');
                img.setAttribute('src', recipeData[i].imgUrl);
                img.setAttribute('alt', 'recipe image');
                img.setAttribute('class', 'img recipe-img');

                let h5=$CE('h5');
                h5.innerText=recipeData[i].name;

                let caption=$CE('p');
                let prepSpan=$CE('span');
                prepSpan.innerText=`Prep : ${recipeData[i].prepTime}`;
                let cookSpan=$CE('span');
                cookSpan.innerText=`Cook : ${recipeData[i].cookTime}`;
                $ACP(caption, prepSpan);
                $ACP(caption, cookSpan);

                $ACP(a, img);
                $ACP(a, h5);
                $ACP(a, caption);
                a.addEventListener('click', ()=>showSingleRecipePage(recipeData[i]));
                $ACP(recipesList, a);
        }
   return recipesList;
}

export const emptyContainer=()=>{
        console.log("empty");
    let container=$GID('container');
    console.log(container);
    while (container.firstChild) {
            container.removeChild(container.lastChild);
    }
    return container;
}

function showSingleRecipePage(recipe){
     console.log(recipe);
     let container=emptyContainer();  
     console.log(container);
     //let page=$CE('div');
     //$setClass(page, 'page');

     let recipePage=$CE('div');
     $setClass(recipePage, 'recipe-page');

     let recipeHero=$CE('section');
     $setClass(recipeHero, 'recipe-hero');
     let img=$CE('img');
     $setClass(img, 'img recipe-hero-img');
     img.setAttribute('src', recipe.imgUrl);
     img.setAttribute('alt', 'recipe image');
     $ACP(recipeHero, img);

     let recipeInfo=$CE('article');
     $setClass(recipeInfo, 'recipe-info');
     let h2=$CE('h2');
     h2.innerText=recipe.name;
     let p=$CE('p');
     p.innerText="Shabby chic humblebrag banh mi bushwick, banjo kale chips"+
     "meggings. Cred selfies sartorial, cloud bread disrupt blue bottle"+
     "seitan. Dreamcatcher tousled bitters, health goth vegan venmo"+
     "whatever street art lyft shabby chic pitchfork beard. Drinking"+
     "vinegar poke tbh, iPhone coloring book polaroid truffaut tousled"+
     "ramps pug trust fund letterpress. Portland four loko austin"+
     "chicharrones bitters single-origin coffee. Leggings letterpress"+
     "occupy pour-over.";
     $ACP(recipeInfo, h2);
     $ACP(recipeInfo, p);

     $ACP(recipePage, recipeHero);
     $ACP(recipePage, recipeInfo);

     let recipeContent=$CE('section');
     $setClass(recipeContent, 'recipe-content');
     let contentArticle=createRecipeContent(recipe.id);
     console.log(contentArticle);
     console.log(recipeContent);
     $ACP(recipeContent, contentArticle);

     let secondArticle = $CE('article');
     $setClass(secondArticle, "second-column");
     let ingredientDiv=createIngredientsDiv(recipe.id);
     let toolDiv=createToolsDiv(recipe.id);
     $ACP(secondArticle, ingredientDiv);
     $ACP(secondArticle, toolDiv);
     $ACP(recipeContent, secondArticle);

     $ACP(container, recipePage);
     $ACP(container, recipeContent);

}

function createRecipeContent(id){
     
     let article=$CE('article');
     let h4=$CE('h4');
     h4.innerText="Instructions";
     $ACP(article, h4);

     let obj=instructionsData.find(element=>Number(element.id)=== id);
     console.log(obj.step1);
     
     for(let i in obj){
        if(i=="id"){
                continue;
        }
        let si=$CE('div');
        $setClass(si, 'single-instruction');
        let header=$CE('header');
        let s=$CE('p');
        s.innerText=i;
        let div=$CE('div');
        $ACP(header, s);
        $ACP(header, div);
        let p=$CE('p');
        p.innerText=obj[i];


        $ACP(si, header);
        $ACP(si, p);
        $ACP(article, si);
     }
     
     return article;
}

function createIngredientsDiv(id){
    let ingredientsDiv=$CE('div');    
    let h4=$CE('h4');
     h4.innerText="Ingredients";
     $ACP(ingredientsDiv, h4);

     let obj=ingredientsData.find(element=>Number(element.id)=== id);
     for(let i in obj){
        if(i=="id"){
            continue;
        }
        let p=$CE('p');
        $setClass(p, "single-ingredient");
        p.innerText=obj[i];
        $ACP(ingredientsDiv, p);
      }
     
     return ingredientsDiv;

}

function createToolsDiv(id){
        let toolsDiv=$CE('div');    
        let h4=$CE('h4');
         h4.innerText="Tools";
         $ACP(toolsDiv, h4);
        console.log(toolsData);
         let obj=toolsData.find(element=>Number(element.id)=== id);
         console.log(obj);
         for(let i in obj){
            if(i=="id"){
                continue;
            }
            let p=$CE('p');
            $setClass(p, "single-tool");
            p.innerText=obj[i];
            $ACP(toolsDiv, p);
          }
         
         return toolsDiv;
    
    }