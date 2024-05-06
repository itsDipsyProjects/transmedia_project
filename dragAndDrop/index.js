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

