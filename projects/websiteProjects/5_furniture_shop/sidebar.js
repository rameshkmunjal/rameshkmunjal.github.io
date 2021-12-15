import { $APC,  $CESC, $CE } from "./util.js";
import { categories, rating, brands } from "./data.js";


export const createAndAppendSidebar=(main)=>{   
    let sidebar=$CESC('aside', 'sidebar'); 
    sidebar=createAndAppendFiltersInLoop(sidebar);   
    $APC(main, sidebar);
    return main;
}


function createAndAppendFiltersInLoop(sidebar){
    let filterDiv=$CESC('div', 'filter-div');
    let h2=$CESC('h2', 'filter-div-heading');
    h2.innerText="shop by";
    $APC(filterDiv, h2);
    let fd=$CE('div');
    let filterArr =["category", "rating", "brands"];
    for(let i=0; i< filterArr.length; i++){
        if(filterArr[i]==="category"){
            fd=createFilters(categories, "category");
        } else if(filterArr[i]==="rating"){
            fd=createFilters(rating, "rating");
        }else if(filterArr[i]==="brands"){
            fd=createFilters(brands, "brands");
        }
        $APC(filterDiv, fd);
    }   
    $APC(sidebar, filterDiv);
    return sidebar;
}

function createFilters(arr, heading){
    let div=$CESC('div', 'filter-sub-div');
    let h3=$CESC('h3', "filter-heading");
    h3.innerText=heading;
    $APC(div, h3);

    let ul=$CESC('ul', 'filter-ul');
    arr.map(item=>{
        let li=$CE('li');
        let checkBox=$CESC('input', 'checkbox');
        checkBox.setAttribute('type', 'checkbox');
        let span=$CE('span');
        span.innerText=item;

        $APC(li, checkBox);
        $APC(li, span);
        $APC(ul, li);
    })

    $APC(div, ul);
    return div;
}