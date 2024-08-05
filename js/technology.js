const background = document.getElementById('techBackgroundResponsive')

setBackground = () => {

    if(window.innerWidth > 1200) {
        background.style.backgroundImage = "url(../assets/technology/background-technology-desktop.jpg)"
    }else if ( window.innerWidth > 500 ){
        background.style.backgroundImage = "url(../assets/technology/background-technology-tablet.jpg)"
    }else {
        background.style.backgroundImage = "url(../assets/technology/background-technology-mobile.jpg)"
    }

    background.style.backgroundSize = "cover";
    background.style.backgroundRepeat = 'no-repeat';
}

setBackground()
window.addEventListener('resize', setBackground)

const title = document.getElementById('techName')
const techImg = document.getElementById('techImages')
const techDescription = document.getElementById('techDescription')

const firstPage = document.getElementById('pageOne')
const secondPage = document.getElementById('pageTwo')
const thirdPage = document.getElementById('pageThree')


let data = {};

async function requestDataJson() {
    
    const selectedTech =localStorage.getItem('selectedTech')
    const url = ('../data/data.json')

    try {
        const response = await fetch(url)
        data = await response.json()
        techSwitch(selectedTech || 0 & techImg)
    } catch( error){
        console.log(error);
    }

}
requestDataJson()

function techSwitch(index) {
    let {name, description} = data.technology[index];

    
    title.textContent = name;
    techDescription.textContent = description;

    function updateImage() {
        if(window.innerWidth <= 1192) {
            techImg.src = data.technology[index].images.landscape;
            techImg.alt = name;
        } else {
            techImg.src = data.technology[index].images.portrait;
            techImg.alt = name;
        }
    }
    
    window.onload = updateImage();
    window.onresize = updateImage(); 
    window.addEventListener("click", updateImage())
}


firstPage.addEventListener('click', () => {
    techSwitch(0);
    localStorage.setItem('selectedTech', 0)
})

secondPage.addEventListener('click', () => {
    techSwitch(1);
    localStorage.setItem('selectedTech', 1)
})

thirdPage.addEventListener('click', () => {
    techSwitch(2);
    localStorage.setItem('selectedTech', 2)
})



const storedActiveLinkId = localStorage.getItem('activeLinkId')

if(storedActiveLinkId){
    const storedActiveLink = document.getElementById(storedActiveLinkId);
    if(storedActiveLink) {
        storedActiveLink.classList.add('active-link');
    }
}

const navLinks = document.querySelectorAll('.menu-link');
        
       
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
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