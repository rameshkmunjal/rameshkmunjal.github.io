const textInputBoxes=document.querySelectorAll('.text-input');


textInputBoxes.forEach(textInput=>{
    textInput.addEventListener('keydown', function(){        
        let span=textInput.nextElementSibling;
        span.style.visibility="hidden";
    })
})