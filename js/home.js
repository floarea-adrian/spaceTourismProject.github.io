let background = document.getElementById("homeBackground-responsive")


function setBackground() {

    if(window.innerWidth > 1200) {
        background.style.backgroundImage = "url('../assets/home/background-home-desktop.jpg')"
        

      
    } else if (window.innerWidth > 500 ) {
        background.style.backgroundImage = "url('../assets/home/background-home-tablet.jpg')"

        
    } else {
        background.style.backgroundImage = "url('../assets/home/background-home-mobile.jpg')"
        

        
    }
    background.style.backgroundSize = "cover";
    background.style.backgroundRepeat = "no-repeat";

}

setBackground();
window.addEventListener("resize", setBackground);

