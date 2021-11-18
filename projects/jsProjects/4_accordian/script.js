const containerLinks=document.querySelectorAll('.container');

containerLinks.forEach((container, index)=>{
    container.addEventListener('click', function(){
        
        if(container.classList.contains('active')){
            closeActiveContainer(container);
        } else {
            closeOtherActiveContainer();
            openContainer(container);
        }
    })
})

function closeOtherActiveContainer(){
    containerLinks.forEach((container, index)=>{
        closeActiveContainer(container)
    })
}

function closeActiveContainer(container){    
    container.classList.remove('active');    
}

function openContainer(container){
    container.classList.add('active');
}