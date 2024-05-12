let the_static_letters = ["s","i","b","y","l","l","a"];
let random_letters = ["d","e","c","f","g","m","n","o","p","y","x","å","ä","ö"];
let counter = 0;
let the_real_array = [];


let dropables = document.querySelectorAll(".droppable");
let letters_inventory_dom = document.querySelectorAll("#your_letters_inventory div");
let secret_word_divs_dom = document.querySelectorAll("#secretWord div");
let id_drag = "";
let id_dragOver = "";

let gameDone = 0;



// TO:DO fixa denna för denna ska göra om man får fel ska man kunna köra igen
function startAgain(){
    the_static_letters = ["s","i","b","y","l","l","a"];
    random_letters = ["d","e","c","f","g","m","n","o","p","y","x","å","ä","ö"];
    counter = 0;
    the_real_array = [];
    
    
    dropables = document.querySelectorAll(".droppable");
    letters_inventory_dom = document.querySelectorAll("#your_letters_inventory div");
    secret_word_divs_dom = document.querySelectorAll("#secretWord div");
    id_drag = "";
    id_dragOver = "";
    
    gameDone = 0;

    containerDom = document.querySelector("#container");
    containerDom.innerHTML = ``;
    containerDom.innerHTML = `
        
        <h1>Gissa Ordet</h1>
        <div id="secretWord">
            <div class="droppable" id="first_letter"></div>
            <div class="droppable" id="second_letter"></div>
            <div class="droppable" id="third_letter"></div>
            <div class="droppable" id="fourth_letter"></div>
            <div class="droppable" id="fifth_letter"></div>
            <div class="droppable" id="sixth_letter"></div>
            <div class="droppable" id="seventh_letter"></div>
        </div>
        <div id="your_letters_inventory">
            <div class="draggable" id="letter1" draggable="true"></div>
            <div class="draggable" id="letter2" draggable="true"></div>
            <div class="draggable" id="letter3" draggable="true"></div>
            <div class="draggable" id="letter4" draggable="true"></div>
            <div class="draggable" id="letter5" draggable="true"></div>
            <div class="draggable" id="letter6" draggable="true"></div>
            <div class="draggable" id="letter7" draggable="true"></div>
        </div>
    
    `;

}


function randomizeLetters() {  
    function getRandomIndex(array) {
        let randomIndex = Math.floor(Math.random() * (array.length)) ;    
        return randomIndex;
    }

    let randomIndex = getRandomIndex(the_static_letters)
    let test = the_static_letters.splice(randomIndex,1);
    the_real_array[counter] = test[0];
    if(the_static_letters.length !== 0){
        counter++;
        randomizeLetters();
    }
    else{
        console.log("yrs");
        letters_inventory_dom.forEach((element, index) => {
            element.textContent = `
                ${the_real_array[index]}
            `;  
            console.log(element);
         
        })
        console.log(the_real_array);
    }


    
}




function start(){
    randomizeLetters();
    dragAndDrop();
}



function dragAndDrop(){
    letters_inventory_dom.forEach((element, index) => {
        dropables.forEach((dropable) => {
            dropable.addEventListener("dragover", function (event1){
                id_dragOver = event1.target.id;
    
            })
        })
     
        element.addEventListener("dragstart", (event) => {
            id_drag = event.target.id
            let dragableDom = document.querySelector(`#${id_drag}`)
            dragableDom.addEventListener("dragend", (event2) => {
                let dropable = document.querySelector(`#${id_dragOver}`)
                dropable.replaceWith(dragableDom);
                dragableDom.attributes.removeNamedItem("draggable");
                console.log(dragableDom);
            })
        })
    })

}

function gameLoop() {
    // Update animation state
    let check = document.querySelectorAll(".droppable");
    if(check.length === 0){
        function makeWord(){
            let check = document.querySelectorAll(".draggable");
            console.log(check);
            let word = "";
            check.forEach(boxDom => {
                word += boxDom.innerText
            })
            console.log(word);
            return word;
        }
        let word = makeWord();

        if(word === "sibylla"){
            window.location.replace("../Sibylla/index.html")
        }
        else{
            prompt("Wrong")
            startAgain();
        }
        
    }
    else{
        requestAnimationFrame(gameLoop);
    }
    // Request next frame
}
  

  
  
start();
requestAnimationFrame(gameLoop);


