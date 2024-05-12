

let intro_text_dom1 = document.querySelector("#text1");  
console.log(intro_text_dom1);
let intro_text_dom2 = document.querySelector("#text2");  

let intro_text_first = `Bra jobbat nu har du klarat första stationen`; 
let intro_text_first2 = `Gå till ..... För att ta dig vidare. Vi syns`; 

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
                    window.location.replace("http://google.com");
                }
            }
        },100)
    }
}, 100);                   


