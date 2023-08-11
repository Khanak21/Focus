
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
        url.setAttribute("id","url")
        var cross = document.createElement("button");
        cross.innerHTML = "x";
        cross.setAttribute("id","delete")
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






