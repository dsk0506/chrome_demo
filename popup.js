function hello() {
    chrome.tabs.executeScript(null, {file: "jquery-3.0.0.min.js"}, function () {
        chrome.tabs.executeScript(null, {file: "alert.js"});
    });

}

document.getElementById('clickme').addEventListener('click', hello);