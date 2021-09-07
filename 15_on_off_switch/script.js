
let init = () =>{
    let leftside = document.getElementById('left-side');
    let rightside = document.getElementById('right-side');
    let container = document.querySelector(".container");
    const circle = document.getElementById("circle");
    let body = document.querySelector('body');
    
    rightside.addEventListener('click', function (e){
        e.preventDefault();
        
        handleClick(
            "translateX(70px)",
            "green",
            "#aaa",
            "#aaa",
            "<p class='off'>ON</p>",
            "#000",
            "burlywood"
        )
        
    })
    
    leftside.addEventListener('click', function (e){
        e.preventDefault();
       
        handleClick(
            "translateX(0px)",
            "red",
            "#ddd",
            "#ddd",
            "<p class='off'>OFF</p>",
            "#333",
            "antiquewhite"
        )
    })

    let handleClick = (cir_transform,  cir_bg, ls_bg, rs_bg, cir_txt, container_bg, body_bg) =>{
        circle.style.transform = cir_transform;
        circle.style.transition = "0.5s";
        circle.style.backgroundColor = cir_bg;
        leftside.style.backgroundColor = ls_bg;
        rightside.style.backgroundColor = rs_bg;
        circle.innerHTML = cir_txt;
        container.style.backgroundColor = container_bg;
        body.style.backgroundColor = body_bg;
    }
}

window.onload = init;