const openMenu = document.getElementById("open")
const closeMenu = document.getElementById("close")
const navElements = document.getElementById("hamburgerMenu")

function openNav() {
    if (navElements.style.display === "none"){
        navElements.style.display = "block";
       openMenu.style.display = "none";
       closeMenu.style.display = "block";
    }
 }
 
 function closeNav() {
    if (navElements.style.display === "block")  {
        navElements.style.display = "none";
       openMenu.style.display = "block";
       closeMenu.style.display = "none";
    }
 }
function openClose(state){
    switch (state) { 
       case "open":
          openNav();
           break;
       case "close":
          closeNav();
           break;
       default:
           break;
    }
 }

 function initMenu() {
    
    if (window.innerWidth <= 768) {
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
        
        openMenu.addEventListener("click", () => openClose("open"));
        closeMenu.addEventListener("click", () => openClose("close"));


        navElements.style.display = "none";
    } else {

        openMenu.removeEventListener("click", () => openClose("open"));
        closeMenu.removeEventListener("click", () => openClose("close"));

        navElements.style.display = "";
        openMenu.style.display = "none";
        closeMenu.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', initMenu);

window.addEventListener('resize', initMenu);

