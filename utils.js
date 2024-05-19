export function cigAnimation() {

    let cigDom = document.createElement("div");

    const windowWidth = window.innerWidth;
    const elementWidth = 200; 
    const randomX = Math.random() * (windowWidth - elementWidth);

    cigDom.style.cssText = `
        width: 200px;
        height: 200px;
        background-image: url("./cig.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        display: flex;
        position: absolute;
        top: -200px; /* Start off-screen */
        left: ${randomX}px;
        z-index: 200;
    `;
    let container = document.querySelector("#container");
    cigDom.classList.add('animated');
    container.appendChild(cigDom);
    let intervalId = setInterval(() => {
       cigDom.remove();
        clearInterval(intervalId)
    },2000)
}


export function sideAnimation() {

    

    let sideDom = document.createElement("div");


    sideDom.style.cssText = `
        width: 200px;
        height: 200px;
        background-image: url("./load.gif");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        display: flex;
        position: absolute;
        top:580px;
        left: ${-100}px;
        z-index: 200;
    `;
    let container = document.querySelector("#container");
    sideDom.classList.add('animated2');

    container.appendChild(sideDom);
    let intervalId = setInterval(() => {
       sideDom.remove();
        clearInterval(intervalId)
    },5000)
}


export function sideAnimation2() {

    let bikeGif = new Image
    bikeGif.src = "./bike.gif"
    bikeGif.onload(() => {
        let sideDom = document.createElement("div");
    
    
        sideDom.style.cssText = `
            width: 200px;
            height: 200px;
            background-image: url(${bikeGif});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            display: flex;
            position: absolute;
            bottom: 500px;
            left: ${-100}px;
            z-index: 200;
        `;
        let container = document.querySelector("#container");
        sideDom.classList.add('animated3');
    
        container.appendChild(sideDom);
        let intervalId = setInterval(() => {
           sideDom.remove();
            clearInterval(intervalId)
        },8000)

    })
}