import { loadFirstPage } from "./index.js";
import { sideAnimation } from "../utils.js";


export function initCanvas(){
    console.log(previousImage);
    const canvas = document.querySelector('canvas');
    
    // Get the 2D rendering context
    const ctx = canvas.getContext('2d');
    
    let canvasWidth = 355, canvasHeight = 355;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    
    
    
    const img2 = new Image();
    
    img2.src = "../media/player/clicked.png";
    
    
    const img3 = new Image();
    
    img3.src = "../media/player/stopClicked.png";


    const img4 = new Image();
    
    img4.src = "../media/player/record.png";


    const img5 = new Image();
    
    img5.src = "../media/player/renew.png";

    const img6 = new Image();
    
    img6.src = "../media/player/load.png";

    
    const rectX = 79;
    const rectY = 227;
    const rectWidth = 50;
    const rectHeight = 70;
    
    
    const rectX2 = 123;
    const rectY2 = 227;
    const rectWidth2 = 50;
    const rectHeight2 = 70;
    

    const rectX3 = 13;
    const rectY3 = 227;
    const rectWidth3 = 50;
    const rectHeight3 = 70;

    const rectX4 = 173;
    const rectY4 = 227;
    const rectWidth4 = 50;
    const rectHeight4 = 70;

    const rectX5 = 223;
    const rectY5 = 227;
    const rectWidth5 = 50;
    const rectHeight5 = 70;


  
    
    ctx.drawImage(previousImage,-20,-220)
    
    img1.onload = function() {
        
        ctx.drawImage(previousImage,-20,-220)

        canvas.addEventListener('click', function(event) {

            const x = event.offsetX;
            const y = event.offsetY;
           
            // Play Clicked
            if ((x >= rectX && x <= rectX + rectWidth && y >= rectY && y <= rectY + rectHeight)) {
                ctx.clearRect(0,0,canvasWidth, canvasHeight)
                ctx.drawImage(img2,-20,-220)
                console.log("play");
                previousImage = img2;
                

                audio.play();
                
                audio2.play();

                audio2.addEventListener('ended', function() {
                    quizReady = true;
                    console.log(quizReady);
                    quizFunctionality();
                });
                
            }
    
            //Stop Clicked
            if (x >= rectX2 && x <= rectX2 + rectWidth2 && y >= rectY2 && y <= rectY2 + rectHeight2) {
                ctx.clearRect(0,0,canvasWidth, canvasHeight)
                ctx.drawImage(img3,-20,-220)
                previousImage = img3;



                audio.play();
    
                audio2.pause();
            }


            if (x >= rectX3 && x <= rectX3 + rectWidth3 && y >= rectY3 && y <= rectY3 + rectHeight3) {
                ctx.clearRect(0,0,canvasWidth, canvasHeight)
                ctx.drawImage(img4,-20,-220)
                previousImage = img4
                

                audio.play();
    
                audio2.pause();
            }

            if (x >= rectX4 && x <= rectX4 + rectWidth4 && y >= rectY4 && y <= rectY4 + rectHeight4) {
                ctx.clearRect(0,0,canvasWidth, canvasHeight)
                ctx.drawImage(img5,-20,-220)
                previousImage = img5;
                


                audio.play();
    
                audio2.pause();
            }

            if (x >= rectX5 && x <= rectX5 + rectWidth5 && y >= rectY5 && y <= rectY5 + rectHeight5) {
                ctx.clearRect(0,0,canvasWidth, canvasHeight)
                ctx.drawImage(img6,-20,-220)
                previousImage = img6;

                
                audio.play();
                
                audio2.pause();
                
                sideAnimation();
            }
        });
    };

    canvas.addEventListener('click', function(event) {

        const x = event.offsetX;
        const y = event.offsetY;
        // Play Clicked
        if ((x >= rectX && x <= rectX + rectWidth && y >= rectY && y <= rectY + rectHeight)) {
            ctx.clearRect(0,0,canvasWidth, canvasHeight)
            ctx.drawImage(img2,-20,-220)
            console.log("play");
            previousImage = img2;

            
            audio.play();
            
            audio2.play();


            audio2.addEventListener('ended', function() {
                quizReady = true;
                console.log(quizReady);
                quizFunctionality();
            });
            
        }

        //Stop Clicked
        if (x >= rectX2 && x <= rectX2 + rectWidth2 && y >= rectY2 && y <= rectY2 + rectHeight2) {
            ctx.clearRect(0,0,canvasWidth, canvasHeight)
            ctx.drawImage(img3,-20,-220)
            previousImage = img3;

            audio.play();

            audio2.pause();
        }

        // record
        if (x >= rectX3 && x <= rectX3 + rectWidth3 && y >= rectY3 && y <= rectY3 + rectHeight3) {
            ctx.clearRect(0,0,canvasWidth, canvasHeight)
            ctx.drawImage(img4,-20,-220)
            previousImage = img4

            audio.play();
            
            audio2.pause();

            let huhAudio1 = new Audio
            huhAudio1.src = "../media/huh.mp3"
            huhAudio1.play();

        }
        // renew
        if (x >= rectX4 && x <= rectX4 + rectWidth4 && y >= rectY4 && y <= rectY4 + rectHeight4) {
            ctx.clearRect(0,0,canvasWidth, canvasHeight)
            ctx.drawImage(img5,-20,-220)
            previousImage = img5;

            audio.play();

            audio2.pause();


            
        }
        //load
        if (x >= rectX5 && x <= rectX5 + rectWidth5 && y >= rectY5 && y <= rectY5 + rectHeight5) {
            ctx.clearRect(0,0,canvasWidth, canvasHeight)
            ctx.drawImage(img6,-20,-220)
            previousImage = img6;
            
            audio.play();
            
            audio2.pause();

            sideAnimation();
            
        }
    });
   
}


