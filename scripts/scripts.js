/* scripts for use in website
 * created by mathew de vin
 */

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

let backgroundParrCircleBlue = document.querySelector("#blue_circle");
let backgroundParrTextHome = document.querySelector("#home_text");
let backgroundParrMountains = document.querySelector("#background_mountains");
let backgroundParrCircleOrange = document.querySelector("#orange_circle");
let backgroundParrTextContact = document.querySelector("#contact_text");
let backgroundParrClouds = document.querySelector("#background_clouds");
/* pageTypes
 * 0 = home
 * 1 = contacts
 * 2 = projects
 */
let pageType = 0;

function parallaxCalculate(distance, mouse, speed) {
    return (((distance - mouse) / distance * 100) - 50) * speed;
}

function parallax(e) {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let topCircle = parallaxCalculate(height, mouseY, 0.03);
    let leftCircle = parallaxCalculate(width, mouseX, 0.04);

    let topText = parallaxCalculate(height, mouseY, 0.055);
    let leftText = parallaxCalculate(width, mouseX, 0.07);

    let topMountain = parallaxCalculate(height, mouseY, 0.08);
    let leftMountain = parallaxCalculate(width, mouseX, 0.1);

    if (pageType == 0) {
        backgroundParrCircleBlue.style.top = topCircle + "%";
        backgroundParrCircleBlue.style.left = leftCircle + "%";
        backgroundParrTextHome.style.top = topText + 37 + "%";
        backgroundParrTextHome.style.left = leftText + "%";
        backgroundParrMountains.style.top = topMountain + 50 + "%";
        backgroundParrMountains.style.left = leftMountain + "%";
    } else if (pageType == 1) {
        backgroundParrCircleOrange.style.top = topCircle + "%";
        backgroundParrCircleOrange.style.left = leftCircle + "%";
        backgroundParrTextContact.style.top = topText + 25 + "%";
        backgroundParrTextContact.style.left = leftText - 35 + "%";
        backgroundParrClouds.style.top = topMountain + 30 + "%";
        backgroundParrClouds.style.left = leftMountain + 15 + "%";
    }
}
window.addEventListener("mousemove", parallax);

let wholeGallery = document.querySelector(".gallery");
let galleryX = 0;

function moveGallery(e) {
    let width = window.innerWidth;
    let mouseX = e.clientX;

    if (mouseX > width - 400)
        galleryX -= 15;
    else if (mouseX < 400)
        galleryX += 15;

    if (galleryX >= 5)
        galleryX = 5;

    wholeGallery.style.left = galleryX + "%";
}
window.addEventListener("mousedown", moveGallery);


function animateOut(element) {
    element.style.opacity = "0.0";
    setTimeout(function() {
        element.style.display = "none";
    }, 350);
}
function animateIn(element) {
    element.style.opacity = "1.0";
    element.style.display = "block";
}

let parallaxBackgroundHome = document.querySelector(".parallax_background_home");
let parallaxBackgroundContact = document.querySelector(".parallax_background_contact");
let projects = document.querySelector(".gallery");

let projectsButton = document.querySelector(".projects_button");
let logoButton = document.querySelector(".logo");
let contactButton = document.querySelector(".contact_button");
let mailButton = document.querySelector(".mail_button");
let linkedinButton = document.querySelector(".linkedin_button");
let instagramButton = document.querySelector(".instagram_button");

projectsButton.onclick = function() {
    animateOut(parallaxBackgroundHome);
    animateOut(parallaxBackgroundContact);

    animateIn(projects);
    pageType = 2;
}
logoButton.onclick = function() {
    animateOut(projects);
    animateOut(parallaxBackgroundContact);

    animateIn(parallaxBackgroundHome);
    pageType = 0;
}
contactButton.onclick = function() {
    animateOut(projects);
    animateOut(parallaxBackgroundHome);

    animateIn(parallaxBackgroundContact);
    pageType = 1;
}

mailButton.onclick = function() {
    window.open("mailto:mathewdevin03@gmail.com");
}
linkedinButton.onclick = function() {
    window.open("https://www.linkedin.com/in/mathew-de-vin-705a8a198/");
}
instagramButton.onclick = function() {
    window.open("https://www.instagram.com/mathew_dv/");
}

