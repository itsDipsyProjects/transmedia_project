import { loadFirstPage } from "./index.js";

export function initCanvas(){
    const canvas = document.querySelector('canvas');

    // Get the 2D rendering context
    const ctx = canvas.getContext('2d');
    
    let canvasWidth = 355, canvasHeight = 355;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    
    
    const img1 = new Image();
    
    img1.src = "../media/notClicked.png";
    
    
    const img2 = new Image();
    
    img2.src = "../media/clicked.png";
    
    
    const img3 = new Image();
    
    img3.src = "../media/stopClicked.png";
    
    const rectX = 93;
    const rectY = 268;
    const rectWidth = 50;
    const rectHeight = 70;
    
    
    const rectX2 = 153;
    const rectY2 = 268;
    const rectWidth2 = 50;
    const rectHeight2 = 70;
    
    

    img1.onload = function() {
        
        if(playClickCounter === 0){
            ctx.drawImage(img1, -20, -220); 
            
            ctx.fillStyle = 'rgba(0, 0, 0,0)'; 
            ctx.strokeStyle = 'rgba(10, 200, 00)'; 
            
            ctx.strokeRect(rectX, rectY, rectWidth, rectHeight); 
        }


        if(playClickCounter === 2){
            ctx.drawImage(img2, -20, -220); 
            
            ctx.fillStyle = 'rgba(0, 0, 0,0)'; 
            ctx.strokeStyle = 'rgba(10, 200, 00)'; 
            
            ctx.strokeRect(rectX2, rectY2, rectWidth, rectHeight); 
        }

        if(playClickCounter === 3){
            ctx.drawImage(img3, -20, -220); 
            
            ctx.fillStyle = 'rgba(0, 0, 0,0)'; 
            ctx.strokeStyle = 'rgba(10, 200, 00)'; 
            
            ctx.strokeRect(rectX, rectY, rectWidth, rectHeight); 
        }

    
    
      
    
        
        
    
        canvas.addEventListener('click', function(event) {

            const x = event.offsetX;
            const y = event.offsetY;
            
            // Play Clicked
            if (x >= rectX && x <= rectX + rectWidth && y >= rectY && y <= rectY + rectHeight && playClickCounter === 0 || playClickCounter === 3) {
                ctx.clearRect(0,0,canvasWidth, canvasHeight)
                ctx.drawImage(img2,-20,-220)
                
                
                
                audio.play();
                
                audio2.play();

                audio2.addEventListener('ended', function() {
                    quizReady = true;
                    console.log(quizReady);
                    quizFunctionality();
                });
                
                playClickCounter = 2;
            }
    
            //Stop Clicked
            if (x >= rectX2 && x <= rectX2 + rectWidth2 && y >= rectY2 && y <= rectY2 + rectHeight2 && playClickCounter === 2) {
                ctx.clearRect(0,0,canvasWidth, canvasHeight)
                ctx.drawImage(img3,-20,-220)
                
                
                audio.play();
    
                audio2.pause();
                playClickCounter = 3;
            }
        });
    };
}

export function quizFunctionality(){
    let container = document.querySelector("#container");
    container.innerHTML = `
    
        <div id="firstPart">
            <img id="title" src="../media/cat.svg" alt="">
            <canvas id="myCanvas" ></canvas>
        </div>
        <div id="secondPart">
            <div id="container_for_cig_and_btn">
                <div id="cigarets"></div>
                <div id="container_for_btn">
                    <div id="to_bilder"></div>
                </div>
            </div>
        </div>


    `;
    initCanvas();

    let btn_to_bilder = document.querySelector("#to_bilder");
    let firstPartDom = document.querySelector("#firstPart");
    if(tryAgain === false){
        firstPartDom.innerHTML = `
            <img id="title" src="../media/cat.svg" alt="">
            <div id="windows_container">
                <div id="top_blue_border">
                    <div id="rubrik">Quiz</div>
                    <div id="icon"></div>
                </div>
                <div id="question_container">
                    <p>${questions[quizQuestionsAnswerd]}</p>
                    <input type="text">
                    <button id="skicka">Skicka in</button>
                    <p>Fråga ${questionCounter}/2</p>
                </div>
            </div>
        `;
    }
    else{

        firstPartDom.innerHTML = `
            <img id="title" src="../media/cat.svg" alt="">
            <div id="windows_container">
                <div id="top_blue_border">
                    <div id="rubrik">Quiz</div>
                    <div id="icon"></div>
                </div>
                <div id="question_container">
                    <div id="testa_igen">
                        <div id="top_blue_border">
                            <div id="rubrik">Quiz</div>
                            <div id="icon2"></div>
                        </div>
                        <div id="content_wrong_container">
                            <div id="icon3"></div>
                            <div id="text_wrong_container">
                                <p>Fel svar</p>
                                <p>Försök igen.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        `;

        let questionContainer = document.querySelector("#question_container");
        questionContainer.style.width = "100%"
        questionContainer.style.display = "flex";
        questionContainer.style.justifyContent = "center";
        questionContainer.style.marginTop = "20px"
        questionContainer.style.flexDirection = "row";
        let exitBtn = document.querySelector("#icon2");
        exitBtn.addEventListener("click", () => {
            firstPartDom.innerHTML = `
            <img id="title" src="../media/cat.svg" alt="">
            <div id="windows_container">
                <div id="top_blue_border">
                    <div id="rubrik">Quiz</div>
                    <div id="icon"></div>
                </div>
                <div id="question_container">
                    <p>${questions[quizQuestionsAnswerd]}</p>
                    <input type="text">
                    <button id="skicka">Skicka in</button>
                    <p>Fråga ${questionCounter}/2</p>
                </div>
            </div>
        `;

        let back_btn = btn_to_bilder;
        back_btn.id = "back";
        
    
        let skickaBtn = document.querySelector("#skicka");
        let inputValue = document.querySelector("input");
        console.log(skickaBtn);
    
        if(skickaBtn !== null){
    
            skickaBtn.addEventListener("click", () => {
        
                console.log("hello");
                if(inputValue.value === answer1 && quizQuestionsAnswerd === 0){
                    questionCounter++;
                    quizQuestionsAnswerd++;
                    console.log("yee");
                    tryAgain = false;
                    quizFunctionality();
                }
                else{
                    tryAgain = true
                    quizFunctionality();
                }
        
                if(inputValue.value === answer2 && quizQuestionsAnswerd === 1){
                    quizDone = true;
                }
                
                if(quizDone === true){
                    window.location.replace("http://localhost:4000/firstStation/finished/")
                }
            })
        }
    
        back_btn.addEventListener("click", () => {
            loadFirstPage();
        });






        })
        

    }
    let back_btn = btn_to_bilder;
    back_btn.id = "back";
    

    let skickaBtn = document.querySelector("#skicka");
    let inputValue = document.querySelector("input");
    console.log(skickaBtn);

    if(skickaBtn !== null){

        skickaBtn.addEventListener("click", () => {
    
            console.log("hello");
            if(inputValue.value === answer1 && quizQuestionsAnswerd === 0){
                questionCounter++;
                quizQuestionsAnswerd++;
                console.log("yee");
                tryAgain = false;
                quizFunctionality();
            }
            else{
                tryAgain = true
                quizFunctionality();
            }
    
            if(inputValue.value === answer2 && quizQuestionsAnswerd === 1){
                quizDone = true;
            }
            
            if(quizDone === true){
                window.location.replace("http://localhost:4000/firstStation/finished/")
            }
        })
    }

    back_btn.addEventListener("click", () => {
        loadFirstPage();
    });
}
    
    



