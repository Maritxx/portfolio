const toggleButton = document.getElementById("nav-icon");

function toggleMobileMenu() {
    const dropdownMenu = document.getElementById("nav-dropdown");

    toggleButton.classList.toggle("expanded-button");
    dropdownMenu.classList.toggle("expanded-dropdown");

    if (toggleButton.classList.contains("expanded-button")) {
        toggleButton.setAttribute("aria-expanded", true);
    } else {
        toggleButton.setAttribute("aria-expanded", false)
    }
}

const navButtons = Array.from(document.getElementsByClassName("button__nav"));
navButtons.forEach((button) => {
    button.addEventListener("click", toggleMobileMenu);
})

toggleButton.addEventListener("click", toggleMobileMenu);


function submitContactForm() {
    const visitorName = document.getElementById("visitorName").value;
    const visitorEmail = document.getElementById("visitorEmail").value;
    const visitorMessage = document.getElementById("visitorMessage").value;

    const submitMessage = document.getElementById("form-submit__message");

    if (visitorName && visitorEmail && visitorMessage) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            submitMessage.innerHTML = "Message sent successfully!";
        }

    xhttp.open("POST", "contact-form-submit.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`name=${visitorName}&email=${visitorEmail}&message=${visitorMessage}`);

    document.getElementById("visitorName").value = "";
    document.getElementById("visitorEmail").value = "";
    document.getElementById("visitorMessage").value = "";
    } else {
        submitMessage.innerHTML = "Please make sure to fill in all the required fields!";
    }
}

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitContactForm);
