/* scripts for use in website
 * created by mathew de vin
 */

let logoTopLeft = document.querySelector(".logoTopLeft");
let contactButton = document.getElementById("contactButton");
let worksButton = document.getElementById("worksButton");

logoTopLeft.onclick = function() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

contactButton.onclick = function() {
    document.getElementById("contactLinks").scrollIntoView({behavior: "smooth"});
}

worksButton.onclick = function() {
    document.getElementById("worksGallery").scrollIntoView({behavior: "smooth"});
}