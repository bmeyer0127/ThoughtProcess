let body = document.getElementById("body");
body.style.height = "window.innerHeight";

let previous = [];

let header = document.getElementById("header");

let contentHeader = document.getElementById("contentHeader");
let contentTitle = document.getElementById("contentTitle");
let contentText = document.getElementById("contentText");

let codeHeader = document.getElementById("codeHeader");
let codeTitle = document.getElementById("codeTitle");
let codeText = document.getElementById("codeText");

let cascadeHeader = document.getElementById("cascadeHeader");
let cascadeTitle = document.getElementById("cascadeTitle");
let cascadeText = document.getElementById("cascadeText");

let comingAliveHeader = document.getElementById("comingAliveHeader");
let comingAliveTitle = document.getElementById("comingAliveTitle");
let comingAliveText = document.getElementById("comingAliveText");

let endHeader = document.getElementById("endHeader");
let endTitle = document.getElementById("endTitle");

function scrollContent(element, height, rmPrevious) {
    element.style.transform = "translate(0, " + height + ")";

    if (rmPrevious == true) {
        for (item in previous) {
            previous[item].remove();
            previous.splice(item, 1);
        }
    }
    previous.push(element);
    return;
}

