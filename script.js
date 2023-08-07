 
setInterval(function(){
        var skipButton = document.getElementsByClassName("ytp-ad-skip-button")
        if(skipButton != undefined && skipButton.length >0){
            console.log("Ad detected");
            skipButton[0].click()
        }
    },1000)
    



// const generateHTML = ()=>{
//     return `<h1>page blocked<h1>`
// }
// const generateStyling = ()=>{
//     return ``
// }




// if(window.location.hostname === "www.facebook.com"){
//     // alert("you are in facebook")
//     document.head.innerHTML = generateStyling();
//     document.body.innerHTML = generateHTML();
// }
// console.log("hi")

