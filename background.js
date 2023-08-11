/*
Other than adding sites in popup,you can also block sites by manually writing domain name of website
in rules_1.json,which will block as per manifest V3 format
*/

//METHOD 2 TO BLOCK WEBSITES BY BLOCKING REQUEST

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      // Check if the request matches a blocked site
      chrome.storage.sync.get(["sitelist"], function (data) {
        const blockedSites = data.sitelist || [];
        const url = new URL(details.url);
        const hostname = url.hostname.toLowerCase();
        if (blockedSites.includes(hostname)) {
          return { cancel: true };
        }
      });
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );

var data = []

  chrome.storage.sync.get(["sitelist"],(result)=>{
    if (chrome.runtime.lastError) {
        console.error("Error retrieving data from storage:", chrome.runtime.lastError);
        return;
    }
    const sitelist = result.sitelist ? JSON.parse(result.sitelist) : []
console.log(sitelist)

// sitelist.map((site,index)=>{
//     var obj = {
//         "id" : index,
//         "priority": 1,
//         "action" : { "type" : "block" },
//         "condition" : {
//           "urlFilter" : "||"+site,
//           "resourceTypes" : ["main_frame"]
//         }
//     }
//     data.push(obj);
// })
console.log(data);

})




