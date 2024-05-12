let phoneScreenSizes = [
    { width: 320, height: 480 },   // iPhone 4/4s
    { width: 320, height: 568 },   // iPhone 5/SE
    { width: 375, height: 667 },   // iPhone 6/7/8
    { width: 414, height: 736 },   // iPhone 6/7/8 Plus
    { width: 375, height: 812 },   // iPhone X/XS/11 Pro
    { width: 414, height: 896 },   // iPhone XR/11
    { width: 414, height: 896 },   // iPhone XS Max/11 Pro Max
    { width: 360, height: 640 },   // Samsung Galaxy S6/S7/S8/S9
    { width: 360, height: 720 },   // Samsung Galaxy S3/S4/S5
    { width: 412, height: 846 },   // Google Pixel 2
    { width: 412, height: 732 },   // Google Pixel 3/3a
    { width: 412, height: 869 },   // Google Pixel 3 XL/4/4 XL
    { width: 360, height: 800 },   // Nokia Lumia 520
];

let clientScreenArea = window.innerWidth / window.innerHeight;
let biggestPhoneArea = 414 / 896; 

if(clientScreenArea > biggestPhoneArea){
    console.log("yes");
    window.location.replace("../tooBigClientSize/index.html");
}


window.addEventListener("resize", (event) => {
    let clientScreenArea = window.innerWidth / window.innerHeight;
    let biggestPhoneArea = 414 / 896; 

    if(clientScreenArea > biggestPhoneArea){
        console.log("yes");
        window.location.replace("../tooBigClientSize/index.html");
    }
    if(clientScreenArea <= biggestPhoneArea)
    {
        window.location.replace("../startPage/index.html");
    }

})


