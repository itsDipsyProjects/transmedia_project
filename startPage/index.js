let names = ["Elliot", "Hugo", "Guignard", "Luna", "Jennifier", "Olivia" ];

async function who_do_you_know(names) {
    
    let the_input = document.querySelector("input");
    let wrongOrRight = 0;
    window.addEventListener("keypress", async (event) => {
        if(event.key === "Enter"){
            names.forEach(function (element){
                if(element === the_input.value){
                    wrongOrRight = 1;
                }
            });
        
            if (wrongOrRight === 0) {
                document.body.innerHTML = "";
                document.body.innerHTML = `
                    <video autoplay loop muted>
                        <source src="../media/error.mp4" type="video/mp4">
                        <!-- Add additional source elements for different video formats if needed -->
                        Your browser does not support the video tag.
                    </video>
                `
                setTimeout(() =>{
                    window.location.replace("http://localhost:4000/");

                }, 2000)                
            }
            else{
                let request = await fetch("http://localhost:4000/?test=hej");
                let data = await request.text();
                console.log(data);
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
                                if(data === "Allowed" && wait_before_intro_is_done === true){
                                    window.location.replace("http://localhost:4000/firstStation/index.html");
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

who_do_you_know(names);