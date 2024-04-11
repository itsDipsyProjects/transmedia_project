let names = ["Elliot", "Hugo", "Guignard", "Luna", "Jennifier", "Olivia" ];

function popup_who_do_you_know(names) {
    
    let button = document.querySelector("#name_check_div > button");
    console.log(button);
    let the_input = document.querySelector("#name_check_div > input");
    let wrongOrRight = 0;
    button.addEventListener("click", () => {
        console.log(the_input.value);
        names.forEach(function(element) {
            if(element === the_input.value){
                wrongOrRight = 1;
            }
        });

        if (wrongOrRight === 0) {
            prompt("it was wrong, get out")
        }
        else{
            prompt("it was right");
        }
        the_input.value = "";
        wrongOrRight = 0;
    })
    
}



