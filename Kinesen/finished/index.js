function getCharacterAnimation(bokstaver){
    

    let container = document.querySelector("#showchars")
    bokstaver.forEach(element => {
        let characterDom = document.createElement("div");
        characterDom.classList.add("a_char");
        characterDom.innerHTML = `${element}`;
        container.appendChild(characterDom)
    });

    
}

let bokstaver = ["i","l","b"];

let intro_text_dom1 = document.querySelector("#text1");  
console.log(intro_text_dom1);
let intro_text_dom2 = document.querySelector("#text2");  

let intro_text_first = `Bra jobbat nu är du nästan framme. Här är dina sista bokstäver`; 
let intro_text_first2 = `Innan du får höra sista biten så måste du lösa något åt oss...`; 

let arrayOfLettersInText1 = intro_text_first.split("")
console.log(arrayOfLettersInText1);
let arrayOfLettersInText2 = intro_text_first2.split("")

let i = 0;
let wait_before_intro_is_done = false;
let j = 0;


let intervalId1 = setInterval(() => {
    if (i < arrayOfLettersInText1.length) {
        intro_text_dom1.innerHTML += arrayOfLettersInText1[i];
        i++;
    } else {
        getCharacterAnimation(bokstaver);
        clearInterval(intervalId1);
        let intervalId2 = setInterval(() =>{
            if (j < arrayOfLettersInText2.length) {
                intro_text_dom2.innerHTML += arrayOfLettersInText2[j];
                j++;
            } else {
                clearInterval(intervalId2);
                wait_before_intro_is_done = true;   
                let intervalId3 = setInterval(() =>{

                    if(wait_before_intro_is_done === true){
                        window.location.replace("../../dragAndDrop/index.html");
                        clearInterval(intervalId3)
                    }


                },3000)
            }
        },100)
    }
}, 100);                   


