function getCharacterAnimation(bokstaver){
    

    let container = document.querySelector("#showchars")
    bokstaver.forEach(element => {
        let characterDom = document.createElement("div");
        characterDom.classList.add("a_char");
        characterDom.innerHTML = `${element}`;
        container.appendChild(characterDom)
    });

    
}

let bokstaver = ["s","l"];

let intro_text_dom1 = document.querySelector("#text1");  
let intro_text_dom2 = document.querySelector("#text2");  

let intro_text_first = `Bra jobbat nu har du klarat första stationen här är dina första bokstaver`; 
let intro_text_first2 = `Gå till Navigationsgatan 1B, För att ta dig vidare. Vi syns.`; 

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
                        window.location.replace("https://open.spotify.com/playlist/6zahdmC3uzwXunb624qZ0q?si=f3a3053526e54a93&pt=5b004a31fb76714570a7a41a7df6e55f");
                        clearInterval(intervalId3)
                    }


                },5000)
            }
        },100)
    }
}, 100);                   


