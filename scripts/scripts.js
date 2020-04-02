/* scripts for use in website
 * created by mathew de vin
 */

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

/* pageTypes
 * 0 = home
 * 1 = contacts
 * 2 = projects
 */
let pageType = 0;

let parallaxElements = document.getElementsByClassName("parallax_element");
let parallaxPage = document.querySelector(".parallax");

function parallaxCalculate(height, width, mouseY, mouseX, speedX, speedY, xOffset, yOffset) {
    return [((((height - mouseY) / height * 100) - 50) * speedY) + yOffset,
            ((((width - mouseX) / width * 100) - 50) * speedX) + xOffset];
}

function parallax(e) {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    for (let i = 0; i < parallaxElements.length; i++) {
        let idManipulates = parallaxElements[i].id;
        idManipulates = idManipulates.split("_");
        let parallaxCalc = parallaxCalculate(height, width, mouseY, mouseX,
                                            Number(idManipulates[0]), Number(idManipulates[1]), 
                                            Number(idManipulates[2]), Number(idManipulates[3]));
        parallaxElements[i].style.left = parallaxCalc[1] + "%";
        parallaxElements[i].style.top  = parallaxCalc[0] + "%";
        parallaxElements[i].style.zIndex = i;
    }
}
window.addEventListener("mousemove", parallax);

function animateOut(element) {
    element.style.opacity = "0.0";
    setTimeout(function() {
        element.style.display = "none";
    }, 350);
}
function animateIn(element, display) {
    element.style.opacity = "1.0";
    element.style.display = display;
}

let projectsButton = document.querySelector(".works_button");
let logoButton = document.querySelector(".logo");
let projectsPage = document.querySelector(".gallery");

projectsButton.onclick = function() {
    animateOut(parallaxPage);

    animateIn(projectsPage, "flex");
    pageType = 2;
}
logoButton.onclick = function() {
    animateOut(projectsPage);

    animateIn(parallaxPage, "block");
    pageType = 0;
}

let mailButton = document.querySelector(".mail_button");
let linkedinButton = document.querySelector(".linkedin_button");
let instagramButton = document.querySelector(".instagram_button");

mailButton.onclick = function() {
    window.open("mailto:mathewdevin03@gmail.com");
}
linkedinButton.onclick = function() {
    window.open("https://www.linkedin.com/in/mathew-de-vin-705a8a198/");
}
instagramButton.onclick = function() {
    window.open("https://www.instagram.com/mathew_dv/");
}
