/* scripts for use in website
 * created by mathew de vin
 */

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

let backgroundParr = document.querySelector(".background");
let intro = document.querySelector(".intro");
let gallery = document.querySelector(".gallery");
let loading = document.querySelector(".loading");
let worksButton = document.querySelector(".worksButton");
let instagramButton = document.querySelector(".instagram");
let mailButton = document.querySelector(".mail");
let projectsButton = document.querySelector(".projectsButton");
let projectsTab = document.querySelector(".projectsNavigation");
let randomButton = document.querySelector(".randomButton");
let randomTab = document.querySelector(".randomNavigation");

let page = 0;

function parallax(e) {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let top = -1 * (50 - (mouseY - height) * 0.01) + 50;
    let left = -1 * (50 - (mouseX - width) * 0.01) + 50;
    backgroundParr.style.top = top + "%";
    backgroundParr.style.left = left + "%";
}
window.addEventListener("mousemove", parallax);

instagramButton.onclick = function() {
    window.open("https://www.instagram.com/mathew_dv/", '_blank');
}

mailButton.onclick = function() {
    window.open("mailto:mathewdevin03@gmail.com", '_blank');
}

projectsButton.onclick = function() {
    if (projectsTab.style.display == "")
        projectsTab.style.display = "block";
    else
        projectsTab.style.display = "";
}
randomButton.onclick = function() {
    if (randomTab.style.display == "")
        randomTab.style.display = "block";
    else
        randomTab.style.display = "";
}