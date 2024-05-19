
function getCharacterAnimation(bokstaver){
    

    let container = document.querySelector("#showchars")
    bokstaver.forEach(element => {
        let characterDom = document.createElement("div");
        characterDom.classList.add("a_char");
        characterDom.innerHTML = `${element}`;
        container.appendChild(characterDom)
    });

    
}

let bokstaver = ["a","l"];
let intro_text_dom1 = document.querySelector("#text1");  
console.log(intro_text_dom1);
let intro_text_dom2 = document.querySelector("#text2");  

let intro_text_first = `Bra jobbat nu har du klarat Andra stationen här är några fler bokstaver`; 
let intro_text_first2 = `Gå till August Palms plats 1, För att ta dig vidare. Vi syns`; 

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
        clearInterval(intervalId1);
        let intervalId2 = setInterval(() =>{
            if (j < arrayOfLettersInText2.length) {
                intro_text_dom2.innerHTML += arrayOfLettersInText2[j];
                j++;
            } else {
                getCharacterAnimation();
                clearInterval(intervalId2);
                wait_before_intro_is_done = true;   
                let intervalId3 = setInterval(() =>{
                    if(wait_before_intro_is_done === true){
                        window.location.replace("https://open.spotify.com/playlist/1F6lGvjsOpVMxuJR03ub2T?si=3291c7f048104395&pt=1a8843e4078d61c17867d19616fc4789");
                        clearInterval(intervalId3);
                    }

                }, 4000)
            }
        },100)
    }
}, 100);                   


