/*var add = document.getElementById("add")
var input = document.getElementById("input")
var sites = document.getElementById("sites")
var sitelist = []

chrome.storage.local.get(["sitelist"], (result) => {
    if (result.sitelist) {
        sitelist = JSON.parse(result.sitelist);
    }
});

window.addEventListener("load", (event) => {
    sitelist.forEach(site=>{
        var url = document.createElement("div")
        var cross = document.createElement("button")
        cross.innerHTML="x"
        cross.id="delete"
        url.innerHTML = site
        url.appendChild(cross)
        sites.appendChild(url)
    })
  });


add.addEventListener("click",()=>{
    var site = document.createElement("div")
    site.innerHTML = input.value
    sitelist.push(input.value)
    input.value=""
    var cross = document.createElement("button")
    cross.innerHTML="x"
    cross.id="delete"
    site.appendChild(cross)   
    sites.appendChild(site)
    chrome.storage.local.set({"sitelist":JSON.stringify(sitelist)})
    chrome.storage.local.get(["sitelist"]).then((res)=>{
        alert(res.sitelist)
    })

})

var cross = document.getElementById('delete')
cross.addEventListener("click",()=>{

})*/
var add = document.getElementById("add");
var input = document.getElementById("input");
var sites = document.getElementById("sites");
var sitelist = [];

chrome.storage.sync.get(["sitelist"], (result) => {
    if (result.sitelist) {
        sitelist = JSON.parse(result.sitelist);
        displaySites();
    }
});

function displaySites() {
    sites.innerHTML = ""; // Clear the existing content before displaying updated list
    sitelist.forEach((site, index) => {
        var url = document.createElement("div");
        var cross = document.createElement("button");
        cross.innerHTML = "x";
        cross.dataset.index = index; // Save the index as a custom attribute for reference
        cross.addEventListener("click", deleteSite);
        url.innerHTML = site;
        url.appendChild(cross);
        sites.appendChild(url);
    });
}

function deleteSite(event) {
    var indexToRemove = event.target.dataset.index; // Get the index from the custom attribute
    sitelist.splice(indexToRemove, 1); // Remove the element from the array
    chrome.storage.sync.set({ "sitelist": JSON.stringify(sitelist) });
    displaySites(); // Update the displayed list
}

add.addEventListener("click", () => {
    sitelist.push(input.value);
    input.value = "";
    chrome.storage.sync.set({ "sitelist": JSON.stringify(sitelist) });
    displaySites(); // Update the displayed list
});


chrome.storage.sync.get(["sitelist"],(result)=>{
    if (chrome.runtime.lastError) {
        console.error("Error retrieving data from storage:", chrome.runtime.lastError);
        return;
    }
    const sitelist = result.sitelist ? JSON.parse(result.sitelist) : []
console.log(sitelist)

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message === 'get-user-data') {
//       sendResponse(sitelist);
//     }
//     return true
//   });

// chrome.runtime.sendMessage({greeting:"hello"})
     
    // chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
    //     const activeTabId = tabs[0].id;
    //     chrome.tabs.sendMessage(activeTabId,{action:"updateSiteList",sitelist})
    //  })
})



