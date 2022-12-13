const toggleButton = document.getElementById("nav-icon");

function toggleMobileMenu() {
    const dropdownMenu = document.getElementById("nav-dropdown");

    toggleButton.classList.toggle("expanded-button");
    dropdownMenu.classList.toggle("expanded-dropdown");
}

const navButtons = Array.from(document.getElementsByClassName("button__nav"));
navButtons.forEach((button) => {
    button.addEventListener("click", toggleMobileMenu);
})

toggleButton.addEventListener("click", toggleMobileMenu);