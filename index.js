import { errorDisplay } from "./error.js";

let namesUpperCase = ["Elliot", "Hugo", "Amelie", "Luna", "Jennifer", "Olivia" ];
let namesLowerCase = ["elliot", "hugo", "amelie", "luna", "jennifer", "olivia" ];


/*
    TODO: fixa så att att alla paths är rätta och relativa så att det funkar när det är uppe 
    på github pages. Tänk på att rooten blir https://itsdipsyprojects/transmedia_project 

*/



async function who_do_you_know(namesUpperCase,namesLowerCase) {
    
    let the_input = document.querySelector("input");
    let wrongOrRight = 0;
    window.addEventListener("keypress", async (event) => {
        if(event.key === "Enter"){
            namesUpperCase.forEach(function (element){
                if(element === the_input.value){
                    wrongOrRight = 1;
                }
            });

            if (wrongOrRight === 0) {
                namesLowerCase.forEach(function (element){
                    if(element === the_input.value){
                        wrongOrRight = 1;
                    }
                });
            }

            if (wrongOrRight === 0) {
                let gamestate = {notDone: true};
                let container = document.querySelector("#container");
                container.innerHTML = ``
                function gameloop(){
                    errorDisplay()
                    if(gamestate.notDone === true){
                        requestAnimationFrame(gameloop)
                    }
                    else{
                        console.log("no");
                    }
                }
                let intervalId = setInterval(() =>{
                    clearInterval(intervalId)
                    gamestate.notDone = false;
                }, 4000)                
                requestAnimationFrame(gameloop)
            }
            else{
              
                let intro_text_dom1 = document.querySelector("#text1");  
                console.log(intro_text_dom1);
                let intro_text_dom2 = document.querySelector("#text2");  

                let intro_text_first = `Hej och välkomna till Malmö Underground du kommer nu få instruktioner så lyssna noga! `; 
                let intro_text_first2 = `Du kommer få hänga med på en utekväll som du efter några enheter lär glömma så sätt på cassetbandet och lyssna`; 

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
                                clearInterval(intervalId2);
                                wait_before_intro_is_done = true;   
                                if(wait_before_intro_is_done === true){

                                    window.location.replace("./Annalindsplats"); // This works it was the cache that saved the website and made me confused

                                }
                            }
                        },100)
                    }
                }, 100);                   
                
            }
            the_input.value = "";
            wrongOrRight = 0;
                
        }
    })        
    
}

who_do_you_know(namesUpperCase, namesLowerCase);