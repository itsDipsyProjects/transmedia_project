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
    clickAndDrop();
    randomizeLetters();
}



function clickAndDrop(){
    let counter = 0;
    letters_inventory_dom.forEach((element, index) => {
        element.addEventListener("click", (event) => {
            console.log("hello");
            dropables[counter].replaceWith(element);
            counter++;
        })
        
    })

}

let restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", () => {
    window.location.reload();
})

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
            window.location.replace("./finished/index.html")
        }
        else{
            prompt("Wrong")
            window.location.reload();
        }
        
    }
    else{
        requestAnimationFrame(gameLoop);
    }
    // Request next frame
}
  

  
  
start();
requestAnimationFrame(gameLoop);


