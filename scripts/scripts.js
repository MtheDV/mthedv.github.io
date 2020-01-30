/* scripts for use in website
 * created by mathew de vin
 */

let logoTopLeft = document.querySelector(".logoTopLeft");
let hamburgerButton = document.querySelector(".hamburger_button");
let headerButtons = document.querySelector(".headerButtons");
let header = document.querySelector("header");
let contactButton = document.getElementById("contactButton");
let contactButtons = document.querySelector(".contactButtons");
let worksButton = document.getElementById("worksButton");
let experimentButton = document.getElementById("experimentButton");
let gallery = document.querySelector(".gallery");
let canvas = document.querySelector(".canvas");
let titleImage = document.querySelector(".logoImage");
let testGalleryImage1 = document.querySelector(".galleryImage1");

// buttons that direct the window around the page
// top of page logo button
logoTopLeft.onclick = function() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

// functions for opening and closing the menu
let closeMenu = function() {
    headerButtons.style.display = "none";
    hamburgerButton.style.rotate = "0deg";
    header.style.height = "65px";
}

let openMenu = function() {
    headerButtons.style.display = "block";
    hamburgerButton.style.rotate = "90deg";
    headerButtons.style.top = "70px"
    header.style.height = "230px";
}

// hamburger button
hamburgerButton.onclick = function() {
    if (headerButtons.style.display == "none") {
        openMenu();
    } else {
        closeMenu();
    }
}

// when resizing window
window.addEventListener("resize", function() {
    closeMenu();
    if (window.innerWidth >= 650) {
        headerButtons.style.display = "block";
        headerButtons.style.top = "15px"
        contactButtons.style.display = "none";
        contactButtons.style.position = "fixed";
    } else {
        contactButtons.style.display = "block";
        contactButtons.style.position = "relative";
    }
}, false);

// contacts / bottom of page
contactButton.onclick = function() {
    if (window.innerWidth >= 650) {
        if (contactButtons.style.display == "none") {
            contactButtons.style.display = "block";
            header.style.height = "125px";
        } else {
            contactButtons.style.display = "none";
            header.style.height = "65px";
        }
    } else {
        document.getElementById("contactLinks").scrollIntoView({behavior: "smooth"});
    }
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

var lastScrollPosition = this.window.scrollY;

function updateImages() {
    if (lastScrollPosition != this.window.scrollY) {
        lastScrollPosition = this.window.scrollY;
        testGalleryImage1.style.top = (lastScrollPosition) + "px";
    }
}
updateImages();

// function setupImageUpdating() {
//     lastScrollPosition = document.body.scrollTop;
//     setInterval(updateImages, 1000 / 60);
// }
// window.addEventListener("DOMContentLoaded", setupImageUpdating);

// when scrolling past the logo ~200px, the top left logo appears
// window.addEventListener("scroll", function() {
//     testGalleryImage1.style.top = (this.window.scrollY) + "px";
// }, false);



// // mouse moving
// window.addEventListener("mousemove", function() {
//     let mouseX = this.event.pageX;
//     let mouseY = this.event.pageY;

//     testGalleryImage1.style.top = mouseY + "px";
// }, false);

