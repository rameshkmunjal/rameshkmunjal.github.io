function myFunction(){
    let name="Ramesh";

    return function(){
        alert(name);
    }
}

let name="John";

let work=myFunction();

work();