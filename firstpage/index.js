let inputDom = document.querySelector("#andra input");
let places = ["test1", "test2", "test3", "test4"];
let checkValue = 0;
window.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        
        for (let i = 0; i < places.length; i++) {
            let element = places[i];
            if(inputDom.value === element){
                checkValue = 1;
                break;   
            }
        }
        if(checkValue === 0){
            prompt("it was wrong")
            checkValue = 0;
        }
        else{
            prompt("it was right")
            checkValue = 0;
        }
        
    }
})