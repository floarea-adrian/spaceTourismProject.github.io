// responsive background

let background = document.getElementById('crewBackground-responsive')

setBackground = () => {

    
    if ( window.innerWidth > 1200){
        background.style.backgroundImage = "url('../assets/crew/background-crew-desktop.jpg')"
    }else if (window.innerWidth > 500) {
        background.style.backgroundImage = "url('../assets/crew/background-crew-tablet.jpg')"
    }else {
        background.style.backgroundImage = "url('../assets/crew/background-crew-mobile.jpg')"
    }
        
    
    background.style.backgroundSize = "cover";
    background.style.backgroundRepeat = 'no-repeat';
    
}

setBackground ()
window.addEventListener('resize', setBackground)


////////////////////////////////////////////


const crewName = document.getElementById('crewName')
const crewRole = document.getElementById('crewRole')
const crewBio = document.getElementById('crewBio')

const dotOne = document.getElementById('firstDot')
const dotTwo = document.getElementById('secondDot')
const dotThree = document.getElementById('thirdDot')
const dotFour  =  document.getElementById('forthDot')

let data = {};

async function requestDataJson () {
    const selectedCrew = localStorage.getItem('selectedCrew');
    const url = "../data/data.json"
    try{
        const response = await fetch(url)
        data = await response.json();
        crewSwitch(selectedCrew || 0 & crewImages);
    }catch(error) {
        console.log(error);
    }

}

requestDataJson()

function crewSwitch(index) {
    let {name, role, bio} = data.crew[index];

    crewName.textContent = name;
    crewRole.textContent = role;
    crewBio.textContent = bio;
    crewImages.src = data.crew[index].images.webp;
}

dotOne.addEventListener('click' , () => {
    crewSwitch(0);
    localStorage.setItem('selectedCrew', 0);
    

});

dotTwo.addEventListener('click' , () => {
    crewSwitch(1);
    localStorage.setItem('selectedCrew', 1);
});

dotThree.addEventListener('click' , () => {
    crewSwitch(2);
    localStorage.setItem('selectedCrew', 2);
});

dotFour.addEventListener('click' , () => {
    crewSwitch(3);
    localStorage.setItem('selectedCrew', 3);
});


////////////////////////////////


const storedActiveLinkId = localStorage.getItem('activeLinkId');
        
// If there is a stored active link, add the 'active-link' class to it
if (storedActiveLinkId) {
    const storedActiveLink = document.getElementById(storedActiveLinkId);
    if (storedActiveLink) {
        storedActiveLink.classList.add('active-link');
    }
}

// Get all elements with class 'menu-link'
const navLinks = document.querySelectorAll('.menu-link');

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
        localStorage.setItem('activeLinkId', this.id);
        
    });
});
