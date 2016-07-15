function hello() {
    chrome.tabs.executeScript(null, {file: "jquery-3.0.0.min.js"}, function () {
            chrome.tabs.executeScript(null, {file: "alert.js"});
    });

}


document.getElementById('web').addEventListener('click', function () {
    window.open("http://www.qccost.com");
});
document.getElementById('testtools').addEventListener('click', function () {
    window.open("http://php.fk.com/tools/index");
});
document.getElementById('testme').addEventListener('click', function () {
    window.open("http://php.fk.com/");
});
document.getElementById('qa1tools').addEventListener('click', function () {
    window.open("http://api.fk1.qa/tools/index");
});
document.getElementById('qa1me').addEventListener('click', function () {
    window.open("http://me.fk1.qa");
});
document.getElementById('qa2tools').addEventListener('click', function () {
    window.open("http://api.fk2.qa/tools/index");
});
document.getElementById('qa2me').addEventListener('click', function () {
    window.open("http://me.fk2.qa");
});
document.getElementById('preme').addEventListener('click', function () {
    window.open("http://me.fk.pre");
});
document.getElementById('gitlab').addEventListener('click', function () {
    window.open("http://gitlab.qc.com");
});
document.getElementById('tower').addEventListener('click', function () {
    window.open("http://tower.im/");
});
document.getElementById('redmine').addEventListener('click', function () {
    window.open("http://redmine.qc.com");
});
document.getElementById('jenkins').addEventListener('click', function () {
    window.open("http://ijenkins.qc.com");
});
