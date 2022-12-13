const toggleButton = document.getElementById("nav-icon");

function toggleMobileMenu() {
    const dropdownMenu = document.getElementById("nav-dropdown");

    toggleButton.classList.toggle("expanded-button");
    dropdownMenu.classList.toggle("expanded-dropdown");
}

toggleButton.addEventListener("click", toggleMobileMenu);