/* scripts for use in website
 * created by mathew de vin
 */

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

let backgroundParrCircle = document.querySelector(".background_circle");
let backgroundParrText = document.querySelector(".background_text");
let backgroundParrMountains = document.querySelector(".background_mountains");

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

    backgroundParrCircle.style.top = topCircle + "%";
    backgroundParrCircle.style.left = leftCircle + "%";
    backgroundParrText.style.top = topText + 37 + "%";
    backgroundParrText.style.left = leftText + "%";
    backgroundParrMountains.style.top = topMountain + 50 + "%";
    backgroundParrMountains.style.left = leftMountain + "%";
}
window.addEventListener("mousemove", parallax);

let parallaxBackground = document.querySelector(".parallax_background");
let gallery = document.querySelector(".gallery");

function animateOut() {
    return "0.0";
}
function animateIn() {
    return "1.0";
}

let projectsButton = document.querySelector(".projects_button");
let logoButton = document.querySelector(".logo");

projectsButton.onclick = function() {
    parallaxBackground.style.opacity = animateOut();
    gallery.style.opacity = animateIn();
}
logoButton.onclick = function() {
    parallaxBackground.style.opacity = animateIn();
    gallery.style.opacity = animateOut();
}

