function initCanvas(){
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
    
    



