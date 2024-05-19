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
