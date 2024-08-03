let background = document.getElementById("homeBackground-responsive")


function setBackground() {

    if(window.innerWidth > 1200) {
        background.style.backgroundImage = "url('./assets/home/background-home-desktop.jpg')"
        background.style.backgroundSize = "cover";
   
    } else if (window.innerWidth > 500 ) {
        background.style.backgroundImage = "url('./assets/home/background-home-tablet.jpg')"
        background.style.backgroundSize = "100% 700px";
  
    } else {
        background.style.backgroundImage = "url('./assets/home/background-home-mobile.jpg')"
        background.style.backgroundSize = "cover";
     
    }
    background.style.backgroundRepeat = "no-repeat";

}

setBackground();
window.addEventListener("resize", setBackground);

