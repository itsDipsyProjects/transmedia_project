let the_static_letters = ["s","i","b","y","l","l","a"];
let random_letters = ["d","e","c","f","g","m","n","o","p","y","x","å","ä","ö"];
let counter = 0;
let the_real_array = [];
let dropables = document.querySelectorAll(".droppable");
let letters_inventory_dom = document.querySelectorAll("#your_letters_inventory div");
let secret_word_divs_dom = document.querySelectorAll("#secretWord div");
let id_drag = ""


function randomizeLetters() {  

    let randomIndex = getRandomIndex(the_static_letters)
    let test = the_static_letters.splice(randomIndex,1);
    the_real_array[counter] = test[0];
    if(the_static_letters.length !== 0){
        counter++;
        randomizeLetters();
    }
    else{
        letters_inventory_dom.forEach((element, index) => {
            element.innerHTML = `
                ${the_real_array[index]}
            `;  
            element.addEventListener("dragstart", (event) => {
                id_drag = event.target.id
                console.log(id_drag);
            })
            
            
        })
        
        dropables.forEach((dropable) => {
             dropable.addEventListener("dragover", function (event){
                 console.log(id_drag);
                 let dragableDom = document.querySelector(`#${id_drag}`)
                 dragableDom.addEventListener("dragend", () => {
                     dragableDom.classList.remove("draggable")
                     dragableDom.attributes.removeNamedItem("draggable")
                    dropable.replaceWith(dragableDom);
                })
            })
           
        })
        
    }
}


function getRandomIndex(array) {
    let randomIndex = Math.floor(Math.random() * (array.length)) ;    
    return randomIndex;
}



function start(){
    randomizeLetters();
}


start();

console.log(the_real_array);

