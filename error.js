

export function errorDisplay(done){
    let errorWord = document.createElement("div");
    errorWord.innerText = "Error";
    errorWord.style.color = "red";
    let pdom = document.querySelector("#container")
    pdom.appendChild(errorWord)
}



