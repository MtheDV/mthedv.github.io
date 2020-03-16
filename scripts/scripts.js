/* scripts for use in website
 * created by mathew de vin
 */

/*let logoTopLeft = document.querySelector(".logoTopLeft");
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
updateImages();*/

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

let backgroundParr = document.querySelector(".introBackground");
let intro = document.querySelector(".intro");
let gallery = document.querySelector(".gallery");
let loading = document.querySelector(".loading");

let page = 0;

window.addEventListener("load", function() {
    loadIntro();
})

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

window.addEventListener("mousedown", function() {
    if (page == 0) {
        loadGallery();
    } else if (page == 1) {
        loadIntro();
    }
}, true);

function unloadAll() {
    intro.style.opacity = "0.0";
    intro.style.display = "none";
    gallery.style.opacity = "0.0";
    gallery.style.display = "none";
}

function loadIntro() {
    unloadAll();
    // load page zero, intro
    page = 0;
    intro.style.opacity = "1.0";
    intro.style.display = "block";
}

function loadGallery() {
    unloadAll();
    // load page one, gallery
    page = 1;
    gallery.style.opacity = "1.0";
    gallery.style.display = "block";
}


