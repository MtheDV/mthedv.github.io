/* scripts for use in website
 * created by mathew de vin
 */

let logoTopLeft = document.querySelector(".logoTopLeft");
let contactButton = document.getElementById("contactButton");
let worksButton = document.getElementById("worksButton");
let experimentButton = document.getElementById("experimentButton");
let gallery = document.querySelectorAll(".gallery");

// buttons that direct the window around the page
// top of page logo button
logoTopLeft.onclick = function() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

// contacts / bottom of page
contactButton.onclick = function() {
    document.getElementById("contactLinks").scrollIntoView({behavior: "smooth"});
}

// works section of the page
worksButton.onclick = function() {
    document.getElementById("worksGallery").scrollIntoView({behavior: "smooth"});
}

// exiremental section of the page
experimentButton.onclick = function() {
    document.getElementById("experimentalGallery").scrollIntoView({behavior: "smooth"})
}

// when scrolling past the logo ~200px, the top left logo appears
window.addEventListener("scroll", function() {
    if (this.window.pageYOffset < 200) {
        logoTopLeft.style.opacity = 0.0;
    } else {
        logoTopLeft.style.opacity = 1.0;
    }
}, false);

//canvas editing
/*let mainCanvas = document.querySelector(".mainCanvas");
let canvas = mainCanvas.getContext("2d");

mainCanvas.width = window.innerWidth * 2;
mainCanvas.height = window.innerHeight * 2;

canvas.moveTo(0, 0);
canvas.lineTo(200, 100);
canvas.stroke();*/

