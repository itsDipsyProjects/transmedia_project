

function load(){    
    console.log(playClickCounter)
    let container = document.querySelector("#container");
    container.innerHTML = `
    
        <div id="firstPart">
            <img id="title" src="../media/Group 18.png" alt="">
            <canvas id="myCanvas" ></canvas>
        </div>
        <div id="secondPart">
            <div id="container_for_cig_and_btn">
                <div id="cigarets"></div>
                <div id="container_for_btn">
                    <button id="to_bilder">Bilder</button>
                </div>
            </div>
        </div>


    `;
    initCanvas();

    let btn_to_bilder = document.querySelector("#to_bilder");
    let firstPartDom = document.querySelector("#firstPart");
    
    btn_to_bilder.addEventListener("click", () => {
        firstPartDom.innerHTML = ``;
        let back_btn = btn_to_bilder;
        back_btn.id = "back";
        back_btn.textContent = "back";

        back_btn.addEventListener("click", () => {
            load();
        });
    });
  
}

load();