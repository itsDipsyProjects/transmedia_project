

let intro_text_dom1 = document.querySelector("#text1");  
console.log(intro_text_dom1);
let intro_text_dom2 = document.querySelector("#text2");  

let intro_text_first = `Tack för att du har lyssnat och varit med om en historie långt bak i tiden`; 
let intro_text_first2 = `Malmö har ändrats genom åren och det kommer du med vi syns någon gång...du och jag`; 

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
                let intervalId3 = setInterval(() =>{ 
                    wait_before_intro_is_done = true;   
                    if(wait_before_intro_is_done === true){
                        document.body.innerHTML = "";
                        document.body.innerHTML = `
                            <video autoplay loop muted>
                                <source src="../../media/error.mp4" type="video/mp4">
                                <!-- Add additional source elements for different video formats if needed -->
                                Your browser does not support the video tag.
                            </video>
                        `
                        clearInterval(intervalId3);
                    }

                },3000)
            }
        },100)
    }
}, 100);                   


