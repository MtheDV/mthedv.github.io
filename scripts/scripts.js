/* scripts for use in website
 * created by mathew de vin
 */

let logoTopLeft = document.querySelector(".logoTopLeft");
let hamburgerButton = document.querySelector(".hamburger_button");
let headerButtons = document.querySelector(".headerButtons");
let header = document.querySelector("header");
let contactButton = document.getElementById("contactButton");
let worksButton = document.getElementById("worksButton");
let experimentButton = document.getElementById("experimentButton");
let gallery = document.querySelector(".gallery");
let canvas = document.querySelector(".canvas");
let titleImage = document.querySelector(".logoImage");

// buttons that direct the window around the page
// top of page logo button
logoTopLeft.onclick = function() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

// functions for opening and closing the menu
let closeMenu = function() {
    headerButtons.style.display = "none";
    hamburgerButton.style.rotate = "0deg";
    header.style.height = "75px";
}

let openMenu = function() {
    headerButtons.style.display = "block";
    hamburgerButton.style.rotate = "90deg";
    headerButtons.style.top = "70px"
    header.style.height = "250px";
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
        headerButtons.style.top = "20px"
    }
}, false);

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

// tabs to show works

// const warp = new Warp(titleImage);

// warp.interpolate(4);
// warp.transform(([x, y]) => [x, y, y]);

// let offset = 0;
// function animate() {
//     warp.transform(([x, y, oy]) => [x, oy + 4 * Math.sin(x / 16 + offset), oy]);
//     offset += 0.1;
//     requestAnimationFrame(animate);
// }

// animate();

// when scrolling past the logo ~200px, the top left logo appears
window.addEventListener("scroll", function() {
    if (this.window.pageYOffset < 200) {
        logoTopLeft.style.opacity = 1.0;
    } else {
        logoTopLeft.style.opacity = 1.0;
    }
}, false);

// // mouse moving
// window.addEventListener("mousemove", function() {
//     let mouseX = this.event.pageX;
//     let mouseY = this.event.pageY;

//     titleImage.style.top = mouseY + "px";
// }, false);

