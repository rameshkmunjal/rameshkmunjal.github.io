        var left=document.querySelector('.fa-arrow-left');
        var scroller=document.querySelector('.scroller');
        left.addEventListener('click', function(){
            scroller.scrollBy(360, 0);
            console.log("left button clicked");
        })
        var right=document.querySelector('.fa-arrow-right');
        right.addEventListener('click', function(){
            scroller.scrollBy(-360, 0);
            console.log("right button clicked");
        })