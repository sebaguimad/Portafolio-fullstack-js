
// contador de clicks //
var clicks = 0;
var output = document.getElementById('output');

function countClicks() {
    clicks += 1;
    output.innerHTML = clicks;
  };


// toggle button //
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})