import { initCanvas } from "./canvas.js";
import { quizFunctionality } from "./canvas.js";
import { cigAnimation} from "../utils.js"

export function loadFirstPage(){    
    console.log(playClickCounter)
    let container = document.querySelector("#container");
    if(quizReady === true){
        container.innerHTML = `
            <div id="background"></div>

            <div id="firstPart">
                <img id="title" src="../media/cat.svg" alt="">
                <canvas id="myCanvas" ></canvas>
                <div id="to_quiz"></div>
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

        let titleDom = document.querySelector("#title")
        titleDom.addEventListener("click", () => {
            titleDom.style.transform = `rotate(360deg)`
            setTimeout(() => {
                titleDom.style.transition = ''; // Re-enable transition
                titleDom.style.transform = ''; // Reset transformation
            }, 2000); 
        })

    }
    else{
        container.innerHTML = `
        <div id="background"></div>

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


        let cigarets = document.querySelector("#cigarets")
        cigarets.addEventListener("click", () => {
            cigAnimation();
        })

        let titleDom = document.querySelector("#title")
        titleDom.addEventListener("click", () => {
            titleDom.style.transform = `rotate(360deg)`
            setTimeout(() => {
                titleDom.style.transition = ''; // Re-enable transition
                titleDom.style.transform = ''; // Reset transformation
            }, 2000); 
        })

    }
    initCanvas();

    let btn_to_bilder = document.querySelector("#to_bilder");
    let firstPartDom = document.querySelector("#firstPart");
    
    if(quizReady === true){
        let toQuizBtn = document.querySelector("#to_quiz");
        console.log(toQuizBtn);
        toQuizBtn.addEventListener("click", () => {
            quizFunctionality();
        })    
    }

    btn_to_bilder.addEventListener("click", () => {
        firstPartDom.innerHTML = `
            <img id="title" src="../media/cat.svg" alt="">
            <div id="windows_container">
                <div id="top_blue_border">
                    <div id="rubrik">Bilder</div>
                    <div id="icon"></div>
                </div>
                <div id="pictures_container">
                    <div id="picture"></div>
                </div>
                <div id="arrows">
                    <div id="back_arrow">&#8592;</div>
                    <div id="info_of_page">Page 1/2</div>
                    <div id="next_arrow">&#8594;</div>
                </div>
            </div>
        `;

        let titleDom = document.querySelector("#title")
        titleDom.addEventListener("click", () => {
            titleDom.style.transform = `rotate(360deg)`
            setTimeout(() => {
                titleDom.style.transition = ''; // Re-enable transition
                titleDom.style.transform = ''; // Reset transformation
            }, 2000); 
        })

        let back_btn = btn_to_bilder;
        back_btn.id = "back";

        back_btn.addEventListener("click", () => {
            loadFirstPage();
        });

        changePictures();
    });
  
}

function changePictures(){
    let arrayOfPicturesPaths = ["./pictures/första.jpg", "./pictures/andra.jpg", ];
    let nextBtn = document.querySelector("#next_arrow");
    let backBtn = document.querySelector("#back_arrow");
    let pictureDisplayDom = document.querySelector("#picture");
    let infoOfPage = document.querySelector("#info_of_page");

    let incrementorForPictures = 0;
    let incrementorForPageNumber = 1;
    console.log(pictureDisplayDom);
    pictureDisplayDom.style.backgroundImage = `url(${arrayOfPicturesPaths[incrementorForPictures]})`;

    nextBtn.addEventListener("click", function(){
        if(incrementorForPictures < arrayOfPicturesPaths.length - 1){
            incrementorForPictures++; 
            incrementorForPageNumber++;
            console.log(incrementorForPictures)
            pictureDisplayDom.style.backgroundImage = `url(${arrayOfPicturesPaths[incrementorForPictures]})`;
            infoOfPage.innerHTML = `Page ${incrementorForPageNumber}/2`    
        }
        else{
            console.log("now")
            incrementorForPictures = 0;
            incrementorForPageNumber = 1;
            pictureDisplayDom.style.backgroundImage = `url(${arrayOfPicturesPaths[incrementorForPictures]})`;
            infoOfPage.innerHTML = `Page ${incrementorForPageNumber}/2`    

        }
    });


    backBtn.addEventListener("click", function(){
        pictureDisplayDom.style.backgroundImage = `url(${arrayOfPicturesPaths[incrementorForPictures]})`;
        if(incrementorForPictures !== 0){
            incrementorForPictures--; 
            incrementorForPageNumber--;
            console.log(incrementorForPictures)
            pictureDisplayDom.style.backgroundImage = `url(${arrayOfPicturesPaths[incrementorForPictures]})`;
            infoOfPage.innerHTML = `Page ${incrementorForPageNumber}/2`    
        }
        else{
            console.log("now")
            incrementorForPictures = 1;
            incrementorForPageNumber = 2;
            pictureDisplayDom.style.backgroundImage = `url(${arrayOfPicturesPaths[incrementorForPictures]})`;
            infoOfPage.innerHTML = `Page ${incrementorForPageNumber}/2`    

        }
    });

}



loadFirstPage();