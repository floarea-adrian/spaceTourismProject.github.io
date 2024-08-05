// set responsive background


let background = document.getElementById("destinationBackground-responsive")

function setBackground () {

    if (window.innerWidth > 1200) {
        background.style.backgroundImage = "url('../assets/destination/background-destination-desktop.jpg')"
        
        
    }   else if ( window.innerWidth > 500) {
        background.style.backgroundImage = "url('../assets/destination/background-destination-tablet.jpg')"

    }   else {
        background.style.backgroundImage = "url('../assets/destination/background-destination-mobile.jpg')"
    }

    background.style.backgroundRepeat = "no-repeat";
    background.style.backgroundSize = "cover";
}


setBackground();
window.addEventListener("resize", setBackground);
 //////////////////////////////

 

//  add content from  json file in html 

const planetImage = document.getElementById("imgPlanets")
const planetTitle = document.getElementById("planetName")
const planetText = document.getElementById("planetDescription")
const planetDistance = document.getElementById("planetLength")
const planetTime = document.getElementById("planeteTravel")

const moonPath = document.getElementById("moon")
const marsPath = document.getElementById("mars")
const europaPath = document.getElementById("europa")
const titanPath = document.getElementById("titan")

let data = {};       

async function requestDataJson(){
    
    const selectedDestination = localStorage.getItem('selectedDestination'); 
    const url = "../data/data.json";

    
        try{
            const response = await fetch(url);
            data = await response.json();
            // console.log(data);
            destinationSwitch(selectedDestination | 0 );
        }catch (error) {
            console.log(error);
        }
    }
    
    requestDataJson();
    

    function destinationSwitch(index) {
           
    let {name, description, distance, travel} = data.destinations[index];

    planetImage.src = data.destinations[index].images.webp ;
    planetImage.alt = name;
    
    planetTitle.textContent = name;
    planetText.textContent = description;
    planetDistance.textContent = distance;
    planetTime.textContent = travel;

}


moonPath.addEventListener('click' , () => {
    destinationSwitch(0);
    localStorage.setItem('selectedDestination', 0);
    

});

marsPath.addEventListener('click' , () => {
    destinationSwitch(1);
    localStorage.setItem('selectedDestination', 1);
});

europaPath.addEventListener('click' , () => {
    destinationSwitch(2);
    localStorage.setItem('selectedDestination', 2);
});

titanPath.addEventListener('click' , () => {
    destinationSwitch(3);
    localStorage.setItem('selectedDestination', 3);
});


// second navBar
//////////////////////////////////


    
        const storedActiveLinkId = localStorage.getItem('activeLinkId');
        const defaultLinkId = 'moon';
        
        // If there is a stored active link, add the 'active-link' class to it
        if (storedActiveLinkId) {
            const storedActiveLink = document.getElementById(storedActiveLinkId);
            if (storedActiveLink) {
                storedActiveLink.parentElement.classList.add('active-link');
            } else {
                document.getElementById(defaultLinkId).parentElement.classList.add('active-link');
            }
        } else {
            document.getElementById(defaultLinkId).parentElement.classList.add('active-link');

        }
    
        // Get all elements with class 'nav-link'
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Loop through the elements and add a click event listener to each
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                // Remove 'active-link' class from all elements that have it
                const activeLink = document.querySelector('.active-link');
                if (activeLink) {
                    activeLink.classList.remove('active-link');
                }
    
                // Add 'active-link' class to the clicked element
                this.classList.add('active-link');
    
                // Store the ID of the clicked element in localStorage
                localStorage.setItem('activeLinkId', this.querySelector('a').id);
            });
        });
    