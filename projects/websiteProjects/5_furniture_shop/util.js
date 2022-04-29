//----------------------Some Utility functions-----------------------
export const $GID=(id)=>document.getElementById(id);   
export const $CE=(ele)=>document.createElement(ele);
export const $CTN=(txt)=>document.createTextNode(txt);
export const $APC=(parent, child)=>parent.appendChild(child);
export const $SET_CLASS=(ele, className)=>{
    ele.setAttribute('class', className);
}
export const setId=(ele, idName)=>ele.setAttribute('id', idName);
export const $CREATE_NAV=(name, links)=>{
    let nav=$CE('nav');
    let title=$CE('h4');
    title.innerText=name;
    $APC(nav, title);
    let hr=$CESC('hr', 'nav-hr');
    $APC(nav, hr);
    let ul=$CE('ul');

    links.forEach(link=>{
        let li=$CE('li');
        if(link==='hot deals'){
            $SET_CLASS(li, 'hot-deals-li');
        }
        let a=$CE('a');
        let aTxt=$CTN(link);
        $APC(a, aTxt); 
        let span=$CE('span');
        span.innerHTML='<i class="fas fa-caret-right"></i>';           
        $APC(li, span);
        $APC(li, a);
        $APC(ul, li);        
    });

    $APC(nav, ul);
    return nav;
}

export const $CESC=(ele, eleClass)=>{
    let element=document.createElement(ele);
    element.setAttribute('class', eleClass);
    return element;
}

//-------------------------------------------------------------------