let the_static_letters = ["s","i","b","y","l","l","a"];
let random_letters = ["d","e","c","f","g","m","n","o","p","y","x","å","ä","ö"];
let counter = 0;
let the_real_array = [];
function randomizeLetters() {  

    let randomIndex = getRandomIndex(the_static_letters)
    let test = the_static_letters.splice(randomIndex,1);
    the_real_array[counter] = test[0];
    if(the_static_letters.length !== 0){
        counter++;
        randomizeLetters();
    }
    else{
        let id_of_the_dragable_dom = "";
        let letters_inventory_dom = document.querySelectorAll("#your_letters_inventory div");
        let secret_word_divs_dom = document.querySelectorAll("#secretWord div");
        let dropables = document.querySelectorAll(".droppable");
        console.log(dropables);
        letters_inventory_dom.forEach((element, index) => {
            element.innerHTML = `
                ${the_real_array[index]}
            `;
            element.addEventListener("drag", (event) => {
                console.log("drag");
                id_of_the_dragable_dom = event.currentTarget.id;
            })
        })
        dropables.forEach((dropableDom) => {
            dropableDom.addEventListener("mouseover", () => {
                console.log('drop');
                let dragDom = document.querySelector(`#${id_of_the_dragable_dom }`)
                dropableDom.replaceWith(dragDom)
            })
        })
    }
}



function getRandomIndex(array) {
    let randomIndex = Math.floor(Math.random() * (array.length)) ;    
    return randomIndex;
}

// Example usage:


function start(){
    randomizeLetters();
}


start();

console.log(the_real_array);

