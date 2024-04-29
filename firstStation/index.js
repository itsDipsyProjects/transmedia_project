

function loadFirstPage(){    
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
        firstPartDom.innerHTML = `
            <img id="title" src="../media/Group 18.png" alt="">
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
                    <div id="info_of_page">Page 1/4</div>
                    <div id="next_arrow">&#8594;</div>
                </div>
            </div>
        `;
        let back_btn = btn_to_bilder;
        back_btn.id = "back";
        back_btn.textContent = "back";

        back_btn.addEventListener("click", () => {
            loadFirstPage();
        });
    });
  
}

function changePictures(){

}

loadFirstPage();