
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


let playClickCounter = 0;

img1.onload = function() {
    
    ctx.drawImage(img1, -20, -220); 
    
    ctx.fillStyle = 'rgba(0, 0, 0,0)'; 
    ctx.strokeStyle = 'rgba(10, 200, 00)'; 
    
    ctx.strokeRect(rectX, rectY, rectWidth, rectHeight); 


    ctx.fillStyle = 'rgba(0, 0, 0,0)'; 
    ctx.strokeStyle = 'rgba(10, 0, 200)'; 
    
    ctx.strokeRect(rectX2, rectY2, rectWidth2, rectHeight2); 

    
    canvas.addEventListener('click', function(event) {
        // Get the click coordinates relative to the canvas
        const x = event.offsetX;
        const y = event.offsetY;
        
        // Check if the click occurred within the rectangle bounds
        if (x >= rectX && x <= rectX + rectWidth && y >= rectY && y <= rectY + rectHeight && playClickCounter === 0) {
            ctx.clearRect(0,0,canvasWidth, canvasHeight)
            ctx.drawImage(img2,-20,-220)
            
            const audio = new Audio();
            
            audio.src = "../media/test.wav"; 
            
            audio.play();
            playClickCounter = 1;
        }

        if (x >= rectX2 && x <= rectX2 + rectWidth2 && y >= rectY2 && y <= rectY2 + rectHeight2 && playClickCounter === 1) {
            ctx.clearRect(0,0,canvasWidth, canvasHeight)
            ctx.drawImage(img3,-20,-220)
            
            const audio = new Audio();
            
            audio.src = "../media/test.wav"; 
            
            audio.play();
            playClickCounter = 0;
        }
    });
};
