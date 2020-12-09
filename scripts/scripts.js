/* scripts for use in website
 * created by mathew de vin
 */


////////////// Parallax ///////////////
///////////////////////////////////////
/* pageTypes
 * 0 = home
 * 1 = projects
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

    if (width >= 450) {
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
}
window.addEventListener("mousemove", parallax);
////////////////////////////////////////

// SCROLL TO CHANGE PARALLAX OPACITY //
///////////////////////////////////////
window.addEventListener("scroll", () => {
    var scrollY = window.scrollY;
    var winHeight = window.innerHeight;
    if (scrollY > winHeight/2)
        parallaxPage.style.opacity = "0.0";
    else
        parallaxPage.style.opacity = "1.0";
});
///////////////////////////////////////


////////// HEADER BUTTONS /////////////
///////////////////////////////////////
let contactButton = document.querySelector(".button_contact");
let linkedinButton = document.querySelector(".button_linkedin");
let instagramButton = document.querySelector(".button_instagram");
let projectsButton = document.querySelector(".button_projects");
let githubButton = document.querySelector(".button_github")
let logo = document.querySelector(".logo");

let projects = document.querySelector(".projects");
let contact = document.querySelector(".contact");

contactButton.onclick = function() {
    window.scroll({
        top: contact.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'
    });
}
linkedinButton.onclick = function() {
    window.open("https://www.linkedin.com/in/mathew-de-vin-705a8a198/");
}
instagramButton.onclick = function() {
    window.open("https://www.instagram.com/mathew_dv/");
}
projectsButton.onclick = () => {
    window.scroll({
        top: projects.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'
    });
}
githubButton.onclick = () => {
    window.open("https://github.com/MtheDV");
}
logo.onclick = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
///////////////////////////////////////


///////// REMOVE FORM DATA ////////////
///////////////////////////////////////
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}
///////////////////////////////////////

////// DEPRECATED GALLERY CODE ////////
///////////////////////////////////////
/*let projectsButton = document.querySelector(".button_projects");
let exitButton = document.querySelector(".gallery_exit");
let exitButtonMobile = document.querySelector(".gallery_exit_mobile");
let projectsPage = document.querySelector(".gallery");

let galleryMore = document.querySelector(".gallery_more");

function animateOutParallax() {
    parallaxPage.style.opacity = "0.5";
}

function animateOut(element) {
    element.style.opacity = "0.0";
    setTimeout(function() {
        element.style.display = "none";
    }, 350);
}
function animateIn(element, display) {
    element.style.display = display;
    setTimeout(function() {
        element.style.opacity = "1.0";
    }, 20);
}

projectsButton.onclick = function() {
    animateOutParallax();

    animateIn(projectsPage, "flex");
    pageType = 1;
}
exitButton.onclick = function() {
    animateOut(projectsPage);

    animateIn(parallaxPage, "block");
    pageType = 0;

    galleryMore.style.display = "none";
}
exitButtonMobile.onclick = function() {
    galleryMore.style.display = "none";
    for (let i = 0; i < galleryDetails.length; i++) {
        galleryDetails[i].style.display = "none";
    }

    exitButtonMobile.style.display = "none";
}

let galleryImages = document.getElementsByClassName("gallery_block");
let galleryDetails = document.getElementsByClassName("gallery_details");

window.addEventListener("click", function() {
    if (pageType == 1) {
        for (let i = 0; i < galleryImages.length; i++) {
            galleryImages[i].onclick = function() {
                if (galleryImages[i].classList.contains("link"))
                    window.location = galleryImages[i].id;
                else {
                    galleryDetails[i].style.display = "block";
                    galleryMore.style.display = "block";
                    for (let j = 0; j < galleryDetails.length; j++) {
                        if (j != i) {
                            galleryDetails[j].style.display = "none";
                        }
                    }
                    exitButtonMobile.style.display = "block";
                }
            }
        }
    }
});*/
///////////////////////////////////////
