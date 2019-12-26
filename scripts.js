/* scripts for use in website
 * created by mathew de vin
 */

let logoTopLeft = document.querySelector(".logoTopLeft");
let contactButton = document.getElementById("contactButton");
let worksButton = document.getElementById("worksButton");
let experimentButton = document.getElementById("experimentButton");
let gallery = document.querySelector(".gallery");
let canvas = document.querySelector(".canvas");

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
    // set the expiremental area to display none
    canvas.style.display = "none";
    gallery.style.display = "block";

    document.getElementById("galleryJump").scrollIntoView({behavior: "smooth"});
}

// exiremental section of the page
experimentButton.onclick = function() {
    // set the expiremental area to display none
    canvas.style.display = "block";
    gallery.style.display = "none";

    document.getElementById("galleryJump").scrollIntoView({behavior: "smooth"})
}

// when scrolling past the logo ~200px, the top left logo appears
window.addEventListener("scroll", function() {
    if (this.window.pageYOffset < 200) {
        logoTopLeft.style.opacity = 0.0;
    } else {
        logoTopLeft.style.opacity = 1.0;
    }
}, false);

