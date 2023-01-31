window.onload=function(){
    console.log("came to rules.js file")
    let btn=document.querySelector('.btn-div button');
    console.log(btn);
    btn.onclick=goToGamePage;

    function goToGamePage(){
        location.href='./index.html';
    }
}
