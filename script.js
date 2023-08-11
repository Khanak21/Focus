 
setInterval(function(){
        var skipButton = document.getElementsByClassName("ytp-ad-skip-button")
        if(skipButton != undefined && skipButton.length >0){
            console.log("Ad detected");
            skipButton[0].click()
        }
    },1000)
    
    chrome.storage.sync.get(["sitelist"],(result)=>{
        if (chrome.runtime.lastError) {
            console.error("Error retrieving data from storage:", chrome.runtime.lastError);
            return;
        }
        const sitelist = result.sitelist ? JSON.parse(result.sitelist) : []
     sitelist.map(site=>{
        if(window.location.hostname.includes(site)){
                document.body.innerHTML = `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  <title>Blocked Website</title>
                  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">

                </head>
                <body>
                  <div class="blocked-container">
                    <h1>Website Blocked</h1>
                    <p>The website you are trying to access has been blocked.</p>
                  </div>
                </body>
                </html>
                `
                document.title.innerHTML="Site blocked"
                const styleElement = document.createElement("style");
    styleElement.textContent = `
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        width:100vw;
        font-family: 'Nunito', sans-serif;

      }
      
      .blocked-container {
        max-width: 600px;
        height:100px;
        // margin: 50vh 50vw;
        // margin-top:4vh;
        background-color: #ffffff;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        display:flex;
        flex-direction:column;
      }
      
      h1 {
        font-size: 24px;
        color: #333;
      }
      
      p {
        font-size: 16px;
        color: #666;
        margin: 2rem 1rem;
      }
    `;

    document.head.appendChild(styleElement);
            }

     })
   
   
   
        console.log(sitelist)
    })


    // [
    //     {
    //       "id" : 1,
    //       "priority": 1,
    //       "action" : { "type" : "block" },
    //       "condition" : {
    //         "urlFilter" : "||facebook.com",
    //         "resourceTypes" : ["main_frame"]
    //       }
    //     }
    //   ]
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