export function quizFunctionality(){
    let container = document.querySelector("#container");
    container.innerHTML = `
        <div id="background"></div>
        <div id="firstPart">
            <img id="title" src="../media/cat.svg" alt="">
            <canvas id="myCanvas"></canvas>
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
    if(tryAgain === false && quizQuestionsAnswerd === 0){
       
        firstPartDom.innerHTML = `
            <img id="title" src="../media/cat.svg" alt="">
            <div id="windows_container">
                <div id="top_blue_border">
                    <div id="rubrik">Quiz</div>
                    <div id="icon"></div>
                </div>
                <div id="question_container">
                    <p>${questions[quizQuestionsAnswerd]}</p>
                    <form>
                        <input type="radio" name="option" id="firstQuestion" value="firstQuestion">
                        <label for="firstQuestion">${optionsForQuiz1[0]}</label><br>
                        <input type="radio" name="option" id="secondQuestion" value="SecondQuestion">
                        <label for="secondQuestion">${optionsForQuiz1[1]}</label><br>
                        <input type="radio" name="option" id="thirdQuestion" value="thirdQuestion">
                        <label for="thirdQuestion">${optionsForQuiz1[2]}</label>
                    </form>

                    <p>Fråga ${questionCounter}/3</p>
                </div>
            </div>
        `;

        let radioBtns = document.getElementsByName('option');
        radioBtns.forEach((radioBtn) => {
            radioBtn.addEventListener("click", () => {
                if(radioBtn.checked){
                    let checkedLabel = document.querySelector('label[for="' + radioBtn.id + '"]').textContent;
                    
                    if(checkedLabel === answer1 ){
                        console.log("right");
                        quizQuestionsAnswerd++;
                        questionCounter++;
                        quizFunctionality();
                    }
                    else{
                        tryAgain = true
                        quizFunctionality();
                    }
                }
            })
        })
    }

    if(tryAgain === false && quizQuestionsAnswerd === 1){
        firstPartDom.innerHTML = `
            <img id="title" src="../media/cat.svg" alt="">
            <div id="windows_container">
                <div id="top_blue_border">
                    <div id="rubrik">Quiz</div>
                    <div id="icon"></div>
                </div>
                <div id="question_container">
                    <p>${questions[quizQuestionsAnswerd]}</p>
                    <form>
                        <input type="radio" name="option" id="firstQuestion" value="firstQuestion">
                        <label for="firstQuestion">${optionsForQuiz2[0]}</label><br>
                        <input type="radio" name="option" id="secondQuestion" value="SecondQuestion">
                        <label for="secondQuestion">${optionsForQuiz2[1]}</label><br>
                        <input type="radio" name="option" id="thirdQuestion" value="thirdQuestion">
                        <label for="thirdQuestion">${optionsForQuiz2[2]}</label>
                    </form>

                    <p>Fråga ${questionCounter}/3</p>
                </div>
            </div>
        `;

        let radioBtns = document.getElementsByName('option');
        radioBtns.forEach((radioBtn) => {
            radioBtn.addEventListener("click", () => {
                if(radioBtn.checked){
                    let checkedLabel = document.querySelector('label[for="' + radioBtn.id + '"]').textContent;
                    
                    if(checkedLabel === answer2 ){
                        console.log("right");
                        quizQuestionsAnswerd++;
                        questionCounter++;
                        quizFunctionality();
                    }
                    else{
                        tryAgain = true
                        quizFunctionality();
                    }
                }
            })
        })
    }


    if(tryAgain === false && quizQuestionsAnswerd === 2){
        firstPartDom.innerHTML = `
            <img id="title" src="../media/cat.svg" alt="">
            <div id="windows_container">
                <div id="top_blue_border">
                    <div id="rubrik">Quiz</div>
                    <div id="icon"></div>
                </div>
                <div id="question_container">
                    <p>${questions[quizQuestionsAnswerd]}</p>
                    <form>
                        <input type="radio" name="option" id="firstQuestion" value="firstQuestion">
                        <label for="firstQuestion">${optionsForQuiz3[0]}</label><br>
                        <input type="radio" name="option" id="secondQuestion" value="SecondQuestion">
                        <label for="secondQuestion">${optionsForQuiz3[1]}</label><br>
                        <input type="radio" name="option" id="thirdQuestion" value="thirdQuestion">
                        <label for="thirdQuestion">${optionsForQuiz3[2]}</label>
                    </form>

                    <p>Fråga ${questionCounter}/3</p>
                </div>
            </div>
        `;

        let radioBtns = document.getElementsByName('option');
        radioBtns.forEach((radioBtn) => {
            radioBtn.addEventListener("click", () => {
                if(radioBtn.checked){
                    let checkedLabel = document.querySelector('label[for="' + radioBtn.id + '"]').textContent;
                    console.log(checkedLabel);
                    if(checkedLabel === answer3){
                        console.log("right");
                        window.location.replace("./finished/index.html")
                    }
                    else{
                        tryAgain = true
                        quizFunctionality();
                    }
                }
            })
        })
    }

    if(tryAgain === true){

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
        
            tryAgain = false;
            let back_btn = btn_to_bilder;
            back_btn.id = "back";
                
            back_btn.addEventListener("click", () => {
                loadFirstPage();
            });

            quizFunctionality();
        
        })
        

    }
    let back_btn = btn_to_bilder;
    back_btn.id = "back";
    

    back_btn.addEventListener("click", () => {
        loadFirstPage();
    });
}
    
    



