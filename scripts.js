document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            console.log("Hamburger menu clicked!");
            navLinks.classList.toggle('open'); // Add/remove 'open' class
        });
    } else {
        console.error("Error: Could not find 'hamburger-menu' or 'nav-links' in the DOM.");
    }
});
