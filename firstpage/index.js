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

                if(data === "Allowed"){
                    window.location.replace("http://localhost:4000/canvastest/index.html");
                }
            }
            the_input.value = "";
            wrongOrRight = 0;
                
        }
    })        
    
}

who_do_you_know(names);