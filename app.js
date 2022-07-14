const hamburgerMenu = document.querySelector('.mobile-navbar');
const hamburgerIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-button');

// Event Listeners
hamburgerIcon.addEventListener('click', openHamburgerMenu);
closeIcon.addEventListener('click', closeHamburgerMenu)



// Functions
function openHamburgerMenu() {
    hamburgerMenu.classList.remove('hide');
    hamburgerIcon.classList.add('hide');
    closeIcon.classList.remove('hide');

}

function closeHamburgerMenu() {
    hamburgerMenu.classList.add('hide');
    closeIcon.classList.add('hide');
    hamburgerIcon.classList.remove('hide');
}